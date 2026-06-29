---
hide:
    - toc
---
# Epicycloid Star

By the end of this lab you'll be able to:

- Plot an epicycloid using `x = (R+r)cos(t) - r*cos((R+r)/r * t)`
- Understand how `R/r` (an integer) gives the number of cusps
- Compare epicycloids (outer rolling) to hypotrochoids (inner rolling)

An epicycloid is traced by a point on a small circle rolling around the outside of a larger circle. When `R/r` is a whole number, the result is a star-like shape with exactly `R/r` pointed cusps.

!!! mascot-welcome "Welcome to the Epicycloid Star!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    While the Spirograph rolls a circle inside, the epicycloid rolls a circle outside!
    When the ratio is a whole number, the result is a perfect star shape.
    Let's code it together!

## How It Works

`x = (R + r)*cos(t) - r*cos((R+r)/r * t)`
`y = (R + r)*sin(t) - r*sin((R+r)/r * t)`

`R` is the base circle radius, `r` is the rolling circle radius. When `R/r = k` (an integer), the curve has `k` cusps.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

R = 100
r = 20
steps = 2000
colors = ['crimson', 'darkorange', 'gold', 'forestgreen', 'royalblue']

monty.pencolor('crimson')
monty.pensize(2)
monty.penup()

for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = (R + r) * math.cos(t) - r * math.cos((R + r) / r * t)
    y = (R + r) * math.sin(t) - r * math.sin((R + r) / r * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `R/r = 100/20 = 5` (an integer). The rule says we get `R/r` cusps — how many?
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

R = 100
r = 20
steps = 2000

monty.pencolor('crimson')
monty.pensize(2)
monty.penup()

for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = (R + r) * math.cos(t) - r * math.cos((R + r) / r * t)
    y = (R + r) * math.sin(t) - r * math.sin((R + r) / r * t)
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

**5 pointed cusps** — a 5-pointed epicycloid star. Were you right?

## How It Works

Each cusp is formed when the rolling circle's contact point momentarily stops (the speed of the point equals zero). This happens `R/r` times per revolution. At each stop, the curve makes a sharp outward point — a cusp.

## Explanation Table

| Line | What it does |
|------|-------------|
| `R = 100, r = 20` | R/r = 5 → 5 cusps |
| `(R + r) * cos(t)` | Position of rolling circle center |
| `r * cos((R+r)/r * t)` | Point on the rolling circle |
| `(R+r)/r * t` | Rolling circle's own rotation angle |

## Learning Check

!!! mascot-thinking "Your Turn — Change to 7 Cusps"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `r = 20` to make `R/r = 7`. What value of `r` gives 7 cusps from R=100?
    Hint: 100 / r = 7, so r = ?

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

R = 105
r = 15
steps = 2000

monty.pencolor('royalblue')
monty.pensize(2)
monty.penup()

for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = (R + r) * math.cos(t) - r * math.cos((R + r) / r * t)
    y = (R + r) * math.sin(t) - r * math.sin((R + r) / r * t)
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

`R=105, r=15` → `R/r = 7` → 7 cusps. A 7-pointed epicycloid star!

## Experiments

1. **Try a non-integer ratio.** Use `R=100, r=30`. The curve won't close in one revolution. You'll know it worked when an irregular looping shape appears.

2. **Draw a cardioid.** Use `R=80, r=80` (ratio 1:1). A cardioid has just one cusp and looks like a heart. You'll know it worked when one cusp appears.

3. **Overlay multiple epicycloids.** Use `R=100` and loop over `r` values 10, 20, 25, 50 with different colors. You'll know it worked when 4 different star shapes overlap.

4. **Compare hypo vs epi.** Draw both a hypotrochoid (Spirograph) and an epicycloid on the same canvas. You'll know it worked when both types of curve appear together.

!!! mascot-celebration "Stars from Rolling Circles!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a family of star curves from rolling circle geometry!
    These epicycloids appear in planetary gear systems and the design of rotary engines.
    Up next: **Category 8 — Optical Illusions!**
