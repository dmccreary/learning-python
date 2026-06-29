---
hide:
    - toc
---
# Stars of Different Sizes

By the end of this lab you'll be able to:

- Draw a 5-pointed star using the **144° exterior angle** trick
- Write a `star(x, y, size, color)` function with four parameters
- Scatter multiple stars across the canvas using `random`

Fifteen gold and red stars of various sizes are scattered across a dark canvas,
each one drawn with the same five-line trick — a perfect polygon shortcut.

!!! mascot-welcome "Welcome to Stars of Different Sizes!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Did you know you can draw a 5-pointed star by turning 144° at each point?
    In this lab you'll learn why, then scatter stars of different sizes across the canvas!
    Let's code it together!

## How the Star Works

A 5-pointed star's exterior angle is **144°** (not the usual polygon `360 / 5 = 72°`).
This is because the star skips over one vertex each time, so the effective angle is `2 × 72° = 144°`.
Five sides × 144° = 720° = two full rotations — which is exactly how a star point works geometrically.

## Sample Code

```python
import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.screen().bgcolor('black') if hasattr(monty, 'screen') else None
random.seed(7)

def star(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(5):
        monty.forward(size)
        monty.right(144)
    monty.end_fill()

colors = ['gold','yellow','orange','red','white']

for _ in range(15):
    x = random.randint(-250, 250)
    y = random.randint(-180, 180)
    size = random.randint(20, 100)
    c = random.choice(colors)
    star(x, y, size, c)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The `star()` function draws 5 lines and turns 144° each time.
    5 × 144° = 720°. That's **two** full rotations. Will the turtle end up facing the same direction it started?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(7)

def star(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(5):
        monty.forward(size)
        monty.right(144)
    monty.end_fill()

colors = ['gold','yellow','orange','red','white']

for _ in range(15):
    x = random.randint(-250, 250)
    y = random.randint(-180, 180)
    size = random.randint(20, 100)
    c = random.choice(colors)
    star(x, y, size, c)
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

Yes — 720° = 2 full turns, so the turtle ends up facing exactly the same direction it started. Were you right?

## How It Works

The `star()` function uses `goto(x, y)` to jump to the star's first point, then draws 5 lines of `size` pixels, turning 144° right after each one.

Because 5 × 144° = 720° (exactly two full circles), the last line lands the turtle back at the start facing the original direction — closing the star perfectly without any extra math.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def star(x, y, size, color)` | Four-parameter function: position, size, and color |
| `monty.goto(x, y)` | Jump to the star's starting point |
| `for _ in range(5)` | Draw 5 points of the star |
| `monty.right(144)` | 144° = the exterior angle of a 5-pointed star |
| `random.randint(20, 100)` | Random size between 20 and 100 pixels |

!!! mascot-tip "Why 144°?"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A regular pentagon has exterior angle 72°. A star skips one vertex each step,
    so the angle doubles: 2 × 72° = **144°**. For a 6-pointed star the angle would be 2 × 60° = 120°.

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws shapes but they look like pentagons, not stars!
    Find and fix the one wrong number in the `star()` function.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(7)

def star(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(5):
        monty.forward(size)
        monty.right(72)
    monty.end_fill()

colors = ['gold','yellow','orange','red']

for _ in range(10):
    x = random.randint(-200, 200)
    y = random.randint(-150, 150)
    size = random.randint(30, 80)
    star(x, y, size, random.choice(colors))
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

Change `monty.right(72)` to `monty.right(144)` — 72° draws a regular pentagon; 144° draws a star.

## Experiments

1. **Draw a 6-pointed star.** Change `range(5)` to `range(6)` and `right(144)` to `right(120)`. You'll know it worked when a Star of David shape appears.

2. **Make a night sky.** Add a background first: draw a large filled black rectangle before calling the star loop. You'll know it worked when the stars glow against a dark background.

3. **All the same size.** Change `random.randint(20, 100)` to a fixed `60`. You'll know it worked when all stars are uniform in size but still scattered randomly.

4. **Overlapping stars.** Remove `random.seed(7)` and increase the count to `range(30)`. Each run creates a unique star field. You'll know it worked when no two runs look the same.

!!! mascot-celebration "Stellar Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You learned the 144° star trick, wrote a four-parameter function, and used `random`
    to scatter shapes across the canvas. You're thinking like a real creative coder!
    Up next: **Traffic Light Stack** — decomposing a real-world object into drawing primitives.
