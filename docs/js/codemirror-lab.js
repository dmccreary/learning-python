/* CodeMirror + Skulpt shared lab — init / run / reset for gallery pages.
 *
 * Each lab on a page has a suffix: '' (primary), '-2', '-3', etc.
 * Matching element IDs: cm-editor, cm-editor-2, cm-output, cm-turtle, …
 *
 * Per-page usage:
 *   initCmLab('',   codeString);   // primary lab
 *   initCmLab('-2', codeString);   // second lab
 *
 * Run ⇄ Pause: while a program runs, the Run button becomes "Pause".
 * Clicking it suspends Skulpt at the next checkpoint so students can study
 * the turtle drawing or take a screenshot; the button then reads "Resume".
 * If the student edits the code while paused, the label changes to
 * "Run New Code" and clicking discards the paused program and starts a
 * fresh run with the new code instead of resuming the old one (undoing
 * the edits flips the label back to "Resume"). Clicking Reset stops a
 * running or paused program.
 *
 * The run button is found automatically — by id ("cm-run-btn" + suffix) if
 * one is present, otherwise by class ".cm-run-btn" inside the lab's
 * ".cm-editor-wrap". No page markup changes are required.
 *
 * How pausing works: asyncToPromise accepts a '*' suspension handler that
 * is consulted at every Skulpt checkpoint (each turtle command, plus every
 * loop iteration thanks to killableWhile/killableFor). When paused we let
 * the in-flight command finish, then return a Promise that resolves with
 * susp.resume() only after the student clicks Resume.
 *
 * Each run gets its own `run` object ({code, paused, stopped, resume})
 * captured by that run's closures, so an abandoned run winding down can
 * never clobber the state or button label of the run that replaced it.
 */

var _cmInstances = {};   // suffix → CodeMirror instance
var _cmDefaults  = {};   // suffix → original code string
var _cmRunState  = {};   // suffix → {btn, currentRun}

var CM_LABEL_RUN     = '&#9654; Run';
var CM_LABEL_PAUSE   = '&#10074;&#10074; Pause';
var CM_LABEL_RESUME  = '&#9654; Resume';
var CM_LABEL_RUN_NEW = '&#9654; Run New Code';

function initCmLab(suffix, code) {
  var el = document.getElementById('cm-editor' + suffix);
  if (!el) return;
  _cmDefaults[suffix] = code;
  _cmRunState[suffix] = {
    btn: _cmFindRunBtn(suffix, el),
    currentRun: null
  };
  _cmInstances[suffix] = CodeMirror(el, {
    value:          code,
    mode:           'python',
    theme:          'dracula',
    lineNumbers:    true,
    indentUnit:     4,
    tabSize:        4,
    indentWithTabs: false,
    lineWrapping:   false,
    extraKeys: {
      Tab: function(cm) { cm.replaceSelection('    ', 'end'); }
    }
  });
  var state = _cmRunState[suffix];
  // While paused, the button label tracks whether the editor still matches
  // the paused program: "Resume" if untouched, "Run New Code" if edited.
  _cmInstances[suffix].on('change', function(cmInst) {
    var run = state.currentRun;
    if (run && run.paused) {
      _cmSetRunLabel(state,
        cmInst.getValue() === run.code ? CM_LABEL_RESUME : CM_LABEL_RUN_NEW);
    }
  });
}

function _cmFindRunBtn(suffix, editorEl) {
  var btn = document.getElementById('cm-run-btn' + suffix);
  if (btn) return btn;
  var wrap = editorEl.closest ? editorEl.closest('.cm-editor-wrap') : null;
  return wrap ? wrap.querySelector('.cm-run-btn') : null;
}

function _cmSetRunLabel(state, html) {
  if (state.btn) state.btn.innerHTML = html;
}

function _cmStopRun(run) {
  run.stopped = true;
  run.paused  = false;
  var resume = run.resume;
  run.resume = null;
  if (resume) resume();
}

function runCmLab(suffix) {
  suffix = suffix || '';
  var state = _cmRunState[suffix];
  var cm    = _cmInstances[suffix];
  if (!cm || !state) return;

  var run = state.currentRun;
  if (run) {
    if (!run.paused) {
      run.paused = true;
      _cmSetRunLabel(state,
        cm.getValue() === run.code ? CM_LABEL_RESUME : CM_LABEL_RUN_NEW);
      return;
    }
    if (cm.getValue() === run.code) {
      run.paused = false;
      _cmSetRunLabel(state, CM_LABEL_PAUSE);
      var resume = run.resume;
      run.resume = null;
      if (resume) resume();
      return;
    }
    // Code was edited while paused — abandon the paused run and fall
    // through to start a fresh run with the new code.
    _cmStopRun(run);
  }

  var output = document.getElementById('cm-output' + suffix);
  var target = document.getElementById('cm-turtle' + suffix);

  if (target) target.innerHTML = '';
  if (output) output.innerHTML = '';

  run = { code: cm.getValue(), paused: false, stopped: false, resume: null };
  state.currentRun = run;
  _cmSetRunLabel(state, CM_LABEL_PAUSE);

  Sk.configure({
    output: function(text) {
      if (output) output.innerHTML += _cmEsc(text);
    },
    read: function(x) {
      if (!Sk.builtinFiles || !Sk.builtinFiles['files'][x])
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles['files'][x];
    },
    __future__:    Sk.python3,
    killableWhile: true,
    killableFor:   true,
  });

  var tid = 'cm-turtle' + suffix;
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = tid;
  Sk.TurtleGraphics.width  = 400;
  Sk.TurtleGraphics.height = 400;

  Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody('<stdin>', false, run.code, true);
  }, {
    '*': function(susp) {
      if (run.stopped) throw new Error('Program stopped');
      if (!run.paused) return;   // undefined → Skulpt's default handling

      // Let the in-flight command finish (a Sk.promise suspension resumes
      // with its promise's value), then hold until Resume is clicked.
      var settle;
      if (susp.data['type'] === 'Sk.promise') {
        settle = susp.data['promise'].then(
          function(v) { susp.data['result'] = v; },
          function(e) { susp.data['error']  = e; }
        );
      } else {
        settle = Promise.resolve();
      }
      return settle.then(function() {
        if (!run.paused) {
          // Un-paused (or stopped) while the command was finishing.
          if (run.stopped) throw new Error('Program stopped');
          return susp.resume();
        }
        return new Promise(function(resolve, reject) {
          run.resume = function() {
            if (run.stopped) { reject(new Error('Program stopped')); return; }
            try { resolve(susp.resume()); } catch (e) { reject(e); }
          };
        });
      });
    }
  }).catch(function(err) {
    if (run.stopped) return;   // stopped via Reset or a restart — not an error
    if (output)
      output.innerHTML += '<span class="cm-error">' + _cmEsc(err.toString()) + '</span>';
  }).then(function() {
    // Only the run that still owns this lab may reset the UI — an
    // abandoned run finishing late must not clobber its replacement.
    if (state.currentRun === run) {
      state.currentRun = null;
      _cmSetRunLabel(state, CM_LABEL_RUN);
    }
  });
}

function resetCmLab(suffix) {
  suffix = suffix || '';
  var cm    = _cmInstances[suffix];
  var state = _cmRunState[suffix];
  if (!cm) return;
  if (state && state.currentRun) _cmStopRun(state.currentRun);
  cm.setValue(_cmDefaults[suffix]);
  var output = document.getElementById('cm-output' + suffix);
  var target = document.getElementById('cm-turtle' + suffix);
  if (output) output.innerHTML = '';
  if (target) target.innerHTML = '';
}

function _cmEsc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
