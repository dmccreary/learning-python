---
hide:
    - toc
---
# Ripple Waves

By the end of this lab you'll be able to:

- Draw concentric ellipses to simulate water ripples from multiple drop points
- Use fading colors to give a sense of wave strength decreasing with distance
- Combine multiple ripple sources that overlap and create interference patterns

Three concentric ring systems centered at different points — like three pebbles dropped into water. Where rings overlap, they create subtle interference patterns.

!!! mascot-welcome "Welcome to Ripple Waves!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Drop a pebble in still water and watch the rings expand outward.
    Drop three pebbles and see the rings interfere with each other!
    Let's code the wave math together!

## How It Works

`ripple(cx, cy, n_rings, max_r, color)` draws `n_rings` concentric circles from a center. Pensize decreases with each ring (outer rings are thinner — less energy). Three ripple centers are placed at different positions.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def ripple(cx, cy, n_rings, max_r, base_color):
    for i in range(1, n_rings + 1):
        r = i * max_r / n_rings
        strength = n_rings - i + 1
        monty.pensize(max(1, strength // 3))
        monty.pencolor(base_color)
        monty.penup()
        monty.goto(cx, cy - r)
        monty.pendown()
        monty.circle(r)

ripple(-80, -20, 8, 100, 'royalblue')
ripple(60, 40, 7, 80, 'deepskyblue')
ripple(0, -60, 6, 70, 'steelblue')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Three ripple centers at different positions — will their rings overlap or stay separate?
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

def ripple(cx, cy, n_rings, max_r, base_color):
    for i in range(1, n_rings + 1):
        r = i * max_r / n_rings
        strength = n_rings - i + 1
        monty.pensize(max(1, strength // 3))
        monty.pencolor(base_color)
        monty.penup()
        monty.goto(cx, cy - r)
        monty.pendown()
        monty.circle(r)

ripple(-80, -20, 8, 100, 'royalblue')
ripple(60, 40, 7, 80, 'deepskyblue')
ripple(0, -60, 6, 70, 'steelblue')`);
</script>

The rings **overlap** where the ripple systems meet — creating a visual interference pattern at their boundaries. Were you right?

## How It Works

`goto(cx, cy - r)` moves to the bottom of each circle before drawing it. `circle(r)` draws the full circle. Thicker pensize for inner rings simulates more wave energy near the source.

## Explanation Table

| Line | What it does |
|------|-------------|
| `r = i * max_r / n_rings` | Ring radii evenly spaced from center to max |
| `strength = n_rings - i + 1` | Inner rings are stronger (higher number) |
| `pensize(max(1, strength//3))` | Thicker lines for inner, stronger rings |
| `goto(cx, cy - r)` | Position turtle at bottom of circle |

## Learning Check

!!! mascot-thinking "Your Turn — Add a Fourth Ripple"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Add a fourth `ripple()` call at a position of your choice with `'navy'` color.
    Where will it overlap most with the existing rings?

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

def ripple(cx, cy, n_rings, max_r, base_color):
    for i in range(1, n_rings + 1):
        r = i * max_r / n_rings
        strength = n_rings - i + 1
        monty.pensize(max(1, strength // 3))
        monty.pencolor(base_color)
        monty.penup()
        monty.goto(cx, cy - r)
        monty.pendown()
        monty.circle(r)

ripple(-80, -20, 8, 100, 'royalblue')
ripple(60, 40, 7, 80, 'deepskyblue')
ripple(0, -60, 6, 70, 'steelblue')
ripple(-30, 60, 5, 60, 'navy')`);
</script>

Four overlapping ripple systems — more interference regions where the rings cross.

## Experiments

1. **Change ring spacing.** Replace evenly spaced rings with `r = max_r * (i / n_rings) ** 2` — squared spacing means rings bunch up near the center. You'll know it worked when inner rings are denser.

2. **Animate the ripple.** Draw rings in reverse order (outermost first) to create an animation effect. You'll know it worked when the rings appear to expand outward.

3. **Use colored rings.** Give each ring a slightly different shade — inner rings darker, outer lighter. You'll know it worked when there's a gradient from center to edge.

4. **One giant ripple.** Call `ripple(0, 0, 15, 170, 'teal')` once. You'll know it worked when 15 rings fill nearly the entire canvas.

!!! mascot-celebration "Making Waves!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You simulated water ripples with concentric circles and pensize fading!
    The same math models sound waves, light waves, and even radio transmission patterns.
    Up next: **Category 7 — Mathematical Curves!**
