---
hide:
    - toc
---
# Galaxy Spiral Arms

By the end of this lab you'll be able to:

- Model galaxy spiral arms using logarithmic spirals offset by 180°
- Scatter star dots along spiral arms with random offsets
- Use different dot sizes and colors to simulate star brightness

A two-armed spiral galaxy with scattered star dots forming the arms, a dense central bulge, and background stars. The arms follow logarithmic spirals, just like the Milky Way.

!!! mascot-welcome "Welcome to the Galaxy!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Galaxies like the Milky Way have spiral arms that follow logarithmic curves.
    In this lab you'll build a mini galaxy using that same math!
    Let's code it together!

## How It Works

For each arm, place dots at positions `r = scale * exp(b * theta)` for theta from 0 to 3π. The second arm is offset by π (180°). Each star dot gets a random scatter from its ideal position. The center bulge is a dense cluster of dots at small radii.

## Sample Code

```python
import turtle
import math
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(42)

b = 0.25
arm_colors = ['white', 'lightyellow']

for arm in range(2):
    offset = arm * math.pi
    for i in range(300):
        theta = i * math.pi * 3 / 300
        r = 12 * math.exp(b * theta)
        angle = theta + offset
        scatter = random.gauss(0, 4)
        x = (r + scatter) * math.cos(angle)
        y = (r + scatter) * math.sin(angle)
        monty.penup()
        monty.goto(x, y)
        size = random.choice([2, 2, 2, 3, 4])
        monty.dot(size, arm_colors[arm])

for _ in range(200):
    r = random.gauss(0, 20)
    a = random.uniform(0, 2 * math.pi)
    monty.penup()
    monty.goto(r * math.cos(a), r * math.sin(a))
    monty.dot(random.choice([2, 3, 4]), 'white')

for _ in range(80):
    x = random.uniform(-180, 180)
    y = random.uniform(-140, 140)
    monty.penup()
    monty.goto(x, y)
    monty.dot(1, 'lightgray')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each arm has 300 dots scattered around a logarithmic spiral.
    Will the arms look like tight curves or spread-out clouds of stars?
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
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(42)

b = 0.25
arm_colors = ['white', 'lightyellow']

for arm in range(2):
    offset = arm * math.pi
    for i in range(300):
        theta = i * math.pi * 3 / 300
        r = 12 * math.exp(b * theta)
        angle = theta + offset
        scatter = random.gauss(0, 4)
        x = (r + scatter) * math.cos(angle)
        y = (r + scatter) * math.sin(angle)
        monty.penup()
        monty.goto(x, y)
        size = random.choice([2, 2, 2, 3, 4])
        monty.dot(size, arm_colors[arm])

for _ in range(200):
    r = random.gauss(0, 20)
    a = random.uniform(0, 2 * math.pi)
    monty.penup()
    monty.goto(r * math.cos(a), r * math.sin(a))
    monty.dot(random.choice([2, 3, 4]), 'white')

for _ in range(80):
    x = random.uniform(-180, 180)
    y = random.uniform(-140, 140)
    monty.penup()
    monty.goto(x, y)
    monty.dot(1, 'lightgray')`);
</script>

**Spread-out clouds** — the Gaussian scatter makes the arms look like fuzzy bands rather than thin lines, just like real galaxy photos. Were you right?

## How It Works

`random.gauss(0, 4)` adds Gaussian (bell-curve) random scatter. Most stars are near the ideal spiral, but a few stray far. The central bulge uses `random.gauss(0, 20)` — a tighter cluster.

## Explanation Table

| Line | What it does |
|------|-------------|
| `b = 0.25` | Spiral tightness parameter |
| `math.exp(b * theta)` | Logarithmic spiral — grows exponentially |
| `offset = arm * math.pi` | Rotate second arm by 180° |
| `random.gauss(0, 4)` | Gaussian scatter around the spiral path |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Third Arm"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `range(2)` to `range(3)` and `offset = arm * math.pi` to `offset = arm * 2 * math.pi / 3`.
    A three-armed galaxy! What angle offset does each arm need?

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
import random
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
random.seed(42)

b = 0.25
arm_colors = ['white', 'lightyellow', 'lightblue']

for arm in range(3):
    offset = arm * 2 * math.pi / 3
    for i in range(300):
        theta = i * math.pi * 3 / 300
        r = 12 * math.exp(b * theta)
        angle = theta + offset
        scatter = random.gauss(0, 4)
        x = (r + scatter) * math.cos(angle)
        y = (r + scatter) * math.sin(angle)
        monty.penup()
        monty.goto(x, y)
        size = random.choice([2, 2, 2, 3, 4])
        monty.dot(size, arm_colors[arm])

for _ in range(200):
    r = random.gauss(0, 20)
    a = random.uniform(0, 2 * math.pi)
    monty.penup()
    monty.goto(r * math.cos(a), r * math.sin(a))
    monty.dot(random.choice([2, 3, 4]), 'white')`);
</script>

Three arms at 120° spacing — like the Triangulum Galaxy, which actually has this structure!

## Experiments

1. **Change the scatter.** Change `random.gauss(0, 4)` to `random.gauss(0, 10)`. You'll know it worked when the arms look fuzzier and more diffuse.

2. **Tighter spiral.** Change `b = 0.25` to `b = 0.4`. You'll know it worked when the arms wind more steeply inward.

3. **Larger galaxy.** Change `12` to `8` and `range(300)` to `range(500)`. You'll know it worked when the arms extend further and have more stars.

4. **Color by distance.** Make inner stars yellow and outer stars blue — hotter stars near the center, cooler at the edge. You'll know it worked when the color gradient follows the arms.

!!! mascot-celebration "You Built a Galaxy!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You modeled spiral galaxy arms with logarithmic spirals and Gaussian scatter!
    Real astrophysicists use the same mathematical models to map the Milky Way.
    Up next: **Ripple Waves** — concentric rings that simulate water ripples.
