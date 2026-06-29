---
hide:
    - toc
---
# Rainbow Line Spiral

By the end of this lab you'll be able to:

- Add color cycling to a growing spiral using `i % len(colors)`
- See how the banding interval interacts with the spiral's period
- Understand why the same modulo pattern works for both colors and shapes

The Archimedean square spiral returns — this time each segment is colored by cycling
through six rainbow hues. The color bands march diagonally across the arms of the spiral.

!!! mascot-welcome "Welcome to the Rainbow Line Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll add just two extra lines to the spiral from the previous lab
    and transform a monochrome pattern into a full rainbow. That's the power of `%`!
    Let's code it together!

## How the Rainbow Works

The only additions to the Archimedean spiral are:
1. A `colors` list with six hues
2. `monty.color(colors[i % 6])` inside the loop — one line

Because each revolution of the spiral has 4 segments and the colors cycle every 6 segments,
the color boundaries cut diagonally across the spiral arms rather than aligning with corners.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
step = 2

for i in range(200):
    monty.color(colors[i % 6])
    monty.forward(step)
    monty.right(90)
    step += 1.5
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    There are 6 colors and 200 segments. How many times will the full color sequence repeat?
    (Hint: 200 ÷ 6 = ?) Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
step = 2

for i in range(200):
    monty.color(colors[i % 6])
    monty.forward(step)
    monty.right(90)
    step += 1.5
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

200 ÷ 6 = 33 full cycles with 2 segments left over — so the full rainbow appears **33 times**, each one a little larger than the last. Were you right?

## How It Works

`colors[i % 6]` maps the loop counter `i` to a color index: 0→red, 1→orange, 2→yellow, 3→green, 4→blue, 5→violet, 0→red again. The pattern repeats every 6 steps regardless of how high `i` gets.

Because the spiral has 4-sided symmetry but the color period is 6, the diagonal color stripes cross the square corners at different points on each revolution — creating a visually complex pattern from very simple math.

## Explanation Table

| Line | What it does |
|------|-------------|
| `colors = [...]` | Six rainbow hues |
| `i % 6` | Maps any integer to 0–5 to index the color list |
| `monty.color(colors[i % 6])` | Change color each segment |
| All other lines | Identical to the Archimedean spiral |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Color Period"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    What happens when the color period matches the spiral period?
    Change `i % 6` to `i % 4`. With 4 colors and 4-sided corners, the colors will align with the corners.
    Predict what it will look like — then run it to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['red', 'orange', 'blue', 'green']
step = 2

for i in range(200):
    monty.color(colors[i % 4])
    monty.forward(step)
    monty.right(90)
    step += 1.5
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

With `i % 4` and a 90° square spiral, each color occupies exactly one side per revolution — creating four clean diagonal stripes aligned with the spiral arms.

## Experiments

1. **Try 2 colors.** Change to `['red', 'blue']` and `i % 2`. You'll know it worked when the spiral alternates red and blue segment by segment.

2. **Try 12 colors.** Use the full 12-hue color wheel list from the **Color Wheel Wedges** lab. You'll know it worked when tighter, more varied rainbow bands appear.

3. **Change to a triangular spiral.** Keep the rainbow colors and change `right(90)` to `right(120)`. You'll know it worked when the spiral has triangular corners with diagonal rainbow bands.

4. **Color by revolution.** Replace `i % 6` with `(i // 4) % 6`. Now all four segments of each revolution share the same color. You'll know it worked when solid-color square rings appear.

!!! mascot-celebration "Fantastic Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You discovered that `i % n` and `i // n` give you two different ways to map time to color —
    segment-by-segment vs revolution-by-revolution. Same spiral, completely different look!
    Up next: **Hexagonal Spiral** — changing one angle transforms the whole shape.
