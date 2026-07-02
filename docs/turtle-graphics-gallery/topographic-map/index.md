---
hide:
    - toc
---
# Topographic Map

By the end of this lab you'll be able to:

- Plot closed contour rings in polar coordinates with `math.sin()` and `math.cos()`
- Perturb a circle's radius with sine waves to make natural, wobbly coastlines
- Paint elevation bands by filling rings from the outside in

Real hikers' maps show mountains as nested contour rings: each ring is a line of equal elevation, and the colors march from lowland green through brown rock up to a white summit. This lab draws a whole island that way — eight wobbly rings, filled from the outside in so each higher elevation paints on top of the last.

!!! mascot-welcome "Welcome to the Topographic Map!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Map makers squash 3D mountains onto flat paper using contour lines —
    and you're about to be the cartographer. Grab your compass: we're
    drawing an island that never existed, one elevation at a time!

## How It Works

Each ring is a circle in polar coordinates whose radius wobbles as the angle sweeps around: `r = base_r * (1 + 0.10*sin(3*theta) + 0.06*sin(7*theta + 1))`. Adding two sine waves of different frequencies (3 and 7) makes the coastline look natural instead of perfectly round, and because the wobble is a *percentage* of `base_r`, the bumps are big on the outer rings and gentle near the peak — and the rings can never cross. The loop draws the biggest ring first and works inward, so each smaller filled ring paints over the one below it, exactly like stacking elevation layers.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
screen = turtle.Screen()
screen.bgcolor('lightsteelblue')

colors = ['darkgreen', 'forestgreen', 'yellowgreen', 'darkkhaki', 'peru', 'sienna', 'rosybrown', 'white']

def contour_r(base_r, theta):
    wobble = 0.10 * math.sin(3 * theta) + 0.06 * math.sin(7 * theta + 1)
    return base_r * (1 + wobble)

steps = 90
for ring in range(8):
    base_r = 160 - ring * 18
    monty.penup()
    monty.pencolor('saddlebrown')
    monty.fillcolor(colors[ring])
    monty.pensize(1)
    for i in range(steps + 1):
        theta = 2 * math.pi * i / steps
        r = contour_r(base_r, theta)
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
            monty.begin_fill()
        else:
            monty.goto(x, y)
    monty.end_fill()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The wobble formula includes `math.sin(3 * theta)`, the strongest
    wiggle. As you travel once around the island's coastline, how many
    big bulges (peninsulas) will you pass — 3, 7, or 10?
    Make your guess, then click Run!

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
screen = turtle.Screen()
screen.bgcolor('lightsteelblue')

colors = ['darkgreen', 'forestgreen', 'yellowgreen', 'darkkhaki', 'peru', 'sienna', 'rosybrown', 'white']

def contour_r(base_r, theta):
    wobble = 0.10 * math.sin(3 * theta) + 0.06 * math.sin(7 * theta + 1)
    return base_r * (1 + wobble)

steps = 90
for ring in range(8):
    base_r = 160 - ring * 18
    monty.penup()
    monty.pencolor('saddlebrown')
    monty.fillcolor(colors[ring])
    monty.pensize(1)
    for i in range(steps + 1):
        theta = 2 * math.pi * i / steps
        r = contour_r(base_r, theta)
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
            monty.begin_fill()
        else:
            monty.goto(x, y)
    monty.end_fill()`);
</script>

**3 big peninsulas** — `sin(3 * theta)` repeats 3 times per lap, and the faster `sin(7 * theta)` just adds smaller ripples on top. Were you right?

## How It Works

Reading the color list tells the whole elevation story: ring 0 (the largest, drawn first) is `'darkgreen'` lowland, and each ring inward steps through lighter greens, khaki, and browns until ring 7 is the `'white'` summit. This works only because of paint order — turtle fill has no idea about "height", but filling outside-in means every smaller ring covers the middle of the bigger one, leaving just a colored band showing. Real topographic maps use the same trick: the band *between* two contour lines gets one elevation color. The blue `bgcolor` plays the ocean around the outermost coastline.

## Explanation Table

| Line | What it does |
|------|-------------|
| `wobble = 0.10 * math.sin(3 * theta) + 0.06 * math.sin(7 * theta + 1)` | Two sine waves make a bumpy but smooth coastline |
| `return base_r * (1 + wobble)` | Wobble scales with ring size, so rings never cross |
| `base_r = 160 - ring * 18` | Each ring is 18 pixels smaller — outside in, low to high |
| `monty.fillcolor(colors[ring])` | Elevation bands: green shores, brown slopes, white peak |

## Learning Check

!!! mascot-thinking "Your Turn — Reshape the Island"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    In the program below, `math.sin(3 * theta)` has been changed to
    `math.sin(6 * theta)`. Predict: how many big peninsulas will the
    new coastline have? Run it and count them!

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
screen = turtle.Screen()
screen.bgcolor('lightsteelblue')

colors = ['darkgreen', 'forestgreen', 'yellowgreen', 'darkkhaki', 'peru', 'sienna', 'rosybrown', 'white']

def contour_r(base_r, theta):
    wobble = 0.10 * math.sin(6 * theta) + 0.06 * math.sin(7 * theta + 1)
    return base_r * (1 + wobble)

steps = 90
for ring in range(8):
    base_r = 160 - ring * 18
    monty.penup()
    monty.pencolor('saddlebrown')
    monty.fillcolor(colors[ring])
    monty.pensize(1)
    for i in range(steps + 1):
        theta = 2 * math.pi * i / steps
        r = contour_r(base_r, theta)
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
            monty.begin_fill()
        else:
            monty.goto(x, y)
    monty.end_fill()`);
</script>

Six peninsulas — the first number inside `sin(n * theta)` is exactly how many times that bump pattern repeats around the island.

## Experiments

1. **Make it craggier.** Change `0.10` to `0.20`. You'll know it worked when the coastline grows dramatic fjords and the rings pinch close together.

2. **Shift the terrain.** Change `math.sin(7 * theta + 1)` to `math.sin(7 * theta + 4)`. You'll know it worked when the small ripples slide around to different spots on the coast.

3. **Deepen the ocean.** Change `screen.bgcolor('lightsteelblue')` to `screen.bgcolor('midnightblue')`. You'll know it worked when the island glows against a dark night-chart sea.

4. **Flip the elevation.** Reverse the color list (put `'white'` first and `'darkgreen'` last). You'll know it worked when the map becomes a snowy ring-shaped crater with a green valley floor at the center.

!!! mascot-celebration "Master Cartographer!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Polar coordinates, layered sine wobbles, and outside-in painting —
    you turned math into a map worthy of an explorer's backpack.
    Browse the **Turtle Graphics Gallery** for your next challenge!
