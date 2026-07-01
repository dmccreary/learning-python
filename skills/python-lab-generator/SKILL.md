---
name: python-lab-generator
description: "Generates a complete, student-facing Python lab page for the Beginning Python intelligent textbook. Use when the user specifies a lab topic, concept, or exercise and wants it written as a finished markdown file in docs/python-labs/ with an in-browser CodeMirror editor (line numbers, syntax highlighting) running Python via the Skulpt interpreter. Outputs two things: (1) a new docs/python-labs/SLUG.md file with interactive turtle graphics (CodeMirror editor wired to Skulpt), prediction prompts, learning checks, experiments, and Monty mascot admonitions; (2) an updated entry in docs/python-labs/index.md using MkDocs grid-cards format. Triggers: create a lab for, generate a python lab about, make a new lab, write a lab on, add a python lab."
---

# Python Lab Generator

Generates interactive Python lab pages for the Beginning Python textbook. Each lab pairs the **CodeMirror** code editor — line numbers, syntax highlighting, and auto-indent — with the **Skulpt** in-browser Python interpreter, so students read, run, and edit code without installing anything.

Before generating any lab, read `CONTENT-GENERATION-GUIDELINES.md` in the project root for the full rules. The condensed rules below are sufficient for most labs; check the guidelines for edge cases.

## Workflow

1. **Determine the lab slug and filename** — convert the lab topic to a kebab-case slug (e.g., "Drawing Spirals" → `drawing-spirals`). If the user provides a number prefix (e.g., `05-`), use it; otherwise choose a descriptive slug without a number. File: `docs/python-labs/<slug>.md`.

2. **Decide lab type** — use a **drawing lab** (turtle graphics) whenever possible. Only use a **text-only lab** when the program genuinely produces no drawing output (pure `print()`, variables, logic). Prefer turtle graphics per project philosophy.

3. **Write the lab file** — follow the [Page Structure](#page-structure) below exactly.

4. **Update index.md** — add a grid-card entry to `docs/python-labs/index.md` following the [Index Card Format](#index-card-format) below.

5. **Verify** — confirm the CodeMirror lab IDs (`cm-editor`, `cm-output`, `cm-turtle`, with `-2`… suffixes for later labs) are correct and that no mascot admonitions appear back-to-back.

## Page Structure

Every lab follows this exact section order. See `references/lab-template.md` for a complete filled-in example.

```
# Lab Title

By the end of this lesson you'll be able to:
- [1-3 concrete, observable objectives]

[1-2 sentence intro — what will the student build/see?]

!!! mascot-welcome ...       ← always first; always present
## [Concept Name]
[Intro paragraph + Scratch Bridge if applicable]
## Sample Code
[fenced python code block]
!!! mascot-thinking ...      ← prediction prompt, immediately before Try It Now
## Try It Now
[CDN scripts — ONCE per page]
[CodeMirror lab block — lab 1]
Were you right? [one sentence]
[Error note for early chapters only]
## How It Works
[Prose explanation]
## Explanation Table
| Line | What it does |
[Optional mascot-tip or mascot-warning]
## Learning Check
!!! mascot-thinking or mascot-warning ...
[CodeMirror lab block — lab 2, with -2 suffix on IDs and initCmLab]
## Experiments
[3-5 numbered items, each ending with "You'll know it worked when..."]
!!! mascot-celebration ...   ← always last; always present
```

## Mascot Admonition Format

Image path for `docs/python-labs/` files: **`../img/mascot/`** (one level deep).

```markdown
!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    1-3 sentences. Include "Let's code it together!" in welcome admonitions.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    One specific, answerable prediction question. End with "Make your guess — then click Run!"

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    Map a Scratch block to its Python equivalent.

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    Describe the buggy symptom; ask the student to find and fix it.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Celebrate completion. End with "Let's code it together!"
```

**Hard limits:** max 6 mascot admonitions per lab; never back-to-back; exactly one `mascot-welcome` (first) and one `mascot-celebration` (last).

## CodeMirror + Skulpt HTML Templates

The `<script>` tags appear **once per page**, immediately before the first lab block.
The last one, `codemirror-lab.js`, provides `initCmLab`, `runCmLab`, and `resetCmLab`.
For `docs/python-labs/` files (one level deep) use `../js/codemirror-lab.js`:

```html
<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../js/codemirror-lab.js"></script>
```

### Drawing Lab (turtle programs — use by default)

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
initCmLab('', `PYTHON CODE HERE`);
</script>
```

### Text-Only Lab (print/variables/logic — no turtle)

Add `cm-text-only` to the lab's class list. The `cm-turtle` div must still be present.

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
initCmLab('', `PYTHON CODE HERE`);
</script>
```

### Second (and Later) Labs — Suffix IDs

Every lab after the first uses a `-2`, `-3`, … suffix on the three element IDs and in
the `initCmLab` / `runCmLab` / `resetCmLab` calls:

```html
<div class="cm-lab">
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
initCmLab('-2', `PYTHON CODE HERE`);
</script>
```

**Critical rules:**
- Do **not** set a height on the editor — CodeMirror auto-sizes it
- Do **not** add inline `<style>` or `<link>` tags — the CodeMirror CSS loads globally
- Do **not** add the CDN `<script>` tags a second time
- The Python code inside the `initCmLab` template literal must match the Sample Code fenced block exactly
- A literal backtick or backslash in the Python must be backslash-escaped (rare in beginner labs)

## Turtle Code Conventions

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')
# use monty.forward(), monty.right(), monty.left(), etc.
# use monty.penup() / monty.pendown() for repositioning
# use monty.color(), monty.begin_fill(), monty.end_fill()
# use monty.speed(n) where 1=slow, 10=fast
# use monty.hideturtle() at end if desired
# use monty.write('text', font=("Arial", 16, "normal")) for labels
```

Keep programs short: 4–8 lines for introductory labs, 8–20 lines for mid-course labs.

## Index Card Format

`docs/python-labs/index.md` uses MkDocs Material grid cards. Each new lab gets one card appended to the grid. If the grid div doesn't exist yet, create it.

```markdown
# Python Labs

<div class="grid cards" markdown>

-   **Lab Title**

    ---

    Brief one-sentence description of what the student will build or learn.

    ![Screenshot](img/<slug>.png)

    [:octicons-arrow-right-24: Open Lab](<slug>.md)

</div>
```

For the screenshot path: use `img/<slug>.png`. Note to the user that the screenshot should be captured manually (or via the `verify` skill) and saved to `docs/python-labs/img/<slug>.png`. If no screenshot exists yet, omit the `![Screenshot]` line from the card.

## Content Rules Quick Reference

See `references/content-rules.md` for the full ruleset. Key rules:

| Rule | Detail |
|------|--------|
| Turtle by default | Use `import turtle` unless the concept genuinely requires text-only output |
| One concept per lab | Each Skulpt demo introduces exactly one new command or idea |
| Prediction prompt | `mascot-thinking` goes immediately above the `## Try It Now` section |
| Learning check | Second Skulpt lab (`-2` suffix) with incomplete or buggy code |
| Experiments | 3–5 items; each must include "You'll know it worked when…" |
| Scratch Bridge | Include for any Scratch analogue (Chapters 1–14 concepts) |
| Error note | Add "If you see a red error message" note only for early-chapter labs |
| Mascot cap | Max 6 admonitions; never consecutive; welcome first, celebration last |
| Image paths | `../img/mascot/` for python-labs files (one level deep) |
| No `<img>` tags | Always `![alt](path){ class="mascot-admonition-img" }` |
| No fixed height | Never set a height on the editor — CodeMirror auto-sizes it |
| No inline `<style>` | All styles come from codemirror-lab.css via extra_css |
