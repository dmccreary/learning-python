---
hide:
    - toc
---
# Pythagorean Tree

By the end of this lab you'll be able to:

- Draw a fractal based on the Pythagorean theorem using recursive squares
- Color squares by depth — brown at the base, green at the leaves
- Understand how a geometric theorem becomes a visual fractal

A tree of squares: each square spawns two smaller squares on its top edge, arranged as a right triangle. Brown base squares transition to bright green leaf squares across 7 recursive levels.

!!! mascot-welcome "Welcome to the Pythagorean Tree!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Pythagorean theorem says `a² + b² = c²` for a right triangle.
    This fractal makes that theorem *visible* — the two smaller squares literally ARE `a²` and `b²`!
    Let's code it together!

## How It Works

`pytree(x, y, w, angle, depth)` draws a square of width `w` at position `(x, y)` facing `angle`. Then it recursively draws two smaller squares on the top edge — left at angle `+45°`, right at angle `-45°` — each with width `w * cos(45°) ≈ w * 0.707`.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_square(x, y, w, angle, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(angle)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(w)
        monty.left(90)
    monty.end_fill()

def pytree(x, y, w, angle, depth):
    leaf_colors = ['saddlebrown', 'brown', 'peru', 'darkolivegreen',
                   'olivedrab', 'yellowgreen', 'lawngreen', 'lime']
    color = leaf_colors[min(depth, len(leaf_colors) - 1)]
    draw_square(x, y, w, angle, color)
    if depth < 7 and w > 4:
        rad = math.radians(angle + 90)
        top_x = x + w * math.cos(math.radians(angle))
        top_y = y + w * math.sin(math.radians(angle))
        w2 = w * math.cos(math.radians(45))
        pytree(top_x, top_y, w2, angle + 45, depth + 1)
        rx = top_x + w * math.cos(math.radians(angle + 90))
        ry = top_y + w * math.sin(math.radians(angle + 90))
        pytree(rx - w2 * math.cos(math.radians(angle)),
               ry - w2 * math.sin(math.radians(angle)), w2, angle - 45, depth + 1)

pytree(-30, -200, 60, 90, 0)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The squares shrink by `cos(45°) ≈ 0.707` each level. After 7 levels,
    how small will the leaf squares be? (Hint: `60 × 0.707^7 ≈ ?`)
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_square(x, y, w, angle, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(angle)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(w)
        monty.left(90)
    monty.end_fill()

def pytree(x, y, w, angle, depth):
    leaf_colors = ['saddlebrown', 'brown', 'peru', 'darkolivegreen',
                   'olivedrab', 'yellowgreen', 'lawngreen', 'lime']
    color = leaf_colors[min(depth, len(leaf_colors) - 1)]
    draw_square(x, y, w, angle, color)
    if depth < 7 and w > 4:
        top_x = x + w * math.cos(math.radians(angle))
        top_y = y + w * math.sin(math.radians(angle))
        w2 = w * math.cos(math.radians(45))
        pytree(top_x, top_y, w2, angle + 45, depth + 1)
        rx = top_x + w * math.cos(math.radians(angle + 90))
        ry = top_y + w * math.sin(math.radians(angle + 90))
        pytree(rx - w2 * math.cos(math.radians(angle)),
               ry - w2 * math.sin(math.radians(angle)), w2, angle - 45, depth + 1)

pytree(-30, -200, 60, 90, 0)
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

After 7 levels: `60 × 0.707^7 ≈ 3.7` pixels — right at the `w > 4` threshold. Were you right?

## How It Works

Each recursion reduces `w` by `cos(45°) ≈ 0.707`. The key geometric fact: when you build a right isoceles triangle on the top of a square of side `w`, each of the two new squares has side `w × cos(45°)`. And `cos²(45°) + cos²(45°) = 0.5 + 0.5 = 1` — that's the Pythagorean theorem in geometric form!

## Explanation Table

| Line | What it does |
|------|-------------|
| `draw_square(x, y, w, angle, color)` | Draw one filled square in the tree |
| `w2 = w * cos(45°)` | Sub-squares are √2/2 ≈ 70.7% the parent size |
| `depth + 1` | Track depth for color selection and stopping |
| `if depth < 7 and w > 4:` | Two stopping conditions: max depth OR too small |

## Learning Check

!!! mascot-thinking "Your Turn — Use a Non-Equal Right Triangle"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change the two branch angles from `±45°` to `+30°` (left) and `-60°` (right).
    The tree will lean asymmetrically. Predict which way — then run to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_square(x, y, w, angle, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(angle)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for _ in range(4):
        monty.forward(w)
        monty.left(90)
    monty.end_fill()

def pytree(x, y, w, angle, depth):
    leaf_colors = ['saddlebrown', 'brown', 'peru', 'darkolivegreen',
                   'olivedrab', 'yellowgreen', 'lawngreen', 'lime']
    color = leaf_colors[min(depth, len(leaf_colors) - 1)]
    draw_square(x, y, w, angle, color)
    if depth < 7 and w > 4:
        top_x = x + w * math.cos(math.radians(angle))
        top_y = y + w * math.sin(math.radians(angle))
        wL = w * math.cos(math.radians(30))
        wR = w * math.cos(math.radians(60))
        pytree(top_x, top_y, wL, angle + 30, depth + 1)
        rx = top_x + w * math.cos(math.radians(angle + 90))
        ry = top_y + w * math.sin(math.radians(angle + 90))
        pytree(rx - wR * math.cos(math.radians(angle)),
               ry - wR * math.sin(math.radians(angle)), wR, angle - 60, depth + 1)

pytree(-30, -200, 60, 90, 0)
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

With `30°/60°` angles the left branches are longer than the right ones — the tree leans to the left and looks more natural, like a windswept tree.

## Experiments

1. **Symmetric but smaller.** Change both angle offsets to `30°`. You'll know it worked when the tree is taller and narrower.

2. **Remove the fill.** Change `begin_fill()`/`end_fill()` to just drawing the outline (remove those calls). You'll know it worked when you see just the outlines of squares.

3. **More depth.** Change `depth < 7` to `depth < 9`. The leaf squares become very small. You'll know it worked when the tree is much denser at the tips.

4. **Autumn colors.** Change the `leaf_colors` list to `['saddlebrown', 'sienna', 'peru', 'chocolate', 'darkorange', 'orange', 'gold', 'yellow']`. You'll know it worked when the tree has autumn tones.

!!! mascot-celebration "Theorem Visualized!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You turned `a² + b² = c²` into a living, growing tree — geometry made visible!
    Each pair of child squares literally represents the two terms of the Pythagorean theorem.
    Up next: **T-Square Fractal** — corners spawning corners.
