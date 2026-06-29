---
hide:
    - toc
---
# Butterfly Curve

By the end of this lab you'll be able to:

- Plot the Temple H. Fay butterfly curve using its parametric polar equation
- Understand how `exp(cos(t))` and `cos(4t)` combine to create the wing shapes
- See how a single parametric equation can produce organic, complex shapes

The butterfly curve is a famous parametric curve discovered by Temple H. Fay in 1989. Its polar equation `r = exp(cos t) - 2cos(4t) + sin⁵(t/12)` generates a shape that uncannily resembles butterfly wings.

!!! mascot-welcome "Welcome to the Butterfly Curve!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This curve was discovered in 1989 by Temple H. Fay.
    One equation makes a butterfly — math and art in perfect harmony!
    Let's code it together!

## How It Works

For t from 0 to 12π, compute `r = exp(cos(t)) - 2*cos(4*t) + sin(t/12)^5`. Then convert polar to Cartesian: `x = scale * r * cos(t)`, `y = scale * r * sin(t)`. The many-lobed result needs 12π to complete.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

scale = 50
steps = 2000
monty.pencolor('royalblue')
monty.pensize(1)
monty.penup()

for i in range(steps + 1):
    t = 12 * math.pi * i / steps
    r = (math.exp(math.cos(t)) - 2 * math.cos(4 * t)
         + math.sin(t / 12) ** 5)
    x = scale * r * math.cos(t)
    y = scale * r * math.sin(t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The formula mixes `exp(cos(t))` with `cos(4t)`.
    Will the result look like wings, a star, or something completely different?
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

scale = 50
steps = 2000
monty.pencolor('royalblue')
monty.pensize(1)
monty.penup()

for i in range(steps + 1):
    t = 12 * math.pi * i / steps
    r = (math.exp(math.cos(t)) - 2 * math.cos(4 * t)
         + math.sin(t / 12) ** 5)
    x = scale * r * math.cos(t)
    y = scale * r * math.sin(t)
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

**Butterfly wings** — the `exp(cos t)` term creates the large lobes while `cos(4t)` adds smaller oscillations that form the wing details. Were you right?

## How It Works

`exp(cos(t))` oscillates between `exp(-1) ≈ 0.37` and `exp(1) ≈ 2.72`. The subtracted `2*cos(4*t)` can make `r` negative, adding interior details. The `sin(t/12)^5` term creates the wing-tip elongation by varying slowly over the 12π range.

## Explanation Table

| Line | What it does |
|------|-------------|
| `math.exp(math.cos(t))` | Main lobe — oscillates between 0.37 and 2.72 |
| `2 * math.cos(4 * t)` | Subtracts 4 oscillations — creates wing detail |
| `math.sin(t / 12) ** 5` | Slowly varying term — elongates wing tips |
| `12 * math.pi` | Full sweep for the curve to close |

## Learning Check

!!! mascot-thinking "Your Turn — Remove One Term"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Remove `math.sin(t / 12) ** 5` from the formula (set it to 0).
    How does the curve change without that term?
    Predict, then run it!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

scale = 50
steps = 2000
monty.pencolor('crimson')
monty.pensize(1)
monty.penup()

for i in range(steps + 1):
    t = 12 * math.pi * i / steps
    r = math.exp(math.cos(t)) - 2 * math.cos(4 * t)
    x = scale * r * math.cos(t)
    y = scale * r * math.sin(t)
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

Without `sin(t/12)^5`, the curve is more symmetric — two equal lobes instead of the elongated wing-tip shape.

## Experiments

1. **Change scale.** Try `scale = 70`. You'll know it worked when the curve is larger.

2. **Increase steps.** Try `steps = 5000`. You'll know it worked when the curve is smoother.

3. **Use `cos(4t)` coefficient 3 instead of 2.** The inner lobes will change. You'll know it worked when the wing detail looks different.

4. **Plot the curve in multiple colors.** Break the loop into segments of `steps//6` points each and change the color for each segment. You'll know it worked when different parts of the curve have different colors.

!!! mascot-celebration "Beautiful Math!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You coded one of the most elegant parametric curves in mathematics!
    The butterfly curve shows how `exp`, `cos`, and `sin` can conspire to make art.
    Up next: **Epicycloid Star** — circles rolling outside circles.
