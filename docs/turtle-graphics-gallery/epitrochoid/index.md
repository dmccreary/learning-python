---
hide:
    - toc
---
# Epitrochoid

By the end of this lab you'll be able to:

- Plot an epitrochoid — the curve traced by a pen on a circle rolling *outside* a bigger circle
- Explain how the sign difference between `(R + r)` and `(R - r)` separates outer rolling from inner rolling
- Predict the number of loops from the ratio `R / r`

A small circle of radius `r` rolls around the *outside* of a big circle of radius `R`, with a pen attached at distance `d` from the small circle's center. The pen traces flower-like loops called an epitrochoid — the outside-rolling cousin of the Spirograph's hypotrochoid.

!!! mascot-welcome "Welcome to the Epitrochoid!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In the Spirograph lab a circle rolled around the *inside* of a ring.
    This time the little circle rolls around the *outside* — and just two
    sign changes in the math flip the whole pattern inside out!

## How It Works

At time `t`, the small circle's center sits at distance `R + r` from the origin (the two circles touch, so their centers are one big radius plus one small radius apart). The pen swings around that moving center, giving:

`x = (R + r) * cos(t) - d * cos((R + r) / r * t)`
`y = (R + r) * sin(t) - d * sin((R + r) / r * t)`

Compare with the Spirograph (hypotrochoid): inner rolling uses `(R - r)` and `+ d` in the `x` line. That sign difference is the entire distinction between rolling inside and rolling outside. The curve makes `R / r` loops before it closes.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

R = 100
r = 20
d = 40
steps = 1200
colors = ['crimson', 'darkorange', 'gold', 'forestgreen', 'royalblue']

monty.pensize(2)
monty.penup()
for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = (R + r) * math.cos(t) - d * math.cos((R + r) / r * t)
    y = (R + r) * math.sin(t) - d * math.sin((R + r) / r * t)
    monty.pencolor(colors[(i * 5) // (steps + 1)])
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The curve makes `R / r` loops before it closes. With `R = 100` and `r = 20`,
    how many loops will you see? Make your guess, then click Run!

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

R = 100
r = 20
d = 40
steps = 1200
colors = ['crimson', 'darkorange', 'gold', 'forestgreen', 'royalblue']

monty.pensize(2)
monty.penup()
for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = (R + r) * math.cos(t) - d * math.cos((R + r) / r * t)
    y = (R + r) * math.sin(t) - d * math.sin((R + r) / r * t)
    monty.pencolor(colors[(i * 5) // (steps + 1)])
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)`);
</script>

**5 loops** — `R / r = 100 / 20 = 5`, and each loop gets its own color. Were you right?

## How It Works

Every time the small circle rolls once around its own center, the pen swings out and back — that swing is one loop. Rolling around the outside of the big circle takes exactly `R / r = 5` of those swings, so the curve closes after 5 loops. The pen distance `d` controls how dramatic each loop is: `d` bigger than `r` gives big open loops, `d` smaller than `r` gives gentle bumps, and `d` equal to `r` gives sharp points (that special case is called an epicycloid).

## Explanation Table

| Line | What it does |
|------|-------------|
| `x = (R + r) * math.cos(t) - d * math.cos((R + r) / r * t)` | Center of the rolling circle plus the pen's swing — `(R + r)` means rolling *outside* |
| `d = 40` | Pen offset from the small circle's center; bigger `d` means bigger loops |
| `(R + r) / r * t` | How fast the pen spins — the rolling circle turns 6 times per trip around |
| `colors[(i * 5) // (steps + 1)]` | Splits the 1200 steps into 5 color bands, one per loop |

## Learning Check

!!! mascot-thinking "Your Turn — Roll the Circle Inside"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below uses the *same* `R`, `r`, and `d`, but this is the Spirograph
    (inner-rolling) formula. Run it and compare with the curve above. Then convert it
    to the outer-rolling epitrochoid: change every `(R - r)` to `(R + r)` and the
    `+ d` in the `x` line to `- d`. Which way will the loops point after your edit?

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

R = 100
r = 20
d = 40
steps = 1200

monty.pencolor('purple')
monty.pensize(2)
monty.penup()
for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = (R - r) * math.cos(t) + d * math.cos((R - r) / r * t)
    y = (R - r) * math.sin(t) - d * math.sin((R - r) / r * t)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)`);
</script>

The inner-rolling curve tucks its 5 loops *inward* and stays small; after your sign changes the loops flip *outward* and the whole curve grows — same three numbers, opposite rolling.

## Experiments

1. **Change `r = 20` to `r = 25`.** Now `R / r = 4`. You'll know it worked when the curve closes with exactly 4 loops.

2. **Set `d = 20` (equal to `r`).** You'll know it worked when the round loops sharpen into 5 pointed cusps — an epicycloid.

3. **Try `d = 10` (smaller than `r`).** You'll know it worked when the loops flatten into 5 gentle bumps with no crossing.

4. **Set `r = 30` so `R / r` is not a whole number.** Change `2 * math.pi` to `6 * math.pi` so the curve has time to close. You'll know it worked when 10 loops weave around before the curve meets itself.

!!! mascot-celebration "Rolling On the Outside!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just discovered that one plus-or-minus sign decides whether a circle
    rolls inside or outside — and completely changes the picture.
    Up next: **Superellipse** — one exponent that morphs a star into a circle into a rounded square.
