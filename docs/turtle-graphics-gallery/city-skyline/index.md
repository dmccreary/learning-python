---
hide:
    - toc
---
# City Skyline

By the end of this lab you'll be able to:

- Write a `building()` function with multiple parameters
- Compose a scene from many function calls with different arguments
- Draw windows with nested loops inside a drawing function

Ten skyscrapers of varied heights and shades line up across the canvas,
their yellow windows glowing against the dark silhouettes.

!!! mascot-welcome "Welcome to the City Skyline!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll write one function that draws an entire building — walls and windows —
    then call it 10 times to build a full city. Let's code it together!

## How the Scene Works

The `building(x, w, h, color)` function draws one filled rectangle at position `x`,
with width `w`, height `h`, and fill `color`. Then it loops to add yellow window dots.

After defining the function once, we call it 10 times with different arguments —
each call produces a completely different skyscraper.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def building(x, w, h, color):
    monty.penup()
    monty.goto(x, -180)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()
    for row in range(h // 35):
        for col in range(w // 20):
            monty.penup()
            monty.goto(x + 10 + col * 18, -160 + row * 30)
            monty.dot(8, 'yellow')

data = [(-280,45,110,'#2d2d2d'),(-225,50,160,'#3a3a3a'),(-165,40,90,'#252525'),
        (-115,55,200,'#333'),(-50,60,140,'#2a2a2a'),(20,50,170,'#383838'),
        (80,45,120,'#2d2d2d'),(135,55,90,'#303030'),(200,50,180,'#3a3a3a'),
        (260,40,100,'#282828')]

for d in data:
    building(*d)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The `building()` function is called 10 times, each with different `h` (height) values.
    Which building will be the tallest — the first one drawn or the last?
    Scan the data list and make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def building(x, w, h, color):
    monty.penup()
    monty.goto(x, -180)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()
    for row in range(h // 35):
        for col in range(w // 20):
            monty.penup()
            monty.goto(x + 10 + col * 18, -160 + row * 30)
            monty.dot(8, 'yellow')

data = [(-280,45,110,'dimgray'),(-225,50,160,'darkslategray'),(-165,40,90,'gray'),
        (-115,55,200,'slategray'),(-50,60,140,'dimgray'),(20,50,170,'darkgray'),
        (80,45,120,'slategray'),(135,55,90,'gray'),(200,50,180,'darkslategray'),
        (260,40,100,'dimgray')]

for d in data:
    building(*d)
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

The tallest building has `h=200` — that's the 4th entry at `x=-115`. Were you right?

## How It Works

`for side in [w, h, w, h]` is a clever loop over a list of lengths: right side, top, left side, bottom — drawing the rectangle without hard-coding four separate `forward` calls.

`building(*d)` uses the **unpacking operator** `*` to spread a tuple `(x, w, h, color)` into four separate arguments, so you don't have to type `building(d[0], d[1], d[2], d[3])`.

## Explanation Table

| Line | What it does |
|------|-------------|
| `def building(x, w, h, color)` | Function with four parameters: position, width, height, color |
| `for side in [w, h, w, h]` | Draw four sides in one loop using a list |
| `h // 35` | Integer division: number of window rows that fit |
| `w // 20` | Number of window columns that fit |
| `building(*d)` | Unpack tuple `d` into function arguments |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Rooftop"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The `building()` function below draws walls and windows but has no rooftop detail.
    Add **two lines** after `end_fill()` to draw a thin red rectangle (`height = 10`) across the roof.

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def building(x, w, h, color):
    monty.penup()
    monty.goto(x, -180)
    monty.pendown()
    monty.color(color)
    monty.begin_fill()
    for side in [w, h, w, h]:
        monty.forward(side)
        monty.left(90)
    monty.end_fill()
    # ADD: draw a red rooftop rectangle here
    for row in range(h // 35):
        for col in range(w // 20):
            monty.penup()
            monty.goto(x + 10 + col * 18, -160 + row * 30)
            monty.dot(8, 'yellow')

building(-100, 80, 150, 'slategray')
building(30, 60, 120, 'dimgray')
building(110, 70, 180, 'darkslategray')
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

After `end_fill()` add: `monty.penup(); monty.goto(x, -180+h)` then draw a red filled `w × 10` rectangle.

## Experiments

1. **Add a sky.** Before calling any buildings, draw a large dark-blue filled rectangle covering the whole canvas background. You'll know it worked when the skyline sits against a night sky.

2. **Add a moon.** After the sky, add `monty.penup(); monty.goto(100, 100); monty.dot(60, 'lightyellow')`. You'll know it worked when a glowing circle appears above the skyline.

3. **Change the window color.** Replace `'yellow'` with `'white'`. You'll know it worked when the windows look like fluorescent office lights.

4. **Make a wider city.** Add 5 more buildings to the `data` list. You'll know it worked when the skyline extends further across the canvas.

!!! mascot-celebration "Fantastic Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You composed an entire scene from a single reusable function!
    That's exactly how game engines, CAD tools, and map renderers work under the hood.
    Up next: **Snowflake Arms** — using a function to build six-fold symmetry.
