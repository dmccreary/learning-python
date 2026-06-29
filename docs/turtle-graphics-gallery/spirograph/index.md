---
hide:
    - toc
---
# Spirograph

By the end of this lab you'll be able to:

- Plot a hypotrochoid (inner rolling circle) using parametric equations
- Understand how `R`, `r`, and `d` control the petal and loop count
- See how the ratio `R/r` determines when the curve closes

A Spirograph pattern — the curves made by a rolling circle inside a larger circle. Changing the three parameters `R` (outer radius), `r` (inner radius), and `d` (pen distance from center) produces hundreds of different patterns.

!!! mascot-welcome "Welcome to the Spirograph!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Spirographs were a famous toy in the 1970s — now you can code one!
    A small circle rolls inside a big circle, with a pen attached to the small circle.
    The result: beautiful looping curves called hypotrochoids. Let's code it!

## How It Works

`x(t) = (R-r)*cos(t) + d*cos((R-r)/r * t)`
`y(t) = (R-r)*sin(t) - d*sin((R-r)/r * t)`

`R` is the outer circle radius, `r` the inner, `d` the pen offset from the inner center.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

R = 130
r = 50
d = 90
steps = 3000
colors = ['royalblue', 'crimson', 'forestgreen']

monty.pencolor('royalblue')
monty.pensize(1)
monty.penup()

for i in range(steps + 1):
    t = 2 * math.pi * i / steps * r
    x = (R - r) * math.cos(t) + d * math.cos((R - r) / r * t)
    y = (R - r) * math.sin(t) - d * math.sin((R - r) / r * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `R/r = 130/50 = 2.6`. The curve loops `R/r` times — approximately how many petals?
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

R = 130
r = 50
d = 90
steps = 3000

monty.pencolor('royalblue')
monty.pensize(1)
monty.penup()

for i in range(steps + 1):
    t = 2 * math.pi * i / steps * r
    x = (R - r) * math.cos(t) + d * math.cos((R - r) / r * t)
    y = (R - r) * math.sin(t) - d * math.sin((R - r) / r * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
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

A looping Spirograph curve — the inner circle rolls around 2.6 times for each full orbit, creating overlapping loops. Were you right?

## How It Works

When `R/r` is a ratio of small integers (like 5/2), the curve closes perfectly after a small number of loops. When it's not a simple fraction, the curve takes many loops to close — or never closes at all.

## Explanation Table

| Line | What it does |
|------|-------------|
| `R = 130` | Outer circle radius |
| `r = 50` | Inner rolling circle radius |
| `d = 90` | Pen distance from inner center |
| `(R-r)*cos(t) + d*cos(...)` | Parametric x position |
| `steps * r` | More loops for larger inner circles |

## Learning Check

!!! mascot-thinking "Your Turn — Use Exact Integers"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change to `R=100, r=40, d=70`. This gives `R/r = 5/2` exactly — a ratio of small integers.
    The curve should close perfectly after 2 orbits and have 5 petals. Predict and run!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

R = 100
r = 40
d = 70
steps = 3000

monty.pencolor('crimson')
monty.pensize(1)
monty.penup()

for i in range(steps + 1):
    t = 2 * math.pi * i / steps * r
    x = (R - r) * math.cos(t) + d * math.cos((R - r) / r * t)
    y = (R - r) * math.sin(t) - d * math.sin((R - r) / r * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
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

`R/r = 100/40 = 5/2` → a perfect 5-petaled hypotrochoid that closes cleanly after 2 orbits.

## Experiments

1. **Try R=120, r=30 (ratio 4:1).** You'll know it worked when a 4-lobed curve appears.

2. **Change d to a very small value.** Try `d = 10`. You'll know it worked when the curve looks almost circular.

3. **Change d larger than r.** Try `d = 120` with the original parameters. You'll know it worked when the inner loops become larger.

4. **Try an epitrochoid** (circle rolling outside). Change `(R - r)` to `(R + r)` in the formula. You'll know it worked when a different style of looped curve appears.

!!! mascot-celebration "Spirograph Complete!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You coded the math behind a real toy from the 1970s!
    These curves are called hypotrochoids — they're used in engineering to design
    Wankel rotary engines. Up next: **Butterfly Curve** — a trigonometric classic.
