---
title: For Loops and Drawing Shapes
description: Use Python's for loop and range() to draw squares, polygons, and star patterns with turtle graphics — then explore absolute positioning and screen control.
generated_by: claude skill chapter-content-generator
date: 2026-06-28 10:25:00
version: 0.09
---

# For Loops and Drawing Shapes

## Summary

Loops let you repeat steps without copying and pasting — just like a Scratch
"repeat" block. The `for` loop with `range()` is Python's workhorse for counting.
This chapter uses loops to draw squares, triangles, and other polygons with
turtle, then introduces absolute positioning (`goto()`), screen clearing,
position queries, and a classic star pattern project.

## Concepts Covered

This chapter covers the following 11 concepts from the learning graph:

1. for Loop over Sequence
2. for Loop with range()
3. Range with Start Stop Step
4. Loop Counter Variable
5. Loop Accumulator Pattern
6. Absolute Positioning goto()
7. Drawing circle() and Polygons
8. Clearing and Resetting
9. Position Query xcor() ycor()
10. setheading() Direction
11. Drawing Star Patterns

## Prerequisites

This chapter builds on concepts from:

- [Chapter 5: Drawing with Turtle Graphics](../05-drawing-with-turtle/index.md)
- [Chapter 6: Math and Arithmetic](../06-math-and-arithmetic/index.md)

---

By the end of this lesson you'll be able to:

- Use a `for` loop with `range()` to repeat turtle commands any number of times
- Draw any regular polygon by combining a loop with the `360 / sides` formula
- Use `goto()`, `setheading()`, and `circle()` to control the turtle's position precisely
- Draw a classic five-pointed star using the loop counter

In Chapter 5 you drew a partial square by writing four `forward()` and `right()` commands in a row.
In this chapter you will write the same drawing with just **two lines** inside a loop — and then use that same idea to draw shapes with 100 sides.

!!! mascot-welcome "Welcome to Chapter 7!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Loops are one of the biggest ideas in programming. Once you understand them, you'll never copy-and-paste code again — you'll just tell Python how many times to repeat something and let it do the work. Let's code it together!

## The for Loop

A **for loop** repeats a block of code a set number of times.
In Python, the most common form uses **`range()`** to count:

```python
for i in range(4):
    print(i)
```

This prints `0`, `1`, `2`, `3` — four numbers, starting at zero.
The indented line (`print(i)`) is the **loop body** — everything Python repeats.
The variable `i` is the **loop counter** — it changes value on every trip through the loop.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch, the **Repeat** block runs its contents a fixed number of times. Python's `for i in range(n):` does exactly the same thing! The big difference: Python also gives you the counter `i` as a variable you can use inside the loop — great for creating patterns that change on every step.

Now let's put a `for` loop to work with the turtle.
Before you run the program below, think about what `forward(100)` and `right(90)` repeated four times will draw.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The loop runs **4 times**. Each time, the turtle moves forward 100 pixels and turns right 90°.
    A 90° right turn is a perfect corner. What shape do you think will appear?
    Make your guess — then click Run!

## Try It Now

Edit the code below and click **Run** to see the result.

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
t = turtle.Turtle()
for i in range(4):
    t.forward(100)
    t.right(90)`);
</script>

Were you right? Two lines inside a loop draw a complete square — the same shape that took eight lines in Chapter 5!

## How the Loop Works

Here is what Python does on each trip through the loop:

| Trip | `i` value | What the turtle does |
|------|-----------|----------------------|
| 1st | `0` | forward 100, turn right 90° |
| 2nd | `1` | forward 100, turn right 90° |
| 3rd | `2` | forward 100, turn right 90° |
| 4th | `3` | forward 100, turn right 90° |

After four 90° turns the turtle has rotated a full 360° and is facing its original direction — which is why the shape closes perfectly into a square.

**Indentation matters.** The two lines inside the loop (`t.forward(100)` and `t.right(90)`) must both be indented by exactly four spaces (or one Tab). Python uses indentation to know which lines belong to the loop body and which ones come *after* the loop.

```python
for i in range(4):
    t.forward(100)    # ← part of the loop (indented)
    t.right(90)       # ← part of the loop (indented)
t.penup()             # ← NOT part of the loop (no indent)
```

### See It: Step Through the Loop

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    In the stepper below, watch the value of `i` in the badge at the top.
    What will `i` be on the very first trip — 1 or 0? And how many times will
    the arrow jump back up to the `for` line? Make your guesses, then step
    through and check!

<iframe src="../../sims/for-loop-stepper/main.html" height="502" width="100%" scrolling="no"></iframe>

[Explore the For-Loop Stepper MicroSim](../../sims/for-loop-stepper/index.md){ .md-button }

Were you right? The **Countdown** program in the dropdown shows the same rhythm with print(), and **Running Total** previews the accumulator pattern you will meet later in this chapter.

## Understanding range()

`range()` can take one, two, or three arguments:

| Form | What it produces | Example output |
|------|-----------------|----------------|
| `range(n)` | 0, 1, 2, …, n-1 | `range(4)` → 0 1 2 3 |
| `range(start, stop)` | start, start+1, …, stop-1 | `range(2, 6)` → 2 3 4 5 |
| `range(start, stop, step)` | start, start+step, …, < stop | `range(0, 10, 2)` → 0 2 4 6 8 |

The **step** argument lets you skip values or count backwards:

```python
for i in range(0, 360, 45):
    print(i)    # 0, 45, 90, 135, 180, 225, 270, 315
```

This is useful for drawing shapes at regular angular intervals — for example, drawing eight lines radiating from the center like spokes on a wheel, each 45° apart.

## The Loop Counter Variable

The counter `i` is a real variable — you can use it *inside* the loop body.
This lets you make each step slightly different:

```python
import turtle
t = turtle.Turtle()
for i in range(5):
    t.forward(20 + i * 20)   # 20, 40, 60, 80, 100
    t.right(90)
```

Each forward step gets 20 pixels longer because `i` grows by 1 on every trip.
The result is a staircase shape instead of a square.

## The Loop Accumulator Pattern

An **accumulator** is a variable you set up *before* the loop and update *inside* the loop on every step.
The most common accumulator just adds values together:

```python
total = 0               # start the accumulator at zero
for i in range(1, 6):   # i takes values 1, 2, 3, 4, 5
    total += i          # add i to total on each trip
print(total)            # 15  (1+2+3+4+5)
```

You will use the accumulator pattern constantly — for counting things, summing scores, and building strings character by character.

## Drawing Any Regular Polygon

Combine the `for` loop with the `360 / sides` formula from Chapter 6 and you can draw any regular polygon:

```python
import turtle
t = turtle.Turtle()
sides = 6
turn_angle = 360 / sides
for i in range(sides):
    t.forward(80)
    t.right(turn_angle)
```

Change `sides` to any number and the loop adapts automatically.

## More Turtle Commands

With the loop mastered, it's time to add precision turtle commands to your toolkit.
Before looking at each one, here is a quick reference:

| Command | What it does |
|---------|-------------|
| `t.goto(x, y)` | Jump to position (x, y) — canvas center is (0, 0) |
| `t.setheading(angle)` | Point the turtle in an exact compass direction |
| `t.circle(radius)` | Draw a circle with the given radius |
| `t.xcor()` | Return the turtle's current x position |
| `t.ycor()` | Return the turtle's current y position |
| `t.clear()` | Erase everything the turtle drew, but keep the turtle |
| `t.reset()` | Erase drawings AND return the turtle to the start |

**Absolute positioning with `goto(x, y)`.** The canvas has a coordinate system where `(0, 0)` is the center. Positive x is right, positive y is up, negative x is left, negative y is down. `t.goto(100, 0)` moves the turtle to a point 100 pixels to the right of center — drawing a line there unless you call `t.penup()` first.

**Pointing with `setheading(angle)`.** The heading is measured in degrees from the positive x-axis (East), counter-clockwise:
- `0` = East (right)
- `90` = North (up)
- `180` = West (left)
- `270` = South (down)

**Drawing `circle(radius)`.** `t.circle(50)` draws a circle with a 50-pixel radius, starting where the turtle currently stands.

**Querying position.** `t.xcor()` and `t.ycor()` return the turtle's current x and y coordinates as floats.
This is useful for printing progress or for placing text at the turtle's location.

## Drawing Star Patterns

A **five-pointed star** is one of the most satisfying shapes to draw with a loop.
The trick is the turn angle: `144°` per point.

Here is how the math works:
- A five-pointed star has 5 points
- At each point, the turtle turns `360° × 2 / 5` = `144°`
  (it travels *two* full rotations around the star instead of one)

The program below draws four of the five points — it is missing the correct turn angle.

!!! mascot-thinking "Your Turn — Complete the Star"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The turtle below draws lines but never closes the star because the turn angle is wrong.
    Replace the `???` with the correct number of degrees so the turtle traces all five points
    and returns to exactly where it started.
    **Hint:** the turn angle for a 5-pointed star is `144`.

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
t = turtle.Turtle()
t.speed(3)
for i in range(5):
    t.forward(150)
    t.right(???)    # replace ??? with the correct turn angle`);
</script>

When the star closes perfectly back at the starting point, you know the turn angle is correct!

## Experiments

Try these changes to the star program above. For each one, predict what will happen first, then run it to check!

1. Change `range(5)` to `range(7)` and the turn angle to `154` (approximately `360 * 2 / 7`). **You'll know it worked when** you see a seven-pointed star.
2. Change `t.forward(150)` to `t.forward(i * 30 + 30)`. **You'll know it worked when** each arm of the star gets longer than the last.
3. Add `t.pencolor("red")` before the loop. **You'll know it worked when** the star draws in red.
4. After the star loop, add `t.penup()`, `t.goto(0, 0)`, `t.pendown()`, and `t.circle(80)`. **You'll know it worked when** a circle appears in the center of the star.
5. Change `t.speed(3)` to `t.speed(1)` and watch Monty draw slowly, or `t.speed(10)` for maximum speed.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered one of the most important ideas in all of programming — the loop. With just two lines inside a `for` block you drew a square, then a polygon, then a star. You also learned `goto()`, `circle()`, and `setheading()` for precise turtle control. These tools will be your drawing toolkit for the rest of the course. Let's keep coding it together!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
