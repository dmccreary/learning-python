---
hide:
    - toc
---
# Rainbow Square Spiral

By the end of this lab you'll be able to:

- Use a `for` loop to repeat a drawing step many times
- Cycle through a list of colors using the `%` (modulo) operator
- See how adding a tiny rotation each time creates a dramatic spiral effect

Draw a square, turn a little, draw a slightly larger square — and repeat.
After 36 squares you get a glowing color tunnel that spins right off the screen.

!!! mascot-welcome "Welcome to the Rainbow Square Spiral!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    In this lab you'll use a loop to draw 36 squares, rotating a little each time.
    Tiny changes — just 10 degrees and 8 pixels — add up to something spectacular.
    Let's code it together!

## How the Spiral Works

Each time through the loop, Monty draws one square and then:

1. **Rotates** 10 degrees to the right (so the next square is slightly turned)
2. **Grows** the side length by 8 pixels (so the next square is slightly larger)

After 36 repetitions, those tiny changes stack into a full 360-degree rotation and a square that is nearly 300 pixels wide — starting from just 20.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.shape('turtle')

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
side = 20

for i in range(36):
    monty.color(colors[i % len(colors)])
    for j in range(4):
        monty.forward(side)
        monty.right(90)
    monty.right(10)
    side += 8

monty.hideturtle()
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The outer loop runs 36 times and there are 6 colors in the list.
    How many times will each color appear in the finished spiral?
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
monty.shape('turtle')

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
side = 20

for i in range(36):
    monty.color(colors[i % len(colors)])
    for j in range(4):
        monty.forward(side)
        monty.right(90)
    monty.right(10)
    side += 8

monty.hideturtle()`);
</script>

Each color appears exactly **6 times** — because 36 ÷ 6 = 6, and `i % 6` cycles through 0 → 1 → 2 → 3 → 4 → 5 → 0 → 1 → … Were you right?

## How It Works

The program uses **two nested loops**. The outer loop (`for i in range(36)`) runs once per square. The inner loop (`for j in range(4)`) draws the four sides of each square: forward, turn 90°, forward, turn 90°, and so on.

After the inner loop finishes one square, the outer loop does two more things before starting the next square:

- `monty.right(10)` — turns Monty 10 degrees, so the next square is slightly rotated
- `side += 8` — makes the next square 8 pixels wider on each side

The color is chosen with `colors[i % len(colors)]`. The `%` operator gives the **remainder** after dividing, so `i % 6` always produces a number from 0 to 5, cycling the list no matter how big `i` gets.

## Explanation Table

| Line | What it does |
|------|-------------|
| `monty.speed(0)` | Maximum speed — no animation delay |
| `colors = [...]` | A list of 6 color names to cycle through |
| `side = 20` | Starting side length of the first (smallest) square |
| `for i in range(36)` | Repeat the square-drawing block 36 times |
| `colors[i % len(colors)]` | Pick the color at position `i mod 6`, cycling the list |
| `for j in range(4)` | Draw 4 sides to make one square |
| `monty.right(90)` | Turn at each corner of the square |
| `monty.right(10)` | Rotate 10° before the next square — creates the spiral |
| `side += 8` | Grow the square by 8 pixels each iteration |

!!! mascot-tip "What Is Modulo?"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    The `%` operator gives you the **remainder** of division.
    `7 % 3` is `1` (7 ÷ 3 = 2 remainder 1).
    It's the perfect tool for cycling through a list — the index always stays in bounds!

## Learning Check

!!! mascot-thinking "Your Turn — Complete the Spiral"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws the squares but all in the same color — boring!
    Add **one line** inside the outer loop to make each square use the next color in the list.
    Hint: look at how `colors` and `i` are used in the sample above.

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

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
side = 20

for i in range(36):
    # ADD ONE LINE HERE to set the color
    for j in range(4):
        monty.forward(side)
        monty.right(90)
    monty.right(10)
    side += 8

monty.hideturtle()`);
</script>

The missing line is `monty.color(colors[i % len(colors)])` — place it right after the `for i` line.

## Experiments

Try these changes in the **Try It Now** editor above:

1. **Change the number of squares.** Replace `range(36)` with `range(72)`. How does the spiral change? You'll know it worked when the spiral wraps around twice as far.

2. **Change the rotation angle.** Replace `monty.right(10)` with `monty.right(5)`. Now 36 squares only cover 180 degrees. What happens to the shape? You'll know it worked when the spiral opens into a fan instead of a closed tunnel.

3. **Change the growth rate.** Replace `side += 8` with `side += 4`. The spiral gets tighter. What does `side += 16` do? You'll know it worked when the squares expand much more quickly to the edges of the canvas.

4. **Reverse the spiral direction.** Change `monty.right(10)` to `monty.left(10)`. You'll know it worked when the spiral winds in the opposite direction.

5. **Add more colors.** Add `'pink'` and `'brown'` to the colors list. With 8 colors and 36 squares, each color appears only 4–5 times. Does the spiral look different with more stripes? You'll know it worked when you can count more than 6 distinct color bands.

!!! mascot-celebration "Spectacular Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just used nested loops, a color list, the modulo operator, and a growing variable
    to produce a dazzling rainbow tunnel — all in under 20 lines of code!
    Up next: try the **Pinwheel of Triangles** to see how the same rotation idea
    works with a completely different shape.
