---
hide:
    - toc
---
# Astroid

By the end of this lab you'll be able to:

- Plot the astroid using its parametric form `x = R*cos³(t)`, `y = R*sin³(t)`
- Draw a "string art" family of line segments whose envelope is the astroid
- Explain what a curve *envelope* is and how a ladder sliding down a wall traces one

The astroid is a four-cusped star — the path traced by a point on a small circle rolling inside a circle four times its size (a hypocycloid, cousin of the Spirograph). It hides a beautiful secret: if a ladder slides down a wall, the ladder's positions outline the astroid. We'll draw both the star and the sliding "strings" that reveal it.

!!! mascot-welcome "Welcome to the Astroid!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Cube a cosine, cube a sine — get a four-pointed star!
    Then we'll overlay classic string art: dozens of straight lines
    that magically outline the same curved star. No curve is drawn
    by the strings, yet the star appears. Ready?

## How It Works

First the string art: draw straight segments from `(R*cos(a), 0)` on the x-axis to `(0, R*sin(a))` on the y-axis. Every segment satisfies `a² + b² = R²` — like a ladder of fixed length `R` sliding down a wall. Then the star itself: for `t` from 0 to 2π, plot `x = R * cos(t)**3` and `y = R * sin(t)**3`. The cubing pulls points toward the axes, pinching the circle into four sharp cusps — and that curve is exactly the *envelope* the strings outline.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

R = 170

monty.pencolor('silver')
monty.pensize(1)
n_lines = 40
for i in range(n_lines + 1):
    a = 2 * math.pi * i / n_lines
    monty.penup()
    monty.goto(R * math.cos(a), 0)
    monty.pendown()
    monty.goto(0, R * math.sin(a))

monty.pencolor('crimson')
monty.pensize(3)
steps = 400
monty.penup()
for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = R * math.cos(t) ** 3
    y = R * math.sin(t) ** 3
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The star comes from `cos(t)**3` and `sin(t)**3`.
    How many sharp points (cusps) will it have? Count the places where
    cosine or sine hits 1 or -1... guess, then click Run!

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

R = 170

monty.pencolor('silver')
monty.pensize(1)
n_lines = 40
for i in range(n_lines + 1):
    a = 2 * math.pi * i / n_lines
    monty.penup()
    monty.goto(R * math.cos(a), 0)
    monty.pendown()
    monty.goto(0, R * math.sin(a))

monty.pencolor('crimson')
monty.pensize(3)
steps = 400
monty.penup()
for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = R * math.cos(t) ** 3
    y = R * math.sin(t) ** 3
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)`);
</script>

**4 cusps** — one on each axis, at `(±R, 0)` and `(0, ±R)`, exactly where cosine or sine reaches ±1. Were you right?

## How It Works

None of the silver segments is curved, yet together they outline the star. Each segment is *tangent* to the astroid — it kisses the curve at exactly one point without crossing it. A curve that every member of a family of lines touches like this is called the family's **envelope**. The sliding-ladder picture explains the physics: as a ladder of length `R` slides from upright to flat, its midsection sweeps through the region under the curve, but its outer boundary — the farthest the ladder ever reaches — is the astroid. The cubes in `cos³` and `sin³` come from the double-angle algebra of a circle of radius `R/4` rolling inside a circle of radius `R`.

## Explanation Table

| Line | What it does |
|------|-------------|
| `x = R * math.cos(t) ** 3` | The astroid's parametric form — cubing pinches the circle into cusps |
| `monty.goto(R * math.cos(a), 0)` | One end of the "ladder" on the x-axis |
| `monty.goto(0, R * math.sin(a))` | The other end on the y-axis — the two ends always satisfy a² + b² = R² |
| `n_lines = 40` | How many ladder positions to draw; more lines make a smoother envelope |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    This program is supposed to draw the four-pointed star — but it draws a plain
    straight line instead! Look carefully at the exponents. Find the bug and fix
    it so the star appears.

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

R = 170
steps = 400

monty.pencolor('crimson')
monty.pensize(3)
monty.penup()
for i in range(steps + 1):
    t = 2 * math.pi * i / steps
    x = R * math.cos(t) ** 2
    y = R * math.sin(t) ** 2
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)`);
</script>

The exponents say `** 2` instead of `** 3`. Squares are never negative, and since `cos² + sin² = 1` every point lands on the straight line `x + y = R` — change both exponents to `3` and the star returns.

## Experiments

1. **Use more strings.** Change `n_lines = 40` to `n_lines = 120`. You'll know it worked when the silver web becomes so dense the envelope looks like a smooth gray curve.

2. **Try a different hypocycloid.** Replace the star loop's `x` and `y` with `x = R * (0.667 * math.cos(t) + 0.333 * math.cos(2 * t))` and `y = R * (0.667 * math.sin(t) - 0.333 * math.sin(2 * t))`. You'll know it worked when a three-cusped star (the deltoid) appears instead.

3. **Color the quadrants.** Before drawing each string, set the pencolor based on `i` (for example silver for `i < 10`, lightblue for `i < 20`, and so on). You'll know it worked when each quadrant's string fan has its own color.

4. **Cube higher.** Change both `** 3` to `** 5`. You'll know it worked when the star's arms become even skinnier and the cusps sharper — higher odd powers pinch harder.

!!! mascot-celebration "Star of the Gallery!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You drew a curve two ways at once: directly from cos³ and sin³, and as the
    envelope of forty straight lines — and they matched perfectly. That's real
    mathematics made visible. Browse the **Turtle Graphics Gallery** for your next challenge!
