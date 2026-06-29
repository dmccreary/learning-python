# Random Circles

By the end of this lesson you'll be able to:

- Import the `random` library and generate random integers with `randint()`
- Use random numbers to place a turtle at an unpredictable position
- Draw a canvas full of colorful circles that look different every time you run the program

So far every program you've written produces the exact same drawing every time. The `random` library changes that — it generates numbers that are unpredictable, so each run of your program is a surprise.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    What if you could make a program that draws something different every single time you run it?
    That's the magic of randomness — and today I'm going to show you how!
    Let's code it together!

## Generating Random Numbers

To use random numbers, you first need to **import** the `random` library — just like you import `turtle`. Then use `randint(min, max)` to get a random whole number between `min` and `max` (both inclusive):

```python
import random
x = random.randint(-150, 150)
```

Each time this line runs, `x` gets a different value somewhere between -150 and 150.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used the **"Pick random 1 to 10"** block.
    In Python, `random.randint(1, 10)` does exactly the same thing — picks a random whole number
    in that range each time it runs!

## Sample Code

```python
import turtle
import random

monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

colors = ['red', 'orange', 'blue', 'green', 'purple', 'pink']

for i in range(10):
    x = random.randint(-150, 150)
    y = random.randint(-150, 150)
    color = colors[random.randint(0, 5)]
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    monty.circle(10)
    monty.end_fill()

monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The loop runs 10 times, picking a new random position and color each time.
    How many circles will appear? Will they always be in the same spots?
    Make your guess — then click Run twice to see what changes!

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

colors = ['red', 'orange', 'blue', 'green', 'purple', 'pink']

for i in range(10):
    x = random.randint(-150, 150)
    y = random.randint(-150, 150)
    color = colors[random.randint(0, 5)]
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    monty.circle(10)
    monty.end_fill()

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

Were you right? Ten colorful circles scatter across the canvas in random positions — and clicking Run again produces a completely different arrangement!

## How It Works

`random.randint(-150, 150)` returns a different integer each time — Python uses a pseudorandom algorithm that produces unpredictable-looking numbers. `goto(x, y)` jumps the turtle to that position, and `circle(10)` draws a circle with a radius of 10 steps around the current position.

`speed(10)` sets the turtle to maximum drawing speed so the circles appear quickly instead of crawling into place.

## Explanation Table

| Line | What it does |
|------|-------------|
| `import random` | Loads the random number library |
| `random.randint(-150, 150)` | Returns a random integer between -150 and 150 (inclusive) |
| `monty.speed(10)` | Sets drawing speed to maximum (10 = fastest) |
| `colors[random.randint(0, 5)]` | Picks a random index from 0 to 5 to select a color from the list |
| `monty.circle(10)` | Draws a circle with radius 10 at the current position |

!!! mascot-warning "Index Out of Range"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    If your `colors` list has 6 items (indexes 0–5), then `randint(0, 6)` can produce index 6 — which doesn't exist!
    Always use `randint(0, len(colors) - 1)` or `randint(0, 5)` when the list has 6 items.

## Learning Check

!!! mascot-thinking "Your Turn — Make the Circles Bigger"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws 10 random circles but they're all the same tiny size.
    Add **one line** inside the loop to pick a random radius between `5` and `25`,
    store it in a variable called `radius`, and use it in `monty.circle(radius)`.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import random

monty = turtle.Turtle()
monty.speed(10)

colors = ['red', 'orange', 'blue', 'green', 'purple', 'pink']

for i in range(10):
    x = random.randint(-150, 150)
    y = random.randint(-150, 150)
    color = colors[random.randint(0, 5)]
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    # Add one line: radius = random.randint(5, 25)
    monty.circle(10)  # change 10 to radius after adding the line above
    monty.end_fill()

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

Try these changes. Predict first, then run and compare!

1. Change `range(10)` to `range(30)`.
   **You'll know it worked when** 30 circles fill the canvas instead of 10.

2. Change `randint(-150, 150)` to `randint(-50, 50)` for both `x` and `y`.
   **You'll know it worked when** all the circles cluster near the center of the canvas.

3. Add `'gold'`, `'cyan'`, and `'brown'` to the `colors` list, and update `randint(0, 5)` to match the new list length.
   **You'll know it worked when** you occasionally see gold, cyan, or brown circles.

4. Change `monty.circle(10)` to `monty.circle(random.randint(5, 25))`.
   **You'll know it worked when** the circles vary in size, some tiny and some large.

5. Change the number of circles drawn by storing the count in a variable `num_circles = 20` at the top and using it in `range(num_circles)`.
   **You'll know it worked when** changing `num_circles` in one place controls how many appear.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Every run is a unique piece of art — that's the power of randomness!
    In the next lab you'll learn more about lists and how to loop through them directly.
    Let's code it together!
