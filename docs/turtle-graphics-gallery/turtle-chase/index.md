---
hide:
    - toc
---
# Turtle Chase

By the end of this lab you'll be able to:

- Run two turtles at once inside a single animation loop
- Aim one turtle at another using `math.atan2(dy, dx)`
- Detect a "catch" by comparing the squared distance between turtles

A green prey turtle wanders randomly around the canvas while a red hunter turtle chases it — every frame the hunter re-aims straight at the prey and takes a slightly bigger step. The chase ends the moment the hunter gets within 10 pixels.

!!! mascot-welcome "Welcome to Turtle Chase!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Two turtles, one canvas: a wanderer and a hunter.
    This is your first program where two characters *interact*!
    Let's code it together!

## How It Works

Each frame does three things. The prey turns a random amount (up to ±30°) and steps forward 3.5 pixels — a random walk. The hunter computes the vector to the prey (`dx`, `dy`), converts it to a heading with `math.atan2(dy, dx)`, and steps forward 4.0 pixels — slightly faster than the prey, so it always gains ground. Finally, if the squared distance `dx*dx + dy*dy` drops below 100 (that's 10 pixels), the prey is caught.

## Sample Code

```python
import turtle
import math
import random

random.seed(42)
screen = turtle.Screen()
screen.tracer(0)

# ... create prey (green) and hunter (red) turtles ...

for frame in range(300):
    prey.right(random.uniform(-30, 30))
    prey.forward(3.5)
    dx = prey.xcor() - hunter.xcor()
    dy = prey.ycor() - hunter.ycor()
    hunter.setheading(math.degrees(math.atan2(dy, dx)))
    hunter.forward(4.0)
    if dx * dx + dy * dy < 100:
        break
    screen.update()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The hunter moves 4.0 pixels per frame; the prey only 3.5.
    Will the hunter catch the prey before the 300 frames run out?
    Make your guess, then click Run and watch the chase!

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
import random

random.seed(42)

screen = turtle.Screen()
screen.tracer(0)

prey = turtle.Turtle()
prey.shape('turtle')
prey.color('forestgreen')
prey.pensize(2)
prey.penup()
prey.goto(100, 120)
prey.pendown()
prey.speed(0)

hunter = turtle.Turtle()
hunter.shape('turtle')
hunter.color('crimson')
hunter.pensize(2)
hunter.penup()
hunter.goto(-150, -140)
hunter.pendown()
hunter.speed(0)

caught = False
for frame in range(300):
    prey.right(random.uniform(-30, 30))
    prey.forward(3.5)
    if abs(prey.xcor()) > 160 or abs(prey.ycor()) > 160:
        angle = math.atan2(-prey.ycor(), -prey.xcor())
        prey.setheading(math.degrees(angle))
    dx = prey.xcor() - hunter.xcor()
    dy = prey.ycor() - hunter.ycor()
    hunter.setheading(math.degrees(math.atan2(dy, dx)))
    hunter.forward(4.0)
    if dx * dx + dy * dy < 100:
        caught = True
    screen.update()
    if caught:
        break

if caught:
    sign = turtle.Turtle()
    sign.hideturtle()
    sign.penup()
    sign.pencolor('black')
    sign.goto(hunter.xcor(), hunter.ycor() + 25)
    sign.write('Caught!', False, 'center')
screen.update()`);
</script>

The hunter closes in and "Caught!" appears — with a 0.5 pixel-per-frame speed edge and dead-straight aim, the hunter always wins eventually. Were you right?

## How It Works

`math.atan2(dy, dx)` returns the angle of the vector `(dx, dy)` — unlike plain `atan(dy/dx)` it handles all four quadrants and never divides by zero. `math.degrees()` converts radians to the degrees that `setheading()` expects. Notice the wall check: when the prey wanders past ±160, it aims back toward the center `(0, 0)` using the same `atan2` trick — pointing at a target and fleeing to safety are the same math.

## Explanation Table

| Line | What it does |
|------|-------------|
| `prey.right(random.uniform(-30, 30))` | Random walk: small random turn each frame |
| `math.atan2(dy, dx)` | Angle from hunter to prey, safe in all quadrants |
| `hunter.forward(4.0)` | Hunter is 0.5 px/frame faster than the prey |
| `dx * dx + dy * dy < 100` | Within 10 px — squared distance avoids `sqrt` |

## Learning Check

!!! mascot-thinking "Your Turn — Give the Prey a Brain"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This version adds an escape instinct: when the hunter gets within 80 pixels,
    the prey stops wandering and runs **directly away**. The prey is still slower —
    will smarter steering let it survive all 300 frames? Predict, then run it!

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
import random

random.seed(42)

screen = turtle.Screen()
screen.tracer(0)

prey = turtle.Turtle()
prey.shape('turtle')
prey.color('forestgreen')
prey.pensize(2)
prey.penup()
prey.goto(100, 120)
prey.pendown()
prey.speed(0)

hunter = turtle.Turtle()
hunter.shape('turtle')
hunter.color('crimson')
hunter.pensize(2)
hunter.penup()
hunter.goto(-150, -140)
hunter.pendown()
hunter.speed(0)

caught = False
for frame in range(300):
    dx = prey.xcor() - hunter.xcor()
    dy = prey.ycor() - hunter.ycor()
    if dx * dx + dy * dy < 6400:
        prey.setheading(math.degrees(math.atan2(dy, dx)))
    else:
        prey.right(random.uniform(-30, 30))
    if abs(prey.xcor()) > 160 or abs(prey.ycor()) > 160:
        angle = math.atan2(-prey.ycor(), -prey.xcor())
        prey.setheading(math.degrees(angle))
    prey.forward(3.5)
    dx = prey.xcor() - hunter.xcor()
    dy = prey.ycor() - hunter.ycor()
    hunter.setheading(math.degrees(math.atan2(dy, dx)))
    hunter.forward(4.0)
    if dx * dx + dy * dy < 100:
        caught = True
    screen.update()
    if caught:
        break

sign = turtle.Turtle()
sign.hideturtle()
sign.penup()
sign.pencolor('black')
if caught:
    sign.goto(hunter.xcor(), hunter.ycor() + 25)
    sign.write('Caught!', False, 'center')
else:
    sign.goto(prey.xcor(), prey.ycor() + 25)
    sign.write('Got away!', False, 'center')
screen.update()`);
</script>

The fleeing prey survives much longer than the random walker — running directly away cancels most of the hunter's speed advantage, but the walls keep forcing it to turn. Smart steering matters as much as speed!

## Experiments

1. **Even the speeds.** Set the hunter's step to 3.5 too. You'll know it worked when the hunter can no longer close the gap and "Got away!" appears.

2. **Add a second hunter.** Create `hunter2` starting at (150, -140) with the same chase logic. You'll know it worked when the prey gets cornered between two red turtles.

3. **Lazy aim.** Make the hunter re-aim only every 10th frame (`if frame % 10 == 0:`). You'll know it worked when the red path becomes a series of straight line segments that lag behind the prey.

4. **Shrink the catch radius.** Change `100` to `25` (5 pixels). You'll know it worked when the hunter has to practically touch the prey to win.

!!! mascot-celebration "Master of the Hunt!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Two interacting characters, targeting math, and collision detection —
    you just wrote the core loop of every chase scene in video games!
    Up next: **Reaction-Diffusion Pattern** — animal-skin patterns from pure chemistry math.
