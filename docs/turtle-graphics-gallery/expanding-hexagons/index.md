---
hide:
    - toc
---
# Expanding Hexagons

By the end of this lab you'll be able to:

- Draw concentric hexagons that grow outward from the center
- Rotate alternating hexagons 30° to create a more complex illusion
- Understand how color gradients enhance the sense of depth and motion

Concentric hexagons, alternating between two rotations — 0° and 30°. The color gradient from dark center to light edges creates a strong illusion of a hexagonal tunnel or a surface expanding toward you.

!!! mascot-welcome "Welcome to Expanding Hexagons!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hexagons tile perfectly — six around each center, all fitting without gaps.
    Concentric hexagons with alternating rotations create a dizzying depth illusion!
    Let's code it together!

## How It Works

Draw `n` concentric regular hexagons. Each hexagon is centered at the origin, with radius increasing by a fixed step. Odd-numbered hexagons are rotated 30° from even ones. Colors fade from dark navy at the center to light blue at the edge.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_hexagons = 12
r_step = 12

for i in range(1, n_hexagons + 1):
    r = i * r_step
    rotation = 30 if i % 2 == 0 else 0
    t = 1 - i / n_hexagons
    blue_val = int(50 + 200 * (1 - t))
    monty.pencolor(0, int(50 * t + 50), blue_val)
    monty.pensize(max(1, n_hexagons - i + 1) // 2)
    monty.penup()
    monty.goto(r, 0)
    monty.setheading(90 + rotation)
    monty.pendown()
    for _ in range(6):
        monty.forward(r)
        monty.left(60)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Alternating hexagons at 0° and 30° — will they look like separate shapes or a unified pattern?
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

n_hexagons = 12
r_step = 12

for i in range(1, n_hexagons + 1):
    r = i * r_step
    rotation = 30 if i % 2 == 0 else 0
    t = i / n_hexagons
    color_val = int(30 + 200 * t)
    monty.pencolor(0, int(80 * t), color_val)
    monty.pensize(max(1, (n_hexagons - i + 1) // 2))
    monty.penup()
    angle_start = math.radians(rotation)
    monty.goto(r * math.cos(angle_start), r * math.sin(angle_start))
    monty.setheading(90 + rotation)
    monty.pendown()
    for _ in range(6):
        monty.forward(r)
        monty.left(60)`);
</script>

A **hexagonal tunnel** — the alternating rotation and color gradient create a strong sense of depth. Were you right?

## How It Works

The inner hexagons are drawn with thicker lines (more prominent), the outer ones with thinner lines. The color gradient from dark (center) to light (edge) reinforces the tunnel illusion — objects further away appear lighter. The 30° alternation prevents the simple "telescope" look and creates star-like complexity.

## Explanation Table

| Line | What it does |
|------|-------------|
| `rotation = 30 if i%2==0 else 0` | Alternate 0° and 30° rotations |
| `t = i / n_hexagons` | Progress from 0 (center) to 1 (edge) |
| `int(30 + 200 * t)` | Blue value increases toward edge |
| `pensize(...) // 2` | Thick inner, thin outer lines |

## Learning Check

!!! mascot-thinking "Your Turn — Try Pentagons"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `range(6)` to `range(5)` and `left(60)` to `left(72)` in the inner loop.
    Predict: will 5-sided pentagons create a similar illusion?

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
import math

n_polygons = 12
r_step = 12

for i in range(1, n_polygons + 1):
    r = i * r_step
    rotation = 36 if i % 2 == 0 else 0
    t = i / n_polygons
    monty.pencolor(int(180 * t), 0, int(30 + 200 * t))
    monty.pensize(max(1, (n_polygons - i + 1) // 2))
    monty.penup()
    angle_start = math.radians(rotation)
    monty.goto(r * math.cos(angle_start), r * math.sin(angle_start))
    monty.setheading(90 + rotation)
    monty.pendown()
    for _ in range(5):
        monty.forward(r)
        monty.left(72)`);
</script>

Concentric pentagons with 36° alternation — a pentagonal tunnel, less symmetric than hexagons but equally hypnotic.

## Experiments

1. **Remove the rotation alternation.** Set `rotation = 0` always. You'll know it worked when all hexagons align and the star-pattern disappears.

2. **Try triangles.** Change to 3 sides, `left(120)`, `rotation = 60`. You'll know it worked when nested triangles appear.

3. **Use a warm color gradient.** Change the color to red/orange: `pencolor(int(50+200*t), int(100*t), 0)`. You'll know it worked when the tunnel looks like glowing embers.

4. **Increase n_hexagons.** Try `n_hexagons = 20`. You'll know it worked when the tunnel extends much further inward.

!!! mascot-celebration "Hexagonal Hypnosis!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You created a geometric optical illusion using only concentric hexagons!
    Op Art proves that math, color, and repetition can fool the visual system.
    Up next: **Category 9 — Typography Patterns!**
