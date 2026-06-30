---
hide:
    - toc
---
# Pinwheel of Triangles

By the end of this lab you'll be able to:

- Draw any regular polygon using a loop and the `360 / sides` angle formula
- Repeat a shape around a center point to build radial symmetry
- Use `begin_fill()` and `end_fill()` to fill shapes with color

Draw 12 equilateral triangles, each one rotated 30° from the last.
Gold and dark-red blades fan out from the center like the spokes of a spinning wheel.

!!! mascot-welcome "Welcome to the Pinwheel of Triangles!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll draw one triangle at a time, rotating 30° between each one.
    Twelve triangles × 30° = a full 360° circle — and one stunning pinwheel!
    Let's code it together!

## How the Pinwheel Works

Every equilateral triangle has three equal angles of 60°.
To draw one with turtle graphics you turn **120°** at each corner (the *exterior* angle — the supplement of 60°).
After three sides the turtle is back exactly where it started, facing the same direction.

Then `monty.right(30)` spins Monty 30° clockwise before the next triangle.
After 12 triangles, 12 × 30° = 360° — a full rotation — so every blade fans out evenly.

!!! mascot-tip "The Magic Formula"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    To spread **n** copies of any shape evenly around a center point, rotate `360 / n` degrees between copies.
    Here n = 12, so `360 / 12 = 30`. Try changing 12 to 6 or 8 and see what happens!

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)

colors = ['gold', 'darkred']
size = 120

for i in range(12):
    monty.color(colors[i % 2])
    monty.begin_fill()
    for j in range(3):
        monty.forward(size)
        monty.left(120)
    monty.end_fill()
    monty.right(30)

monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    There are 2 colors in the list and 12 triangles to draw.
    How many gold triangles will appear in the finished pinwheel?
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

colors = ['gold', 'darkred']
size = 120

for i in range(12):
    monty.color(colors[i % 2])
    monty.begin_fill()
    for j in range(3):
        monty.forward(size)
        monty.left(120)
    monty.end_fill()
    monty.right(30)

monty.hideturtle()`);
</script>

Exactly **6 gold** and 6 dark-red triangles — because `i % 2` alternates 0 and 1 for each of the 12 iterations. Were you right?

## How It Works

The program has two nested loops. The **outer loop** (`for i in range(12)`) repeats 12 times — once per triangle blade. The **inner loop** (`for j in range(3)`) draws the three sides of each triangle.

Inside the outer loop:
- `monty.color(colors[i % 2])` picks gold when `i` is even, dark-red when `i` is odd
- `monty.begin_fill()` / `monty.end_fill()` sandwich the inner loop to fill the triangle solid
- `monty.right(30)` rotates Monty 30° clockwise *after* each complete triangle so the next blade fans outward

The key insight is that after three `forward` + `left(120)` steps, the turtle lands *exactly* back at the center facing the original direction. The rotation happens *between* triangles, not inside them.

## Explanation Table

| Line | What it does |
|------|-------------|
| `colors = ['gold', 'darkred']` | Two-color list to alternate blade colors |
| `size = 120` | Side length of each triangle in pixels |
| `for i in range(12)` | Draw 12 blades — one per loop iteration |
| `colors[i % 2]` | `i % 2` is 0 or 1, cycling the two colors |
| `monty.begin_fill()` | Start recording the shape to fill |
| `for j in range(3)` | Draw 3 sides — one equilateral triangle |
| `monty.left(120)` | Turn at each corner (exterior angle of equilateral triangle) |
| `monty.end_fill()` | Fill the completed triangle with the current color |
| `monty.right(30)` | Rotate 30° (= 360° ÷ 12) before the next blade |

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Rotation"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws 12 triangles but they all stack on top of each other — no pinwheel!
    Add **one line** at the end of the outer loop to spread the blades evenly around the center.

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

colors = ['gold', 'darkred']
size = 120

for i in range(12):
    monty.color(colors[i % 2])
    monty.begin_fill()
    for j in range(3):
        monty.forward(size)
        monty.left(120)
    monty.end_fill()
    # ADD ONE LINE HERE to rotate before the next triangle

monty.hideturtle()`);
</script>

The missing line is `monty.right(30)` — 360° divided by 12 blades = 30° per step.

## Experiments

Try these changes in the **Try It Now** editor above:

1. **Change the number of blades.** Replace `range(12)` with `range(6)` and `monty.right(30)` with `monty.right(60)`. You'll know it worked when you see a 6-bladed pinwheel with wider gaps between blades.

2. **Try three colors.** Change `colors` to `['gold', 'darkred', 'navy']`. With 3 colors and 12 blades, the pattern repeats every 3 blades. You'll know it worked when you see four groups of three differently colored triangles.

3. **Make the blades bigger or smaller.** Change `size = 120` to `size = 80` or `size = 160`. You'll know it worked when the triangles are noticeably shorter or longer.

4. **Turn left instead of right between blades.** Replace `monty.right(30)` with `monty.left(30)`. You'll know it worked when the pinwheel looks identical — can you figure out why?

5. **Draw pentagons instead of triangles.** Change the inner loop to `range(5)` and `monty.left(120)` to `monty.left(72)`. You'll know it worked when each blade is a five-sided polygon instead of a triangle.

!!! mascot-celebration "Excellent Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used the `360 / n` formula, nested loops, and filled shapes to build a spinning pinwheel!
    The same rotation trick works for any shape — try it with squares, pentagons, or hexagons.
    Up next: **Nested Circles** to explore a completely different kind of repetition.
