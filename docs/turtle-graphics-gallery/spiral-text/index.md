---
hide:
    - toc
---
# Spiral Text

By the end of this lab you'll be able to:

- Use `turtle.write()` to place text at computed positions
- Place characters along a spiral path using polar coordinates
- Understand how `setheading()` makes each character face the right direction

Each character of a message is placed along an outward spiral, rotated to face tangentially along the curve. The result is text that winds around the center like a snail shell.

!!! mascot-welcome "Welcome to Spiral Text!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    `turtle.write()` can place any text at the turtle's current position.
    This lab combines that with spiral math to spell out a message in a spiral!
    Let's code it together!

## How It Works

Place characters of a message one at a time. For character `i`, the spiral radius grows with `i` and the angle advances by a fixed step. `setheading()` aligns each character tangentially to the spiral direction.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

message = "PYTHON IS FUN! " * 3
angle_step = 20
r_start = 20
r_step = 2.2

for i, ch in enumerate(message):
    angle = math.radians(i * angle_step)
    r = r_start + i * r_step
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.goto(x, y)
    heading = (i * angle_step + 90) % 360
    monty.setheading(heading)
    monty.pencolor('royalblue')
    monty.write(ch, font=('Arial', 10, 'bold'))
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each character is placed at increasing radius and rotated to face the spiral direction.
    Will the characters look like a readable spiral, or just scattered letters?
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
monty.penup()

message = "PYTHON IS FUN! " * 3
angle_step = 20
r_start = 20
r_step = 2.2

for i, ch in enumerate(message):
    angle = math.radians(i * angle_step)
    r = r_start + i * r_step
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.goto(x, y)
    heading = (i * angle_step + 90) % 360
    monty.setheading(heading)
    monty.pencolor('royalblue')
    monty.write(ch, font=('Arial', 10, 'bold'))
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

The message **spirals outward** — each character faces tangentially to the spiral curve. Were you right?

## How It Works

`heading = (i * angle_step + 90) % 360` adds 90° to the radial direction because `setheading(0)` points right (radial direction). Adding 90° makes the turtle face tangentially (along the spiral). `math.cos(angle)`, `math.sin(angle)` converts polar to Cartesian for positioning.

## Explanation Table

| Line | What it does |
|------|-------------|
| `enumerate(message)` | Gives both index `i` and character `ch` |
| `r = r_start + i * r_step` | Radius grows linearly — Archimedean spiral |
| `heading = (i * angle_step + 90) % 360` | Tangential direction — perpendicular to radius |
| `monty.write(ch, font=...)` | Place single character at turtle's position |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Message"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change the message to your name repeated several times.
    Predict: will the spiral look different with a shorter or longer message?

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

message = "HELLO WORLD! " * 4
angle_step = 18
r_start = 20
r_step = 2.5

colors = ['crimson', 'darkorange', 'gold', 'forestgreen', 'royalblue', 'purple']

for i, ch in enumerate(message):
    angle = math.radians(i * angle_step)
    r = r_start + i * r_step
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.goto(x, y)
    heading = (i * angle_step + 90) % 360
    monty.setheading(heading)
    monty.pencolor(colors[i % len(colors)])
    monty.write(ch, font=('Arial', 10, 'bold'))
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

Rainbow-colored spiral text — each character gets a cycling color for a more festive effect.

## Experiments

1. **Tighter spiral.** Decrease `angle_step` to 10. You'll know it worked when more revolutions of the spiral fit in the canvas.

2. **Larger font.** Change `font=('Arial', 10, 'bold')` to `font=('Arial', 14, 'bold')` and increase `r_step = 4`. You'll know it worked when larger letters appear.

3. **Logarithmic spiral.** Replace `r = r_start + i * r_step` with `r = 10 * math.exp(0.06 * i)`. You'll know it worked when the characters space out faster near the outside.

4. **Reverse the spiral.** Change `angle_step` to negative. You'll know it worked when the spiral winds clockwise instead of counter-clockwise.

!!! mascot-celebration "Typography in Motion!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You combined polar coordinates with `turtle.write()` to create spiral text!
    This technique is used in logo design and artistic typography.
    Up next: **Seven-Segment Display** — digital numbers from line segments.
