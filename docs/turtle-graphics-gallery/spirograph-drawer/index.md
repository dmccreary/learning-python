---
hide:
    - toc
---
# Spirograph Drawer

By the end of this lab you'll be able to:

- Draw a family of hypotrochoid curves that animate one after another
- Use a list of parameter sets to create a sequence of different Spirograph patterns
- Understand how changing `R`, `r`, and `d` produces completely different shapes

A Spirograph drawer that cycles through 6 different parameter sets, drawing each one in a different color to build up a layered display of overlapping hypotrochoid curves.

!!! mascot-welcome "Welcome to the Spirograph Drawer!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab the Spirograph draws itself — cycling through 6 different
    parameter sets automatically, building up a layered display!
    Let's code it together!

## How It Works

A list of `(R, r, d, color)` tuples defines 6 Spirograph parameter sets. The outer loop iterates through them; the inner loop draws each hypotrochoid. `tracer(0)` and `update()` keep the animation smooth.

## Sample Code

```python
import turtle
import math

screen = turtle.Screen()
screen.tracer(0)
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

params = [
    (130, 50, 90, 'royalblue'),
    (100, 40, 70, 'crimson'),
    (120, 30, 80, 'forestgreen'),
    (110, 45, 85, 'darkorange'),
    (140, 60, 100, 'purple'),
    (100, 25, 75, 'teal'),
]

for R, r, d, color in params:
    monty.pencolor(color)
    monty.pensize(1)
    steps = 2000
    monty.penup()
    t0 = 0
    x0 = (R-r)*math.cos(t0) + d*math.cos((R-r)/r*t0)
    y0 = (R-r)*math.sin(t0) - d*math.sin((R-r)/r*t0)
    monty.goto(x0, y0)
    monty.pendown()
    for i in range(1, steps + 1):
        t = 2 * math.pi * i / steps * r
        x = (R-r)*math.cos(t) + d*math.cos((R-r)/r*t)
        y = (R-r)*math.sin(t) - d*math.sin((R-r)/r*t)
        monty.goto(x, y)
        if i % 50 == 0:
            screen.update()
    screen.update()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Six different parameter sets in six different colors.
    Will the curves overlap neatly, or will they create a chaotic jumble?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import math

screen = turtle.Screen()
screen.tracer(0)
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

params = [
    (130, 50, 90, 'royalblue'),
    (100, 40, 70, 'crimson'),
    (120, 30, 80, 'forestgreen'),
    (110, 45, 85, 'darkorange'),
    (140, 60, 100, 'purple'),
    (100, 25, 75, 'teal'),
]

for R, r, d, color in params:
    monty.pencolor(color)
    monty.pensize(1)
    steps = 2000
    monty.penup()
    t0 = 0
    x0 = (R-r)*math.cos(t0) + d*math.cos((R-r)/r*t0)
    y0 = (R-r)*math.sin(t0) - d*math.sin((R-r)/r*t0)
    monty.goto(x0, y0)
    monty.pendown()
    for i in range(1, steps + 1):
        t = 2 * math.pi * i / steps * r
        x = (R-r)*math.cos(t) + d*math.cos((R-r)/r*t)
        y = (R-r)*math.sin(t) - d*math.sin((R-r)/r*t)
        monty.goto(x, y)
        if i % 50 == 0:
            screen.update()
    screen.update()
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

Six colorful Spirograph curves, each with a different shape, building up a layered composition. Were you right about the overlap?

## How It Works

Each `(R, r, d)` triple produces a completely unique curve. Because all curves are drawn from the same center, they overlap like layers in a painting. The `if i % 50 == 0: screen.update()` updates the display every 50 points to show the drawing progress.

## Explanation Table

| Line | What it does |
|------|-------------|
| `params = [...]` | List of `(R, r, d, color)` tuples |
| `for R, r, d, color in params` | Unpack each parameter set |
| `if i % 50 == 0: screen.update()` | Show progress every 50 steps |
| `screen.tracer(0)` | Manual control over screen refresh |

## Learning Check

!!! mascot-thinking "Your Turn — Design Your Own Set"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Replace the `params` list with 3 parameter sets of your own choosing.
    Try to make curves that each have different numbers of loops (R/r ratio determines it).
    What ratios will you pick?

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math

screen = turtle.Screen()
screen.tracer(0)
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

params = [
    (120, 40, 80, 'royalblue'),
    (120, 24, 80, 'crimson'),
    (120, 15, 80, 'gold'),
]

for R, r, d, color in params:
    monty.pencolor(color)
    monty.pensize(1)
    steps = 2000
    monty.penup()
    t0 = 0
    x0 = (R-r)*math.cos(t0) + d*math.cos((R-r)/r*t0)
    y0 = (R-r)*math.sin(t0) - d*math.sin((R-r)/r*t0)
    monty.goto(x0, y0)
    monty.pendown()
    for i in range(1, steps + 1):
        t = 2 * math.pi * i / steps * r
        x = (R-r)*math.cos(t) + d*math.cos((R-r)/r*t)
        y = (R-r)*math.sin(t) - d*math.sin((R-r)/r*t)
        monty.goto(x, y)
        if i % 50 == 0:
            screen.update()
    screen.update()
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

With the same `R=120` and `d=80` but different `r` values (40, 24, 15), the three curves have 3, 5, and 8 loops respectively — matching `R/r`.

## Experiments

1. **Add more curves.** Extend `params` to 10 entries. You'll know it worked when a denser, more colorful composition appears.

2. **Use pastel colors.** Replace the colors with lighter shades. You'll know it worked when the overlapping curves produce a softer appearance.

3. **Clear and redraw.** Add `screen.clearscreen()` between curves — only one at a time. You'll know it worked when each curve appears alone before the next one.

4. **Vary the step count.** Use more steps for higher `R/r` ratios. You'll know it worked when complex curves look smoother.

!!! mascot-celebration "Art Machine!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Your code generates art automatically from a list of parameters — an art machine!
    This is the essence of generative art: code that produces visuals from rules.
    Up next: **Category 11 — Advanced Patterns!**
