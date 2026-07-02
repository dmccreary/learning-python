---
hide:
    - toc
---
# DNA Double Helix

By the end of this lab you'll be able to:

- Plot a sine wave point by point with `math.sin()`
- Offset a second wave by 180° (`math.pi`) to make two crossing strands
- Connect matching points with "rungs" to build the DNA ladder

Seen from the side, DNA looks like a twisted ladder: two strands weaving over and under each other, joined by rungs (the base pairs). The secret is pure trigonometry — the two strands are the *same* sine wave, just shifted half a cycle apart. (This is a different beast from the gallery's Double Helix Spiral, which is an expanding turtle spiral — here we *plot points* with math.)

!!! mascot-welcome "Welcome to the Double Helix!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In 1953, the shape of DNA was one of the biggest puzzles in science.
    You're about to draw it with two sine waves and a phase shift —
    the molecule of life in under 40 lines of Python!

## How It Works

Both strands are plotted as point sequences going across the canvas: for point `i`, the height is `amp * sin(theta + phase)` where `theta` sweeps through 3 full waves. The blue strand uses `phase = 0` and the red strand uses `phase = math.pi` — a 180° offset, so wherever one strand is high the other is low, making them appear to cross like a twisted ladder. The gray rungs are drawn first: every 6th point, a straight line connects the blue strand's height to the red strand's height at the same x.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

amp = 70
waves = 3
points = 180
offset = math.pi

def strand_y(i, phase):
    theta = 2 * math.pi * waves * i / points + phase
    return amp * math.sin(theta)

def x_at(i):
    return -180 + 360.0 * i / points

monty.pencolor('gray')
monty.pensize(2)
for i in range(0, points + 1, 6):
    x = x_at(i)
    monty.penup()
    monty.goto(x, strand_y(i, 0))
    monty.pendown()
    monty.goto(x, strand_y(i, offset))

monty.pensize(4)
for strand in range(2):
    if strand == 0:
        phase = 0
        monty.pencolor('royalblue')
    else:
        phase = offset
        monty.pencolor('crimson')
    monty.penup()
    for i in range(points + 1):
        monty.goto(x_at(i), strand_y(i, phase))
        if i == 0:
            monty.pendown()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The red strand is the blue strand shifted by 180°.
    When the blue strand is at its **highest** point, where will the
    red strand be — at the top with it, in the middle, or at its
    **lowest** point? Make your guess, then click Run!

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

amp = 70
waves = 3
points = 180
offset = math.pi

def strand_y(i, phase):
    theta = 2 * math.pi * waves * i / points + phase
    return amp * math.sin(theta)

def x_at(i):
    return -180 + 360.0 * i / points

monty.pencolor('gray')
monty.pensize(2)
for i in range(0, points + 1, 6):
    x = x_at(i)
    monty.penup()
    monty.goto(x, strand_y(i, 0))
    monty.pendown()
    monty.goto(x, strand_y(i, offset))

monty.pensize(4)
for strand in range(2):
    if strand == 0:
        phase = 0
        monty.pencolor('royalblue')
    else:
        phase = offset
        monty.pencolor('crimson')
    monty.penup()
    for i in range(points + 1):
        monty.goto(x_at(i), strand_y(i, phase))
        if i == 0:
            monty.pendown()`);
</script>

At its lowest — `sin(theta + pi)` is always the exact opposite of `sin(theta)`. That mirror-image dance is what makes the ladder look twisted. Were you right?

## How It Works

This is *parametric plotting*: instead of steering the turtle with `forward()` and `left()`, we compute each point's coordinates from a parameter `i` and jump there with `goto()`. The identity `sin(theta + pi) = -sin(theta)` means the two strands are perfect reflections, so they cross wherever `sin(theta) = 0`. Notice the rungs are longest halfway between crossings (where the strands are far apart) and shrink to nothing at each crossing — no extra code needed, the geometry does it automatically. Drawing the rungs *before* the strands keeps the gray lines neatly behind the blue and red.

## Explanation Table

| Line | What it does |
|------|-------------|
| `theta = 2 * math.pi * waves * i / points + phase` | Sweeps theta through 3 full waves as i counts up |
| `return amp * math.sin(theta)` | Turns the angle into a height between -70 and +70 |
| `offset = math.pi` | 180° phase shift — the whole secret of the helix look |
| `for i in range(0, points + 1, 6):` | Every 6th point gets a gray rung between the strands |

## Learning Check

!!! mascot-thinking "Your Turn — Break the Phase"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    In the program below, `offset` has been changed from `math.pi` to `0`,
    so both strands get the **same** phase. Predict: what will the rungs
    look like, and how many separate strands will you see? Run it, then
    set `offset = math.pi` back to repair the DNA!

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

amp = 70
waves = 3
points = 180
offset = 0

def strand_y(i, phase):
    theta = 2 * math.pi * waves * i / points + phase
    return amp * math.sin(theta)

def x_at(i):
    return -180 + 360.0 * i / points

monty.pencolor('gray')
monty.pensize(2)
for i in range(0, points + 1, 6):
    x = x_at(i)
    monty.penup()
    monty.goto(x, strand_y(i, 0))
    monty.pendown()
    monty.goto(x, strand_y(i, offset))

monty.pensize(4)
for strand in range(2):
    if strand == 0:
        phase = 0
        monty.pencolor('royalblue')
    else:
        phase = offset
        monty.pencolor('crimson')
    monty.penup()
    for i in range(points + 1):
        monty.goto(x_at(i), strand_y(i, phase))
        if i == 0:
            monty.pendown()`);
</script>

With `offset = 0` every rung connects a point to itself (length zero!) and the red strand draws exactly on top of the blue one — one lonely wave, no helix. The 180° offset isn't decoration; it *is* the double helix.

## Experiments

1. **Twist it tighter.** Change `waves = 3` to `waves = 5`. You'll know it worked when the strands cross 10 times instead of 6.

2. **Add more base pairs.** Change the rung step from `6` to `3` in `range(0, points + 1, 6)`. You'll know it worked when the ladder has twice as many gray rungs.

3. **Squash the molecule.** Change `amp = 70` to `amp = 35`. You'll know it worked when the helix becomes a narrow ribbon through the middle of the canvas.

4. **Try a quarter twist.** Change `offset = math.pi` to `offset = math.pi / 2`. You'll know it worked when the strands still weave but the rungs never quite shrink to zero — a 90° offset never lets the strands meet.

!!! mascot-celebration "You Cracked the Code!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Two sine waves, one phase shift, a few gray rungs — and the most
    famous molecule in biology appears on your screen.
    Up next: **Topographic Map** — paint an island's elevation with
    wobbly contour rings, from green shores to a snowy white peak.
