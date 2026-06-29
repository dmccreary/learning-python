---
hide:
    - toc
---
# Sierpiński Triangle

By the end of this lab you'll be able to:

- Write a recursive function that draws a triangle and subdivides it into three smaller triangles
- Understand why the "holes" in a Sierpiński triangle are never filled — they are the recursion's center gap
- See how depth controls how many levels of self-similar holes appear

A triangle made entirely of triangles — each containing smaller triangles, each containing even smaller ones. The middle of every triangle stays empty, creating a fractal lattice of infinite holes.

!!! mascot-welcome "Welcome to the Sierpiński Triangle!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Sierpiński Triangle is one of the most famous shapes in all of mathematics.
    It looks complicated but emerges from a beautifully simple recursive rule.
    Let's code it together!

## How It Works

`sierpinski(x, y, size, depth)` draws a filled equilateral triangle at `(x, y)`.
If `depth > 0`, it recursively draws three half-size triangles at the three corners of the current triangle. The center gap is never drawn — it's naturally left empty.

Three corner positions:
- Bottom-left: `(x, y)`
- Bottom-right: `(x + size, y)`
- Top: `(x + size/2, y + size * sqrt(3)/2)`

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def triangle(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(3):
        monty.forward(size)
        monty.left(120)
    monty.end_fill()

def sierpinski(x, y, size, depth):
    colors = ['royalblue', 'cornflowerblue', 'deepskyblue',
              'lightskyblue', 'lightcyan', 'white']
    color = colors[min(depth, len(colors) - 1)]
    triangle(x, y, size, color)
    if depth > 0:
        half = size / 2
        h = half * math.sqrt(3) / 2
        sierpinski(x, y, half, depth - 1)
        sierpinski(x + half, y, half, depth - 1)
        sierpinski(x + half / 2, y + h * 2, half, depth - 1)

monty.penup()
monty.goto(-160, -140)
monty.pendown()
sierpinski(-160, -140, 320, 5)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    At depth 5, how many tiny triangles will be drawn?
    (Hint: at depth 0 it's 1, at depth 1 it's 3, at depth 2 it's 9 …)
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

def triangle(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(3):
        monty.forward(size)
        monty.left(120)
    monty.end_fill()

def sierpinski(x, y, size, depth):
    colors = ['royalblue', 'cornflowerblue', 'deepskyblue',
              'lightskyblue', 'lightcyan', 'white']
    color = colors[min(depth, len(colors) - 1)]
    triangle(x, y, size, color)
    if depth > 0:
        half = size / 2
        h = half * math.sqrt(3) / 2
        sierpinski(x, y, half, depth - 1)
        sierpinski(x + half, y, half, depth - 1)
        sierpinski(x + half / 2, y + h * 2, half, depth - 1)

sierpinski(-160, -140, 320, 5)
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

At depth 5, `3^5 = 243` solid triangles are drawn. Were you right?

## How It Works

The function draws the full outer triangle first (in the current depth's color), then recursively draws three smaller triangles at the corners. Each new call overwrites the corners — the center gap is never covered because there's no fourth recursive call for the center.

Different depths get different colors — darker blues for deeper (smaller) triangles — creating a visible color gradient from outer to inner.

## Explanation Table

| Line | What it does |
|------|-------------|
| `colors[min(depth, len(colors)-1)]` | Map depth to a color — deeper = lighter |
| `if depth > 0:` | Base case check — stop at depth 0 |
| `half = size / 2` | Sub-triangles are half the parent size |
| Three `sierpinski()` calls | Recurse on bottom-left, bottom-right, top corners |
| No call for center | The center gap stays empty — that's the fractal hole |

## Learning Check

!!! mascot-thinking "Your Turn — Reduce to Depth 3"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `depth=5` to `depth=3`. How many triangles will be drawn? (3^3 = ?)
    Make your prediction, then run it to count the visible holes.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def triangle(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(3):
        monty.forward(size)
        monty.left(120)
    monty.end_fill()

def sierpinski(x, y, size, depth):
    colors = ['royalblue', 'cornflowerblue', 'deepskyblue',
              'lightskyblue', 'lightcyan', 'white']
    color = colors[min(depth, len(colors) - 1)]
    triangle(x, y, size, color)
    if depth > 0:
        half = size / 2
        h = half * math.sqrt(3) / 2
        sierpinski(x, y, half, depth - 1)
        sierpinski(x + half, y, half, depth - 1)
        sierpinski(x + half / 2, y + h * 2, half, depth - 1)

sierpinski(-160, -140, 320, 3)
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

At depth 3: `3^3 = 27` triangles and `(3^3 - 1)/2 = 13` visible holes. The structure is already clearly self-similar.

## Experiments

1. **Use warm colors.** Change `colors` to `['darkred', 'red', 'orange', 'gold', 'yellow', 'white']`. You'll know it worked when the triangle shifts to warm tones.

2. **Try a very deep depth.** Change to `depth=7`. It will be slow but extremely detailed. You'll know it worked when the inner triangles are pixel-sized.

3. **Remove the fill.** Instead of `begin_fill()`/`end_fill()`, just draw the outline. You'll know it worked when you see only the edges of each triangle.

4. **Invert: draw the gaps.** Draw only triangles where `depth == 0`, using white fill everywhere else as background. You'll know it worked when the pattern looks like the classic "holes" version.

!!! mascot-celebration "Recursive Mastery!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a fractal with infinite holes from a three-line recursive rule!
    Notice how `3^depth` triangles appear — the power of exponential recursion.
    Up next: **Fractal Tree** — branching recursion that looks just like a real tree.
