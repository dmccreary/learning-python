# Responding to Mouse Clicks

By the end of this lesson you'll be able to:

- Register a function as a click handler using `screen.onscreenclick()`
- Use the `x` and `y` arguments your handler receives to draw at the click location
- Build a program that responds to the user in real time

Every program so far runs from top to bottom and then stops. **Event-driven programs** are different — they set up a handler function and then *wait*. When the user clicks the canvas, the handler is called with the exact coordinates of the click. Your code then decides what to draw there.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Click anywhere on the canvas and a shape appears — that's an event-driven program!
    Today you'll make Monty respond to wherever you click. Let's code it together!

## Event Handlers

An **event handler** is a function you write and then *register* with the screen. Python calls it automatically whenever the event occurs — you don't call it yourself:

```python
def on_click(x, y):
    # x and y are where the user clicked
    monty.goto(x, y)
    monty.circle(15)

screen = turtle.Screen()
screen.onscreenclick(on_click)
```

`screen.onscreenclick(on_click)` tells Python: "when someone clicks the canvas, call `on_click` with the click coordinates." Your function receives `x` and `y` automatically.

## Sample Code

```python
import turtle

screen = turtle.Screen()
screen.bgcolor('lightyellow')
screen.title("Click to draw!")

monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)
monty.penup()

colors = ['red', 'orange', 'green', 'blue', 'purple', 'pink']
click_count = [0]

def on_click(x, y):
    color = colors[click_count[0] % len(colors)]
    monty.color(color)
    monty.goto(x, y)
    monty.pendown()
    monty.begin_fill()
    monty.circle(20)
    monty.end_fill()
    monty.penup()
    click_count[0] += 1

screen.onscreenclick(on_click)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    After you click Run, the canvas waits for your clicks.
    Each click draws a circle at that position. What do you think happens to the color each time you click?
    Make your guess — then click Run and try clicking the canvas!

## Try It Now

Click **Run**, then click anywhere on the drawing canvas to place a circle there.
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

screen = turtle.Screen()
screen.bgcolor('lightyellow')

monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)
monty.penup()

colors = ['red', 'orange', 'green', 'blue', 'purple', 'pink']
click_count = [0]

def on_click(x, y):
    color = colors[click_count[0] % len(colors)]
    monty.color(color)
    monty.goto(x, y)
    monty.pendown()
    monty.begin_fill()
    monty.circle(20)
    monty.end_fill()
    monty.penup()
    click_count[0] += 1

screen.onscreenclick(on_click)`);
</script>

Were you right? Each click draws a filled circle at exactly that spot, cycling through red, orange, green, blue, purple, and pink — the color advances with every click.

## How It Works

`screen.onscreenclick(on_click)` registers your function. Each time the canvas is clicked, Python calls `on_click(x, y)` with the pixel coordinates of the click. Your function then goes to that location and draws.

`click_count` is stored as a **list with one item** (`[0]`) rather than a plain variable. This is a Python scoping trick: plain variables inside a nested function can't be updated directly — but list items can. `click_count[0] += 1` increments the counter safely.

## Explanation Table

| Line | What it does |
|------|-------------|
| `screen = turtle.Screen()` | Gets a handle to the drawing window |
| `screen.onscreenclick(on_click)` | Registers `on_click` as the function to call on each canvas click |
| `def on_click(x, y):` | The handler — `x` and `y` are provided automatically by the screen |
| `click_count = [0]` | A counter stored in a list so it can be updated inside the handler |
| `click_count[0] % len(colors)` | Cycles through the color list with each click |

!!! mascot-tip "The x, y Come Free"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    You never call `on_click()` yourself — the screen calls it for you and fills in `x` and `y`
    automatically. Your job is just to decide what to draw at those coordinates!

## Learning Check

!!! mascot-thinking "Your Turn — Draw Stars Instead of Circles"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws a circle on every click. Change the drawing code inside `on_click`
    so it draws a **five-pointed star** at the click position instead.
    Hint: a star uses `for i in range(5): forward(30); right(144)`.

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

screen = turtle.Screen()
screen.bgcolor('navy')

monty = turtle.Turtle()
monty.speed(10)
monty.penup()

colors = ['yellow', 'gold', 'white', 'orange', 'cyan']
click_count = [0]

def on_click(x, y):
    color = colors[click_count[0] % len(colors)]
    monty.color(color)
    monty.goto(x, y)
    monty.pendown()
    monty.begin_fill()
    # Change this circle to a 5-pointed star
    # (for i in range(5): forward(30); right(144))
    monty.circle(20)
    monty.end_fill()
    monty.penup()
    click_count[0] += 1

screen.onscreenclick(on_click)`);
</script>

## Experiments

Try these changes to the click-to-draw code. Predict first, then test!

1. Change `monty.circle(20)` to `monty.circle(random.randint(10, 40))` (add `import random` at the top).
   **You'll know it worked when** each click produces a circle of a random size.

2. Change `screen.bgcolor('lightyellow')` to `screen.bgcolor('black')` and add bright colors to the list.
   **You'll know it worked when** the circles look like colorful bubbles on a dark background.

3. After `on_click` runs, add `monty.write(str(click_count[0]), font=("Arial", 12, "normal"))` to number each circle.
   **You'll know it worked when** a number appears next to each circle showing the order it was clicked.

4. Change `monty.circle(20)` to a small polygon: `for i in range(6): monty.forward(20); monty.right(60)`.
   **You'll know it worked when** clicking places hexagons instead of circles.

5. Add `if click_count[0] >= 5: return` at the very start of `on_click` to limit clicks to 5.
   **You'll know it worked when** clicks after the fifth one have no effect.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've written an event-driven program — the same pattern used in every button, menu, and
    game in the world. Every click, tap, and keypress works exactly like this under the hood!
    Let's code it together!
