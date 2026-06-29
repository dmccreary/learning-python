---
title: Colors, Fill, and Turtle Art
description: Explore hex color codes, the RGB and HSL color models, transparency, and how to paint solid shapes with begin_fill() and end_fill()
generated_by: claude skill chapter-content-generator
date: 2026-06-28 12:00:00
version: 0.09
---

# Colors, Fill, and Turtle Art

By the end of this lesson you'll be able to:

- Use **hex color codes** and **RGB values** to set any color you can imagine
- Explain the difference between the **RGB** and **HSL** color models
- Paint solid filled shapes using `begin_fill()` and `end_fill()`
- Set both the **pen color** and **background color** of the turtle canvas

Colors make turtle art come alive. Until now our turtle has drawn outlines.
Today we unlock the full color palette and learn to paint filled shapes.

!!! mascot-welcome "Welcome to Chapter 12!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to paint? By the end of this lesson your turtle drawings will look like real art.
    Let's mix some colors and fill some shapes! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## Color in Turtle Graphics

You already know how to set a color by name, like `t.pencolor("red")`.
Python's turtle knows around 140 named colors, from `"aquamarine"` to `"yellow"`.

But there are millions of colors that don't have names. To reach those, you need **color codes**.

## Hex Color Codes

A **hex color code** is a six-character code that describes a color precisely.
Each code starts with a `#` sign and contains exactly six letters and numbers.

```
#FF0000  →  pure red
#00FF00  →  pure green
#0000FF  →  pure blue
#000000  →  black
#FFFFFF  →  white
#FF6347  →  tomato red
```

The six characters are split into three pairs:
- First pair controls **red** (00 to FF)
- Second pair controls **green** (00 to FF)
- Third pair controls **blue** (00 to FF)

`FF` means maximum brightness (255 in decimal). `00` means none (0).

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws a square in three different hex colors.
    What colors do you think `#FF00FF` and `#FFFF00` will produce?
    Make your guess — then run it to find out!

```python
import turtle
t = turtle.Turtle()
t.speed(6)
t.pensize(3)

colors = ["#FF0000", "#FF00FF", "#FFFF00"]
positions = [(-150, 0), (0, 0), (150, 0)]

for col, pos in zip(colors, positions):
    t.penup()
    t.goto(pos)
    t.pendown()
    t.pencolor(col)
    for i in range(4):
        t.forward(80)
        t.right(90)
```

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
t = turtle.Turtle()
t.speed(6)
t.pensize(3)

colors = ["#FF0000", "#FF00FF", "#FFFF00"]
positions = [(-150, 0), (0, 0), (150, 0)]

for col, pos in zip(colors, positions):
    t.penup()
    t.goto(pos)
    t.pendown()
    t.pencolor(col)
    for i in range(4):
        t.forward(80)
        t.right(90)
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

Were you right? `#FF00FF` is magenta (red + blue, no green) and `#FFFF00` is yellow (red + green, no blue).

## The RGB Color Model

The **RGB color model** mixes red, green, and blue light to make every other color.
It's the same model your screen uses — every pixel on your monitor has a tiny red light, a green light, and a blue light.

| Color | Red | Green | Blue |
|-------|-----|-------|------|
| Red | 255 | 0 | 0 |
| Green | 0 | 255 | 0 |
| Blue | 0 | 0 | 255 |
| Yellow | 255 | 255 | 0 |
| Cyan | 0 | 255 | 255 |
| Magenta | 255 | 0 | 255 |
| White | 255 | 255 | 255 |
| Black | 0 | 0 | 0 |

You can use RGB values directly in turtle by converting them to a hex color string first. The helper function below does that math so you can keep thinking in 0–255 values.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle

def to_hex(r, g, b):
    # Convert 0-255 RGB values to a hex color string like "#ff0000"
    return "#%02x%02x%02x" % (r, g, b)

t = turtle.Turtle()
t.speed(6)
t.pensize(4)

# Draw three circles with RGB colors
rgb_colors = [(255, 0, 0), (0, 200, 80), (0, 100, 255)]
positions = [(-120, 0), (0, 0), (120, 0)]

for rgb, pos in zip(rgb_colors, positions):
    t.penup()
    t.goto(pos)
    t.pendown()
    t.pencolor(to_hex(*rgb))
    t.circle(40)
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

Try changing the numbers in the `rgb_colors` list. Each number goes from 0 (none) to 255 (full brightness).

## Background and Pen Colors

Turtle lets you set two separate colors at once.

- `t.pencolor("red")` — the color of the lines the turtle draws
- `t.fillcolor("yellow")` — the color used to fill shapes
- `turtle.bgcolor("lightblue")` — the canvas background color

You can also set both pen and fill at once:

```python
t.color("blue", "yellow")   # pencolor = blue, fillcolor = yellow
```

## Filling Shapes with `begin_fill()` and `end_fill()`

To paint a solid shape, wrap your drawing code between two calls:

1. `t.begin_fill()` — tells the turtle "I'm about to draw a shape to fill"
2. *draw the shape*
3. `t.end_fill()` — seals the shape and fills it with the fill color

Before we look at the code, two key points:
- You must set the fill color *before* calling `begin_fill()`
- The shape must be closed (end where it started) for the fill to look correct

```python
import turtle
t = turtle.Turtle()
t.speed(6)

t.fillcolor("gold")
t.begin_fill()
for i in range(6):
    t.forward(100)
    t.right(60)
t.end_fill()
```

<div id="skulpt-lab-3">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">import turtle
t = turtle.Turtle()
t.speed(6)

t.fillcolor("gold")
t.begin_fill()
for i in range(6):
    t.forward(100)
    t.right(60)
t.end_fill()
</textarea>
    <div id="button-row-3">
      <button id="run-btn-3" onclick="runSkulpt('-3')">&#9654; Run</button>
      <button id="reset-btn-3" onclick="resetSkulpt('-3')">&#8635; Reset</button>
    </div>
    <pre id="output-3"></pre>
  </div>
  <div id="canvas-container-3">
    <div id="turtle-target-3"></div>
  </div>
</div>

Try changing `"gold"` to any color name or hex code. Try changing `6` to `3` for a triangle or `5` for a pentagon.

## Color Theory Basics

Before we mix colors on the canvas, let's understand some color theory terms:

- **Hue** — the basic color family (red, orange, yellow, green, blue, violet)
- **Saturation** — how vivid or washed-out the color is (100% = vivid, 0% = grey)
- **Lightness** — how bright or dark the color is (0% = black, 100% = white)
- **Complementary colors** — colors opposite each other on the color wheel (e.g. red and green, blue and orange). They create strong contrast when placed side by side.

## The HSL Color Model

The **HSL color model** describes colors in three values: **Hue**, **Saturation**, and **Lightness**.
Many designers prefer HSL because it's easier to think about than RGB:
"I want a moderately bright, slightly greenish blue" is natural in HSL but tricky in RGB.

Python's turtle doesn't support HSL directly, but the concept appears in CSS and image editing tools.
You can convert HSL to RGB using the `colorsys` module (covered later in the course).

## Transparency and Alpha

In many drawing systems, color also has an **alpha** value that controls transparency.
An alpha of 1.0 means fully opaque (solid) and 0.0 means fully transparent (invisible).

Python's turtle doesn't support transparency natively, but image processing libraries like Pillow (Chapter 34) do.
For now, knowing what alpha means will help you when you encounter it in web design, image editors, and game development.

## A Filled Flower

Let's combine everything: fill color, hex codes, and loops to create a colorful flower.

Before the code, note that `t.circle(r, extent)` draws an arc of a circle. If `extent=360` it's a full circle; `extent=120` draws one-third of a circle, which we'll use as a "petal."

<div id="skulpt-lab-4">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">import turtle
t = turtle.Turtle()
t.speed(0)

petal_colors = ["#FF6347", "#FF8C00", "#FFD700", "#ADFF2F", "#00BFFF", "#9370DB"]

for i in range(6):
    t.fillcolor(petal_colors[i])
    t.begin_fill()
    t.circle(60, 120)   # arc
    t.left(60)
    t.circle(60, 120)   # arc
    t.left(60)
    t.end_fill()
    t.left(60)          # rotate to next petal

t.hideturtle()
</textarea>
    <div id="button-row-4">
      <button id="run-btn-4" onclick="runSkulpt('-4')">&#9654; Run</button>
      <button id="reset-btn-4" onclick="resetSkulpt('-4')">&#8635; Reset</button>
    </div>
    <pre id="output-4"></pre>
  </div>
  <div id="canvas-container-4">
    <div id="turtle-target-4"></div>
  </div>
</div>

## Learning Check

!!! mascot-thinking "Your Turn — Add the Missing Lines"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws a red square outline, but it should be filled with blue.
    Add the three missing lines — set the fill color, open the fill, and close the fill —
    to make the square solid blue with a red border!

<div id="skulpt-lab-5">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">import turtle
t = turtle.Turtle()
t.speed(6)
t.pencolor("red")
t.pensize(3)

# Add: set fill color to "blue"
# Add: begin_fill()
for i in range(4):
    t.forward(100)
    t.right(90)
# Add: end_fill()
</textarea>
    <div id="button-row-5">
      <button id="run-btn-5" onclick="runSkulpt('-5')">&#9654; Run</button>
      <button id="reset-btn-5" onclick="resetSkulpt('-5')">&#8635; Reset</button>
    </div>
    <pre id="output-5"></pre>
  </div>
  <div id="canvas-container-5">
    <div id="turtle-target-5"></div>
  </div>
</div>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. In the hex color demo, change `#FF0000` to `#FF8800`.
   **You'll know it worked when** the first square turns orange.

2. In the RGB circles demo, change the first tuple to `(255, 165, 0)`.
   **You'll know it worked when** the first circle turns orange.

3. In the filled hexagon demo, add `turtle.bgcolor("navy")` before the loop.
   **You'll know it worked when** the background turns dark blue.

4. In the filled hexagon demo, add a `t.pencolor("#000000")` line before `t.begin_fill()`.
   **You'll know it worked when** the hexagon has a black outline around the gold fill.

5. Modify the flower so each petal is the same color but the background is black.
   **You'll know it worked when** your single-color flower glows against the dark background.

!!! mascot-celebration "Beautiful Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered hex codes, RGB, HSL, fill colors, and background colors!
    Your turtle art is now full-color and full of life.
    Keep experimenting — every great digital artist started exactly where you are now!

[See Annotated References](./references.md)
