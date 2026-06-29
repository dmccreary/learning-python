---
hide:
    - toc
---
# Dotted Grid

By the end of this lab you'll be able to:

- Place dots at every intersection of a grid using nested loops
- Use `dot()` to draw a filled circle in one line
- Map a loop variable to a visual property (dot size) to add depth

One hundred steel-blue dots fill a 10×10 grid. Each row of dots grows a little
larger, so the bottom looks heavier and closer — a simple trick for creating depth.

!!! mascot-welcome "Welcome to the Dotted Grid!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll discover `dot()` — turtle's one-line circle command —
    and see how mapping a loop variable to size adds a sense of perspective to a grid.
    Let's code it together!

## How the Grid Works

Two nested loops step through every (row, col) pair from (0,0) to (9,9).
The position of each dot is:

- `x = -180 + col * 40` — 10 columns, 40 pixels apart, centered on the canvas
- `y = 180 - row * 40` — 10 rows, 40 pixels apart, top to bottom

The dot size is `4 + row * 2`: row 0 → size 4, row 9 → size 22.
Larger dots toward the bottom give the illusion of a flat surface receding upward.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

for row in range(10):
    for col in range(10):
        x = -180 + col * 40
        y = 180 - row * 40
        dot_size = 4 + row * 2
        monty.penup()
        monty.goto(x, y)
        monty.dot(dot_size, 'steelblue')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The grid is 10 columns × 10 rows. How many dots will be drawn in total?
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

for row in range(10):
    for col in range(10):
        x = -180 + col * 40
        y = 180 - row * 40
        dot_size = 4 + row * 2
        monty.penup()
        monty.goto(x, y)
        monty.dot(dot_size, 'steelblue')
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

10 × 10 = **100 dots**. Were you right?

## How It Works

`monty.dot(size, color)` draws a filled circle centered at the turtle's current position — no `begin_fill()` needed.

`monty.penup()` before `goto()` is essential here. Without it, Monty would drag a line from dot to dot across every row.

The size formula `4 + row * 2` is a **linear mapping** — it converts the row index (0–9) into a pixel size (4–22). This pattern of converting one number range to another appears constantly in data visualization.

## Explanation Table

| Line | What it does |
|------|-------------|
| `for row in range(10)` | Outer loop — 10 rows |
| `for col in range(10)` | Inner loop — 10 columns |
| `x = -180 + col * 40` | x position: left-to-right, 40px apart |
| `y = 180 - row * 40` | y position: top-to-bottom, 40px apart |
| `dot_size = 4 + row * 2` | Dots grow 2px larger each row |
| `monty.dot(dot_size, 'steelblue')` | Draw a filled circle in one line |

## Learning Check

!!! mascot-thinking "Your Turn — Add Size Variation"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws 100 dots but they are all the same small size — no depth effect!
    Fix the `dot_size` line so the dots grow larger toward the bottom of the grid.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

for row in range(10):
    for col in range(10):
        x = -180 + col * 40
        y = 180 - row * 40
        dot_size = 4
        monty.penup()
        monty.goto(x, y)
        monty.dot(dot_size, 'steelblue')
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

Change `dot_size = 4` to `dot_size = 4 + row * 2` to make each row 2 pixels larger than the row above.

## Experiments

1. **Map size to column instead of row.** Change `dot_size = 4 + row * 2` to `dot_size = 4 + col * 2`. You'll know it worked when dots grow larger left-to-right instead of top-to-bottom.

2. **Change the color.** Replace `'steelblue'` with `'tomato'` or `'mediumseagreen'`. You'll know it worked when the dot color changes across the grid.

3. **Color by row.** Create `colors = ['navy', 'royalblue', 'steelblue', 'cornflowerblue', 'skyblue', 'lightblue', 'lightyellow', 'yellow', 'orange', 'red']` and use `colors[row]` as the color. You'll know it worked when each row has a distinct color.

4. **Shrink the gap.** Change `col * 40` and `row * 40` to `col * 20` and `row * 20` — and increase the range to 20. You'll know it worked when 400 tiny dots fill the canvas.

!!! mascot-celebration "Fantastic Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used `dot()`, nested loops, and a size formula to create a grid with visual depth —
    the same technique used in data visualizations to encode a third variable as dot size!
    Up next: **Color Wheel Wedges** — dividing the circle into 12 slices of pure hue.
