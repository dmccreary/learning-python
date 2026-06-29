---
hide:
    - toc
---
# Polka Dot Canvas

By the end of this lab you'll be able to:

- Import the `random` module and call `random.randint()` and `random.choice()`
- Use a fixed `random.seed()` to make results reproducible
- Write a simple dot-drawing function and call it many times

Two hundred colorful dots scattered across the canvas — each one a random size,
color, and position — creating a cheerful, unpredictable canvas every time.

!!! mascot-welcome "Welcome to the Polka Dot Canvas!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll meet Python's `random` module — a treasure chest of tools
    for making programs that behave differently every run!
    Let's code it together!

## How Randomness Works

`random.randint(a, b)` returns a random whole number between `a` and `b` (inclusive).
`random.choice(list)` picks one random item from a list.
`random.seed(n)` fixes the starting point so you always get the same "random" sequence — useful for reproducible demos.

## Sample Code

```python
import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(42)

colors = ['red','orange','yellow','green','blue','purple','pink','cyan','coral','gold']

for _ in range(80):
    x = random.randint(-280, 280)
    y = random.randint(-200, 200)
    r = random.randint(8, 40)
    c = random.choice(colors)
    monty.penup()
    monty.goto(x, y)
    monty.dot(r, c)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `random.seed(42)` is set before the loop. If you click Reset and Run again,
    will the dots appear in the **same** positions or **different** positions?
    Make your guess — then click Run twice to find out!

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
random.seed(42)

colors = ['red','orange','yellow','green','blue','purple','pink','cyan','coral','gold']

for _ in range(80):
    x = random.randint(-280, 280)
    y = random.randint(-200, 200)
    r = random.randint(8, 40)
    c = random.choice(colors)
    monty.penup()
    monty.goto(x, y)
    monty.dot(r, c)
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

The dots appear in the **same** positions every run — because `random.seed(42)` resets the sequence to the same starting point. Were you right?

## How It Works

`random.seed(42)` doesn't make things less random — it just determines *which* random sequence you get. Change `42` to any other number and you'll get a completely different (but still reproducible) pattern.

`for _ in range(80)` uses `_` as the loop variable because we don't actually need the counter — we're just repeating 80 times.

## Explanation Table

| Line | What it does |
|------|-------------|
| `import random` | Load Python's random number module |
| `random.seed(42)` | Fix the random sequence for reproducibility |
| `random.randint(-280, 280)` | Random integer from -280 to 280 inclusive |
| `random.choice(colors)` | Pick one item from the list at random |
| `monty.dot(r, c)` | Draw a filled circle of radius `r` in color `c` |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws dots but they all appear at the same position!
    Find and fix the bug — the x and y coordinates should be random, not fixed.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(42)

colors = ['red','orange','yellow','green','blue','purple','pink','cyan']

for _ in range(50):
    x = 0
    y = 0
    r = random.randint(8, 40)
    c = random.choice(colors)
    monty.penup()
    monty.goto(x, y)
    monty.dot(r, c)
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

Replace `x = 0` with `x = random.randint(-280, 280)` and `y = 0` with `y = random.randint(-200, 200)`.

## Experiments

1. **Remove the seed.** Delete `random.seed(42)`. Now each run produces a different pattern. You'll know it worked when clicking Run twice gives different arrangements.

2. **Change the seed.** Try `random.seed(99)` or `random.seed(1)`. Each seed produces its own unique pattern. You'll know it worked when the dots rearrange completely.

3. **Make all dots the same size but random color.** Change `r = random.randint(8, 40)` to `r = 20`. You'll know it worked when the dots are uniform in size but colorful.

4. **Double the count.** Change `range(80)` to `range(160)`. You'll know it worked when the canvas is much more densely packed with dots.

!!! mascot-celebration "Wonderful Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You unlocked the power of randomness in Python — and learned that "random" doesn't have
    to mean "uncontrolled." Seeds give you the best of both worlds!
    Up next: **Brick Wall** — tiling a surface with a function and offset rows.
