---
hide:
    - toc
---
# Color-Banded Pentagon Spiral

By the end of this lab you'll be able to:

- Create a pentagon spiral using `right(72)` — the exterior angle of a regular pentagon
- Produce diagonal color bands by choosing a banding interval that doesn't divide evenly into the pentagon period
- Predict how the period of banding interacts with the polygon period to create visual patterns

A pentagon spiral with five-sided corners — colored in bands of five hues that cut diagonally across the arms because 5 colors × 5-sided spiral = aligned bands, while non-multiple intervals create diagonal stripes.

!!! mascot-welcome "Welcome to the Pentagon Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This lab is the last in our spiral series — and it brings together everything:
    polygon angles, color banding with `i // n`, and the interaction between two periods.
    Let's code it together!

## How It Works

A regular pentagon has **5 sides** with exterior angles of 360° ÷ 5 = **72°**. Turning 72° each step creates a pentagon spiral.

For color bands, `(i // 5) % 5` changes color every 5 steps — matching the pentagon period exactly. This makes each band align with one full spiral side. Try `(i // 7) % 5` instead and the bands shift diagonally!

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['crimson', 'darkorange', 'gold', 'mediumseagreen', 'royalblue']
step = 2

for i in range(250):
    monty.color(colors[(i // 5) % 5])
    monty.forward(step)
    monty.right(72)
    step += 1.2
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The color changes every 5 steps and the pentagon has 5 sides per revolution.
    Will the color bands align with the spiral arms, or cut diagonally across them?
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

colors = ['crimson', 'darkorange', 'gold', 'mediumseagreen', 'royalblue']
step = 2

for i in range(250):
    monty.color(colors[(i // 5) % 5])
    monty.forward(step)
    monty.right(72)
    step += 1.2
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

The bands **align** with the arms — each arm is a single color because the band period (5) matches the polygon period (5). Were you right?

## How It Works

When the color band interval evenly divides the polygon period, colors align with sides. When they don't match — for example, using 7 steps per color band on a 5-sided spiral — the bands appear to cut diagonally across the arms, creating the visual effect of diagonal stripes.

## Explanation Table

| Line | What it does |
|------|-------------|
| `right(72)` | Pentagon exterior angle: 360° ÷ 5 = 72° |
| `(i // 5) % 5` | Change color every 5 segments; cycle through 5 colors |
| `step += 1.2` | Grow step — source of the spiral |
| `range(250)` | 250 steps = 50 "pentagon" revolutions (5 sides each) |

## Learning Check

!!! mascot-thinking "Your Turn — Create Diagonal Bands"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `i // 5` to `i // 7`. Now the color period (7) doesn't divide evenly into the
    pentagon period (5). Predict how the bands will change — then run it to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['crimson', 'darkorange', 'gold', 'mediumseagreen', 'royalblue']
step = 2

for i in range(250):
    monty.color(colors[(i // 7) % 5])
    monty.forward(step)
    monty.right(72)
    step += 1.2
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

With `i // 7`, the color boundaries no longer align with the pentagon corners — they cut across the arms at a diagonal, producing a striped weave effect across the spiral.

## Experiments

1. **Try `i // 3`.** Three steps per band is shorter than one pentagon side (5 steps). You'll know it worked when colors change within each arm, creating a finer striped pattern.

2. **Use 3 colors instead of 5.** Change the list to `['crimson', 'gold', 'royalblue']` and `% 5` to `% 3`. You'll know it worked when only three colors appear, cycling in a non-aligned pattern.

3. **Make it hexagonal.** Change `right(72)` to `right(60)` and `range(250)` to `range(300)`. You'll know it worked when corners become less sharp.

4. **Increase band width.** Change `i // 5` to `i // 15`. Each color occupies 3 full pentagon sides. You'll know it worked when the color bands are much wider.

!!! mascot-celebration "Category Complete!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered all 10 spiral patterns — from simple square to logarithmic to double helix!
    Each spiral used the same core idea but with subtle variations that transformed the result.
    Up next: **Category 4 — Fractals and Recursion!**
