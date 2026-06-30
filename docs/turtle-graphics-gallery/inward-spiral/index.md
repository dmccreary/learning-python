---
hide:
    - toc
---
# Inward Collapsing Spiral

By the end of this lab you'll be able to:

- Create a spiral that converges to a point by decreasing the step length each iteration
- Color segments from bright blue at the outside to white at the center using a fade list
- Understand the difference between increasing sequences (outward) and decreasing sequences (inward)

Instead of growing outward, this spiral collapses inward — starting wide and converging to a near-invisible point at the center. Segments fade from deep blue on the outside to near-white as the spiral tightens to a point.

!!! mascot-welcome "Welcome to the Inward Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    All the spirals so far grew outward. Now we run the same idea in reverse —
    start big and shrink toward zero. Let's code it together!

## How It Works

The step starts large (at `200`) and decreases by a small amount each iteration. When `step` reaches 0 the path has converged to a point. A color list fades from dark blue through lighter shades to near-white, so the outer segments look bolder and the inner ones fade away.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['midnightblue', 'navy', 'blue', 'royalblue',
          'cornflowerblue', 'lightskyblue', 'lightcyan', 'white']
step = 200

i = 0
while step > 1:
    monty.color(colors[min(i // 25, len(colors) - 1)])
    monty.forward(step)
    monty.right(91)
    step -= 1
    i += 1
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The step starts at 200 and decreases by 1 each iteration. The loop uses `right(91)` —
    slightly more than 90°. Will the spiral wind clockwise or counterclockwise?
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

colors = ['midnightblue', 'navy', 'blue', 'royalblue',
          'cornflowerblue', 'lightskyblue', 'lightcyan', 'white']
step = 200

i = 0
while step > 1:
    monty.color(colors[min(i // 25, len(colors) - 1)])
    monty.forward(step)
    monty.right(91)
    step -= 1
    i += 1`);
</script>

The spiral winds **clockwise** because `right()` turns clockwise. The 91° angle — just 1° past a right angle — makes the path drift slightly so the loops don't overlap exactly. Were you right?

## How It Works

`while step > 1` runs until the step becomes too small to matter. Each iteration `step -= 1` shrinks the path segment — opposite of `step += n` in the outward spirals.

`min(i // 25, len(colors) - 1)` maps iteration index to a color but clamps it so we never go past the last color in the list, even if the loop runs longer than expected.

## Explanation Table

| Line | What it does |
|------|-------------|
| `step = 200` | Start with a long segment |
| `while step > 1` | Keep going until segments are tiny |
| `step -= 1` | Shrink by 1 pixel each step — creates the inward spiral |
| `right(91)` | Slightly more than 90° — prevents loops from sitting exactly on top of each other |
| `min(i // 25, len(colors) - 1)` | Advance color every 25 steps, clamped at the list end |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Convergence Rate"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The spiral currently decreases by 1 per step. Change `step -= 1` to `step -= 2`.
    Predict how the spiral will change — then run it to see if you were right!

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

colors = ['midnightblue', 'navy', 'blue', 'royalblue',
          'cornflowerblue', 'lightskyblue', 'lightcyan', 'white']
step = 200

i = 0
while step > 1:
    monty.color(colors[min(i // 25, len(colors) - 1)])
    monty.forward(step)
    monty.right(91)
    step -= 2
    i += 1`);
</script>

With `step -= 2` the spiral converges twice as fast — it reaches the center in half the steps, so there are fewer revolutions and the loops are spaced further apart.

## Experiments

1. **Try `right(89)`.** One degree less than 90° winds the spiral in the opposite rotational direction. You'll know it worked when the loops tilt the other way.

2. **Start even larger.** Change `step = 200` to `step = 300`. More revolutions fit before convergence. You'll know it worked when the spiral takes up more of the canvas.

3. **Use warm colors.** Replace the blues with `['darkred', 'red', 'orangered', 'orange', 'gold', 'yellow', 'lightyellow', 'white']`. You'll know it worked when the spiral shifts from deep red to pale yellow.

4. **Make it hexagonal.** Change `right(91)` to `right(61)`. You'll know it worked when the corners look more rounded.

!!! mascot-celebration "Brilliant!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You saw the same spiral rule work in both directions — outward AND inward —
    just by switching `+=` to `-=`. Convergence is just divergence in reverse!
    Up next: **Colored Logarithmic Spiral** — using trigonometry to draw a truly curved spiral.
