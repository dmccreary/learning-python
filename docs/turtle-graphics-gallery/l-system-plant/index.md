---
hide:
    - toc
---
# L-System Plant

By the end of this lab you'll be able to:

- Apply Lindenmayer system (L-system) rules to expand a string over multiple generations
- Interpret an L-system string as turtle drawing commands: `F` = forward, `+/-` = turn, `[/]` = branch
- Understand how `[` and `]` implement a position stack to create branching structures

An L-system plant grows from a one-character seed string. Applying rewriting rules for 5 generations produces a long string of turtle commands that draws a realistic-looking plant with branches, leaves, and stems.

!!! mascot-welcome "Welcome to the L-System Plant!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In 1968, biologist Aristid Lindenmayer invented L-systems to model how plants grow.
    The core idea: a short string of rules expands into complex branching structures!
    Let's code one together!

## How It Works

Start with axiom `"F"`. Apply rules `{'F': 'FF', 'X': 'F+[[X]-X]-F[-FX]+X'}` for 5 generations. Interpret the result: `F`=forward, `+`=left 25°, `-`=right 25°, `[`=push state, `]`=pop state.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

rules = {'F': 'FF', 'X': 'F+[[X]-X]-F[-FX]+X'}
axiom = 'X'
sentence = axiom

for _ in range(5):
    new_sentence = ''
    for ch in sentence:
        new_sentence += rules.get(ch, ch)
    sentence = new_sentence

stack = []
monty.penup()
monty.goto(0, -150)
monty.setheading(90)
monty.pendown()
monty.pencolor('saddlebrown')
step = 3
angle = 25

for ch in sentence:
    if ch == 'F':
        monty.pencolor('saddlebrown')
        monty.forward(step)
    elif ch == '+':
        monty.left(angle)
    elif ch == '-':
        monty.right(angle)
    elif ch == '[':
        stack.append((monty.pos(), monty.heading()))
    elif ch == ']':
        pos, heading = stack.pop()
        monty.penup()
        monty.goto(pos)
        monty.setheading(heading)
        monty.pendown()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The L-system rules expand for 5 generations. One short rule produces a long string.
    Will the result look like a geometric pattern, or an actual plant?
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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

rules = {'F': 'FF', 'X': 'F+[[X]-X]-F[-FX]+X'}
axiom = 'X'
sentence = axiom

for _ in range(5):
    new_sentence = ''
    for ch in sentence:
        new_sentence += rules.get(ch, ch)
    sentence = new_sentence

stack = []
monty.penup()
monty.goto(0, -150)
monty.setheading(90)
monty.pendown()
step = 3
angle = 25

for ch in sentence:
    if ch == 'F':
        monty.pencolor('saddlebrown')
        monty.forward(step)
    elif ch == '+':
        monty.left(angle)
    elif ch == '-':
        monty.right(angle)
    elif ch == '[':
        stack.append((monty.pos(), monty.heading()))
    elif ch == ']':
        pos, heading = stack.pop()
        monty.penup()
        monty.goto(pos)
        monty.setheading(heading)
        monty.pendown()`);
</script>

A **branching plant** — the rules produce a fractal-like botanical structure with a central trunk and nested branches. Were you right?

## How It Works

`[` pushes the current turtle position and heading onto a stack. `]` pops them back, returning the turtle to where it branched. This stack-based approach is how all branching L-systems work — no recursion needed!

## Explanation Table

| Line | What it does |
|------|-------------|
| `rules.get(ch, ch)` | If no rule for `ch`, keep it unchanged |
| `stack.append((pos, heading))` | Save turtle state at branch point |
| `stack.pop()` | Restore turtle state after sub-branch |
| `for _ in range(5)` | 5 generations of rule application |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Angle"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `angle = 25` to `angle = 40`. Will the plant look wider, narrower, or the same?
    Predict, then run it!

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

rules = {'F': 'FF', 'X': 'F+[[X]-X]-F[-FX]+X'}
axiom = 'X'
sentence = axiom

for _ in range(5):
    new_sentence = ''
    for ch in sentence:
        new_sentence += rules.get(ch, ch)
    sentence = new_sentence

stack = []
monty.penup()
monty.goto(0, -150)
monty.setheading(90)
monty.pendown()
step = 3
angle = 40

for ch in sentence:
    if ch == 'F':
        monty.pencolor('saddlebrown')
        monty.forward(step)
    elif ch == '+':
        monty.left(angle)
    elif ch == '-':
        monty.right(angle)
    elif ch == '[':
        stack.append((monty.pos(), monty.heading()))
    elif ch == ']':
        pos, heading = stack.pop()
        monty.penup()
        monty.goto(pos)
        monty.setheading(heading)
        monty.pendown()`);
</script>

At 40°, the plant is **wider** — branches spread further from the central axis, making a bushier appearance.

## Experiments

1. **Try 4 generations.** Change `range(5)` to `range(4)`. You'll know it worked when a smaller, simpler plant appears.

2. **Use green for leaves.** After drawing each `F`, check if the next character is `X` and color that segment green. You'll know it worked when leaf branches are green.

3. **Try a different L-system.** Change the rules to `{'F': 'F[+F]F[-F][F]'}` with `axiom = 'F'` and `range(4)`. You'll know it worked when a completely different plant shape appears.

4. **Vary step by depth.** Track how many `[` brackets are open and use `step / (depth + 1)`. You'll know it worked when deeper branches are shorter, like a real tree.

!!! mascot-celebration "A Forest of Rules!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You implemented a Lindenmayer system — one of the most powerful models of biological growth!
    L-systems also generate Koch curves, Sierpiński triangles, and many other fractals.
    Up next: **Turtle Maze Generator** — recursive maze using wall carving.
