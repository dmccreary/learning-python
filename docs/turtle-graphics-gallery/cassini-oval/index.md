---
hide:
    - toc
---
# Cassini Oval

By the end of this lab you'll be able to:

- Plot Cassini ovals — points where the *product* of distances to two foci equals `b * b`
- Use the polar form with a square-root guard to handle values that do not exist
- Watch a single constant `b` change the curve's whole topology: one oval, a figure-eight, or two separate lobes

An ellipse keeps the *sum* of distances to two focus points constant. A Cassini oval keeps the *product* constant instead — and that one change creates a shape-shifting family. Depending on how `b` compares to the focus distance `c`, you get one peanut-shaped oval, a perfect figure-eight (the lemniscate), or two separate egg-shaped lobes.

!!! mascot-welcome "Welcome to the Cassini Oval!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The astronomer Giovanni Cassini thought planets traced these curves.
    He was wrong about the planets — but the curves are amazing:
    nudge one number and a single oval *tears itself into two*!

## How It Works

Pick two foci at `(-c, 0)` and `(c, 0)`. A point belongs to the curve when `distance1 * distance2 = b * b`. In polar coordinates that becomes `r*r = c*c*cos(2*theta) + or - sqrt(c**4 * cos(2*theta)**2 + (b**4 - c**4))`. For each angle we compute the value under the square root first — if it is negative, no point exists at that angle and we simply skip it. Because `r*r` can have two valid answers at one angle, we plot dots for both the `+` and `-` branches instead of dragging a pen line.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

c = 100
steps = 400

def draw_cassini(b, color):
    for i in range(steps):
        theta = 2 * math.pi * i / steps
        cos2 = math.cos(2 * theta)
        disc = c ** 4 * cos2 * cos2 + (b ** 4 - c ** 4)
        if disc < 0:
            continue
        root = math.sqrt(disc)
        for sign in [1, -1]:
            r2 = c * c * cos2 + sign * root
            if r2 > 0:
                r = math.sqrt(r2)
                monty.penup()
                monty.goto(r * math.cos(theta), r * math.sin(theta))
                monty.dot(3, color)

draw_cassini(120, 'royalblue')
draw_cassini(100, 'forestgreen')
draw_cassini(90, 'crimson')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The foci sit at distance `c = 100` from the center, and we draw `b = 120`,
    `b = 100`, and `b = 90`. Which `b` gives the figure-eight: bigger than `c`,
    equal to `c`, or smaller than `c`? Guess, then click Run!

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

c = 100
steps = 400

def draw_cassini(b, color):
    for i in range(steps):
        theta = 2 * math.pi * i / steps
        cos2 = math.cos(2 * theta)
        disc = c ** 4 * cos2 * cos2 + (b ** 4 - c ** 4)
        if disc < 0:
            continue
        root = math.sqrt(disc)
        for sign in [1, -1]:
            r2 = c * c * cos2 + sign * root
            if r2 > 0:
                r = math.sqrt(r2)
                monty.penup()
                monty.goto(r * math.cos(theta), r * math.sin(theta))
                monty.dot(3, color)

draw_cassini(120, 'royalblue')
draw_cassini(100, 'forestgreen')
draw_cassini(90, 'crimson')

monty.penup()
monty.goto(-c, 0)
monty.dot(8, 'black')
monty.goto(c, 0)
monty.dot(8, 'black')

labels = [['b = 120 (one oval)', 'royalblue'], ['b = 100 (figure eight)', 'forestgreen'], ['b = 90 (two lobes)', 'crimson']]
for i in range(3):
    monty.goto(-185, 180 - 16 * i)
    monty.pencolor(labels[i][1])
    monty.write(labels[i][0])`);
</script>

**Equal** — at exactly `b = c` the green curve pinches through the center point, forming the famous figure-eight called the lemniscate of Bernoulli. Were you right?

## How It Works

Think about a point exactly between the two foci (the origin). Its two distances are both `c`, so their product is `c * c`. If the target product `b * b` is bigger than that, the curve has room to pass over the middle and wraps both foci in one blue peanut. If `b * b` is smaller, the middle is out of reach — the curve must stay close to one focus or the other, so it splits into two crimson lobes. At exactly `b = c` the curve *just barely* touches the origin: the figure-eight. One constant crossing one threshold flips the topology from one piece to two.

## Explanation Table

| Line | What it does |
|------|-------------|
| `disc = c ** 4 * cos2 * cos2 + (b ** 4 - c ** 4)` | The value under the square root — negative means no point at this angle |
| `if disc < 0: continue` | The guard: skip angles where the curve does not exist |
| `for sign in [1, -1]:` | Try both the `+` and `-` branches — some angles have two radii |
| `monty.dot(3, color)` | Plot a dot; dots handle curves that split into pieces better than pen lines |

## Learning Check

!!! mascot-thinking "Your Turn — Split the Oval"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws a single purple oval with `b = 130`.
    Change **one number** so the curve splits into two separate lobes.
    Remember the rule you just learned — should `b` end up bigger or smaller than `c = 100`?

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

c = 100
b = 130
steps = 500

for i in range(steps):
    theta = 2 * math.pi * i / steps
    cos2 = math.cos(2 * theta)
    disc = c ** 4 * cos2 * cos2 + (b ** 4 - c ** 4)
    if disc < 0:
        continue
    root = math.sqrt(disc)
    for sign in [1, -1]:
        r2 = c * c * cos2 + sign * root
        if r2 > 0:
            r = math.sqrt(r2)
            monty.penup()
            monty.goto(r * math.cos(theta), r * math.sin(theta))
            monty.dot(3, 'purple')

monty.penup()
monty.goto(-c, 0)
monty.dot(8, 'black')
monty.goto(c, 0)
monty.dot(8, 'black')`);
</script>

Any `b` *smaller* than `c` works — try `b = 80` and the oval tears into two lobes, one hugging each focus.

## Experiments

1. **Sneak up on the split.** Try `b = 101`, then `b = 99`. You'll know it worked when 101 gives one very pinched peanut and 99 gives two lobes joined by almost nothing.

2. **Shrink `b` far below `c`.** Set `b = 60` in the Learning Check program. You'll know it worked when the two lobes become small tight eggs hugging the black focus dots.

3. **Move the foci.** Change `c = 100` to `c = 60` in the main program. You'll know it worked when all three curves become single ovals — with the foci closer together, every `b` is now bigger than `c`, so even the crimson curve wraps around both foci.

4. **Count the existing angles.** Add a counter variable, add 1 each time a dot is drawn for `b = 90`, and `print` it at the end. You'll know it worked when the count printed in the output pane is far less than `steps * 2` — proof the guard skipped the impossible angles.

!!! mascot-celebration "Topology Changer!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You watched one constant crossing a threshold rip a single curve into two pieces —
    mathematicians call that a change in *topology*, and you coded it with one `if` guard.
    Up next: **Fermat's Spiral** — a square root sends two mirrored arms winding out of the origin.
