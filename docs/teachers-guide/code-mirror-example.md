---
hide:
  toc
---
# CodeMirror Python Editor

The standard Skulpt labs use a plain `<textarea>` for code entry — intentionally
minimal so that chapters 1–18 stay simple to deploy and share.
For longer programs (20+ lines), a proper code editor with **line numbers** and
**syntax highlighting** makes a meaningful difference: when Skulpt reports
`NameError on line 27`, students can jump directly to the problem instead
of counting lines manually.

This page is a self-contained proof-of-concept.
It loads **CodeMirror 5** from a CDN and wires it to Skulpt — all inside this
single Markdown file, with no changes to shared CSS, JavaScript, or `mkdocs.yml`.

## What CodeMirror Adds

| Feature | Plain `textarea` | CodeMirror |
|---|---|---|
| Line numbers | no | yes |
| Syntax highlighting | no | yes |
| Auto-indent on Enter | no | yes |
| Tab → 4 spaces | manual | built-in |
| Bracket matching | no | yes |

## Live Demo — Fractal Tree

The program below is 37 lines.
Without line numbers, `NameError on line 27` sends students scanning.
With line numbers, they find the problem immediately.

Click **Run** to grow the tree, then try editing `depth` (currently `6`)
or the trunk length (currently `80`).

<!-- Skulpt runtime (same CDN used by all Skulpt labs in this textbook) -->
<script src="https://skulpt.org/js/skulpt.min.js" type="text/javascript"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js" type="text/javascript"></script>

<!-- CodeMirror 5: editor core, Python language mode, Dracula dark theme -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/dracula.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>

<style>
  #cm-lab { margin: 1rem 0; }
  #cm-layout {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  #cm-editor-wrap { flex: 1; min-width: 300px; }
  .CodeMirror {
    height: auto;
    min-height: 420px;
    font-size: 14px;
    border-radius: 4px;
    line-height: 1.6;
  }
  .CodeMirror-scroll { min-height: 420px; }
  #cm-turtle {
    width: 400px;
    height: 400px;
    border: 1px solid #555;
    border-radius: 4px;
    flex-shrink: 0;
    background: #fff;
  }
  #cm-controls { margin: 8px 0; display: flex; gap: 8px; }
  #cm-controls button {
    padding: 6px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
  }
  #cm-run-btn   { background: #4CAF50; color: white; }
  #cm-run-btn:hover { background: #45a049; }
  #cm-reset-btn { background: #888; color: white; }
  #cm-reset-btn:hover { background: #666; }
  #cm-output {
    font-family: monospace;
    font-size: 13px;
    min-height: 24px;
    padding: 4px 8px;
    background: #282a36;
    color: #f8f8f2;
    border-radius: 4px;
    margin-top: 8px;
    white-space: pre-wrap;
  }
  .cm-err { color: #ff5555; }
</style>

<div id="cm-lab">
  <div id="cm-layout">
    <div id="cm-editor-wrap">
      <div id="cm-editor"></div>
      <div id="cm-controls">
        <button id="cm-run-btn"   onclick="runCmLab()">&#9654; Run</button>
        <button id="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
      </div>
      <div id="cm-output"></div>
    </div>
    <div id="cm-turtle"></div>
  </div>
</div>

<script>
// Store the original code as an array of strings (avoids backtick escaping issues).
var _cmLines = [
  'import turtle',
  '',
  '# Create the drawing turtle',
  't = turtle.Turtle()',
  't.speed(0)',
  't.hideturtle()',
  't.left(90)  # Point upward',
  '',
  'def tree(branch_len, depth):',
  '    """Draw one branch of a fractal tree, then recurse."""',
  '    if branch_len < 5:',
  '        return  # Base case — too short to continue',
  '',
  '    # Choose color and thickness based on depth',
  '    if depth <= 2:',
  '        t.pencolor("lime green")',
  '        t.pensize(1)',
  '    elif depth <= 4:',
  '        t.pencolor("saddlebrown")',
  '        t.pensize(2)',
  '    else:',
  '        t.pencolor("saddlebrown")',
  '        t.pensize(5)',
  '',
  '    t.forward(branch_len)       # Draw this branch segment',
  '',
  '    t.left(25)',
  '    tree(branch_len * 0.7, depth - 1)  # Left sub-branch',
  '',
  '    t.right(50)',
  '    tree(branch_len * 0.7, depth - 1)  # Right sub-branch',
  '',
  '    t.left(25)',
  '    t.backward(branch_len)      # Return to fork point',
  '',
  '# Grow the tree! Try changing 80 (trunk length) or 6 (depth)',
  'tree(80, 6)'
];
var _cmOriginalCode = _cmLines.join('\n');

var cmEditor = CodeMirror(document.getElementById('cm-editor'), {
  value:          _cmOriginalCode,
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

function _esc(text) {
  return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function runCmLab() {
  var code   = cmEditor.getValue();
  var output = document.getElementById('cm-output');
  var target = document.getElementById('cm-turtle');

  target.innerHTML = '';
  output.innerHTML = '';

  Sk.configure({
    output: function(text) { output.innerHTML += _esc(text); },
    read: function(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined)
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles['files'][x];
    },
    __future__:    Sk.python3,
    killableWhile: true,
    killableFor:   true,
  });

  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'cm-turtle';
  Sk.TurtleGraphics.width  = 400;
  Sk.TurtleGraphics.height = 400;

  Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody('<stdin>', false, code, true);
  }).catch(function(err) {
    output.innerHTML += '<span class="cm-err">' + _esc(err.toString()) + '</span>';
  });
}

function resetCmLab() {
  cmEditor.setValue(_cmOriginalCode);
  document.getElementById('cm-turtle').innerHTML = '';
  document.getElementById('cm-output').innerHTML = '';
}
</script>

---

## Copying This Into Your Own Page

Paste these five blocks into any Markdown page to get a CodeMirror + Skulpt lab.
Replace the Python code in `_cmLines` with your own program.

This page is a standalone proof-of-concept: `runCmLab` and `resetCmLab` are
defined **inline** and read from `cmEditor.getValue()`. The production labs
throughout the textbook use the shared `js/codemirror-lab.js` instead, which
handles multiple labs per page via a suffix registry (`initCmLab`) and adds
a Run ⇄ Pause button: while a program runs, clicking **Pause** freezes the
turtle drawing (handy for discussion or screenshots) and **Resume** continues
it. If the code is edited while paused, the button changes to **Run New
Code** and starts a fresh run with the new code instead of resuming the old
one. **Reset** stops a running program. See
[The Run ⇄ Pause Button](run-pause-buttons.md) for the full behavior table
and the design rationale. The minimal inline version below does not include
the pause feature.

```html
<!-- 1. Skulpt runtime -->
<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<!-- 2. CodeMirror 5 (editor core + Python mode + Dracula theme) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/dracula.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>

<!-- 3. Layout styles -->
<style>
  #cm-lab { margin: 1rem 0; }
  #cm-layout { display: flex; gap: 12px; align-items: flex-start; flex-wrap: wrap; }
  #cm-editor-wrap { flex: 1; min-width: 300px; }
  .CodeMirror { height: auto; min-height: 420px; font-size: 14px; border-radius: 4px; line-height: 1.6; }
  .CodeMirror-scroll { min-height: 420px; }
  #cm-turtle { width: 400px; height: 400px; border: 1px solid #555; border-radius: 4px; flex-shrink: 0; }
  #cm-controls { margin: 8px 0; display: flex; gap: 8px; }
  #cm-controls button { padding: 6px 20px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 600; }
  #cm-run-btn   { background: #4CAF50; color: white; }
  #cm-run-btn:hover { background: #45a049; }
  #cm-reset-btn { background: #888; color: white; }
  #cm-reset-btn:hover { background: #666; }
  #cm-output { font-family: monospace; font-size: 13px; padding: 4px 8px; background: #282a36;
               color: #f8f8f2; border-radius: 4px; margin-top: 8px; white-space: pre-wrap; }
  .cm-err { color: #ff5555; }
</style>

<!-- 4. Editor structure -->
<div id="cm-lab">
  <div id="cm-layout">
    <div id="cm-editor-wrap">
      <div id="cm-editor"></div>
      <div id="cm-controls">
        <button id="cm-run-btn"   onclick="runCmLab()">&#9654; Run</button>
        <button id="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
      </div>
      <div id="cm-output"></div>
    </div>
    <div id="cm-turtle"></div>
  </div>
</div>

<!-- 5. Editor initialisation and run/reset logic -->
<script>
var _cmLines = [
  'import turtle',
  '# YOUR PYTHON PROGRAM HERE',
  't = turtle.Turtle()',
  't.forward(100)'
];
var _cmOriginalCode = _cmLines.join('\n');

var cmEditor = CodeMirror(document.getElementById('cm-editor'), {
  value:          _cmOriginalCode,
  mode:           'python',
  theme:          'dracula',
  lineNumbers:    true,
  indentUnit:     4,
  tabSize:        4,
  indentWithTabs: false,
  extraKeys: { Tab: function(cm) { cm.replaceSelection('    ', 'end'); } }
});

function _esc(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function runCmLab() {
  var code   = cmEditor.getValue();
  var output = document.getElementById('cm-output');
  var target = document.getElementById('cm-turtle');
  target.innerHTML = '';
  output.innerHTML = '';

  Sk.configure({
    output: function(text) { output.innerHTML += _esc(text); },
    read: function(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined)
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles['files'][x];
    },
    __future__: Sk.python3,
    killableWhile: true,
    killableFor:   true,
  });

  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'cm-turtle';
  Sk.TurtleGraphics.width  = 400;
  Sk.TurtleGraphics.height = 400;

  Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody('<stdin>', false, code, true);
  }).catch(function(err) {
    output.innerHTML += '<span class="cm-err">' + _esc(err.toString()) + '</span>';
  });
}

function resetCmLab() {
  cmEditor.setValue(_cmOriginalCode);
  document.getElementById('cm-turtle').innerHTML = '';
  document.getElementById('cm-output').innerHTML = '';
}
</script>
```

---

## When to Use CodeMirror vs Plain Textarea

| Use the plain `textarea` when… | Use CodeMirror when… |
|---|---|
| Programs are 5–15 lines | Programs are 20+ lines |
| Focus is on one new concept | Multiple functions or nested loops |
| You are writing a standard textbook lab | Teachers will project and navigate the code |
| Simplicity of page authoring matters | Students will read error messages with line numbers |

The standard Skulpt labs in chapters 1–18 stay with `<textarea>` — intentionally.
CodeMirror is worth the extra setup for longer demonstrations where navigating to
a specific line number is part of the lesson.
