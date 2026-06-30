---
hide:
    - toc
---
# Starburst

By the end of this lab you'll be able to:

- Draw lines radiating outward from a single center point
- Cycle through a color list using the modulo operator
- Calculate how many lines are needed to fill a full 360° rotation

Thirty-six lines burst outward from the center, shifting in color from yellow to orange
to red — like sunbeams caught mid-explosion.

!!! mascot-welcome "Welcome to the Starburst!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll draw a line, back up to center, turn, and repeat — 36 times.
    The trick is that `forward` and `backward` together act like a two-way spoke.
    Let's code it together!

## How the Burst Works

The turtle starts at the center. Each iteration:
1. Draws a line of length 150 outward (`forward`)
2. Returns to the center (`backward` the same distance)
3. Turns 10° clockwise (`right(10)`) before the next spoke

After 36 spokes: 36 × 10° = 360° — exactly one full rotation, filling the circle completely.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['yellow', 'orange', 'red']
length = 150

for i in range(36):
    monty.color(colors[i % 3])
    monty.forward(length)
    monty.backward(length)
    monty.right(10)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    There are 3 colors and 36 spokes. How many **red** spokes will appear in the finished starburst?
    Make your guess — then click Run to find out!

## Try It Now

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
monty.speed(0)
monty.hideturtle()

colors = ['yellow', 'orange', 'red']
length = 150

for i in range(36):
    monty.color(colors[i % 3])
    monty.forward(length)
    monty.backward(length)
    monty.right(10)`);
</script>

36 ÷ 3 = **12 red spokes** (and 12 yellow, 12 orange). Were you right?

## How It Works

`forward(length)` moves Monty out from the center along the current heading.
`backward(length)` brings Monty back to exactly the same starting point.
`right(10)` rotates the heading 10° clockwise so the next spoke points in a new direction.

The color cycles because `i % 3` produces 0, 1, 2, 0, 1, 2, … regardless of how large `i` grows.

## Explanation Table

| Line | What it does |
|------|-------------|
| `colors = ['yellow', 'orange', 'red']` | Three-color gradient from warm to hot |
| `length = 150` | Length of each spoke in pixels |
| `monty.color(colors[i % 3])` | Cycles through the three colors evenly |
| `monty.forward(length)` | Draws the spoke outward |
| `monty.backward(length)` | Returns to center — no `penup()` needed |
| `monty.right(10)` | 10° turn × 36 iterations = 360° full circle |

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below draws spokes but they don't fill the full circle — there's a gap!
    Find and fix the one wrong number so all 36 spokes spread evenly around 360°.

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
monty.speed(0)
monty.hideturtle()

colors = ['yellow', 'orange', 'red']
length = 150

for i in range(36):
    monty.color(colors[i % 3])
    monty.forward(length)
    monty.backward(length)
    monty.right(5)`);
</script>

`right(5)` × 36 = only 180° — half a circle. Change it to `right(10)` for a full 360°.

## Experiments

1. **Change spoke count.** Replace `range(36)` with `range(72)` and `right(10)` with `right(5)`. You'll know it worked when twice as many thinner spokes fill the circle.

2. **Use more colors.** Change `colors` to `['yellow', 'gold', 'orange', 'darkorange', 'red', 'darkred']` and `i % 3` to `i % 6`. You'll know it worked when the gradient has six distinct color bands.

3. **Make spokes different lengths.** Replace `length = 150` with `length = 50 + i * 3`. Early spokes are short; later ones are long. You'll know it worked when the starburst looks like a teardrop.

4. **Draw only every other spoke.** Add `if i % 2 == 0:` before the `forward` line (and indent the next two lines). You'll know it worked when only 18 spokes appear with gaps between them.

!!! mascot-celebration "Brilliant Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used forward + backward to draw spokes, modulo for color cycling, and math
    to prove that 36 × 10° = 360°. That's geometry AND Python in one program!
    Up next: **Checkerboard Grid** to explore nested loops and coordinate arithmetic.
