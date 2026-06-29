---
hide:
    - toc
---
# Name in Block Letters

By the end of this lab you'll be able to:

- Store letter shapes as lists of stroke waypoints and draw them with `goto()`
- Build a mini font and render any word using your letter definitions
- Understand how vector fonts work — shapes defined as coordinate paths

Each letter of a name is drawn as a series of line "strokes" — lists of `(x, y)` waypoints. Moving the pen along the strokes draws the letter outline. This is how early computer fonts worked.

!!! mascot-welcome "Welcome to Block Letters!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Before TrueType fonts existed, computers drew letters this way — as stored lists of line segments.
    This lab builds a mini stroke-based font from scratch!
    Let's code it together!

## How It Works

Each letter is defined as a list of strokes; each stroke is a list of `(x, y)` waypoints in a 0–1 coordinate box. A `draw_letter(ch, ox, oy, scale)` function scales and translates the waypoints and draws each stroke.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

font = {
    'P': [[(0,0),(0,1),(0.6,1),(0.6,0.6),(0,0.6)], [(0,0.5),(0,0)]],
    'Y': [[(0,1),(0.5,0.5),(1,1)], [(0.5,0.5),(0.5,0)]],
    'T': [[(0,1),(1,1)], [(0.5,1),(0.5,0)]],
    'H': [[(0,0),(0,1)], [(1,0),(1,1)], [(0,0.5),(1,0.5)]],
    'O': [[(0,0),(1,0),(1,1),(0,1),(0,0)]],
    'N': [[(0,0),(0,1),(1,0),(1,1)]],
}

def draw_letter(ch, ox, oy, scale):
    strokes = font.get(ch.upper(), [])
    for stroke in strokes:
        monty.penup()
        monty.goto(ox + stroke[0][0]*scale, oy + stroke[0][1]*scale)
        monty.pendown()
        for x, y in stroke[1:]:
            monty.goto(ox + x*scale, oy + y*scale)

word = "PYTHON"
scale = 50
gap = 12
total = len(word) * (scale + gap)
ox = -total / 2

monty.pencolor('royalblue')
monty.pensize(3)
for i, ch in enumerate(word):
    draw_letter(ch, ox + i * (scale + gap), -scale/2, scale)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The font dictionary has 6 letters — each defined as a list of stroke paths.
    Will the word "PYTHON" look like readable block letters, or jumbled lines?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

font = {
    'P': [[(0,0),(0,1),(0.6,1),(0.6,0.6),(0,0.6)]],
    'Y': [[(0,1),(0.5,0.5),(1,1)], [(0.5,0.5),(0.5,0)]],
    'T': [[(0,1),(1,1)], [(0.5,1),(0.5,0)]],
    'H': [[(0,0),(0,1)], [(1,0),(1,1)], [(0,0.5),(1,0.5)]],
    'O': [[(0,0),(1,0),(1,1),(0,1),(0,0)]],
    'N': [[(0,0),(0,1),(1,0),(1,1)]],
}

def draw_letter(ch, ox, oy, scale):
    strokes = font.get(ch.upper(), [])
    for stroke in strokes:
        monty.penup()
        monty.goto(ox + stroke[0][0]*scale, oy + stroke[0][1]*scale)
        monty.pendown()
        for x, y in stroke[1:]:
            monty.goto(ox + x*scale, oy + y*scale)

word = "PYTHON"
scale = 50
gap = 12
total = len(word) * (scale + gap)
ox = -total / 2

monty.pencolor('royalblue')
monty.pensize(3)
for i, ch in enumerate(word):
    draw_letter(ch, ox + i * (scale + gap), -scale/2, scale)
</textarea>
    <div id="button-row">
      <button id="run-btn" onclick="runSkulpt()">&#9654; Run</button>
      <button id="reset-btn" onclick="resetSkulpt()">&#8635; Reset</button>
    </div>
    <pre id="output"></pre>
  </div>
  <div id="canvas-container">
    <div id="turtle-target"></div>
  </div>
</div>

**Readable block letters** — each letter drawn from its waypoint strokes. Were you right?

## How It Works

The font stores each letter as "strokes" (lists of waypoints in unit coordinates 0–1). `draw_letter()` scales them by `scale` and shifts by `ox, oy`. This is exactly how PostScript and SVG fonts work — just with more waypoints per letter.

## Explanation Table

| Line | What it does |
|------|-------------|
| `font = {'P': [[...], ...], ...}` | Dictionary: letter → list of strokes |
| `font.get(ch.upper(), [])` | Look up strokes, default to empty |
| `ox + stroke[0][0]*scale` | Scale x from 0–1 range to pixel range |
| `gap = 12` | Spacing between letters |

## Learning Check

!!! mascot-thinking "Your Turn — Add a New Letter"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Add an `'A'` entry to the `font` dictionary.
    `'A'` has two slanted lines and a crossbar.
    Add it and change the word to include `'A'` — can you define the strokes correctly?

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

font = {
    'A': [[(0,0),(0.5,1),(1,0)], [(0.2,0.4),(0.8,0.4)]],
    'P': [[(0,0),(0,1),(0.6,1),(0.6,0.6),(0,0.6)]],
    'Y': [[(0,1),(0.5,0.5),(1,1)], [(0.5,0.5),(0.5,0)]],
    'T': [[(0,1),(1,1)], [(0.5,1),(0.5,0)]],
    'H': [[(0,0),(0,1)], [(1,0),(1,1)], [(0,0.5),(1,0.5)]],
    'O': [[(0,0),(1,0),(1,1),(0,1),(0,0)]],
    'N': [[(0,0),(0,1),(1,0),(1,1)]],
}

def draw_letter(ch, ox, oy, scale):
    strokes = font.get(ch.upper(), [])
    for stroke in strokes:
        monty.penup()
        monty.goto(ox + stroke[0][0]*scale, oy + stroke[0][1]*scale)
        monty.pendown()
        for x, y in stroke[1:]:
            monty.goto(ox + x*scale, oy + y*scale)

word = "PATH"
scale = 60
gap = 14
total = len(word) * (scale + gap)
ox = -total / 2

monty.pencolor('darkred')
monty.pensize(4)
for i, ch in enumerate(word):
    draw_letter(ch, ox + i * (scale + gap), -scale/2, scale)
</textarea>
    <div id="button-row-2">
      <button id="run-btn-2" onclick="runSkulpt('-2')">&#9654; Run</button>
      <button id="reset-btn-2" onclick="resetSkulpt('-2')">&#8635; Reset</button>
    </div>
    <pre id="output-2"></pre>
  </div>
  <div id="canvas-container-2">
    <div id="turtle-target-2"></div>
  </div>
</div>

The `'A'` is defined with two slanted strokes and a crossbar — readable block letter style!

## Experiments

1. **Add more letters.** Define `'E'`, `'I'`, `'L'`, `'F'`, `'Z'` using horizontal and vertical lines. You'll know it worked when you can spell new words.

2. **Add fill.** For closed letters like `'O'`, call `begin_fill()` and `end_fill()` around each closed stroke. You'll know it worked when the letter interior is filled.

3. **Make rainbow letters.** Assign a different color to each letter. You'll know it worked when each letter in the word is a different color.

4. **Scale by character position.** Make early letters small and later letters larger by varying `scale`. You'll know it worked when the word appears to grow in size from left to right.

!!! mascot-celebration "You Built a Font!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You stored letter shapes as data and rendered them with `goto()` — the same
    principle used by PostScript fonts and SVG text rendering.
    Up next: **Category 10 — Animation patterns!**
