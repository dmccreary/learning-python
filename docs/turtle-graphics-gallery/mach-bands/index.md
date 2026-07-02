---
hide:
    - toc
---
# Mach Bands

By the end of this lab you'll be able to:

- Build hex color strings like `'#4c4c4c'` from a loop counter using integer division and remainder
- Approximate a smooth gradient with a row of flat, discrete gray bands
- Explain why your eyes invent bright and dark stripes at edges that are not in the picture

A row of ten rectangles, each filled with one perfectly flat shade of gray, stepping from dark to light. Your eyes refuse to believe it: at every border you will see a phantom dark stripe on the darker side and a phantom bright stripe on the lighter side. These ghost stripes are called Mach bands, named after the physicist Ernst Mach who described them in the 1860s.

!!! mascot-welcome "Welcome to Mach Bands!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This program paints ten flat gray rectangles — nothing more.
    But your brain will add stripes that are not in the code!
    Let's build the gradient and catch your visual system in the act.

## How It Works

A loop counts from 0 to 9 and computes a brightness value `v = 32 + i * 22`, so each band is a little lighter than the last. The `gray()` function converts `v` into a hex color string: `v // 16` picks the first hex digit and `v % 16` picks the second, and the two-digit pair is repeated three times for red, green, and blue. A helper draws each band as a filled rectangle.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

digits = '0123456789abcdef'

def gray(v):
    pair = digits[v // 16] + digits[v % 16]
    return '#' + pair + pair + pair

def filled_rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.begin_fill()
    for _ in range(2):
        monty.forward(w)
        monty.left(90)
        monty.forward(h)
        monty.left(90)
    monty.end_fill()

bands = 10
band_w = 36
band_h = 280
left = -bands * band_w / 2

for i in range(bands):
    v = 32 + i * 22
    filled_rect(left + i * band_w, -band_h / 2, band_w, band_h, gray(v))
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Every rectangle is filled with a single flat shade of gray — the code guarantees it.
    When you look at the finished picture, will each band look perfectly flat,
    or will you see extra dark and bright stripes hugging the edges?
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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

digits = '0123456789abcdef'

def gray(v):
    pair = digits[v // 16] + digits[v % 16]
    return '#' + pair + pair + pair

def filled_rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.begin_fill()
    for _ in range(2):
        monty.forward(w)
        monty.left(90)
        monty.forward(h)
        monty.left(90)
    monty.end_fill()

bands = 10
band_w = 36
band_h = 280
left = -bands * band_w / 2

for i in range(bands):
    v = 32 + i * 22
    filled_rect(left + i * band_w, -band_h / 2, band_w, band_h, gray(v))`);
</script>

Each band looks scalloped — darker along its left edge and brighter along its right edge — even though every pixel inside a band is identical. Were you right?

## How It Works

Your retina does not report raw brightness — neighboring light-sensing cells inhibit each other, a trick called lateral inhibition. A cell sitting just on the dark side of an edge gets extra-strong inhibition from its brighter neighbors, so it reports "even darker." A cell just on the bright side gets weaker inhibition, so it reports "even brighter." The result is built-in edge enhancement: your visual system exaggerates every boundary, which normally helps you see object outlines — but here it invents stripes that do not exist.

## Explanation Table

| Line | What it does |
|------|-------------|
| `digits = '0123456789abcdef'` | The 16 hex digits, so digit `n` is `digits[n]` |
| `pair = digits[v // 16] + digits[v % 16]` | Splits `v` (0–255) into its two hex digits |
| `'#' + pair + pair + pair` | Repeats the pair for red, green, and blue — equal amounts make gray |
| `v = 32 + i * 22` | Each band's brightness climbs by 22, from 32 up to 230 |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    This version was supposed to draw the same smooth dark-to-light staircase,
    but the bands come out in a scrambled order! One line in `gray()` uses the
    wrong operator. Find it and fix it so the gradient climbs smoothly again.

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

digits = '0123456789abcdef'

def gray(v):
    pair = digits[v % 16] + digits[v % 16]
    return '#' + pair + pair + pair

def filled_rect(x, y, w, h, color):
    monty.penup()
    monty.goto(x, y)
    monty.setheading(0)
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.begin_fill()
    for _ in range(2):
        monty.forward(w)
        monty.left(90)
        monty.forward(h)
        monty.left(90)
    monty.end_fill()

bands = 10
band_w = 36
band_h = 280
left = -bands * band_w / 2

for i in range(bands):
    v = 32 + i * 22
    filled_rect(left + i * band_w, -band_h / 2, band_w, band_h, gray(v))`);
</script>

The buggy line builds both hex digits from `v % 16`, throwing away the important first digit. The fix is `digits[v // 16] + digits[v % 16]` — integer division gives the "sixteens" digit and the remainder gives the "ones" digit.

## Experiments

1. **Use more, narrower bands.** Change `bands = 10` to `bands = 20`, `band_w = 36` to `band_w = 18`, and `v = 32 + i * 22` to `v = 32 + i * 11`. You'll know it worked when the staircase looks almost like a smooth gradient — but the phantom stripes are still there.

2. **Reverse the gradient.** Change the brightness line to `v = 230 - i * 22`. You'll know it worked when the bands run light-to-dark from left to right instead.

3. **Make it a blue gradient.** In `gray()`, change the return line to `return '#0000' + pair` so only the blue channel changes. You'll know it worked when the bands step from near-black to bright blue — do you still see Mach bands in color?

4. **Test the illusion's limit.** Change the step from `22` to `4` (a very subtle gradient). You'll know it worked when the bands are nearly the same shade — are the phantom stripes weaker now?

!!! mascot-celebration "You Caught Your Eyes Cheating!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Ten flat rectangles, zero stripes in the code — yet stripes everywhere you look.
    You also learned how to build any hex color from a number using `//` and `%`.
    Up next: **Vasarely Sphere** — a flat grid of dots that bulges right out of the page.
