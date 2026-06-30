# Drawing Polygons with Loops

By the end of this lesson you'll be able to:

- Use `for i in range(n):` to repeat a block of code `n` times
- Draw any regular polygon by changing just two variables
- Explain why a loop is better than writing the same lines over and over

Drawing a square in the last lesson required eight lines — four `forward()` calls and four `right()` calls. A `for` loop does that in two lines. Better yet, change one variable and you instantly get a pentagon, hexagon, or any polygon you like.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Here's a secret every programmer knows: if you're copying and pasting the same line,
    there's a better way. Today I'll show you the `for` loop — it's Monty's favorite shortcut.
    Let's code it together!

## The For Loop

A **for loop** is a block of code that runs a set number of times. Here's the pattern:

```python
for i in range(4):
    monty.forward(80)
    monty.right(90)
```

`range(4)` counts from 0 to 3, so the indented block runs **4 times**. The variable `i` tracks which repetition you're on — but for drawing polygons, you don't even need to use `i`.

The **turn angle** for any regular polygon follows one rule: divide 360 by the number of sides.
An octagon has 8 sides: 360 ÷ 8 = 45 degrees. A hexagon: 360 ÷ 6 = 60 degrees.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used the **"Repeat 4"** block to run commands a set number of times.
    In Python, `for i in range(4):` does exactly the same thing — and the indented lines
    beneath it are the commands that repeat!

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')

sides = 6
angle = 360 / sides

for i in range(sides):
    monty.forward(80)
    monty.right(angle)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `sides = 6` and `angle = 360 / 6`. How many sides will the shape have, and what shape is that?
    Make your guess — then click Run to find out!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../js/codemirror-lab.js"></script>

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

sides = 6
angle = 360 / sides

for i in range(sides):
    monty.forward(80)
    monty.right(angle)`);
</script>

Were you right? Six sides, each at 60 degrees — a perfect hexagon!

**If you see a red error message:** Check that the two lines inside the loop are indented by exactly 4 spaces. Python uses indentation to know which lines belong inside the loop.

## How It Works

`for i in range(sides):` tells Python to count from 0 up to (but not including) `sides`. Each count is one repetition of the indented block. The angle formula `360 / sides` always gives the correct exterior turn for a regular polygon — it's a mathematical fact that the exterior angles of any convex polygon add up to exactly 360 degrees.

## Explanation Table

| Line | What it does |
|------|-------------|
| `sides = 6` | Number of sides — change this to get a different polygon |
| `angle = 360 / sides` | Calculates the correct turn angle for this polygon |
| `for i in range(sides):` | Repeats the indented block once for each side |
| `    monty.forward(80)` | Draws one side (80 steps long); the 4-space indent makes it part of the loop |
| `    monty.right(angle)` | Turns the correct amount at each corner |

!!! mascot-warning "Common Mistake: Forgetting the Colon"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    The `for` line must end with a colon `:` and the lines inside must be indented.
    If you forget either one, Python will show a `SyntaxError`. Check both before you search further!

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Line"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below is trying to draw a pentagon (5 sides), but `angle` is never calculated —
    so Python doesn't know how far to turn. Add **one line** to calculate the angle!

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

sides = 5
# Add one line here to calculate the correct angle

for i in range(sides):
    monty.forward(80)
    monty.right(angle)`);
</script>

## Experiments

Try these changes to the hexagon code. Predict first, then run!

1. Change `sides = 6` to `sides = 3`.
   **You'll know it worked when** you see a triangle.

2. Change `sides = 6` to `sides = 8`.
   **You'll know it worked when** you see an octagon (8 equal sides).

3. Change `sides = 6` to `sides = 36`.
   **You'll know it worked when** the polygon looks almost like a circle.

4. Change `monty.forward(80)` to `monty.forward(120)`.
   **You'll know it worked when** the hexagon is larger and may extend to the edge of the canvas.

5. Add `monty.color('purple')` and `monty.pensize(4)` before the loop.
   **You'll know it worked when** a thick purple polygon appears.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    One `for` loop, infinite polygons — you've unlocked a superpower!
    In the next lab you'll use `if/else` inside a loop to make each side a different color.
    Let's code it together!
