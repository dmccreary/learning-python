---
hide:
    - toc
---
# Vasarely Sphere

By the end of this lab you'll be able to:

- Draw a regular grid of dots with nested loops
- Measure each dot's distance from the center with `math.sqrt`
- Map distance to dot size so a flat grid appears to bulge into a 3-D sphere

A perfectly regular grid of dots — except that inside a central circle, the dots swell up based on how close they are to the center. That one change makes a sphere appear to push out of the flat page. The Hungarian-French artist Victor Vasarely, the "grandfather of op art," used exactly this trick in his famous *Vega* paintings.

!!! mascot-welcome "Welcome to the Vasarely Sphere!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Every dot in this picture sits exactly on a flat, square grid.
    Yet a 3-D sphere will bulge right out at you!
    Victor Vasarely turned this trick into world-famous art — now it's your turn.

## How It Works

Two nested loops place a dot every 28 pixels in a 13 × 13 grid. For each dot we compute its distance `d` from the center using the Pythagorean theorem: `d = sqrt(x*x + y*y)`. If the dot is inside the radius `R`, we compute a swell factor with `cos(d / R * pi / 2)` — it equals 1 at the center and fades to 0 at the rim — and add `bulge * swell` to the dot's size. Dots outside `R` stay small, so the sphere sits inside a calm, flat grid.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

spacing = 28
n = 6
R = 130
base = 9
bulge = 16

for row in range(-n, n + 1):
    for col in range(-n, n + 1):
        x = col * spacing
        y = row * spacing
        d = math.sqrt(x * x + y * y)
        size = base
        if d < R:
            swell = math.cos(d / R * math.pi / 2)
            size = base + bulge * swell
        monty.goto(x, y)
        monty.dot(int(size), 'navy')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The grid spacing never changes — only the dot **size** does.
    Will the middle of the picture look like a flat patch of bigger dots,
    or like a 3-D ball pushing out of the page? Guess, then click Run!

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
monty.penup()

spacing = 28
n = 6
R = 130
base = 9
bulge = 16

for row in range(-n, n + 1):
    for col in range(-n, n + 1):
        x = col * spacing
        y = row * spacing
        d = math.sqrt(x * x + y * y)
        size = base
        if d < R:
            swell = math.cos(d / R * math.pi / 2)
            size = base + bulge * swell
        monty.goto(x, y)
        monty.dot(int(size), 'navy')`);
</script>

Most people see a ball bulging out of the page — your brain reads "bigger" as "closer" and builds the 3-D shape automatically. Were you right?

## How It Works

Your visual system constantly guesses depth from size: things that are closer look bigger. When dot size grows smoothly toward the center, your brain's simplest explanation is that the surface itself is curving toward you — so it perceives a sphere. The cosine function is the secret sauce: it changes slowly near the center and quickly near the rim, exactly like the surface of a real ball tilting away from you.

## Explanation Table

| Line | What it does |
|------|-------------|
| `for row in range(-n, n + 1):` | Nested loops visit all 13 × 13 = 169 grid positions |
| `d = math.sqrt(x * x + y * y)` | Pythagorean distance from the dot to the center |
| `swell = math.cos(d / R * math.pi / 2)` | 1 at the center, fading to 0 at the rim of the bulge |
| `size = base + bulge * swell` | Maps distance to dot size — the whole illusion in one line |

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Line"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This version computes `swell` but never **uses** it, so the sphere is gone —
    every dot stays the same size. Add **one line** inside the `if` block
    (right after `swell` is computed) to bring the bulge back!

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
monty.penup()

spacing = 28
n = 6
R = 130
base = 9
bulge = 16

for row in range(-n, n + 1):
    for col in range(-n, n + 1):
        x = col * spacing
        y = row * spacing
        d = math.sqrt(x * x + y * y)
        size = base
        if d < R:
            swell = math.cos(d / R * math.pi / 2)
        monty.goto(x, y)
        monty.dot(int(size), 'navy')`);
</script>

The missing line is `size = base + bulge * swell` — without it, `swell` is computed and thrown away, and every dot keeps the base size.

## Experiments

1. **Make the bulge stronger.** Change `bulge = 16` to `bulge = 22`. You'll know it worked when the center dots nearly touch and the sphere looks even rounder.

2. **Make a dent instead of a bump.** Change the size line to `size = base + bulge - bulge * swell` so dots *shrink* toward the center. You'll know it worked when the grid looks like it is denting away from you.

3. **Grow the sphere.** Change `R = 130` to `R = 180`. You'll know it worked when the bulge swallows almost the whole grid, leaving only the corners flat.

4. **Move the sphere off-center.** Change the distance line to `d = math.sqrt((x - 56) * (x - 56) + y * y)`. You'll know it worked when the bulge slides to the right side of the grid.

!!! mascot-celebration "You Made Flat Paper Bulge!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    One `if` statement and a cosine turned a boring grid into 3-D op art —
    the same math Vasarely used in galleries around the world.
    Up next: **Scintillating Grid** — white dots that flash black when you're not looking.
