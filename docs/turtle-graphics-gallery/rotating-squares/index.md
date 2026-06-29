---
hide:
    - toc
---
# Rotating Squares Illusion

By the end of this lab you'll be able to:

- Draw concentric squares that each rotate slightly from the last
- Understand how a small per-square rotation creates a strong spinning illusion
- Control the illusion strength by varying the rotation step

Concentric squares, each rotated a few degrees from the previous one — but perfectly static. The human visual system interprets the gradual rotation as actual spinning motion. This is the "rotating squares" optical illusion.

!!! mascot-welcome "Welcome to the Rotating Squares Illusion!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Your brain sees motion where there is none — pure static geometry!
    This is one of the most famous geometric optical illusions in Op Art.
    Let's code it together!

## How It Works

Draw 20 concentric squares. Each square is rotated 5° more than the previous one. The squares also shrink inward by a fixed amount. The combination of rotation + shrinkage creates the illusion of a spiral/spinning motion.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_squares = 20
start_size = 160
rot_step = 5

for i in range(n_squares):
    size = start_size - i * 7
    if size <= 0:
        break
    angle = i * rot_step
    monty.penup()
    monty.goto(0, 0)
    monty.setheading(angle)
    monty.forward(size * math.sqrt(2) / 2)
    monty.setheading(angle + 135)
    monty.pendown()
    monty.pensize(max(1, 3 - i // 7))
    color_val = int(255 * i / n_squares)
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each square is rotated 5° more than the last — they're all stationary.
    Will this look like a stack of squares, or will it appear to be spinning?
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

n_squares = 20
start_size = 160
rot_step = 5
colors = ['navy', 'royalblue', 'steelblue', 'deepskyblue']

for i in range(n_squares):
    size = start_size - i * 7
    if size <= 0:
        break
    angle = i * rot_step
    monty.penup()
    monty.goto(0, 0)
    monty.setheading(angle)
    monty.forward(size * math.sqrt(2) / 2)
    monty.setheading(angle + 135)
    monty.pencolor(colors[i % len(colors)])
    monty.pendown()
    monty.pensize(2)
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
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

The image **appears to spin** — but it's completely static. Were you right? The illusion is strongest when you look slightly to the side of the image.

## How It Works

Each square's corner is found by going forward from the center at 45° (diagonal) and then turning to draw the square. The illusion works because our visual system extrapolates motion from the gradual rotation gradient — it "reads" the progression of angles as a time sequence rather than a spatial arrangement.

## Explanation Table

| Line | What it does |
|------|-------------|
| `angle = i * rot_step` | Each square rotated 5° more than the last |
| `setheading(angle + 135)` | Start drawing from correct corner |
| `size - i * 7` | Squares shrink as they approach center |
| `forward(size * sqrt(2) / 2)` | Distance to corner along diagonal |

## Learning Check

!!! mascot-thinking "Your Turn — Make It Spin Faster"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `rot_step = 5` to `rot_step = 10`. Will the illusion of spinning be stronger or weaker?
    Predict, then run to find out!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_squares = 20
start_size = 160
rot_step = 10
colors = ['darkred', 'crimson', 'orangered', 'darkorange']

for i in range(n_squares):
    size = start_size - i * 7
    if size <= 0:
        break
    angle = i * rot_step
    monty.penup()
    monty.goto(0, 0)
    monty.setheading(angle)
    monty.forward(size * math.sqrt(2) / 2)
    monty.setheading(angle + 135)
    monty.pencolor(colors[i % len(colors)])
    monty.pendown()
    monty.pensize(2)
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
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

`rot_step = 10` creates a more chaotic-looking arrangement that may look like faster spinning to some viewers.

## Experiments

1. **Try rot_step = 45.** The squares alternate between two orientations. You'll know it worked when you see only two overlapping orientations.

2. **Use black and white alternating.** Set colors to `['black', 'white']`. You'll know it worked when the high contrast makes the illusion even stronger.

3. **Use hexagons instead of squares.** Change the inner loop to draw 6 sides of length `size/1.5` with `left(60)`. You'll know it worked when hexagons appear.

4. **Draw both clockwise and counter-clockwise.** Run the loop twice — once with `rot_step = 5` and once with `-5`. You'll know it worked when two counter-rotating spiral illusions appear.

!!! mascot-celebration "Your Brain Was Tricked!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a genuine optical illusion entirely from static squares!
    Op Art (Optical Art) uses math and geometry to fool the visual system.
    Up next: **Café Wall Illusion** — parallel horizontal lines that look slanted.
