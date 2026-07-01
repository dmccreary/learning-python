# Functions and Flowers

By the end of this lesson you'll be able to:

- Define your own function with `def` and call it by name
- Call a function multiple times from inside a loop
- Build a flower drawing by repeating a `petal()` function

What if you could give a chunk of code a name and run it whenever you want — just by saying the name? That's what a **function** is. In this lab you'll define a `petal()` function and call it in a loop to grow a full flower on the canvas.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Functions are the secret to writing code that's short, clear, and easy to reuse.
    Today we're going to grow a flower together — one petal at a time!
    Let's code it together!

## Defining a Function

A **function** is a block of code you write once and can run as many times as you want by calling its name. You create one with `def`:

```python
def petal():
    monty.forward(100)
    monty.right(120)
    monty.forward(100)
    monty.right(120)
    monty.forward(100)
    monty.right(120)
```

This function draws one triangle — one petal. To use it, call `petal()`. To draw four petals, call it four times (or put it in a loop).

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used **"My Blocks"** to define a custom block and then drag it where you needed it.
    In Python, `def petal():` defines the block, and `petal()` is how you use it — every time you call it, the whole function runs!

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')

distance = 80
angle = 120

def petal():
    monty.begin_fill()
    monty.color('pink')
    for i in range(3):
        monty.forward(distance)
        monty.right(angle)
    monty.end_fill()
    monty.right(90)

for i in range(4):
    petal()

monty.pensize(6)
monty.color('green')
monty.right(45)
monty.forward(120)
monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `petal()` is called 4 times, and each petal rotates 90 degrees from the last.
    What do you think the full drawing will look like — a flower, a pinwheel, something else?
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

distance = 80
angle = 120

def petal():
    monty.begin_fill()
    monty.color('pink')
    for i in range(3):
        monty.forward(distance)
        monty.right(angle)
    monty.end_fill()
    monty.right(90)

for i in range(4):
    petal()

monty.pensize(6)
monty.color('green')
monty.right(45)
monty.forward(120)
monty.hideturtle()`);
</script>

Were you right? Four filled pink triangles arranged around a center with a green stem — a flower!

## How It Works

`def petal():` creates the function but doesn't run it yet. The code inside it stays idle until you call `petal()`. When the `for i in range(4):` loop runs, it calls `petal()` four times. Each call draws one triangle and then rotates the turtle 90 degrees so the next petal points in a new direction.

`begin_fill()` and `end_fill()` paint the inside of whatever shape the turtle traces between those two calls. `hideturtle()` removes the turtle cursor at the end for a cleaner result.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def petal():` | Defines a function called `petal` — code here runs when `petal()` is called |
| `monty.begin_fill()` | Starts recording the path for filling |
| `monty.color('pink')` | Sets the fill and outline color to pink |
| `for i in range(3):` | Loops 3 times inside the function to draw each triangle side |
| `monty.end_fill()` | Fills the enclosed area with the current color |
| `monty.right(90)` | Rotates 90° so the next petal faces a new direction |
| `for i in range(4): petal()` | Calls the function 4 times to draw 4 petals |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below tries to draw 4 petals, but only one appears before the program stops.
    The function is never called inside the loop. Can you find and fix the problem?

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

distance = 80
angle = 120

def petal():
    monty.begin_fill()
    monty.color('pink')
    for i in range(3):
        monty.forward(distance)
        monty.right(angle)
    monty.end_fill()
    monty.right(90)

for i in range(4):
    pass  # bug: petal() is never called here!`);
</script>

## Experiments

Try these changes to the flower code. Predict first, then run!

1. Change `monty.color('pink')` to `monty.color('yellow')`.
   **You'll know it worked when** the petals are yellow instead of pink.

2. Change `for i in range(4): petal()` to `for i in range(6): petal()` and the rotation inside `petal` to `monty.right(60)`.
   **You'll know it worked when** you see 6 petals instead of 4.

3. Change `distance = 80` to `distance = 120`.
   **You'll know it worked when** the petals are noticeably larger.

4. Add an `if/else` inside `petal()` so it alternates between `'pink'` and `'purple'` using `i % 2`.
   **You'll know it worked when** the petals alternate colors. (Hint: you'll need to pass `i` to the function.)

5. Change the stem direction: replace `monty.right(45)` with `monty.left(45)`.
   **You'll know it worked when** the stem grows upward-left instead of downward-right.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You defined your first function and used it to build something beautiful!
    In the next lab you'll give your functions *parameters* so the same function can draw
    different things depending on what you pass in. Let's code it together!
