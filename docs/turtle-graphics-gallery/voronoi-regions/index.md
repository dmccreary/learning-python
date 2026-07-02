---
hide:
    - toc
---
# Voronoi Color Regions

By the end of this lab you'll be able to:

- Use the distance formula `dx*dx + dy*dy` to find the nearest of several points
- Classify every cell of a grid by its nearest seed (nearest-neighbor classification)
- Paint a raster image with a grid of `dot()` calls

Scatter a dozen "seed" points on the canvas, then color every spot on the screen to match whichever seed is closest. The result is a Voronoi diagram — a stained-glass map of territories that shows up everywhere in nature and science: giraffe patches, dragonfly wings, cell walls, even maps of which fire station serves your house. Our program checks a 50×50 grid of cells, one colored dot at a time.

!!! mascot-welcome "Welcome to Territory Mapping!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Twelve seed points are about to carve the whole canvas into twelve
    kingdoms. The only law in this land: you belong to whichever seed
    you're closest to. Distance formula, take it away!

## How It Works

For each cell center `(x, y)` in a 50×50 grid, the program measures the squared distance `dx*dx + dy*dy` to all 12 seeds and remembers which seed was closest. (Squared distance is enough — if `a*a < b*b` for positive lengths, then `a < b` — so we skip the square root and save time.) The cell is then stamped with a `dot()` in the winning seed's color. That's 2,500 dots and 30,000 distance checks, and it's exactly how nearest-neighbor classification works in real machine learning.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

seeds = [
    [-150, 130, 'crimson'],
    [-30, 165, 'darkorange'],
    [110, 150, 'gold'],
    [175, 55, 'yellowgreen'],
    [95, -20, 'forestgreen'],
    [165, -140, 'mediumturquoise'],
    [30, -105, 'deepskyblue'],
    [-70, -165, 'royalblue'],
    [-155, -75, 'mediumorchid'],
    [-175, 40, 'hotpink'],
    [-45, 20, 'sandybrown'],
    [40, 60, 'palevioletred'],
]

cell = 8
for gy in range(-25, 25):
    for gx in range(-25, 25):
        x = gx * cell + 4
        y = gy * cell + 4
        best = 0
        best_d = 999999
        for i in range(len(seeds)):
            dx = x - seeds[i][0]
            dy = y - seeds[i][1]
            d = dx * dx + dy * dy
            if d < best_d:
                best_d = d
                best = i
        monty.goto(x, y)
        monty.dot(12, seeds[best][2])
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Look at the seed list and find the seed nearest to the center of the
    screen, point (0, 0). Which color will claim the center of the canvas?
    Pick your color, then run the program to see if you chose well!

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

seeds = [
    [-150, 130, 'crimson'],
    [-30, 165, 'darkorange'],
    [110, 150, 'gold'],
    [175, 55, 'yellowgreen'],
    [95, -20, 'forestgreen'],
    [165, -140, 'mediumturquoise'],
    [30, -105, 'deepskyblue'],
    [-70, -165, 'royalblue'],
    [-155, -75, 'mediumorchid'],
    [-175, 40, 'hotpink'],
    [-45, 20, 'sandybrown'],
    [40, 60, 'palevioletred'],
]

cell = 8
for gy in range(-25, 25):
    for gx in range(-25, 25):
        x = gx * cell + 4
        y = gy * cell + 4
        best = 0
        best_d = 999999
        for i in range(len(seeds)):
            dx = x - seeds[i][0]
            dy = y - seeds[i][1]
            d = dx * dx + dy * dy
            if d < best_d:
                best_d = d
                best = i
        monty.goto(x, y)
        monty.dot(12, seeds[best][2])

for s in seeds:
    monty.goto(s[0], s[1])
    monty.dot(10, 'black')
    monty.dot(4, 'white')`);
</script>

The center belongs to **sandybrown** — the seed at `(-45, 20)` is only about 49 pixels from `(0, 0)`, closer than any other seed. Were you right?

## How It Works

Every border in the finished picture is a set of points that are *exactly tied* between two seeds — the perpendicular bisector of the line joining them. That's why all the edges are straight lines and every region is a convex polygon. And here's the classifier connection: if the seeds were labeled examples ("this point is orange, that one is blue"), then coloring each pixel by its nearest seed is precisely the 1-nearest-neighbor algorithm that machine-learning systems use to classify new data.

## Explanation Table

| Line | What it does |
|------|-------------|
| `d = dx * dx + dy * dy` | Squared distance from this cell to a seed — no square root needed |
| `if d < best_d:` | Keeps track of the closest seed found so far |
| `monty.dot(12, seeds[best][2])` | Paints the cell with the winning seed's color |
| `x = gx * cell + 4` | Turns a grid index into the cell's center coordinate |

## Learning Check

!!! mascot-thinking "Your Turn — Found a New Kingdom"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This smaller map has only 5 seeds. Add a sixth seed by inserting the line
    `[0, 150, 'orange'],` into the seeds list. Where will the new orange
    territory appear, and which regions will have to shrink to make room?

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.penup()

seeds = [
    [-120, 100, 'crimson'],
    [120, 110, 'deepskyblue'],
    [-100, -120, 'gold'],
    [110, -100, 'mediumorchid'],
    [0, -10, 'yellowgreen'],
]

cell = 16
for gy in range(-12, 13):
    for gx in range(-12, 13):
        x = gx * cell
        y = gy * cell
        best = 0
        best_d = 999999
        for i in range(len(seeds)):
            dx = x - seeds[i][0]
            dy = y - seeds[i][1]
            d = dx * dx + dy * dy
            if d < best_d:
                best_d = d
                best = i
        monty.goto(x, y)
        monty.dot(22, seeds[best][2])

for s in seeds:
    monty.goto(s[0], s[1])
    monty.dot(10, 'black')
    monty.dot(4, 'white')`);
</script>

The new orange kingdom appears at the top-middle of the map, squeezing the crimson and deepskyblue regions apart — every new seed steals territory only from its nearest neighbors.

## Experiments

1. **Move a capital city.** Change the sandybrown seed in the first lab from `[-45, 20, ...]` to `[-45, 120, ...]`. You'll know it worked when the center of the map changes color and the whole top edge gets redrawn borders.

2. **Show the pixels.** Change `monty.dot(12, ...)` to `monty.dot(7, ...)`. You'll know it worked when white gaps appear between dots and you can see the image is really a 50×50 grid.

3. **Taxicab distance.** Replace `d = dx * dx + dy * dy` with `d = abs(dx) + abs(dy)`. You'll know it worked when the borders turn into diagonal, diamond-style edges — this is Manhattan distance, measured like a taxi driving on a street grid.

4. **Thirteen kingdoms.** Add `[0, 0, 'black'],` to the first lab's seed list. You'll know it worked when a dark region opens up in the exact middle of the map.

!!! mascot-celebration "Nearest Neighbor Wins!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used the distance formula 30,000 times to build a real Voronoi
    diagram — the same math behind cell patterns in nature and
    nearest-neighbor classifiers in machine learning!
    Up next: **Penrose Rhombus Tiling** — the famous pattern that never repeats, built from gold and blue rhombi.
