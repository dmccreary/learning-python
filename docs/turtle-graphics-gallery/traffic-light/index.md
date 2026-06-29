---
hide:
    - toc
---
# Traffic Light Stack

By the end of this lab you'll be able to:

- Break a real-world object into drawing primitives (rectangle + circles)
- Write a `light(y, color)` function and call it three times to assemble a scene
- Position shapes vertically using a y-coordinate argument

A classic three-light traffic signal stands on screen — red on top, amber in the middle,
green at the bottom — built from one rectangle and three function calls.

!!! mascot-welcome "Welcome to the Traffic Light!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Every complex drawing is really just simple shapes stacked together.
    In this lab you'll decompose a traffic light into primitives and assemble it with functions!
    Let's code it together!

## How the Light Works

The housing is a tall dark rectangle drawn first. Then `light(y, color)` draws one filled
circle at vertical position `y`. Three calls to `light()` with different y values and colors
stack the three signals inside the housing.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()

def light(y, color):
    monty.penup()
    monty.goto(0, y - 25)
    monty.dot(50, color)

rect(-35, -140, 70, 290, 'dimgray')
light(100,  'red')
light(  0,  'orange')
light(-100, 'green')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `light(y, color)` draws a dot at `(0, y - 25)`. Why subtract 25?
    Think about where `dot()` is centered before clicking Run — then check your answer!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()

def light(y, color):
    monty.penup()
    monty.goto(0, y - 25)
    monty.dot(50, color)

rect(-35, -140, 70, 290, 'dimgray')
light(100,  'red')
light(  0,  'orange')
light(-100, 'green')
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

`dot()` is centered at the turtle's position. Subtracting 25 (half the dot diameter of 50) nudges the center to align visually with the y value passed in. Were you right?

## How It Works

Drawing the housing rectangle **first** ensures it appears behind the lights. Because fills are opaque, the colored dots drawn afterward appear on top of the gray rectangle — correct layering without any extra tricks.

The `rect()` helper reuses the same `for side in [w, h, w, h]` pattern seen in the brick wall and skyline labs — once you learn a pattern, it works everywhere.

## Explanation Table

| Line | What it does |
|------|-------------|
| `rect(x, y, w, h, color)` | Draw a filled rectangle — reusable for any box shape |
| `rect(-35, -140, 70, 290, 'dimgray')` | The housing: 70px wide, 290px tall |
| `def light(y, color)` | Draw one signal dot at the given y position |
| `monty.dot(50, color)` | Filled circle of diameter 50 at current position |
| `light(100, 'red')` | Top light (highest y = highest on screen) |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Fourth Signal"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Some railway signals have a **fourth** white light at the very bottom.
    Add one more `light()` call to put a white dot at `y = -180`, and extend the housing to fit.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()

def light(y, color):
    monty.penup()
    monty.goto(0, y - 25)
    monty.dot(50, color)

rect(-35, -190, 70, 380, 'dimgray')
light(150,  'red')
light( 50,  'orange')
light(-50, 'green')
# ADD ONE LINE: white light at y = -150
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

Add `light(-150, 'white')` as the last line.

## Experiments

1. **Make a pedestrian signal.** Replace the three colored lights with two — `light(60, 'red')` and `light(-60, 'green')`. Make the housing taller and narrower. You'll know it worked when a walk/don't-walk signal appears.

2. **Add a pole.** Before drawing the housing, draw a thin tall gray rectangle from the bottom of the housing to the bottom of the canvas. You'll know it worked when the traffic light appears mounted on a pole.

3. **Add glow rings.** Before each `dot()` call, draw a slightly larger dot in a lighter shade of the same color. You'll know it worked when each light appears to have a halo.

4. **Show only one active light.** Change two of the light colors to `'darkgray'` so only one is "on". You'll know it worked when two lights are dim and one is bright.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You decomposed a real-world object into layers of primitives and assembled it
    with functions — the exact workflow used by every UI designer and game artist!
    Up next: **Fish School** — drawing a creature shape with a function.
