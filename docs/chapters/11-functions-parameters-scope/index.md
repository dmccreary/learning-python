---
title: Functions with Parameters and Scope
description: Learn how to use default parameter values, keyword arguments, and understand variable scope in Python functions
generated_by: claude skill chapter-content-generator
date: 2026-06-28 11:55:00
version: 0.09
---

# Functions with Parameters and Scope

By the end of this lesson you'll be able to:

- Write functions with **default parameter values** so they work even when a caller skips an argument
- Use **keyword arguments** to make function calls easier to read
- Explain the difference between **local** and **global** scope
- Identify whether a function is **pure** or has **side effects**

You already know how to define a function and call it.
Now let's make functions even more powerful by giving them smarter inputs and understanding where variables live.

!!! mascot-welcome "Welcome to Chapter 11!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Functions with parameters are like ordering from a menu — you say what you want and the kitchen does the work.
    Today we're going to make our functions even smarter by giving them *default* choices!
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Default Parameter Values

A **default parameter value** is a value the function uses automatically if the caller doesn't provide one.

Write the default value right after the `=` sign in the function definition.
If a caller passes a number, that number is used. If not, the function falls back to the default.

Here's an example. The function `draw_square` has a `size` parameter that defaults to `100`.
Calling `draw_square()` with no argument draws a square 100 steps wide.
Calling `draw_square(50)` draws a smaller square.

```python
import turtle
t = turtle.Turtle()
t.speed(6)

def draw_square(size=100):
    for i in range(4):
        t.forward(size)
        t.right(90)

draw_square(50)    # small square
t.penup()
t.goto(120, 0)
t.pendown()
draw_square()      # uses the default: size = 100
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    There are two calls to `draw_square()` — one with an argument and one without.
    Which square do you think will be bigger? Make your guess, then click Run!

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
t = turtle.Turtle()
t.speed(6)

def draw_square(size=100):
    for i in range(4):
        t.forward(size)
        t.right(90)

draw_square(50)    # small square
t.penup()
t.goto(120, 0)
t.pendown()
draw_square()      # uses the default: size = 100`);
</script>

Were you right? The first square (size 50) is smaller. The second uses the default size of 100.

| Line | What it does |
|------|-------------|
| `def draw_square(size=100):` | Defines `draw_square` — if you skip the argument, `size` is 100 |
| `draw_square(50)` | Calls with size = 50 |
| `draw_square()` | Calls with no argument — uses the default size = 100 |

**Rule:** parameters *with* defaults must come **after** any parameters *without* defaults.

## Keyword Arguments

When you call a function, Python normally matches arguments by position.
But you can also use the parameter's *name* when you call it.
This is called a **keyword argument** — you write `name=value` in the call.

The big advantage: you can put keyword arguments in any order.

The function below draws a colored polygon. It has three parameters: `sides`, `size`, and `color`.
Watch how keyword arguments make the call read like plain English:

```python
import turtle
t = turtle.Turtle()
t.speed(6)

def draw_polygon(sides=4, size=80, color="blue"):
    t.pencolor(color)
    for i in range(sides):
        t.forward(size)
        t.right(360 / sides)

draw_polygon(sides=6, color="red", size=60)
```

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
t = turtle.Turtle()
t.speed(6)

def draw_polygon(sides=4, size=80, color="blue"):
    t.pencolor(color)
    for i in range(sides):
        t.forward(size)
        t.right(360 / sides)

draw_polygon(sides=6, color="red", size=60)`);
</script>

The call uses `color` before `size`, but that's fine — keyword arguments can go in any order.
Try changing `sides=6` to `sides=3` to draw a triangle, or change `color="red"` to any color you like.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch, custom blocks have labeled input fields — you fill in "size" or "color" by name.
    Python keyword arguments work the same way!
    `draw_polygon(color="red")` is like filling in the "color" field in a Scratch block.

## Local Scope and Global Scope

**Scope** describes where Python can see a variable.

A variable created *inside* a function has **local scope**.
It only exists while the function runs. When the function finishes, that variable is gone.

A variable created *outside* any function has **global scope**.
It exists for the whole program.

The example below shows both. A function can *read* a global variable, but the local variable inside the function is invisible from outside.

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-3"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-3')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-3')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-3"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-3"></div>
  </div>
</div>
<script>
initCmLab('-3', `name = "Monty"   # global variable

def greet():
    greeting = "Hello"  # local variable
    print(greeting + ", " + name + "!")

greet()
# Uncomment the next line to see a NameError:
# print(greeting)
print("name is:", name)`);
</script>

| Variable | Where defined | Visible inside `greet()`? | Visible outside `greet()`? |
|----------|--------------|--------------------------|---------------------------|
| `name` | Outside (global) | Yes | Yes |
| `greeting` | Inside `greet()` (local) | Yes | No — NameError! |

### See It: Rooms for Variables

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    In the **Shadowing Bug** program below, a function sets `score = 99` while
    the global `score` is 10. After the function finishes, what will
    `print(score)` show — 99 or 10? Make your prediction, then step through
    and watch the rooms!

<iframe src="../../sims/scope-inspector/main.html" height="512" width="100%" scrolling="no"></iframe>

[Explore the Scope Inspector MicroSim](../../sims/scope-inspector/index.md){ .md-button }

Watch how the Function room appears when a call starts and **vanishes at return, taking its variables with it**. Then run **The global Fix** to see the one case where a function writes straight into the Global room.

## The `global` Keyword

By default, a function can *read* a global variable but cannot *change* it.

If you want a function to update a global variable, use the **`global` keyword** to tell Python your intention.

The key word `global score` inside the function tells Python: "I mean the `score` that lives outside, not a new local one."

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-4"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-4')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-4')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-4"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-4"></div>
  </div>
</div>
<script>
initCmLab('-4', `score = 0   # global score

def add_points(n):
    global score   # use the GLOBAL score, not a new local one
    score = score + n

add_points(10)
add_points(5)
print("Final score:", score)`);
</script>

Without the `global score` line, Python would create a *new* local variable named `score` and leave the global one untouched — which is usually not what you want.

## Naming Conflicts to Avoid

If you create a local variable with the *same name* as a global variable, the local one **shadows** the global one inside that function. This can cause tricky bugs.

```python
speed = 10   # global

def reset():
    speed = 0   # creates a NEW local variable — does NOT change the global!
    print("Inside:", speed)

reset()
print("Outside:", speed)   # still 10!
```

To stay safe, choose different names for global and local variables — or use `global` if you truly want to change the global value.

## Constants by Convention

A **constant** is a value that should never change after you set it.
Python doesn't enforce this, but programmers follow a convention: write constant names in **ALL_CAPS** with underscores.

```python
MAX_SPEED = 10
CANVAS_WIDTH = 400
PEN_COLOR = "navy"
```

ALL_CAPS is a signal to every reader: "Don't change this — treat it like a fixed rule."

## Swapping Two Variables

Here's a classic puzzle: how do you swap the values of two variables?

The *wrong* approach loses data:

```python
a = 5
b = 10
a = b    # a is now 10
b = a    # b gets 10 too — oops! 5 is gone
```

The *right* approach uses a temporary variable:

```python
temp = a   # save a's original value
a = b      # a gets b's value
b = temp   # b gets a's original value
```

Python has a built-in shortcut that swaps in one line:

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-5"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-5')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-5')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-5"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-5"></div>
  </div>
</div>
<script>
initCmLab('-5', `a = 5
b = 10
print("Before:", a, b)

a, b = b, a   # Python swap shortcut

print("After: ", a, b)`);
</script>

## Pure Functions vs Functions with Side Effects

A **pure function** always gives the same output for the same input and doesn't change anything outside itself.
Put in the same number, always get the same result — like a calculator.

A function with **side effects** changes something outside itself, such as printing to the screen, modifying a global variable, or making the turtle draw.

```python
# Pure function — no side effects, always returns the same result
def square(n):
    return n * n

# Function with side effects — changes global, prints output
total = 0

def add_to_total(n):
    global total
    total = total + n
    print("Total is now:", total)
```

Pure functions are easier to test because they're predictable.
Side effects aren't bad — drawing with the turtle *is* a side effect — but knowing which type of function you're writing helps you write better code.

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Argument"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The function below should draw a pentagon (5 sides), but the `sides` keyword argument is missing from the call.
    Add `sides=5` to make it draw a pentagon!

<div class="cm-lab">
  <div class="cm-editor-wrap">
    <div id="cm-editor-6"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-6')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-6')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-6"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-6"></div>
  </div>
</div>
<script>
initCmLab('-6', `import turtle
t = turtle.Turtle()
t.speed(6)

def draw_polygon(sides=4, size=80, color="blue"):
    t.pencolor(color)
    for i in range(sides):
        t.forward(size)
        t.right(360 / sides)

# Add the sides keyword argument to draw a pentagon:
draw_polygon(color="green", size=70)`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change the default size in `draw_square` from `100` to `150`. Call `draw_square()` with no arguments.
   **You'll know it worked when** the turtle draws a bigger square without you passing any number.

2. Add a fourth parameter `line_width=1` to `draw_polygon` and call `t.pensize(line_width)` at the start.
   Call it with `draw_polygon(sides=3, line_width=5)`.
   **You'll know it worked when** the triangle has noticeably thick lines.

3. Create a global variable `COUNT = 0` and a function `increment()` that uses `global COUNT` to add 1.
   Call `increment()` three times and `print(COUNT)`.
   **You'll know it worked when** you see `3`.

4. Try the *wrong* swap (write `a = b` then `b = a`) and print both variables.
   **You'll know it worked when** both variables show the same value — proving the bug!

5. Write a pure function `cube(n)` that returns `n * n * n`.
   Call it inside `print(cube(4))`.
   **You'll know it worked when** you see `64`.

!!! mascot-celebration "Fantastic Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've learned how to write smarter functions with default values, keyword arguments, and proper scope!
    These skills will make every function you write from now on more flexible and easier for others to read.
    Let's keep coding together!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
