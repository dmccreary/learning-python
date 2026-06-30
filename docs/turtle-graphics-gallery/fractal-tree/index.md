---
hide:
    - toc
---
# Fractal Tree

By the end of this lab you'll be able to:

- Write a binary recursive function that grows a tree with two branches per node
- Use depth to control both branch length and color (brown trunk, green leaves)
- Understand why the turtle must go backward after each branch to return to the fork

A tree that looks like it grew naturally — thick brown trunk splitting into thinner branches, ending in bright green leaf tips. Five levels of binary recursion create over 30 distinct branches.

!!! mascot-welcome "Welcome to the Fractal Tree!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Every tree you've ever seen is a fractal — a trunk that splits into branches
    that split into smaller branches. This lab codes exactly that rule!
    Let's code it together!

## How It Works

`tree(branch_len, depth)`:
1. If `branch_len < 5`, stop (base case)
2. Draw a branch of the current length (brown if deep, green near tips)
3. Turn left 25°, recurse with `branch_len * 0.7`
4. Turn right 50°, recurse with `branch_len * 0.7`
5. Turn left 25° (return to original heading)
6. Go **backward** the same length (return to the fork point)

Step 6 is the key: the turtle must retrace the branch so the next recursive call starts from the correct position.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()
monty.left(90)

def tree(branch_len, depth):
    if branch_len < 5:
        return
    if depth <= 2:
        monty.pencolor('forestgreen')
        monty.pensize(1)
    elif depth <= 4:
        monty.pencolor('saddlebrown')
        monty.pensize(2)
    else:
        monty.pencolor('saddlebrown')
        monty.pensize(4)
    monty.forward(branch_len)
    monty.left(25)
    tree(branch_len * 0.7, depth - 1)
    monty.right(50)
    tree(branch_len * 0.7, depth - 1)
    monty.left(25)
    monty.backward(branch_len)

monty.penup()
monty.goto(0, -170)
monty.pendown()
tree(100, 7)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each branch splits into two that are 70% as long. After 7 levels, how many
    leaf tips will there be? (Hint: 2^7 = ?) Make your guess — then click Run!

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
monty.left(90)

def tree(branch_len, depth):
    if branch_len < 5:
        return
    if depth <= 2:
        monty.pencolor('forestgreen')
        monty.pensize(1)
    elif depth <= 4:
        monty.pencolor('saddlebrown')
        monty.pensize(2)
    else:
        monty.pencolor('saddlebrown')
        monty.pensize(4)
    monty.forward(branch_len)
    monty.left(25)
    tree(branch_len * 0.7, depth - 1)
    monty.right(50)
    tree(branch_len * 0.7, depth - 1)
    monty.left(25)
    monty.backward(branch_len)

monty.penup()
monty.goto(0, -170)
monty.pendown()
tree(100, 7)`);
</script>

`2^7 = 128` potential leaf tips — though some are cut off by the `< 5` base case. Were you right?

## How It Works

`monty.backward(branch_len)` is the "undo" step: after recursing into both sub-branches, the turtle returns to where it started so the parent call can continue correctly. Without this step, the turtle would be stuck at a leaf tip and the tree would look scrambled.

`branch_len * 0.7` shrinks each branch to 70% of its parent. After 7 generations: `100 × 0.7^7 ≈ 8` pixels — still above the `5` threshold, so all branches draw.

## Explanation Table

| Line | What it does |
|------|-------------|
| `if branch_len < 5: return` | Base case — stop when branches get too small |
| `monty.forward(branch_len)` | Draw the current branch |
| `monty.left(25)` then recurse | Draw the left sub-branch |
| `monty.right(50)` then recurse | Draw the right sub-branch (50° right = 25° right of center) |
| `monty.backward(branch_len)` | Return turtle to the fork point |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Branch Angle"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change the branch angle from 25° to 40°. How will the tree's shape change —
    wider and bushier, or narrower and taller? Predict, then run!

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
monty.left(90)

def tree(branch_len, depth):
    if branch_len < 5:
        return
    if depth <= 2:
        monty.pencolor('forestgreen')
        monty.pensize(1)
    else:
        monty.pencolor('saddlebrown')
        monty.pensize(max(1, depth - 2))
    monty.forward(branch_len)
    monty.left(40)
    tree(branch_len * 0.7, depth - 1)
    monty.right(80)
    tree(branch_len * 0.7, depth - 1)
    monty.left(40)
    monty.backward(branch_len)

monty.penup()
monty.goto(0, -170)
monty.pendown()
tree(100, 7)`);
</script>

With 40° branch angles the tree is much **wider and bushier** — spread low like an oak rather than reaching up like a pine. Larger angle = wider spread.

## Experiments

1. **Make a pine tree.** Use 15° branch angles instead of 25°. You'll know it worked when the tree is narrow and tall like a conifer.

2. **Slow the shrink rate.** Change `0.7` to `0.85`. Branches shrink more slowly, creating a denser tree. You'll know it worked when there are many more thin branches at the tips.

3. **Add a trunk.** Before calling `tree(100, 7)`, add `monty.pensize(6); monty.pencolor('saddlebrown'); monty.forward(40)` then call `tree(100, 7)`, then `monty.backward(40)`. You'll know it worked when the tree has a thick base trunk section.

4. **Color by depth.** Pass `depth` into the function and color leaves bright green only when `depth == 0`. You'll know it worked when only the very tips are colored differently.

!!! mascot-celebration "You Grew a Tree with Code!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Every tree in the real world follows a similar rule — trunk splits to branches,
    branches split to twigs, twigs to leaves. Recursion is nature's favorite algorithm!
    Up next: **Dragon Curve** — a fractal that folds like a piece of paper.
