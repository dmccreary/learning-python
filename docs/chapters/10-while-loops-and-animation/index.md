---
title: While Loops and Animation
description: Use while loops, break, continue, and the time module to build countdown programs and animated turtle drawings that move by themselves.
generated_by: claude skill chapter-content-generator
date: 2026-06-28 11:10:00
version: 0.09
---

# While Loops and Animation

## Summary

`while` loops keep running as long as a condition is true — perfect for games
and animations. This chapter covers `while`, how to stop loops with `break`,
skip iterations with `continue`, the `else` clause on loops, infinite-loop
dangers, countdown loops, and the `time` module. You'll finish with a
real animated turtle drawing that moves by itself.

## Concepts Covered

This chapter covers the following 10 concepts from the learning graph:

1. while Loop
2. break Statement
3. continue Statement
4. else Clause on Loops
5. Nested Loops
6. Infinite Loops to Avoid
7. Countdown Loop
8. time Module Overview
9. time.sleep()
10. Animation with Turtle Loops

## Prerequisites

This chapter builds on concepts from:

- [Chapter 5: Drawing with Turtle Graphics](../05-drawing-with-turtle/index.md)
- [Chapter 7: For Loops and Drawing Shapes](../07-for-loops-and-shapes/index.md)
- [Chapter 9: Making Decisions with If/Else](../09-decisions-if-else/index.md)

---

By the end of this lesson you'll be able to:

- Write a `while` loop that runs as long as a condition is `True`
- Use `break` to exit a loop early and `continue` to skip an iteration
- Explain why infinite loops happen and how to avoid them
- Build an animated turtle spiral that grows step by step using a `while` loop

The `for` loop you learned in Chapter 7 is perfect when you know exactly how many times to repeat — `for i in range(10)` repeats exactly ten times.
But what if you don't know in advance when to stop?
What if you want to keep counting down until a rocket launches, or keep drawing until the turtle reaches the edge of the screen?
That is when you need a **`while` loop**.

!!! mascot-welcome "Welcome to Chapter 10!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The `while` loop is where programs come alive — it's the engine behind games, animations, and anything that runs until something changes. By the end of this chapter, Monty the turtle will be drawing all by himself! Let's code it together!

## The while Loop

A **`while` loop** repeats its body as long as a condition is `True`.
The structure looks like an `if` statement, but instead of running once, it keeps running:

```python
count = 5
while count > 0:
    print(count)
    count -= 1
print("Liftoff!")
```

Here is what happens step by step:

| Step | `count` value | Condition `count > 0` | Action |
|------|--------------|----------------------|--------|
| 1 | 5 | True | print 5, count becomes 4 |
| 2 | 4 | True | print 4, count becomes 3 |
| 3 | 3 | True | print 3, count becomes 2 |
| 4 | 2 | True | print 2, count becomes 1 |
| 5 | 1 | True | print 1, count becomes 0 |
| 6 | 0 | **False** | loop ends, print "Liftoff!" |

The loop runs exactly as long as the condition stays `True`.
The moment it becomes `False`, Python exits the loop and continues with the next line.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch, the **Repeat Until** block keeps running its contents until a condition becomes true. Python's `while` loop is the same idea — except the condition is checked **at the start** of each trip: the loop continues while the condition is `True` and stops the moment it becomes `False`.

Before you run the countdown program, think about what it will print.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The variable `count` starts at `5`. The loop prints `count` and then subtracts 1 each trip.
    How many lines do you think the program will print before "Liftoff!" appears?
    Will it print the number `0`? Make your guess — then click Run!

## Try It Now

Edit the code below and click **Run** to see the result.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

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
initCmLab('', `count = 5
while count > 0:
    print(count)
    count -= 1
print("Liftoff!")`);
</script>

Were you right? The loop prints `5`, `4`, `3`, `2`, `1` — five lines — and then `"Liftoff!"`.
The number `0` is **not** printed because the condition `count > 0` is checked *before* each trip.
When `count` is `0`, the condition is `False`, so the loop ends immediately.

## Infinite Loops to Avoid

An **infinite loop** is a `while` loop whose condition never becomes `False`.
The program runs forever (until you force-quit it):

```python
# WARNING: this runs forever — don't run it!
while True:
    print("Help, I can't stop!")
```

Infinite loops happen when you forget to change the variable that the condition depends on.
The most common cause: forgetting `count -= 1` inside the loop.

```python
count = 5
while count > 0:
    print(count)
    # MISSING: count -= 1  ← without this, count stays 5 forever!
```

**How to fix it:** Every `while` loop needs at least one line inside it that eventually makes the condition `False`.
Always double-check: "What changes inside this loop to eventually stop it?"

## The break Statement

`break` exits a loop immediately, even if the condition is still `True`.
It's useful when you want to stop based on something that happens *inside* the loop:

```python
count = 10
while count > 0:
    print(count)
    if count == 7:
        print("Stopping early at 7!")
        break
    count -= 1
```

This countdown stops at `7` and never reaches `6` or below — the `break` jumps out of the loop entirely.

## The continue Statement

`continue` skips the rest of the current trip through the loop and jumps straight to the next check of the condition.
Use it to skip certain values without stopping the whole loop:

```python
count = 10
while count > 0:
    count -= 1
    if count % 2 == 0:   # skip even numbers
        continue
    print(count)         # only prints odd numbers: 9, 7, 5, 3, 1
```

Think of `break` as "exit the loop entirely" and `continue` as "skip this trip and try again."

## The else Clause on Loops

Python has an unusual feature: you can add an `else` clause to a `while` loop.
The `else` block runs only if the loop ended *naturally* (condition became `False`) — not if it ended via `break`:

```python
count = 3
while count > 0:
    print(count)
    count -= 1
else:
    print("Countdown finished normally!")   # runs because no break was used
```

```python
count = 3
while count > 0:
    if count == 2:
        break
    print(count)
    count -= 1
else:
    print("This won't print — loop was broken!")  # skipped because break was used
```

The `else` on a loop is rare in practice, but it's a clean way to handle the "search succeeded / search failed" pattern.

## Nested Loops

A **nested loop** is a loop inside another loop.
The inner loop runs completely for every single trip of the outer loop:

```python
for row in range(3):
    for col in range(4):
        print("*", end=" ")
    print()    # move to the next line after each row
```

This prints a 3-row by 4-column grid of stars.
The inner `for col in range(4)` completes four trips for every single trip of `for row in range(3)`.

Nested loops are powerful for drawing grids, tables, and 2D patterns — and you will use them more in later chapters.

## The time Module

Python's built-in **`time` module** lets your program interact with the clock.
Before using it, you import it like any other module:

```python
import time
```

The most useful function for animation is **`time.sleep(seconds)`** — it pauses the program for the given number of seconds (decimals are allowed):

```python
import time
print("Starting...")
time.sleep(2)          # pause for 2 seconds
print("Done waiting!")
```

`time.sleep()` is how you control the speed of animations: pause for 0.05 seconds between each frame to get roughly 20 frames per second.

!!! mascot-warning "time.sleep() in the Browser"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    In a real Python program on your computer, `time.sleep()` pauses the program smoothly. In the Skulpt browser labs, very long sleep times may cause the page to pause for a moment. Keep `time.sleep()` values small (0.05–0.2 seconds) in the labs, and use larger values only when running Python on your own machine.

## Animation with Turtle Loops

Combine a `while` loop with the turtle and `time.sleep()` to create a simple animation.
The key idea: draw one small step, pause briefly, draw the next step, pause again — and repeat.

The program below draws a growing spiral.
Each time through the loop, the step length increases, so the spiral gets bigger on every trip.

!!! mascot-thinking "Your Turn — Fix the Growing Spiral"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below has a bug: the spiral never grows because `step` never changes inside the loop.
    Add **one line** inside the loop body to increase `step` by `5` on every trip.
    **Hint:** use `step += 5`. Watch the spiral grow as you run it!

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
t.speed(0)

step = 5
while step < 150:
    t.forward(step)
    t.right(45)
    # Add one line here to increase step by 5 each trip`);
</script>

Once the spiral appears, notice how the `while step < 150` condition automatically stops the loop when the spiral is big enough — no manual counting needed!

## Experiments

Try these changes to the programs above. For each one, predict what will happen first, then run it to check!

1. In the countdown lab, change `count = 5` to `count = 10`. **You'll know it worked when** the countdown prints 10 numbers before "Liftoff!".
2. Change `while count > 0` to `while count > 3`. **You'll know it worked when** the countdown stops at 4, not 1.
3. In the spiral lab, change `t.right(45)` to `t.right(90)`. **You'll know it worked when** you see a square spiral instead of a diagonal one.
4. Change `t.right(45)` to `t.right(91)`. **You'll know it worked when** you see a slowly rotating spiral with gaps between the lines.
5. Add `t.pencolor("blue")` before the `while` loop, then inside the loop add `if step > 80: t.pencolor("red")`. **You'll know it worked when** the inner part of the spiral draws blue and the outer part draws red.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered the `while` loop — Python's engine for open-ended repetition! You know how to stop loops with `break`, skip steps with `continue`, use the `time` module, and build animations that grow step by step. Games, simulations, and interactive programs all run on exactly this kind of loop. Let's keep coding it together!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
