---
hide:
    - toc
---
# Diagonal Stripe Field

By the end of this lab you'll be able to:

- Use `setheading()` to point the turtle in any compass direction
- Translate a loop counter into a starting coordinate to space shapes evenly
- Use `penup()` and `pendown()` to reposition without drawing

Thirty parallel diagonal lines stripe the canvas from bottom-left to top-right,
alternating teal and coral like a bold piece of fabric.

!!! mascot-welcome "Welcome to the Diagonal Stripe Field!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll learn how to aim the turtle at any angle and draw long lines
    across the entire canvas. One formula turns a loop counter into a starting position.
    Let's code it together!

## How the Stripes Work

Each stripe is a diagonal line drawn at a 45° angle. The turtle:
1. Lifts the pen and jumps to a starting position along the bottom edge
2. Aims at exactly 45° with `setheading(45)`
3. Draws a long line across the canvas

The starting x position is computed as `-300 + i * 20` — so stripe 0 starts at x = -300,
stripe 1 at x = -280, stripe 2 at x = -260, and so on, spacing them 20 pixels apart.

!!! mascot-tip "setheading() vs right()"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    `right(n)` turns **relative** to where Monty is already facing.
    `setheading(n)` sets an **absolute** compass heading: 0° = East, 90° = North, 45° = North-East.
    Use `setheading()` when you always want the exact same angle, regardless of prior turns.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pensize(3)

colors = ['teal', 'coral']

for i in range(30):
    monty.color(colors[i % 2])
    monty.penup()
    monty.goto(-300 + i * 20, -250)
    monty.pendown()
    monty.setheading(45)
    monty.forward(500)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    There are 30 stripes and 2 colors alternating. How many **teal** stripes will appear?
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
monty.pensize(3)

colors = ['teal', 'coral']

for i in range(30):
    monty.color(colors[i % 2])
    monty.penup()
    monty.goto(-300 + i * 20, -250)
    monty.pendown()
    monty.setheading(45)
    monty.forward(500)
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

30 ÷ 2 = **15 teal** stripes (and 15 coral). Were you right?

## How It Works

`monty.goto(-300 + i * 20, -250)` is the key line. When `i = 0` the turtle starts at `(-300, -250)` — the lower-left corner. Each increment of `i` shifts the starting x position 20 pixels to the right, spreading the stripes evenly.

`setheading(45)` is called inside the loop to reset the angle each time, because the previous `forward(500)` leaves Monty pointing in the same direction, but it's good practice to set it explicitly.

## Explanation Table

| Line | What it does |
|------|-------------|
| `monty.pensize(3)` | Thicker lines so stripes are clearly visible |
| `colors[i % 2]` | Alternates teal (even i) and coral (odd i) |
| `monty.goto(-300 + i * 20, -250)` | Positions each stripe 20px to the right of the last |
| `monty.setheading(45)` | Points Monty exactly North-East for a 45° diagonal |
| `monty.forward(500)` | Draws a long diagonal line across the canvas |

## Learning Check

!!! mascot-thinking "Your Turn — Add the Heading"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws 30 lines but they all go horizontally — no diagonal!
    Add **one line** after `monty.pendown()` to make every stripe go at 45°.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pensize(3)

colors = ['teal', 'coral']

for i in range(30):
    monty.color(colors[i % 2])
    monty.penup()
    monty.goto(-300 + i * 20, -250)
    monty.pendown()
    # ADD ONE LINE HERE to point Monty North-East
    monty.forward(500)
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

The missing line is `monty.setheading(45)` — heading 45° points exactly North-East.

## Experiments

1. **Change the angle.** Replace `setheading(45)` with `setheading(60)`. Stripes get steeper. Try `setheading(30)` for a shallower angle. You'll know it worked when the stripes visibly tilt.

2. **Change stripe spacing.** Replace `i * 20` with `i * 10`. Stripes are denser. You'll know it worked when the lines nearly overlap.

3. **Add more colors.** Change `colors` to `['teal', 'coral', 'gold']` and `i % 2` to `i % 3`. You'll know it worked when three colors cycle across the stripes.

4. **Vary the line width.** Replace `monty.pensize(3)` with `monty.pensize(1 + i // 5)`. Early stripes are thin, later ones thick. You'll know it worked when the stripe widths visibly grow.

!!! mascot-celebration "Wonderful Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You learned to combine `goto()`, `setheading()`, and a loop counter formula
    to tile an entire canvas with diagonal lines — a technique used in every graphics program!
    Up next: **Dotted Grid** to explore the `dot()` command and size mapping.
