---
hide:
    - toc
---
# Four-Fold Symmetric Doodle

By the end of this lab you'll be able to:

- Record turtle commands as data in a list and replay them
- Apply a 90° rotation to a list of recorded moves to create four-fold symmetry
- Understand the difference between recording commands and executing them immediately

One quadrant of a geometric doodle is recorded, then replayed three more times at 90°, 180°, and 270° rotations — automatically producing perfect four-fold rotational symmetry.

!!! mascot-welcome "Welcome to the Four-Fold Doodle!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This lab teaches a powerful programming idea: **recording actions as data**.
    Draw once, replay four times with different rotations — instant symmetry!
    Let's code it together!

## How It Works

We store moves as a list of tuples: `('forward', 40)`, `('left', 60)`, etc. After building the list, we replay it four times, rotating 90° between each replay. This guarantees perfect four-fold symmetry regardless of what moves are in the list.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

moves = [
    ('forward', 50), ('left', 60), ('forward', 40), ('right', 90),
    ('forward', 30), ('left', 120), ('forward', 50), ('left', 90),
    ('forward', 40), ('right', 60), ('forward', 60),
]

colors = ['crimson', 'royalblue', 'forestgreen', 'darkorange']

for rotation in range(4):
    monty.pencolor(colors[rotation])
    monty.penup()
    monty.goto(0, 0)
    monty.setheading(rotation * 90)
    monty.pendown()
    for cmd, val in moves:
        if cmd == 'forward':
            monty.forward(val)
        elif cmd == 'left':
            monty.left(val)
        elif cmd == 'right':
            monty.right(val)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each of the 4 replays starts facing a different direction: 0°, 90°, 180°, 270°.
    Will the four colored replays look like four independent doodles, or will they form one symmetric pattern?
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

moves = [
    ('forward', 50), ('left', 60), ('forward', 40), ('right', 90),
    ('forward', 30), ('left', 120), ('forward', 50), ('left', 90),
    ('forward', 40), ('right', 60), ('forward', 60),
]

colors = ['crimson', 'royalblue', 'forestgreen', 'darkorange']

for rotation in range(4):
    monty.pencolor(colors[rotation])
    monty.penup()
    monty.goto(0, 0)
    monty.setheading(rotation * 90)
    monty.pendown()
    for cmd, val in moves:
        if cmd == 'forward':
            monty.forward(val)
        elif cmd == 'left':
            monty.left(val)
        elif cmd == 'right':
            monty.right(val)`);
</script>

One **symmetric pattern** — the four colored arms are rotations of each other, meeting at the center to form a cohesive design. Were you right?

## How It Works

`monty.setheading(rotation * 90)` is the key. Before each replay, the turtle is sent to the origin facing a new direction. From the turtle's perspective, every replay feels identical — but because the starting heading rotates, the result rotates too.

## Explanation Table

| Line | What it does |
|------|-------------|
| `moves = [...]` | Record commands as a list of (command, value) tuples |
| `monty.setheading(rotation * 90)` | Rotate starting direction for each replay |
| `for cmd, val in moves` | Unpack each recorded move |
| `colors[rotation]` | Different color per rotation |

## Learning Check

!!! mascot-thinking "Your Turn — Add More Moves"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Add 3 more moves to the `moves` list — any combination of forward/left/right.
    Predict how the symmetry will change (it will stay four-fold!), then run it.

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

moves = [
    ('forward', 50), ('left', 60), ('forward', 40), ('right', 90),
    ('forward', 30), ('left', 120), ('forward', 50), ('left', 90),
    ('forward', 40), ('right', 60), ('forward', 60),
    ('left', 45), ('forward', 35), ('right', 90), ('forward', 25),
]

colors = ['crimson', 'royalblue', 'forestgreen', 'darkorange']

for rotation in range(4):
    monty.pencolor(colors[rotation])
    monty.penup()
    monty.goto(0, 0)
    monty.setheading(rotation * 90)
    monty.pendown()
    for cmd, val in moves:
        if cmd == 'forward':
            monty.forward(val)
        elif cmd == 'left':
            monty.left(val)
        elif cmd == 'right':
            monty.right(val)`);
</script>

No matter what you put in `moves`, the result is always four-fold symmetric — the rotation mechanism guarantees it.

## Experiments

1. **Six-fold symmetry.** Change `range(4)` to `range(6)` and `rotation * 90` to `rotation * 60`. You'll know it worked when 6 arms appear.

2. **Monochrome.** Use `'black'` for all colors. You'll know it worked when all arms are the same color, making the symmetry even more obvious.

3. **Draw with pen up partway.** Add `('penup', 0)` and `('pendown', 0)` entries and handle them in the replay loop. You'll know it worked when some moves create dashes.

4. **Random moves.** Generate moves with `random.choice` and `random.randint`. You'll know it worked when a different symmetric pattern appears each run.

!!! mascot-celebration "Commands as Data!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You learned a powerful idea: storing actions as data so you can replay them
    with transformations. This technique is used in undo/redo systems and animation!
    Up next: **Six-Fold Mandala** — extending to 6-fold symmetry.
