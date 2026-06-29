---
hide:
    - toc
---
# Mountain Range

By the end of this lab you'll be able to:

- Write a `mountain(x, peak_y, width, color)` function using `goto()` waypoints
- Layer function calls from back to front to create a sense of depth
- Use color value (dark vs light) to signal distance — a key technique in art

Three layered mountain ranges recede into a sky gradient — the far peaks are pale
and cool, the near peaks are deep blue, creating depth with nothing but color.

!!! mascot-welcome "Welcome to the Mountain Range!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Artists have known for centuries that distant objects look lighter and cooler.
    In this lab you'll use the same trick in code to create a landscape with depth!
    Let's code it together!

## How the Depth Works

We draw three mountain layers in order: **background first, foreground last**.
Each layer uses a progressively darker, more saturated blue.
Since fills are opaque, each front layer partially covers the layers behind it,
naturally creating the illusion of distance.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def mountain(x, peak_y, width, color):
    monty.penup()
    monty.goto(x - width // 2, -190)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    monty.goto(x, peak_y)
    monty.goto(x + width // 2, -190)
    monty.end_fill()

# sky
monty.color('lightsteelblue')
monty.begin_fill()
monty.goto(-300, -190)
monty.goto(-300, 200)
monty.goto(300, 200)
monty.goto(300, -190)
monty.end_fill()

# layers: back to front, light to dark
mountain(   0,  170, 600, 'lightsteelblue')
mountain(-150,  120, 320, 'steelblue')
mountain( 160,  130, 350, 'cornflowerblue')
mountain( -30,   60, 260, 'navy')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The mountains are drawn back-to-front. Which color will appear in the very foreground?
    Scan the function calls and make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def mountain(x, peak_y, width, color):
    monty.penup()
    monty.goto(x - width // 2, -190)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    monty.goto(x, peak_y)
    monty.goto(x + width // 2, -190)
    monty.end_fill()

monty.color('lightsteelblue')
monty.begin_fill()
monty.goto(-300, -190)
monty.goto(-300, 200)
monty.goto(300, 200)
monty.goto(300, -190)
monty.end_fill()

mountain(   0,  170, 600, 'lightsteelblue')
mountain(-150,  120, 320, 'steelblue')
mountain( 160,  130, 350, 'cornflowerblue')
mountain( -30,   60, 260, 'navy')
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

The **navy** foreground mountain is drawn last and appears closest. Were you right?

## How It Works

`mountain()` draws a filled triangle using three `goto()` calls: left base → peak → right base.
The base y-coordinate is always `-190` (bottom of canvas) so all mountains share a common ground line.

The sky rectangle is drawn before the mountains so it serves as the background layer — any later fill will appear on top of it.

## Explanation Table

| Line | What it does |
|------|-------------|
| `monty.goto(x - width//2, -190)` | Left base of the mountain triangle |
| `monty.goto(x, peak_y)` | The peak — highest point of the triangle |
| `monty.goto(x + width//2, -190)` | Right base — closes the triangle |
| Draw order: back → front | Later draws appear on top (closer to viewer) |
| Lighter color = more distant | Atmospheric perspective trick |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Snow Cap"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Add a **small white triangle** on top of the navy foreground mountain to simulate snow.
    Call `mountain()` one more time with a smaller width, higher `peak_y`, and `'white'` color.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def mountain(x, peak_y, width, color):
    monty.penup()
    monty.goto(x - width // 2, -190)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    monty.goto(x, peak_y)
    monty.goto(x + width // 2, -190)
    monty.end_fill()

monty.color('lightsteelblue')
monty.begin_fill()
monty.goto(-300,-190); monty.goto(-300,200); monty.goto(300,200); monty.goto(300,-190)
monty.end_fill()

mountain(   0,  170, 600, 'lightsteelblue')
mountain(-150,  120, 320, 'steelblue')
mountain( 160,  130, 350, 'cornflowerblue')
mountain( -30,   60, 260, 'navy')
# ADD ONE CALL: white snow cap on the navy mountain (x=-30, peak slightly higher, narrow width)
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

Add `mountain(-30, 70, 80, 'white')` — a narrow white triangle overlapping the top of the navy peak.

## Experiments

1. **Add a sunset sky.** Change the sky color from `'lightsteelblue'` to `'darkorange'`. You'll know it worked when the scene looks like dusk.

2. **Add a tree line.** Before the foreground mountain, add a row of small dark-green triangles across the base. You'll know it worked when a forest silhouette appears at the mountain's foot.

3. **Make taller mountains.** Change `peak_y = 170` for the background range to `220`. You'll know it worked when the back mountains tower above the canvas top.

4. **Add a lake.** Draw a filled blue ellipse at the bottom center after all mountains. You'll know it worked when a body of water appears in the foreground.

!!! mascot-celebration "Beautiful Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You used layered drawing, color value, and function calls to create a landscape
    with real visual depth — an artist's technique implemented in pure Python!
    Up next: **Archimedean Spiral** — how a growing step length creates a perfect spiral.
