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

An 8-pointed star is drawn as two overlapping squares rotated 45° from each other, both centered on the same point. A function `star8(cx, cy, size, color)` draws one star at a given center. The outer loop tiles the stars in a grid, offsetting each star by a fixed spacing.

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
        monty.goto(cx, cy)
        monty.setheading(angle_offset - 135)
        monty.forward(size)
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

def star8(cx, cy, size, color):
    monty.pencolor(color)
    for angle_offset in [0, 45]:
        monty.penup()
        monty.goto(cx, cy)
        monty.setheading(angle_offset - 135)
        monty.forward(size)
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
        star8(cx, cy, 30, color)`);
</script>

The stars form a repeating grid pattern — like Islamic tile work. Were you right about the gaps?

## How It Works

An 8-pointed star is two squares rotated 45° from each other, sharing the same center. The `for angle_offset in [0, 45]` loop draws each square in sequence. Before drawing, the turtle walks from the center `(cx, cy)` out to the square's starting corner: `setheading(angle_offset - 135)` points it toward the corner, and `forward(size)` steps out to it. Because both squares are positioned from the same center, their overlap forms a symmetric 8-pointed star.

## Explanation Table

| Line | What it does |
|------|-------------|
| `for angle_offset in [0, 45]` | Draw two squares — one rotated 45° from the other |
| `setheading(angle_offset - 135)` then `forward(size)` | Walk from the star's center to the square's starting corner |
| `size * 1.4` | Side length adjusted so the two squares create points |
| `spacing = 90` | Distance between star centers |
| `(row + col) % 2` | Alternate colors in checkerboard pattern |

## Learning Check

!!! mascot-thinking "Your Turn — Change Spacing"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `spacing = 90` to `spacing = 60`. Will the stars overlap, spread apart, or touch perfectly?
    Predict, then run it to find out!

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

def star8(cx, cy, size, color):
    monty.pencolor(color)
    for angle_offset in [0, 45]:
        monty.penup()
        monty.goto(cx, cy)
        monty.setheading(angle_offset - 135)
        monty.forward(size)
        monty.setheading(angle_offset)
        monty.pendown()
        for _ in range(4):
            monty.forward(size * 1.4)
            monty.left(90)

spacing = 90
colors = ['darkred', 'darkorange']
for row in range(-2, 3):
    for col in range(-2, 3):
        cx = col * spacing
        cy = row * spacing
        color = colors[(row + col) % 2]
        star8(cx, cy, 30, color)`);
</script>

At `spacing = 60` the stars touch perfectly at their points, and the leftover space between them forms the cross shapes seen in real Islamic tile work.

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
