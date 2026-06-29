---
hide:
    - toc
---
# Fibonacci Spiral

By the end of this lab you'll be able to:

- Generate the Fibonacci sequence in code and use its values as arc radii
- Build a spiral from quarter-circle arcs that pivot 90° at each step
- Understand why the Fibonacci sequence appears in seashells, sunflowers, and pine cones

Quarter-circle arcs of radii 1, 1, 2, 3, 5, 8, 13, 21, 34, and 55 tile together perfectly — each arc pivoting 90° into the next. The famous golden-ratio spiral emerges from the simplest number sequence.

!!! mascot-welcome "Welcome to the Fibonacci Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Fibonacci numbers appear everywhere in nature — the spirals in a sunflower head,
    the chambers of a nautilus shell, the arrangement of pine cone scales.
    In this lab you'll build the spiral yourself! Let's code it together!

## How It Works

The Fibonacci sequence starts 1, 1 and each new number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 …

Each step:
1. Draw a quarter-circle arc with the current Fibonacci number as the radius
2. Turn left 90° so the next arc starts from the correct corner
3. Advance to the next Fibonacci number

The arcs all fit together because each radius equals the sum of the previous two — which is exactly how the tiling squares fit.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['red', 'orange', 'gold', 'green', 'teal', 'blue', 'purple', 'violet', 'hotpink', 'crimson']

a, b = 1, 1
scale = 4

for i in range(10):
    monty.color(colors[i])
    monty.circle(a * scale, 90)
    a, b = b, a + b
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The first arc has radius 1 (× 4 scale = 4 pixels). The last has radius 55 (× 4 = 220 pixels).
    Will all 10 arcs fit on the screen, or will the last one go off the edge?
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

colors = ['red', 'orange', 'gold', 'green', 'teal', 'blue', 'purple', 'violet', 'hotpink', 'crimson']

a, b = 1, 1
scale = 4

for i in range(10):
    monty.color(colors[i])
    monty.circle(a * scale, 90)
    a, b = b, a + b
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

With `scale = 4`, the largest arc has radius 220 pixels and **just fits** on a standard turtle canvas. Were you right?

## How It Works

`a, b = b, a + b` is a simultaneous assignment that advances the Fibonacci sequence in one line. After the assignment, the old `b` becomes the new `a`, and the new `b` is the sum.

`monty.circle(a * scale, 90)` draws exactly one quarter-circle (90°). The turtle ends up 90° rotated from where it started — positioned perfectly for the next arc.

## Explanation Table

| Line | What it does |
|------|-------------|
| `a, b = 1, 1` | Start with the first two Fibonacci numbers |
| `monty.circle(a * scale, 90)` | Draw a quarter arc — radius = Fibonacci number × scale |
| `a, b = b, a + b` | Advance: new a = old b, new b = old a + old b |
| `scale = 4` | Multiplier to make the spiral fill the canvas |

!!! mascot-tip "The Golden Ratio"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    As the Fibonacci sequence grows, the ratio of consecutive terms (e.g. 55/34 = 1.617…)
    gets closer and closer to φ ≈ 1.618 — the **golden ratio**. That's why the Fibonacci
    spiral looks so similar to the true golden spiral found in nature!

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws arcs that all have the same radius — no spiral!
    Find the bug and fix it so each arc uses the correct Fibonacci radius.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['red', 'orange', 'gold', 'green', 'teal', 'blue', 'purple', 'violet', 'hotpink', 'crimson']

a, b = 1, 1
scale = 4

for i in range(10):
    monty.color(colors[i])
    monty.circle(scale, 90)
    a, b = b, a + b
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

Change `monty.circle(scale, 90)` to `monty.circle(a * scale, 90)` — the radius must be `a * scale` so each arc uses the current Fibonacci number.

## Experiments

1. **Draw more arcs.** Change `range(10)` to `range(12)` and extend the `colors` list. You'll know it worked when two extra arcs appear (but they may go off the edge!).

2. **Change the scale.** Try `scale = 2` or `scale = 6`. You'll know it worked when the spiral shrinks or grows to fit the canvas differently.

3. **Draw only the arcs, no color.** Replace `monty.color(colors[i])` with `monty.pencolor('black')`. You'll know it worked when the spiral is a clean black curve.

4. **Use semicircles.** Change `90` to `180` in `circle()`. Each Fibonacci segment becomes a half-circle. You'll know it worked when the curve looks very different.

!!! mascot-celebration "You Found the Golden Spiral!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    The Fibonacci sequence is one of the most famous patterns in mathematics and nature.
    Now you know it's just: `a, b = b, a + b` — repeated over and over!
    Up next: **Spiral of Spirals** — arranging many small spirals in a circle.
