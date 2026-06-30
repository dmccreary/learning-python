---
hide:
    - toc
---
# Bridget Riley Waves

By the end of this lab you'll be able to:

- Draw a series of parallel sine wave curves with varying amplitude
- Create a visual illusion of a rippling surface using only static lines
- Control the wave shape with frequency and amplitude parameters

Inspired by Op Art painter Bridget Riley, this pattern draws rows of black undulating sine curves on a white background. The varying amplitude makes some parts of the canvas appear to bulge and recede.

!!! mascot-welcome "Welcome to Bridget Riley Waves!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Bridget Riley is a British artist who creates patterns that seem to move.
    Her 1960s paintings use only black and white, yet they appear to vibrate!
    Let's code her wave patterns!

## How It Works

Draw many horizontal sine curves at evenly spaced y positions. Each curve has the same x-frequency. The amplitude of each curve varies — largest in the center, tapering toward the edges. This creates the illusion of a bulging or rippling surface.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_waves = 18
wave_width = 320
freq = 3
max_amp = 20
y_spacing = 16

monty.pensize(1)
monty.pencolor('black')

for row in range(n_waves):
    center_distance = abs(row - n_waves / 2) / (n_waves / 2)
    amp = max_amp * (1 - center_distance ** 2)
    y_base = (row - n_waves / 2) * y_spacing
    steps = 200
    monty.penup()
    for i in range(steps + 1):
        x = -wave_width / 2 + wave_width * i / steps
        y = y_base + amp * math.sin(freq * 2 * math.pi * i / steps)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)
    monty.penup()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The center rows have larger amplitude than the edge rows.
    Will this create a flat pattern, or will the center appear to bulge outward?
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
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

n_waves = 18
wave_width = 320
freq = 3
max_amp = 20
y_spacing = 16

monty.pensize(1)
monty.pencolor('black')

for row in range(n_waves):
    center_distance = abs(row - n_waves / 2) / (n_waves / 2)
    amp = max_amp * (1 - center_distance ** 2)
    y_base = (row - n_waves / 2) * y_spacing
    steps = 200
    monty.penup()
    for i in range(steps + 1):
        x = -wave_width / 2 + wave_width * i / steps
        y = y_base + amp * math.sin(freq * 2 * math.pi * i / steps)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)
    monty.penup()`);
</script>

The center **appears to bulge** — the larger amplitude waves in the middle create the illusion of a 3D surface. Were you right?

## How It Works

`center_distance = abs(row - n_waves/2) / (n_waves/2)` ranges from 0 (center) to 1 (edges). The amplitude `max_amp * (1 - center_distance^2)` follows a parabolic shape — maximum at center, tapering to near-zero at edges. This gradient creates the bulge illusion.

## Explanation Table

| Line | What it does |
|------|-------------|
| `center_distance` | How far this row is from center (0=center, 1=edge) |
| `amp = max_amp * (1 - center_distance^2)` | Parabolic amplitude — large center, small edges |
| `amp * math.sin(freq * 2 * pi * i / steps)` | Sine wave at this row's amplitude |
| `freq = 3` | Number of complete wave cycles per row |

## Learning Check

!!! mascot-thinking "Your Turn — Try More Waves"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `n_waves = 18` to `n_waves = 30` and `freq = 5`.
    More waves with higher frequency — will the illusion be stronger or different?
    Predict, then run it!

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

n_waves = 30
wave_width = 320
freq = 5
max_amp = 14
y_spacing = 10

monty.pensize(1)
monty.pencolor('black')

for row in range(n_waves):
    center_distance = abs(row - n_waves / 2) / (n_waves / 2)
    amp = max_amp * (1 - center_distance ** 2)
    y_base = (row - n_waves / 2) * y_spacing
    steps = 200
    monty.penup()
    for i in range(steps + 1):
        x = -wave_width / 2 + wave_width * i / steps
        y = y_base + amp * math.sin(freq * 2 * math.pi * i / steps)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)
    monty.penup()`);
</script>

More waves and higher frequency creates a denser, more vibrating appearance — very much like Riley's original paintings.

## Experiments

1. **Use a linear amplitude instead of parabolic.** Change to `amp = max_amp * (1 - center_distance)`. You'll know it worked when the amplitude tapers linearly rather than parabolically.

2. **Add phase shifts.** Add `+ row * 0.2` to the sine argument. You'll know it worked when the waves shift diagonally instead of perfectly aligned.

3. **Vary the frequency.** Use `freq = 2 + row / 3` so inner rows have higher frequency. You'll know it worked when the wave frequency changes from row to row.

4. **Use two colors.** Fill areas above the wave with black and below with white. You'll know it worked when alternating black and white bands appear.

!!! mascot-celebration "Vibrating with Math!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You coded Op Art inspired by Bridget Riley!
    These patterns were designed in the 1960s using ruler and compass — now you can code them.
    Up next: **Expanding Hexagons** — concentric hexagonal rings.
