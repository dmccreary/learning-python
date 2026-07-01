# Function Parameters: Drawing Squares Anywhere

By the end of this lesson you'll be able to:

- Add **parameters** to a function so callers can pass in values
- Call the same function multiple times with different colors and positions
- Use `penup()` and `goto()` to reposition the turtle without drawing

One function can do many different things if you give it **parameters** — inputs it receives from the caller. In this lab, you'll write a `square()` function that accepts a color and a position, then call it four times to paint four different-colored squares around the canvas.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    You already know how to define a function. Today you'll make functions that can take instructions!
    A function with parameters is like a vending machine — you press a button (pass in a value)
    and get exactly what you asked for. Let's code it together!

## Parameters: Inputs for Functions

A **parameter** is a variable inside a function's parentheses that receives a value when the function is called:

```python
def square(my_color, x, y):
    # my_color, x, and y are filled in by the caller
    monty.color(my_color)
    ...
```

When you call `square('red', -50, 80)`, Python sets `my_color = 'red'`, `x = -50`, and `y = 80` automatically — no extra assignment needed.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')

size = 60
angle = 90

def square(my_color, x, y):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(my_color)
    monty.begin_fill()
    for i in range(4):
        monty.forward(size)
        monty.right(angle)
    monty.end_fill()

square('red',    -80,  80)
square('orange',  20,  80)
square('green',  -80, -20)
square('blue',    20, -20)
monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `square()` is called four times with four different colors and four different positions.
    How many squares will appear on the canvas, and where will they be?
    Make your guess — then click Run!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

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
monty.shape('turtle')

size = 60
angle = 90

def square(my_color, x, y):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(my_color)
    monty.begin_fill()
    for i in range(4):
        monty.forward(size)
        monty.right(angle)
    monty.end_fill()

square('red',    -80,  80)
square('orange',  20,  80)
square('green',  -80, -20)
square('blue',    20, -20)
monty.hideturtle()`);
</script>

Were you right? Four filled squares in a 2×2 grid — red and orange on top, green and blue on the bottom.

## How It Works

`penup()` lifts the pen so no line appears while the turtle travels to the new position. `goto(x, y)` moves the turtle to that exact coordinate. `pendown()` lowers the pen so drawing resumes. This penup/goto/pendown pattern is how you start any shape at a specific location.

Each time `square()` is called with different arguments, Python creates fresh copies of `my_color`, `x`, and `y` inside the function — the previous call's values are gone. The function uses them, finishes, and waits to be called again.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def square(my_color, x, y):` | Defines `square` with 3 parameters: color, horizontal position, vertical position |
| `monty.penup()` | Lifts the pen — no line drawn while moving |
| `monty.goto(x, y)` | Moves the turtle to coordinates `(x, y)` |
| `monty.pendown()` | Lowers the pen — drawing resumes |
| `square('red', -80, 80)` | Calls the function: `my_color='red'`, `x=-80`, `y=80` |

!!! mascot-tip "The Canvas Grid"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    The canvas center is `(0, 0)`. Positive `x` goes right, negative goes left.
    Positive `y` goes up, negative goes down. So `(-80, 80)` is upper-left and `(20, -20)` is lower-right.

## Learning Check

!!! mascot-thinking "Your Turn — Add a Fifth Square"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below draws four squares using the `square()` function.
    Add **one line** at the bottom to draw a fifth purple square centered at `(-30, 30)`.

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
monty.shape('turtle')

size = 60
angle = 90

def square(my_color, x, y):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(my_color)
    monty.begin_fill()
    for i in range(4):
        monty.forward(size)
        monty.right(angle)
    monty.end_fill()

square('red',    -80,  80)
square('orange',  20,  80)
square('green',  -80, -20)
square('blue',    20, -20)
# Add one line here to draw a purple square at (-30, 30)
monty.hideturtle()`);
</script>

## Experiments

Try these changes to the four-squares code. Predict first, then run!

1. Change `size = 60` to `size = 40`.
   **You'll know it worked when** all four squares are smaller.

2. Add a fourth parameter `my_size` to the function definition, and use it in `forward(my_size)` instead of `forward(size)`. Then pass different sizes in each call.
   **You'll know it worked when** the four squares are all different sizes.

3. Add `monty.pensize(3)` inside the function, before the loop.
   **You'll know it worked when** all four squares have a thicker outline.

4. Change the `range(4)` inside the function to `range(3)` and `angle` to `120`.
   **You'll know it worked when** you see four filled triangles instead of squares.

5. Use a `for` loop to call `square()` six times with colors from a list.
   **You'll know it worked when** six shapes appear across the canvas.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Parameters make functions flexible — write once, use everywhere with different values.
    In the next lab you'll meet the `random` library and let Python choose colors and positions for you!
    Let's code it together!
