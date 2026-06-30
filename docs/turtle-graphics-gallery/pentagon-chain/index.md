---
hide:
    - toc
---
# Pentagon Chain

By the end of this lab you'll be able to:

- Compute the exterior angle of any regular polygon with `360 / sides`
- Position shapes in a horizontal row by advancing the turtle between them
- Use `begin_fill()` and `end_fill()` with two alternating colors

Ten pentagons march in a row, alternating purple and gold —
a bracelet of five-sided tiles stretching across the canvas.

!!! mascot-welcome "Welcome to the Pentagon Chain!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll learn the one formula that draws any regular polygon,
    then chain 10 of them in a row. Let's code it together!

## How the Chain Works

A **regular polygon** with `n` sides needs an exterior angle of `360 / n` degrees at each corner.
For a pentagon (5 sides): `360 / 5 = 72°`.

After drawing each pentagon, the turtle is back at the starting corner.
Moving forward by `size` steps places the turtle at the next pentagon's starting corner.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['purple', 'gold']
sides = 5
size = 60
angle = 360 / sides

monty.penup()
monty.goto(-270, 0)
monty.pendown()

for i in range(10):
    monty.color(colors[i % 2])
    monty.begin_fill()
    for _ in range(sides):
        monty.forward(size)
        monty.right(angle)
    monty.end_fill()
    monty.forward(size)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The exterior angle of a pentagon is 72°. After drawing all 5 sides, how many total degrees
    has Monty turned? (Hint: 5 × 72° = ?)
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

colors = ['purple', 'gold']
sides = 5
size = 60
angle = 360 / sides

monty.penup()
monty.goto(-270, 0)
monty.pendown()

for i in range(10):
    monty.color(colors[i % 2])
    monty.begin_fill()
    for _ in range(sides):
        monty.forward(size)
        monty.right(angle)
    monty.end_fill()
    monty.forward(size)`);
</script>

5 × 72° = **360°** — a complete rotation. That's why the turtle always ends up facing the same direction after any regular polygon. Were you right?

## How It Works

The inner loop `for _ in range(sides)` draws one pentagon. After each side, `right(angle)` rotates by the exterior angle. After all 5 sides, the turtle is back at the start facing the original direction.

`monty.forward(size)` after `end_fill()` advances the turtle by exactly one side length, placing it at the first corner of the next pentagon — so the chain connects corner-to-corner.

## Explanation Table

| Line | What it does |
|------|-------------|
| `angle = 360 / sides` | Exterior angle formula — works for any regular polygon |
| `monty.goto(-270, 0)` | Start near the left edge |
| `for _ in range(sides)` | Draw one side + one turn, repeated `sides` times |
| `monty.end_fill()` | Fill the completed pentagon |
| `monty.forward(size)` | Advance to the next pentagon's starting corner |

## Learning Check

!!! mascot-thinking "Your Turn — Make a Hexagon Chain"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change the code below to draw a chain of **hexagons** (6 sides) instead of pentagons.
    You'll need to update `sides` and you may want to reduce `size` slightly to fit 8 hexagons.

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

colors = ['purple', 'gold']
sides = 5
size = 60
angle = 360 / sides

monty.penup()
monty.goto(-270, 0)
monty.pendown()

for i in range(10):
    monty.color(colors[i % 2])
    monty.begin_fill()
    for _ in range(sides):
        monty.forward(size)
        monty.right(angle)
    monty.end_fill()
    monty.forward(size)`);
</script>

Change `sides = 5` to `sides = 6`. The angle updates automatically to `360 / 6 = 60°`.

## Experiments

1. **Try squares.** Change `sides = 4` and `size = 50`. Eight squares will chain across the canvas. You'll know it worked when you see a row of colored squares.

2. **Use three colors.** Change `colors` to `['purple', 'gold', 'crimson']` and `i % 2` to `i % 3`. You'll know it worked when three colors cycle across the chain.

3. **Make a vertical chain.** After `monty.goto(-270, 0)`, add `monty.setheading(90)`. The chain will march upward. You'll know it worked when the pentagons stack vertically.

4. **Change the number of pentagons.** Replace `range(10)` with `range(6)`. Adjust the starting x position so the shorter chain is still centered. You'll know it worked when 6 pentagons appear centered on the canvas.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You mastered the exterior angle formula `360 / sides` — the key to drawing
    any regular polygon in Python. Change one number, change the whole shape!
    Up next: **Overlapping Squares** to explore draw order and transparency effects.
