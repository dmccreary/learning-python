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
    # rotate counterclockwise 30 degrees
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

Each wedge is drawn as a filled triangle-like shape: go out along one edge, cross the arc, come back along the other edge, then turn to face the next wedge's direction.

`monty.left(180 - wedge)` at the end repositions Monty's heading so the next wedge starts correctly. This is the key geometry: after walking back to center along one edge and turning 180°, we subtract the wedge angle to face the next slice.

## Explanation Table

| Line | What it does |
|------|-------------|
| `hues = [...]` | List of 12 standard color wheel hues |
| `wedge = 360 / 12` | Each slice spans 30° |
| `monty.forward(radius)` | Draw the first edge of the wedge outward |
| `for _ in range(6)` | Approximate the arc with 6 short forward+turn steps |
| `monty.forward(radius)` | Draw the second edge back to center |
| `monty.left(180 - wedge)` | Reorient to face the next wedge's first edge |

## Learning Check

!!! mascot-thinking "Your Turn — Change to 6 Wedges"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Can you change the code to draw only **6** wedges instead of 12?
    You need to change the `hues` list (keep 6 colors) and update the `wedge` angle formula.
    Add your changes and run to see the result!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

hues = ['red','yellow','green','cyan','blue','magenta']
radius = 180
wedge = 360 / 6

for hue in hues:
    monty.color(hue)
    monty.begin_fill()
    monty.forward(radius)
    monty.left(90)
    for _ in range(6):
        monty.forward(radius * 0.1)
        monty.left(10)
    monty.left(90)
    monty.forward(radius)
    monty.left(180 - wedge)
    monty.end_fill()
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

With 6 wedges, each spans 60° and the inner arc step becomes `left(10)` (6 steps × 10° = 60°).

## Experiments

1. **Try 8 wedges.** Use 8 colors, change `360 / 12` to `360 / 8`, and adjust the inner arc to 4 steps × 11.25°. You'll know it worked when 8 equal slices fill the circle.

2. **Make the wedges pointed.** Remove the arc loop and just draw `forward(radius)` straight back. You'll know it worked when each wedge becomes a sharp triangle with a tiny gap between tips.

3. **Shrink alternate wedges.** Add `if i % 2 == 0: r = radius else: r = radius // 2` using `enumerate(hues)`. You'll know it worked when the wedges alternate between long and short.

!!! mascot-celebration "Spectacular!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You drew all 12 hues of the color wheel and learned how `360 / n` divides
    a circle into any number of equal slices. Artists use this same wheel every day!
    Up next: **Pentagon Chain** to practice the polygon angle formula.
