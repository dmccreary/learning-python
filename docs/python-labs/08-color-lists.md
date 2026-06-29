# Color Lists

By the end of this lesson you'll be able to:

- Create a list of color strings and access items by index number
- Loop through every item in a list using `for color in my_list:`
- Draw a row of colored shapes by iterating over a color list

A **list** is an ordered collection of values. In Python you write it with square brackets. Lists are perfect for storing a palette of colors and then painting shapes one by one through the whole palette.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    What if you could tell Monty: "here are ten colors — paint one circle for each"?
    That's exactly what lists let you do! Let's code it together!

## Creating and Using a List

A **list** stores multiple values in one variable, separated by commas inside square brackets:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
```

Access any item by its **index** — its position in the list, counting from 0:

```python
colors[0]   # 'red'
colors[2]   # 'yellow'
colors[4]   # 'blue'
```

To do something with *every* item, use a `for` loop directly over the list:

```python
for color in colors:
    # 'color' is each item in turn
```

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used the **List** block with numbered slots (item 1, item 2, …).
    In Python, lists use the same idea — but counting starts at **0**, not 1.
    So `colors[0]` is what Scratch calls "item 1 of colors".

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

monty.penup()
monty.goto(-150, 0)

for color in colors:
    monty.color(color)
    monty.pendown()
    monty.begin_fill()
    monty.circle(20)
    monty.end_fill()
    monty.penup()
    monty.forward(45)

monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The list has 7 colors and the loop runs once per color.
    How many circles will appear, and what order will the colors go in?
    Make your guess — then click Run!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

monty.penup()
monty.goto(-150, 0)

for color in colors:
    monty.color(color)
    monty.pendown()
    monty.begin_fill()
    monty.circle(20)
    monty.end_fill()
    monty.penup()
    monty.forward(45)

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

Were you right? Seven filled circles spread in a row, each painted a different color from the list — a rainbow palette!

## How It Works

`for color in colors:` is a **for-each loop** — on each repetition, `color` is automatically set to the next item in the list. The first time through it's `'red'`, then `'orange'`, and so on until the list is exhausted.

`forward(45)` moves the turtle 45 steps to the right after each circle so the next one appears beside it without overlapping.

## Explanation Table

| Line | What it does |
|------|-------------|
| `colors = ['red', …]` | Creates a list of color strings |
| `colors[0]` | Accesses the first item (`'red'`); indexes start at 0 |
| `for color in colors:` | Loops once for each item; `color` holds the current item |
| `monty.goto(-150, 0)` | Moves to the left side of the canvas as the starting point |
| `monty.forward(45)` | Shifts right 45 steps before drawing the next circle |

!!! mascot-warning "Index Out of Range"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    If your list has 7 items, valid indexes are 0–6. Trying `colors[7]` causes an
    `IndexError` — Python can't find item 7 because it doesn't exist.
    Use `len(colors)` to find out how many items are in a list.

## Learning Check

!!! mascot-thinking "Your Turn — Draw Squares Instead"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below is supposed to draw a row of small filled squares (not circles),
    but the loop body is incomplete. Add **two lines** inside the loop — a `for` loop
    that draws four sides — so each color becomes a filled square instead of a circle.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(10)

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

monty.penup()
monty.goto(-140, 0)

for color in colors:
    monty.color(color)
    monty.pendown()
    monty.begin_fill()
    # Add a for loop here to draw 4 sides of a square (forward 30, right 90)
    monty.end_fill()
    monty.penup()
    monty.forward(40)

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

Try these changes to the color-circles code. Predict first, then run!

1. Add `'gold'` and `'brown'` to the end of the `colors` list.
   **You'll know it worked when** two extra circles appear to the right of the original seven.

2. Change `monty.circle(20)` to `monty.circle(15)` and `monty.forward(45)` to `monty.forward(35)`.
   **You'll know it worked when** the circles are smaller and tighter together.

3. Print the length of the list: add `print(len(colors))` after the list definition and before the loop.
   **You'll know it worked when** `7` (or your new count) appears in the output box below the editor.

4. Access a single color by index: add `print(colors[3])` after the list definition.
   **You'll know it worked when** `green` appears in the output (it's at index 3).

5. Try a `for` loop using an index: replace `for color in colors:` with `for i in range(len(colors)):` and then use `colors[i]` instead of `color`.
   **You'll know it worked when** the output looks the same — this is an alternative way to iterate.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Lists let you store whole collections of data and loop through them automatically!
    In the next lab you'll combine lists with random numbers and functions to draw random stars.
    Let's code it together!
