---
hide:
    - toc
---
# Circular Name Badge

By the end of this lab you'll be able to:

- Arrange text characters in a circle by placing each at a computed angular position
- Use `setheading()` to make each character face outward from the center
- Combine circular text with inner decorations to create a complete badge design

A circular badge with a name arranged around the perimeter, two decorative rings, and a filled circle in the center. The characters face outward to be readable from outside the circle.

!!! mascot-welcome "Welcome to the Circular Badge!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Circular text appears on coins, stamps, and official seals.
    In this lab you'll compute the position and rotation of each letter yourself!
    Let's code it together!

## How It Works

For `n` characters equally spaced around a circle of radius `r`, character `i` is placed at angle `i * 360 / n` degrees. `setheading(angle + 90)` makes the turtle face outward (90° = up = radially outward when angle=0).

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

name = "PYTHON PROGRAMMER"
n = len(name)
r = 110

monty.pencolor('navy')
monty.goto(0, -r)
monty.pendown()
monty.circle(r)
monty.penup()
monty.goto(0, -(r - 12))
monty.pendown()
monty.circle(r - 12)
monty.penup()

for i, ch in enumerate(name):
    angle_deg = 90 - i * 360 / n
    angle_rad = math.radians(angle_deg)
    x = r * math.cos(angle_rad)
    y = r * math.sin(angle_rad)
    monty.goto(x, y)
    monty.setheading(-angle_deg + 90)
    monty.pencolor('navy')
    monty.write(ch, align='center', font=('Arial', 11, 'bold'))

monty.goto(0, 0)
monty.dot(60, 'navy')
monty.pencolor('white')
monty.goto(-30, -8)
monty.write('PYTHON', font=('Arial', 9, 'bold'))
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each character is rotated to face outward. Will the name be readable around the circle,
    or will some letters be upside down at the bottom?
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
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

name = "PYTHON PROGRAMMER"
n = len(name)
r = 110

monty.pencolor('navy')
monty.goto(0, -r)
monty.pendown()
monty.circle(r)
monty.penup()
monty.goto(0, -(r - 12))
monty.pendown()
monty.circle(r - 12)
monty.penup()

for i, ch in enumerate(name):
    angle_deg = 90 - i * 360 / n
    angle_rad = math.radians(angle_deg)
    x = r * math.cos(angle_rad)
    y = r * math.sin(angle_rad)
    monty.goto(x, y)
    monty.setheading(-angle_deg + 90)
    monty.pencolor('navy')
    monty.write(ch, align='center', font=('Arial', 11, 'bold'))

monty.goto(0, 0)
monty.dot(60, 'navy')
monty.pencolor('white')
monty.goto(-30, -8)
monty.write('PYTHON', font=('Arial', 9, 'bold'))`);
</script>

Letters at the top are readable, but the bottom letters are **upside-down** — because the turtle faces outward, letters at the bottom face inward. Were you right?

## How It Works

The turtle always faces "outward" from the center. For letters at the top (12 o'clock position), "outward" is up — and text reads correctly. For letters at the bottom (6 o'clock), "outward" is down — text appears upside down. Real circular typesetting adjusts for this by flipping the bottom half.

## Explanation Table

| Line | What it does |
|------|-------------|
| `angle_deg = 90 - i * 360 / n` | Start at top (90°), go clockwise |
| `setheading(-angle_deg + 90)` | Face outward from center |
| `align='center'` | Center each character on its position |
| `monty.dot(60, 'navy')` | Filled circle in the center |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Name"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `name = "PYTHON PROGRAMMER"` to your own name repeated to fill the circle.
    Try padding it with spaces or asterisks to fill the ring evenly.

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
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

name = "* CODING IS FUN * KEEP CODING! "
n = len(name)
r = 120

monty.pencolor('darkred')
monty.goto(0, -r)
monty.pendown()
monty.circle(r)
monty.penup()
monty.goto(0, -(r - 12))
monty.pendown()
monty.circle(r - 12)
monty.penup()

for i, ch in enumerate(name):
    angle_deg = 90 - i * 360 / n
    angle_rad = math.radians(angle_deg)
    x = r * math.cos(angle_rad)
    y = r * math.sin(angle_rad)
    monty.goto(x, y)
    monty.setheading(-angle_deg + 90)
    monty.pencolor('darkred')
    monty.write(ch, align='center', font=('Arial', 10, 'bold'))

monty.goto(0, 0)
monty.dot(70, 'darkred')
monty.pencolor('white')
monty.goto(-22, -8)
monty.write('CODE', font=('Arial', 10, 'bold'))`);
</script>

The asterisks act as separators between repeated text, just like on real coins!

## Experiments

1. **Flip the bottom half.** For characters where `angle_deg < -90 or angle_deg > 270`, add 180° to the heading. You'll know it worked when all characters are readable.

2. **Use a different font size.** Change the font size and adjust `r` accordingly. You'll know it worked when larger or smaller letters appear around the ring.

3. **Add a star decoration.** After the circle, draw a 5-pointed star inside the center dot. You'll know it worked when a star appears in the middle.

4. **Make a planet badge.** Use concentric circles at different radii and put the planet's name around the outer ring. You'll know it worked when it looks like a planet seal.

!!! mascot-celebration "Your Badge Is Ready!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You computed circular text placement using angles and `goto()` — the same math
    used in coin minting and official seal design!
    Up next: **Block Letters** — drawing large outlined letters from line segments.
