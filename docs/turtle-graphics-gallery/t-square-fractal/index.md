---
hide:
    - toc
---
# T-Square Fractal

By the end of this lab you'll be able to:

- Draw a fractal where each square spawns four half-sized squares at its corners
- Understand why four recursive calls create an intricate overlapping weave
- See how alternating fill colors and depth create a layered visual effect

A central square sprouts four smaller squares at its corners, each of which sprouts four more — to 5 levels deep. The overlapping geometry creates a striking tiled weave of light and dark.

!!! mascot-welcome "Welcome to the T-Square Fractal!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The T-Square is different from the tree fractals — every branch splits into FOUR
    smaller branches! The result fills the canvas completely with overlapping squares.
    Let's code it together!

## How It Works

`tsquare(cx, cy, size, depth)` draws a square centered at `(cx, cy)`. If `depth > 0`, it recursively draws four squares of `size/2` at the four corners.

Corner positions:
- Top-left: `(cx - size/2, cy + size/2)`
- Top-right: `(cx + size/2, cy + size/2)`
- Bottom-left: `(cx - size/2, cy - size/2)`
- Bottom-right: `(cx + size/2, cy - size/2)`

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_square(cx, cy, size, color):
    half = size / 2
    monty.penup()
    monty.goto(cx - half, cy - half)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
    monty.end_fill()

def tsquare(cx, cy, size, depth):
    colors = ['navy', 'royalblue', 'cornflowerblue', 'lightskyblue', 'lightcyan', 'white']
    color = colors[min(depth, len(colors) - 1)]
    draw_square(cx, cy, size, color)
    if depth > 0:
        half = size / 2
        for dx, dy in [(-half, half), (half, half), (-half, -half), (half, -half)]:
            tsquare(cx + dx, cy + dy, half, depth - 1)

tsquare(0, 0, 280, 5)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    At each level, 4 new squares appear. After 5 levels, how many total squares
    will have been drawn? (Hint: 1 + 4 + 16 + 64 + 256 + 1024 = ?)
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

def draw_square(cx, cy, size, color):
    half = size / 2
    monty.penup()
    monty.goto(cx - half, cy - half)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
    monty.end_fill()

def tsquare(cx, cy, size, depth):
    colors = ['navy', 'royalblue', 'cornflowerblue', 'lightskyblue', 'lightcyan', 'white']
    color = colors[min(depth, len(colors) - 1)]
    draw_square(cx, cy, size, color)
    if depth > 0:
        half = size / 2
        for dx, dy in [(-half, half), (half, half), (-half, -half), (half, -half)]:
            tsquare(cx + dx, cy + dy, half, depth - 1)

tsquare(0, 0, 280, 5)
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

`1 + 4 + 16 + 64 + 256 + 1024 = 1365` total squares drawn. Were you right?

## How It Works

Later (deeper) squares draw on top of earlier ones. Because the deepest squares are the lightest color (white), they appear as bright highlights on the darker background squares. This creates the layered depth effect.

The four corner positions `(±half, ±half)` are computed with a list comprehension over `[(-half, half), (half, half), (-half, -half), (half, -half)]` — much cleaner than four separate calls.

## Explanation Table

| Line | What it does |
|------|-------------|
| `draw_square(cx, cy, size, color)` | Draw one centered square |
| `half = size / 2` | Sub-squares are half the parent size |
| `for dx, dy in [...]` | Loop over four corner offsets |
| `tsquare(cx + dx, cy + dy, half, depth - 1)` | Recurse at each corner |
| Color list | Deeper = lighter — creates the layered visual |

## Learning Check

!!! mascot-thinking "Your Turn — Try Depth 3"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `depth=5` to `depth=3`. How many total squares will be drawn?
    (1 + 4 + 16 + 64 = ?). Predict, then run to see the simpler structure.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_square(cx, cy, size, color):
    half = size / 2
    monty.penup()
    monty.goto(cx - half, cy - half)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(size)
        monty.left(90)
    monty.end_fill()

def tsquare(cx, cy, size, depth):
    colors = ['navy', 'royalblue', 'cornflowerblue', 'lightskyblue', 'lightcyan', 'white']
    color = colors[min(depth, len(colors) - 1)]
    draw_square(cx, cy, size, color)
    if depth > 0:
        half = size / 2
        for dx, dy in [(-half, half), (half, half), (-half, -half), (half, -half)]:
            tsquare(cx + dx, cy + dy, half, depth - 1)

tsquare(0, 0, 280, 3)
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

`1 + 4 + 16 + 64 = 85` squares — much faster to draw and clearly shows the hierarchical corner structure.

## Experiments

1. **Use warm colors.** Change the `colors` list to `['darkred', 'red', 'orange', 'gold', 'yellow', 'white']`. You'll know it worked when the fractal turns warm.

2. **Use a size-3 starting square.** Change `tsquare(0, 0, 280, 5)` to `tsquare(0, 0, 240, 6)`. More depth but smaller. You'll know it worked when the fractal is denser.

3. **Try 3-way splits.** Recurse only on 3 corners instead of 4 (remove one from the list). You'll know it worked when the pattern becomes asymmetric.

4. **Outline only.** Remove `begin_fill()` and `end_fill()`. You'll know it worked when only the square edges are drawn.

!!! mascot-celebration "Four Corners of Infinity!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You discovered how four recursive calls — one per corner — create a pattern
    that completely tiles the plane. That's the power of 4-ary recursion!
    Up next: **Lévy C Curve** — a fractal that builds a dragon's wing.
