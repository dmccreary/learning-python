---
hide:
    - toc
---
# Flower with Petal Function

By the end of this lab you'll be able to:

- Define a function that draws one petal and call it multiple times
- Pass **parameters** to a function to control size and color
- Use rotation between function calls to assemble a symmetric flower

Eight petals — each a pair of arcs — radiate from the center, cycling
through warm pink and magenta tones to form a blooming flower.

!!! mascot-welcome "Welcome to the Flower with Petal Function!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll write a `petal()` function once and call it 8 times.
    That's the power of functions — write it once, reuse it forever!
    Let's code it together!

## How the Flower Works

The `petal(size, color)` function draws one petal using two `circle()` arcs facing opposite directions.
After each petal, the turtle rotates 45° so the next petal points in a new direction.
8 petals × 45° = 360° — a full flower.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def petal(size, color):
    monty.color(color)
    monty.begin_fill()
    monty.circle(size, 60)
    monty.left(120)
    monty.circle(size, 60)
    monty.left(120)
    monty.end_fill()

colors = ['hotpink','deeppink','magenta','orchid',
          'hotpink','deeppink','magenta','orchid']

for i in range(8):
    petal(80, colors[i])
    monty.left(45)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The loop calls `petal()` 8 times, rotating 45° between each call.
    8 × 45° = 360°. How many petals will appear in the finished flower?
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

def petal(size, color):
    monty.color(color)
    monty.begin_fill()
    monty.circle(size, 60)
    monty.left(120)
    monty.circle(size, 60)
    monty.left(120)
    monty.end_fill()

colors = ['hotpink','deeppink','magenta','orchid',
          'hotpink','deeppink','magenta','orchid']

for i in range(8):
    petal(80, colors[i])
    monty.left(45)
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

Exactly **8 petals**, one per call. Were you right?

## How It Works

`monty.circle(size, 60)` draws only a 60° arc of a circle — the second argument is the arc angle.
Two 60° arcs facing opposite directions form a leaf-shaped petal.
The two `left(120)` turns are the geometry that closes the petal back at the starting point.

The `def petal(size, color):` function definition happens once before the loop.
Inside the loop, `petal(80, colors[i])` is the **call** — it runs all the code inside the function with `size=80` and `color=colors[i]`.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def petal(size, color):` | Define a reusable petal-drawing function |
| `monty.circle(size, 60)` | Draw a 60° arc of a circle of the given radius |
| `monty.left(120)` | Turn to face the opposite arc direction |
| `petal(80, colors[i])` | Call the function with specific size and color |
| `monty.left(45)` | Rotate 45° so the next petal points in a new direction |

## Learning Check

!!! mascot-thinking "Your Turn — Add the Rotation"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws 8 petals but they all point in the same direction — all stacked up!
    Add **one line** inside the loop, after calling `petal()`, to rotate 45° before the next petal.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def petal(size, color):
    monty.color(color)
    monty.begin_fill()
    monty.circle(size, 60)
    monty.left(120)
    monty.circle(size, 60)
    monty.left(120)
    monty.end_fill()

colors = ['hotpink','deeppink','magenta','orchid',
          'hotpink','deeppink','magenta','orchid']

for i in range(8):
    petal(80, colors[i])
    # ADD ONE LINE HERE to rotate 45° before the next petal
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

The missing line is `monty.left(45)` — 8 petals × 45° = 360°, a complete flower.

## Experiments

1. **Change the petal count.** Use `range(6)` and `monty.left(60)`. You'll know it worked when 6 petals form a simpler flower shape.

2. **Make larger petals.** Call `petal(120, colors[i])` instead of `petal(80, ...)`. You'll know it worked when the petals extend further from the center.

3. **Use a green stem.** Before the loop, add `monty.color('green'); monty.pensize(4); monty.goto(0, -150); monty.penup()`. You'll know it worked when a thick green line appears below the flower.

4. **Add a yellow center.** After the loop, add `monty.penup(); monty.goto(0, -20); monty.dot(40, 'yellow')`. You'll know it worked when a yellow circle appears at the center of the petals.

!!! mascot-celebration "Beautiful Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You wrote your first parameterized function and called it in a loop —
    that's the foundation of all reusable code in programming!
    Up next: **Honeycomb Grid** to see functions and tiling in action.
