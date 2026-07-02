---
hide:
    - toc
---
# Scintillating Grid

By the end of this lab you'll be able to:

- Place bars and dots precisely on a grid using nested loops and coordinate math
- Layer shapes in the right order so later drawings sit on top of earlier ones
- Explain how local contrast tricks your eyes into seeing dots that flicker

A dark background, a lattice of medium-gray "streets," and a crisp white dot at every intersection. When you look around the picture, ghostly dark dots flash inside the white ones — but only at the intersections you are *not* looking directly at. Chase one and it vanishes! This is the scintillating grid illusion, discovered in 1994.

!!! mascot-welcome "Welcome to the Scintillating Grid!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This is one of the strongest illusions ever found — your eyes will see
    black dots flickering inside dots that the code paints pure white.
    Twenty-five white dots, zero black ones. Let's build it!

## How It Works

First `screen.bgcolor` fills the background dark gray. One loop draws five vertical and five horizontal gray bars, spaced `gap` pixels apart, using a filled-rectangle helper. Then a nested loop visits all 25 intersections and stamps a white dot at each one. The dots are slightly wider than the bars, so they poke out into the dark squares — that tiny overlap is what makes the flicker so strong.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
screen = turtle.Screen()
screen.bgcolor('#282828')

bar = 10
gap = 70

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

for i in range(-2, 3):
    filled_rect(i * gap - bar / 2, -180, bar, 360, 'gray')
    filled_rect(-180, i * gap - bar / 2, 360, bar, 'gray')

for i in range(-2, 3):
    for j in range(-2, 3):
        monty.penup()
        monty.goto(i * gap, j * gap)
        monty.dot(16, 'white')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code stamps exactly 25 white dots and never draws a single dark one.
    When you let your eyes wander around the finished grid,
    will all 25 dots stay white? Make your guess, then click Run!

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
screen = turtle.Screen()
screen.bgcolor('#282828')

bar = 10
gap = 70

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

for i in range(-2, 3):
    filled_rect(i * gap - bar / 2, -180, bar, 360, 'gray')
    filled_rect(-180, i * gap - bar / 2, 360, bar, 'gray')

for i in range(-2, 3):
    for j in range(-2, 3):
        monty.penup()
        monty.goto(i * gap, j * gap)
        monty.dot(16, 'white')`);
</script>

Dark dots flicker at the intersections in the corner of your eye, but the dot you stare at stays white. Were you right?

## How It Works

Cells in your retina measure brightness by comparing a spot against its surroundings — a trick called lateral inhibition. At an intersection, a white dot is surrounded by four bright gray streets, so its brightness signal gets pushed down hard and it momentarily reads as dark. Your central vision (the fovea) uses much smaller comparison zones, so the dot you look at directly is measured correctly and stays white. That is why the dark ghosts always dance just out of reach.

## Explanation Table

| Line | What it does |
|------|-------------|
| `screen.bgcolor('#282828')` | Dark gray background — the squares between the streets |
| `filled_rect(i * gap - bar / 2, -180, bar, 360, 'gray')` | One vertical street, centered on grid line `i` |
| `for i in range(-2, 3):` | Five grid lines at -140, -70, 0, 70, 140 |
| `monty.dot(16, 'white')` | White dot, wider than the 10-pixel street, at each of the 25 crossings |

## Learning Check

!!! mascot-warning "Find the Bug"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Disaster — all 25 white dots have vanished from this version, yet the
    dot-stamping loop is definitely there. Nothing was deleted, but two blocks
    of code were swapped. Can you figure out why the dots are invisible and fix it?

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
screen = turtle.Screen()
screen.bgcolor('#282828')

bar = 10
gap = 70

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

for i in range(-2, 3):
    for j in range(-2, 3):
        monty.penup()
        monty.goto(i * gap, j * gap)
        monty.dot(16, 'white')

for i in range(-2, 3):
    filled_rect(i * gap - bar / 2, -180, bar, 360, 'gray')
    filled_rect(-180, i * gap - bar / 2, 360, bar, 'gray')`);
</script>

The dots are drawn *first*, then the gray bars are painted right over them — turtle graphics layers shapes in drawing order, like coats of paint. Move the dot loop below the bar loop and the dots reappear on top.

## Experiments

1. **Shrink the dots.** Change `monty.dot(16, 'white')` to `monty.dot(10, 'white')` so the dots exactly match the street width. You'll know it worked when the dots no longer poke into the dark squares — is the flicker weaker?

2. **Brighten the streets.** Change both `'gray'` strings to `'lightgray'`. You'll know it worked when the streets are nearly white — the classic version of this experiment makes the scintillation fade.

3. **Pack the grid tighter.** Change `gap = 70` to `gap = 45` and both `range(-2, 3)` grid loops to `range(-3, 4)`. You'll know it worked when a 7 × 7 grid of 49 dots appears and the flickering gets even busier.

4. **Try a colored version.** Change the dot color to `'yellow'` and the background to `'#102040'`. You'll know it worked when yellow dots sparkle on a dark blue grid — the ghost dots still appear!

!!! mascot-celebration "Now You See Them, Now You Don't!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built one of the most powerful illusions in science with two loops
    and 25 white dots — and learned why drawing order matters as much as coordinates.
    Up next: **Impossible Triangle** — an object that cannot exist, drawn in 30 lines.
