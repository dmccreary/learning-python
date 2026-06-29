---
hide:
    - toc
---
# Lindenmayer Snowflake Collection

By the end of this lab you'll be able to:

- Build a library of different L-system rule sets and draw them in a grid
- Compare how different rules produce visually distinct snowflake and fractal shapes
- Understand how the same interpreter produces completely different results from different rules

Six different L-system snowflakes displayed in a 2×3 grid — Koch curve, Sierpiński arrowhead, hex gossamer, crystal, quadratic Koch, and dragon. Same interpreter, six completely different rule sets.

!!! mascot-welcome "Welcome to the Snowflake Collection!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The same L-system interpreter draws completely different patterns
    just by changing the rules. This is the power of data-driven design!
    Let's build a collection of six snowflakes!

## How It Works

An `lsystem(axiom, rules, depth)` function expands the axiom string. A `draw_lsystem(sentence, step, angle, x, y, heading)` function interprets and draws it. Six different `(axiom, rules, angle, depth)` combinations fill a grid.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def expand(axiom, rules, depth):
    s = axiom
    for _ in range(depth):
        s = ''.join(rules.get(c, c) for c in s)
    return s

def draw(sentence, step, angle, x, y, heading):
    stack = []
    monty.penup(); monty.goto(x, y)
    monty.setheading(heading); monty.pendown()
    for c in sentence:
        if c in 'FG':
            monty.forward(step)
        elif c == '+':
            monty.left(angle)
        elif c == '-':
            monty.right(angle)
        elif c == '[':
            stack.append((monty.pos(), monty.heading()))
        elif c == ']':
            p, h = stack.pop()
            monty.penup(); monty.goto(p)
            monty.setheading(h); monty.pendown()

systems = [
    ('F', {'F': 'F+F-F-F+F'}, 3, 90, 4),
    ('F-G-G', {'F': 'F-G+F+G-F', 'G': 'GG'}, 4, 120, 5),
    ('F++F++F', {'F': 'F-F++F-F'}, 4, 60, 5),
    ('X', {'X': 'X+YF+', 'Y': '-FX-Y'}, 10, 90, 4),
    ('F', {'F': 'F+F-F-FF+F+F-F'}, 2, 90, 3),
    ('F', {'F': 'F+F-F-F+F', 'G': 'GG'}, 3, 90, 4),
]

positions = [(-160, 0), (0, 0), (160, 0), (-160, -130), (0, -130), (160, -130)]
colors = ['royalblue', 'crimson', 'forestgreen', 'darkorange', 'purple', 'teal']
steps = [5, 4, 5, 5, 6, 5]

for i, (axiom, rules, depth, angle, _step) in enumerate(systems):
    sentence = expand(axiom, rules, depth)
    x, y = positions[i]
    monty.pencolor(colors[i])
    monty.pensize(1)
    draw(sentence, steps[i], angle, x, y, 0)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Six rule sets, six different angles (60° or 90°), six different depths.
    Will each snowflake look unique, or will they all look similar?
    Make your guess — then click Run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def expand(axiom, rules, depth):
    s = axiom
    for _ in range(depth):
        s = ''.join(rules.get(c, c) for c in s)
    return s

def draw(sentence, step, angle, x, y, heading):
    stack = []
    monty.penup(); monty.goto(x, y)
    monty.setheading(heading); monty.pendown()
    for c in sentence:
        if c in 'FG':
            monty.forward(step)
        elif c == '+':
            monty.left(angle)
        elif c == '-':
            monty.right(angle)
        elif c == '[':
            stack.append((monty.pos(), monty.heading()))
        elif c == ']':
            p, h = stack.pop()
            monty.penup(); monty.goto(p)
            monty.setheading(h); monty.pendown()

systems = [
    ('F', {'F': 'F+F-F-F+F'}, 3, 90, 4),
    ('F-G-G', {'F': 'F-G+F+G-F', 'G': 'GG'}, 4, 120, 5),
    ('F++F++F', {'F': 'F-F++F-F'}, 4, 60, 5),
    ('X', {'X': 'X+YF+', 'Y': '-FX-Y'}, 10, 90, 4),
    ('F+F+F+F', {'F': 'F-F+FF+F-F'}, 3, 90, 4),
    ('F', {'F': 'F[+F]F[-F]F'}, 4, 25, 6),
]

positions = [(-160, 40), (0, 40), (160, 40), (-160, -90), (0, -90), (160, -90)]
colors = ['royalblue', 'crimson', 'forestgreen', 'darkorange', 'purple', 'teal']
steps = [5, 4, 5, 5, 5, 3]

for i, (axiom, rules, depth, angle, _) in enumerate(systems):
    sentence = expand(axiom, rules, depth)
    x, y = positions[i]
    monty.pencolor(colors[i])
    monty.pensize(1)
    draw(sentence, steps[i], angle, x, y, 0)
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

**Six completely different shapes** from six rule sets — Koch curve, Sierpiński, hex, dragon, quadratic Koch, and a plant. Same interpreter, different data. Were you right?

## How It Works

`''.join(rules.get(c, c) for c in s)` uses a generator expression to replace each character with its rule (or itself if no rule exists). This is a one-liner L-system expander. The `draw()` function is a universal L-system turtle interpreter.

## Explanation Table

| Line | What it does |
|------|-------------|
| `''.join(rules.get(c,c) for c in s)` | One-step rule application |
| `if c in 'FG'` | Both F and G are draw-forward commands |
| `stack.append((pos, heading))` | Save state at `[` |
| `systems = [...]` | Each tuple: axiom, rules, depth, angle, unused |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Seventh System"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Add a 7th L-system to the list using the Koch snowflake rules:
    `axiom = 'F--F--F'`, `rules = {'F': 'F+F--F+F'}`, `angle = 60`, `depth = 4`.
    Where will you place it? Predict what it will look like!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def expand(axiom, rules, depth):
    s = axiom
    for _ in range(depth):
        s = ''.join(rules.get(c, c) for c in s)
    return s

def draw(sentence, step, angle, x, y, heading):
    stack = []
    monty.penup(); monty.goto(x, y)
    monty.setheading(heading); monty.pendown()
    for c in sentence:
        if c in 'FG':
            monty.forward(step)
        elif c == '+':
            monty.left(angle)
        elif c == '-':
            monty.right(angle)
        elif c == '[':
            stack.append((monty.pos(), monty.heading()))
        elif c == ']':
            p, h = stack.pop()
            monty.penup(); monty.goto(p)
            monty.setheading(h); monty.pendown()

monty.pencolor('teal')
monty.pensize(1)
sentence = expand('F--F--F', {'F': 'F+F--F+F'}, 4)
draw(sentence, 5, 60, -60, 30, 0)
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

The Koch snowflake — one of the most famous fractals, produced by a single two-character rule.

## Experiments

1. **Increase depth on one system.** Change one system's depth from 4 to 5. You'll know it worked when that fractal is more detailed (and takes longer to draw).

2. **Color by depth.** In `draw()`, change the pen color each time `F` is called (cycling through a palette). You'll know it worked when the fractal has color gradients.

3. **Change all angles to 45.** Some systems will look drastically different, some similar. You'll know it worked when the shapes change to 45°-based geometry.

4. **Design your own rule.** Make up a new `(axiom, rules, angle)` combination and see what it produces. You'll know it worked when a new pattern appears.

!!! mascot-celebration "A Gallery of Fractals!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a universal L-system engine that draws any rule set!
    This is the power of separating data (rules) from algorithm (interpreter) —
    one program, infinite possible outputs.
    Up next: **Generative Art Loop** — the grand finale!
