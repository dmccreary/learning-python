---
hide:
    - toc
---
# Julia Set Pixel Art

By the end of this lab you'll be able to:

- Modify the Mandelbrot iteration to compute a Julia set by swapping `z` and `c`
- Understand how changing one complex constant `c` produces dramatically different shapes
- Compare connected vs. disconnected Julia sets (Fatou dust)

The Julia set for `c = -0.7 + 0.27i` — a connected, swirling shape sometimes called the "Douady rabbit." Change `c` and the whole shape transforms; some values give spirals, others give dust.

!!! mascot-welcome "Welcome to the Julia Set!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In the Mandelbrot set, `c` changes for each pixel and `z` starts at 0.
    In a Julia set, `c` is **fixed** and `z` starts at each pixel's position.
    Swapping these two roles gives an entirely different fractal!
    Let's code it together!

## How It Works

For each pixel `(px, py)`, set `z = (pixel's complex position)` and `c = -0.7 + 0.27j` (fixed). Repeatedly apply `z = z² + c`. Color by escape time. The set of points that never escape is the Julia set.

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
max_iter = 25
c = complex(-0.7, 0.27)

colors = ['black', 'darkblue', 'navy', 'blue', 'mediumblue',
          'royalblue', 'deepskyblue', 'cyan', 'limegreen',
          'yellow', 'orange', 'red', 'white']

for py in range(rows):
    for px in range(cols):
        zr = -1.5 + px * 3.0 / cols
        zi = -1.25 + py * 2.5 / rows
        z = complex(zr, zi)
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
    The Julia set for `c = -0.7 + 0.27i` is a connected blob with a swirling boundary.
    Will it look more like the Mandelbrot, or completely different?
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
monty.penup()

cols = 60
rows = 50
pixel = 5
max_iter = 25
c = complex(-0.7, 0.27)

colors = ['black', 'darkblue', 'navy', 'blue', 'mediumblue',
          'royalblue', 'deepskyblue', 'cyan', 'limegreen',
          'yellow', 'orange', 'red', 'white']

for py in range(rows):
    for px in range(cols):
        zr = -1.5 + px * 3.0 / cols
        zi = -1.25 + py * 2.5 / rows
        z = complex(zr, zi)
        count = 0
        while abs(z) <= 2 and count < max_iter:
            z = z * z + c
            count += 1
        color_idx = min(count, len(colors) - 1)
        monty.goto(-150 + px * pixel, -125 + py * pixel)
        monty.dot(pixel + 1, colors[color_idx])
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

The Julia set looks very **different** from the Mandelbrot — it's a symmetric, swirling connected shape. Were you right?

## How It Works

The key difference from Mandelbrot:
- **Mandelbrot**: `z = 0`, `c = pixel_position` — tests each point as a parameter
- **Julia**: `z = pixel_position`, `c = fixed` — tests each point as an initial value

The Julia set is connected if and only if `c` is inside the Mandelbrot set.

## Explanation Table

| Line | What it does |
|------|-------------|
| `c = complex(-0.7, 0.27)` | Fixed parameter — determines the Julia shape |
| `z = complex(zr, zi)` | Starting value = current pixel position |
| `z = z * z + c` | Same iteration as Mandelbrot — but `c` never changes |
| `zr = -1.5 + px * 3.0 / cols` | Map pixel to complex z-plane x-coordinate |

## Learning Check

!!! mascot-thinking "Your Turn — Try a Different c Value"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `c = complex(-0.7, 0.27)` to `c = complex(0.285, 0.01)`.
    Each `c` value creates a completely different Julia set. Predict whether it'll look
    similar or very different — then run it to explore!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

cols = 60
rows = 50
pixel = 5
max_iter = 25
c = complex(0.285, 0.01)

colors = ['black', 'darkblue', 'navy', 'blue', 'mediumblue',
          'royalblue', 'deepskyblue', 'cyan', 'limegreen',
          'yellow', 'orange', 'red', 'white']

for py in range(rows):
    for px in range(cols):
        zr = -1.5 + px * 3.0 / cols
        zi = -1.25 + py * 2.5 / rows
        z = complex(zr, zi)
        count = 0
        while abs(z) <= 2 and count < max_iter:
            z = z * z + c
            count += 1
        color_idx = min(count, len(colors) - 1)
        monty.goto(-150 + px * pixel, -125 + py * pixel)
        monty.dot(pixel + 1, colors[color_idx])
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

`c = 0.285 + 0.01i` is very close to the edge of the Mandelbrot set — the resulting Julia set has a feathery, spiraling boundary.

## Experiments

1. **Try `c = complex(-0.4, 0.6)`.** This creates a "dragon" shape. You'll know it worked when you see a jagged, asymmetric form.

2. **Try `c = complex(0.0, 1.0)`.** This is outside the Mandelbrot set — the Julia set becomes "Fatou dust" (disconnected scattered points). You'll know it worked when most pixels are colored, not black.

3. **Higher max_iter.** Change `max_iter = 50`. More iterations reveal finer boundary detail. You'll know it worked when the transition between colors is smoother.

4. **Widen the view.** Change `zr = -2.0 + px * 4.0 / cols` and `zi = -1.67 + py * 3.33 / rows`. You'll know it worked when the full Julia set fits in the frame.

!!! mascot-celebration "Two Fractals, One Rule!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    The Mandelbrot and Julia sets use *exactly the same iteration* — just with z and c swapped!
    That tiny change gives you an infinite family of different fractals from one formula.
    Up next: **Sierpiński Carpet** — 8-way recursive subdivision.
