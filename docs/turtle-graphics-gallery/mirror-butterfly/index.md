---
hide:
    - toc
---
# Mirror Butterfly

By the end of this lab you'll be able to:

- Create bilateral symmetry by negating the x-coordinates of a list of waypoints
- Draw the right wing of a butterfly using `goto()` waypoints, then mirror it automatically
- Understand how `(x, y) → (-x, y)` produces a perfect mirror reflection

A colorful butterfly built from two coordinate lists — the right wing drawn from waypoints, the left wing created automatically by negating all x-coordinates. One list, two wings.

!!! mascot-welcome "Welcome to the Mirror Butterfly!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Every butterfly has bilateral (mirror) symmetry — the left wing is exactly
    the mirror of the right. In code, mirroring is just one character: a minus sign!
    Let's code it together!

## How It Works

The right wing is defined as a list of `(x, y)` waypoints. To get the left wing, we create a new list where every `x` is negated: `(-x, y)`. We draw both wings using `goto()` and `begin_fill()`/`end_fill()`.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

right_wing = [
    (0, 0), (20, 40), (60, 80), (100, 90), (130, 60),
    (120, 20), (90, -10), (60, -20), (30, -30), (10, -40), (0, -50),
    (20, -80), (50, -100), (60, -70), (40, -60), (20, -50), (0, 0)
]

left_wing = [(-x, y) for x, y in right_wing]

def draw_wing(waypoints, color):
    monty.penup()
    monty.goto(waypoints[0])
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for x, y in waypoints[1:]:
        monty.goto(x, y)
    monty.end_fill()

draw_wing(right_wing, 'darkorange')
draw_wing(left_wing, 'darkorange')

monty.penup()
monty.goto(0, -120)
monty.pendown()
monty.pencolor('black')
monty.pensize(3)
monty.setheading(90)
monty.forward(200)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The left wing is created with `(-x, y)`. Will it look like a perfect mirror of the right,
    or will it look upside down?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

right_wing = [
    (0, 0), (20, 40), (60, 80), (100, 90), (130, 60),
    (120, 20), (90, -10), (60, -20), (30, -30), (10, -40), (0, -50),
    (20, -80), (50, -100), (60, -70), (40, -60), (20, -50), (0, 0)
]

left_wing = [(-x, y) for x, y in right_wing]

def draw_wing(waypoints, color):
    monty.penup()
    monty.goto(waypoints[0])
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for x, y in waypoints[1:]:
        monty.goto(x, y)
    monty.end_fill()

draw_wing(right_wing, 'darkorange')
draw_wing(left_wing, 'darkorange')

monty.penup()
monty.goto(0, -120)
monty.pendown()
monty.pencolor('black')
monty.pensize(3)
monty.setheading(90)
monty.forward(200)
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

A **perfect mirror** — negating x flips the shape left-to-right without changing top-to-bottom. Were you right?

## How It Works

`[(-x, y) for x, y in right_wing]` is a list comprehension that transforms every coordinate pair. The `-` before `x` flips horizontally. The `y` stays the same so there's no vertical flip.

The black body is drawn as a vertical line from tail to head using `setheading(90)` (straight up) and `forward(200)`.

## Explanation Table

| Line | What it does |
|------|-------------|
| `right_wing = [(x,y), ...]` | Waypoints defining the right wing shape |
| `[(-x, y) for x, y in right_wing]` | Mirror: negate all x-coordinates |
| `monty.goto(x, y)` | Move turtle to each waypoint, drawing as it goes |
| `begin_fill()` / `end_fill()` | Fill the wing shape |

## Learning Check

!!! mascot-thinking "Your Turn — Flip Vertically Instead"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `(-x, y)` to `(x, -y)` to flip vertically instead of horizontally.
    Predict what the result will look like — then run it to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

right_wing = [
    (0, 0), (20, 40), (60, 80), (100, 90), (130, 60),
    (120, 20), (90, -10), (60, -20), (30, -30), (10, -40), (0, -50),
    (20, -80), (50, -100), (60, -70), (40, -60), (20, -50), (0, 0)
]

bottom_wing = [(x, -y) for x, y in right_wing]

def draw_wing(waypoints, color):
    monty.penup()
    monty.goto(waypoints[0])
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for x, y in waypoints[1:]:
        monty.goto(x, y)
    monty.end_fill()

draw_wing(right_wing, 'darkorange')
draw_wing(bottom_wing, 'royalblue')
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

`(x, -y)` flips top-to-bottom — the bottom wing is the vertical reflection of the right wing, in a different color to distinguish them.

## Experiments

1. **Add wing markings.** After drawing the filled wings, add a smaller `right_inner` list with fewer points and draw it with `pencolor('black')` and no fill. You'll know it worked when the wings have outlines.

2. **Change the body.** Replace the straight line body with a series of dots in decreasing size. You'll know it worked when the body looks segmented.

3. **Use 4 wings.** Also draw `left_wing` and `bottom_wing` to make a four-winged dragonfly. You'll know it worked when four wings radiate from the center.

4. **Add antennas.** After the body, draw two thin lines from the top of the body curving outward. You'll know it worked when the butterfly has antennas.

!!! mascot-celebration "Beautiful Symmetry!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used `(-x, y)` to create perfect bilateral symmetry — the same math used
    in computer animation to mirror a character's left and right sides!
    Up next: **Truchet Tiles** — random tiles that form unexpected global patterns.
