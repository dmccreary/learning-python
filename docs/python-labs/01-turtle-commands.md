# Turtle Commands

By the end of this lesson you'll be able to:

- Move a turtle forward, backward, and in any direction using `forward()`, `back()`, `left()`, and `right()`
- Change the pen color and line thickness with `color()` and `pensize()`
- Change the turtle's icon using `shape()`

Every turtle program starts with the same three setup lines, and then you give the turtle a sequence of commands — move here, turn that way, draw this color. In this lab you'll try the most important commands and see exactly what each one does.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi, I'm Monty! I live inside your browser and I draw whatever you tell me to.
    In this lesson you'll learn the commands that make me move, turn, and change color.
    Let's code it together!

## Moving and Turning

The turtle starts at the center of the canvas, facing right. Four commands control movement:

- `forward(n)` — walk forward `n` steps, drawing a line
- `back(n)` — walk backward `n` steps, drawing a line
- `left(n)` — turn left `n` degrees (counter-clockwise)
- `right(n)` — turn right `n` degrees (clockwise)

Two commands control the pen:

- `color('name')` — set the drawing color (try `'red'`, `'blue'`, `'green'`, `'orange'`)
- `pensize(n)` — set the line thickness; `1` is thin, `10` is chunky

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used **"Move 10 steps"**, **"Turn ↻ degrees"**, and **"Set pen color"**.
    `forward()`, `right()`, and `color()` do exactly the same things in Python!

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')

monty.pensize(3)
monty.color('blue')
monty.forward(100)

monty.right(90)
monty.color('red')
monty.forward(100)

monty.right(90)
monty.color('green')
monty.forward(100)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The turtle draws three line segments. What color will each segment be?
    Make your guess — then click Run to find out!

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

monty.pensize(3)
monty.color('blue')
monty.forward(100)

monty.right(90)
monty.color('red')
monty.forward(100)

monty.right(90)
monty.color('green')
monty.forward(100)`);
</script>

Were you right? The turtle draws a blue segment, turns right, draws a red segment, turns right again, and finishes with a green segment — an upside-down U shape in three colors.

**If you see a red error message:** Check that every command ends with `()` and that the color name is inside quotes — `'blue'` not `blue`.

## How It Works

The turtle starts facing right. Each `color()` call sets the pen color for every line drawn after it — until you call `color()` again. `right(90)` rotates the turtle 90 degrees clockwise, making it face downward after the first turn.

The `shape('turtle')` call on line 3 changes the cursor icon from a plain arrow to a turtle shape. You can also try `'arrow'`, `'circle'`, `'square'`, or `'classic'`.

## Explanation Table

| Line | What it does |
|------|-------------|
| `import turtle` | Loads the turtle graphics library |
| `monty = turtle.Turtle()` | Creates a turtle and names it `monty` |
| `monty.shape('turtle')` | Sets the cursor to a turtle icon |
| `monty.pensize(3)` | Makes the line 3 pixels thick |
| `monty.color('blue')` | Sets the pen color to blue |
| `monty.forward(100)` | Moves 100 steps forward, drawing a line |
| `monty.right(90)` | Rotates 90 degrees clockwise |

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Line"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below should draw a green line going right, then a blue line going down.
    But both lines come out the same color! Add **one line** after `monty.right(90)` to fix it.

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

monty.color('green')
monty.pensize(3)
monty.forward(100)

monty.right(90)
# Add one line here to change the color to blue
monty.forward(100)`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run to check!

1. Change `monty.shape('turtle')` to `monty.shape('circle')`.
   **You'll know it worked when** the cursor is a filled circle instead of a turtle icon.

2. Change `monty.pensize(3)` to `monty.pensize(10)`.
   **You'll know it worked when** all three lines are noticeably thicker.

3. Add `monty.back(50)` after the last `forward(100)`.
   **You'll know it worked when** the turtle backs up, leaving a green line on top of the existing green segment.

4. Add `monty.left(90)` instead of `monty.right(90)` for both turns.
   **You'll know it worked when** the shape curves upward instead of downward.

5. Add `monty.hideturtle()` as the very last line.
   **You'll know it worked when** the turtle icon disappears, leaving a clean drawing.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've learned the core turtle commands — the building blocks of every drawing in this course!
    Try the experiments above to explore what else Monty can do. Let's code it together!
