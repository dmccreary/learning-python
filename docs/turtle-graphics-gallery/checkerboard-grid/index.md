---
hide:
    - toc
---
# Checkerboard Grid

By the end of this lab you'll be able to:

- Use **nested `for` loops** to iterate over rows and columns
- Compute the (x, y) position of each square from its row and column index
- Choose a color based on whether `row + col` is even or odd

An 8×8 grid of black and white squares fills the canvas — just like a chessboard —
built entirely from loops and arithmetic, not hard-coded coordinates.

!!! mascot-welcome "Welcome to the Checkerboard!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll learn how two loops — one for rows, one for columns — can place
    64 squares on the screen with just a few lines of code.
    Let's code it together!

## How the Grid Works

The outer loop counts **rows** (0–7, top to bottom). The inner loop counts **columns** (0–7, left to right).
For each combination, the position is:

- `x = -160 + col * 40` — starts at the left, shifts right by 40px per column
- `y = 160 - row * 40` — starts at the top, shifts down by 40px per row

The color alternates because `(row + col) % 2` is `0` on even squares and `1` on odd squares —
exactly like the black and white pattern of a chessboard.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

size = 40

for row in range(8):
    for col in range(8):
        x = -160 + col * size
        y = 160 - row * size
        color = 'black' if (row + col) % 2 == 0 else 'white'
        monty.penup()
        monty.goto(x, y)
        monty.pendown()
        monty.color(color)
        monty.begin_fill()
        for _ in range(4):
            monty.forward(size)
            monty.right(90)
        monty.end_fill()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The top-left square is at row=0, col=0. `(0 + 0) % 2 = 0` → black.
    What color is the square at row=2, col=3?
    Work it out, then click Run to check!

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

size = 40

for row in range(8):
    for col in range(8):
        x = -160 + col * size
        y = 160 - row * size
        color = 'black' if (row + col) % 2 == 0 else 'white'
        monty.penup()
        monty.goto(x, y)
        monty.pendown()
        monty.color(color)
        monty.begin_fill()
        for _ in range(4):
            monty.forward(size)
            monty.right(90)
        monty.end_fill()`);
</script>

`(2 + 3) % 2 = 1` → **white**. Were you right?

## How It Works

The innermost `for _ in range(4)` draws one square: forward 40, turn right 90°, four times.
(The `_` is a throwaway variable name used when you don't need the loop counter.)

Before each square, `monty.goto(x, y)` jumps to the correct position with the pen up — without
this, Monty would drag lines across the canvas between squares.

## Explanation Table

| Line | What it does |
|------|-------------|
| `for row in range(8)` | Outer loop — 8 rows top to bottom |
| `for col in range(8)` | Inner loop — 8 columns left to right |
| `x = -160 + col * size` | Column 0 starts at x = -160; each column is 40px to the right |
| `y = 160 - row * size` | Row 0 starts at y = 160; each row is 40px lower |
| `(row + col) % 2` | 0 on even sum → black; 1 on odd sum → white |
| `for _ in range(4)` | Draw the four sides of a square |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws all 64 squares **black** — no alternating pattern!
    Fix the one line that decides the color so the chessboard pattern appears.

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

size = 40

for row in range(8):
    for col in range(8):
        x = -160 + col * size
        y = 160 - row * size
        color = 'black'
        monty.penup()
        monty.goto(x, y)
        monty.pendown()
        monty.color(color)
        monty.begin_fill()
        for _ in range(4):
            monty.forward(size)
            monty.right(90)
        monty.end_fill()`);
</script>

Replace `color = 'black'` with `color = 'black' if (row + col) % 2 == 0 else 'white'`.

## Experiments

1. **Make it colorful.** Replace `'black'` and `'white'` with `'navy'` and `'gold'`. You'll know it worked when the board shows two bold colors instead of grayscale.

2. **Resize the squares.** Change `size = 40` to `size = 30`. The board stays 8×8 but is smaller. Try adjusting the x/y formulas to keep it centered. You'll know it worked when all 64 squares still appear.

3. **Go bigger.** Change `range(8)` to `range(10)` in both loops and adjust starting positions. You'll know it worked when you have a 10×10 grid (100 squares).

4. **Use random colors.** Add `import random` and replace the color line with `color = random.choice(['red','blue','green','purple','orange'])`. You'll know it worked when each square is a different random color.

!!! mascot-celebration "Excellent Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You mastered nested loops, coordinate arithmetic, and modulo-based color selection —
    three of the most powerful tools in all of programming!
    Up next: **Diagonal Stripe Field** to explore line drawing with `setheading()`.
