---
hide:
    - toc
---
# Lightning Bolt

By the end of this lab you'll be able to:

- Use recursion to split a straight line into a jagged zigzag
- Understand how branching recursion creates natural-looking electricity shapes
- Control depth and displacement to vary the jaggedness of the bolt

A simulated lightning bolt drawn by recursively replacing each straight segment with a bent, zigzagged version. The result is an irregular, branching shape that closely mimics real lightning.

!!! mascot-welcome "Welcome to the Lightning Bolt!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Real lightning follows the path of least electrical resistance.
    The result looks random — but it has a recursive pattern we can code!
    Let's code it together!

## How It Works

`lightning(x1, y1, x2, y2, depth)` splits the segment into two halves with the midpoint displaced sideways by a random amount. At depth 0, just draw the segment. At each depth, the displacement shrinks, creating self-similar jaggedness.

## Sample Code

```python
import turtle
import math
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(7)

def lightning(x1, y1, x2, y2, depth):
    if depth == 0:
        monty.penup()
        monty.goto(x1, y1)
        monty.pendown()
        monty.goto(x2, y2)
        return
    mx = (x1 + x2) / 2
    my = (y1 + y2) / 2
    dx = x2 - x1
    dy = y2 - y1
    perp_x = -dy * 0.3
    perp_y = dx * 0.3
    offset = random.uniform(-1, 1)
    mx += perp_x * offset
    my += perp_y * offset
    monty.pencolor('yellow')
    monty.pensize(max(1, depth))
    lightning(x1, y1, mx, my, depth - 1)
    lightning(mx, my, x2, y2, depth - 1)

lightning(-50, 150, 50, -150, 5)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    We start with a vertical line and split it 5 levels deep.
    Will the result look like a straight line, a zigzag, or real lightning?
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
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(7)

def lightning(x1, y1, x2, y2, depth):
    if depth == 0:
        monty.penup()
        monty.goto(x1, y1)
        monty.pendown()
        monty.goto(x2, y2)
        return
    mx = (x1 + x2) / 2
    my = (y1 + y2) / 2
    dx = x2 - x1
    dy = y2 - y1
    perp_x = -dy * 0.3
    perp_y = dx * 0.3
    offset = random.uniform(-1, 1)
    mx += perp_x * offset
    my += perp_y * offset
    monty.pencolor('yellow')
    monty.pensize(max(1, depth))
    lightning(x1, y1, mx, my, depth - 1)
    lightning(mx, my, x2, y2, depth - 1)

lightning(-50, 150, 50, -150, 5)`);
</script>

A jagged **lightning bolt** — the recursive displacement creates the irregular, branching shape. Were you right?

## How It Works

The perpendicular vector `(-dy, dx)` is perpendicular to `(dx, dy)` — rotating 90°. Multiplying by `0.3` limits displacement to 30% of the segment length. `random.uniform(-1, 1)` picks a random side. The recursion makes each sub-segment equally jagged.

## Explanation Table

| Line | What it does |
|------|-------------|
| `if depth == 0` | Base case: draw the segment |
| `mx, my = midpoint` | Find the midpoint to displace |
| `perp_x = -dy * 0.3` | Perpendicular displacement direction |
| `random.uniform(-1, 1)` | Random side and amount |
| `pensize(max(1, depth))` | Thicker lines at lower depth (main bolt) |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Depth"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `depth=5` to `depth=3`. The bolt will have fewer bends.
    Then try `depth=7`. Predict what changes at each depth!

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
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(7)

def lightning(x1, y1, x2, y2, depth):
    if depth == 0:
        monty.penup()
        monty.goto(x1, y1)
        monty.pendown()
        monty.goto(x2, y2)
        return
    mx = (x1 + x2) / 2
    my = (y1 + y2) / 2
    dx = x2 - x1
    dy = y2 - y1
    perp_x = -dy * 0.3
    perp_y = dx * 0.3
    offset = random.uniform(-1, 1)
    mx += perp_x * offset
    my += perp_y * offset
    monty.pencolor('yellow')
    monty.pensize(max(1, depth))
    lightning(x1, y1, mx, my, depth - 1)
    lightning(mx, my, x2, y2, depth - 1)

lightning(-50, 150, 50, -150, 7)`);
</script>

Depth 7 produces a much more detailed, realistic bolt with tiny jags everywhere.

## Experiments

1. **Remove the seed.** Delete `random.seed(7)`. Every run produces a different bolt. You'll know it worked when the bolt changes each time.

2. **Draw multiple bolts.** Call `lightning()` three times with different x-starting positions. You'll know it worked when three separate bolts appear.

3. **Change the color to white on a dark background.** Add `turtle.bgcolor('black')` and `monty.pencolor('white')`. You'll know it worked when the bolt looks like a real storm photo.

4. **Increase displacement.** Change `0.3` to `0.6`. You'll know it worked when the bolt has wider, more dramatic bends.

!!! mascot-celebration "Electrifying!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used recursive displacement to simulate lightning — the same algorithm used in
    computer game terrain generation and movie visual effects!
    Up next: **Galaxy Spiral Arms** — Archimedean and logarithmic spirals with dot clouds.
