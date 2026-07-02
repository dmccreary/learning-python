---
title: Math Module and Turtle Projects
description: Use abs(), round(), math.sqrt(), sin(), cos(), and pi to build a rippling sine wave and a random turtle race
generated_by: claude skill chapter-content-generator
date: 2026-06-28 13:00:00
version: 0.09
---

# Math Module and Turtle Projects

By the end of this lesson you'll be able to:

- Use built-in functions `abs()` and `round()` for common number operations
- Import and use `math.sqrt()`, `math.floor()`, `math.ceil()`, `math.sin()`, `math.cos()`, and `math.pi`
- Convert between radians and degrees using `math.radians()` and `math.degrees()`
- Build two complete turtle projects: a **sine wave** drawing and a **turtle race simulation**

The `math` module gives Python superpowers for working with numbers — square roots, sine waves, logarithms, and more.
In this chapter you'll use those superpowers to create two beautiful, interactive turtle projects.

!!! mascot-welcome "Welcome to Chapter 18!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Did you know that the smooth curves you see in games and animations are drawn with sine and cosine?
    Today we'll learn the math tools that make that possible — and then draw our own wave!
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Built-in Number Functions

Python has two useful number functions built in — no import needed.

`abs(x)` returns the **absolute value** of a number: the distance from zero, always positive.

```python
print(abs(-7))    # 7
print(abs(5))     # 5
print(abs(-3.14)) # 3.14
```

`round(x)` rounds a number to the nearest integer (or to a given number of decimal places).

```python
print(round(3.7))      # 4
print(round(3.2))      # 3
print(round(3.14159, 2)) # 3.14
```

<div class="cm-lab cm-text-only">
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
initCmLab('', `print("abs(-42):", abs(-42))
print("abs(7):", abs(7))

print("round(2.7):", round(2.7))
print("round(2.3):", round(2.3))
print("round(3.14159, 3):", round(3.14159, 3))`);
</script>

## The `math` Module

Import the module with `import math`. Then access functions using `math.function_name()`.

Before we try them, here's a quick guide to the key functions:

| Function | What it does | Example |
|----------|-------------|---------|
| `math.sqrt(x)` | Square root of x | `math.sqrt(25)` → 5.0 |
| `math.floor(x)` | Round down to nearest integer | `math.floor(3.9)` → 3 |
| `math.ceil(x)` | Round up to nearest integer | `math.ceil(3.1)` → 4 |
| `math.pi` | The constant π (3.14159...) | |
| `math.sin(x)` | Sine of x (x in **radians**) | `math.sin(math.pi/2)` → 1.0 |
| `math.cos(x)` | Cosine of x (x in **radians**) | `math.cos(0)` → 1.0 |
| `math.radians(d)` | Convert degrees to radians | `math.radians(180)` → π |
| `math.degrees(r)` | Convert radians to degrees | `math.degrees(math.pi)` → 180.0 |
| `math.log(x)` | Natural logarithm of x | `math.log(1)` → 0.0 |
| `math.factorial(n)` | n! (n factorial) | `math.factorial(5)` → 120 |

<div class="cm-lab cm-text-only">
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
initCmLab('-2', `import math

print("sqrt(144):", math.sqrt(144))
print("floor(4.9):", math.floor(4.9))
print("ceil(4.1):", math.ceil(4.1))
print("pi:", math.pi)
print("factorial(6):", math.factorial(6))
print("degrees(pi):", math.degrees(math.pi))`);
</script>

## Sine and Cosine — Radians vs Degrees

Python's `math.sin()` and `math.cos()` expect their input in **radians**, not degrees.

A **radian** is a different way of measuring angles.
One full circle = 360° = 2π radians.
A half circle = 180° = π radians.

To convert: use `math.radians(degrees)` to go from degrees → radians.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    `math.sin(math.radians(90))` asks for the sine of 90 degrees.
    In trigonometry, `sin(90°) = 1.0`. Do you think Python will get the right answer?
    Make your guess — then run it!

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-3"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-3')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-3')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-3"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-3"></div>
  </div>
</div>
<script>
initCmLab('-3', `import math

print("sin(0°):", math.sin(math.radians(0)))
print("sin(90°):", math.sin(math.radians(90)))
print("sin(180°):", round(math.sin(math.radians(180)), 10))
print("cos(0°):", math.cos(math.radians(0)))
print("cos(90°):", round(math.cos(math.radians(90)), 10))`);
</script>

## Project 1 — Sine Wave with Turtle

A **sine wave** is the smooth, repeating S-shaped wave you see in physics and music.

The idea: step across the screen from left to right. For each x position, calculate `y = amplitude * sin(x * frequency)`. Move the turtle to `(x, y)`. The result is a smooth wave.

Before running the code, note that:
- `amplitude` controls how tall the wave is (the peak height in pixels)
- `frequency` (really a scaling factor) controls how many cycles appear in the window
- `math.sin()` always returns a value between `-1.0` and `1.0`, so we multiply by `amplitude` to scale it up

<div class="cm-lab">
  <div class="cm-editor-wrap">
    <div id="cm-editor-4"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-4')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-4')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-4"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-4"></div>
  </div>
</div>
<script>
initCmLab('-4', `import turtle
import math

t = turtle.Turtle()
t.speed(0)
t.pensize(2)
t.pencolor("royalblue")

amplitude = 80    # height of the wave
frequency = 0.05  # how quickly it oscillates

t.penup()
t.goto(-190, 0)
t.pendown()

for x in range(-190, 191):
    y = amplitude * math.sin(x * frequency)
    t.goto(x, y)

t.hideturtle()`);
</script>

Try changing `amplitude` to `150` for a taller wave or `frequency` to `0.1` for a faster wave.

### See It: Play the Wave Like an Instrument

Editing numbers and re-running works, but sliders are faster for building intuition. In the explorer below, predict first: **which slider makes the wave taller, and which packs more wiggles into the same space?** Then drag each slider one at a time and watch the equation update.

<iframe src="../../sims/sine-wave-explorer/main.html" height="492" width="100%" scrolling="no"></iframe>

[Explore the Sine Wave Explorer MicroSim](../../sims/sine-wave-explorer/index.md){ .md-button }

Check **show plain sin(x)** to keep the original wave as a dotted reference — then slide the phase and watch your wave slide left past it. These are the exact `amplitude` and `frequency` variables from the turtle project above.

## Project 2 — Turtle Race Simulation

Now let's combine `random` and a `for` loop to simulate a turtle race!

Three turtles start at the left and move right in random-length hops. The first to cross x = 150 wins.

Before the code: `random.randint(1, 10)` gives each turtle a random step size on each turn.
We check after every move whether any turtle has crossed the finish line.

<div class="cm-lab">
  <div class="cm-editor-wrap">
    <div id="cm-editor-5"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-5')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-5')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-5"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-5"></div>
  </div>
</div>
<script>
initCmLab('-5', `import turtle
import random

t1 = turtle.Turtle()
t1.shape("turtle")
t1.color("red")
t1.penup()
t1.goto(-160, 40)

t2 = turtle.Turtle()
t2.shape("turtle")
t2.color("blue")
t2.penup()
t2.goto(-160, 0)

t3 = turtle.Turtle()
t3.shape("turtle")
t3.color("green")
t3.penup()
t3.goto(-160, -40)

racers = [t1, t2, t3]
names = ["Red", "Blue", "Green"]
finish = 150

while True:
    for i, racer in enumerate(racers):
        racer.forward(random.randint(1, 10))
        if racer.xcor() >= finish:
            print(f"{names[i]} wins!")
            racer.write("Winner!", font=("Arial", 12, "bold"))
            turtle.done()
            break
    else:
        continue
    break`);
</script>

Run it several times — the winner changes each time because the steps are random!

!!! mascot-tip "How the Loop Breaks"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    The `for/else` pattern here is a Python trick: the `else` clause on a `for` loop runs only if the loop completed *without* hitting a `break`. So if no turtle crossed the finish line in this round, we `continue` the `while True` loop. The moment a turtle wins, we `break` out of both loops.

## Learning Check

!!! mascot-thinking "Your Turn — Add a Fourth Racer"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The turtle race has three racers. Add a fourth turtle named `t4` with color `"orange"`,
    starting at y = `-80`. Add `"Orange"` to the `names` list and `t4` to the `racers` list.
    The race should now have four competitors!

<div class="cm-lab">
  <div class="cm-editor-wrap">
    <div id="cm-editor-6"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-6')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-6')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-6"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-6"></div>
  </div>
</div>
<script>
initCmLab('-6', `import turtle
import random

t1 = turtle.Turtle()
t1.shape("turtle"); t1.color("red"); t1.penup(); t1.goto(-160, 60)
t2 = turtle.Turtle()
t2.shape("turtle"); t2.color("blue"); t2.penup(); t2.goto(-160, 20)
t3 = turtle.Turtle()
t3.shape("turtle"); t3.color("green"); t3.penup(); t3.goto(-160, -20)

# Add t4 here (orange, starting at y=-60)

racers = [t1, t2, t3]          # add t4 here too
names = ["Red", "Blue", "Green"]  # add "Orange" here
finish = 150

while True:
    for i, racer in enumerate(racers):
        racer.forward(random.randint(1, 10))
        if racer.xcor() >= finish:
            print(f"{names[i]} wins!")
            break
    else:
        continue
    break`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change `amplitude` in the sine wave to `40` and `frequency` to `0.1`.
   **You'll know it worked when** the wave is shorter and faster.

2. Draw a **cosine wave** by replacing `math.sin` with `math.cos`.
   **You'll know it worked when** the wave starts at its peak instead of zero.

3. Draw two waves on the same canvas — one in blue, one in red, with different amplitudes.
   **You'll know it worked when** two overlapping waves appear.

4. Make the turtle race step range wider: `randint(1, 20)` instead of `randint(1, 10)`.
   **You'll know it worked when** the race finishes faster but results are more unpredictable.

5. Print `math.factorial(10)` and `math.log(math.e)`.
   **You'll know it worked when** you see `3628800` and approximately `1.0`.

!!! mascot-celebration "Math Wizard!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've built a sine wave and a turtle race using real math — that's seriously impressive!
    From here we move into more advanced Python: booleans, collections, and error handling.
    You're ready for the next level! Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
