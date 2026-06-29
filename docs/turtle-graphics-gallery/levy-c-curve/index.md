---
hide:
    - toc
---
# Lévy C Curve

By the end of this lab you'll be able to:

- Implement the Lévy C Curve using the same recursive structure as the Koch curve but with 45° angles
- Compare how different replacement angles produce completely different fractal shapes
- Understand how a fractal can tile the plane — the Lévy curve packs into itself perfectly

Each line segment is replaced by two equal segments forming a right-angled peak. After 14 iterations, the curve packs into a shape resembling a dragon's wing or a crinkled leaf.

!!! mascot-welcome "Welcome to the Lévy C Curve!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    You already know the Koch curve uses 60° bumps. The Lévy C uses 45° bumps —
    one small change that produces a completely different, tile-able fractal!
    Let's code it together!

## How It Works

`levy(n, depth)`:
- If `depth == 0`: draw a line of length `n`
- Otherwise: turn left 45°, recurse with `n / √2`, turn right 90°, recurse with `n / √2`, turn left 45°

The key difference from Koch: both recursive calls go in the **same direction**, making an upward peak. The angle is 45° instead of 60°.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('steelblue')

def levy(n, depth):
    if depth == 0:
        monty.forward(n)
        return
    n2 = n / math.sqrt(2)
    monty.left(45)
    levy(n2, depth - 1)
    monty.right(90)
    levy(n2, depth - 1)
    monty.left(45)

monty.penup()
monty.goto(-160, -60)
monty.pendown()
levy(320, 14)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The Koch curve bumps outward in a triangle. The Lévy uses 45° bumps.
    Will the overall shape look more like a snowflake or a cloud?
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
monty.pencolor('steelblue')

def levy(n, depth):
    if depth == 0:
        monty.forward(n)
        return
    n2 = n / math.sqrt(2)
    monty.left(45)
    levy(n2, depth - 1)
    monty.right(90)
    levy(n2, depth - 1)
    monty.left(45)

monty.penup()
monty.goto(-160, -60)
monty.pendown()
levy(320, 14)
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

More like a **cloud or wing** — the asymmetric 45° packing creates an irregular silhouette rather than a symmetric snowflake. Were you right?

## How It Works

Each segment becomes two segments of length `n / √2`. Since `(n/√2)^2 + (n/√2)^2 = n^2`, the two sub-segments form a right isoceles triangle with hypotenuse `n` — the original segment length is preserved geometrically.

The repeated peak replacements pack densely without crossing — the Lévy C curve tiles the plane when copies are placed correctly.

## Explanation Table

| Line | What it does |
|------|-------------|
| `n / math.sqrt(2)` | Sub-segment length by Pythagorean theorem |
| `monty.left(45)` | First rotation — forms the left leg of the peak |
| `monty.right(90)` | Turn between the two sub-segments |
| `monty.left(45)` | Restore original heading after the peak |
| `depth == 0` | Base case: draw a raw segment |

## Learning Check

!!! mascot-thinking "Your Turn — Try Depth 8"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `levy(320, 14)` to `levy(320, 8)`. The curve will be much less detailed.
    Predict what it will look like at only 8 levels of substitution — then run it!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('steelblue')

def levy(n, depth):
    if depth == 0:
        monty.forward(n)
        return
    n2 = n / math.sqrt(2)
    monty.left(45)
    levy(n2, depth - 1)
    monty.right(90)
    levy(n2, depth - 1)
    monty.left(45)

monty.penup()
monty.goto(-160, -60)
monty.pendown()
levy(320, 8)
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

At depth 8 you can clearly see the individual V-shapes before they pack together. The full shape is recognizable but coarser.

## Experiments

1. **Change the color.** Try `pencolor('darkviolet')`. You'll know it worked when the curve turns purple.

2. **Use Koch comparison.** Try the Koch rule (`left(60)`, no `right`, etc.) on the same starting length to compare. You'll know it worked when you see the Koch shape instead.

3. **Thicker pen.** Add `monty.pensize(2)` before the levy call. You'll know it worked when the curve lines are thicker and easier to see.

4. **Flip the curve.** Start facing South (`monty.setheading(270)`) and adjust the starting position. You'll know it worked when the curve hangs downward like a stalactite.

!!! mascot-celebration "Fractal Wings!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You changed one angle (60° → 45°) and got a completely different fractal!
    That's the power of parametric thinking — small changes, huge impact.
    Up next: **Gosper Curve** — a fractal that tiles hexagonal space.
