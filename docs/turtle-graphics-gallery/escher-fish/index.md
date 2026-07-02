---
hide:
    - toc
---
# Escher-Style Fish Tile

By the end of this lab you'll be able to:

- Store a shape outline as a list of `(x, y)` waypoints
- Explain the tessellation rule: whatever bumps OUT of one edge must notch IN on the opposite edge
- Tile a shape across the screen by translation, alternating two colors

The artist M.C. Escher filled entire walls with lizards, birds, and fish that lock together with no gaps and no overlaps. His secret was simple and brilliant: start with a shape that tiles (like a rectangle), and every time you push a bump out of one edge, carve the exact same bump into the opposite edge. This program builds a fish that way — its nose is the bump, its tail is the matching notch — then stamps 16 copies in a perfect interlocking school.

!!! mascot-welcome "Welcome to the Fish Factory!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Escher's fish look impossible to design — but they start as a plain
    rectangle! Bend the left edge into a nose, cut the same shape from the
    right edge as a tail, and the copies snap together like puzzle pieces.

## How It Works

The fish outline is a list of waypoints tracing an 80×50 rectangle whose edges have been reshaped in matching pairs. The left-edge nose points `(-14, 35), (-6, 25), (-14, 15)` reappear on the right edge shifted by exactly `+80`: `(66, 35), (74, 25), (66, 15)`. The bottom-edge belly dip at `(40, -8)` reappears on the top edge shifted by `+50` as `(40, 42)`. Because every bump matches a notch one tile-width away, copies placed every 80 pixels across and 50 pixels up fit with zero gaps.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

outline = [(0, 0), (25, 0), (40, -8), (55, 0), (80, 0),
           (66, 15), (74, 25), (66, 35), (80, 50),
           (55, 50), (40, 42), (25, 50), (0, 50),
           (-14, 35), (-6, 25), (-14, 15)]

def draw_fish(x, y, color):
    monty.penup()
    monty.color(color, color)
    monty.goto(x, y)
    monty.pendown()
    monty.begin_fill()
    for px, py in outline:
        monty.goto(x + px, y + py)
    monty.goto(x, y)
    monty.end_fill()
    monty.penup()
    monty.goto(x + 6, y + 31)
    monty.dot(7, 'black')
    monty.dot(3, 'white')

for row in range(4):
    for col in range(4):
        x = -150 + col * 80
        y = -100 + row * 50
        if (row + col) % 2 == 0:
            draw_fish(x, y, 'coral')
        else:
            draw_fish(x, y, 'lightseagreen')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The color is picked by `(row + col) % 2` — a checkerboard rule.
    Will the fish directly ABOVE a coral fish be coral or sea-green?
    Decide, then run the program and check one column.

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

outline = [(0, 0), (25, 0), (40, -8), (55, 0), (80, 0),
           (66, 15), (74, 25), (66, 35), (80, 50),
           (55, 50), (40, 42), (25, 50), (0, 50),
           (-14, 35), (-6, 25), (-14, 15)]

def draw_fish(x, y, color):
    monty.penup()
    monty.color(color, color)
    monty.goto(x, y)
    monty.pendown()
    monty.begin_fill()
    for px, py in outline:
        monty.goto(x + px, y + py)
    monty.goto(x, y)
    monty.end_fill()
    monty.penup()
    monty.goto(x + 6, y + 31)
    monty.dot(7, 'black')
    monty.dot(3, 'white')

for row in range(4):
    for col in range(4):
        x = -150 + col * 80
        y = -100 + row * 50
        if (row + col) % 2 == 0:
            draw_fish(x, y, 'coral')
        else:
            draw_fish(x, y, 'lightseagreen')`);
</script>

**Sea-green** — moving up one row changes `row + col` from even to odd (or odd to even), so the color always flips. Were you right?

## How It Works

Check the interlocking for yourself with coordinates. The fish at column `c` draws its tail notch at absolute points `c*80 + (66, 15)`, `c*80 + (74, 25)`, `c*80 + (66, 35)`. Its right-hand neighbor starts at `(c+1)*80` and draws its nose at `(c+1)*80 - 14 = c*80 + 66` and `(c+1)*80 - 6 = c*80 + 74` — the *identical* points, traversed the other way. One fish's tail water is the next fish's nose. The same trick, shifted by 50 instead of 80, makes each fish's arched back cradle the belly of the fish above it.

## Explanation Table

| Line | What it does |
|------|-------------|
| `outline = [(0, 0), (25, 0), (40, -8), ...]` | The fish shape as waypoints around a modified rectangle |
| `(-14, 35), (-6, 25), (-14, 15)` | The nose bump — exactly matches the tail notch 80 px to the right |
| `monty.goto(x + px, y + py)` | Translates every waypoint to this fish's grid position |
| `if (row + col) % 2 == 0:` | Checkerboard rule that alternates the two fill colors |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Someone bent this fish's tail too deep, and now there are white
    diamond-shaped gaps in the school — Escher would not approve!
    Compare the tail waypoints with the nose waypoints. One number
    breaks the "bump equals notch shifted by 80" rule. Fix it!

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

outline = [(0, 0), (25, 0), (40, -8), (55, 0), (80, 0),
           (66, 15), (60, 25), (66, 35), (80, 50),
           (55, 50), (40, 42), (25, 50), (0, 50),
           (-14, 35), (-6, 25), (-14, 15)]

def draw_fish(x, y, color):
    monty.penup()
    monty.color(color, color)
    monty.goto(x, y)
    monty.pendown()
    monty.begin_fill()
    for px, py in outline:
        monty.goto(x + px, y + py)
    monty.goto(x, y)
    monty.end_fill()
    monty.penup()
    monty.goto(x + 6, y + 31)
    monty.dot(7, 'black')
    monty.dot(3, 'white')

for row in range(4):
    for col in range(4):
        x = -150 + col * 80
        y = -100 + row * 50
        if (row + col) % 2 == 0:
            draw_fish(x, y, 'coral')
        else:
            draw_fish(x, y, 'lightseagreen')`);
</script>

The tail's middle waypoint is `(60, 25)`, but the nose's middle waypoint is `(-6, 25)`, and `-6 + 80 = 74`. Change `(60, 25)` back to `(74, 25)` and the white diamonds vanish — bump and notch match again.

## Experiments

1. **New school colors.** Change `'coral'` to `'gold'` and `'lightseagreen'` to `'slateblue'`. You'll know it worked when the checkerboard of fish switches to the new pair everywhere.

2. **Longer nose.** Change both nose points `(-14, 35)` and `(-14, 15)` to `(-24, 35)` and `(-24, 15)`, AND the matching tail points `(66, 35)` and `(66, 15)` to `(56, 35)` and `(56, 15)`. You'll know it worked when every fish gets a pointier face and the school still has zero gaps.

3. **Bigger eye.** Change `monty.dot(7, 'black')` to `monty.dot(11, 'black')` and the white dot from `3` to `5`. You'll know it worked when all 16 fish look wide awake.

4. **Deeper belly.** Change the belly point `(40, -8)` to `(40, -16)` and the back point `(40, 42)` to `(40, 34)`. You'll know it worked when the fish look plumper and each row still nests perfectly into the row above.

!!! mascot-celebration "You Out-Tiled Escher!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Now you know the tessellation secret: every bump OUT must be a matching
    notch IN on the opposite edge. With that one rule you can turn rectangles
    into fish, birds, lizards — anything!
    Up next: **Voronoi Color Regions** — color the whole canvas by which seed point is closest.
