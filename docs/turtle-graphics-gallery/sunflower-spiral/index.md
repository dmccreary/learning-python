---
hide:
    - toc
---
# Sunflower Seed Spiral

By the end of this lab you'll be able to:

- Use the golden angle (≈ 137.5°) to place dots in a sunflower spiral pattern
- Understand why the golden angle produces optimal packing
- Calculate dot positions using `r = sqrt(n)` and angle `n * 137.5°`

The seeds in a real sunflower head are arranged by the golden angle — 137.508°. This lab reproduces that spiral exactly. The same packing appears in pinecones, pineapples, and artichokes.

!!! mascot-welcome "Welcome to the Sunflower!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Sunflowers discovered the golden angle millions of years before mathematicians did.
    It packs the most seeds into the smallest space — nature's optimal packing algorithm!
    Let's code it together!

## How It Works

Seed `n` is placed at polar coordinates `r = scale * sqrt(n)`, angle `n * golden_angle`. Converting to x, y: `x = r * cos(angle)`, `y = r * sin(angle)`. The colors cycle through a sunny palette for each "arm" of the spiral.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

golden_angle = 137.508
scale = 8
colors = ['gold', 'darkorange', 'goldenrod', 'orange']

for n in range(200):
    angle = math.radians(n * golden_angle)
    r = scale * math.sqrt(n)
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    size = max(2, 8 - r / 20)
    monty.dot(int(size), colors[n % len(colors)])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    200 dots placed one at a time, each rotated exactly 137.5° from the last.
    Will they form a spiral, a grid, or something that looks like a real sunflower?
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
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

golden_angle = 137.508
scale = 8
colors = ['gold', 'darkorange', 'goldenrod', 'orange']

for n in range(200):
    angle = math.radians(n * golden_angle)
    r = scale * math.sqrt(n)
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    size = max(2, 8 - r / 20)
    monty.dot(int(size), colors[n % len(colors)])`);
</script>

A **real sunflower pattern** — you can see the clockwise and counter-clockwise spirals that sunflowers are famous for. Were you right?

## How It Works

`math.sqrt(n)` for the radius spreads seeds evenly outward — without it all seeds would cluster near the edge. The golden angle 137.508° is the most "irrational" angle possible, meaning no seed ever lands directly in front of a previous one. This ensures maximum spread and minimum wasted space.

## Explanation Table

| Line | What it does |
|------|-------------|
| `golden_angle = 137.508` | The golden angle — creates optimal packing |
| `r = scale * math.sqrt(n)` | Spread seeds outward at a uniform rate |
| `x = r * math.cos(angle)` | Convert polar → x coordinate |
| `y = r * math.sin(angle)` | Convert polar → y coordinate |
| `size = max(2, 8 - r/20)` | Larger dots at center, smaller at edge |

## Learning Check

!!! mascot-thinking "Your Turn — Try a Different Angle"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `golden_angle = 137.508` to `golden_angle = 138`.
    Predict what will happen to the packing — better or worse than the golden angle?
    Run it to compare!

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
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

golden_angle = 138.0
scale = 8
colors = ['royalblue', 'deepskyblue', 'steelblue', 'lightblue']

for n in range(200):
    angle = math.radians(n * golden_angle)
    r = scale * math.sqrt(n)
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    size = max(2, 8 - r / 20)
    monty.dot(int(size), colors[n % len(colors)])`);
</script>

At 138°, the seeds cluster into radial spokes — the packing is worse than 137.508°! The golden angle truly is special: even a tiny change produces visible clustering.

## Experiments

1. **Try 90°.** Change to `golden_angle = 90`. You'll know it worked when only 4 spokes appear (every 4th seed lands in the same direction).

2. **Use 400 seeds.** Change `range(200)` to `range(400)`. You'll know it worked when the spiral extends much further and looks denser.

3. **Use a single color.** Replace the colors list with just `'forestgreen'`. You'll know it worked when all dots are the same color.

4. **Try the exact golden ratio angle.** The golden ratio φ ≈ 1.618; the golden angle = 360° × (1 − 1/φ) ≈ 222.5°. Try this value and see if it differs from 137.508°.

!!! mascot-celebration "Nature's Algorithm!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You coded the same packing algorithm nature uses in sunflowers, pinecones, and galaxies!
    The golden angle appears everywhere in biology because it maximizes resource efficiency.
    Up next: **Spider Web** — concentric rings connected by radial threads.
