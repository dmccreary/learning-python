---
hide:
    - toc
---
# Dragon Curve

By the end of this lab you'll be able to:

- Build the Dragon Curve by repeatedly folding a list of turns
- Understand how a sequence of L/R turns encodes a fractal path
- See how list manipulation can replace recursive calls for some fractals

The Dragon Curve — or Heighway Dragon — looks like a folded strip of paper unfolded and laid flat. After 12 folds, the path winds and fills space in a beautiful, never-crossing pattern.

!!! mascot-welcome "Welcome to the Dragon Curve!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Dragon Curve appears on the chapter headings of the book *Jurassic Park*!
    In this lab you'll build it by simulating paper folding with a list. Let's code it together!

## How It Works

Imagine folding a strip of paper in half repeatedly, always folding right. When you unfold it, you see a sequence of left (L) and right (R) creases. The Dragon Curve is what you get when you draw those creases as 90° turns.

The folding rule: take the current sequence, add an 'R', then append the reversed + inverted sequence.

After 12 folds, you have `2^12 - 1 = 4095` turns.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('darkorchid')
monty.pensize(1)

turns = ['R']
for _ in range(12):
    turns = turns + ['R'] + [('L' if t == 'R' else 'R') for t in reversed(turns)]

monty.penup()
monty.goto(-80, 80)
monty.pendown()

step = 4
for t in turns:
    monty.forward(step)
    if t == 'R':
        monty.right(90)
    else:
        monty.left(90)
monty.forward(step)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    After 12 folds, will the path cross itself, or will it somehow avoid self-intersection?
    The Dragon Curve has a surprising property — make your guess then run to find out!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('darkorchid')
monty.pensize(1)

turns = ['R']
for _ in range(12):
    turns = turns + ['R'] + [('L' if t == 'R' else 'R') for t in reversed(turns)]

monty.penup()
monty.goto(-80, 80)
monty.pendown()

step = 4
for t in turns:
    monty.forward(step)
    if t == 'R':
        monty.right(90)
    else:
        monty.left(90)
monty.forward(step)
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

The Dragon Curve **never crosses itself** — the path fills space without any two segments overlapping. Were you right?

## How It Works

The folding rule doubles the list each iteration. After fold `n`, the list has `2^n - 1` entries. The new middle element is always 'R' (the most recent fold direction). The right half is the old list reversed and inverted (L↔R) — that's what the folded half looks like from the unfolded end.

## Explanation Table

| Line | What it does |
|------|-------------|
| `turns = ['R']` | Start with one fold |
| `turns + ['R'] + [...]` | Append the fold marker and the flipped-reversed old sequence |
| `('L' if t == 'R' else 'R')` | Invert each turn: L becomes R, R becomes L |
| `reversed(turns)` | Read the old sequence backward (the other side of the fold) |
| `if t == 'R': right(90)` | Translate turn list to turtle moves |

## Learning Check

!!! mascot-thinking "Your Turn — Reduce to 8 Folds"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `range(12)` to `range(8)`. How many turns will the path have?
    (Hint: `2^8 - 1 = ?`). Predict, then run to check!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.pencolor('darkorchid')
monty.pensize(1)

turns = ['R']
for _ in range(8):
    turns = turns + ['R'] + [('L' if t == 'R' else 'R') for t in reversed(turns)]

monty.penup()
monty.goto(-80, 80)
monty.pendown()

step = 6
for t in turns:
    monty.forward(step)
    if t == 'R':
        monty.right(90)
    else:
        monty.left(90)
monty.forward(step)
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

8 folds → `2^8 - 1 = 255` turns. The shape is recognizably dragon-like but simpler than 12 folds.

## Experiments

1. **Use a larger step.** Change `step = 4` to `step = 6`. The curve fills more canvas. You'll know it worked when the dragon shape is larger.

2. **Color by position.** Add a color list and `monty.pencolor(colors[i % len(colors)])` inside the loop. You'll know it worked when the path is multicolored.

3. **Try 15 folds.** Change to `range(15)` (slower but more detailed). You'll know it worked when you see a much denser, more space-filling curve.

4. **Print the first 10 turns.** Add `print(turns[:10])` before the drawing loop. You'll know it worked when you see the sequence `['R', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'R', 'R']`.

!!! mascot-celebration "A Paper Dragon in Code!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a fractal using **list manipulation** instead of recursion — a completely
    different approach to the same idea! Both encode the same self-similar structure.
    Up next: **Hilbert Curve** — a space-filling curve using mutual recursion.
