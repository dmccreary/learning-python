---
hide:
    - toc
---
# Lissajous Figure

By the end of this lab you'll be able to:

- Plot a Lissajous figure using `x = A*sin(a*t + δ)`, `y = B*sin(b*t)`
- Understand how the ratio `a:b` controls the number of loops
- Explore how changing phase shift `δ` rotates and reshapes the figure

Lissajous figures are the curves traced by a point whose x and y coordinates oscillate sinusoidally at different frequencies. They appear on oscilloscopes and in sound visualization.

!!! mascot-welcome "Welcome to Lissajous Figures!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Lissajous figures are named after Jules Antoine Lissajous, who studied them in 1857.
    They show up in physics, music, and even logo designs!
    Let's code one together!

## How It Works

For each time step `t` from 0 to 2π, compute `x = A * sin(a*t + delta)` and `y = B * sin(b*t)`. Moving the turtle to `(x, y)` traces out the figure. The ratio `a/b` determines the shape.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

A, B = 160, 130
a, b = 3, 2
delta = math.pi / 4
steps = 1000

monty.penup()
monty.pencolor('royalblue')
monty.pensize(2)

for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = A * math.sin(a * t + delta)
    y = B * math.sin(b * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    With `a=3, b=2` (ratio 3:2), the figure should have `a` loops in one direction and `b` in the other.
    Count the loops — how many will there be along x? Along y?
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

A, B = 160, 130
a, b = 3, 2
delta = math.pi / 4
steps = 1000

monty.penup()
monty.pencolor('royalblue')
monty.pensize(2)

for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = A * math.sin(a * t + delta)
    y = B * math.sin(b * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)`);
</script>

**3 loops along x, 2 loops along y** — the curve crosses itself at 3 × 2 = 6 points. Were you right?

## How It Works

`a:b = 3:2` means x oscillates 3 times for every 2 oscillations of y. Where `a` and `b` are integers with no common factor, the curve is closed. `delta` shifts the x phase — changing it from `π/4` to `0` produces a figure-8, while `π/2` produces an ellipse-like shape.

## Explanation Table

| Line | What it does |
|------|-------------|
| `A, B = 160, 130` | Amplitude (size) in x and y |
| `a, b = 3, 2` | Frequency ratio — controls loop count |
| `delta = math.pi / 4` | Phase shift — rotates the figure |
| `A * math.sin(a * t + delta)` | x oscillates at frequency `a` |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Ratio"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `a, b = 3, 2` to `a, b = 5, 4`. How many crossings will appear?
    The formula is: crossings = a × b. Predict it, then run!

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

A, B = 160, 130
a, b = 5, 4
delta = math.pi / 4
steps = 1000

monty.penup()
monty.pencolor('crimson')
monty.pensize(2)

for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = A * math.sin(a * t + delta)
    y = B * math.sin(b * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)`);
</script>

`a=5, b=4` → 5×4 = 20 crossings — a much more complex, ornate figure.

## Experiments

1. **Try a=1, b=1.** Set `delta=0` too. The result should be a diagonal line (degenerate case). Try `delta=pi/2` for an ellipse. You'll know it worked when a simple shape appears.

2. **Draw multiple figures.** Use a loop over different values of `a` and `b` with different colors. You'll know it worked when several Lissajous figures overlap.

3. **Animate the phase.** In a loop, increase `delta` slowly and redraw. You'll know it worked when the figure appears to rotate.

4. **Try non-integer ratios.** Use `a, b = 3, 2.1`. The figure won't quite close — it'll precess slowly. You'll know it worked when the curve fills a region instead of forming a closed loop.

!!! mascot-celebration "Oscilloscope Art!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You coded a Lissajous figure — the same patterns that appear on oscilloscopes
    when two sine waves are fed to the x and y inputs!
    Up next: **Rose Curve** — petals from a single polar equation.
