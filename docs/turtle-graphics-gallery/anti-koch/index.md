---
hide:
    - toc
---
# Anti-Koch Snowflake

By the end of this lab you'll be able to:

- Modify the Koch rule to bump inward instead of outward on alternate levels
- See how one sign change in a fractal rule produces dramatically different shapes
- Understand the concept of rule alternation in recursive systems

While the Koch snowflake always bumps outward, the Anti-Koch alternates: even depths bump out, odd depths bump in. The result is a shape with both spiky tips and concave notches.

!!! mascot-welcome "Welcome to the Anti-Koch Snowflake!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    You've seen the Koch curve bump outward at every level. What if we flipped the
    direction on every other level? One sign change gives a completely different fractal!
    Let's code it together!

## How It Works

`antikoch(n, depth, direction)`:
- `direction = 1` → bump **outward** (left 60°, left 60°, left 60°, then right 120° between)
- `direction = -1` → bump **inward** (the angles are negated)

On each recursive call, `direction` flips: `direction * -1`.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('mediumvioletred')

def antikoch(n, depth, direction):
    if depth == 0:
        monty.forward(n)
        return
    n3 = n / 3
    antikoch(n3, depth - 1, -direction)
    monty.left(60 * direction)
    antikoch(n3, depth - 1, -direction)
    monty.right(120 * direction)
    antikoch(n3, depth - 1, -direction)
    monty.left(60 * direction)
    antikoch(n3, depth - 1, -direction)

monty.penup()
monty.goto(-150, 90)
monty.pendown()

for _ in range(3):
    antikoch(300, 4, 1)
    monty.right(120)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The standard Koch always bumps outward, giving a purely spiky shape.
    The Anti-Koch alternates directions. Will it look more rounded, or more jagged?
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
monty.pencolor('mediumvioletred')

def antikoch(n, depth, direction):
    if depth == 0:
        monty.forward(n)
        return
    n3 = n / 3
    antikoch(n3, depth - 1, -direction)
    monty.left(60 * direction)
    antikoch(n3, depth - 1, -direction)
    monty.right(120 * direction)
    antikoch(n3, depth - 1, -direction)
    monty.left(60 * direction)
    antikoch(n3, depth - 1, -direction)

monty.penup()
monty.goto(-150, 90)
monty.pendown()

for _ in range(3):
    antikoch(300, 4, 1)
    monty.right(120)`);
</script>

The alternating bumps create a shape with both inward notches AND outward spikes — **more complex** than the pure Koch because both directions appear. Were you right?

## How It Works

`60 * direction` makes the turn angle positive (left) when `direction = 1` and negative (right = inward) when `direction = -1`. Passing `-direction` to each recursive call flips the direction at every level, so even-depth segments bump one way and odd-depth segments bump the other.

## Explanation Table

| Line | What it does |
|------|-------------|
| `direction` parameter | 1 = bump outward, -1 = bump inward |
| `monty.left(60 * direction)` | Positive direction = left; negative = right |
| `antikoch(n3, depth-1, -direction)` | Flip direction at each recursive level |
| Same structure as Koch | The bump shape is identical — just mirrored |

## Learning Check

!!! mascot-thinking "Your Turn — Always Bump Inward"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    What if you never flipped — always passed `-1` as direction?
    Change `antikoch(300, 4, 1)` to `antikoch(300, 4, -1)` and the initial direction to always inward.
    Predict how it differs from the standard Koch — then run it!

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
monty.pencolor('mediumvioletred')

def antikoch(n, depth, direction):
    if depth == 0:
        monty.forward(n)
        return
    n3 = n / 3
    antikoch(n3, depth - 1, direction)
    monty.left(60 * direction)
    antikoch(n3, depth - 1, direction)
    monty.right(120 * direction)
    antikoch(n3, depth - 1, direction)
    monty.left(60 * direction)
    antikoch(n3, depth - 1, direction)

monty.penup()
monty.goto(-150, 90)
monty.pendown()

for _ in range(3):
    antikoch(300, 4, -1)
    monty.right(120)`);
</script>

Always-inward bumps (`direction = -1` throughout) creates a Koch snowflake that grows **inward** — the bumps notch into the triangle instead of radiating outward.

## Experiments

1. **Compare side by side.** Run the standard Koch first (left(60), right(120), left(60)) then the Anti-Koch. You'll know it worked when you can see both shapes.

2. **Depth 2 comparison.** Try both with `depth=2` to see the bumps clearly. You'll know it worked when individual bumps and notches are visible.

3. **Change the color.** Try `pencolor('darkcyan')`. You'll know it worked when the curve turns teal.

4. **Fill the snowflake.** Add `begin_fill()` before the loop and `end_fill()` after. You'll know it worked when the interior is filled.

!!! mascot-celebration "Category 4 Complete!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've completed 15 fractal patterns — Koch, Sierpiński, Dragon, Hilbert, Barnsley, and more!
    Fractals show that infinite complexity emerges from simple recursive rules.
    Up next: **Category 5 — Symmetry and Tiling!**
