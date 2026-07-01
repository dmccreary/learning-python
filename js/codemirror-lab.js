/* CodeMirror + Skulpt shared lab — init / run / reset for gallery pages.
 *
 * Each lab on a page has a suffix: '' (primary), '-2', '-3', etc.
 * Matching element IDs: cm-editor, cm-editor-2, cm-output, cm-turtle, …
 *
 * Per-page usage:
 *   initCmLab('',   codeString);   // primary lab
 *   initCmLab('-2', codeString);   // second lab
 */

var _cmInstances = {};   // suffix → CodeMirror instance
var _cmDefaults  = {};   // suffix → original code string

function initCmLab(suffix, code) {
  var el = document.getElementById('cm-editor' + suffix);
  if (!el) return;
  _cmDefaults[suffix] = code;
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

function runCmLab(suffix) {
  suffix = suffix || '';
  var cm     = _cmInstances[suffix];
  var output = document.getElementById('cm-output'  + suffix);
  var target = document.getElementById('cm-turtle'  + suffix);
  if (!cm) return;

  if (target) target.innerHTML = '';
  if (output) output.innerHTML = '';

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
  }).catch(function(err) {
    if (output)
      output.innerHTML += '<span class="cm-error">' + _cmEsc(err.toString()) + '</span>';
  });
}

function resetCmLab(suffix) {
  suffix = suffix || '';
  var cm = _cmInstances[suffix];
  if (!cm) return;
  cm.setValue(_cmDefaults[suffix]);
  var output = document.getElementById('cm-output' + suffix);
  var target = document.getElementById('cm-turtle' + suffix);
  if (output) output.innerHTML = '';
  if (target) target.innerHTML = '';
}

function _cmEsc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
