---
hide:
    - toc
---
# Hexagonal Spiral

By the end of this lab you'll be able to:

- Change one number (the turn angle) to transform a square spiral into a hexagonal one
- Color segments with a blue-to-green gradient by cycling a color list
- Understand why 60° produces hexagonal corners while 90° produces square ones

One parameter change — turning 60° instead of 90° — transforms the familiar square spiral into a graceful hexagonal one. Each segment is tinted in a cool blue-to-green gradient that cycles outward as the spiral grows.

!!! mascot-welcome "Welcome to the Hexagonal Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In the last two labs you saw a square spiral. Now we change just ONE number and watch
    the whole shape transform. Let's code it together!

## How It Works

A regular hexagon has six sides. At each corner, the turtle turns the **exterior angle** of a hexagon: `360 / 6 = 60°`. Because we also grow the step length each iteration, the path spirals outward rather than closing into a hexagon.

The color list has seven hues from deep navy through cyan to green. `i % len(colors)` maps each segment index to a color, cycling continuously as the spiral grows.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['navy', 'blue', 'dodgerblue', 'deepskyblue',
          'cyan', 'mediumaquamarine', 'green']
step = 2

for i in range(240):
    monty.color(colors[i % len(colors)])
    monty.forward(step)
    monty.right(60)
    step += 0.8
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The square spiral used `right(90)`. This one uses `right(60)`.
    Will the corners look sharper or more rounded than the square spiral?
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

colors = ['navy', 'blue', 'dodgerblue', 'deepskyblue',
          'cyan', 'mediumaquamarine', 'green']
step = 2

for i in range(240):
    monty.color(colors[i % len(colors)])
    monty.forward(step)
    monty.right(60)
    step += 0.8`);
</script>

The corners are **less sharp** — 60° turns are gentler than 90° turns, giving the spiral a rounder, more flowing appearance. Were you right?

## How It Works

`right(60)` creates hexagonal corners because 60° is the exterior angle of a regular hexagon (360° ÷ 6 = 60°). The growing `step` prevents the path from closing into a hexagon — instead it spirals outward one ring at a time.

`colors[i % len(colors)]` uses `len(colors)` instead of hardcoding `7`. This is good practice: if you add or remove a color, the modulo automatically adjusts.

## Explanation Table

| Line | What it does |
|------|-------------|
| `colors = [...]` | Seven-hue navy-to-green gradient |
| `i % len(colors)` | Maps segment index to color list — works for any list length |
| `monty.right(60)` | Hexagonal corner — `360 / 6 = 60°` |
| `step += 0.8` | Grow the step — source of the spiral |
| `range(240)` | 240 steps = 40 full "hexagons" (6 sides each) |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws the same hexagon over and over in the same place — no spiral!
    Find the missing line and add it so the path spirals outward.

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

colors = ['navy', 'blue', 'dodgerblue', 'deepskyblue',
          'cyan', 'mediumaquamarine', 'green']
step = 2

for i in range(240):
    monty.color(colors[i % len(colors)])
    monty.forward(step)
    monty.right(60)`);
</script>

Add `step += 0.8` as the last line inside the loop — without it, every segment is the same length and the path just traces the same hexagon repeatedly.

## Experiments

1. **Try a pentagon spiral.** Change `right(60)` to `right(72)` (360/5). You'll know it worked when the spiral has five-sided corners instead of six.

2. **Try a triangle spiral.** Change `right(60)` to `right(120)` (360/3). You'll know it worked when the corners become sharp 120° turns.

3. **Speed up the growth.** Change `step += 0.8` to `step += 2`. The loops spread out faster. You'll know it worked when there are fewer, more widely spaced rings.

4. **Switch to warm colors.** Replace the `colors` list with `['darkred', 'red', 'orangered', 'orange', 'gold', 'yellow', 'lightyellow']`. You'll know it worked when the spiral shifts from fiery red through yellow.

!!! mascot-celebration "Excellent Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You discovered that **one number** — the turn angle — determines the polygon shape of a spiral.
    Change 60° → 90° → 120° and watch the whole pattern transform!
    Up next: **Triangular Spiral** — pushing the turn angle even further.
