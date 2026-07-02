---
hide:
    - toc
---
# Leaf Venation

By the end of this lab you'll be able to:

- Draw smooth curved outlines from many small `goto()` steps
- Curve a line gradually using small `forward()` + `left()` steps
- Use nested loops to build three levels of veins: central, secondary, tertiary

Hold a leaf up to the light and you'll see a beautiful branching network: one thick central vein, secondary veins peeling off at regular intervals, and tiny tertiary veins branching off those. This lab draws that whole three-level structure — a real piece of plant anatomy — in about 60 lines of Python.

!!! mascot-welcome "Welcome to Leaf Venation!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Veins are a leaf's plumbing — they carry water out and food back.
    Today you'll build a leaf layer by layer: outline first, then the
    central vein, then veins branching off veins. Botany meets loops!

## How It Works

The outline is two mirrored arcs: for each side, a loop computes points with `x = side * half * sin(pi * t)` as `t` goes from base to tip, which bulges out in the middle and comes to a point at both ends. Then a thick central vein runs straight up the middle. A nested loop adds the detail: the outer loop walks 9 positions up the central vein, and for each side it draws a secondary vein using many small `forward(4)` + `left(1.5)` steps so the vein curves gently toward the tip — and every 4th step it pauses to draw a tiny tertiary vein before continuing.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

base_y = -170
tip_y = 170
half = 105

monty.pensize(3)
monty.pencolor('darkgreen')
monty.fillcolor('palegreen')
monty.penup()
monty.goto(0, base_y)
monty.pendown()
monty.begin_fill()
steps = 50
for side in [1, -1]:
    for i in range(steps + 1):
        if side == 1:
            t = i * 1.0 / steps
        else:
            t = 1.0 - i * 1.0 / steps
        x = side * half * math.sin(math.pi * t)
        y = base_y + (tip_y - base_y) * t
        monty.goto(x, y)
monty.end_fill()

monty.penup()
monty.goto(0, base_y)
monty.setheading(90)
monty.pendown()
monty.pensize(5)
monty.pencolor('darkgreen')
monty.goto(0, tip_y)

for i in range(1, 10):
    t = i / 10.0
    y = base_y + (tip_y - base_y) * t
    reach = half * math.sin(math.pi * t) * 0.85
    for side in [1, -1]:
        monty.penup()
        monty.goto(0, y)
        monty.setheading(90 - side * 60)
        monty.pendown()
        monty.pensize(2)
        monty.pencolor('forestgreen')
        n = int(reach / 4)
        for step in range(n):
            monty.forward(4)
            monty.left(side * 1.5)
            if step > 0 and step % 4 == 0:
                px = monty.xcor()
                py = monty.ycor()
                ph = monty.heading()
                monty.pensize(1)
                monty.pencolor('seagreen')
                monty.setheading(ph - side * 45)
                monty.forward(7)
                monty.penup()
                monty.goto(px, py)
                monty.setheading(ph)
                monty.pendown()
                monty.pensize(2)
                monty.pencolor('forestgreen')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The secondary-vein loop is `for i in range(1, 10)`, and at each
    position it draws one vein on the **right** and one on the **left**.
    How many secondary veins will the finished leaf have in total?
    Count it out, then click Run!

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
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

base_y = -170
tip_y = 170
half = 105

monty.pensize(3)
monty.pencolor('darkgreen')
monty.fillcolor('palegreen')
monty.penup()
monty.goto(0, base_y)
monty.pendown()
monty.begin_fill()
steps = 50
for side in [1, -1]:
    for i in range(steps + 1):
        if side == 1:
            t = i * 1.0 / steps
        else:
            t = 1.0 - i * 1.0 / steps
        x = side * half * math.sin(math.pi * t)
        y = base_y + (tip_y - base_y) * t
        monty.goto(x, y)
monty.end_fill()

monty.penup()
monty.goto(0, base_y)
monty.setheading(90)
monty.pendown()
monty.pensize(5)
monty.pencolor('darkgreen')
monty.goto(0, tip_y)

for i in range(1, 10):
    t = i / 10.0
    y = base_y + (tip_y - base_y) * t
    reach = half * math.sin(math.pi * t) * 0.85
    for side in [1, -1]:
        monty.penup()
        monty.goto(0, y)
        monty.setheading(90 - side * 60)
        monty.pendown()
        monty.pensize(2)
        monty.pencolor('forestgreen')
        n = int(reach / 4)
        for step in range(n):
            monty.forward(4)
            monty.left(side * 1.5)
            if step > 0 and step % 4 == 0:
                px = monty.xcor()
                py = monty.ycor()
                ph = monty.heading()
                monty.pensize(1)
                monty.pencolor('seagreen')
                monty.setheading(ph - side * 45)
                monty.forward(7)
                monty.penup()
                monty.goto(px, py)
                monty.setheading(ph)
                monty.pendown()
                monty.pensize(2)
                monty.pencolor('forestgreen')`);
</script>

**18 veins** — 9 positions times 2 sides. Were you right?

## How It Works

Look closely at how the veins get their length: `reach = half * math.sin(math.pi * t) * 0.85` is the *same* sine formula used for the outline, scaled down. That guarantees each vein fits inside the leaf — long veins in the fat middle, short ones near the tip and base. The curve comes from turning just 1.5° after every 4-pixel step: 20 small turns add up to a smooth bend toward the tip, exactly how real secondary veins sweep upward. The tertiary veins use a save-and-restore trick — remember position and heading, dart off at 45°, then `goto` back and keep going.

## Explanation Table

| Line | What it does |
|------|-------------|
| `x = side * half * math.sin(math.pi * t)` | The outline arc: zero width at base and tip, widest in the middle |
| `monty.forward(4)` + `monty.left(side * 1.5)` | Many tiny steps and turns make a smooth curved vein |
| `reach = half * math.sin(math.pi * t) * 0.85` | Veins are longer in the middle of the leaf, shorter near the ends |
| `if step > 0 and step % 4 == 0:` | Every 4th step, pause and sprout a tiny tertiary vein |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    This simplified leaf compiles and runs — but all 18 secondary veins
    grow on the **right side only**! One line forgot to use the `side`
    variable. Find it, fix it, and make the left side green again.

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
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

base_y = -170
tip_y = 170
half = 105

monty.pensize(3)
monty.pencolor('darkgreen')
monty.fillcolor('palegreen')
monty.penup()
monty.goto(0, base_y)
monty.pendown()
monty.begin_fill()
steps = 50
for side in [1, -1]:
    for i in range(steps + 1):
        if side == 1:
            t = i * 1.0 / steps
        else:
            t = 1.0 - i * 1.0 / steps
        x = side * half * math.sin(math.pi * t)
        y = base_y + (tip_y - base_y) * t
        monty.goto(x, y)
monty.end_fill()

monty.penup()
monty.goto(0, base_y)
monty.pendown()
monty.pensize(5)
monty.goto(0, tip_y)

for i in range(1, 10):
    t = i / 10.0
    y = base_y + (tip_y - base_y) * t
    reach = half * math.sin(math.pi * t) * 0.85
    for side in [1, -1]:
        monty.penup()
        monty.goto(0, y)
        monty.setheading(90 - 60)
        monty.pendown()
        monty.pensize(2)
        monty.pencolor('forestgreen')
        n = int(reach / 4)
        for step in range(n):
            monty.forward(4)
            monty.left(side * 1.5)`);
</script>

The bug is `monty.setheading(90 - 60)` — it should be `monty.setheading(90 - side * 60)`. Without `side`, both "sides" start out pointing up-and-right, so the left half of the leaf stays empty.

## Experiments

1. **Grow a willow leaf.** Change `half = 105` to `half = 55`. You'll know it worked when the leaf becomes long and narrow with short veins.

2. **Add more veins.** Change `range(1, 10)` to `range(1, 14)` and `t = i / 10.0` to `t = i / 14.0`. You'll know it worked when the leaf has 26 secondary veins packed closer together.

3. **Curve harder.** Change `monty.left(side * 1.5)` to `monty.left(side * 3)`. You'll know it worked when the veins sweep upward in strong arcs like a tropical leaf.

4. **Autumn colors.** Change `'palegreen'` to `'gold'` and `'forestgreen'` to `'chocolate'`. You'll know it worked when your leaf looks ready to fall in October.

!!! mascot-celebration "A Botanist's Eye!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Outline, central vein, secondary, tertiary — you built a leaf the way
    a plant does, one level of structure at a time, with nested loops.
    Up next: **DNA Double Helix** — two sine waves and a 180° phase shift
    build the molecule of life.
