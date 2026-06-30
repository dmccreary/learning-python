---
hide:
    - toc
---
# Gosper Curve (Flowsnake)

By the end of this lab you'll be able to:

- Implement an L-system: a set of string rewriting rules applied repeatedly
- Translate a string of characters into turtle commands
- Understand why the Gosper Curve is called a "flowsnake" — it tiles hexagonal space

A beautiful winding curve that fills a hexagonal region — the Gosper Curve, also called the "flowsnake." Built from just two string rewriting rules applied four times.

!!! mascot-welcome "Welcome to the Gosper Curve!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Gosper Curve is built with an **L-system** — a string that rewrites itself.
    It's the same technique used to model real plant growth in computer graphics!
    Let's code it together!

## How It Works

Start with the string `'A'`. Apply these rewriting rules repeatedly:
- `A` → `A-B--B+A++AA+B-`
- `B` → `+A-BB--B-A++A+B`

After 4 iterations, translate the result into turtle moves:
- `A` or `B` → `forward(step)`
- `+` → `left(60)`
- `-` → `right(60)`

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('darkorchid')
monty.pensize(1)

def gosper(n):
    s = 'A'
    for _ in range(n):
        new = ''
        for c in s:
            if c == 'A':
                new += 'A-B--B+A++AA+B-'
            elif c == 'B':
                new += '+A-BB--B-A++A+B'
            else:
                new += c
        s = new
    return s

step = 5
instructions = gosper(4)

monty.penup()
monty.goto(-100, 80)
monty.pendown()

for c in instructions:
    if c in 'AB':
        monty.forward(step)
    elif c == '+':
        monty.left(60)
    elif c == '-':
        monty.right(60)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The rewriting doubles the string length several times. After 4 iterations,
    how many characters long will the string be approximately?
    (Each A and B expands to 15 characters.) Make your guess — then click Run!

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
monty.pencolor('darkorchid')
monty.pensize(1)

def gosper(n):
    s = 'A'
    for _ in range(n):
        new = ''
        for c in s:
            if c == 'A':
                new += 'A-B--B+A++AA+B-'
            elif c == 'B':
                new += '+A-BB--B-A++A+B'
            else:
                new += c
        s = new
    return s

step = 5
instructions = gosper(4)

monty.penup()
monty.goto(-100, 80)
monty.pendown()

for c in instructions:
    if c in 'AB':
        monty.forward(step)
    elif c == '+':
        monty.left(60)
    elif c == '-':
        monty.right(60)`);
</script>

After 4 iterations the string has thousands of characters — and the curve fills a hexagonal region. Were you right about the count?

## How It Works

An **L-system** (Lindenmayer system) replaces characters in a string using rewriting rules. The string represents a program for the turtle. The key insight: when the replacement rules are designed correctly, the resulting shape tiles space without gaps or overlaps.

The Gosper Curve's hexagonal boundary tiles the plane — seven Gosper curves can be arranged to form a larger Gosper Curve!

## Explanation Table

| Line | What it does |
|------|-------------|
| `s = 'A'` | Initial axiom |
| `if c == 'A': new += '...'` | Apply the A rewriting rule |
| `if c == 'B': new += '...'` | Apply the B rewriting rule |
| `if c in 'AB': forward(step)` | Both A and B are "draw forward" commands |
| `+` and `-` | Turn left or right 60° |

## Learning Check

!!! mascot-thinking "Your Turn — Try 3 Iterations"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `gosper(4)` to `gosper(3)` and `step = 5` to `step = 10`.
    The curve will be coarser but faster to draw. Predict how the shape will look simpler.

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
monty.pencolor('darkorchid')
monty.pensize(2)

def gosper(n):
    s = 'A'
    for _ in range(n):
        new = ''
        for c in s:
            if c == 'A':
                new += 'A-B--B+A++AA+B-'
            elif c == 'B':
                new += '+A-BB--B-A++A+B'
            else:
                new += c
        s = new
    return s

step = 10
instructions = gosper(3)

monty.penup()
monty.goto(-100, 80)
monty.pendown()

for c in instructions:
    if c in 'AB':
        monty.forward(step)
    elif c == '+':
        monty.left(60)
    elif c == '-':
        monty.right(60)`);
</script>

At 3 iterations the hexagonal boundary is clearly visible and the internal winding path has fewer loops.

## Experiments

1. **Print the string.** Add `print(instructions[:50])` before the drawing loop. You'll know it worked when you see the start of the L-system string.

2. **Change the color.** Try `pencolor('forestgreen')`. You'll know it worked when the flowsnake turns green.

3. **Try 5 iterations.** Change to `gosper(5)` with `step = 3`. More detailed but slower. You'll know it worked when the curve is much denser.

4. **Count the draw steps.** Add a counter and `print(counter)` after the loop. You'll know it worked when you see how many forward steps the turtle takes.

!!! mascot-celebration "L-Systems Unlocked!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You mastered L-systems — the same technique used to model real plant growth!
    Any fractal with a string-rewriting rule can be drawn this way.
    Up next: **Category 5 — Symmetry and Tiling**, starting with the Sunflower Seed Spiral.
