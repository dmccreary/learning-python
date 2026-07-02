---
hide:
    - toc
---
# Impossible Triangle

By the end of this lab you'll be able to:

- Draw a filled polygon from a hard-coded list of (x, y) waypoints
- Rotate a list of points around the center using `sin` and `cos`
- Explain how three shades of gray fake 3-D depth in an object that cannot exist

The Penrose triangle — three solid beams that each sit squarely in front of the next, all the way around. Follow any beam with your eye and the geometry works; look at the whole thing and it is impossible to build. The trick: one beam shape, drawn three times at 0°, 120°, and 240°, in three shades of gray that your brain reads as three-dimensional lighting.

!!! mascot-welcome "Welcome to the Impossible Triangle!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Mathematician Roger Penrose called this "impossibility in its purest form."
    Every corner makes sense on its own — but the whole object could never exist.
    We'll build it from ONE list of five points and a rotation trick!

## How It Works

The list `beam` holds five (x, y) waypoints outlining one L-shaped beam. The `rotate()` function spins a point around the center (0, 0) using the standard rotation formulas `rx = x*cos(a) - y*sin(a)` and `ry = x*sin(a) + y*cos(a)`. A loop draws the beam three times — rotated by 0°, 120°, and 240° — filling each copy with a lighter or darker gray. Because the three shapes share edges perfectly, they weave into the famous impossible figure.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

beam = [(0, 76), (101, -99), (137, -99), (154, -69), (36, 137)]
shades = ['#d8d8d8', '#989898', '#505050']

def rotate(point, angle):
    a = math.radians(angle)
    x = point[0]
    y = point[1]
    rx = x * math.cos(a) - y * math.sin(a)
    ry = x * math.sin(a) + y * math.cos(a)
    return (rx, ry)

def draw_beam(points, color):
    monty.penup()
    monty.goto(points[0][0], points[0][1])
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.pensize(2)
    monty.begin_fill()
    for p in points:
        monty.goto(p[0], p[1])
    monty.goto(points[0][0], points[0][1])
    monty.end_fill()

for i in range(3):
    angle = i * 120
    turned = [rotate(p, angle) for p in beam]
    draw_beam(turned, shades[i])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The same five points are drawn three times, rotated by 0°, 120°, and 240°.
    Will the three separate beams line up edge-to-edge into one closed triangle,
    or will there be gaps between them? Guess, then click Run!

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

beam = [(0, 76), (101, -99), (137, -99), (154, -69), (36, 137)]
shades = ['#d8d8d8', '#989898', '#505050']

def rotate(point, angle):
    a = math.radians(angle)
    x = point[0]
    y = point[1]
    rx = x * math.cos(a) - y * math.sin(a)
    ry = x * math.sin(a) + y * math.cos(a)
    return (rx, ry)

def draw_beam(points, color):
    monty.penup()
    monty.goto(points[0][0], points[0][1])
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.pensize(2)
    monty.begin_fill()
    for p in points:
        monty.goto(p[0], p[1])
    monty.goto(points[0][0], points[0][1])
    monty.end_fill()

for i in range(3):
    angle = i * 120
    turned = [rotate(p, angle) for p in beam]
    draw_beam(turned, shades[i])`);
</script>

The three beams meet edge-to-edge with no gaps — and together they form an object that could never exist. Were you right?

## How It Works

Each beam looks like a solid 3-D bar because of the shading: light gray reads as a surface facing the light, dark gray as a surface in shadow. At each corner, one beam's slanted cut makes it look like it slides *behind* its neighbor. Going around the triangle: the light beam covers the dark one, the medium covers the light, and the dark covers the medium. That circular chain of "in front of" can never happen with real objects — every beam would have to be in front of all the others at once.

## Explanation Table

| Line | What it does |
|------|-------------|
| `beam = [(0, 76), (101, -99), ...]` | Five hard-coded waypoints outlining one L-shaped beam |
| `rx = x * math.cos(a) - y * math.sin(a)` | Rotation formula: spins a point around (0, 0) by angle `a` |
| `turned = [rotate(p, angle) for p in beam]` | Builds a new list with every waypoint rotated |
| `angle = i * 120` | Three copies at 0°, 120°, 240° — perfect three-fold symmetry |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    In this version the triangle has fallen apart — three lonely beams float
    with big gaps between them. One number in the final loop is wrong.
    Hint: three copies must share 360° equally. Find it and fix it!

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

beam = [(0, 76), (101, -99), (137, -99), (154, -69), (36, 137)]
shades = ['#d8d8d8', '#989898', '#505050']

def rotate(point, angle):
    a = math.radians(angle)
    x = point[0]
    y = point[1]
    rx = x * math.cos(a) - y * math.sin(a)
    ry = x * math.sin(a) + y * math.cos(a)
    return (rx, ry)

def draw_beam(points, color):
    monty.penup()
    monty.goto(points[0][0], points[0][1])
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.pensize(2)
    monty.begin_fill()
    for p in points:
        monty.goto(p[0], p[1])
    monty.goto(points[0][0], points[0][1])
    monty.end_fill()

for i in range(3):
    angle = i * 100
    turned = [rotate(p, angle) for p in beam]
    draw_beam(turned, shades[i])`);
</script>

The bug is `angle = i * 100` — the copies land at 0°, 100°, and 200°, leaving gaps. Three equal copies of anything need 360° ÷ 3 = 120° between them.

## Experiments

1. **Spin the whole figure.** Change `angle = i * 120` to `angle = i * 120 + 60`. You'll know it worked when the entire triangle rotates to point downward, still perfectly joined.

2. **Change the mood with color.** Replace the shades list with `['#bcd4ec', '#5a8cc0', '#1e4a78']`. You'll know it worked when the triangle turns three shades of blue and still looks 3-D.

3. **Flip the lighting.** Reverse the shades to `['#505050', '#989898', '#d8d8d8']`. You'll know it worked when the shadow appears to come from the opposite side — does the "in front" order look different?

4. **Break the illusion on purpose.** Fill all three beams with the same shade, `'#989898'`. You'll know it worked when the figure flattens into a plain 2-D triangle outline — proof that the shading, not the outline, fakes the 3-D.

!!! mascot-celebration "You Drew the Undrawable!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    One point list, one rotation formula, three shades of gray —
    and you built an object that cannot exist anywhere in the universe.
    Up next: **Concentric Ring Pulsation** — rings of clashing colors that seem to vibrate.
