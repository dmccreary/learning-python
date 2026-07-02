---
hide:
    - toc
---
# Pinwheel Tiling

By the end of this lab you'll be able to:

- Store a triangle as three corner points and split it using vertex arithmetic
- Use recursion-style repeated subdivision to turn 4 triangles into 500
- Color shapes by their orientation using `atan2`

The pinwheel tiling, discovered by Charles Radin and John Conway, is built from a single humble shape: a right triangle with legs 1 and 2 (and hypotenuse √5). Every triangle splits into 5 smaller copies of itself, those split into 5 more, and so on forever. The amazing part: as you keep splitting, the triangles end up pointing in infinitely many different directions — the pattern never settles into a repeating wallpaper.

!!! mascot-welcome "Welcome to the Pinwheel!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    One triangle shape. One splitting rule. Apply it again and again
    and you get a tiling that mathematicians proved NEVER repeats.
    Let's build three rounds of it right now!

## How It Works

Each triangle is stored as three corner points `[a, b, c]` with the right angle at `b`. The `subdivide` function finds the point `h` that sits 80% of the way along the hypotenuse from `a` to `c`, plus three midpoints — and uses them to cut the triangle into exactly 5 smaller 1:2 right triangles. We run subdivision 3 times on 4 starting triangles, then fill each little triangle with a color chosen from the direction it points.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def mid(p, q):
    return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]

def subdivide(tri):
    a, b, c = tri
    h = [a[0] + 0.8 * (c[0] - a[0]), a[1] + 0.8 * (c[1] - a[1])]
    m1 = mid(a, h)
    m2 = mid(h, b)
    m3 = mid(a, b)
    return [[b, h, c], [a, m1, m3], [m1, h, m2], [m3, m2, b], [m2, m3, m1]]

levels = 3
tris = [[[-190, -190], [190, -190], [190, 0]],
        [[190, 0], [-190, 0], [-190, -190]],
        [[190, 0], [-190, 0], [-190, 190]],
        [[-190, 190], [190, 190], [190, 0]]]
for level in range(levels):
    new = []
    for t in tris:
        new.extend(subdivide(t))
    tris = new
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    We start with 4 big triangles, and every round of subdivision replaces
    each triangle with 5 smaller ones. After 3 rounds, how many little
    triangles will be on screen? (Hint: 4 × 5 × 5 × 5.) Guess, then run it!

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

def mid(p, q):
    return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]

def subdivide(tri):
    a, b, c = tri
    h = [a[0] + 0.8 * (c[0] - a[0]), a[1] + 0.8 * (c[1] - a[1])]
    m1 = mid(a, h)
    m2 = mid(h, b)
    m3 = mid(a, b)
    return [[b, h, c], [a, m1, m3], [m1, h, m2], [m3, m2, b], [m2, m3, m1]]

levels = 3
tris = [[[-190, -190], [190, -190], [190, 0]],
        [[190, 0], [-190, 0], [-190, -190]],
        [[190, 0], [-190, 0], [-190, 190]],
        [[-190, 190], [190, 190], [190, 0]]]
for level in range(levels):
    new = []
    for t in tris:
        new.extend(subdivide(t))
    tris = new

colors = ['gold', 'coral', 'mediumseagreen', 'royalblue', 'orchid', 'turquoise']
monty.pencolor('black')
monty.pensize(1)
for t in tris:
    a, b, c = t
    ang = math.degrees(math.atan2(a[1] - b[1], a[0] - b[0]))
    idx = int(round(ang)) % 360
    monty.fillcolor(colors[(idx // 60) % 6])
    monty.penup()
    monty.goto(a[0], a[1])
    monty.pendown()
    monty.begin_fill()
    monty.goto(b[0], b[1])
    monty.goto(c[0], c[1])
    monty.goto(a[0], a[1])
    monty.end_fill()`);
</script>

**500 triangles** — 4 × 5³. Were you right? Notice how the top half (built from mirrored starting triangles) even picks up different colors, because its triangles point in different directions.

## How It Works

The key to the subdivision is the point `h`, the foot of the altitude dropped from the right-angle corner `b` onto the hypotenuse. For a 1:2 right triangle, `h` always sits exactly 80% of the way from `a` to `c` — that single fact splits off one perfect small copy (`[b, h, c]`). The leftover piece is a double-size copy, which the three midpoints slice into 4 more. Because the small copies are tilted by the odd angle `atan(1/2) ≈ 26.57°` (not a "nice" divisor of 360°), repeated subdivision keeps creating brand-new directions — that's what makes the pinwheel tiling aperiodic.

## Explanation Table

| Line | What it does |
|------|-------------|
| `h = [a[0] + 0.8 * (c[0] - a[0]), ...]` | Finds the split point 80% along the hypotenuse |
| `return [[b, h, c], ...]` | Replaces one triangle with its 5 smaller copies |
| `new.extend(subdivide(t))` | Collects all the pieces from this round of splitting |
| `ang = math.degrees(math.atan2(...))` | Measures which direction a triangle points, for coloring |

## Learning Check

!!! mascot-thinking "Your Turn — Go One Level Deeper"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This version starts from just ONE big triangle and subdivides only
    `levels = 2` times, so you can see the 5-way split clearly.
    Change it to `levels = 3`. How many triangles will 1 × 5 × 5 × 5 give you?

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

def mid(p, q):
    return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]

def subdivide(tri):
    a, b, c = tri
    h = [a[0] + 0.8 * (c[0] - a[0]), a[1] + 0.8 * (c[1] - a[1])]
    m1 = mid(a, h)
    m2 = mid(h, b)
    m3 = mid(a, b)
    return [[b, h, c], [a, m1, m3], [m1, h, m2], [m3, m2, b], [m2, m3, m1]]

levels = 2
tris = [[[-180, -110], [180, -110], [180, 70]]]
for level in range(levels):
    new = []
    for t in tris:
        new.extend(subdivide(t))
    tris = new

colors = ['gold', 'coral', 'mediumseagreen', 'royalblue', 'orchid', 'turquoise']
monty.pencolor('black')
monty.pensize(1)
for t in tris:
    a, b, c = t
    ang = math.degrees(math.atan2(a[1] - b[1], a[0] - b[0]))
    idx = int(round(ang)) % 360
    monty.fillcolor(colors[(idx // 60) % 6])
    monty.penup()
    monty.goto(a[0], a[1])
    monty.pendown()
    monty.begin_fill()
    monty.goto(b[0], b[1])
    monty.goto(c[0], c[1])
    monty.goto(a[0], a[1])
    monty.end_fill()`);
</script>

`levels = 3` gives **125 triangles** (5 × 5 × 5). Each extra level multiplies the count by 5 and shrinks every side by a factor of √5.

## Experiments

1. **Zoom back out.** In the first lab, change `levels = 3` to `levels = 2`. You'll know it worked when only 100 chunky triangles fill the square and you can trace each 5-way split by eye.

2. **New paint set.** Replace `'gold'` with `'crimson'` and `'royalblue'` with `'midnightblue'`. You'll know it worked when those colors swap everywhere in the mosaic at once.

3. **Finer color buckets.** Change `(idx // 60) % 6` to `(idx // 30) % 6`. You'll know it worked when neighboring triangles that used to share a color split into different ones — you're now sorting directions into 30° bins.

4. **Half the sky.** Delete the last two starting triangles from the `tris` list. You'll know it worked when only the bottom rectangle is tiled and the top half of the canvas stays white.

!!! mascot-celebration "Five Copies, Forever!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built a genuinely aperiodic tiling — 500 triangles from one
    splitting rule and a little vertex arithmetic. Mathematicians needed
    the 1990s to find this one; you drew it in a browser!
    Up next: **Escher-Style Fish Tile** — shape a fish so perfectly that copies of it lock together with no gaps.
