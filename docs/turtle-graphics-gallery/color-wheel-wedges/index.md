---
hide:
    - toc
---
# Color Wheel Wedges

By the end of this lab you'll be able to:

- Divide 360° into equal wedge angles using `360 / n`
- Draw filled pie-slice shapes using `begin_fill()` with forward and turn commands
- Understand how the 12 hues of the color wheel relate to each other

Twelve filled wedges radiate from the center, each one a different hue —
red, orange, yellow, green, blue, violet, and all the steps between.

!!! mascot-welcome "Welcome to the Color Wheel!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll discover how to draw filled pie slices and how all 12 pure hues
    fit perfectly around a circle. Let's code it together!

## How the Wedges Work

Each wedge is a triangle: two long sides from the center and a short arc closing the tip.
We approximate the arc by drawing several small forward steps while turning slightly.

The 12 hues used are the standard color wheel: `red`, `orange`, `yellow`, `chartreuse`,
`green`, `springgreen`, `cyan`, `deepskyblue`, `blue`, `purple`, `magenta`, `deeppink`.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

hues = ['red','orange','yellow','chartreuse','green','springgreen',
        'cyan','deepskyblue','blue','purple','magenta','deeppink']
radius = 180
wedge = 360 / 12

for hue in hues:
    monty.color(hue)
    monty.begin_fill()
    monty.forward(radius)
    monty.left(90)
    for _ in range(6):
        monty.forward(radius * 0.1)
        monty.left(5)
    monty.left(90)
    monty.forward(radius)
    monty.left(180 - wedge)
    monty.end_fill()
    # rotate counterclockwise 30 degrees to the next wedge
    monty.left(30)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each wedge spans `360 / 12 = 30°`. How many wedges will fit in a full circle?
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

hues = ['red','orange','yellow','chartreuse','green','springgreen',
        'cyan','deepskyblue','blue','purple','magenta','deeppink']
radius = 180
wedge = 360 / 12

for hue in hues:
    monty.color(hue)
    monty.begin_fill()
    monty.forward(radius)
    monty.left(90)
    for _ in range(6):
        monty.forward(radius * 0.1)
        monty.left(5)
    monty.left(90)
    monty.forward(radius)
    monty.left(180 - wedge)
    monty.end_fill()
    # rotate counterclockwise 30 degrees to the next wedge
    monty.left(30)
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

Exactly **12 wedges** — one per hue, each 30°, summing to 360°. Were you right?

## How It Works

Each wedge is drawn as a filled, triangle-like slice: go out along one edge, trace the small arc that rounds the rim, then come back along the other edge to the center.

Two turns at the end do the important work. `monty.left(180 - wedge)` undoes the turning Monty built up while drawing the slice, pointing him back along the direction he started this wedge in. Then `monty.left(30)` — the line that makes the wheel actually spread out — rotates him one wedge angle so the next slice is drawn 30° further around. Twelve slices × 30° = 360°, one full circle.

## Explanation Table

| Line | What it does |
|------|-------------|
| `hues = [...]` | List of 12 standard color wheel hues |
| `wedge = 360 / 12` | Each slice spans 30° |
| `monty.forward(radius)` | Draw the first edge of the wedge outward |
| `for _ in range(6)` | Approximate the rim arc with 6 short forward+turn steps |
| `monty.forward(radius)` | Draw the second edge back to center |
| `monty.left(180 - wedge)` | Undo the slice's turning, back to its starting direction |
| `monty.left(30)` | Rotate one wedge (30°) to the next slice |

## A Shorter Way: Using `circle()`

Drawing the rim with six tiny `forward`/`left` steps showed us *how* an arc is
built. But Python turtles also have a built-in `circle()` command that draws an
arc for us: `monty.circle(radius, wedge)` curves through `wedge` degrees along a
circle of the given radius. That single line replaces the whole inner loop —
**everything else stays exactly the same**, including the two turns that rotate
Monty to the next slice.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This program is shorter, but it does the same job. Will it draw the **same**
    12-color wheel, a smaller one, or a completely different shape?
    Predict, then click Run.

<div id="skulpt-lab-3">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

hues = ['red','orange','yellow','chartreuse','green','springgreen',
        'cyan','deepskyblue','blue','purple','magenta','deeppink']
radius = 180
wedge = 360 / 12

for hue in hues:
    monty.color(hue)
    monty.begin_fill()
    monty.forward(radius)
    monty.left(90)
    monty.circle(radius, wedge)
    monty.left(90)
    monty.forward(radius)
    monty.left(180 - wedge)
    monty.end_fill()
    # rotate counterclockwise 30 degrees to the next wedge
    monty.left(30)
</textarea>
    <div id="button-row-3">
      <button id="run-btn-3" onclick="runSkulpt('-3')">&#9654; Run</button>
      <button id="reset-btn-3" onclick="resetSkulpt('-3')">&#8635; Reset</button>
    </div>
    <pre id="output-3"></pre>
  </div>
  <div id="canvas-container-3">
    <div id="turtle-target-3"></div>
  </div>
</div>

Same wheel, fewer lines! Because `circle()` lands Monty exactly on the rim, this
version even returns precisely to the center on every slice. Use whichever method
you like — the hand-drawn loop when you want to *see* the arc being built, and
`circle()` when you just want a clean curve in one line.

## Learning Check

!!! mascot-thinking "Your Turn — One Variable Controls the Wheel"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This version stores the slice count in a variable, `wedges`, and computes
    `angle = 360 / wedges` from it — so one number sets the wedge width, the rim,
    and the rotation together. Predict what the wheel will look like with
    `wedges = 5`, then run it to find out!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

hues = ['red','orange','yellow','chartreuse','green','springgreen',
        'cyan','deepskyblue','blue','purple','magenta','deeppink']

radius = 180
wedges = 5
angle = 360 / wedges

for hue in hues:
    monty.color(hue)
    monty.begin_fill()
    monty.forward(radius)
    monty.left(90)
    monty.circle(radius, angle)
    monty.left(90)
    monty.forward(radius)
    monty.left(180 - angle)
    monty.end_fill()
    # rotate counterclockwise 60 degrees to the next wedge
    monty.left(angle)
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

Run it: `wedges = 5` makes each slice 72°, and five slices already fill the circle — so the sixth color (magenta) laps the wheel and paints over the first (red), leaving five visible slices. Pulling the count into a variable makes re-scaling easy: `angle = 360 / wedges` drives the wedge width, the `circle(radius, angle)` rim, and the `monty.left(angle)` turn all at once. Keep `wedges` equal to the number of colors in `hues` and every hue gets its own clean slice.

## Experiments

1. **Try 8 wedges.** Use 8 colors, change `360 / 12` to `360 / 8`, adjust the inner arc to 4 steps × 11.25°, and change the closing rotation to `monty.left(45)`. You'll know it worked when 8 equal slices fill the circle.

2. **Tilt the whole wheel.** Add a single `monty.left(15)` line just before the `for` loop. You'll know it worked when the entire wheel is rotated 15° but still closes into a full circle.

3. **Shrink alternate wedges.** Use `for i, hue in enumerate(hues):`, then set `r = radius` for even `i` and `r = radius // 2` for odd `i`. Use `r` in both `forward(...)` lines and in the arc step `forward(r * 0.1)`. You'll know it worked when long and short wedges alternate around the wheel.

!!! mascot-celebration "Spectacular!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You drew all 12 hues of the color wheel and learned how `360 / n` divides
    a circle into any number of equal slices. Artists use this same wheel every day!
    Up next: **Pentagon Chain** to practice the polygon angle formula.
