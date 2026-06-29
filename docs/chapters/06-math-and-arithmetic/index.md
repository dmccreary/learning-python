---
title: Math and Arithmetic
description: Master Python's arithmetic operators, operator precedence, integer division, modulo, and exponentiation — then connect math to turtle graphics.
generated_by: claude skill chapter-content-generator
date: 2026-06-28 10:10:29
version: 0.09
---

# Math and Arithmetic

## Summary

Python is a powerful calculator. This chapter explores every arithmetic operator:
integer division (`//`), the remainder (`%`), exponentiation (`**`), order of operations,
negative numbers, and scientific notation. You'll also learn to assign multiple
variables at once and use augmented operators like `+=` to make your code shorter.

## Concepts Covered

This chapter covers the following 10 concepts from the learning graph:

1. Multiple Assignment
2. Augmented Assignment Operators
3. Division Returns Float
4. Integer Division Operator
5. Modulo Operator
6. Exponentiation Operator
7. Arithmetic Operators
8. Order of Operations
9. Negative Numbers
10. Scientific Notation Floats

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Variables and Numbers](../03-variables-and-numbers/index.md)

---

By the end of this lesson you'll be able to:

- Calculate results using Python's seven arithmetic operators (`+`, `-`, `*`, `/`, `//`, `%`, `**`)
- Explain the difference between regular division (`/`) and integer division (`//`)
- Use augmented assignment operators like `+=` to update a variable in one step
- Draw any regular polygon by applying the formula `360 / sides` to your turtle

Python already knows all of mathematics. When you type an expression like `10 * 3` or `2 ** 8`, Python evaluates it instantly — no calculator needed.

!!! mascot-welcome "Welcome to Chapter 6!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This chapter is where Python becomes your personal math helper! We'll explore every arithmetic operator Python knows — including a few that don't exist in Scratch — and finish by using math to draw any regular polygon you can imagine. Let's code it together!

## Arithmetic Operators

An **arithmetic operator** is a symbol that tells Python to perform a math calculation.
You already know four of them from math class: `+`, `-`, `*`, and `/`.
Python adds three more that are especially useful in programming.

Here is the complete set:

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division | `10 / 3` | `3.3333...` |
| `//` | Integer Division | `10 // 3` | `3` |
| `%` | Modulo (remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `10 ** 3` | `1000` |

The last three — `//`, `%`, and `**` — may be new to you, but you will use all three constantly.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch, the green **Operators** palette has blocks for `+`, `-`, `×`, and `÷`. Python uses the same ideas but you type the symbols directly instead of dragging blocks. Python's three bonus operators — `**`, `//`, and `%` — don't have Scratch equivalents, but they unlock a whole new world of math tricks!

The program below runs all seven operators at once so you can see their output side by side.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Before you click Run, look at two lines: `print(10 / 3)` and `print(10 // 3)`.
    Do you think they will print the same number or different numbers?
    And what about `print(10 % 3)` — what does the "remainder after dividing" equal?
    Make your guesses, then click Run to find out!

## Try It Now

Edit the code below and click **Run** to see the result.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">print("Addition:        ", 10 + 3)
print("Subtraction:     ", 10 - 3)
print("Multiplication:  ", 10 * 3)
print("Division:        ", 10 / 3)
print("Integer division:", 10 // 3)
print("Modulo:          ", 10 % 3)
print("Exponentiation:  ", 10 ** 3)
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

Were you right? `10 / 3` and `10 // 3` give *different* answers — one keeps the decimal, the other throws it away. And `10 % 3` equals `1`, because 10 ÷ 3 = 3 with **1** left over.

## How It Works

Let's look more closely at the three operators that may be new to you.

**`/` — Division always returns a float.** A **float** (short for "floating-point number") is any number with a decimal point — like `3.3333`, `5.0`, or `-0.75`. In Python, the `/` operator *always* gives you a float, even when the numbers divide evenly: `10 / 2` gives `5.0`, not `5`.

**`//` — Integer division keeps only the whole number.** The `//` operator divides and throws away everything after the decimal point. `10 // 3` = `3`. Think of it as asking: "How many times does 3 fit *completely* inside 10?" Three times — with something left over.

**`%` — Modulo gives you the leftover.** After fitting three 3's into 10 (that's 9), you have `10 − 9 = 1` left over, so `10 % 3` = `1`. Modulo is useful for checking whether a number is even (`n % 2 == 0` is `True` when n is even) and for creating repeating patterns.

**`**` — Exponentiation.** Two stars together means "to the power of." `2 ** 8` = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 256. `10 ** 3` = 10 × 10 × 10 = 1000.

## Order of Operations

Python follows the same order of operations you use in math class — **PEMDAS**:

1. **P**arentheses are calculated first
2. **E**xponents (`**`) next
3. **M**ultiplication, **D**ivision, `//`, and `%` — left to right
4. **A**ddition and **S**ubtraction — left to right

| Expression | How Python reads it | Result |
|------------|---------------------|--------|
| `2 + 3 * 4` | `2 + (3 * 4)` = `2 + 12` | `14` |
| `(2 + 3) * 4` | `5 * 4` | `20` |
| `10 - 2 ** 3` | `10 - (2 ** 3)` = `10 - 8` | `2` |
| `15 // 4 % 2` | `(15 // 4) % 2` = `3 % 2` | `1` |

When in doubt, add parentheses. `(2 + 3) * 4` is clearer than `2 + 3 * 4`, and extra parentheses never cause errors.

## Negative Numbers

Negative numbers work exactly the way you'd expect — just put a minus sign in front:

```python
temperature = -15
print(temperature + 5)    # -10
print(temperature * -2)   # 30   (negative × negative = positive)
print(abs(temperature))   # 15   (abs() gives the absolute value)
```

Python follows standard sign rules: negative × positive = negative, negative × negative = positive.

## Scientific Notation Floats

Very large or very small numbers can be written in **scientific notation** using the letter `e`.
The number after `e` is the power of ten to multiply by:

```python
speed_of_light = 3e8        # 3 × 10^8 = 300,000,000
electron_mass  = 9.11e-31   # 9.11 × 10^−31 (incredibly tiny)
print(speed_of_light)       # 300000000.0
print(2.5e3)                # 2500.0
```

You will see scientific notation most often in science simulations and when working with very small probabilities.

## Multiple Assignment

Python lets you assign values to two or more variables on the same line.
This is called **multiple assignment**, and it works by listing variable names on the left and values on the right, separated by commas:

```python
x, y = 10, 20
print(x)    # 10
print(y)    # 20
```

Multiple assignment is especially powerful for **swapping two variables** in a single line — something that normally takes three lines:

```python
a = 5
b = 100
a, b = b, a      # swap in one line!
print(a, b)      # 100  5
```

## Augmented Assignment Operators

Programmers frequently need to update a variable by adding to it, subtracting from it, or doubling it.
Python provides shorthand called **augmented assignment operators**:

| Shorthand | Same as | Effect |
|-----------|---------|--------|
| `x += 5` | `x = x + 5` | Adds 5 to x |
| `x -= 5` | `x = x - 5` | Subtracts 5 from x |
| `x *= 2` | `x = x * 2` | Doubles x |
| `x /= 2` | `x = x / 2` | Halves x (returns float) |
| `x //= 2` | `x = x // 2` | Integer-halves x |
| `x %= 3` | `x = x % 3` | Keeps remainder after ÷ 3 |
| `x **= 2` | `x = x ** 2` | Squares x |

You will use `+=` constantly once you start writing loops.
For example, `count += 1` adds 1 to a counter every time the loop repeats.

## Math and Turtle: Drawing Any Regular Polygon

Here is where arithmetic meets art.
Every **regular polygon** — a shape where all sides are equal and all angles are equal — has one key property:
the turtle must turn the **same angle** at every corner, and that angle is always:

```
turn_angle = 360 / number_of_sides
```

- Triangle (3 sides): `360 / 3` = **120°** per turn
- Square (4 sides): `360 / 4` = **90°** per turn
- Pentagon (5 sides): `360 / 5` = **72°** per turn
- Hexagon (6 sides): `360 / 6` = **60°** per turn

The program below draws a polygon — but it is missing the one line that calculates the turn angle.

!!! mascot-thinking "Your Turn — Add the Missing Line"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The turtle wants to draw a triangle but doesn't know how far to turn at each corner.
    Add **one line** below the comment to calculate `turn_angle` using `360` and `sides`.
    Use `/` (not `//`) so the formula gives a precise decimal angle for any polygon!

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle
t = turtle.Turtle()
sides = 3
# Add one line here: calculate turn_angle using 360 and sides

for i in range(sides):
    t.forward(100)
    t.right(turn_angle)
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

Once the triangle appears, try changing `sides` to `5` or `6` — the formula adapts automatically!

## Experiments

Try these changes to the polygon program above. For each one, predict what will happen first, then run it to check!

1. Change `sides = 3` to `sides = 5`. **You'll know it worked when** you see a five-sided pentagon.
2. Change `sides = 6`. **You'll know it worked when** you see a hexagon that looks like a honeycomb cell.
3. Try `sides = 360`. **You'll know it worked when** the turtle traces something that looks almost like a perfect circle.
4. Add `t.pencolor("blue")` before the `for` loop. **You'll know it worked when** all the lines turn blue.
5. Change `t.forward(100)` to `t.forward(300 // sides)`. **You'll know it worked when** larger polygons draw longer lines and smaller polygons draw shorter ones.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've unlocked Python's full arithmetic toolkit — seven operators, order of operations, and two powerful assignment shortcuts. Best of all, you connected math to art with one formula. That's exactly how programmers think! Let's keep coding it together!

[See Annotated References](./references.md)
