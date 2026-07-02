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
 * Clicking Reset stops a running or paused program.
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
 */

var _cmInstances = {};   // suffix → CodeMirror instance
var _cmDefaults  = {};   // suffix → original code string
var _cmRunState  = {};   // suffix → {running, paused, stopped, resume, btn}

var CM_LABEL_RUN    = '&#9654; Run';
var CM_LABEL_PAUSE  = '&#10074;&#10074; Pause';
var CM_LABEL_RESUME = '&#9654; Resume';

function initCmLab(suffix, code) {
  var el = document.getElementById('cm-editor' + suffix);
  if (!el) return;
  _cmDefaults[suffix] = code;
  _cmRunState[suffix] = {
    running: false, paused: false, stopped: false, resume: null,
    btn: _cmFindRunBtn(suffix, el)
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

function runCmLab(suffix) {
  suffix = suffix || '';
  var state  = _cmRunState[suffix];
  var cm     = _cmInstances[suffix];
  if (!cm || !state) return;

  if (state.running) {
    if (state.paused) {
      state.paused = false;
      _cmSetRunLabel(state, CM_LABEL_PAUSE);
      var resume = state.resume;
      state.resume = null;
      if (resume) resume();
    } else {
      state.paused = true;
      _cmSetRunLabel(state, CM_LABEL_RESUME);
    }
    return;
  }

  var output = document.getElementById('cm-output'  + suffix);
  var target = document.getElementById('cm-turtle'  + suffix);

  if (target) target.innerHTML = '';
  if (output) output.innerHTML = '';

  state.running = true;
  state.paused  = false;
  state.stopped = false;
  state.resume  = null;
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
    return Sk.importMainWithBody('<stdin>', false, cm.getValue(), true);
  }, {
    '*': function(susp) {
      if (state.stopped) throw new Error('Program stopped');
      if (!state.paused) return;   // undefined → Skulpt's default handling

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
        if (!state.paused) {
          // Un-paused (or reset) while the command was finishing.
          if (state.stopped) throw new Error('Program stopped');
          return susp.resume();
        }
        return new Promise(function(resolve, reject) {
          state.resume = function() {
            if (state.stopped) { reject(new Error('Program stopped')); return; }
            try { resolve(susp.resume()); } catch (e) { reject(e); }
          };
        });
      });
    }
  }).catch(function(err) {
    if (state.stopped) return;   // stopped via Reset — not an error
    if (output)
      output.innerHTML += '<span class="cm-error">' + _cmEsc(err.toString()) + '</span>';
  }).then(function() {
    state.running = false;
    state.paused  = false;
    state.resume  = null;
    _cmSetRunLabel(state, CM_LABEL_RUN);
  });
}

function resetCmLab(suffix) {
  suffix = suffix || '';
  var cm    = _cmInstances[suffix];
  var state = _cmRunState[suffix];
  if (!cm) return;
  if (state && state.running) {
    state.stopped = true;
    state.paused  = false;
    var resume = state.resume;
    state.resume = null;
    if (resume) resume();
  }
  cm.setValue(_cmDefaults[suffix]);
  var output = document.getElementById('cm-output' + suffix);
  var target = document.getElementById('cm-turtle' + suffix);
  if (output) output.innerHTML = '';
  if (target) target.innerHTML = '';
}

function _cmEsc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
