---
hide:
    - toc
---
# Fish School

By the end of this lab you'll be able to:

- Write a `fish(x, y, size)` function that draws a recognizable animal shape
- Understand how one function with different arguments creates visual variation
- Combine `circle()` arcs, triangles, and dots to build a fish with a body, tail fin, and eye

A dozen blue fish of varied sizes swim leftward across the canvas in a loosely grouped school — each one drawn by the same function.

!!! mascot-welcome "Welcome to the Fish School!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll see how a single function can generate an entire school of fish —
    each one slightly different in size and position but built from the same code.
    Let's code it together!

## How the Fish Works

Each fish is built from three parts:

1. A **body**: a pointed oval made of two `circle()` arcs that meet at the nose and the tail
2. A **tail fin**: a small filled triangle attached at the back of the body
3. An **eye**: a white dot with a black pupil, near the nose

The turtle starts at the fish's nose (the left tip), sweeps one arc along the belly to the
tail point, turns, and sweeps a second arc along the back to return to the nose. Then it
jumps to the tail point to draw the triangle fin, and finally stamps two dots for the eye.

## Sample Code

```python
import turtle
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(3)

def fish(x, y, size):
    # body: a pointed oval made of two arcs
    monty.penup()
    monty.goto(x, y)          # nose of the fish
    monty.setheading(-60)
    monty.pendown()
    monty.color('midnightblue', 'steelblue')
    monty.begin_fill()
    monty.circle(size, 120)   # belly arc
    monty.left(60)
    monty.circle(size, 120)   # back arc
    monty.end_fill()
    # tail fin: a triangle at the back
    monty.penup()
    monty.goto(x + size * 1.73, y)
    monty.pendown()
    monty.begin_fill()
    monty.goto(x + size * 2.3, y + size * 0.5)
    monty.goto(x + size * 2.3, y - size * 0.5)
    monty.goto(x + size * 1.73, y)
    monty.end_fill()
    # eye near the nose
    monty.penup()
    monty.goto(x + size * 0.5, y + size * 0.15)
    monty.dot(size // 3, 'white')
    monty.dot(size // 6, 'black')

for _ in range(12):
    x = random.randint(-180, 60)
    y = random.randint(-160, 160)
    size = random.randint(15, 45)
    fish(x, y, size)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The body is drawn with **two** `monty.circle(size, 120)` arcs.
    Will the finished body be a full circle, a half circle, or a pointed oval?
    Make your guess, then run it to find out!

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
    # body: a pointed oval made of two arcs
    monty.penup()
    monty.goto(x, y)          # nose of the fish
    monty.setheading(-60)
    monty.pendown()
    monty.color('midnightblue', 'steelblue')
    monty.begin_fill()
    monty.circle(size, 120)   # belly arc
    monty.left(60)
    monty.circle(size, 120)   # back arc
    monty.end_fill()
    # tail fin: a triangle at the back
    monty.penup()
    monty.goto(x + size * 1.73, y)
    monty.pendown()
    monty.begin_fill()
    monty.goto(x + size * 2.3, y + size * 0.5)
    monty.goto(x + size * 2.3, y - size * 0.5)
    monty.goto(x + size * 1.73, y)
    monty.end_fill()
    # eye near the nose
    monty.penup()
    monty.goto(x + size * 0.5, y + size * 0.15)
    monty.dot(size // 3, 'white')
    monty.dot(size // 6, 'black')

for _ in range(12):
    x = random.randint(-180, 60)
    y = random.randint(-160, 160)
    size = random.randint(15, 45)
    fish(x, y, size)`);
</script>

The two arcs meet in sharp points at the nose and the tail — a **pointed oval**, just the
right shape for a fish body. Were you right?

## How It Works

Each `circle(size, 120)` call draws a 120° arc — one curved side of the body. The turtle
starts at the nose heading `-60` degrees so the first arc bows downward along the belly and
lands exactly on the tail point. `left(60)` aims the turtle for the second arc, which bows
upward along the back and returns exactly to the nose. Two arcs, one closed shape.

The tail fin is a triangle drawn with three `goto()` calls: from the tail point out to two
corners behind the fish and back. Because it sits between `begin_fill()` and `end_fill()`,
it comes out solid.

Finally, `dot()` draws a filled circle at the turtle's position — a big white dot with a
smaller black dot on top makes a simple eye. The eye is what makes the fish come alive!

## Explanation Table

| Line | What it does |
|------|-------------|
| `monty.setheading(-60)` | Aim the turtle so the first arc curves along the belly |
| `monty.circle(size, 120)` | Draw a 120° arc — one curved side of the body |
| `monty.left(60)` | Turn at the tail point so the second arc curves back along the top |
| Three `monty.goto(...)` calls | Draw the triangle tail fin behind the body |
| `monty.dot(size // 3, 'white')` | Stamp the white of the eye near the nose |
| `random.randint(15, 45)` | Random size for each fish |

## Learning Check

!!! mascot-thinking "Your Turn — Color Each Fish Differently"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    All the fish are the same `'steelblue'`. Add a `color` parameter to `fish()` and use it
    to fill each fish with a random color from a list. Update the function definition and the call.

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
    # body: a pointed oval made of two arcs
    monty.penup()
    monty.goto(x, y)          # nose of the fish
    monty.setheading(-60)
    monty.pendown()
    monty.color('midnightblue', color)
    monty.begin_fill()
    monty.circle(size, 120)   # belly arc
    monty.left(60)
    monty.circle(size, 120)   # back arc
    monty.end_fill()
    # tail fin: a triangle at the back
    monty.penup()
    monty.goto(x + size * 1.73, y)
    monty.pendown()
    monty.begin_fill()
    monty.goto(x + size * 2.3, y + size * 0.5)
    monty.goto(x + size * 2.3, y - size * 0.5)
    monty.goto(x + size * 1.73, y)
    monty.end_fill()
    # eye near the nose
    monty.penup()
    monty.goto(x + size * 0.5, y + size * 0.15)
    monty.dot(size // 3, 'white')
    monty.dot(size // 6, 'black')

for _ in range(12):
    x = random.randint(-180, 60)
    y = random.randint(-160, 160)
    size = random.randint(15, 45)
    c = random.choice(fish_colors)
    fish(x, y, size, c)`);
</script>

The updated `fish()` takes `color` as a fourth argument and passes it to `monty.color()` as
the fill color, while the outline stays `'midnightblue'`.

## Experiments

1. **Add a blue background.** Before the loop, draw a large filled light-blue rectangle as the ocean. You'll know it worked when the fish swim against a blue background.

2. **Make a single giant fish.** Remove the loop and call `fish(-100, 0, 80)` directly. You'll know it worked when one large fish fills the canvas.

3. **Add a dorsal fin.** Inside `fish()`, after the tail fin, draw a small triangle on top of the body: `goto(x + size * 0.6, y + size * 0.4)`, then fill a triangle through `(x + size * 0.85, y + size * 0.85)` and `(x + size * 1.2, y + size * 0.4)`. You'll know it worked when each fish has a fin on its back.

4. **Grow the school.** Change `range(12)` to `range(25)`. You'll know it worked when the water gets crowded — do any fish overlap?

!!! mascot-celebration "Splendid Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built an entire underwater scene from one function called 12 times!
    One function, infinite variation — that's the magic of parameterized code.
    Up next: **Mountain Range** — layering shapes to create depth.
