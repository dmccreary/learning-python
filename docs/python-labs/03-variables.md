# Variables for Your Drawing

By the end of this lesson you'll be able to:

- Store a number in a variable and use it in your code
- Change the size of a square by editing just one line
- Explain why variables make programs easier to modify

In the simple square lesson, the numbers `100` and `90` appeared eight times each. If you wanted a bigger square you had to change eight lines. **Variables** let you write the number once and use it everywhere — change the variable and the whole drawing changes.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to make your code smarter? Today I'll show you how variables work —
    and why every programmer uses them. Let's code it together!

## What Is a Variable?

A **variable** is a named box that holds a value. You create one by writing a name, an equals sign, and the value:

```python
distance = 100
```

After this line, Python remembers that `distance` equals `100`. Whenever you write `distance` later in your code, Python uses `100` in its place.

Give variables descriptive names — `distance` is much clearer than `d` or `x`.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used the **"Set [distance] to 100"** block in the Variables drawer.
    In Python, `distance = 100` does exactly the same thing: it creates a variable called
    `distance` and stores the value `100` in it.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')

distance = 100
angle = 90

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The turtle uses `distance` for every `forward()` call and `angle` for every `right()` call.
    What shape will it draw? Make your guess — then click Run to find out!

## Try It Now

Edit the code below and click **Run** to see Monty draw right on this page.
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

distance = 100
angle = 90

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)`);
</script>

Were you right? With `angle = 90`, each turn is a quarter-circle, so the turtle draws a perfect square.

**If you see a red error message:** Check that your variable name is spelled exactly the same everywhere — `distance` and `Distance` are two different names in Python.

## How It Works

Python reads the file from top to bottom. When it reaches `distance = 100`, it stores the value `100` in memory under the name `distance`. Every time it later sees `forward(distance)`, it looks up that stored value and uses it — just like reading a note you left yourself.

## Explanation Table

| Line | What it does |
|------|-------------|
| `distance = 100` | Creates a variable named `distance` and stores `100` in it |
| `angle = 90` | Creates a variable named `angle` and stores `90` in it |
| `monty.forward(distance)` | Moves forward 100 steps (reads the variable's value) |
| `monty.right(angle)` | Turns 90 degrees right (reads the variable's value) |

!!! mascot-warning "Common Mistake: Typo in Variable Name"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    If you write `distanse` on one line and `distance` on another, Python treats them as two
    different variables — and the second one has no value yet. You'll see a `NameError`.
    Python is case-sensitive too: `Distance` ≠ `distance`.

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below should draw a square, but it crashes with a `NameError`.
    There's a typo in one variable name. Can you find it and fix it?

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

distnace = 80
angle = 90

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)

monty.forward(distance)
monty.right(angle)`);
</script>

## Experiments

Try these changes to the code above. Predict what will happen first, then run it to check!

1. Change `distance = 100` to `distance = 150`.
   **You'll know it worked when** the square is noticeably larger than before.

2. Change `distance = 100` to `distance = 40`.
   **You'll know it worked when** the square is about half as big.

3. Change `angle = 90` to `angle = 120` and reduce the four pairs to three pairs of `forward`/`right`.
   **You'll know it worked when** you see a triangle instead of a square.

4. Add `monty.color('purple')` just before the first `forward` line.
   **You'll know it worked when** all four sides of the square are purple.

5. Add a third variable: `monty.pensize(thickness)` and set `thickness = 5` at the top.
   **You'll know it worked when** the lines are noticeably thicker, and you can change `thickness` in one place to affect all four sides.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've unlocked variables — one of the most powerful ideas in all of programming!
    In the next lab you'll combine variables with a `for` loop so you don't have to
    repeat those four lines at all. Let's code it together!
