---
hide:
    - toc
---
# Superellipse

By the end of this lab you'll be able to:

- Plot the superellipse family `|x/a|^n + |y/b|^n = 1` using its parametric form
- Show how one exponent `n` morphs a shape from star to circle to rounded square
- Write a simple `if` statement to keep the sign of a value while raising its absolute value to a power

One equation, three completely different shapes. The superellipse rule `|x/a|^n + |y/b|^n = 1` draws a pointy four-armed star when `n` is small, a perfect circle at `n = 2`, and an ever-boxier rounded square as `n` grows. Designers love it — the rounded-square "squircle" shape of app icons is a superellipse.

!!! mascot-welcome "Welcome to the Superellipse!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    A circle is `x*x + y*y = 1` — the exponent is 2. But who says it has to be 2?
    Crank the exponent up or down and the circle morphs into stars and squircles.
    One number controls the whole family!

## How It Works

We walk `t` around a circle and warp each point with the exponent: `x = a * sign(cos t) * |cos t|^(2/n)` and `y = b * sign(sin t) * |sin t|^(2/n)`. The `sign` part remembers which quadrant we are in (a simple `if` sets it to `1` or `-1`), and the power `2/n` does the morphing. We clamp the absolute values with a tiny epsilon so we never compute a fractional power of exactly zero.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

a = 160
b = 160
steps = 360

def draw_superellipse(n, color):
    monty.pencolor(color)
    monty.penup()
    for i in range(steps + 1):
        t = 2 * math.pi * i / steps
        c = math.cos(t)
        s = math.sin(t)
        sign_c = 1
        if c < 0:
            sign_c = -1
        sign_s = 1
        if s < 0:
            sign_s = -1
        ac = abs(c)
        if ac < 0.000001:
            ac = 0.000001
        av = abs(s)
        if av < 0.000001:
            av = 0.000001
        x = a * sign_c * ac ** (2.0 / n)
        y = b * sign_s * av ** (2.0 / n)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)

monty.pensize(2)
draw_superellipse(0.8, 'crimson')
draw_superellipse(2, 'forestgreen')
draw_superellipse(4, 'royalblue')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Three curves will appear: `n = 0.8`, `n = 2`, and `n = 4`.
    Which one will look the most like a square — the smallest `n` or the biggest?
    Make your guess, then click Run!

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

a = 160
b = 160
steps = 360

def draw_superellipse(n, color):
    monty.pencolor(color)
    monty.penup()
    for i in range(steps + 1):
        t = 2 * math.pi * i / steps
        c = math.cos(t)
        s = math.sin(t)
        sign_c = 1
        if c < 0:
            sign_c = -1
        sign_s = 1
        if s < 0:
            sign_s = -1
        ac = abs(c)
        if ac < 0.000001:
            ac = 0.000001
        av = abs(s)
        if av < 0.000001:
            av = 0.000001
        x = a * sign_c * ac ** (2.0 / n)
        y = b * sign_s * av ** (2.0 / n)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)

monty.pensize(2)
draw_superellipse(0.8, 'crimson')
draw_superellipse(2, 'forestgreen')
draw_superellipse(4, 'royalblue')

labels = [['n = 0.8', 'crimson'], ['n = 2', 'forestgreen'], ['n = 4', 'royalblue']]
monty.penup()
for i in range(3):
    monty.goto(-185, 175 - 16 * i)
    monty.pencolor(labels[i][1])
    monty.write(labels[i][0])`);
</script>

The **biggest** `n` — the blue `n = 4` curve bulges out toward the corners like a rounded square, while the crimson `n = 0.8` pinches inward into a star. Were you right?

## How It Works

The exponent `2/n` reshapes the circle. At `n = 2` the power is exactly 1, so nothing changes — a perfect circle. When `n > 2` the power is *less* than 1, which pushes middle values of cosine and sine toward 1, fattening the curve into the corners — the bigger `n` gets, the closer to a true square. When `n < 2` the power is *greater* than 1, which squashes middle values toward 0, sucking the sides in toward the axes and leaving a pointy star. All three curves touch at the exact same four points on the axes, because there cosine or sine is 1 and any power of 1 is still 1.

## Explanation Table

| Line | What it does |
|------|-------------|
| `x = a * sign_c * ac ** (2.0 / n)` | The parametric superellipse: keep the sign, raise the size to the power `2/n` |
| `if c < 0: sign_c = -1` | A plain `if` implements the sign function — no tricks needed |
| `if ac < 0.000001: ac = 0.000001` | Epsilon clamp so we never raise exactly 0 to a fractional power |
| `draw_superellipse(4, 'royalblue')` | One function, called three times — that is a parametric *family* |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    This program should draw one complete `n = 4` squircle — but when you run it,
    only the top half appears! One of the two sign `if` statements went missing.
    Find the spot and add the missing two lines.

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

a = 150
b = 150
n = 4
steps = 360

monty.pencolor('royalblue')
monty.pensize(3)
monty.penup()
for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    c = math.cos(t)
    s = math.sin(t)
    sign_c = 1
    if c < 0:
        sign_c = -1
    sign_s = 1
    ac = abs(c)
    if ac < 0.000001:
        ac = 0.000001
    av = abs(s)
    if av < 0.000001:
        av = 0.000001
    x = a * sign_c * ac ** (2.0 / n)
    y = b * sign_s * av ** (2.0 / n)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)`);
</script>

`sign_s` is set to `1` but never flipped — add `if s < 0:` and `    sign_s = -1` right below it, and `y` can finally go negative to draw the bottom half.

## Experiments

1. **Make a true ellipse family.** Change `b = 160` to `b = 100`. You'll know it worked when all three shapes squash into wide versions — star, ellipse, and rounded rectangle.

2. **Go extreme: add `draw_superellipse(10, 'purple')`.** You'll know it worked when a purple shape hugs the outside, looking almost exactly like a square with tiny rounded corners.

3. **Go pointy: add `draw_superellipse(0.5, 'darkorange')`.** You'll know it worked when a four-armed orange star appears inside the crimson one, with even sharper spikes.

4. **Draw the whole morph.** Replace the three calls with a loop: `for n10 in range(8, 41, 4):` then `draw_superellipse(n10 / 10.0, 'gray')`. You'll know it worked when nine gray curves fan smoothly from star to squircle.

!!! mascot-celebration "Squircle Master!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You morphed a star into a circle into a rounded square by turning one dial — the
    exponent `n`. That is the power of a parametric family: one formula, infinite shapes.
    Up next: **Cassini Oval** — watch one oval split into two as a single constant changes.
