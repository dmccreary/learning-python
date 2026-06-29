---
hide:
    - toc
---
# Barnsley Fern

By the end of this lab you'll be able to:

- Use probability-weighted random choice to apply one of four transformations per step
- Plot thousands of points with `dot()` to build up an image gradually
- Understand Iterated Function Systems (IFS) — how a few affine transforms create natural shapes

After plotting 5000 random points, a photorealistic fern leaf emerges from pure mathematics. No drawing loops, no branches — just four transformations and probability.

!!! mascot-welcome "Welcome to the Barnsley Fern!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Michael Barnsley discovered in 1988 that you can generate realistic leaf shapes
    from just four simple mathematical transformations applied randomly.
    This lab shows you how! Let's code it together!

## How It Works

Four transformations are applied randomly, each chosen with a fixed probability:
1. **Stem** (1% chance): `(x, y) → (0, 0.16y)`
2. **Small leaflets** (7%): `(x, y) → (0.85x + 0.04y, -0.04x + 0.85y + 1.6)`
3. **Left frond** (7%): `(x, y) → (0.2x - 0.26y, 0.23x + 0.22y + 1.6)`
4. **Right frond** (85%): `(x, y) → (-0.15x + 0.28y, 0.26x + 0.24y + 0.44)`

Starting at `(0, 0)`, apply a random transformation, plot the point, repeat 5000 times.

## Sample Code

```python
import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()
random.seed(42)

def next_point(x, y):
    r = random.random()
    if r < 0.01:
        return 0, 0.16 * y
    elif r < 0.86:
        return 0.85*x + 0.04*y, -0.04*x + 0.85*y + 1.6
    elif r < 0.93:
        return 0.2*x - 0.26*y, 0.23*x + 0.22*y + 1.6
    else:
        return -0.15*x + 0.28*y, 0.26*x + 0.24*y + 0.44

x, y = 0, 0
scale = 35
for _ in range(5000):
    x, y = next_point(x, y)
    px = x * scale
    py = y * scale - 170
    monty.goto(px, py)
    monty.dot(2, 'forestgreen')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    5000 random points placed one at a time — will they look random and scattered,
    or will a recognizable shape emerge?
    Make your guess — then click Run to find out! (This will take a moment.)

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
monty.penup()
random.seed(42)

def next_point(x, y):
    r = random.random()
    if r < 0.01:
        return 0, 0.16 * y
    elif r < 0.86:
        return 0.85*x + 0.04*y, -0.04*x + 0.85*y + 1.6
    elif r < 0.93:
        return 0.2*x - 0.26*y, 0.23*x + 0.22*y + 1.6
    else:
        return -0.15*x + 0.28*y, 0.26*x + 0.24*y + 0.44

x, y = 0, 0
scale = 35
for _ in range(5000):
    x, y = next_point(x, y)
    px = x * scale
    py = y * scale - 170
    monty.goto(px, py)
    monty.dot(2, 'forestgreen')
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

A **photorealistic fern leaf** emerges from random points — no chaos, just probability revealing the attractor. Were you right?

## How It Works

The four transformations together form an **Iterated Function System (IFS)**. The 5000 points converge to the "strange attractor" of the system — the set of points that stays invariant under these transformations. Because the transformations encode the self-similar structure of a fern, the attractor looks like a fern.

## Explanation Table

| Line | What it does |
|------|-------------|
| `random.seed(42)` | Same seed → same "random" sequence each run |
| `r = random.random()` | Choose a transformation by probability |
| `0.01 / 0.85 / 0.07 / 0.07` | Probabilities of the four transformations |
| `scale = 35` | Scale factor: IFS coords are -3 to 3 → canvas coords |
| `dot(2, 'forestgreen')` | Plot one tiny green dot |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Leaf Color"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `'forestgreen'` to `'mediumseagreen'` for the main color.
    Then add a second pass with `dot(1, 'limegreen')` to add bright highlights.
    Run it twice and compare the colors!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()
random.seed(42)

def next_point(x, y):
    r = random.random()
    if r < 0.01:
        return 0, 0.16 * y
    elif r < 0.86:
        return 0.85*x + 0.04*y, -0.04*x + 0.85*y + 1.6
    elif r < 0.93:
        return 0.2*x - 0.26*y, 0.23*x + 0.22*y + 1.6
    else:
        return -0.15*x + 0.28*y, 0.26*x + 0.24*y + 0.44

x, y = 0, 0
scale = 35
for i in range(5000):
    x, y = next_point(x, y)
    px = x * scale
    py = y * scale - 170
    monty.goto(px, py)
    color = 'limegreen' if y > 6 else 'mediumseagreen'
    monty.dot(2, color)
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

Coloring by y-position gives the fern a natural gradient — darker at the base, brighter at the tip — mimicking how real leaves look in sunlight.

## Experiments

1. **Double the points.** Change `range(5000)` to `range(10000)`. The fern fills in more densely. You'll know it worked when there are fewer gaps in the leaf.

2. **Use a different seed.** Change `random.seed(42)` to `random.seed(7)`. The exact fern pattern changes but the overall shape stays the same.

3. **Change the dot size.** Try `dot(3, 'forestgreen')`. Larger dots fill in faster but look coarser. You'll know it worked when the fern is thicker.

4. **Print the first point.** Add `print(f"First point: {x:.3f}, {y:.3f}")` inside the loop after the first iteration. You'll know it worked when you see the first transformed coordinate.

!!! mascot-celebration "Nature From Numbers!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You grew a fern from four lines of math and a random number generator!
    Iterated Function Systems are used in image compression and procedural art.
    Up next: **Anti-Koch Snowflake** — bumping inward instead of outward.
