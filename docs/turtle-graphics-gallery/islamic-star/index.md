---
hide:
    - toc
---
# Islamic Geometric Star Pattern

By the end of this lab you'll be able to:

- Construct an 8-pointed star using only straight lines and 45° angles
- Tile the star pattern across a grid using translation (offset by fixed amounts)
- Understand how Islamic geometric art uses exact angle rules

A repeating pattern of 8-pointed stars and cross shapes — the kind found in mosque tile work and Persian manuscripts — built entirely from straight line segments at 45° angles.

!!! mascot-welcome "Welcome to the Islamic Star!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Islamic geometric art uses only ruler and compass — no freehand curves.
    This lab builds one of the most common patterns: the 8-pointed star grid!
    Let's code it together!

## How It Works

An 8-pointed star is drawn as two overlapping squares rotated 45° from each other. A function `star(cx, cy, size)` draws one star at a given center. The outer loop tiles the stars in a grid with spacing that makes adjacent stars connect at their points.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def star8(cx, cy, size, color):
    monty.pencolor(color)
    for angle_offset in [0, 45]:
        monty.penup()
        monty.goto(cx, cy - size)
        monty.setheading(angle_offset)
        monty.pendown()
        for _ in range(4):
            monty.forward(size * 1.4)
            monty.left(90)

spacing = 90
colors = ['navy', 'royalblue']
for row in range(-2, 3):
    for col in range(-2, 3):
        cx = col * spacing
        cy = row * spacing
        color = colors[(row + col) % 2]
        star8(cx, cy, 30, color)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Two squares rotated 45° from each other form an 8-pointed star.
    Will the tiled stars connect at their points, or will there be gaps?
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

def star8(cx, cy, size, color):
    monty.pencolor(color)
    for angle_offset in [0, 45]:
        monty.penup()
        monty.goto(cx, cy - size)
        monty.setheading(angle_offset)
        monty.pendown()
        for _ in range(4):
            monty.forward(size * 1.4)
            monty.left(90)

spacing = 90
colors = ['navy', 'royalblue']
for row in range(-2, 3):
    for col in range(-2, 3):
        cx = col * spacing
        cy = row * spacing
        color = colors[(row + col) % 2]
        star8(cx, cy, 30, color)
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

The stars form a repeating grid pattern — like Islamic tile work. Were you right about the gaps?

## How It Works

An 8-pointed star is two squares rotated 45° from each other. The `for angle_offset in [0, 45]` loop draws each square in sequence. The starting position `cy - size` places the turtle at the bottom of the star so the square sweeps through the correct region.

## Explanation Table

| Line | What it does |
|------|-------------|
| `for angle_offset in [0, 45]` | Draw two squares — one rotated 45° from the other |
| `size * 1.4` | Side length adjusted so the two squares create points |
| `spacing = 90` | Distance between star centers |
| `(row + col) % 2` | Alternate colors in checkerboard pattern |

## Learning Check

!!! mascot-thinking "Your Turn — Change Spacing"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `spacing = 90` to `spacing = 70`. Will the stars overlap, spread apart, or touch perfectly?
    Predict, then run it to find out!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def star8(cx, cy, size, color):
    monty.pencolor(color)
    for angle_offset in [0, 45]:
        monty.penup()
        monty.goto(cx, cy - size)
        monty.setheading(angle_offset)
        monty.pendown()
        for _ in range(4):
            monty.forward(size * 1.4)
            monty.left(90)

spacing = 70
colors = ['darkred', 'darkorange']
for row in range(-2, 3):
    for col in range(-2, 3):
        cx = col * spacing
        cy = row * spacing
        color = colors[(row + col) % 2]
        star8(cx, cy, 30, color)
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

At `spacing = 70` the stars overlap, creating a dense interlocking weave — a different kind of Islamic geometric pattern.

## Experiments

1. **Fill the stars.** Add `begin_fill()` before and `end_fill()` after the inner loop. You'll know it worked when the star outlines are filled in.

2. **Use gold and navy.** Change the color list to `['navy', 'gold']`. You'll know it worked when the checkerboard alternates navy and gold stars.

3. **Bigger stars.** Change `size = 30` to `size = 40`. You'll know it worked when the stars are larger and the spacing between them decreases.

4. **Try a single centered star.** Remove the outer loops and call `star8(0, 0, 80, 'darkred')`. You'll know it worked when one large 8-pointed star fills the screen.

!!! mascot-celebration "Pattern Complete!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You recreated a 1000-year-old pattern used in mosques and palaces!
    Geometric art proves that math and beauty are not opposites — they're the same thing.
    Up next: **Category 6 — Nature and Science patterns!**
