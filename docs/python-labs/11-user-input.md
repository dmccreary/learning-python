# Getting Input from the User

By the end of this lesson you'll be able to:

- Use `input()` to pause a program and ask the user a question
- Convert text input to an integer with `int()` so you can use it as a number
- Draw a shape whose size or count changes based on what the user types

Every program you've written so far runs the same way every time. `input()` changes that — it pauses the program, displays a prompt, and waits for the user to type something before continuing. Whatever the user types becomes a value your program can use.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    What if *you* could tell Monty how many shapes to draw — while the program is running?
    That's what user input does! Let's code it together!

## The `input()` Function

`input("prompt text")` displays a message in the output box and waits. When the user types something and presses Enter, `input()` returns what they typed — always as a **string** (text).

If you need a number, wrap `input()` with `int()` to convert the string:

```python
answer = input("How many circles? ")
count = int(answer)
```

Or combine them on one line:

```python
count = int(input("How many circles? "))
```

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used the **"Ask ___ and wait"** block, which stored the answer in the `answer` variable.
    In Python, `input("question")` does the same thing — it asks, waits, and returns the answer!

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

count = int(input("How many circles to draw? (try 3 to 10) "))
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

monty.penup()
monty.goto(-150, 0)

for i in range(count):
    monty.color(colors[i % len(colors)])
    monty.pendown()
    monty.begin_fill()
    monty.circle(20)
    monty.end_fill()
    monty.penup()
    monty.forward(50)

monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    When you click Run, a prompt will appear asking how many circles to draw.
    If you type `5`, how many circles will appear? What if you type `0`?
    Make your guess — then click Run and find out!

## Try It Now

Click **Run**, type a number in the output box when prompted, then press Enter.
No account needed — everything runs in your browser.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

count = int(input("How many circles to draw? (try 3 to 10) "))
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

monty.penup()
monty.goto(-150, 0)

for i in range(count):
    monty.color(colors[i % len(colors)])
    monty.pendown()
    monty.begin_fill()
    monty.circle(20)
    monty.end_fill()
    monty.penup()
    monty.forward(50)

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

Were you right? The program drew exactly as many circles as you typed — the loop runs `count` times, using `i % len(colors)` to cycle through the color list without going out of range.

## How It Works

`input()` always returns a **string** — even if the user types `5`, Python stores `"5"` (text), not `5` (number). Calling `int()` on it converts `"5"` to the integer `5`. Only after that can you use it in `range(count)`.

`i % len(colors)` is the remainder when `i` is divided by the number of colors. This cycles the index back to 0 when `i` reaches the end of the list — so you can draw more circles than there are colors without an `IndexError`.

## Explanation Table

| Line | What it does |
|------|-------------|
| `input("prompt")` | Displays the prompt and waits for the user to type and press Enter |
| `int(...)` | Converts the returned string to an integer |
| `count = int(input(...))` | Combines both steps in one line |
| `i % len(colors)` | Cycles through color indexes without going out of bounds |

!!! mascot-warning "Always Convert to int"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    If you forget `int()` and try to use the input directly in `range(count)`, you'll get a
    `TypeError: 'str' object cannot be interpreted as an integer`.
    `input()` always returns a string — you must convert it if you need a number.

## Learning Check

!!! mascot-thinking "Your Turn — Ask for the Radius Too"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below asks for the number of circles but always draws them with radius 20.
    Add **one line** to also ask the user for the radius, store it in `radius`, and use it
    in `monty.circle(radius)` instead of `monty.circle(20)`.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(10)

count = int(input("How many circles? (1-7) "))
# Add one line here: radius = int(input("How big? (10-40) "))

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

monty.penup()
monty.goto(-150, 0)

for i in range(count):
    monty.color(colors[i % len(colors)])
    monty.pendown()
    monty.begin_fill()
    monty.circle(20)  # change 20 to radius after adding the line above
    monty.end_fill()
    monty.penup()
    monty.forward(50)

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

Try these changes. Remember to type a value in the prompt when you click Run!

1. Ask the user for the radius instead of counting circles — use `radius = int(input("Circle radius? "))` and draw one circle with that radius.
   **You'll know it worked when** typing different numbers produces circles of different sizes.

2. Ask for a color name: `my_color = input("Pen color? ")` and use `monty.color(my_color)` before the loop.
   **You'll know it worked when** typing `'blue'` gives blue circles and `'green'` gives green ones.

3. Try typing a decimal like `3.5` at the prompt with `int()`. Notice the `ValueError`.
   Now change `int()` to `float()` so decimals are accepted.
   **You'll know it worked when** typing `3.5` no longer crashes the program.

4. Add a `print()` at the end that says how many circles were drawn: `print("Drew", count, "circles!")`.
   **You'll know it worked when** that message appears in the output box after the drawing finishes.

5. Ask for the number of sides per shape. Use the answer to draw polygons instead of circles.
   **You'll know it worked when** typing `3` draws triangles, `4` draws squares, etc.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Your programs can now talk to the user and change their behavior on the fly —
    that's what makes software feel *alive*! Let's code it together!
