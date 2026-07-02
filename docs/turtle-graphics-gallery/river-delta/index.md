---
hide:
    - toc
---
# River Delta

By the end of this lab you'll be able to:

- Grow a branching river with `random.randint()` and `random.uniform()`
- Prune branches that get too thin or flow off the canvas
- Use `random.seed()` to make a random drawing repeat exactly

A wide river enters at the top of the canvas and fans out into dozens of thinner and thinner streams, just like a real river delta meeting the sea. Every run of the program *could* be different — but `random.seed()` locks in one particular delta so you can study it.

!!! mascot-welcome "Welcome to the River Delta!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Rivers don't follow a formula — they wander and split at random.
    In this lab you'll use Python's `random` module to grow a delta
    the same way nature does: one branching decision at a time!

## How It Works

The program keeps a list of active branches, each with a position, direction, and width. Every step, each branch randomly splits into 1 or 2 children with a small random change of direction; splitting makes the children thinner. Branches that get thinner than 1 pixel or flow off the canvas are pruned (removed from the list) — that is what makes the delta fade out naturally.

## Sample Code

```python
import turtle
import random
import math
random.seed(42)

monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
screen = turtle.Screen()
screen.bgcolor('wheat')

def river_color(w):
    if w > 7:
        return 'navy'
    elif w > 5:
        return 'royalblue'
    elif w > 3:
        return 'steelblue'
    elif w > 2:
        return 'dodgerblue'
    else:
        return 'deepskyblue'

branches = [[0, 190, 270, 10.0]]
for step in range(44):
    new_branches = []
    for b in branches:
        x = b[0]
        y = b[1]
        h = b[2]
        w = b[3]
        kids = random.randint(1, 2)
        for k in range(kids):
            nh = h + random.uniform(-22, 22)
            if nh < 240:
                nh = 240
            if nh > 300:
                nh = 300
            if kids == 2:
                nw = w * 0.8
            else:
                nw = w * 0.96
            length = random.uniform(16, 28)
            rad = math.radians(nh)
            nx = x + length * math.cos(rad)
            ny = y + length * math.sin(rad)
            if nw < 1 or abs(nx) > 195 or ny < -195:
                continue
            monty.penup()
            monty.goto(x, y)
            monty.pendown()
            monty.pensize(nw)
            monty.pencolor(river_color(nw))
            monty.goto(nx, ny)
            new_branches.append([nx, ny, nh, nw])
    branches = new_branches[:40]
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The river starts 10 pixels wide, every split multiplies a branch's
    width by 0.8, and branches thinner than 1 pixel disappear.
    Do you think the delta will still be flowing when it reaches the
    bottom half of the canvas? Make your guess, then click Run!

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
import random
import math
random.seed(42)

monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
screen = turtle.Screen()
screen.bgcolor('wheat')

def river_color(w):
    if w > 7:
        return 'navy'
    elif w > 5:
        return 'royalblue'
    elif w > 3:
        return 'steelblue'
    elif w > 2:
        return 'dodgerblue'
    else:
        return 'deepskyblue'

branches = [[0, 190, 270, 10.0]]
for step in range(44):
    new_branches = []
    for b in branches:
        x = b[0]
        y = b[1]
        h = b[2]
        w = b[3]
        kids = random.randint(1, 2)
        for k in range(kids):
            nh = h + random.uniform(-22, 22)
            if nh < 240:
                nh = 240
            if nh > 300:
                nh = 300
            if kids == 2:
                nw = w * 0.8
            else:
                nw = w * 0.96
            length = random.uniform(16, 28)
            rad = math.radians(nh)
            nx = x + length * math.cos(rad)
            ny = y + length * math.sin(rad)
            if nw < 1 or abs(nx) > 195 or ny < -195:
                continue
            monty.penup()
            monty.goto(x, y)
            monty.pendown()
            monty.pensize(nw)
            monty.pencolor(river_color(nw))
            monty.goto(nx, ny)
            new_branches.append([nx, ny, nh, nw])
    branches = new_branches[:40]`);
</script>

Yes — the thinnest `deepskyblue` streams make it deep into the bottom half before they fade below 1 pixel. Were you right?

## How It Works

This is *stochastic* (random) branching, and it works differently from the deterministic fractals like Fractal Tree. There, every branch splits exactly the same way, so the result is perfectly predictable. Here, `random.randint(1, 2)` decides how many children each branch gets and `random.uniform(-22, 22)` bends each child a little, so no two lineages look alike. Pruning — the `continue` that skips branches which are too thin or out of bounds — is what stops the randomness from running wild. Because `random.seed(42)` starts the random-number generator at a fixed point, the same "random" choices happen every run.

## Explanation Table

| Line | What it does |
|------|-------------|
| `random.seed(42)` | Locks in the random sequence so every run draws the same delta |
| `kids = random.randint(1, 2)` | Each branch randomly continues (1) or splits in two (2) |
| `if nw < 1 or abs(nx) > 195 or ny < -195:` | Prunes branches that are too thin or off the canvas |
| `branches = new_branches[:40]` | The children become the active branches for the next step (capped at 40) |

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Line"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below never replaces the old branches with the new ones,
    so the river never grows past its first segments!
    Add `branches = new_branches[:40]` as the last line of the
    `for step` loop (indented four spaces) and run it again.

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
import random
import math
random.seed(42)

monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
screen = turtle.Screen()
screen.bgcolor('wheat')

def river_color(w):
    if w > 7:
        return 'navy'
    elif w > 5:
        return 'royalblue'
    elif w > 3:
        return 'steelblue'
    elif w > 2:
        return 'dodgerblue'
    else:
        return 'deepskyblue'

branches = [[0, 190, 270, 10.0]]
for step in range(44):
    new_branches = []
    for b in branches:
        x = b[0]
        y = b[1]
        h = b[2]
        w = b[3]
        kids = random.randint(1, 2)
        for k in range(kids):
            nh = h + random.uniform(-22, 22)
            if nh < 240:
                nh = 240
            if nh > 300:
                nh = 300
            if kids == 2:
                nw = w * 0.8
            else:
                nw = w * 0.96
            length = random.uniform(16, 28)
            rad = math.radians(nh)
            nx = x + length * math.cos(rad)
            ny = y + length * math.sin(rad)
            if nw < 1 or abs(nx) > 195 or ny < -195:
                continue
            monty.penup()
            monty.goto(x, y)
            monty.pendown()
            monty.pensize(nw)
            monty.pencolor(river_color(nw))
            monty.goto(nx, ny)
            new_branches.append([nx, ny, nh, nw])
    # add the missing line here`);
</script>

Without that line, `branches` stays stuck at the starting segment, so the program just re-draws short stubs at the top 44 times. With it, each generation of children becomes the next generation of parents — and the delta flows.

## Experiments

1. **Change the seed.** Try `random.seed(7)` or your lucky number. You'll know it worked when a completely different delta appears — same rules, new river.

2. **Force a split every step.** Change `random.randint(1, 2)` to `random.randint(2, 2)`. You'll know it worked when the delta becomes short and bushy — always splitting makes streams thin out much faster.

3. **Start with a mightier river.** Change the starting width `10.0` to `14.0`. You'll know it worked when the streams survive longer and the delta reaches farther down the canvas.

4. **Let it wander more.** Change `random.uniform(-22, 22)` to `random.uniform(-40, 40)`. You'll know it worked when the streams zigzag wildly instead of flowing mostly straight down.

!!! mascot-celebration "You Grew a River!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just used randomness *with rules* — split, thin, prune — to grow
    something that looks alive. That's how nature builds deltas, lightning,
    and blood vessels too!
    Up next: **Coral Branch** — recursive branching with random twists and
    colors that fade from deep red to pink.
