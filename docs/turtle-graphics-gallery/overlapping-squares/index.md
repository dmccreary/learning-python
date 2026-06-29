---
hide:
    - toc
---
# Overlapping Squares

By the end of this lab you'll be able to:

- Offset shapes diagonally to create deliberate overlap
- Understand how **draw order** controls which shape appears on top
- Plan a color sequence so overlapping areas look intentional

Eight large squares, each shifted 25 pixels diagonally from the last, fan out
in a cascade of color — each new square partially covering the one before it.

!!! mascot-welcome "Welcome to Overlapping Squares!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll learn how to place the same shape in slightly different positions
    and use fill color and draw order to make the overlaps look beautiful.
    Let's code it together!

## How the Overlap Works

Each square starts 25 pixels further right and 25 pixels further down than the previous one.
Because turtle fills are **opaque**, each new square covers part of the previous one —
the last square drawn always appears on top.

A gradient of colors (dark to light) makes each layer visually distinct.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['navy','royalblue','steelblue','cornflowerblue',
          'skyblue','lightskyblue','lightblue','aliceblue']
size = 200
offset = 25

for i in range(8):
    monty.penup()
    monty.goto(-200 + i * offset, 100 - i * offset)
    monty.pendown()
    monty.color(colors[i])
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.right(90)
    monty.end_fill()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The squares are drawn from `i=0` (darkest, navy) to `i=7` (lightest, aliceblue).
    Which square will appear **on top** — the darkest or the lightest?
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

colors = ['navy','royalblue','steelblue','cornflowerblue',
          'skyblue','lightskyblue','lightblue','aliceblue']
size = 200
offset = 25

for i in range(8):
    monty.penup()
    monty.goto(-200 + i * offset, 100 - i * offset)
    monty.pendown()
    monty.color(colors[i])
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.right(90)
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

The **lightest** square (aliceblue, drawn last) sits on top. Were you right?

## How It Works

`monty.goto(-200 + i * offset, 100 - i * offset)` positions each square's top-left corner.
As `i` increases, x increases (moving right) and y decreases (moving down), creating the diagonal cascade.

The `colors` list goes from darkest to lightest. Since the lightest is drawn last and on top, the darkest corners peek out from beneath — creating a staircase of color visible at the edges.

## Explanation Table

| Line | What it does |
|------|-------------|
| `offset = 25` | Each square shifts 25px right and 25px down |
| `goto(-200 + i*offset, 100 - i*offset)` | Diagonal staircase positioning |
| `colors[i]` | A blue gradient from dark navy to near-white |
| `for _ in range(4)` | Draw the four sides of one square |

## Learning Check

!!! mascot-thinking "Your Turn — Reverse the Stack"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws squares but in the wrong order — the darkest square ends up
    on top, covering the lighter ones. Fix the loop so the lightest square is drawn last.
    Hint: reverse the list or the range.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['navy','royalblue','steelblue','cornflowerblue',
          'skyblue','lightskyblue','lightblue','aliceblue']
size = 200
offset = 25

for i in range(7, -1, -1):
    monty.penup()
    monty.goto(-200 + i * offset, 100 - i * offset)
    monty.pendown()
    monty.color(colors[i])
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.right(90)
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

Change `range(7, -1, -1)` back to `range(8)` — lightest (index 7) should be drawn last, appearing on top.

## Experiments

1. **Use warm colors.** Replace the blue gradient with `['darkred','firebrick','red','tomato','coral','lightsalmon','mistyrose','white']`. You'll know it worked when the cascade glows warm red.

2. **Increase the offset.** Change `offset = 25` to `offset = 40`. Squares separate further apart. You'll know it worked when larger portions of each square are visible.

3. **Overlap in the opposite direction.** Change `i * offset` to `-i * offset` in the x formula. The cascade goes left instead of right. You'll know it worked when the lightest square is at the lower-left.

4. **Use rotated squares.** Inside the inner loop, replace `monty.right(90)` with `monty.right(90 + i)` to add a slight rotation to later squares. You'll know it worked when the squares tilt progressively.

!!! mascot-celebration "Excellent Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've explored draw order, gradients, and offset positioning —
    the same principles that every game and animation uses to layer graphics on screen!
    Up next: **Flower with Petal Function** to discover the power of reusable functions.
