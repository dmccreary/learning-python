---
hide:
    - toc
---
# Mandelbrot Pixel Art

By the end of this lab you'll be able to:

- Use complex number arithmetic in Python to test Mandelbrot membership
- Draw a raster image by placing colored dots on a grid using `dot()`
- Understand what "escape time" means and how it produces color gradients

A low-resolution pixel art version of the Mandelbrot set — one of the most famous mathematical objects ever discovered. Each pixel's color tells you how quickly the Mandelbrot iteration "escapes" to infinity, or (black) whether it stays bounded forever.

!!! mascot-welcome "Welcome to the Mandelbrot Set!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Mandelbrot set looks infinitely complex but is computed from a single rule:
    `z = z² + c`. Apply it repeatedly and ask: does `z` escape or stay close to zero?
    Let's code it together!

## How It Works

For each pixel `(px, py)` in a grid, we compute a complex number `c` in the range `[-2.5, 1] × [-1.25, 1.25]`. Then we repeatedly apply `z = z² + c` starting from `z = 0`. If `|z| > 2`, the point has "escaped" — we color it by how many steps it took. If it never escapes after `max_iter` steps, it's in the Mandelbrot set and colored black.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

cols = 60
rows = 50
pixel = 5
max_iter = 20

colors = ['black', 'navy', 'blue', 'royalblue', 'deepskyblue',
          'cyan', 'green', 'yellow', 'orange', 'red', 'white']

for py in range(rows):
    for px in range(cols):
        cr = -2.5 + px * 3.5 / cols
        ci = -1.25 + py * 2.5 / rows
        z = complex(0, 0)
        c = complex(cr, ci)
        count = 0
        while abs(z) <= 2 and count < max_iter:
            z = z * z + c
            count += 1
        color_idx = min(count, len(colors) - 1)
        monty.goto(-150 + px * pixel, -125 + py * pixel)
        monty.dot(pixel + 1, colors[color_idx])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The Mandelbrot set is the **black** region — points that never escape.
    Will it look like a rough blob, or a recognizable shape?
    Make your guess — then click Run to find out! (This one is slow — be patient!)

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
monty.penup()

cols = 60
rows = 50
pixel = 5
max_iter = 20

colors = ['black', 'navy', 'blue', 'royalblue', 'deepskyblue',
          'cyan', 'green', 'yellow', 'orange', 'red', 'white']

for py in range(rows):
    for px in range(cols):
        cr = -2.5 + px * 3.5 / cols
        ci = -1.25 + py * 2.5 / rows
        z = complex(0, 0)
        c = complex(cr, ci)
        count = 0
        while abs(z) <= 2 and count < max_iter:
            z = z * z + c
            count += 1
        color_idx = min(count, len(colors) - 1)
        monty.goto(-150 + px * pixel, -125 + py * pixel)
        monty.dot(pixel + 1, colors[color_idx])`);
</script>

Even at low resolution, the **cardioid** (heart-like) main body and the round bulge to its left are recognizable. Were you right?

## How It Works

`complex(cr, ci)` creates a complex number `c = cr + ci·i`. The key iteration `z = z * z + c` computes `z²` using Python's built-in complex multiplication — no trigonometry needed! `abs(z)` gives `√(real² + imag²)`, the distance from the origin.

## Explanation Table

| Line | What it does |
|------|-------------|
| `cr = -2.5 + px * 3.5 / cols` | Map pixel column to real axis position |
| `ci = -1.25 + py * 2.5 / rows` | Map pixel row to imaginary axis position |
| `z = z * z + c` | The Mandelbrot iteration |
| `while abs(z) <= 2` | Stop when z escapes radius 2 |
| `count` | Number of iterations = escape time = color |

## Learning Check

!!! mascot-thinking "Your Turn — Zoom Into the Bulge"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change the range to zoom in: `cr = -1.5 + px * 0.5 / cols` and `ci = -0.5 + py * 1.0 / rows`.
    Predict what the zoomed region will look like — then run it to explore!

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
monty.penup()

cols = 60
rows = 50
pixel = 5
max_iter = 30

colors = ['black', 'navy', 'blue', 'royalblue', 'deepskyblue',
          'cyan', 'limegreen', 'yellow', 'orange', 'red', 'white']

for py in range(rows):
    for px in range(cols):
        cr = -1.5 + px * 0.5 / cols
        ci = -0.5 + py * 1.0 / rows
        z = complex(0, 0)
        c = complex(cr, ci)
        count = 0
        while abs(z) <= 2 and count < max_iter:
            z = z * z + c
            count += 1
        color_idx = min(count, len(colors) - 1)
        monty.goto(-150 + px * pixel, -125 + py * pixel)
        monty.dot(pixel + 1, colors[color_idx])`);
</script>

Zooming in reveals more detail in the boundary region — small bulges appear that look just like the main shape. This self-similarity at every zoom level is the defining property of a fractal!

## Experiments

1. **Increase resolution.** Change `cols = 80` and `rows = 66` with `pixel = 4`. More detail, slower. You'll know it worked when the main body has sharper edges.

2. **More colors.** Extend the `colors` list to 20 entries with a full rainbow. You'll know it worked when the boundary region shows more color bands.

3. **Increase max_iter.** Change `max_iter = 50`. Points near the boundary need more iterations to escape. You'll know it worked when the boundary detail improves.

4. **Try a different zoom.** Use `cr = -0.75 + px * 0.02 / cols` and `ci = -0.1 + py * 0.02 / rows` to zoom into the "seahorse valley". You'll know it worked when you see a miniature Mandelbrot shape.

!!! mascot-celebration "Math Meets Art!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You computed one of the most famous mathematical objects in history using
    `z = z*z + c` — just one line of code! The Mandelbrot set is infinitely complex
    yet emerges from the simplest possible iteration.
    Up next: **Julia Set** — the Mandelbrot's cousin.
