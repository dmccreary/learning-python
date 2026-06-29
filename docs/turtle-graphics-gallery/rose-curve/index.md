---
hide:
    - toc
---
# Rose Curve

By the end of this lab you'll be able to:

- Plot a rose curve using `r = cos(k * theta)` in polar coordinates
- Understand how odd `k` gives `k` petals and even `k` gives `2k` petals
- Convert polar `(r, theta)` to Cartesian `(x, y)` for plotting

A flower-like curve made from the simple equation `r = cos(k*θ)`. Changing `k` changes the petal count — odd `k` gives `k` petals, even `k` gives `2k` petals.

!!! mascot-welcome "Welcome to the Rose Curve!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    One short equation produces these petal patterns: `r = cos(k * theta)`.
    Math at its most beautiful — a whole flower from three characters!
    Let's code it together!

## How It Works

For theta from 0 to 2π (or 4π for even k), compute `r = scale * cos(k * theta)`. Convert to Cartesian: `x = r * cos(theta)`, `y = r * sin(theta)`. Connect the points to trace the petals.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

k = 5
scale = 140
steps = 1000
colors = ['crimson', 'darkorange', 'gold', 'forestgreen', 'royalblue']

for petal in range(k):
    monty.pencolor(colors[petal % len(colors)])
    monty.penup()
    monty.pensize(2)

monty.pencolor('crimson')
monty.penup()
for i in range(steps + 1):
    theta = 2 * math.pi * i / steps
    r = scale * math.cos(k * theta)
    x = r * math.cos(theta)
    y = r * math.sin(theta)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    With `k=5` (odd), the rule says we get `k` petals. How many petals is that?
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

k = 5
scale = 140
steps = 1000

monty.pencolor('crimson')
monty.pensize(2)
monty.penup()
for i in range(steps + 1):
    theta = 2 * math.pi * i / steps
    r = scale * math.cos(k * theta)
    x = r * math.cos(theta)
    y = r * math.sin(theta)
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

**5 petals** — odd k gives exactly k petals. Were you right?

## How It Works

When `cos(k*theta) < 0`, `r` is negative, which in polar coordinates places the point 180° opposite. This doubles back through the center creating the petal shapes. For even `k`, the 180° reflection creates an additional set of petals.

## Explanation Table

| Line | What it does |
|------|-------------|
| `r = scale * math.cos(k * theta)` | Polar equation of the rose curve |
| `x = r * math.cos(theta)` | Convert polar r, theta to x |
| `y = r * math.sin(theta)` | Convert polar r, theta to y |
| `k = 5` | Odd: 5 petals; try k=4 for 8 petals |

## Learning Check

!!! mascot-thinking "Your Turn — Try k=4 (even)"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `k = 5` to `k = 4`. Even k gives 2k petals — so how many petals will appear?
    Also change range to `range(steps * 2)` and divide by `steps * 2` for even k.
    Predict, then run it!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

k = 4
scale = 130
steps = 2000

monty.pencolor('royalblue')
monty.pensize(2)
monty.penup()
for i in range(steps + 1):
    theta = 4 * math.pi * i / steps
    r = scale * math.cos(k * theta)
    x = r * math.cos(theta)
    y = r * math.sin(theta)
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

`k=4` → 8 petals (2×4). Even-k rose curves need theta to go from 0 to 4π to complete all petals.

## Experiments

1. **Try k=3.** You'll know it worked when 3 petals appear in a triangle arrangement.

2. **Use `sin` instead of `cos`.** Replace `math.cos(k * theta)` with `math.sin(k * theta)`. You'll know it worked when the petals rotate 90°/k.

3. **Draw all odd k from 1 to 9.** Use a loop and different colors. You'll know it worked when 5 overlapping rose curves appear.

4. **Fill the petals.** Call `begin_fill()` and `end_fill()` around the drawing loop. You'll know it worked when the petals are filled in.

!!! mascot-celebration "Blooming with Math!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    One equation — `r = cos(k*theta)` — draws all these flower patterns!
    This is the beauty of polar coordinates: complex shapes from simple equations.
    Up next: **Spirograph** — rolling circles inside circles.
