---
hide:
    - toc
---
# Reaction-Diffusion Pattern

By the end of this lab you'll be able to:

- Store a grid of numbers in a flat Python list and index it with `i * w + j`
- Update every cell from its neighbors using a Laplacian (diffusion) stencil
- Explain how spots and stripes on animal skins emerge from two simple local rules

Two invisible chemicals, U and V, spread across a 32×32 grid. U feeds V, V eats U, and both diffuse to their neighbors. From four small seed squares, 300 simulation steps grow organic blobs and worm-like stripes — the same Gray-Scott mathematics believed to paint leopard spots and zebra stripes.

!!! mascot-welcome "Welcome to Reaction-Diffusion!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    No shapes are drawn in this program — the pattern *grows itself* from
    chemistry rules, one neighbor at a time. This is real computational science!
    Be patient when you click Run: 300 steps of simulation take a little while.

## How It Works

Each cell holds two numbers: `u` (food) and `v` (creature). Every step, each cell looks at its 8 neighbors to compute a **Laplacian** — a measure of "how different am I from my surroundings" — which makes both chemicals spread. Then the reaction happens: `u * v * v` converts food into creature, `feed` tops up the food, and `kill` removes creature. After all the steps, each cell is painted as one dot colored by how much `v` it contains.

## Sample Code

```python
w = 32
u = [1.0] * (w * w)
v = [0.0] * (w * w)

for step in range(300):
    u2 = u[:]
    v2 = v[:]
    for i in range(1, w - 1):
        for j in range(1, w - 1):
            p = i * w + j
            lapu = neighbor_average(u, p) - u[p]
            lapv = neighbor_average(v, p) - v[p]
            uvv = u[p] * v[p] * v[p]
            u2[p] = u[p] + du * lapu - uvv + feed * (1 - u[p])
            v2[p] = v[p] + dv * lapv + uvv - (feed + kill) * v[p]
    u = u2
    v = v2
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The simulation starts with just **4 small squares** of chemical V.
    After 300 steps, will the picture still show 4 separate squares,
    or something else? Make your guess, then click Run (and give it a moment)!

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

w = 32
feed = 0.055
kill = 0.062
du = 0.5
dv = 0.25
steps = 300

u = [1.0] * (w * w)
v = [0.0] * (w * w)

seeds = [[8, 8], [20, 10], [14, 21], [24, 24]]
for s in seeds:
    for i in range(s[0], s[0] + 4):
        for j in range(s[1], s[1] + 4):
            v[i * w + j] = 1.0

for step in range(steps):
    u2 = u[:]
    v2 = v[:]
    for i in range(1, w - 1):
        for j in range(1, w - 1):
            p = i * w + j
            uc = u[p]
            vc = v[p]
            lapu = (u[p-1] + u[p+1] + u[p-w] + u[p+w]) * 0.2 + (u[p-w-1] + u[p-w+1] + u[p+w-1] + u[p+w+1]) * 0.05 - uc
            lapv = (v[p-1] + v[p+1] + v[p-w] + v[p+w]) * 0.2 + (v[p-w-1] + v[p-w+1] + v[p+w-1] + v[p+w+1]) * 0.05 - vc
            uvv = uc * vc * vc
            u2[p] = uc + du * lapu - uvv + feed * (1 - uc)
            v2[p] = vc + dv * lapv + uvv - (feed + kill) * vc
    u = u2
    v = v2

screen = turtle.Screen()
screen.tracer(0)
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

colors = ['midnightblue', 'darkslateblue', 'teal', 'mediumseagreen', 'gold', 'lightyellow']
cell = 10
half = w * cell / 2
for i in range(w):
    for j in range(w):
        level = int(v[i * w + j] * 8)
        if level > 5:
            level = 5
        monty.goto(j * cell - half + 5, half - i * cell - 5)
        monty.dot(14, colors[level])
screen.update()`);
</script>

The four squares are long gone — they melted, spread, and merged into curling organic blobs. That's emergence: no line of code says "draw a worm shape", yet worms appear. Were you right?

## How It Works

The Laplacian stencil weights the 4 edge neighbors by 0.2 and the 4 corner neighbors by 0.05 — a smoothed average of the surroundings minus the cell itself. Two details matter enormously: the update writes into **copies** (`u2`, `v2`) so every cell sees the same "before" picture, and V diffuses at **half** the speed of U (`dv = 0.25` vs `du = 0.5`). That difference in diffusion speed is exactly what Alan Turing showed in 1952 could destabilize a uniform mixture into spots and stripes.

## Explanation Table

| Line | What it does |
|------|-------------|
| `p = i * w + j` | Finds cell (i, j) inside the flat list |
| `lapu = (...) * 0.2 + (...) * 0.05 - uc` | Diffusion: 8-neighbor weighted average minus self |
| `uvv = uc * vc * vc` | The reaction: U + 2V → 3V |
| `u2[p] = uc + ...` | Writes to a copy so all cells update together |

## Learning Check

!!! mascot-thinking "Your Turn — Catch the Pattern Mid-Growth"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This copy is set to stop after only `steps = 60`.
    Predict what you'll see: finished blobs, four fuzzy squares, or nothing at all?
    Run it, compare with the 300-step picture above, then try 150 and 600!

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

w = 32
feed = 0.055
kill = 0.062
du = 0.5
dv = 0.25
steps = 60

u = [1.0] * (w * w)
v = [0.0] * (w * w)

seeds = [[8, 8], [20, 10], [14, 21], [24, 24]]
for s in seeds:
    for i in range(s[0], s[0] + 4):
        for j in range(s[1], s[1] + 4):
            v[i * w + j] = 1.0

for step in range(steps):
    u2 = u[:]
    v2 = v[:]
    for i in range(1, w - 1):
        for j in range(1, w - 1):
            p = i * w + j
            uc = u[p]
            vc = v[p]
            lapu = (u[p-1] + u[p+1] + u[p-w] + u[p+w]) * 0.2 + (u[p-w-1] + u[p-w+1] + u[p+w-1] + u[p+w+1]) * 0.05 - uc
            lapv = (v[p-1] + v[p+1] + v[p-w] + v[p+w]) * 0.2 + (v[p-w-1] + v[p-w+1] + v[p+w-1] + v[p+w+1]) * 0.05 - vc
            uvv = uc * vc * vc
            u2[p] = uc + du * lapu - uvv + feed * (1 - uc)
            v2[p] = vc + dv * lapv + uvv - (feed + kill) * vc
    u = u2
    v = v2

screen = turtle.Screen()
screen.tracer(0)
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

colors = ['midnightblue', 'darkslateblue', 'teal', 'mediumseagreen', 'gold', 'lightyellow']
cell = 10
half = w * cell / 2
for i in range(w):
    for j in range(w):
        level = int(v[i * w + j] * 8)
        if level > 5:
            level = 5
        monty.goto(j * cell - half + 5, half - i * cell - 5)
        monty.dot(14, colors[level])
screen.update()`);
</script>

At 60 steps the four seeds have only just started dissolving into rings — the pattern is still recognizably "four squares melting". Emergence takes time: the interesting structure appears somewhere between 150 and 300 steps.

## Experiments

1. **Change the recipe.** Try `kill = 0.065` (coral growth) or `feed = 0.035, kill = 0.060` (solitons). You'll know it worked when the blob shapes change character completely.

2. **One seed only.** Delete three of the four seeds. You'll know it worked when a single blob grows rings outward like a tiny coral colony.

3. **New color scheme.** Replace the color list with reds and oranges for a lava-skin look. You'll know it worked when the pattern glows warm instead of ocean-cool.

4. **Bigger canvas, coarser grid.** Try `w = 24` with `cell = 14` and `steps = 400`. You'll know it worked when the pattern is chunkier but evolves further in the same run time.

!!! mascot-celebration "You Simulated Nature!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    A grid, two chemicals, and neighbor math — and your program grew patterns
    no one drew. Alan Turing dreamed this up in 1952; you just ran it in a browser.
    You've reached the end of the gallery — browse the **Turtle Graphics Gallery**
    for your next challenge!
