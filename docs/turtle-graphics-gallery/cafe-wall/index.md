---
hide:
    - toc
---
# Café Wall Illusion

By the end of this lab you'll be able to:

- Draw a café wall pattern where each row of tiles is offset by half a tile
- Understand why the mortar lines appear to converge even though they are parallel
- Use nested loops to build a tiled grid with alternating row offsets

The Café Wall Illusion was first noticed on a café in Bristol, England. Rows of black and white tiles with thin gray mortar lines between them — every mortar line is perfectly horizontal and parallel, yet they appear to slant!

!!! mascot-welcome "Welcome to the Café Wall Illusion!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In 1979, a researcher named Richard Gregory noticed this illusion on the tiles
    of a café wall in Bristol. The mortar lines are perfectly parallel — but look slanted!
    Let's code it together and see if it tricks your eyes too!

## How It Works

Draw a grid of black and white rectangles. Odd rows are shifted right by half a tile width. Between rows, draw a thin gray horizontal mortar line. The offset tiles + mortar color creates the illusion of diverging lines.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

tile_w = 40
tile_h = 25
mortar = 3
cols = 8
rows = 7

def filled_rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.fillcolor(color)
    monty.begin_fill()
    for _ in range(2):
        monty.forward(w)
        monty.left(90)
        monty.forward(h)
        monty.left(90)
    monty.end_fill()

ox = -(cols * tile_w) / 2
oy = -(rows * (tile_h + mortar)) / 2

for row in range(rows):
    offset = (row % 2) * (tile_w / 2)
    y = oy + row * (tile_h + mortar)
    filled_rect(ox - tile_w, y, (cols + 2) * tile_w, mortar, 'gray')
    for col in range(-1, cols + 1):
        color = 'black' if (col + row) % 2 == 0 else 'white'
        filled_rect(ox + col * tile_w + offset, y + mortar, tile_w, tile_h, color)

filled_rect(ox - tile_w, oy + rows * (tile_h + mortar), (cols + 2) * tile_w, mortar, 'gray')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Every gray mortar line is drawn perfectly horizontal — the code guarantees it.
    Will they still look slanted after you add the black and white tiles?
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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

tile_w = 40
tile_h = 25
mortar = 3
cols = 8
rows = 7

def filled_rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.fillcolor(color)
    monty.begin_fill()
    for _ in range(2):
        monty.forward(w)
        monty.left(90)
        monty.forward(h)
        monty.left(90)
    monty.end_fill()

ox = -(cols * tile_w) / 2
oy = -(rows * (tile_h + mortar)) / 2

for row in range(rows):
    offset = (row % 2) * (tile_w / 2)
    y = oy + row * (tile_h + mortar)
    filled_rect(ox - tile_w, y, (cols + 2) * tile_w, mortar, 'gray')
    for col in range(-1, cols + 1):
        color = 'black' if (col + row) % 2 == 0 else 'white'
        filled_rect(ox + col * tile_w + offset, y + mortar, tile_w, tile_h, color)

filled_rect(ox - tile_w, oy + rows * (tile_h + mortar), (cols + 2) * tile_w, mortar, 'gray')`);
</script>

The gray lines **appear to slant** even though the code draws them perfectly horizontal! Were you right?

## How It Works

The gray mortar color sits between the dark and light tiles. Your visual system judges line position relative to local contrast. When the black and white tiles on either side of a mortar line are offset, the edge contrast makes the mortar appear to tilt toward the darker side.

## Explanation Table

| Line | What it does |
|------|-------------|
| `offset = (row % 2) * (tile_w / 2)` | Alternate rows shifted by half a tile |
| `mortar = 3` | Thin gray strips between rows — the key to the illusion |
| `'black' if (col+row)%2==0 else 'white'` | Checkerboard coloring within each row |
| `filled_rect(...)` | Helper to draw a filled rectangle |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Mortar Color"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `'gray'` in the mortar lines to `'black'`. Will the illusion disappear or change?
    The illusion requires a mortar color between black and white. What do you predict?

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

tile_w = 40
tile_h = 25
mortar = 3
cols = 8
rows = 7

def filled_rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.pendown()
    monty.fillcolor(color)
    monty.begin_fill()
    for _ in range(2):
        monty.forward(w)
        monty.left(90)
        monty.forward(h)
        monty.left(90)
    monty.end_fill()

ox = -(cols * tile_w) / 2
oy = -(rows * (tile_h + mortar)) / 2

for row in range(rows):
    offset = (row % 2) * (tile_w / 2)
    y = oy + row * (tile_h + mortar)
    filled_rect(ox - tile_w, y, (cols + 2) * tile_w, mortar, 'black')
    for col in range(-1, cols + 1):
        color = 'black' if (col + row) % 2 == 0 else 'white'
        filled_rect(ox + col * tile_w + offset, y + mortar, tile_w, tile_h, color)

filled_rect(ox - tile_w, oy + rows * (tile_h + mortar), (cols + 2) * tile_w, mortar, 'black')`);
</script>

With black mortar, the illusion weakens considerably — the mortar blends with the black tiles and loses its role as the "middle ground" element that creates the apparent tilt.

## Experiments

1. **Increase mortar thickness.** Change `mortar = 3` to `mortar = 8`. You'll know it worked when the gray strips are much wider.

2. **Try colored tiles.** Replace `'black'` with `'navy'` and `'white'` with `'lightyellow'`. You'll know it worked when colored tiles appear — does the illusion still work?

3. **Remove the row offset.** Change `offset = (row % 2) * (tile_w / 2)` to `offset = 0`. You'll know it worked when the illusion disappears — all tiles align.

4. **Vary the offset amount.** Try `offset = (row % 2) * (tile_w / 3)` or `tile_w / 4`. You'll know it worked when a different strength of illusion appears.

!!! mascot-celebration "Your Brain Was Tricked Again!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    The café wall illusion teaches us that perception isn't just about what's there —
    it's about local contrast and context. Perfectly parallel lines look slanted!
    Up next: **Moiré Pattern** — two grids overlapping to create beating patterns.
