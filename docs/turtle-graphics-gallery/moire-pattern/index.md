---
hide:
    - toc
---
# Moiré Pattern

By the end of this lab you'll be able to:

- Draw two overlapping sets of lines at slightly different angles
- Understand how interference between two grids creates Moiré patterns
- Control the Moiré pattern size by changing the angle difference

When two sets of nearly parallel lines overlap at a slight angle, they produce dramatic interference patterns — large-scale "beating" waves that seem to pulse across the canvas. This is the Moiré effect.

!!! mascot-welcome "Welcome to Moiré Patterns!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Moiré patterns appear on TV screens when someone wears a checkered shirt —
    the screen's pixel grid interferes with the fabric's pattern!
    Let's code one ourselves!

## How It Works

Draw two sets of evenly spaced parallel lines. Set one is horizontal; set two is rotated by a small angle (3°). Where lines from both sets cross, they reinforce; where they diverge, gaps form. The result is a large-scale wave pattern.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

spacing = 8
n_lines = 40
length = 320

def draw_lines(angle_deg):
    monty.setheading(angle_deg + 90)
    perpendicular = math.radians(angle_deg)
    for i in range(-n_lines, n_lines):
        d = i * spacing
        cx = d * math.cos(perpendicular)
        cy = d * math.sin(perpendicular)
        start_angle = math.radians(angle_deg)
        monty.penup()
        monty.goto(cx - length/2 * math.cos(start_angle),
                   cy - length/2 * math.sin(start_angle))
        monty.pendown()
        monty.goto(cx + length/2 * math.cos(start_angle),
                   cy + length/2 * math.sin(start_angle))

monty.pencolor('navy')
monty.pensize(1)
draw_lines(0)

monty.pencolor('royalblue')
monty.pensize(1)
draw_lines(3)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Two sets of lines, one rotated only 3° from the other.
    Will the slight angle difference be visible as separate lines, or as a beating pattern?
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

spacing = 8
n_lines = 40
length = 320

def draw_lines(angle_deg):
    perpendicular = math.radians(angle_deg + 90)
    line_dir = math.radians(angle_deg)
    for i in range(-n_lines, n_lines):
        d = i * spacing
        cx = d * math.cos(perpendicular)
        cy = d * math.sin(perpendicular)
        monty.penup()
        monty.goto(cx - length/2 * math.cos(line_dir),
                   cy - length/2 * math.sin(line_dir))
        monty.pendown()
        monty.goto(cx + length/2 * math.cos(line_dir),
                   cy + length/2 * math.sin(line_dir))

monty.pencolor('navy')
monty.pensize(1)
draw_lines(0)

monty.pencolor('royalblue')
monty.pensize(1)
draw_lines(3)
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

A **large-scale beating pattern** appears — bands of dense and sparse lines alternating across the canvas. Were you right?

## How It Works

The Moiré period (the distance between "beats") is approximately `spacing / sin(angle_difference)`. With `spacing=8` and `angle=3°`, the beat period ≈ `8 / sin(3°) ≈ 153 pixels`. That's why you see about 2 complete "fringes" across the canvas.

## Explanation Table

| Line | What it does |
|------|-------------|
| `spacing = 8` | Distance between parallel lines |
| `draw_lines(0)` | First set — horizontal lines |
| `draw_lines(3)` | Second set — 3° rotation |
| `math.cos(perpendicular)` | Position of line perpendicular to its direction |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Angle"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `draw_lines(3)` to `draw_lines(10)`. 
    A larger angle means a smaller Moiré period — more beats per screen.
    Predict: how many bands will appear at 10°?

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

spacing = 8
n_lines = 40
length = 320

def draw_lines(angle_deg):
    perpendicular = math.radians(angle_deg + 90)
    line_dir = math.radians(angle_deg)
    for i in range(-n_lines, n_lines):
        d = i * spacing
        cx = d * math.cos(perpendicular)
        cy = d * math.sin(perpendicular)
        monty.penup()
        monty.goto(cx - length/2 * math.cos(line_dir),
                   cy - length/2 * math.sin(line_dir))
        monty.pendown()
        monty.goto(cx + length/2 * math.cos(line_dir),
                   cy + length/2 * math.sin(line_dir))

monty.pencolor('darkred')
monty.pensize(1)
draw_lines(0)

monty.pencolor('darkorange')
monty.pensize(1)
draw_lines(10)
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

At 10°, the bands are narrower and more numerous — the Moiré period shrinks as the angle grows.

## Experiments

1. **Use concentric circles.** Replace the line sets with two sets of concentric circles with slightly different radii spacings. You'll know it worked when Moiré rings appear.

2. **Try 1° difference.** Use `draw_lines(0)` and `draw_lines(1)`. You'll know it worked when just 1–2 very wide bands appear (large period).

3. **Add a third set.** Add `draw_lines(6)`. You'll know it worked when a more complex interference pattern appears.

4. **Use dot grids instead of lines.** Draw dots at a regular grid, then draw a second grid at 3° rotation. You'll know it worked when a hexagonal Moiré pattern appears.

!!! mascot-celebration "Interference Patterns!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You created a Moiré pattern — the same physics describes light interference,
    sound beats, and radio wave mixing. Geometry, optics, and physics in one picture!
    Up next: **Bridget Riley Waves** — undulating parallel curves.
