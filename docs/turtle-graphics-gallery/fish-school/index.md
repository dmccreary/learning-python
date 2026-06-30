---
hide:
    - toc
---
# Fish School

By the end of this lab you'll be able to:

- Write a `fish(x, y, size)` function that draws a simple creature shape
- Understand how one function with different arguments creates visual variation
- Combine `circle()` arcs and triangles to build a recognizable animal form

Fifteen blue fish of varied sizes swim leftward across the canvas in a loosely grouped school — each one drawn by the same six-line function.

!!! mascot-welcome "Welcome to the Fish School!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll see how a single function can generate an entire school of fish —
    each one slightly different in size and position but built from the same code.
    Let's code it together!

## How the Fish Works

Each fish is built from two parts:
1. A **body**: a filled semicircle (half a `circle()`)
2. A **tail**: a small filled triangle attached at the flat end of the semicircle

The turtle starts at the fish's left tip, draws the body arc, then draws the tail triangle and returns to the start.

## Sample Code

```python
import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(3)

def fish(x, y, size):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color('steelblue')
    monty.begin_fill()
    monty.circle(size, 180)
    monty.right(90)
    monty.forward(size)
    monty.right(120)
    monty.forward(size)
    monty.right(120)
    monty.forward(size)
    monty.end_fill()

for _ in range(15):
    x = random.randint(-240, 160)
    y = random.randint(-170, 170)
    size = random.randint(15, 45)
    fish(x, y, size)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `monty.circle(size, 180)` draws only a **180°** arc — half a circle.
    Will the flat side of the half-circle face left, right, up, or down?
    Think about which direction Monty is facing before clicking Run!

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(3)

def fish(x, y, size):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color('steelblue')
    monty.begin_fill()
    monty.circle(size, 180)
    monty.right(90)
    monty.forward(size)
    monty.right(120)
    monty.forward(size)
    monty.right(120)
    monty.forward(size)
    monty.end_fill()

for _ in range(15):
    x = random.randint(-240, 160)
    y = random.randint(-170, 170)
    size = random.randint(15, 45)
    fish(x, y, size)`);
</script>

The flat side faces **left** — the tail is on the right and the fish swims to the left. Were you right?

## How It Works

`circle(size, 180)` draws a semicircle, ending with the turtle 180° from where it started — facing left instead of right. `right(90)` then turns to face down to start drawing the triangle tail.

The tail is an equilateral triangle drawn with three `forward(size)` + `right(120)` steps. After the last step, the turtle is back at the junction of tail and body.

## Explanation Table

| Line | What it does |
|------|-------------|
| `monty.setheading(0)` | Always start facing East — consistent orientation |
| `monty.circle(size, 180)` | Draw a half-circle body (180° arc) |
| `monty.right(90)` | Turn to face downward to start the tail |
| Three `forward/right(120)` | Draw the equilateral triangle tail |
| `random.randint(15, 45)` | Random size for each fish |

## Learning Check

!!! mascot-thinking "Your Turn — Color Each Fish Differently"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    All the fish are the same `'steelblue'`. Add a `color` parameter to `fish()` and use it
    to draw each fish in a random color from a list. Update the function definition and the call.

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(3)

fish_colors = ['steelblue','royalblue','teal','cornflowerblue','deepskyblue']

def fish(x, y, size, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    monty.circle(size, 180)
    monty.right(90)
    monty.forward(size)
    monty.right(120)
    monty.forward(size)
    monty.right(120)
    monty.forward(size)
    monty.end_fill()

for _ in range(15):
    x = random.randint(-240, 160)
    y = random.randint(-170, 170)
    size = random.randint(15, 45)
    c = random.choice(fish_colors)
    fish(x, y, size, c)`);
</script>

The updated `fish()` takes `color` as a fourth argument and passes it to `monty.color()`.

## Experiments

1. **Add a blue background.** Before the loop, draw a large filled blue rectangle as the ocean. You'll know it worked when the fish swim against a blue background.

2. **Make a single giant fish.** Remove the loop and call `fish(0, 0, 100, 'royalblue')` directly. You'll know it worked when one large fish fills the canvas.

3. **Add an eye.** Inside `fish()`, after `end_fill()`, add `monty.penup(); monty.goto(x + size * 1.4, y + size * 0.6); monty.dot(size // 5, 'white')`. You'll know it worked when each fish has a white eye dot.

4. **Flip the fish.** Change `setheading(0)` to `setheading(180)`. The fish will face right. You'll know it worked when the school swims in the opposite direction.

!!! mascot-celebration "Splendid Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built an entire underwater scene from a six-line function called 15 times!
    One function, infinite variation — that's the magic of parameterized code.
    Up next: **Mountain Range** — layering shapes to create depth.
