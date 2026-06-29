---
hide:
    - toc
---
# Spider Web

By the end of this lab you'll be able to:

- Draw radial spokes from the center using angles spaced 30° apart
- Connect the spokes with concentric polygonal rings using `goto()`
- Combine two loop types (radial and ring) to build a complete web

A realistic-looking spider web with 12 radial threads and 6 concentric rings — all drawn with `goto()` using polar coordinates converted to x, y.

!!! mascot-welcome "Welcome to the Spider Web!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    A spider web uses two geometric ideas: radial lines and concentric rings.
    This lab draws both using `goto()` and the math of circles!
    Let's code it together!

## How It Works

**Spokes**: for each of 12 angles (0°, 30°, 60°, … 330°), draw a line from the center to radius 120.
**Rings**: for each ring radius (20, 40, 60, 80, 100, 120), visit all 12 spoke intersection points and connect them.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_spokes = 12
n_rings = 6
max_r = 120
angles = [i * 360 / n_spokes for i in range(n_spokes)]

monty.pencolor('gray')
monty.pensize(1)

for ang in angles:
    monty.penup()
    monty.goto(0, 0)
    monty.pendown()
    rad = math.radians(ang)
    monty.goto(max_r * math.cos(rad), max_r * math.sin(rad))

for ring in range(1, n_rings + 1):
    r = ring * max_r / n_rings
    monty.penup()
    rad0 = math.radians(angles[0])
    monty.goto(r * math.cos(rad0), r * math.sin(rad0))
    monty.pendown()
    for ang in angles[1:] + [angles[0]]:
        rad = math.radians(ang)
        monty.goto(r * math.cos(rad), r * math.sin(rad))

monty.penup()
monty.goto(0, 0)
monty.pendown()
monty.dot(10, 'black')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    We draw 12 spokes and 6 rings. How many polygon sides will each ring have?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_spokes = 12
n_rings = 6
max_r = 120
angles = [i * 360 / n_spokes for i in range(n_spokes)]

monty.pencolor('gray')
monty.pensize(1)

for ang in angles:
    monty.penup()
    monty.goto(0, 0)
    monty.pendown()
    rad = math.radians(ang)
    monty.goto(max_r * math.cos(rad), max_r * math.sin(rad))

for ring in range(1, n_rings + 1):
    r = ring * max_r / n_rings
    monty.penup()
    rad0 = math.radians(angles[0])
    monty.goto(r * math.cos(rad0), r * math.sin(rad0))
    monty.pendown()
    for ang in angles[1:] + [angles[0]]:
        rad = math.radians(ang)
        monty.goto(r * math.cos(rad), r * math.sin(rad))

monty.penup()
monty.goto(0, 0)
monty.pendown()
monty.dot(10, 'black')
</textarea>
    <div id="button-row">
      <button id="run-btn" onclick="runSkulpt()">&#9654; Run</button>
      <button id="reset-btn" onclick="resetSkulpt()">&#8635; Reset</button>
    </div>
    <pre id="output"></pre>
  </div>
  <div id="canvas-container">
    <div id="turtle-target"></div>
  </div>
</div>

Each ring is a **12-sided polygon** — one side per spoke. With 12 spokes equally spaced, each side spans 30°. Were you right?

## How It Works

`angles[1:] + [angles[0]]` visits all 12 spokes then returns to the first — closing each ring polygon. `r * math.cos(rad), r * math.sin(rad)` converts polar (r, angle) to Cartesian (x, y).

## Explanation Table

| Line | What it does |
|------|-------------|
| `angles = [i * 360 / n_spokes for i in range(n_spokes)]` | 12 equally spaced spoke angles |
| `r = ring * max_r / n_rings` | Ring radius increases evenly outward |
| `angles[1:] + [angles[0]]` | Visit all spokes, then close the ring |
| `math.cos(rad), math.sin(rad)` | Convert angle to x, y offset |

## Learning Check

!!! mascot-thinking "Your Turn — Add More Spokes"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `n_spokes = 12` to `n_spokes = 8`. How many polygon sides will each ring have?
    Predict, then run it to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_spokes = 8
n_rings = 6
max_r = 120
angles = [i * 360 / n_spokes for i in range(n_spokes)]

monty.pencolor('darkblue')
monty.pensize(1)

for ang in angles:
    monty.penup()
    monty.goto(0, 0)
    monty.pendown()
    rad = math.radians(ang)
    monty.goto(max_r * math.cos(rad), max_r * math.sin(rad))

for ring in range(1, n_rings + 1):
    r = ring * max_r / n_rings
    monty.penup()
    rad0 = math.radians(angles[0])
    monty.goto(r * math.cos(rad0), r * math.sin(rad0))
    monty.pendown()
    for ang in angles[1:] + [angles[0]]:
        rad = math.radians(ang)
        monty.goto(r * math.cos(rad), r * math.sin(rad))

monty.penup()
monty.goto(0, 0)
monty.pendown()
monty.dot(10, 'black')
</textarea>
    <div id="button-row-2">
      <button id="run-btn-2" onclick="runSkulpt('-2')">&#9654; Run</button>
      <button id="reset-btn-2" onclick="resetSkulpt('-2')">&#8635; Reset</button>
    </div>
    <pre id="output-2"></pre>
  </div>
  <div id="canvas-container-2">
    <div id="turtle-target-2"></div>
  </div>
</div>

8 spokes → 8-sided octagonal rings — each ring is now an octagon instead of a 12-sided polygon.

## Experiments

1. **Add a spider.** After drawing, place a filled circle at `(30, 30)` using `monty.dot(20, 'black')`. You'll know it worked when a spider appears on the web.

2. **Use concentric circles instead of polygons.** Replace the ring-drawing code with `monty.circle(r)` at each ring radius. You'll know it worked when the rings look round.

3. **Color the rings.** Create a list of ring colors and use `monty.pencolor(ring_colors[ring])`. You'll know it worked when each ring is a different color.

4. **Make the web asymmetric.** Instead of equal spacing, use non-uniform angles. You'll know it worked when the web looks irregular like a real spider web.

!!! mascot-celebration "Eight-Legged Geometry!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You drew a spider web using only polar coordinates and `goto()`!
    The combination of radial and ring structures appears everywhere in nature and engineering.
    Up next: **Lightning Bolt** — recursive jagged zigzag.
