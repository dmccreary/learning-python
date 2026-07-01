# Complete Lab Template

This is a filled-in example showing every section in order for a drawing lab (turtle graphics).
For text-only labs, use `class="cm-lab cm-text-only"` on the outer `div` and omit `import turtle`.

---

```markdown
# [Lab Title — e.g., "Drawing a Pentagon"]

By the end of this lesson you'll be able to:

- [Objective 1 — concrete verb, student perspective]
- [Objective 2]
- [Objective 3 — max 3; split the lab if you need more]

[1–2 sentence intro setting up what the student will build and why it's interesting.]

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    [1–3 sentences from Monty. Must include "Let's code it together!"]

## [Concept Name — e.g., "Regular Polygons and Angles"]

[Short paragraph introducing the concept in plain English BEFORE naming it technically.
Bold the new term on first use and define it with an analogy.]

[Optional Scratch Bridge if a Scratch analogue exists:]

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used **"[Scratch block name]"**.
    In Python, `[python_command()]` does exactly the same thing — [one-sentence explanation].

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')

[Working program — as short as possible for this one concept]
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    [One specific, answerable prediction question about the code above.]
    Make your guess — then click Run to find out!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

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
initCmLab('', `import turtle
monty = turtle.Turtle()
monty.shape('turtle')

[EXACT SAME CODE AS SAMPLE CODE BLOCK ABOVE]`);
</script>

Were you right? [One sentence closing the prediction loop — state what actually happened.]

[For early-chapter / beginner labs only, add this error note:]
**If you see a red error message:** Check your spelling — Python is case-sensitive,
so `Forward(100)` won't work but `forward(100)` will.
Make sure every line inside a loop is indented by exactly 4 spaces.

## How It Works

[Prose explanation of the key concept. Use the bolded term again to reinforce it.
Explain what each block of code does at a conceptual level — not line-by-line (that's the table).]

[Optional mascot-tip for a shortcut, OR mascot-encourage for a hard idea:]

!!! mascot-tip "Helpful Shortcut"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    [One helpful hint. 1–2 sentences.]

## Explanation Table

| Line | What it does |
|------|-------------|
| `import turtle` | Loads the turtle graphics library |
| `monty = turtle.Turtle()` | Creates a turtle named `monty` |
| `monty.shape('turtle')` | Shows a turtle icon instead of an arrow |
| [key line] | [plain-English explanation] |
| [key line] | [plain-English explanation] |

[Optional mascot-warning for the most likely mistake in this lab:]

!!! mascot-warning "Common Mistake"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    [Describe the mistake and its symptom. 1–2 sentences.]

## Learning Check

!!! mascot-thinking "Your Turn — [Task Description]"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    [Clear task: "Add one line so Monty draws X" OR use mascot-warning for find-the-bug.]

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
initCmLab('-2', `import turtle
monty = turtle.Turtle()
monty.shape('turtle')

[INCOMPLETE OR BUGGY PROGRAM — student must add or fix one thing]`);
</script>

## Experiments

Try these changes to the code above. Predict what will happen first, then run it to check!

1. [Specific, simple change.] **You'll know it worked when** [observable result].
2. [Slightly harder change.] **You'll know it worked when** [observable result].
3. [Third change.] **You'll know it worked when** [observable result].
4. [Optional harder challenge.] **You'll know it worked when** [observable result].
5. [Optional open-ended creative challenge — no single right answer.]

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    [1–2 sentences celebrating completion and hinting at what comes next.]
    Let's code it together!
```

---

## Index Card Entry (for docs/python-labs/index.md)

Append inside the `<div class="grid cards" markdown>` block:

```markdown
-   **[Lab Title]**

    ---

    [One-sentence description of what the student builds or learns.]

    ![Screenshot](img/[slug].png)

    [:octicons-arrow-right-24: Open Lab]([slug].md)
```

If `docs/python-labs/index.md` doesn't have a grid yet, create it:

```markdown
# Python Labs

<div class="grid cards" markdown>

-   **[Lab Title]**

    ---

    [Description.]

    ![Screenshot](img/[slug].png)

    [:octicons-arrow-right-24: Open Lab]([slug].md)

</div>
```

Screenshot note: save the lab screenshot to `docs/python-labs/img/[slug].png`. If no screenshot exists yet, omit the `![Screenshot]` line.
