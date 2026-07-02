---
hide:
    - toc
---
# Concentric Ring Pulsation

By the end of this lab you'll be able to:

- Build a bull's-eye by layering filled circles from largest to smallest
- Generate a decreasing sequence where each step shrinks by a percentage
- Explain how warm/cool color contrast makes a still image appear to vibrate

A bull's-eye of rings that alternate between warm colors (orange, crimson) and cool colors (blue, teal), with the rings squeezing thinner and thinner toward the center. Stare at it and the rings seem to shimmer and pulse — warm colors push forward while cool colors pull back, and your eyes never settle.

!!! mascot-welcome "Welcome to Concentric Ring Pulsation!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Warm colors leap toward you, cool colors sink away — and when you
    alternate them in shrinking rings, the whole picture starts to hum.
    Op artists call this vibration. Let's make some!

## How It Works

There is no "ring" command — the trick is layering. We draw a filled circle of radius 180, then a slightly smaller one on top of it, then a smaller one still, each in the next color. Every circle covers the middle of the previous one, so only a ring of each color stays visible. The gap between radii starts at 30 and is multiplied by 0.85 each time, so the rings get narrower as they crowd toward the center.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

colors = ['darkorange', 'royalblue', 'crimson', 'teal']

def filled_circle(r, color):
    monty.penup()
    monty.goto(0, -r)
    monty.setheading(0)
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.begin_fill()
    monty.circle(r)
    monty.end_fill()

r = 180.0
step = 30.0
i = 0
while r > 4:
    filled_circle(r, colors[i % 4])
    r = r - step
    step = step * 0.85
    if step < 5:
        step = 5
    i = i + 1
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The first circle has radius 180 and every new circle is smaller,
    with the step shrinking by 15% each time.
    Will the **widest** ring end up at the outside edge or at the center?
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

colors = ['darkorange', 'royalblue', 'crimson', 'teal']

def filled_circle(r, color):
    monty.penup()
    monty.goto(0, -r)
    monty.setheading(0)
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.begin_fill()
    monty.circle(r)
    monty.end_fill()

r = 180.0
step = 30.0
i = 0
while r > 4:
    filled_circle(r, colors[i % 4])
    r = r - step
    step = step * 0.85
    if step < 5:
        step = 5
    i = i + 1`);
</script>

The widest ring is on the outside — each ring's width equals the current `step`, which starts at 30 and shrinks every loop. Were you right?

## How It Works

Your eye focuses warm colors (long wavelengths, like red and orange) slightly differently than cool colors (short wavelengths, like blue). Placed side by side at high contrast, the boundary between them never quite settles on your retina — the colors fight, and the edge appears to shimmer. The shrinking ring widths supercharge this: as the rings get thinner toward the center, the warring edges pack closer and closer together, so the middle of the bull's-eye buzzes hardest.

## Explanation Table

| Line | What it does |
|------|-------------|
| `filled_circle(r, colors[i % 4])` | Paints a full disc — each disc covers the middle of the one before |
| `r = r - step` | The next circle is smaller, leaving a visible ring of the old color |
| `step = step * 0.85` | Each ring is 15% thinner than the last — a decreasing sequence |
| `if step < 5: step = 5` | Keeps rings at least 5 pixels wide so the loop always finishes |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    This version was supposed to draw a bull's-eye too — but all you get is
    ONE giant solid disc. The loop really does draw seven circles in four colors.
    Where did the other six go? Fix the code so all the rings show.

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

colors = ['darkorange', 'royalblue', 'crimson', 'teal']

def filled_circle(r, color):
    monty.penup()
    monty.goto(0, -r)
    monty.setheading(0)
    monty.pendown()
    monty.pencolor(color)
    monty.fillcolor(color)
    monty.begin_fill()
    monty.circle(r)
    monty.end_fill()

r = 20.0
i = 0
while r < 181:
    filled_circle(r, colors[i % 4])
    r = r + 25
    i = i + 1`);
</script>

The circles are drawn smallest to largest, so every new disc buries all the ones before it — you only ever see the last, biggest circle. Layering only works largest-first: start at `r = 180.0` and count *down*.

## Experiments

1. **Make equal-width rings.** Delete the `step = step * 0.85` line. You'll know it worked when every ring is the same 30-pixel width — does it still vibrate as much?

2. **Turn up the squeeze.** Change `0.85` to `0.75`. You'll know it worked when the rings thin out much faster and the center becomes a dense, buzzing target.

3. **Go maximum contrast.** Change the color list to `['red', 'blue', 'red', 'blue']`. You'll know it worked when the bull's-eye is only two clashing colors — many people find this version vibrates the most.

4. **Calm it down.** Change the colors to `['navy', 'royalblue', 'steelblue', 'teal']` — all cool. You'll know it worked when the rings look peaceful instead of pulsing, proving the warm/cool fight was the engine.

!!! mascot-celebration "You Made a Still Image Move!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Layered circles, a shrinking step, and clashing warm/cool colors —
    that's a complete op-art vibration machine in about 25 lines of Python.
    That wraps up the optical illusions! Browse the **Turtle Graphics Gallery** for your next challenge!
