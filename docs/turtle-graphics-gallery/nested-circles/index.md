---
hide:
    - toc
---
# Nested Circles

By the end of this lab you'll be able to:

- Use `circle()` to draw circles of different sizes
- Use `goto()` to reposition the turtle between shapes
- Understand why **drawing order** matters when shapes overlap

Twenty concentric rings alternating cyan and navy pulse outward from the center
like a ripple frozen in time.

!!! mascot-welcome "Welcome to Nested Circles!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll draw circles from biggest to smallest, each one covering the last.
    The rings you see are the slivers of color peeking out from behind smaller circles.
    Let's code it together!

## How the Rings Work

`monty.circle(radius)` draws a circle, but the turtle starts at the **bottom** of the circle, not the center.
To keep all circles centered on the same point, we use `monty.goto(0, -radius)` before each circle —
placing the turtle `radius` pixels *below* the center.

We draw from **largest to smallest** so that each new circle neatly covers the middle of the previous one, leaving only a thin ring of the earlier color visible at the edge.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['navy', 'cyan']

for i in range(19, -1, -1):
    radius = 10 + i * 15
    monty.color(colors[i % 2])
    monty.penup()
    monty.goto(0, -radius)
    monty.pendown()
    monty.begin_fill()
    monty.circle(radius)
    monty.end_fill()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The loop counts down: i = 19, 18, 17 … 1, 0.
    The very last circle drawn (i = 0) sits right in the center — will it be **navy** or **cyan**?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['navy', 'cyan']

for i in range(19, -1, -1):
    radius = 10 + i * 15
    monty.color(colors[i % 2])
    monty.penup()
    monty.goto(0, -radius)
    monty.pendown()
    monty.begin_fill()
    monty.circle(radius)
    monty.end_fill()
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

`i = 0` → `0 % 2 = 0` → `colors[0]` → **navy**. The bullseye center is always navy. Were you right?

## How It Works

`range(19, -1, -1)` counts down from 19 to 0 — the three arguments are start, stop (exclusive), and step. A step of -1 counts backwards.

Each iteration computes `radius = 10 + i * 15`, so the radii are 295, 280, 265 … 25, 10 pixels. `colors[i % 2]` picks navy when `i` is even and cyan when `i` is odd, creating the alternating rings.

The critical line is `monty.goto(0, -radius)` — without it, every circle would start from wherever the last one ended, scattering circles randomly across the canvas.

## Explanation Table

| Line | What it does |
|------|-------------|
| `range(19, -1, -1)` | Count down from 19 to 0 (inclusive) |
| `radius = 10 + i * 15` | Each ring is 15 pixels wider than the next inner one |
| `colors[i % 2]` | Alternates between index 0 (navy) and index 1 (cyan) |
| `monty.goto(0, -radius)` | Move to the bottom of the circle so it is centered at the origin |
| `monty.circle(radius)` | Draw a full circle with the given radius |

## Learning Check

!!! mascot-thinking "Your Turn — Fix the Centering"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws 20 circles but they all start from the same spot — a messy spiral!
    Add **one line** inside the loop (after `monty.penup()`) to center each circle at the origin.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['navy', 'cyan']

for i in range(19, -1, -1):
    radius = 10 + i * 15
    monty.color(colors[i % 2])
    monty.penup()
    # ADD ONE LINE HERE to move to (0, -radius)
    monty.pendown()
    monty.begin_fill()
    monty.circle(radius)
    monty.end_fill()
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

The missing line is `monty.goto(0, -radius)` — it repositions the turtle at the bottom of each circle so the center is always at the origin.

## Experiments

1. **Flip the loop direction.** Change `range(19, -1, -1)` to `range(20)`. Now you draw smallest-first. You'll know it worked when the rings look the same but Monty draws them inside-out.

2. **Change the ring gap.** Replace `i * 15` with `i * 10`. Rings are closer together. Try `i * 25` for wider rings. You'll know it worked when the number of visible rings changes.

3. **Try three colors.** Change `colors` to `['navy', 'cyan', 'white']` and use `i % 3`. You'll know it worked when you see a three-tone bullseye pattern.

4. **Make an ellipse.** Replace `monty.circle(radius)` with `monty.circle(radius, steps=60)` — turtle's `circle()` can approximate an ellipse by stretching with `monty.shapesize()` first. You'll know it worked when the rings are no longer perfectly round.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used counting-down loops, `goto()` for precise positioning, and draw order to build
    a perfect bullseye — all core skills for any drawing program.
    Up next: **Starburst** — radiating lines from a single center point.
