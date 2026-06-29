---
hide:
    - toc
---
# Generative Art Loop

By the end of this lab you'll be able to:

- Combine multiple turtle techniques — spirals, color cycling, polar coordinates — into one flowing program
- Use a parameter loop to automatically generate a family of related images
- Understand generative art: code that produces unique visual output governed by rules

The grand finale of the gallery — a generative art loop that combines spirals, color cycling, golden-angle placement, and parametric curves to produce a unique, complex composition each time the seed changes.

!!! mascot-welcome "Welcome to the Generative Art Loop!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    You've made it to the final lab in the gallery!
    This program combines every technique from the gallery into one composition.
    Every seed produces a different artwork — let's code the art machine!

## How It Works

The program runs three layers:

1. **Golden spiral dots** — 300 colored dots placed by the golden angle
2. **Parametric rose** — a rose curve overlaid in semi-transparent white
3. **Nested spirals** — 6 mini-spirals at positions computed from the rose curve

Together they form a complex, layered composition.

## Sample Code

```python
import turtle
import math
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

seed = 7
random.seed(seed)
golden = 137.508

palette = ['royalblue', 'crimson', 'forestgreen', 'darkorange', 'purple', 'teal']

for n in range(300):
    angle = math.radians(n * golden)
    r = 7 * math.sqrt(n)
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.penup()
    monty.goto(x, y)
    sz = max(2, int(8 - r / 25))
    monty.dot(sz, palette[n % len(palette)])

k = 5
scale = 120
steps = 800
monty.pencolor('navy')
monty.pensize(1)
monty.penup()
for i in range(steps + 1):
    theta = 2 * math.pi * i / steps
    r2 = scale * math.cos(k * theta)
    x = r2 * math.cos(theta)
    y = r2 * math.sin(theta)
    if i == 0:
        monty.goto(x, y); monty.pendown()
    else:
        monty.goto(x, y)

for arm in range(6):
    arm_angle = math.radians(arm * 60)
    cx = 70 * math.cos(arm_angle)
    cy = 70 * math.sin(arm_angle)
    monty.pencolor(palette[arm])
    monty.pensize(1)
    for i in range(30):
        step_r = i * 1.5
        a = math.radians(arm * 60 + i * 30)
        sx = cx + step_r * math.cos(a)
        sy = cy + step_r * math.sin(a)
        monty.penup()
        monty.goto(sx, sy)
        monty.pendown()
        monty.dot(2, palette[arm])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Three layers — golden dots, a rose curve, and 6 mini-spirals — all centered together.
    Will the layers look separate and cluttered, or will they combine into a unified image?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import math
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

seed = 7
random.seed(seed)
golden = 137.508

palette = ['royalblue', 'crimson', 'forestgreen', 'darkorange', 'purple', 'teal']

for n in range(300):
    angle = math.radians(n * golden)
    r = 7 * math.sqrt(n)
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.penup()
    monty.goto(x, y)
    sz = max(2, int(8 - r / 25))
    monty.dot(sz, palette[n % len(palette)])

k = 5
scale = 120
steps = 800
monty.pencolor('navy')
monty.pensize(1)
monty.penup()
for i in range(steps + 1):
    theta = 2 * math.pi * i / steps
    r2 = scale * math.cos(k * theta)
    x = r2 * math.cos(theta)
    y = r2 * math.sin(theta)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)

for arm in range(6):
    arm_angle = math.radians(arm * 60)
    cx = 70 * math.cos(arm_angle)
    cy = 70 * math.sin(arm_angle)
    monty.pencolor(palette[arm])
    monty.pensize(1)
    for i in range(30):
        step_r = i * 1.5
        a = math.radians(arm * 60 + i * 30)
        sx = cx + step_r * math.cos(a)
        sy = cy + step_r * math.sin(a)
        monty.penup()
        monty.goto(sx, sy)
        monty.pendown()
        monty.dot(2, palette[arm])
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

A **complex layered composition** — the three layers interweave to form a unified artwork. Were you right?

## How It Works

The golden dots fill the background with color texture. The rose curve provides structural geometry. The mini-spirals add focal points at the rose's petal positions. When all three layers share the same center and coordinate system, they naturally compose together.

## Explanation Table

| Line | What it does |
|------|-------------|
| `golden = 137.508` | Golden angle — optimally spaced dots |
| `math.cos(k * theta)` | Rose curve — 5 petals at k=5 |
| `arm * 60` | Six arms at 60° spacing |
| `palette[n % len(palette)]` | Cycling color assignment |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Seed"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `seed = 7` to `seed = 99`.
    Predict: which part of the composition will change? (Not all three layers use `random`!)
    Run it to find out which layers are deterministic and which are random.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
import math
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

seed = 99
random.seed(seed)
golden = 137.508

palette = ['navy', 'royalblue', 'deepskyblue', 'steelblue', 'lightblue', 'cyan']

for n in range(300):
    angle = math.radians(n * golden)
    r = 7 * math.sqrt(n)
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    monty.penup()
    monty.goto(x, y)
    sz = max(2, int(8 - r / 25))
    monty.dot(sz, palette[n % len(palette)])

k = 7
scale = 110
steps = 800
monty.pencolor('darkblue')
monty.pensize(1)
monty.penup()
for i in range(steps + 1):
    theta = 2 * math.pi * i / steps
    r2 = scale * math.cos(k * theta)
    x = r2 * math.cos(theta)
    y = r2 * math.sin(theta)
    if i == 0:
        monty.goto(x, y)
        monty.pendown()
    else:
        monty.goto(x, y)

for arm in range(7):
    arm_angle = math.radians(arm * 360/7)
    cx = 65 * math.cos(arm_angle)
    cy = 65 * math.sin(arm_angle)
    monty.pencolor(palette[arm % len(palette)])
    for i in range(25):
        step_r = i * 1.5
        a = math.radians(arm * 360/7 + i * 30)
        sx = cx + step_r * math.cos(a)
        sy = cy + step_r * math.sin(a)
        monty.penup(); monty.goto(sx, sy); monty.pendown()
        monty.dot(2, palette[arm % len(palette)])
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

Blue palette, 7-petaled rose, 7 spiral arms — a completely different but equally structured composition.

## Experiments

1. **Use a dark background.** Add `turtle.bgcolor('black')` and change the palette to bright colors. You'll know it worked when the dots glow against the dark background.

2. **Try k=8 for the rose.** Change `k = 5` to `k = 8`. Remember: even k gives 2k petals = 16 petals! You'll know it worked when a more complex rose appears.

3. **Add a fourth layer.** Add a Lissajous figure drawn over the top in white. You'll know it worked when a third kind of curve joins the composition.

4. **Loop through seeds 1–6.** Clear the screen between seeds and draw six variants automatically. You'll know it worked when 6 different compositions are generated in sequence.

!!! mascot-celebration "You Completed the Gallery!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You made it through all 100 turtle graphics patterns — from a simple square spiral
    to a layered generative artwork! You've learned loops, functions, recursion, fractals,
    parametric math, L-systems, and so much more. Keep coding — the canvas is infinite!
