---
hide:
    - toc
---
# Truchet Tiles

By the end of this lab you'll be able to:

- Fill a grid with randomly oriented arc tiles using `random.choice`
- Understand how local random choices create unexpected global structure
- See how two tile orientations with matching arc endpoints form continuous winding paths

A grid of square tiles, each containing either a `/` arc or a `\` arc chosen randomly. Because arcs from adjacent tiles connect at their shared edges, the random placement forms wandering river-like paths that wind across the whole canvas.

!!! mascot-welcome "Welcome to Truchet Tiles!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Each tile is chosen randomly — yet the paths they form look designed!
    This is emergence: complex global patterns from simple local random choices.
    Let's code it together!

## How It Works

Each tile is a square of size `s`. Two orientations:
- **Type A**: arc from bottom-left corner to top-right corner (quarter circle at bottom-left, then top-right)
- **Type B**: arc from top-left corner to bottom-right corner

At each grid position, randomly choose A or B and draw the two arcs.

## Sample Code

```python
import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(5)

s = 40

def tile(x, y, t):
    monty.pensize(2)
    monty.pencolor('navy')
    monty.penup()
    if t == 'A':
        monty.goto(x, y)
        monty.setheading(0)
        monty.pendown()
        monty.circle(s/2, 90)
        monty.penup()
        monty.goto(x + s, y + s)
        monty.setheading(180)
        monty.pendown()
        monty.circle(s/2, 90)
    else:
        monty.goto(x + s, y)
        monty.setheading(90)
        monty.pendown()
        monty.circle(s/2, 90)
        monty.penup()
        monty.goto(x, y + s)
        monty.setheading(270)
        monty.pendown()
        monty.circle(s/2, 90)

cols, rows = 9, 8
ox = -cols * s / 2
oy = -rows * s / 2

for row in range(rows):
    for col in range(cols):
        t = random.choice(['A', 'B'])
        tile(ox + col * s, oy + row * s, t)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each tile is chosen randomly. Will the arcs form isolated curves, or connected paths?
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
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(5)

s = 40

def tile(x, y, t):
    monty.pensize(2)
    monty.pencolor('navy')
    monty.penup()
    if t == 'A':
        monty.goto(x, y)
        monty.setheading(0)
        monty.pendown()
        monty.circle(s/2, 90)
        monty.penup()
        monty.goto(x + s, y + s)
        monty.setheading(180)
        monty.pendown()
        monty.circle(s/2, 90)
    else:
        monty.goto(x + s, y)
        monty.setheading(90)
        monty.pendown()
        monty.circle(s/2, 90)
        monty.penup()
        monty.goto(x, y + s)
        monty.setheading(270)
        monty.pendown()
        monty.circle(s/2, 90)

cols, rows = 9, 8
ox = -cols * s / 2
oy = -rows * s / 2

for row in range(rows):
    for col in range(cols):
        t = random.choice(['A', 'B'])
        tile(ox + col * s, oy + row * s, t)`);
</script>

**Connected winding paths** — the arcs join at tile edges to form continuous curves that wander across the canvas. Were you right?

## How It Works

Both tile types place arcs with endpoints at the midpoints of the tile's edges. Because all tiles use the same edge midpoints, arcs from adjacent tiles always connect — no matter which orientation is chosen. The random choice just determines which two pairs of edge midpoints are connected by each tile's arcs.

## Explanation Table

| Line | What it does |
|------|-------------|
| `random.seed(5)` | Reproducible randomness — same pattern each run |
| `random.choice(['A', 'B'])` | Choose orientation for each tile |
| `circle(s/2, 90)` | Quarter circle arc with radius half the tile size |
| `setheading(angle)` | Position turtle to start arc from the correct corner |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Seed"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `random.seed(5)` to `random.seed(42)`.
    The tile pattern will change but the paths will still wind continuously.
    Run it and compare the two patterns!

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
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(42)

s = 40

def tile(x, y, t):
    monty.pensize(2)
    monty.pencolor('darkred')
    monty.penup()
    if t == 'A':
        monty.goto(x, y)
        monty.setheading(0)
        monty.pendown()
        monty.circle(s/2, 90)
        monty.penup()
        monty.goto(x + s, y + s)
        monty.setheading(180)
        monty.pendown()
        monty.circle(s/2, 90)
    else:
        monty.goto(x + s, y)
        monty.setheading(90)
        monty.pendown()
        monty.circle(s/2, 90)
        monty.penup()
        monty.goto(x, y + s)
        monty.setheading(270)
        monty.pendown()
        monty.circle(s/2, 90)

cols, rows = 9, 8
ox = -cols * s / 2
oy = -rows * s / 2

for row in range(rows):
    for col in range(cols):
        t = random.choice(['A', 'B'])
        tile(ox + col * s, oy + row * s, t)`);
</script>

A completely different arrangement of winding paths — but still all connected, proving the property holds for any seed.

## Experiments

1. **Add a background grid.** Before placing tiles, draw gray grid lines. You'll know it worked when the tile boundaries are visible.

2. **Make the arcs thicker.** Change `pensize(2)` to `pensize(4)`. You'll know it worked when the paths look bolder.

3. **Use two colors.** Color type A arcs red and type B arcs blue. You'll know it worked when you can visually distinguish the two orientations.

4. **Remove the seed.** Delete `random.seed(5)`. Every run will produce a different pattern. You'll know it worked when the pattern changes each time you click Run.

!!! mascot-celebration "Emergence!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You created complex structure from random local choices — that's emergence!
    Truchet tiles were designed by Sébastien Truchet in 1704 — and they still surprise people today.
    Up next: **Islamic Geometric Star Pattern** — precise construction from angle rules.
