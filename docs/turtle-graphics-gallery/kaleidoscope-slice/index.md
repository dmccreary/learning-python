---
hide:
    - toc
---
# Kaleidoscope Slice

By the end of this lab you'll be able to:

- Build a whole pattern by repeating one "slice" at different rotation angles
- Mirror alternate copies by flipping the angle inside each slice
- Convert a radius and an angle into `(x, y)` with `cos` and `sin`

A real kaleidoscope uses mirrors to bounce one small wedge of colored glass into a full circle of symmetry. This program does the same thing with math: it draws one 30° slice made of four filled shapes, then repeats it 12 times around the center — mirroring every other copy so the edges line up like a reflection.

!!! mascot-welcome "Welcome to the Kaleidoscope!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Here's a secret: we only design ONE tiny slice of this pattern.
    Rotation and reflection do all the rest of the work.
    That's the magic trick behind every kaleidoscope!

## How It Works

Each shape in the slice is stored as a list of `(radius, angle)` pairs measured from the center. To draw the slice at rotation `base`, we add `base` to every angle, then convert to screen coordinates with `x = r * cos(a)` and `y = r * sin(a)`. For mirrored copies we use `base + wedge - off` instead of `base + off`, which flips the slice like a reflection in a mirror.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

sections = 12
wedge = 360 / sections

shapes = [
    ['gold', [(30, 3), (95, 13), (65, 26)]],
    ['crimson', [(45, 6), (110, 2), (165, 7), (110, 18)]],
    ['royalblue', [(85, 24), (150, 15), (178, 27)]],
    ['darkorchid', [(120, 10), (185, 12), (150, 21)]],
]

def draw_slice(base, mirror):
    for color, points in shapes:
        corners = []
        for r, off in points:
            if mirror == 1:
                ang = base + off
            else:
                ang = base + wedge - off
            a = math.radians(ang)
            corners.append((r * math.cos(a), r * math.sin(a)))
        monty.penup()
        monty.color(color, color)
        monty.goto(corners[0])
        monty.pendown()
        monty.begin_fill()
        for corner in corners:
            monty.goto(corner)
        monty.goto(corners[0])
        monty.end_fill()

for i in range(sections):
    if i % 2 == 0:
        draw_slice(i * wedge, 1)
    else:
        draw_slice(i * wedge, -1)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The loop runs 12 times, and each slice contains exactly one gold triangle.
    How many gold triangles will you count in the finished pattern?
    Make your guess, then click Run!

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

sections = 12
wedge = 360 / sections

shapes = [
    ['gold', [(30, 3), (95, 13), (65, 26)]],
    ['crimson', [(45, 6), (110, 2), (165, 7), (110, 18)]],
    ['royalblue', [(85, 24), (150, 15), (178, 27)]],
    ['darkorchid', [(120, 10), (185, 12), (150, 21)]],
]

def draw_slice(base, mirror):
    for color, points in shapes:
        corners = []
        for r, off in points:
            if mirror == 1:
                ang = base + off
            else:
                ang = base + wedge - off
            a = math.radians(ang)
            corners.append((r * math.cos(a), r * math.sin(a)))
        monty.penup()
        monty.color(color, color)
        monty.goto(corners[0])
        monty.pendown()
        monty.begin_fill()
        for corner in corners:
            monty.goto(corner)
        monty.goto(corners[0])
        monty.end_fill()

for i in range(sections):
    if i % 2 == 0:
        draw_slice(i * wedge, 1)
    else:
        draw_slice(i * wedge, -1)

monty.penup()
monty.goto(0, 0)
monty.dot(30, 'gold')
monty.dot(16, 'crimson')`);
</script>

**12 gold triangles** — one per slice, because the loop calls `draw_slice` twelve times. Were you right?

## How It Works

Look closely at where two slices meet: the pattern on one side is a mirror image of the other. That happens because odd-numbered slices use `base + wedge - off`, which measures angles backwards from the far edge of the wedge. Without that flip you would get plain rotation (like a pinwheel); with it you get true kaleidoscope symmetry, where every boundary between slices acts like a mirror line.

## Explanation Table

| Line | What it does |
|------|-------------|
| `wedge = 360 / sections` | Splits the circle into 12 equal 30° wedges |
| `ang = base + off` | Rotates a point into slice number `i` |
| `ang = base + wedge - off` | Same point, but flipped — a mirror reflection |
| `corners.append((r * math.cos(a), r * math.sin(a)))` | Converts radius + angle into an `(x, y)` position |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    This program is supposed to draw all 12 slices, but almost the whole
    kaleidoscope is missing! Look carefully at the two `draw_slice` calls
    inside the loop. Can you spot what never changes — and fix it?

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

sections = 12
wedge = 360 / sections

shapes = [
    ['gold', [(30, 3), (95, 13), (65, 26)]],
    ['crimson', [(45, 6), (110, 2), (165, 7), (110, 18)]],
    ['royalblue', [(85, 24), (150, 15), (178, 27)]],
    ['darkorchid', [(120, 10), (185, 12), (150, 21)]],
]

def draw_slice(base, mirror):
    for color, points in shapes:
        corners = []
        for r, off in points:
            if mirror == 1:
                ang = base + off
            else:
                ang = base + wedge - off
            a = math.radians(ang)
            corners.append((r * math.cos(a), r * math.sin(a)))
        monty.penup()
        monty.color(color, color)
        monty.goto(corners[0])
        monty.pendown()
        monty.begin_fill()
        for corner in corners:
            monty.goto(corner)
        monty.goto(corners[0])
        monty.end_fill()

for i in range(sections):
    if i % 2 == 0:
        draw_slice(wedge, 1)
    else:
        draw_slice(wedge, -1)

monty.penup()
monty.goto(0, 0)
monty.dot(30, 'gold')
monty.dot(16, 'crimson')`);
</script>

The bug: both calls pass `wedge` as the base angle, so every slice lands in the same spot. Change them to `draw_slice(i * wedge, 1)` and `draw_slice(i * wedge, -1)` and the full circle of 12 slices returns.

## Experiments

1. **Try 8 sections.** Change `sections = 12` to `sections = 8`. The wedge grows to 45° automatically. You'll know it worked when the pattern has 8 arms with small gaps between them.

2. **Recolor the glass.** Change `'crimson'` to `'limegreen'` and `'royalblue'` to `'deeppink'`. You'll know it worked when the big darts change color in every one of the 12 slices at once.

3. **Redesign one shape.** In the `'darkorchid'` shape, change the radius `185` to `120`. You'll know it worked when the purple points pull in closer to the center all around the wheel.

4. **Break the mirror.** Change `draw_slice(i * wedge, -1)` to `draw_slice(i * wedge, 1)` so every copy uses the same direction. You'll know it worked when the pattern stops reflecting and starts spinning — it becomes a pinwheel instead of a kaleidoscope.

!!! mascot-celebration "One Slice, Twelve Reflections!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You designed one 30° wedge and let rotation + reflection build the rest.
    That's exactly how symmetry works in snowflakes, mandalas, and real kaleidoscopes.
    Up next: **Pinwheel Tiling** — a triangle that tiles the plane by endlessly splitting into five copies of itself.
