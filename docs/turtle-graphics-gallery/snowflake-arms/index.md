---
hide:
    - toc
---
# Snowflake Arms

By the end of this lab you'll be able to:

- Write an `arm()` function that draws one branch with side twigs
- Use a loop with `left(60)` to repeat the arm six times around a center
- Recognize how six-fold symmetry is built from one repeated unit

Six identical arms radiate from the center, each with two smaller side branches —
a crystalline snowflake that grows from a single reusable function.

!!! mascot-welcome "Welcome to the Snowflake Arms!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Real snowflakes have six-fold symmetry — every arm is identical.
    In this lab you'll draw one arm as a function and call it six times to build the whole crystal!
    Let's code it together!

## How the Snowflake Works

The `arm(length)` function draws one arm: out from center, adds two small side branches,
then returns to center. Calling it 6 times with `left(60)` between each call
(6 × 60° = 360°) assembles the full snowflake.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.color('steelblue')

def arm(length):
    monty.forward(length)
    monty.left(45)
    monty.forward(length / 3)
    monty.backward(length / 3)
    monty.right(90)
    monty.forward(length / 3)
    monty.backward(length / 3)
    monty.left(45)
    monty.backward(length)

for i in range(6):
    arm(120)
    monty.left(60)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    After calling `arm()` and then `left(60)`, six times, how many total degrees has Monty turned?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.color('steelblue')

def arm(length):
    monty.forward(length)
    monty.left(45)
    monty.forward(length / 3)
    monty.backward(length / 3)
    monty.right(90)
    monty.forward(length / 3)
    monty.backward(length / 3)
    monty.left(45)
    monty.backward(length)

for i in range(6):
    arm(120)
    monty.left(60)
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

6 × 60° = **360°** — a full rotation, ending exactly where Monty started. Were you right?

## How It Works

Inside `arm()`, the turtle goes out, adds side branches at ±45°, and comes back:
- `forward(length)` — draw the main arm
- `left(45)` then `forward/backward` — draw the left twig
- `right(90)` then `forward/backward` — draw the right twig
- `left(45)` then `backward(length)` — return to center, facing original direction

The function returns the turtle to its **exact starting state** — same position, same heading.
This is essential for the loop to work: each call to `arm()` leaves Monty ready for the next `left(60)`.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def arm(length)` | One snowflake arm — main branch plus two side twigs |
| `monty.left(45)` | Turn 45° to draw the left twig |
| `monty.right(90)` | Turn 90° (past center) to draw the right twig |
| `monty.left(45)` | Return to original heading |
| `monty.backward(length)` | Return to center of snowflake |
| `monty.left(60)` | Rotate 60° — 6 × 60° = 360° for full snowflake |

## Learning Check

!!! mascot-thinking "Your Turn — Add More Twig Levels"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The `arm()` function below is missing the **right** twig — only the left twig is drawn!
    Add the **two missing lines** inside `arm()` to draw the matching right twig.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.color('steelblue')

def arm(length):
    monty.forward(length)
    monty.left(45)
    monty.forward(length / 3)
    monty.backward(length / 3)
    # ADD TWO LINES: turn to draw the right twig and return to center heading
    monty.left(45)
    monty.backward(length)

for i in range(6):
    arm(120)
    monty.left(60)
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

Add `monty.right(90)` then `monty.forward(length / 3)` then `monty.backward(length / 3)` — mirroring the left twig but turning right instead.

## Experiments

1. **Change the twig angle.** Replace `left(45)` and `right(90)` with `left(30)` and `right(60)`. You'll know it worked when the twigs are narrower, making the snowflake look more spiky.

2. **Make a 4-armed snowflake.** Change `range(6)` to `range(4)` and `left(60)` to `left(90)`. You'll know it worked when the snowflake has four arms at 90° angles like a plus sign.

3. **Color each arm differently.** Move `monty.color(...)` inside the loop, cycling through `['steelblue','white','lightblue']`. You'll know it worked when each arm is a different shade.

4. **Add tiny end twigs.** Inside `arm()`, before `backward(length)`, add smaller side branches at `length / 2` position. You'll know it worked when each arm has two sets of twigs.

!!! mascot-celebration "Beautiful Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a six-fold symmetric snowflake from a single arm function —
    the same principle used in all symmetric design, from logos to mandalas!
    Up next: **Polka Dot Canvas** — scattering hundreds of colorful dots with `random`.
