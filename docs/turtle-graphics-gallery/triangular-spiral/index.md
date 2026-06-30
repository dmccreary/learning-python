---
hide:
    - toc
---
# Triangular Spiral

By the end of this lab you'll be able to:

- Use `right(120)` to create a triangular spiral with sharp equilateral corners
- Color each third of the spiral a different warm color using integer division
- Understand how `i // n` groups segments into color bands rather than cycling segment-by-segment

Three warm color bands — red, orange, and gold — sweep outward along the arms of a tight triangular spiral. Change one number and the entire character of the shape changes.

!!! mascot-welcome "Welcome to the Triangular Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    We've seen square spirals (90°) and hexagonal spirals (60°). Now push the angle further —
    120° gives the sharpest corners yet. Let's code it together!

## How It Works

An equilateral triangle has interior angles of 60° and **exterior angles of 120°** (360° ÷ 3 = 120°). Turning 120° at every step gives the spiral triangular corners.

For coloring, `(i // 60) % 3` divides the 180-step loop into three equal thirds and picks a color for each third. Integer division (`//`) groups segments together instead of cycling one-by-one.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['crimson', 'darkorange', 'gold']
step = 2

for i in range(180):
    monty.color(colors[(i // 60) % 3])
    monty.forward(step)
    monty.right(120)
    step += 1.5
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The square spiral had 4 sides per revolution and the hexagonal had 6.
    How many sides per revolution does the triangular spiral have?
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

colors = ['crimson', 'darkorange', 'gold']
step = 2

for i in range(180):
    monty.color(colors[(i // 60) % 3])
    monty.forward(step)
    monty.right(120)
    step += 1.5`);
</script>

**3 sides** per revolution — one per 120° turn. The spiral makes crisp triangular corners. Were you right?

## How It Works

`(i // 60) % 3` works like this: for the first 60 steps, `i // 60 = 0`, so color 0 (crimson). For steps 60–119, `i // 60 = 1`, so color 1 (orange). For steps 120–179, color 2 (gold). This creates solid bands along the spiral arms rather than segment-by-segment flickering.

## Explanation Table

| Line | What it does |
|------|-------------|
| `colors = [...]` | Three warm hues — one per third of the loop |
| `(i // 60) % 3` | Groups 60 segments into each color band |
| `monty.right(120)` | Triangular corner — 360° ÷ 3 = 120° |
| `step += 1.5` | Grow the step each segment |
| `range(180)` | 180 steps = 60 full "triangles" (3 sides each) |

## Learning Check

!!! mascot-thinking "Your Turn — Switch to Per-Segment Colors"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `(i // 60) % 3` to `i % 3`. Now each individual segment cycles through
    the three colors. Predict how it will look different — then run it to check!

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

colors = ['crimson', 'darkorange', 'gold']
step = 2

for i in range(180):
    monty.color(colors[i % 3])
    monty.forward(step)
    monty.right(120)
    step += 1.5`);
</script>

With `i % 3`, each side of each tiny triangle gets its own color — creating a striped, segment-by-segment pattern. The `i // 60` version gives broader color bands across entire spiral arms.

## Experiments

1. **Try 4 colors with `i // 45`.** Use `['red','orange','gold','yellow']` and `(i // 45) % 4`. You'll know it worked when the spiral has four distinct color regions.

2. **Make it spin the other way.** Change `right(120)` to `left(120)`. You'll know it worked when the spiral winds in the opposite direction.

3. **Double the growth speed.** Change `step += 1.5` to `step += 3`. The gaps between arms widen dramatically. You'll know it worked when only 2–3 revolutions fit on screen.

4. **Start from a large step.** Change `step = 2` to `step = 40`. The spiral begins already expanded. You'll know it worked when the first few loops are already wide.

!!! mascot-celebration "Sharp Thinking!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You discovered two ways to color a spiral: `i % n` for segment-by-segment patterns,
    and `i // n` for broad color bands. The same trick works in any loop!
    Up next: **Inward Collapsing Spiral** — spiraling to a point instead of growing outward.
