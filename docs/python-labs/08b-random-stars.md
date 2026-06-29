# Random Stars

By the end of this lesson you'll be able to:

- Write a function that draws a five-pointed star using `forward()` and `right(144)`
- Call that function with random positions, sizes, and colors from a list
- Combine functions, lists, and randomness in one program

Five-pointed stars have a secret: the turtle always turns **144 degrees** and draws 5 spokes. In this lab you'll write a `star()` function, scatter it at random positions, and let Python pick the colors — so every run produces a new piece of star art.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Stars, colors, and randomness — all in one program! This lab puts together everything you've
    learned so far: functions, lists, loops, and `random`. Let's code it together!

## Drawing a Star

A five-pointed star uses a special angle: the turtle draws a spoke, turns **144 degrees** right, draws another spoke — and repeating this 5 times closes the star perfectly. The spoke length controls the star's size.

```python
def star(x, y, size):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.begin_fill()
    for i in range(5):
        monty.forward(size)
        monty.right(144)
    monty.end_fill()
```

## Sample Code

```python
import turtle
import random

monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

colors = ['red', 'orange', 'green', 'blue', 'purple', 'pink', 'gold']

def star(x, y, size):
    monty.penup()
    monty.goto(x, y)
    monty.color(colors[random.randint(0, len(colors) - 1)])
    monty.pendown()
    monty.begin_fill()
    for i in range(5):
        monty.forward(size)
        monty.right(144)
    monty.end_fill()

for i in range(8):
    x = random.randint(-150, 150)
    y = random.randint(-150, 150)
    size = random.randint(20, 50)
    star(x, y, size)

monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The loop runs 8 times and each call picks a random position, size, and color.
    How many stars will appear? Will they be the same size? Click Run twice — do you get the same picture?
    Make your guess — then find out!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import random

monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

colors = ['red', 'orange', 'green', 'blue', 'purple', 'pink', 'gold']

def star(x, y, size):
    monty.penup()
    monty.goto(x, y)
    monty.color(colors[random.randint(0, len(colors) - 1)])
    monty.pendown()
    monty.begin_fill()
    for i in range(5):
        monty.forward(size)
        monty.right(144)
    monty.end_fill()

for i in range(8):
    x = random.randint(-150, 150)
    y = random.randint(-150, 150)
    size = random.randint(20, 50)
    star(x, y, size)

monty.hideturtle()
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

Were you right? Eight filled stars — each a different random color and size, scattered across the canvas. Click Reset then Run again and you'll get a brand-new arrangement every time!

## How It Works

The key to the star shape is `right(144)`. Because 144 × 5 = 720 = 2 × 360, the turtle makes exactly two full rotations while tracing the five spokes, ending up where it started. Any other angle and the shape won't close into a star.

`len(colors) - 1` computes the last valid index of the list dynamically, so adding or removing colors from the list automatically adjusts the random range — no need to update the number by hand.

## Explanation Table

| Line | What it does |
|------|-------------|
| `for i in range(5): forward(size); right(144)` | Draws the 5 spokes of the star |
| `right(144)` | The magic star angle — 5 × 144 = 720° = two full rotations |
| `random.randint(0, len(colors) - 1)` | Picks a random valid index into the colors list |
| `size = random.randint(20, 50)` | Picks a random star size between 20 and 50 steps |

!!! mascot-warning "Stars That Don't Close"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    If you change `right(144)` to any other angle, the 5-spoke loop won't bring the turtle
    back to its start — and the star won't close. Try `right(150)` and see what happens!

## Learning Check

!!! mascot-thinking "Your Turn — Add a Background Color"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws random stars but the background is plain white.
    Add **one line** right after creating `monty` to set the screen background color to `'navy'`.
    Hint: use `turtle.Screen().bgcolor('navy')`.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import random

monty = turtle.Turtle()
monty.speed(10)
# Add one line here to set the background to 'navy'

colors = ['white', 'yellow', 'orange', 'cyan', 'gold']

def star(x, y, size):
    monty.penup()
    monty.goto(x, y)
    monty.color(colors[random.randint(0, len(colors) - 1)])
    monty.pendown()
    monty.begin_fill()
    for i in range(5):
        monty.forward(size)
        monty.right(144)
    monty.end_fill()

for i in range(10):
    x = random.randint(-150, 150)
    y = random.randint(-150, 150)
    size = random.randint(15, 40)
    star(x, y, size)

monty.hideturtle()
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

## Experiments

Try these changes to the random-stars code. Predict first, then run!

1. Change `range(8)` to `range(20)`.
   **You'll know it worked when** 20 stars crowd the canvas.

2. Change `random.randint(20, 50)` for `size` to `random.randint(10, 80)`.
   **You'll know it worked when** stars range from tiny to very large.

3. Change `range(5)` to `range(6)` and `right(144)` to `right(120)` inside the function.
   **You'll know it worked when** you see 6-pointed Stars of David instead of 5-pointed stars.

4. Add `monty.pensize(2)` inside the `star` function to give each star a visible outline.
   **You'll know it worked when** each star has a thin border.

5. Remove `begin_fill()` and `end_fill()` from the function.
   **You'll know it worked when** you see outline-only stars instead of filled ones.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You combined functions, lists, loops, and randomness into one creative program —
    that's real Python programming! In the next lab you'll learn how to get input from the user.
    Let's code it together!
