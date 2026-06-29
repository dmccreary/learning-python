---
hide:
    - toc
---
# Sierpiński Carpet

By the end of this lab you'll be able to:

- Write an 8-way recursive function (not 2 or 3 — eight!)
- Understand how a 9-subdivision with one center hole creates the Sierpiński Carpet
- Calculate how much of the original area remains at each depth level

A square divided into 9 equal sub-squares, the center removed, then each of the 8 remaining sub-squares subdivided again — to 4 levels. The lattice of holes becomes denser with each level.

!!! mascot-welcome "Welcome to the Sierpiński Carpet!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Sierpiński Triangle split triangles into 3. Now we split squares into 9
    and remove the center — giving 8 recursive calls per level!
    Let's code it together!

## How It Works

`carpet(x, y, size, depth)` draws a filled square. If `depth > 0`, divide the square into a 3×3 grid and recurse on the 8 non-center sub-squares. The center sub-square is left empty (white background).

The 8 positions: all 9 grid positions minus (1, 1) — the center.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_square(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
    monty.end_fill()

def carpet(x, y, size, depth):
    colors = ['royalblue', 'cornflowerblue', 'deepskyblue', 'lightblue', 'lightcyan']
    draw_square(x, y, size, colors[min(depth, len(colors) - 1)])
    if depth > 0:
        third = size / 3
        for row in range(3):
            for col in range(3):
                if row == 1 and col == 1:
                    continue
                carpet(x + col * third, y + row * third, third, depth - 1)

carpet(-160, -160, 320, 4)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    At depth 4, the remaining filled fraction is `(8/9)^4 ≈ 62%` of the original area.
    Will the carpet look mostly filled-in, or mostly holes?
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

def draw_square(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
    monty.end_fill()

def carpet(x, y, size, depth):
    colors = ['royalblue', 'cornflowerblue', 'deepskyblue', 'lightblue', 'lightcyan']
    draw_square(x, y, size, colors[min(depth, len(colors) - 1)])
    if depth > 0:
        third = size / 3
        for row in range(3):
            for col in range(3):
                if row == 1 and col == 1:
                    continue
                carpet(x + col * third, y + row * third, third, depth - 1)

carpet(-160, -160, 320, 4)
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

**Mostly filled-in** — `(8/9)^4 ≈ 62%` remains at depth 4, so more than half the area is still colored. But the holes are clearly visible at multiple scales. Were you right?

## How It Works

`for row in range(3): for col in range(3)` generates all 9 sub-square positions. `if row == 1 and col == 1: continue` skips the center. The remaining 8 get recursive calls.

At depth `n`, the remaining area fraction is `(8/9)^n`. As depth → ∞, this approaches 0 — the Sierpiński Carpet has zero area but infinite boundary length.

## Explanation Table

| Line | What it does |
|------|-------------|
| `third = size / 3` | Divide the square into thirds |
| `for row, col in range(3), range(3)` | Generate all 9 sub-square positions |
| `if row==1 and col==1: continue` | Skip the center — the defining hole |
| `carpet(x + col*third, y + row*third, ...)` | Recurse on each of the 8 sub-squares |

## Learning Check

!!! mascot-thinking "Your Turn — Try Depth 3"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `depth=4` to `depth=3`. The remaining area is `(8/9)^3 ≈ 70%`.
    Count the visible center holes at each level — how many are there at depth 3?
    Predict (1 + 8 + 64 = ?) then check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_square(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
    monty.end_fill()

def carpet(x, y, size, depth):
    colors = ['royalblue', 'cornflowerblue', 'deepskyblue', 'lightblue', 'lightcyan']
    draw_square(x, y, size, colors[min(depth, len(colors) - 1)])
    if depth > 0:
        third = size / 3
        for row in range(3):
            for col in range(3):
                if row == 1 and col == 1:
                    continue
                carpet(x + col * third, y + row * third, third, depth - 1)

carpet(-160, -160, 320, 3)
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

`1 + 8 + 64 = 73` holes at depth 3 — one big center hole, 8 medium holes, 64 small holes.

## Experiments

1. **Use warm colors.** Replace the blues with `['darkred', 'orangered', 'orange', 'gold', 'lightyellow']`. You'll know it worked when the carpet turns orange/red.

2. **Skip a different cell.** Change `if row == 1 and col == 1` to `if row == 0 and col == 0` (skip the bottom-left). You'll know it worked when holes appear in the corners instead of centers.

3. **Skip two cells.** Add an extra `or (row == 0 and col == 2)` condition. You'll know it worked when two types of holes appear.

4. **Try depth 5.** Much slower but more detailed. You'll know it worked when you see tiny square holes at multiple scales.

!!! mascot-celebration "Eight-Way Recursion!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used 8 recursive calls — more than any previous fractal in this gallery!
    As depth → ∞, the carpet has zero area but is still "measurably" 2D.
    Up next: **Barnsley Fern** — a fractal drawn by random transformations.
