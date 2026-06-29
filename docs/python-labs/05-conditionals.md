# Changing Colors with If-Else

By the end of this lesson you'll be able to:

- Write an `if/else` statement to make a choice in your code
- Use the modulo operator `%` to test whether a number is odd or even
- Draw a square with alternating red and blue sides

What if you want the turtle to draw some sides in red and others in blue — automatically? An `if/else` statement makes a choice every time the loop runs, so each side can be a different color without any extra work from you.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Loops repeat, but what if you need something to be *different* on some repetitions?
    That's what `if/else` is for! Today you'll teach Monty to pick colors automatically.
    Let's code it together!

## If-Else: Making Choices

An **if/else** statement runs one block of code when a condition is true and a different block when it's false:

```python
if condition:
    # runs when condition is True
else:
    # runs when condition is False
```

To alternate colors every other side, you need to know whether the loop counter `i` is **odd** or **even**. The **modulo operator** `%` gives you the remainder after division. `i % 2` is:
- `0` when `i` is even (0, 2, 4, …)
- `1` when `i` is odd (1, 3, 5, …)

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch you used the **"If … then / else"** block to make a choice.
    In Python, `if condition:` / `else:` does exactly the same thing — just written as text!

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')

distance = 100
angle = 90

for i in range(4):
    if i % 2 == 0:
        monty.color('red')
    else:
        monty.color('blue')
    monty.forward(distance)
    monty.right(angle)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `i` goes 0, 1, 2, 3. Which values make `i % 2 == 0` true?
    Will the first side be red or blue? Make your guess — then click Run!

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

distance = 100
angle = 90

for i in range(4):
    if i % 2 == 0:
        monty.color('red')
    else:
        monty.color('blue')
    monty.forward(distance)
    monty.right(angle)
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

Were you right? When `i` is 0 or 2, `i % 2 == 0` is true, so those sides are red. When `i` is 1 or 3, it's false, so those sides are blue — alternating all the way around the square.

## How It Works

The loop counter `i` starts at 0. On each repetition the `if` condition is checked: is `i % 2` equal to 0? If yes, the color becomes red. If no, the color becomes blue. After the `if/else` block, `forward` and `right` always run — they're at the same indentation level as the `if`, not inside either branch.

## Explanation Table

| Line | What it does |
|------|-------------|
| `for i in range(4):` | Repeats 4 times; `i` is 0, 1, 2, then 3 |
| `if i % 2 == 0:` | True when `i` is even (0, 2); false when `i` is odd (1, 3) |
| `    monty.color('red')` | Runs only when the condition is true (indented 8 spaces — inside the `if`) |
| `else:` | What to do when the condition is false |
| `    monty.color('blue')` | Runs only when the condition is false |
| `monty.forward(distance)` | Always runs — at the same level as `if`, not inside either branch |

!!! mascot-warning "Indentation Is the Key"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    Lines inside the `if` branch need 8 spaces (4 for the loop + 4 for the if).
    Lines inside the `else` branch also need 8 spaces.
    `monty.forward(distance)` needs only 4 (it's in the loop but not in either branch).
    Mix these up and the wrong lines will be inside the wrong blocks!

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Lines"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws a hexagon where every **third** side should be green
    and the other sides should be orange. The condition uses `i % 3 == 0`.
    Add the **two missing color lines** — one inside the `if` and one inside the `else`!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.shape('turtle')

sides = 6
angle = 360 / sides

for i in range(sides):
    if i % 3 == 0:
        # Add monty.color('green') here
        pass
    else:
        # Add monty.color('orange') here
        pass
    monty.forward(80)
    monty.right(angle)
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

Try these changes to the original alternating-color square. Predict first!

1. Swap the colors — put `'blue'` in the `if` branch and `'red'` in the `else` branch.
   **You'll know it worked when** the first side is blue instead of red.

2. Change `monty.color('red')` to `monty.pensize(6)` (remove the `color` line and add `pensize`).
   **You'll know it worked when** alternating sides are thick while the others stay thin.

3. Change `range(4)` to `range(6)` and `angle` to `60` to draw a hexagon.
   **You'll know it worked when** you see a 6-sided shape with alternating colors.

4. Change the condition from `i % 2 == 0` to `i > 1`.
   **You'll know it worked when** the first two sides are one color and the last two are another.

5. Add a third color: use `elif i % 3 == 1:` between the `if` and `else` blocks.
   **You'll know it worked when** sides cycle through three colors.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You can now make decisions inside a loop — that's the combination most real programs are built on!
    Next up: you'll create your own *functions* to organize your drawing code.
    Let's code it together!
