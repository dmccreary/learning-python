---
hide:
    - toc
---
# Fermat's Spiral

By the end of this lab you'll be able to:

- Plot Fermat's spiral `r = k * sqrt(theta)` using `math.sqrt`
- Explain why square-root growth makes the rings get closer together as they go out
- Use the `±` sign to draw two mirrored arms from one equation

Fermat's spiral grows with the *square root* of the angle, so each new ring is packed a little tighter than the last — unlike the evenly-spaced Archimedean spiral. And because the equation is really `r = ±k*sqrt(θ)`, it has *two* arms: a plus arm and a minus arm, winding out of the origin in perfect 180° symmetry.

!!! mascot-welcome "Welcome to Fermat's Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Pierre de Fermat studied this spiral in 1636 — and nature loved it first!
    Sunflower seed heads pack their seeds along Fermat spirals.
    One square root, two graceful arms. Let's draw it!

## How It Works

For each angle `theta` from 0 to 8π (four full turns), compute `r = k * math.sqrt(theta)`, then convert to `x = r * cos(theta)` and `y = r * sin(theta)`. That draws the *plus* arm. Then repeat with `r = -k * math.sqrt(theta)`: a negative radius places each point on the exact opposite side of the origin, producing a second arm that is the 180° mirror of the first.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

k = 35
steps = 600
arms = [[1, 'crimson'], [-1, 'royalblue']]

monty.pensize(2)
for arm in arms:
    sign = arm[0]
    monty.pencolor(arm[1])
    monty.penup()
    for i in range(steps + 1):
        theta = 8 * math.pi * i / steps
        r = sign * k * math.sqrt(theta)
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `theta` runs from 0 to `8 * math.pi`, and one full turn is `2 * math.pi`.
    How many complete times will each arm wind around the center?
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

k = 35
steps = 600
arms = [[1, 'crimson'], [-1, 'royalblue']]

monty.pensize(2)
for arm in arms:
    sign = arm[0]
    monty.pencolor(arm[1])
    monty.penup()
    for i in range(steps + 1):
        theta = 8 * math.pi * i / steps
        r = sign * k * math.sqrt(theta)
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)`);
</script>

**4 turns** — `8π / 2π = 4` full trips around the center for each arm. Were you right?

## How It Works

Look closely at the ring spacing: near the center the gap between one turn and the next is wide, but each ring farther out is a bit closer to the one before it. That is the square root at work. After 1 turn the radius is proportional to `sqrt(2π)`; after 4 turns it is only `sqrt(8π)` — twice as big, not four times. Growth keeps slowing, so the rings crowd together. The minus arm works because a negative `r` times `cos` and `sin` flips both `x` and `y`, rotating every point exactly 180° around the origin — one sign, a perfect mirror.

## Explanation Table

| Line | What it does |
|------|-------------|
| `r = sign * k * math.sqrt(theta)` | Fermat's rule: radius grows with the square root of the angle |
| `arms = [[1, 'crimson'], [-1, 'royalblue']]` | The `±`: sign `+1` and sign `-1` give the two mirrored arms |
| `theta = 8 * math.pi * i / steps` | Sweep the angle over four full turns |
| `x = r * math.cos(theta)` | Polar to Cartesian; a negative `r` lands 180° across the origin |

## Learning Check

!!! mascot-thinking "Your Turn — Add the Second Arm"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below only draws the crimson *plus* arm — the `arms` list has a
    single entry. Add **one list entry** so the royalblue *minus* arm appears too.
    Where will the blue arm start relative to the red one?

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

k = 35
steps = 600
arms = [[1, 'crimson']]

monty.pensize(2)
for arm in arms:
    sign = arm[0]
    monty.pencolor(arm[1])
    monty.penup()
    for i in range(steps + 1):
        theta = 8 * math.pi * i / steps
        r = sign * k * math.sqrt(theta)
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        if i == 0:
            monty.goto(x, y)
            monty.pendown()
        else:
            monty.goto(x, y)`);
</script>

Change the list to `arms = [[1, 'crimson'], [-1, 'royalblue']]` — the blue arm starts at the same origin but winds out on the opposite side, weaving perfectly between the red rings.

## Experiments

1. **Wind farther out.** Change `8 * math.pi` to `18 * math.pi` and `k = 35` to `k = 24`. You'll know it worked when each arm makes 9 turns and the outer rings look almost evenly packed.

2. **Break the square root.** Change `math.sqrt(theta)` to just `theta` and set `k = 7`. You'll know it worked when the rings become evenly spaced — you've turned Fermat's spiral into an Archimedean spiral.

3. **Grow faster instead.** Try `r = sign * 1.2 * theta ** 1.5` (and keep 8π). You'll know it worked when the gaps *widen* outward — the opposite of Fermat.

4. **Sunflower dots.** Delete the `if i == 0:` block, keep the pen up the whole time, and after computing `x` and `y` call `monty.goto(x, y)` then `monty.dot(5)`. You'll know it worked when the arms become strings of seeds like a sunflower head.

!!! mascot-celebration "Spiral Scientist!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Square-root growth, a ± sign, and polar coordinates — you drew a 400-year-old
    curve that sunflowers have been growing all along.
    Up next: **Astroid** — a four-pointed star hiding inside a family of sliding line segments.
