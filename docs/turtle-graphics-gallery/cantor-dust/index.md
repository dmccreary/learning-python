---
hide:
    - toc
---
# Cantor Dust

By the end of this lab you'll be able to:

- Draw the Cantor set by recursively removing the middle third of each line segment
- Understand how area shrinks to zero while structure remains — the paradox of Cantor dust
- Use a recursive function with both position (`x`) and width (`w`) parameters

Six levels of Cantor set lines — each row has twice as many segments as the row above, but each segment is one-third as long. By row 6, every segment is nearly invisible, yet the structure is mathematically infinite.

!!! mascot-welcome "Welcome to Cantor Dust!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Georg Cantor proved in 1883 that you can have a set with infinitely many points
    but zero total length. This pattern shows you how!
    Let's code it together!

## How It Works

`cantor(x, y, w, depth)`:
- Draw a horizontal line from `(x, y)` to `(x+w, y)`
- If `depth > 0`: recurse on the left third `(x, y - 20, w/3, depth-1)` and right third `(x + 2*w/3, y - 20, w/3, depth-1)`
- The middle third is **never drawn** — that's the gap

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def cantor(x, y, w, depth):
    colors = ['darkred', 'red', 'orangered', 'orange', 'gold', 'yellow']
    monty.pencolor(colors[min(depth, len(colors) - 1)])
    monty.pensize(max(1, depth))
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.forward(w)
    if depth > 0:
        cantor(x, y - 30, w / 3, depth - 1)
        cantor(x + 2 * w / 3, y - 30, w / 3, depth - 1)

cantor(-250, 200, 500, 5)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each row has twice as many lines as the previous one.
    After 5 levels, how many tiny line segments will there be on the bottom row?
    (Hint: 2^5 = ?) Make your guess — then click Run to find out!

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def cantor(x, y, w, depth):
    colors = ['darkred', 'red', 'orangered', 'orange', 'gold', 'yellow']
    monty.pencolor(colors[min(depth, len(colors) - 1)])
    monty.pensize(max(1, depth))
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.forward(w)
    if depth > 0:
        cantor(x, y - 30, w / 3, depth - 1)
        cantor(x + 2 * w / 3, y - 30, w / 3, depth - 1)

cantor(-250, 200, 500, 5)`);
</script>

`2^5 = 32` segments on the bottom row — each only `500 / 3^5 ≈ 2` pixels wide. Were you right?

## How It Works

The total length of all segments at level `n` is `(2/3)^n` of the original length. At level 5, that's `(2/3)^5 ≈ 13%` remaining. As depth → ∞, the total length → 0. Yet an infinite number of points remain — that's **Cantor Dust**.

## Explanation Table

| Line | What it does |
|------|-------------|
| `monty.forward(w)` | Draw the current segment |
| `if depth > 0:` | Base case: stop at depth 0 |
| `cantor(x, y-30, w/3, depth-1)` | Left-third sub-segment, one row lower |
| `cantor(x + 2*w/3, y-30, w/3, depth-1)` | Right-third sub-segment |
| Middle third | Never drawn — the defining gap |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws all three thirds instead of removing the middle one.
    Find and remove the line that draws the middle segment.

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def cantor(x, y, w, depth):
    colors = ['darkred', 'red', 'orangered', 'orange', 'gold', 'yellow']
    monty.pencolor(colors[min(depth, len(colors) - 1)])
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.forward(w)
    if depth > 0:
        cantor(x, y - 30, w / 3, depth - 1)
        cantor(x + w / 3, y - 30, w / 3, depth - 1)
        cantor(x + 2 * w / 3, y - 30, w / 3, depth - 1)

cantor(-250, 200, 500, 4)`);
</script>

Remove the middle `cantor(x + w/3, y-30, w/3, depth-1)` call — that's the middle third that the Cantor Set never draws.

## Experiments

1. **Remove the first third instead.** Change the two recursive calls so you always draw the middle and right thirds. You'll know it worked when the gaps are on the left instead of the center.

2. **Use different spacing.** Change `y - 30` to `y - 20`. Rows will be closer together. You'll know it worked when the 6 rows fit more compactly.

3. **Color by level.** The current code uses `depth` for color — the first row is darkest. Try reversing: use `6 - depth` as the color index. You'll know it worked when the deepest rows are darker.

4. **Draw vertical Cantor.** Rotate the turtle 90° and use `y` positioning instead of `x`. You'll know it worked when the gaps appear vertically.

!!! mascot-celebration "Into the Dust!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You visualized Cantor's paradox: infinite points, zero length!
    The Cantor Set is the foundation of modern analysis and measure theory.
    Up next: **Pythagorean Tree** — squares growing from squares growing from squares.
