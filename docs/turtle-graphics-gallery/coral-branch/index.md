---
hide:
    - toc
---
# Coral Branch

By the end of this lab you'll be able to:

- Write a recursive function where each call spawns a *random* number of new calls
- Vary branch angles randomly with `random.uniform(-40, 40)`
- Shift colors from dark red at the base to pale pink at the tips using depth

A single dark red trunk rises from the sea floor and bursts into a fan of branches — some nodes sprout one branch, some two, some three — ending in a cloud of pale pink tips. This is recursion like the Fractal Tree, but with nature's randomness mixed in.

!!! mascot-welcome "Welcome to the Coral Reef!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Real coral never branches perfectly evenly — every fork is a little
    different. In this lab your recursive function will roll the dice at
    every branch, just like coral growing in the ocean!

## How It Works

The `branch` function draws one segment, then calls `random.randint(1, 3)` to decide how many sub-branches to spawn — this is called *variable-arity* recursion because the number of recursive calls varies. Each child turns a random amount between -40° and +40° and is a bit shorter than its parent. The `depth` parameter counts how many levels deep we are, and it picks both the pen size (thick at the base, thin at the tips) and the color from a dark-red-to-pink list.

## Sample Code

```python
import turtle
import random
random.seed(8)

monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['darkred', 'firebrick', 'crimson', 'palevioletred', 'hotpink', 'lightpink', 'pink', 'mistyrose']

def branch(x, y, heading, length, depth):
    if depth >= 8 or length < 3:
        return
    monty.penup()
    monty.goto(x, y)
    monty.setheading(heading)
    monty.pensize(8 - depth)
    monty.pencolor(colors[depth])
    monty.pendown()
    monty.forward(length)
    nx = monty.xcor()
    ny = monty.ycor()
    kids = random.randint(1, 3)
    for k in range(kids):
        turn = random.uniform(-40, 40)
        branch(nx, ny, heading + turn, length * 0.72, depth + 1)

branch(0, -185, 90, 95, 0)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This program is full of random choices, but it starts with
    `random.seed(8)`. If you click Run twice in a row, will you get
    the **same coral both times or a different one each time**?
    Make your guess, then run it twice to check!

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
random.seed(8)

monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['darkred', 'firebrick', 'crimson', 'palevioletred', 'hotpink', 'lightpink', 'pink', 'mistyrose']

def branch(x, y, heading, length, depth):
    if depth >= 8 or length < 3:
        return
    monty.penup()
    monty.goto(x, y)
    monty.setheading(heading)
    monty.pensize(8 - depth)
    monty.pencolor(colors[depth])
    monty.pendown()
    monty.forward(length)
    nx = monty.xcor()
    ny = monty.ycor()
    kids = random.randint(1, 3)
    for k in range(kids):
        turn = random.uniform(-40, 40)
        branch(nx, ny, heading + turn, length * 0.72, depth + 1)

branch(0, -185, 90, 95, 0)`);
</script>

The same coral, every time — `random.seed(8)` restarts the random-number generator at the exact same spot, so every "random" choice repeats. Were you right?

## How It Works

Compare this to the Fractal Tree, where every branch always splits into exactly 2 children at fixed angles. Here `kids = random.randint(1, 3)` makes the *arity* (number of recursive calls) random: a node with 1 child makes a long straggly arm, while a node with 3 children makes a dense fan. The color gradient is driven entirely by `depth`: at depth 0 the trunk uses `colors[0]` ('darkred'), and each level deeper moves one step along the list toward 'mistyrose'. Pen size does the same trick in reverse with `8 - depth`, so the coral is thick where it's dark and delicate where it's pale.

## Explanation Table

| Line | What it does |
|------|-------------|
| `kids = random.randint(1, 3)` | Each node spawns 1, 2, or 3 sub-branches — variable-arity recursion |
| `turn = random.uniform(-40, 40)` | Each child bends a random amount within ±40° |
| `monty.pencolor(colors[depth])` | Deeper levels use lighter colors: dark red base, pink tips |
| `if depth >= 8 or length < 3:` | The base case — stops the recursion so it can't go on forever |

## Learning Check

!!! mascot-thinking "Your Turn — Grow a Fuller Coral"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    In the program below, `random.randint(1, 3)` has been changed to
    `random.randint(2, 3)`, so every node spawns **at least two**
    sub-branches. Will this coral be fuller or scrawnier than before?
    Predict, then run it!

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
random.seed(8)

monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['darkred', 'firebrick', 'crimson', 'palevioletred', 'hotpink', 'lightpink', 'pink', 'mistyrose']

def branch(x, y, heading, length, depth):
    if depth >= 8 or length < 3:
        return
    monty.penup()
    monty.goto(x, y)
    monty.setheading(heading)
    monty.pensize(8 - depth)
    monty.pencolor(colors[depth])
    monty.pendown()
    monty.forward(length)
    nx = monty.xcor()
    ny = monty.ycor()
    kids = random.randint(2, 3)
    for k in range(kids):
        turn = random.uniform(-40, 40)
        branch(nx, ny, heading + turn, length * 0.72, depth + 1)

branch(0, -185, 90, 95, 0)`);
</script>

Much fuller — guaranteeing at least 2 children at every node roughly doubles the branches at each level, so the pink canopy becomes a dense cloud.

## Experiments

1. **Roll new dice.** Change `random.seed(8)` to another number and run a few times. You'll know it worked when each seed grows its own unique coral.

2. **Calm the water.** Change `random.uniform(-40, 40)` to `random.uniform(-15, 15)`. You'll know it worked when the coral grows straighter and more tree-like instead of sprawling sideways.

3. **Stretch the branches.** Change `length * 0.72` to `length * 0.78`. You'll know it worked when the coral grows taller and lankier, reaching higher up the canvas.

4. **Make a sun coral.** Replace the color list with `['darkorange', 'orange', 'gold', 'yellow', 'khaki', 'lightyellow', 'ivory', 'white']`. You'll know it worked when the coral glows orange at the base and white at the tips.

!!! mascot-celebration "A Reef of Your Own!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Recursion plus randomness equals life-like shapes — you just proved it!
    Every seed value is a different coral waiting to be discovered.
    Up next: **Leaf Venation** — draw a leaf and give it a realistic
    skeleton of veins, three levels deep.
