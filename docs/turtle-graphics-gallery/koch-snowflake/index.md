---
hide:
    - toc
---
# Koch Snowflake

By the end of this lab you'll be able to:

- Write a recursive function that replaces every line segment with four smaller segments
- Understand what a "base case" is and why it stops the recursion
- See how applying one simple rule repeatedly creates infinite complexity

A six-pointed snowflake with jagged crystalline edges — each edge is itself made of smaller jagged edges, which are made of even smaller ones. Three levels of recursion and a simple rule: bump every segment into a triangular notch.

!!! mascot-welcome "Welcome to the Koch Snowflake!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Koch snowflake is one of the most famous fractals. It has infinite perimeter
    but finite area — impossible to imagine, but easy to code!
    Let's code it together!

## How It Works

The Koch rule for a single line segment of length `n`:
1. Draw a line of length `n/3`
2. Turn left 60°, draw `n/3`
3. Turn right 120°, draw `n/3`
4. Turn left 60°, draw `n/3`

At each level, every segment becomes four segments one-third the size. After 4 levels, the edges look smooth and crystalline.

The snowflake is drawn by calling this rule three times, turning 120° between calls to form an equilateral triangle base.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('royalblue')

def koch(n, depth):
    if depth == 0:
        monty.forward(n)
        return
    n3 = n / 3
    koch(n3, depth - 1)
    monty.left(60)
    koch(n3, depth - 1)
    monty.right(120)
    koch(n3, depth - 1)
    monty.left(60)
    koch(n3, depth - 1)

monty.penup()
monty.goto(-150, 90)
monty.pendown()

for _ in range(3):
    koch(300, 4)
    monty.right(120)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    At depth 0, `koch(n, 0)` just draws a straight line.
    At depth 1, each segment has a triangular bump.
    At depth 4, will the edges look smooth or jagged?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('royalblue')

def koch(n, depth):
    if depth == 0:
        monty.forward(n)
        return
    n3 = n / 3
    koch(n3, depth - 1)
    monty.left(60)
    koch(n3, depth - 1)
    monty.right(120)
    koch(n3, depth - 1)
    monty.left(60)
    koch(n3, depth - 1)

monty.penup()
monty.goto(-150, 90)
monty.pendown()

for _ in range(3):
    koch(300, 4)
    monty.right(120)
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

**Jagged** but beautiful — the edges have a crystalline, snowflake-like appearance. Were you right?

## How It Works

Each call to `koch(n, depth)` with `depth > 0` makes **four recursive calls** to itself with `depth - 1`. When `depth` finally reaches 0, the function just draws a line and returns. This is the **base case** — without it, the recursion would never stop.

The total number of line segments drawn is 4^depth: at depth 4 that's 4^4 = **256 segments** per side, or **768 segments** for the whole snowflake.

## Explanation Table

| Line | What it does |
|------|-------------|
| `if depth == 0: monty.forward(n)` | Base case: draw a line and stop recursing |
| `n3 = n / 3` | Each recursive segment is one-third the size |
| `monty.left(60)` | Turn to form the triangular bump's left side |
| `monty.right(120)` | Turn to form the bump's right side (two 60° turns = 120°) |
| Four `koch()` calls | Replace one segment with four |

!!! mascot-tip "What is Recursion?"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    **Recursion** means a function that calls itself. The trick is the **base case** —
    a condition that stops the calls. Without a base case, the function would call itself
    forever (and Python would stop it with a `RecursionError`).

## Learning Check

!!! mascot-thinking "Your Turn — Try Depth 2"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `depth=4` to `depth=2` in the `koch()` calls.
    Predict how much simpler the snowflake edges will look — then run it to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('royalblue')

def koch(n, depth):
    if depth == 0:
        monty.forward(n)
        return
    n3 = n / 3
    koch(n3, depth - 1)
    monty.left(60)
    koch(n3, depth - 1)
    monty.right(120)
    koch(n3, depth - 1)
    monty.left(60)
    koch(n3, depth - 1)

monty.penup()
monty.goto(-150, 90)
monty.pendown()

for _ in range(3):
    koch(300, 2)
    monty.right(120)
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

At depth 2, each edge has only `4^2 = 16` segments — you can clearly see the individual triangular bumps on each bumpy bump.

## Experiments

1. **Try depth 1.** Just one round of bumping — three big triangular notches per side. You'll know it worked when you see a star of David shape.

2. **Add fill.** Before the loop, add `monty.fillcolor('lightblue')` and `monty.begin_fill()`. After the loop, add `monty.end_fill()`. You'll know it worked when the snowflake is filled with light blue.

3. **Change the color.** Try `pencolor('white')` with a dark background: add `turtle.bgcolor('navy')` before creating `monty`. You'll know it worked when you see a white snowflake on blue.

4. **Draw just one edge.** Replace the `for` loop with a single `koch(300, 4)` call. You'll know it worked when you see just one Koch curve instead of the full triangle.

!!! mascot-celebration "Your First Fractal!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just drew infinite complexity from a 4-line recursive rule!
    The Koch snowflake has infinite perimeter — every time you zoom in, there are more bumps.
    Up next: **Sierpiński Triangle** — the other iconic fractal.
