---
hide:
    - toc
---
# Colored Logarithmic Spiral

By the end of this lab you'll be able to:

- Use `math.cos()` and `math.sin()` to convert polar coordinates to Cartesian `(x, y)` positions
- Draw a curve by plotting many points with `goto()` instead of using `forward()` and `right()`
- Color each segment by its angular position using `angle % 360` to cycle through hues

A smooth, continuously curving spiral — no straight segments or corners. Each revolution of the spiral is colored by cycling through red, orange, yellow, green, blue, and violet, so the arms glow like a rainbow ribbon.

!!! mascot-welcome "Welcome to the Logarithmic Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Until now, every spiral was made of straight line segments. This one is different —
    we use math functions to compute exact positions, giving a truly smooth curve.
    Let's code it together!

## How It Works

A logarithmic spiral in polar coordinates is `r = a · e^(b·θ)` — the radius grows exponentially as the angle increases. We convert each polar point `(r, θ)` to Cartesian `(x, y)` using:

```
x = r · cos(θ)
y = r · sin(θ)
```

Then `goto(x, y)` moves the turtle to that point. With small angle steps and the pen down, this traces a smooth curve.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
a = 0.5
b = 0.15

monty.penup()
for i in range(600):
    theta = i * 0.05
    r = a * math.exp(b * theta)
    x = r * math.cos(theta) * 30
    y = r * math.sin(theta) * 30
    monty.goto(x, y)
    hue_index = int(math.degrees(theta) % 360 / 60)
    monty.pencolor(colors[hue_index])
    monty.pendown()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    We multiply `r` by 30 to scale the spiral to fit the canvas.
    Will the spiral look smooth or jagged? (Each step is only 0.05 radians.)
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

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
a = 0.5
b = 0.15

monty.penup()
for i in range(600):
    theta = i * 0.05
    r = a * math.exp(b * theta)
    x = r * math.cos(theta) * 30
    y = r * math.sin(theta) * 30
    monty.goto(x, y)
    hue_index = int(math.degrees(theta) % 360 / 60)
    monty.pencolor(colors[hue_index])
    monty.pendown()
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

**Smooth** — each 0.05-radian step is small enough that the eye can't detect the individual line segments. Were you right?

## How It Works

`math.exp(b * theta)` is the exponential function — the radius grows slowly at first and accelerates outward. Multiplying by `30` scales the result to fill the canvas. `math.degrees(theta) % 360` converts radians to degrees and uses modulo to cycle through 0–360 regardless of how many revolutions we've made.

## Explanation Table

| Line | What it does |
|------|-------------|
| `theta = i * 0.05` | Angle in radians; 0.05 rad per step for smoothness |
| `r = a * math.exp(b * theta)` | Radius grows exponentially — logarithmic spiral formula |
| `x = r * math.cos(theta) * 30` | Convert polar to Cartesian x, scaled to canvas |
| `y = r * math.sin(theta) * 30` | Convert polar to Cartesian y, scaled to canvas |
| `math.degrees(theta) % 360 / 60` | Map angle to color index: one color per 60° |

!!! mascot-tip "Polar and Cartesian Coordinates"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    **Polar** coordinates describe a point by `(r, θ)` — distance from origin and angle.
    **Cartesian** coordinates use `(x, y)` — horizontal and vertical distances.
    Converting between them is one of the most useful tricks in computational graphics!

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws a straight line instead of a spiral — the radius never changes!
    Find and fix the bug.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
a = 0.5
b = 0.15

monty.penup()
for i in range(600):
    theta = i * 0.05
    r = a
    x = r * math.cos(theta) * 30
    y = r * math.sin(theta) * 30
    monty.goto(x, y)
    hue_index = int(math.degrees(theta) % 360 / 60)
    monty.pencolor(colors[hue_index])
    monty.pendown()
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

Change `r = a` to `r = a * math.exp(b * theta)` — without the exponential growth, the radius stays constant and the turtle traces a fixed-radius circle instead of a spiral.

## Experiments

1. **Make it grow faster.** Change `b = 0.15` to `b = 0.25`. The spiral widens much faster. You'll know it worked when fewer revolutions fit on the canvas.

2. **Make it grow slower.** Change `b = 0.15` to `b = 0.07`. More revolutions pack tightly together. You'll know it worked when the arms are much closer together.

3. **Remove the color.** Replace the `pencolor()` line with `monty.pencolor('black')`. You'll know it worked when the spiral is a single clean black curve.

4. **Double the resolution.** Change `i * 0.05` to `i * 0.025` and `range(600)` to `range(1200)`. The curve gets even smoother. You'll know it worked when you can't see any corner at all.

!!! mascot-celebration "Mathematical!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used `math.cos()` and `math.sin()` — the foundation of all computer graphics —
    to convert polar coordinates into pixel positions. This is how video games, maps,
    and simulations place objects in space!
    Up next: **Double Helix Spiral** — two interleaved spirals in a single loop.
