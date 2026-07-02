---
hide:
    - toc
---
# Penrose Rhombus Tiling

By the end of this lab you'll be able to:

- Use complex numbers as 2D points to do geometry with plain arithmetic
- Apply two recursive subdivision rules (thin → 2 pieces, thick → 3 pieces)
- Explain why the golden ratio makes this tiling never repeat

In the 1970s, Roger Penrose discovered two rhombus shapes — one thick, one thin — that can tile a floor forever without the pattern ever repeating. This program builds his famous P3 tiling by "deflation": start with a sun of 10 golden triangles around the center, then repeatedly split every triangle into smaller golden triangles using the golden ratio φ ≈ 1.618. Four rounds later, gold and blue rhombi bloom into stars and suns across the whole canvas.

!!! mascot-welcome "Welcome to the Tiling That Never Repeats!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Two rhombus shapes, two splitting rules, one magic number: φ.
    Slide this pattern in any direction and it will NEVER line up
    with itself. Let's grow it from ten triangles!

## How It Works

Every triangle is stored as `[kind, a, b, c]` where the corners are complex numbers — `complex(x, y)` acts like a 2D point, and `a + (b - a) / phi` finds the point that cuts side `ab` in the golden ratio. A *thin* half-rhombus splits into 2 smaller triangles; a *thick* one splits into 3. After subdividing 4 times, we fill each triangle (thick = gold, thin = royal blue) and then trace only the two outer edges `c → a → b`, so each pair of triangles displays as one complete rhombus.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

phi = (1 + math.sqrt(5)) / 2

triangles = []
for i in range(10):
    a1 = (2 * i - 1) * math.pi / 10
    a2 = (2 * i + 1) * math.pi / 10
    b = complex(math.cos(a1), math.sin(a1)) * 195
    c = complex(math.cos(a2), math.sin(a2)) * 195
    if i % 2 == 0:
        b, c = c, b
    triangles.append(['thin', complex(0, 0), b, c])

levels = 4
for level in range(levels):
    new = []
    for kind, a, b, c in triangles:
        if kind == 'thin':
            p = a + (b - a) / phi
            new.append(['thin', c, p, b])
            new.append(['thick', p, c, a])
        else:
            q = b + (a - b) / phi
            r = b + (c - b) / phi
            new.append(['thick', r, c, a])
            new.append(['thick', q, r, b])
            new.append(['thin', r, q, a])
    triangles = new
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Every round, each thin triangle becomes 2 pieces but each thick one
    becomes 3. After 4 rounds of that, which color do you think will cover
    more of the picture — gold (thick) or royal blue (thin)? Guess, then run!

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

phi = (1 + math.sqrt(5)) / 2

triangles = []
for i in range(10):
    a1 = (2 * i - 1) * math.pi / 10
    a2 = (2 * i + 1) * math.pi / 10
    b = complex(math.cos(a1), math.sin(a1)) * 195
    c = complex(math.cos(a2), math.sin(a2)) * 195
    if i % 2 == 0:
        b, c = c, b
    triangles.append(['thin', complex(0, 0), b, c])

levels = 4
for level in range(levels):
    new = []
    for kind, a, b, c in triangles:
        if kind == 'thin':
            p = a + (b - a) / phi
            new.append(['thin', c, p, b])
            new.append(['thick', p, c, a])
        else:
            q = b + (a - b) / phi
            r = b + (c - b) / phi
            new.append(['thick', r, c, a])
            new.append(['thick', q, r, b])
            new.append(['thin', r, q, a])
    triangles = new

for kind, a, b, c in triangles:
    if kind == 'thin':
        monty.fillcolor('royalblue')
    else:
        monty.fillcolor('gold')
    monty.penup()
    monty.goto(a.real, a.imag)
    monty.begin_fill()
    monty.goto(b.real, b.imag)
    monty.goto(c.real, c.imag)
    monty.goto(a.real, a.imag)
    monty.end_fill()

monty.pencolor('#333333')
monty.pensize(1)
for kind, a, b, c in triangles:
    monty.penup()
    monty.goto(c.real, c.imag)
    monty.pendown()
    monty.goto(a.real, a.imag)
    monty.goto(b.real, b.imag)`);
</script>

**Gold wins.** After 4 rounds there are 210 thick half-rhombi and only 130 thin ones — and each thick rhombus is fatter too. (Fun fact: the thick-to-thin ratio approaches exactly φ as you keep subdividing.) Were you right?

## How It Works

The two triangle kinds are the halves of Penrose's two rhombi: the thin rhombus (36° corners) and the thick rhombus (72° corners). Golden-ratio cuts like `a + (b - a) / phi` split each one into perfect smaller copies — that only works because a golden triangle's sides are in ratio φ : φ : 1. Because φ is irrational, the numbers of thick and thin tiles can never settle into a neat whole-number ratio, so no shifted copy of the pattern can ever match itself: the tiling is aperiodic. Notice the 5-fold symmetry everywhere — the "forbidden symmetry" that ordinary repeating wallpapers can't have. When scientists found this same 5-fold pattern frozen in a metal alloy in 1982 (they named them quasicrystals), it won Dan Shechtman the Nobel Prize.

## Explanation Table

| Line | What it does |
|------|-------------|
| `phi = (1 + math.sqrt(5)) / 2` | The golden ratio, 1.618... — the engine of the whole tiling |
| `b = complex(math.cos(a1), math.sin(a1)) * 195` | Places a corner on a circle using a complex number as an (x, y) point |
| `p = a + (b - a) / phi` | Cuts the side `ab` at the golden ratio point |
| `new.append(['thick', p, c, a])` | Adds one of the smaller triangles that replaces the old one |

## Learning Check

!!! mascot-thinking "Your Turn — Deflate Deeper"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This version stops at `levels = 2`, so you can still see the ten big
    wedges of the starting sun. Change it to `levels = 4`.
    Each round shrinks the rhombi by a factor of φ — will the pattern
    at the center still look like a sun when you're done?

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

phi = (1 + math.sqrt(5)) / 2

triangles = []
for i in range(10):
    a1 = (2 * i - 1) * math.pi / 10
    a2 = (2 * i + 1) * math.pi / 10
    b = complex(math.cos(a1), math.sin(a1)) * 195
    c = complex(math.cos(a2), math.sin(a2)) * 195
    if i % 2 == 0:
        b, c = c, b
    triangles.append(['thin', complex(0, 0), b, c])

levels = 2
for level in range(levels):
    new = []
    for kind, a, b, c in triangles:
        if kind == 'thin':
            p = a + (b - a) / phi
            new.append(['thin', c, p, b])
            new.append(['thick', p, c, a])
        else:
            q = b + (a - b) / phi
            r = b + (c - b) / phi
            new.append(['thick', r, c, a])
            new.append(['thick', q, r, b])
            new.append(['thin', r, q, a])
    triangles = new

for kind, a, b, c in triangles:
    if kind == 'thin':
        monty.fillcolor('royalblue')
    else:
        monty.fillcolor('gold')
    monty.penup()
    monty.goto(a.real, a.imag)
    monty.begin_fill()
    monty.goto(b.real, b.imag)
    monty.goto(c.real, c.imag)
    monty.goto(a.real, a.imag)
    monty.end_fill()

monty.pencolor('#333333')
monty.pensize(1)
for kind, a, b, c in triangles:
    monty.penup()
    monty.goto(c.real, c.imag)
    monty.pendown()
    monty.goto(a.real, a.imag)
    monty.goto(b.real, b.imag)`);
</script>

Yes — a smaller sun of ten gold rhombi survives at the very center, now ringed by blue stars. Deflation shrinks the pattern but the sun motif keeps reappearing at every scale.

## Experiments

1. **One more round.** In the first lab, change `levels = 4` to `levels = 5` (give it a few seconds — that's 890 triangles). You'll know it worked when the rhombi shrink again and new five-pointed stars appear that weren't visible before.

2. **Night mode.** Swap the colors: make thin `'gold'` and thick `'midnightblue'`. You'll know it worked when the tiling flips to mostly dark with golden star outlines.

3. **Show the hidden triangles.** In the edge-drawing loop at the bottom, add `monty.goto(c.real, c.imag)` as a final line inside the loop. You'll know it worked when a seam appears across each rhombus, revealing the two triangles it is really made of.

4. **Shrink the sun.** Change both `* 195` to `* 120`. You'll know it worked when the whole decagon pulls toward the center with white space around it.

!!! mascot-celebration "Forbidden Symmetry Unlocked!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Two shapes, two rules, and the golden ratio — and you drew a pattern
    that never repeats, with the 5-fold symmetry crystals were never
    supposed to have. Penrose proved it; you programmed it!
    Browse the **Turtle Graphics Gallery** for your next challenge!
