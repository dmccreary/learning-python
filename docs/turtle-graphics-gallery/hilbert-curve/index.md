---
hide:
    - toc
---
# Hilbert Curve

By the end of this lab you'll be able to:

- Implement a space-filling curve using two mutually recursive functions
- Understand what "space-filling" means — a curve that visits every point in a region
- See how two functions can call each other back and forth (mutual recursion)

A continuous curve that fills an entire square region without crossing itself. At depth 5, the Hilbert Curve visits `4^5 = 1024` tiny squares — leaving no gaps.

!!! mascot-welcome "Welcome to the Hilbert Curve!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    David Hilbert discovered this space-filling curve in 1891. It's used today
    in database indexing, image processing, and fractal antennas!
    Let's code it together!

## How It Works

Two functions — `hilbert_a()` and `hilbert_b()` — each produce one "U" shape. They call each other to fill the space recursively:

- `hilbert_a(n)`: turn left, call B, forward, call A, turn right, forward, call A, turn left, forward, call B, turn right
- `hilbert_b(n)`: turn right, call A, forward, call B, turn left, forward, call B, turn right, forward, call A, turn left

The `n` parameter controls depth — at depth 0, only `forward()` is drawn, no turns. This prevents infinite recursion.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('teal')
monty.pensize(1)

step = 6

def hilbert_a(n):
    if n == 0:
        return
    monty.left(90)
    hilbert_b(n - 1)
    monty.forward(step)
    monty.right(90)
    hilbert_a(n - 1)
    monty.forward(step)
    hilbert_a(n - 1)
    monty.right(90)
    monty.forward(step)
    hilbert_b(n - 1)
    monty.left(90)

def hilbert_b(n):
    if n == 0:
        return
    monty.right(90)
    hilbert_a(n - 1)
    monty.forward(step)
    monty.left(90)
    hilbert_b(n - 1)
    monty.forward(step)
    hilbert_b(n - 1)
    monty.left(90)
    monty.forward(step)
    hilbert_a(n - 1)
    monty.right(90)

monty.penup()
monty.goto(-170, -170)
monty.pendown()
hilbert_a(5)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A "space-filling" curve visits every point in a region.
    Will the curve look like a grid of U-shapes, or like a single winding path?
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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('teal')
monty.pensize(1)

step = 6

def hilbert_a(n):
    if n == 0:
        return
    monty.left(90)
    hilbert_b(n - 1)
    monty.forward(step)
    monty.right(90)
    hilbert_a(n - 1)
    monty.forward(step)
    hilbert_a(n - 1)
    monty.right(90)
    monty.forward(step)
    hilbert_b(n - 1)
    monty.left(90)

def hilbert_b(n):
    if n == 0:
        return
    monty.right(90)
    hilbert_a(n - 1)
    monty.forward(step)
    monty.left(90)
    hilbert_b(n - 1)
    monty.forward(step)
    hilbert_b(n - 1)
    monty.left(90)
    monty.forward(step)
    hilbert_a(n - 1)
    monty.right(90)

monty.penup()
monty.goto(-170, -170)
monty.pendown()
hilbert_a(5)`);
</script>

A **single winding path** that fills the square — every cell visited exactly once, never crossing itself. Were you right?

## How It Works

`hilbert_a` and `hilbert_b` call each other — this is **mutual recursion**. Each function produces a U-shape oriented differently, and together they fill the whole square.

At depth `n`, the curve has `4^n` segments. At depth 5, that's `4^5 = 1024` tiny squares visited.

## Explanation Table

| Line | What it does |
|------|-------------|
| `if n == 0: return` | Base case — stop recursing |
| `hilbert_a` calls `hilbert_b` | Mutual recursion — each function needs the other |
| `monty.left(90)` / `right(90)` | Orientation turns between U-shapes |
| `monty.forward(step)` | Connect adjacent U-shapes |
| `step = 6` | Size of each unit segment |

## Learning Check

!!! mascot-thinking "Your Turn — Try Depth 3"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `hilbert_a(5)` to `hilbert_a(3)`. How many cells will be visited?
    (`4^3 = ?`). Predict, then run it to see the simpler structure clearly.

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('teal')
monty.pensize(2)

step = 40

def hilbert_a(n):
    if n == 0:
        return
    monty.left(90)
    hilbert_b(n - 1)
    monty.forward(step)
    monty.right(90)
    hilbert_a(n - 1)
    monty.forward(step)
    hilbert_a(n - 1)
    monty.right(90)
    monty.forward(step)
    hilbert_b(n - 1)
    monty.left(90)

def hilbert_b(n):
    if n == 0:
        return
    monty.right(90)
    hilbert_a(n - 1)
    monty.forward(step)
    monty.left(90)
    hilbert_b(n - 1)
    monty.forward(step)
    hilbert_b(n - 1)
    monty.left(90)
    monty.forward(step)
    hilbert_a(n - 1)
    monty.right(90)

monty.penup()
monty.goto(-170, -170)
monty.pendown()
hilbert_a(3)`);
</script>

Depth 3 with `step = 40` makes each U-shape large enough to see clearly — you can trace the path from one end to the other.

## Experiments

1. **Change the color.** Try `pencolor('crimson')`. You'll know it worked when the curve turns red.

2. **Add color by step.** Use a counter variable and `pencolor(colors[counter % len(colors)])` inside the step. You'll know it worked when the curve is multicolored.

3. **Try depth 4.** Change back to `step = 12` and `hilbert_a(4)`. You'll know it worked when you see a denser grid-filling pattern.

4. **Draw only hilbert_b.** Call `hilbert_b(4)` instead of `hilbert_a(4)`. You'll know it worked when you see a slightly different orientation of the same space-filling curve.

!!! mascot-celebration "Space Filled!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used **mutual recursion** — two functions calling each other — to build
    one of the most famous curves in mathematics. It's used in real GPS systems!
    Up next: **Cantor Dust** — a fractal made of gaps instead of lines.
