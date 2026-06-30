---
hide:
    - toc
---
# Parametric Surface Projection

By the end of this lab you'll be able to:

- Define a 3D surface with parametric equations `x(u,v)`, `y(u,v)`, `z(u,v)`
- Project 3D coordinates onto 2D using isometric or perspective projection
- Draw a wireframe mesh by connecting adjacent surface points

A 3D parametric surface — a saddle, torus, or wave — projected onto the 2D canvas using isometric projection. The wireframe mesh shows the surface's shape and curvature without shading.

!!! mascot-welcome "Welcome to 3D Projection!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    3D graphics start here: compute x, y, z for every point on a surface,
    then project onto 2D by combining the three coordinates.
    This is the foundation of all 3D rendering!
    Let's code it together!

## How It Works

For a saddle surface: `x = u`, `y = v`, `z = u^2 - v^2`. Project to screen: `sx = (x - y) * cos30`, `sy = (x + y) * sin30 + z`. Draw grid lines by connecting adjacent points in both the u and v directions.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n = 14
scale = 18
pts = []

for i in range(n):
    row = []
    for j in range(n):
        u = (i - n/2) / (n/4)
        v = (j - n/2) / (n/4)
        x = u * scale
        y = v * scale
        z = (u*u - v*v) * scale / 2
        cos30 = math.cos(math.radians(30))
        sin30 = math.sin(math.radians(30))
        sx = (x - y) * cos30
        sy = (x + y) * sin30 + z
        row.append((sx, sy))
    pts.append(row)

monty.pensize(1)

for i in range(n):
    monty.penup()
    monty.pencolor('royalblue')
    for j in range(n):
        if j == 0:
            monty.goto(pts[i][j]); monty.pendown()
        else:
            monty.goto(pts[i][j])

for j in range(n):
    monty.penup()
    monty.pencolor('steelblue')
    for i in range(n):
        if i == 0:
            monty.goto(pts[i][j]); monty.pendown()
        else:
            monty.goto(pts[i][j])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A saddle surface has the equation `z = u² - v²` — it curves up in one direction and down in the other.
    Will the projection show a clear saddle shape, or will it look flat?
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

n = 14
scale = 18
pts = []

for i in range(n):
    row = []
    for j in range(n):
        u = (i - n/2) / (n/4)
        v = (j - n/2) / (n/4)
        x = u * scale
        y = v * scale
        z = (u*u - v*v) * scale / 2
        cos30 = math.cos(math.radians(30))
        sin30 = math.sin(math.radians(30))
        sx = (x - y) * cos30
        sy = (x + y) * sin30 + z
        row.append((sx, sy))
    pts.append(row)

monty.pensize(1)

for i in range(n):
    monty.penup()
    monty.pencolor('royalblue')
    for j in range(n):
        if j == 0:
            monty.goto(pts[i][j])
            monty.pendown()
        else:
            monty.goto(pts[i][j])

for j in range(n):
    monty.penup()
    monty.pencolor('steelblue')
    for i in range(n):
        if i == 0:
            monty.goto(pts[i][j])
            monty.pendown()
        else:
            monty.goto(pts[i][j])`);
</script>

A clear **3D saddle shape** — the surface curves upward in one diagonal direction and downward in the other. Were you right?

## How It Works

Isometric projection combines x, y, z into two screen coordinates: `sx = (x - y) * cos(30°)` and `sy = (x + y) * sin(30°) + z`. The 30° angles create the "cabinet" isometric view. Drawing grid lines in both u and v directions produces the wireframe mesh.

## Explanation Table

| Line | What it does |
|------|-------------|
| `u = (i - n/2) / (n/4)` | Map grid index to real-valued parameter |
| `z = (u*u - v*v) * scale / 2` | Saddle surface equation |
| `sx = (x - y) * cos30` | Isometric x projection |
| `sy = (x + y) * sin30 + z` | Isometric y projection with z height |

## Learning Check

!!! mascot-thinking "Your Turn — Change to a Wave Surface"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `z = (u*u - v*v) * scale / 2` to `z = scale * math.sin(u) * math.cos(v)`.
    This is a wave surface — predict what it will look like!

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

n = 14
scale = 18
pts = []

for i in range(n):
    row = []
    for j in range(n):
        u = (i - n/2) / (n/4) * math.pi
        v = (j - n/2) / (n/4) * math.pi
        x = u * scale / math.pi
        y = v * scale / math.pi
        z = scale * math.sin(u) * math.cos(v)
        cos30 = math.cos(math.radians(30))
        sin30 = math.sin(math.radians(30))
        sx = (x - y) * cos30
        sy = (x + y) * sin30 + z
        row.append((sx, sy))
    pts.append(row)

monty.pensize(1)

for i in range(n):
    monty.penup()
    monty.pencolor('crimson')
    for j in range(n):
        if j == 0:
            monty.goto(pts[i][j]); monty.pendown()
        else:
            monty.goto(pts[i][j])

for j in range(n):
    monty.penup()
    monty.pencolor('darkorange')
    for i in range(n):
        if i == 0:
            monty.goto(pts[i][j]); monty.pendown()
        else:
            monty.goto(pts[i][j])`);
</script>

A wave surface — undulating peaks and valleys like a frozen ocean wave!

## Experiments

1. **Try a sphere.** Use `x = scale*sin(u)*cos(v)`, `y = scale*sin(u)*sin(v)`, `z = scale*cos(u)` with u from 0 to π and v from 0 to 2π. You'll know it worked when a sphere wireframe appears.

2. **Change the projection angle.** Replace 30° with 45°. You'll know it worked when the surface looks from a different viewpoint.

3. **Increase density.** Change `n = 20`. You'll know it worked when the wireframe is denser with more grid lines.

4. **Try a torus.** `x = (R + r*cos(v))*cos(u)`, `y = (R + r*cos(v))*sin(u)`, `z = r*sin(v)`. You'll know it worked when a donut shape appears.

!!! mascot-celebration "3D from 2D!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You projected a 3D parametric surface onto 2D using isometric math!
    This is the foundation of every 3D game engine and CAD software.
    Up next: **Lindenmayer Snowflake Collection** — multiple L-system snowflakes.
