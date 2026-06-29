# Plotting a Sine Wave

By the end of this lesson you'll be able to:

- Import the `math` library and use `math.sin()` to calculate sine values
- Use a `for` loop with `goto()` to plot a mathematical function across the canvas
- Adjust the amplitude and color of the wave by changing two variables

Turtle graphics aren't just for shapes — you can use them to **plot math functions**. The turtle visits hundreds of points along the x-axis, calculates the y-value for each, and connects them with `goto()`. The result looks like a graph, drawn live.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Did you know Python can draw math? Today you'll plot a sine wave — the shape of ocean waves,
    sound, and light — right in the browser. Let's code it together!

## The Sine Function

The **sine function** `math.sin(angle)` takes an angle in **radians** and returns a value between -1 and 1. A full sine wave goes from 0 up to 1, back down through 0 to -1, and back up to 0 — a smooth S-shaped curve.

Two steps to plot it with turtle:
1. Loop `x` from -180 to 180
2. Convert `x` to radians with `math.radians(x)`, then call `math.sin()` to get `y`
3. Multiply `y` by an **amplitude** (like 80) to scale it up to canvas size
4. Use `goto(x, y * amplitude)` to move the turtle

```python
import math
for x in range(-180, 180):
    y = math.sin(math.radians(x))
    monty.goto(x, y * 80)
```

## Sample Code

```python
import turtle
import math

monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

amplitude = 80
monty.color('blue')
monty.pensize(2)

monty.penup()
monty.goto(-180, 0)
monty.pendown()

for x in range(-180, 180):
    y = math.sin(math.radians(x))
    monty.goto(x, y * amplitude)

monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The turtle will visit 360 points from x = -180 to x = 179 and draw a line through all of them.
    What shape do you expect to see? Will it look smooth or jagged?
    Make your guess — then click Run!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import math

monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

amplitude = 80
monty.color('blue')
monty.pensize(2)

monty.penup()
monty.goto(-180, 0)
monty.pendown()

for x in range(-180, 180):
    y = math.sin(math.radians(x))
    monty.goto(x, y * amplitude)

monty.hideturtle()
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

Were you right? A smooth S-curve stretching across the canvas — one full cycle of the sine function, scaled to 80 pixels tall.

## How It Works

`math.radians(x)` converts degrees to radians (the unit `math.sin()` expects). The returned value is between -1 and 1, so multiplying by `amplitude` (80) stretches it to ±80 pixels — a visible wave.

Starting with `penup()` and `goto(-180, 0)` positions the turtle at the left edge of the wave without drawing a line there first. Then `pendown()` starts the wave at exactly x = -180.

## Explanation Table

| Line | What it does |
|------|-------------|
| `import math` | Loads the math library (provides `sin`, `cos`, `radians`, etc.) |
| `amplitude = 80` | Controls how tall the wave is — larger = taller |
| `math.radians(x)` | Converts degrees to radians (required by `math.sin`) |
| `math.sin(...)` | Returns a value between -1 and 1 for that angle |
| `y * amplitude` | Scales the value to canvas coordinates |
| `monty.goto(x, y * amplitude)` | Moves the turtle to the next point on the curve |

!!! mascot-tip "Try math.cos() Too"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    Replace `math.sin` with `math.cos` and see how the wave shifts.
    The cosine wave is identical in shape to sine but shifted left by 90 degrees —
    so instead of starting at 0 it starts at its peak!

## Learning Check

!!! mascot-thinking "Your Turn — Draw Two Waves"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws one sine wave. Add **four lines** after the first loop ends to:
    lift the pen (`penup`), go back to `(-180, 0)`, lower the pen (`pendown`),
    and draw a second loop in `'red'` using `math.cos` instead of `math.sin`.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math

monty = turtle.Turtle()
monty.speed(10)

amplitude = 80
monty.pensize(2)

monty.color('blue')
monty.penup()
monty.goto(-180, 0)
monty.pendown()

for x in range(-180, 180):
    y = math.sin(math.radians(x))
    monty.goto(x, y * amplitude)

# Add lines here to reset position and draw a red cosine wave
monty.hideturtle()
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

## Experiments

Try these changes to the sine wave code. Predict first, then run!

1. Change `amplitude = 80` to `amplitude = 160`.
   **You'll know it worked when** the wave is twice as tall and the peaks nearly reach the top of the canvas.

2. Change `amplitude = 80` to `amplitude = 30`.
   **You'll know it worked when** the wave is much flatter — almost a straight line.

3. Replace `math.sin` with `math.cos`.
   **You'll know it worked when** the wave starts at its peak (y = amplitude) instead of at zero.

4. Change `range(-180, 180)` to `range(-360, 360, 2)` (step by 2).
   **You'll know it worked when** you see two full cycles of the wave across the canvas.

5. Multiply the radians by `2` before passing to `math.sin`: `math.sin(math.radians(x) * 2)`.
   **You'll know it worked when** the wave completes two full cycles in the same x range.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You plotted a mathematical function with turtle — you're writing the kind of code scientists
    and engineers use to visualize data! Try combining sin and cos in the same loop for interesting patterns.
    Let's code it together!
