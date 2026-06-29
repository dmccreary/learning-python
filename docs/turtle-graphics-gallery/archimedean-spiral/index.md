---
hide:
    - toc
---
# Archimedean Square Spiral

By the end of this lab you'll be able to:

- Create a spiral by increasing the forward step by a fixed amount each iteration
- Understand why a fixed turn angle plus a growing step produces a spiral
- See how changing one number dramatically transforms the shape

A tight square spiral unwinds outward from the center — two hundred short segments,
each slightly longer than the last, all turning exactly 90° to trace a perfect square path.

!!! mascot-welcome "Welcome to the Archimedean Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    No trigonometry needed here — just one loop and one growing variable.
    The spiral emerges from the simplest possible rule: go forward a little more each time!
    Let's code it together!

## How the Spiral Works

Each step: move forward by `step` pixels, turn 90°, then increase `step` by a small amount.
Because the step grows a little each time, each side of the "square" is slightly longer
than the one before — so the path spirals outward instead of closing back on itself.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

step = 2

for i in range(200):
    monty.forward(step)
    monty.right(90)
    step += 1.5
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The turtle turns exactly 90° every step. Will the path look like a square, a spiral, or something else?
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

step = 2

for i in range(200):
    monty.forward(step)
    monty.right(90)
    step += 1.5
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

Both! It looks like a **square spiral** — the 90° turn gives it square corners, while the growing step length makes it spiral outward. Were you right?

## How It Works

`step += 1.5` is the key. If `step` never changed, the turtle would draw the same square over and over in the same place. The tiny increment each iteration means each "side" is 1.5 pixels longer than the last — enough to push the path outward by a consistent amount per revolution.

This is an **Archimedean spiral**: one where the distance between successive loops is constant.

## Explanation Table

| Line | What it does |
|------|-------------|
| `step = 2` | Starting side length — very short at first |
| `monty.forward(step)` | Draw one segment of the current length |
| `monty.right(90)` | Fixed 90° turn gives the square character |
| `step += 1.5` | Grow the step — the source of the spiral |
| `range(200)` | 200 steps = 50 full "squares" (4 sides each) |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws a square over and over in the same place — no spiral!
    Find and fix the bug so the path spirals outward.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

step = 2

for i in range(200):
    monty.forward(step)
    monty.right(90)
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

Add `step += 1.5` as the last line inside the loop so the step grows with each iteration.

## Experiments

1. **Try a triangular spiral.** Change `right(90)` to `right(120)`. You'll know it worked when the spiral has three-sided corners instead of four.

2. **Try a hexagonal spiral.** Change `right(90)` to `right(60)`. You'll know it worked when the spiral has six-sided corners.

3. **Speed up the growth.** Change `step += 1.5` to `step += 3`. The spiral spreads out much faster. You'll know it worked when the loops are further apart.

4. **Start bigger.** Change `step = 2` to `step = 20`. The spiral starts already expanded and hits the canvas edge in fewer turns. You'll know it worked when the first few loops are already wide.

!!! mascot-celebration "Wonderful Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You made a spiral with just three lines inside a loop — no math beyond addition!
    Try changing the turn angle and watch the spiral transform completely.
    Up next: **Rainbow Line Spiral** — adding color banding to the spiral.
