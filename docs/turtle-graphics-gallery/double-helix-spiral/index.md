---
hide:
    - toc
---
# Double Helix Spiral

By the end of this lab you'll be able to:

- Draw two interleaved spirals from a single loop by alternating between two color assignments
- Understand phase offset — starting two spirals 180° apart so they never overlap
- See how one loop can produce two independent patterns by checking `i % 2`

Two spirals wind outward together — one red, one blue — offset exactly half a revolution apart. They expand at the same rate so they stay interleaved forever without ever crossing.

!!! mascot-welcome "Welcome to the Double Helix!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    DNA's famous double helix is two strands wound together with a half-turn offset.
    This lab builds the same idea with turtle graphics — two spirals in one loop!
    Let's code it together!

## How It Works

The key insight: two square spirals that start 180° apart and grow at the same rate will always stay exactly half a revolution apart. We draw them by alternating colors each step using `i % 2`:

- Even steps (0, 2, 4 …) → red spiral
- Odd steps (1, 3, 5 …) → blue spiral

Because consecutive even steps share the same spiral arm, the two patterns weave together.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

step = 2

for i in range(400):
    if i % 2 == 0:
        monty.color('crimson')
    else:
        monty.color('royalblue')
    monty.forward(step)
    monty.right(91)
    if i % 2 == 0:
        step += 1
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Step grows only on even iterations (`i % 2 == 0`).
    Will the two spirals stay the same size, or will one grow faster than the other?
    Make your guess — then click Run to find out!

## Try It Now

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
monty.speed(0)
monty.hideturtle()

step = 2

for i in range(400):
    if i % 2 == 0:
        monty.color('crimson')
    else:
        monty.color('royalblue')
    monty.forward(step)
    monty.right(91)
    if i % 2 == 0:
        step += 1`);
</script>

They stay the **same size** — growing at exactly the same rate because `step` increases on every even step, and both spirals advance by that same `step` value. Were you right?

## How It Works

`right(91)` — slightly past 90° — makes the path drift so spiral loops don't sit exactly on top of each other. Each loop shifts by 1° per revolution, giving the interleaved arms their visible separation.

`step` grows only on even iterations, but since odd iterations immediately follow and use the same `step`, both spirals advance by the same amount. The step only increments once per pair.

## Explanation Table

| Line | What it does |
|------|-------------|
| `i % 2 == 0` | Selects red on even steps, blue on odd |
| `monty.right(91)` | Slightly drifting 90° turn — keeps loops separated |
| `if i % 2 == 0: step += 1` | Grow step once per pair of segments |
| `range(400)` | 400 steps = 200 red + 200 blue segments |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Third Spiral"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Can you modify the code to draw **three** interleaved spirals in red, blue, and green?
    Use `i % 3` instead of `i % 2` and add a third color condition.

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
monty.speed(0)
monty.hideturtle()

colors = ['crimson', 'royalblue', 'forestgreen']
step = 2

for i in range(600):
    monty.color(colors[i % 3])
    monty.forward(step)
    monty.right(91)
    if i % 3 == 0:
        step += 1`);
</script>

Using `i % 3` selects one of three colors in rotation. The `step` grows once every three steps — slower than the double helix, so the loops pack slightly tighter.

## Experiments

1. **Change the drift.** Try `right(92)` or `right(89)`. More drift means loops shift more per revolution. You'll know it worked when the interleaving gaps change size.

2. **Increase the step growth.** Change `step += 1` to `step += 2`. The spiral expands faster and fewer revolutions fit. You'll know it worked when the arms are spaced further apart.

3. **Use complementary colors.** Try `'darkorange'` and `'dodgerblue'` — colors opposite on the color wheel. You'll know it worked when the contrast between arms is even stronger.

4. **Draw just one spiral.** Remove the color alternation and use a single color. You'll know it worked when the double-strand pattern collapses back to a single spiral.

!!! mascot-celebration "Double the Fun!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built two spirals in one loop using a single `i % 2` check — the same trick
    that's used in animation to alternate between two objects every frame!
    Up next: **Fibonacci Spiral** — the most famous spiral in nature.
