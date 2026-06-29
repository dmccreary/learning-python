---
hide:
    - toc
---
# Honeycomb Grid

By the end of this lab you'll be able to:

- Write a `hexagon(x, y, size)` function and call it from nested loops
- Understand the **offset row** pattern for tiling hexagons
- See why hexagons tile the plane perfectly while squares leave gaps

Dozens of filled hexagons tile the canvas in alternating yellow and orange — a perfect honeycomb just like a beehive.

!!! mascot-welcome "Welcome to the Honeycomb!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hexagons are special: they tile the plane perfectly with no gaps or overlaps.
    In this lab you'll discover how to place them using a neat offset-row trick.
    Let's code it together!

## How the Tiling Works

Each hexagon is drawn by a function. The key to tiling is offset rows:
- Odd rows shift right by half a hexagon width
- The vertical spacing between rows is the hexagon's height × 0.75

The hexagon width is `size * 2` and height is `size * sqrt(3)` (approximately `size * 1.732`).

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def hexagon(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(6):
        monty.forward(size)
        monty.left(60)
    monty.end_fill()

size = 30
colors = ['gold', 'orange']
h = size * math.sqrt(3)
col_w = size * 2

for row in range(7):
    for col in range(8):
        offset = size if row % 2 == 1 else 0
        x = -280 + col * col_w + offset
        y = 180 - row * h * 0.75
        hexagon(x, y, size, colors[(row + col) % 2])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A hexagon has 6 sides. The exterior angle at each corner is `360 / 6 = 60°`.
    After drawing all 6 sides, how many total degrees has Monty turned?
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

def hexagon(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(6):
        monty.forward(size)
        monty.left(60)
    monty.end_fill()

size = 30
colors = ['gold', 'orange']
h = size * math.sqrt(3)
col_w = size * 2

for row in range(7):
    for col in range(8):
        offset = size if row % 2 == 1 else 0
        x = -280 + col * col_w + offset
        y = 180 - row * h * 0.75
        hexagon(x, y, size, colors[(row + col) % 2])
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

6 × 60° = **360°** — a full rotation, just like every regular polygon. Were you right?

## How It Works

The `hexagon()` function uses `setheading(0)` to ensure each hexagon starts facing East, regardless of where the previous one ended. This is essential in a function — you never know what state Monty is in when the function is called.

The offset formula `size if row % 2 == 1 else 0` shifts odd rows by one hexagon radius, staggering them so each hexagon nestles into the gap between two hexagons in the row above.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def hexagon(x, y, size, color)` | Reusable function: draws one hexagon at position (x,y) |
| `monty.setheading(0)` | Always start facing East — critical for consistency |
| `monty.left(60)` | Exterior angle of a hexagon (360/6) |
| `h = size * math.sqrt(3)` | Height of a regular hexagon |
| `offset = size if row % 2 == 1 else 0` | Odd rows shift right by one radius |
| `y = 180 - row * h * 0.75` | Rows overlap by 25% height to close the gaps |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws hexagons but they don't tile — there are gaps and overlaps!
    The row offset formula is wrong. Fix it so odd rows shift by exactly `size` pixels.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def hexagon(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(6):
        monty.forward(size)
        monty.left(60)
    monty.end_fill()

size = 30
colors = ['gold', 'orange']
h = size * math.sqrt(3)
col_w = size * 2

for row in range(7):
    for col in range(8):
        offset = col_w if row % 2 == 1 else 0
        x = -280 + col * col_w + offset
        y = 180 - row * h * 0.75
        hexagon(x, y, size, colors[(row + col) % 2])
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

Change `col_w` to `size` in the offset line — the shift should be one radius, not one full width.


```python
import math
import turtle


def draw_hexagon(size):
    """Draws a single regular hexagon."""
    for _ in range(6):
        turtle.forward(size)
        turtle.left(60)


def draw_honeycomb(rows, cols, size):
    """Draws a grid of hexagons offset to form a honeycomb pattern."""
    # Calculate geometric spacing based on hexagon properties
    w = size * math.sqrt(3)  # Width of the hexagon
    h = size * 1.5  # Vertical distance to the next row

    for r in range(rows):
        for c in range(cols):
            # Calculate the starting X position
            x = c * w
            # Offset every odd row to the right by half a hexagon width
            if r % 2 == 1:
                x += w / 2

            # Calculate the starting Y position
            y = r * h

            # Move turtle to the cell position without drawing
            turtle.penup()
            turtle.goto(x, y)
            turtle.pendown()

            # Render the hexagon
            draw_hexagon(size)


# Main setup
if __name__ == "__main__":
    # Optimize drawing speed
    turtle.speed(0)
    turtle.delay(0)

    # Configuration: Rows, Columns, Edge Size
    draw_honeycomb(rows=6, cols=8, size=30)

    # Keep window open
    turtle.hideturtle()
    turtle.done()
```

## Experiments

1. **Change the colors.** Use `['royalblue', 'navy']` for a blue honeycomb. You'll know it worked when the colors change but the tiling stays perfect.

2. **Make the hexagons bigger.** Change `size = 30` to `size = 45` and reduce the row/col ranges. You'll know it worked when fewer, larger hexagons tile the canvas.

3. **Remove the fill.** Delete the `begin_fill()` and `end_fill()` lines from the function. You'll know it worked when the honeycomb shows only outlines.

4. **Color by row only.** Change `colors[(row + col) % 2]` to `colors[row % 2]`. All cells in a row become the same color. You'll know it worked when horizontal bands of alternating color appear.

!!! mascot-celebration "Incredible Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a full tiling engine with a function, nested loops, and offset-row geometry!
    Bees figured out this pattern millions of years ago — and now you know the math behind it.
    Up next: **City Skyline** — composing a scene from reusable building functions.
