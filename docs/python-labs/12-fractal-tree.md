# Fractal Tree with Recursion

By the end of this lesson you'll be able to:

- Explain what **recursion** means — a function that calls itself
- Trace how a recursive function stops using a base case
- Draw a branching tree where each branch spawns two smaller branches

A **fractal** is a pattern that repeats itself at smaller and smaller scales. The most beautiful fractals in nature — trees, ferns, coastlines — are built exactly this way. In this lab you'll write a function that draws a branch, then calls *itself* twice to draw two smaller branches at the tip, and so on until the branches are too small to see.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Recursion is one of the most magical ideas in computer science.
    When you understand it, you'll see it everywhere — from math to nature to art.
    Let's code it together!

## What Is Recursion?

**Recursion** is when a function calls itself. Without a stopping condition, it would call itself forever — so every recursive function needs a **base case**: a condition where it stops and returns without calling itself again.

Here is the pattern:

```python
def draw_branch(size, level):
    if level == 0:      # base case: stop here
        return
    monty.forward(size)
    draw_branch(size * 0.6, level - 1)   # left branch
    draw_branch(size * 0.6, level - 1)   # right branch
    monty.backward(size)
```

Each call passes a *smaller* `size` and a *lower* `level`. When `level` reaches 0, the recursion stops.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.shape('turtle')
monty.speed(10)
monty.left(90)

monty.penup()
monty.goto(0, -160)
monty.pendown()

colors = ['brown', 'sienna', 'green', 'limegreen']

def draw_branch(size, level):
    if level == 0:
        return
    monty.color(colors[min(level, len(colors) - 1)])
    monty.pensize(max(level, 1))
    monty.forward(size)
    monty.right(25)
    draw_branch(size * 0.65, level - 1)
    monty.left(50)
    draw_branch(size * 0.65, level - 1)
    monty.right(25)
    monty.backward(size)

draw_branch(80, 4)
monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The function starts with `level = 4` and calls itself with `level - 1` each time.
    How many levels of branching will the tree have? Will it look more like a real tree or a geometric pattern?
    Make your guess — then click Run!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../js/codemirror-lab.js"></script>

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
monty.shape('turtle')
monty.speed(10)
monty.left(90)

monty.penup()
monty.goto(0, -160)
monty.pendown()

colors = ['brown', 'sienna', 'green', 'limegreen']

def draw_branch(size, level):
    if level == 0:
        return
    monty.color(colors[min(level, len(colors) - 1)])
    monty.pensize(max(level, 1))
    monty.forward(size)
    monty.right(25)
    draw_branch(size * 0.65, level - 1)
    monty.left(50)
    draw_branch(size * 0.65, level - 1)
    monty.right(25)
    monty.backward(size)

draw_branch(80, 4)
monty.hideturtle()`);
</script>

Were you right? A branching tree with brown trunk, narrowing branches, and green tips at the leaves — all from one short function calling itself!

## How It Works

`draw_branch(80, 4)` draws an 80-step trunk, then calls itself twice with `size * 0.65` (shrinking each branch by 35%) and `level - 1`. Each of those calls draws a smaller branch and calls *itself* again — until `level` reaches 0, at which point the function just returns. Then every function call backtracks with `backward(size)` to restore the turtle to where the branch started.

`pensize(max(level, 1))` makes trunk lines thick and tip lines thin — thicker at higher levels, but always at least 1 pixel.

## Explanation Table

| Line | What it does |
|------|-------------|
| `if level == 0: return` | Base case — stops recursion when branches are too small |
| `monty.forward(size)` | Draws the current branch |
| `monty.right(25)` | Angles right before drawing the right sub-branch |
| `draw_branch(size * 0.65, level - 1)` | Recursive call — draws a smaller branch |
| `monty.left(50)` | Swings left to draw the left sub-branch |
| `monty.backward(size)` | Retraces the current branch so the caller's turtle position is restored |

!!! mascot-encourage "Recursion Feels Tricky at First!"
    ![Monty encouraging](../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    It's normal if you don't fully understand recursion the first time you see it.
    The key insight: each function call handles *one branch*, and it trusts the smaller
    calls to handle the rest. Try changing `level` from 4 to 2 to see a simpler version!

## Learning Check

!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    The program below tries to draw a fractal tree, but the base case is wrong —
    it stops too early so only the trunk appears. Can you find and fix the condition?

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
monty.speed(10)
monty.left(90)

monty.penup()
monty.goto(0, -160)
monty.pendown()

def draw_branch(size, level):
    if level == 4:   # bug: this stops when level IS 4, but we start AT 4!
        return
    monty.color('brown')
    monty.forward(size)
    monty.right(25)
    draw_branch(size * 0.65, level - 1)
    monty.left(50)
    draw_branch(size * 0.65, level - 1)
    monty.right(25)
    monty.backward(size)

draw_branch(80, 4)
monty.hideturtle()`);
</script>

## Experiments

Try these changes to the fractal tree code. Predict first, then run!

1. Change `draw_branch(80, 4)` to `draw_branch(80, 3)`.
   **You'll know it worked when** the tree has fewer levels and looks simpler.

2. Change the branch angle: replace both `25` values with `35`.
   **You'll know it worked when** the tree is wider and flatter.

3. Change `size * 0.65` to `size * 0.5` so branches shrink by half each time.
   **You'll know it worked when** the tree is taller and more symmetrical.

4. Change `draw_branch(80, 4)` to `draw_branch(80, 5)`.
   **You'll know it worked when** the tree has denser, more intricate leaf clusters.

5. Replace the `colors` list entries with `'darkgreen'` and `'forestgreen'` for the leaf levels.
   **You'll know it worked when** the outer tips of the tree are a deeper green.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You wrote a recursive function — one of the most powerful patterns in all of programming!
    Real artists and scientists use exactly this technique to generate trees, snowflakes, and mountains.
    Let's code it together!
