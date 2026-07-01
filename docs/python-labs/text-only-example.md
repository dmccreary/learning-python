---
title: Text-Only Skulpt Example
description: Demonstrates the text-only Skulpt lab layout where the drawing area is hidden and the editor fills the full content width.
---

# Text-Only Skulpt Example

This page demonstrates the **text-only** Skulpt lab template.
No turtle drawing area appears — the code editor and output panel fill the entire content width.
Use this template for programs that only use `print()` and text output, with no turtle graphics.

## How It Works

Add `class="skulpt-text-only"` to the outer `skulpt-lab` div.
The canvas container is hidden by CSS, but the `turtle-target` element remains in the DOM
so `runSkulpt()` can still initialise without errors.

## Example 1 — Print Statements

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab()">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle"></div>
  </div>
</div>
<script>
initCmLab('', `name = "Python"
version = 3
print("Hello from", name, version)
print("No turtle needed!")
for i in range(1, 6):
    print(i, "squared =", i * i)`);
</script>

## Example 2 — User-Defined Function

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-2"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-2')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-2')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-2"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-2"></div>
  </div>
</div>
<script>
initCmLab('-2', `def greet(first_name, last_name):
    full_name = first_name + " " + last_name
    print("Hello,", full_name + "!")

greet("Ada", "Lovelace")
greet("Grace", "Hopper")
greet("Alan", "Turing")`);
</script>

## HTML Template

Copy this block and replace the code inside the `<textarea>` for any text-only lab:

```html
<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab()">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle"></div>
  </div>
</div>
<script>
initCmLab('', `
# your Python code here
print("Hello!")`);
</script>
```

For a second lab on the same page, use the `-2` suffix on all IDs and `runSkulpt('-2')` / `resetSkulpt('-2')` on the buttons (same convention as the drawing labs).

## Contrast: Drawing Lab Template

For programs that use turtle graphics, omit the `skulpt-text-only` class and the canvas appears as normal:

```html
<div class="cm-lab">
  <div class="cm-editor-wrap">
    <div id="cm-editor"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab()">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle"></div>
  </div>
</div>
<script>
initCmLab('', `
import turtle
t = turtle.Turtle()
t.forward(100)`);
</script>
```
