---
hide:
    - toc
---
# Spiral of Spirals

By the end of this lab you'll be able to:

- Write a reusable `mini_spiral(x, y, facing)` function that draws a small spiral
- Arrange multiple spiral instances in a circle using `math.cos()` and `math.sin()`
- Understand how a micro-pattern repeated at macro scale creates fractal-like complexity

Twelve small square spirals are arranged in a ring, each one rotated to face outward from the center. From a distance the whole arrangement looks like a single rotating burst.

!!! mascot-welcome "Welcome to the Spiral of Spirals!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This lab combines two ideas: the spiral you already know and the rotation-around-a-circle
    trick from the pinwheel. Together they create something much richer than either alone.
    Let's code it together!

## How It Works

A `mini_spiral()` function draws a small 30-step square spiral at a given `(x, y)` position and starting `heading`. The outer loop places 12 of these spirals evenly around a circle of radius 150, each one facing outward (heading = angle from center).

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def mini_spiral(x, y, facing, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(facing)
    monty.pendown()
    monty.color(color)
    step = 2
    for _ in range(30):
        monty.forward(step)
        monty.right(90)
        step += 1.5

colors = ['red', 'orange', 'gold', 'green', 'teal', 'blue',
          'purple', 'violet', 'crimson', 'darkorange', 'forestgreen', 'royalblue']

radius = 150
for i in range(12):
    angle = i * 30
    x = radius * math.cos(math.radians(angle))
    y = radius * math.sin(math.radians(angle))
    mini_spiral(x, y, angle, colors[i])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each small spiral starts facing outward from the center.
    Will the 12 small spirals overlap each other, or will they stay separate?
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

def mini_spiral(x, y, facing, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(facing)
    monty.pendown()
    monty.color(color)
    step = 2
    for _ in range(30):
        monty.forward(step)
        monty.right(90)
        step += 1.5

colors = ['red', 'orange', 'gold', 'green', 'teal', 'blue',
          'purple', 'violet', 'crimson', 'darkorange', 'forestgreen', 'royalblue']

radius = 150
for i in range(12):
    angle = i * 30
    x = radius * math.cos(math.radians(angle))
    y = radius * math.sin(math.radians(angle))
    mini_spiral(x, y, angle, colors[i])
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

The spirals mostly **stay separate** — each one starts 30 segments long and grows inward toward the center gap. Were you right?

## How It Works

`setheading(angle)` makes each spiral face outward — the heading equals the angle around the circle. This is because the position angle and the outward-facing angle are the same number when measured from the East direction.

The outer loop generates coordinates with `x = r·cos(angle)`, `y = r·sin(angle)` — the standard polar-to-Cartesian conversion.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def mini_spiral(x, y, facing, color)` | Reusable function: draws one small spiral |
| `monty.setheading(facing)` | Point each spiral outward from the center |
| `radius = 150` | Distance from center to each spiral's start |
| `angle = i * 30` | 12 spirals × 30° = full 360° circle |
| `x = radius * math.cos(math.radians(angle))` | Polar to Cartesian x |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Ring Size"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    What happens if you change `radius = 150` to `radius = 80`?
    Predict whether the spirals will overlap — then run it to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def mini_spiral(x, y, facing, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(facing)
    monty.pendown()
    monty.color(color)
    step = 2
    for _ in range(30):
        monty.forward(step)
        monty.right(90)
        step += 1.5

colors = ['red', 'orange', 'gold', 'green', 'teal', 'blue',
          'purple', 'violet', 'crimson', 'darkorange', 'forestgreen', 'royalblue']

radius = 80
for i in range(12):
    angle = i * 30
    x = radius * math.cos(math.radians(angle))
    y = radius * math.sin(math.radians(angle))
    mini_spiral(x, y, angle, colors[i])
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

With `radius = 80` the spirals overlap significantly in the center — the smaller ring packs them tighter than the spirals' own size, creating a dense, tangled core.

## Experiments

1. **Try 6 spirals.** Change `range(12)` to `range(6)` and `i * 30` to `i * 60`. You'll know it worked when only six spirals appear, spaced further apart.

2. **Make all spirals the same color.** Remove the `colors` parameter and hard-code `monty.color('navy')`. You'll know it worked when all spirals are the same deep blue.

3. **Face inward.** Change `mini_spiral(x, y, angle, ...)` to `mini_spiral(x, y, angle + 180, ...)`. Each spiral now faces toward the center. You'll know it worked when the spirals grow inward instead of outward.

4. **Use hexagonal mini-spirals.** Change `right(90)` inside `mini_spiral` to `right(60)`. You'll know it worked when each small spiral has hexagonal corners.

!!! mascot-celebration "Meta-Spirals!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You arranged micro-patterns into a macro-pattern using the same circle math
    from the pinwheel. This "pattern of patterns" idea is a core concept in fractal design!
    Up next: **Color-Banded Pentagon Spiral** — the last spiral in this category.
