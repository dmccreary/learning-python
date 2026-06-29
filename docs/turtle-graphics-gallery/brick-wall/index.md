---
hide:
    - toc
---
# Brick Wall

By the end of this lab you'll be able to:

- Write a `brick()` function and call it from nested loops
- Apply the **offset row** pattern to stagger alternate rows
- Use `pencolor` and `fillcolor` separately to add outlines to filled shapes

Eight rows of warm red-brown bricks fill the canvas, each row staggered
by half a brick — just like a real wall laid by a bricklayer.

!!! mascot-welcome "Welcome to the Brick Wall!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Brick laying has a secret: alternate rows are shifted by half a brick so cracks don't line up
    and the wall stays strong. You'll code that same pattern right now!
    Let's code it together!

## How the Wall Works

The `brick(x, y, w, h, color)` function draws one filled rectangle with a dark outline.
The offset pattern: if `row % 2 == 1` (an odd row), shift the starting x by half a brick width.
This staggers the rows so each brick spans the joint of two bricks below it.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def brick(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.fillcolor(color)
    monty.pencolor('black')
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()

bw, bh = 70, 28
colors = ['firebrick', 'brown', 'darkred']

for row in range(8):
    offset = bw // 2 if row % 2 == 1 else 0
    for col in range(-3, 5):
        x = col * bw + offset - 180
        y = -150 + row * bh
        brick(x, y, bw - 3, bh - 3, colors[(row + col) % 3])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Odd rows (`row % 2 == 1`) are shifted right by `bw // 2 = 35` pixels.
    Will the bricks in row 1 (odd) line up with the joints in row 0, or with the middles of row 0's bricks?
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

def brick(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.fillcolor(color)
    monty.pencolor('black')
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()

bw, bh = 70, 28
colors = ['firebrick', 'brown', 'darkred']

for row in range(8):
    offset = bw // 2 if row % 2 == 1 else 0
    for col in range(-3, 5):
        x = col * bw + offset - 180
        y = -150 + row * bh
        brick(x, y, bw - 3, bh - 3, colors[(row + col) % 3])
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

Row 1's bricks line up with the **middles** of row 0's bricks — that's what makes it a proper offset bond. Were you right?

## How It Works

`monty.fillcolor(color)` and `monty.pencolor('black')` set the fill and outline colors independently. This is how you draw filled shapes with a visible border — `monty.color(c)` sets both to the same color, but `fillcolor`/`pencolor` let you separate them.

`offset = bw // 2 if row % 2 == 1 else 0` is Python's **ternary expression**: a compact `if/else` on one line. It reads: "set offset to half a brick if the row is odd, otherwise zero."

## Explanation Table

| Line | What it does |
|------|-------------|
| `monty.fillcolor(color)` | Set fill color separately from outline |
| `monty.pencolor('black')` | Set outline color to black |
| `offset = bw // 2 if row % 2 == 1 else 0` | Ternary: offset odd rows by half a brick |
| `for side in [w, h, w, h]` | Draw four sides in one loop |
| `colors[(row + col) % 3]` | Cycle three brick shades across the wall |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws a grid of bricks but they are NOT staggered — all rows line up!
    Fix the one line that computes the offset so alternate rows shift by half a brick width.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def brick(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.fillcolor(color)
    monty.pencolor('black')
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()

bw, bh = 70, 28

for row in range(8):
    offset = 0
    for col in range(-3, 5):
        x = col * bw + offset - 180
        y = -150 + row * bh
        brick(x, y, bw - 3, bh - 3, 'firebrick')
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

Change `offset = 0` to `offset = bw // 2 if row % 2 == 1 else 0`.

## Experiments

1. **Change brick colors.** Replace `['firebrick','brown','darkred']` with `['lightyellow','beige','wheat']` for a light stone wall. You'll know it worked when the wall color changes completely.

2. **Make taller bricks.** Change `bh = 28` to `bh = 40`. You'll know it worked when there are fewer rows of taller bricks.

3. **Try running-bond offset.** Change the offset to `bw // 3` for a different pattern called running bond. You'll know it worked when the stagger is one-third of a brick instead of one-half.

4. **Add mortar.** Change `bh - 3` to `bh - 5` and `bw - 3` to `bw - 6`. The larger gaps show more "mortar" between bricks. You'll know it worked when the dark gaps become wider.

!!! mascot-celebration "Incredible Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You coded a brick wall complete with offset rows, separate fill and outline colors,
    and a three-shade color cycle — that's real craft in Python!
    Up next: **Stars of Different Sizes** — the geometry of a 5-pointed star.
