---
hide:
    - toc
---
# Bouncing Ball

By the end of this lab you'll be able to:

- Animate a turtle by updating its position in a loop using velocity variables
- Reverse velocity when the ball hits a wall (`vx = -vx`)
- Use `turtle.tracer(0)` and `turtle.update()` for smooth animation

A colored ball bounces around inside a rectangular boundary. Each frame, the ball moves by its velocity, and when it hits a wall, the velocity component reverses — simulating elastic collision.

!!! mascot-welcome "Welcome to Bouncing Ball!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This is your first **animated** turtle program — the turtle moves continuously
    inside a loop, and you see smooth motion on screen!
    Let's code it together!

## How It Works

Two variables `vx` and `vy` store the ball's velocity. Each step: `x += vx`, `y += vy`. If `x` hits the wall bounds, `vx = -vx` (reverse horizontal direction). If `y` hits the bounds, `vy = -vy`. `turtle.tracer(0)` turns off auto-drawing so we control when to refresh the screen.

## Sample Code

```python
import turtle
screen = turtle.Screen()
screen.tracer(0)

ball = turtle.Turtle()
ball.shape('circle')
ball.color('royalblue')
ball.penup()
ball.speed(0)

x, y = 0, 0
vx, vy = 3, 2
boundary = 150

for _ in range(400):
    x += vx
    y += vy
    if x > boundary or x < -boundary:
        vx = -vx
    if y > boundary or y < -boundary:
        vy = -vy
    ball.goto(x, y)
    screen.update()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The ball starts at (0,0) with velocity (3,2).
    After bouncing off all four walls many times, will it return to (0,0)?
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
screen = turtle.Screen()
screen.tracer(0)

ball = turtle.Turtle()
ball.shape('circle')
ball.color('royalblue')
ball.penup()
ball.speed(0)

box = turtle.Turtle()
box.penup()
box.goto(-150, -150)
box.pendown()
box.pencolor('gray')
for _ in range(4):
    box.forward(300)
    box.left(90)
box.hideturtle()

x, y = 0, 0
vx, vy = 3, 2
boundary = 145

for _ in range(400):
    x += vx
    y += vy
    if x > boundary or x < -boundary:
        vx = -vx
    if y > boundary or y < -boundary:
        vy = -vy
    ball.goto(x, y)
    screen.update()`);
</script>

The ball bounces around the box — reversing direction whenever it hits a wall. Were you right about returning to the origin?

## How It Works

`screen.tracer(0)` tells turtle not to draw automatically after each command. `screen.update()` forces a single screen redraw. This gives smooth animation instead of flicker. The ball's position `(x, y)` is updated each step, and the boundary check `x > boundary` detects wall collisions.

## Explanation Table

| Line | What it does |
|------|-------------|
| `screen.tracer(0)` | Disable auto-update for smooth animation |
| `vx, vy = 3, 2` | Initial velocity vector |
| `if x > boundary: vx = -vx` | Reverse x velocity on wall hit |
| `screen.update()` | Redraw the screen (one frame) |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Trail"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Add `ball.pendown()` before the loop to leave a trail.
    The ball's path will trace out a geometric pattern — predict what it looks like!

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
screen = turtle.Screen()
screen.tracer(0)

ball = turtle.Turtle()
ball.shape('circle')
ball.color('crimson')
ball.penup()
ball.speed(0)

x, y = 0, 0
vx, vy = 5, 3
boundary = 145

ball.goto(x, y)
ball.pendown()
ball.pensize(1)

for _ in range(600):
    x += vx
    y += vy
    if x > boundary or x < -boundary:
        vx = -vx
    if y > boundary or y < -boundary:
        vy = -vy
    ball.goto(x, y)
    screen.update()`);
</script>

The trail traces out a Lissajous-like figure! With vx=5, vy=3 (ratio 5:3), the path eventually returns to its starting point after tracing a complex geometric pattern.

## Experiments

1. **Make the ball leave a color trail.** Change the color each time a wall is hit. You'll know it worked when the trail changes color at each bounce.

2. **Two balls.** Create a second turtle `ball2` with a different starting velocity. You'll know it worked when two balls bounce independently.

3. **Speed up over time.** Add `vx *= 1.002; vy *= 1.002` each step. You'll know it worked when the ball gradually bounces faster.

4. **Gravity simulation.** Add `vy -= 0.1` each step and set `if y < -boundary: vy = abs(vy) * 0.9`. You'll know it worked when the ball falls and bounces like gravity.

!!! mascot-celebration "Animated!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You wrote your first animation loop — position, velocity, collision detection!
    These are the building blocks of every physics-based video game.
    Up next: **Clock Face** — animated hands that show the current time.
