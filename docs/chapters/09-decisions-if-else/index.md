---
title: Making Decisions with If/Else
description: Teach Python to make choices using Boolean values, comparison operators, logical operators, if/elif/else branching, and nested conditionals.
generated_by: claude skill chapter-content-generator
date: 2026-06-28 10:55:00
version: 0.09
---

# Making Decisions with If/Else

## Summary

Programs need to make choices — just like Scratch's "if/then/else" blocks.
Python's `if`, `elif`, and `else` keywords handle branching. This chapter
introduces the Boolean type (`True`/`False`), comparison operators
(`==`, `!=`, `<`, `>`), logical operators (`and`, `or`, `not`),
chained comparisons, and nested conditionals for multi-way decisions.

## Concepts Covered

This chapter covers the following 9 concepts from the learning graph:

1. Boolean Type
2. Comparison Operators
3. Logical Operators
4. Boolean in Conditions
5. Chained Comparisons
6. if Statement
7. if...else Block
8. elif Chains
9. Nested if Statements

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Variables and Numbers](../03-variables-and-numbers/index.md)
- [Chapter 6: Math and Arithmetic](../06-math-and-arithmetic/index.md)

---

By the end of this lesson you'll be able to:

- Create and compare Boolean values using `True`, `False`, and comparison operators
- Write `if`, `if/else`, and `if/elif/else` blocks to make your program branch
- Combine conditions with `and`, `or`, and `not`
- Use an `if/elif/else` chain to draw different shapes based on a variable's value

Every useful program makes decisions.
A game needs to know if a player has won.
A calculator needs to know if the denominator is zero before dividing.
Python's **`if` statement** is how programs choose what to do based on what is true or false.

!!! mascot-welcome "Welcome to Chapter 9!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This is the chapter where your programs stop being one-way streets! Once you know `if`, `elif`, and `else`, your code can respond differently to different situations — just like a real decision-maker. Let's code it together!

## The Boolean Type

A **Boolean** (named after mathematician George Boole) is a value that is either `True` or `False` — and nothing else.
In Python, `True` and `False` are written with a capital first letter.

```python
is_raining = True
has_umbrella = False
print(is_raining)       # True
print(type(True))       # <class 'bool'>
```

Booleans are produced automatically whenever Python **compares** two values.

## Comparison Operators

A **comparison operator** compares two values and returns a Boolean.
Python has six comparison operators:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | equal to | `5 == 5` | `True` |
| `!=` | not equal to | `5 != 3` | `True` |
| `<` | less than | `3 < 5` | `True` |
| `>` | greater than | `5 > 3` | `True` |
| `<=` | less than or equal | `5 <= 5` | `True` |
| `>=` | greater than or equal | `4 >= 5` | `False` |

!!! mascot-warning "The Most Common Beginner Mistake"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    **`=` is NOT the same as `==`.** A single `=` *assigns* a value to a variable: `x = 5`. A double `==` *compares* two values: `x == 5`. Writing `if x = 5:` will give you a `SyntaxError`. This mistake happens to every beginner — now you know to look for it!

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch, the green **Operators** blocks include `=`, `<`, and `>` for comparisons, and the **Control** category has the "if/then" and "if/then/else" blocks. Python's `if` statement and comparison operators do exactly the same jobs — you just type them instead of dragging!

The program below uses comparisons to describe a score.
Before clicking Run, think about which `print()` calls will actually run.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The variable `score` is `75`. Look at each `if` statement carefully.
    Which conditions are `True` for a score of 75?
    How many lines do you think will actually print?
    Make your guess — then click Run!

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
initCmLab('', `score = 75

print("Score:", score)
print("Is 75 == 75?", score == 75)
print("Is 75 > 50? ", score > 50)
print("Is 75 < 100?", score < 100)
print("Is 75 == 100?", score == 100)

if score >= 60:
    print("Passing grade!")

if score == 100:
    print("Perfect score!")`);
</script>

Were you right? The line `"Perfect score!"` did NOT print because `75 == 100` is `False`. The `if` body only runs when its condition is `True`.

## The if Statement

An **`if` statement** runs a block of code only when a condition is `True`.
The structure is:

```python
if condition:
    # this block runs only when condition is True
    do_something()
```

The colon `:` at the end of the `if` line is required.
The indented lines below it form the **if body** — they only run when the condition is `True`.

## The if…else Block

An **`if/else` block** adds a second branch: code that runs when the condition is `False`.

```python
temperature = 15

if temperature > 20:
    print("It's warm — wear a t-shirt!")
else:
    print("It's cool — bring a jacket!")
```

Every `if/else` runs *exactly one* branch — never both, never neither.
When `temperature` is `15`, the condition `15 > 20` is `False`, so the `else` branch runs.

## elif Chains

When you need more than two choices, use **`elif`** (short for "else if"):

```python
score = 83

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
```

Python checks conditions from top to bottom and runs the **first** branch whose condition is `True`, then skips all the rest.
For `score = 83`, the first `True` condition is `score >= 80`, so Python prints `"B"` and ignores the remaining branches.

### See It: One Path Lights Up

The explorer below turns an elif chain into a flowchart. Exactly **one** path glows green, and — this is the important part — conditions after the first `True` are marked **"never checked"** because Python does not even look at them. Before you move the slider, predict: **with a score of 85, which conditions get checked, and which branch runs?**

<iframe src="../../sims/control-flow-explorer/main.html" height="562" width="100%" scrolling="no"></iframe>

[Explore the Control Flow Explorer MicroSim](../../sims/control-flow-explorer/index.md){ .md-button }

Slide the score slowly from 100 down to 0 and watch the green path move down the chain one branch at a time. Then try the **Simple if** program — what happens to the flowchart when the condition is False and there is no else?

## Logical Operators

**Logical operators** combine two Boolean values into one:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `and` | Both must be True | `5 > 3 and 2 < 4` | `True` |
| `or` | At least one must be True | `5 > 3 or 2 > 4` | `True` |
| `not` | Flips True↔False | `not True` | `False` |

```python
age = 13
has_ticket = True

if age >= 10 and has_ticket:
    print("Welcome to the show!")

if age < 5 or age > 65:
    print("Free admission!")
```

### See It: The Boolean Logic Lab

Instead of memorizing truth tables, build them yourself. Set inputs A and B in the lab below and watch the result lamp. Before you start, predict: **if A is False, does `A and B` ever light the lamp — no matter what B is?**

<iframe src="../../sims/boolean-logic-lab/main.html" height="512" width="100%" scrolling="no"></iframe>

[Explore the Boolean Logic Lab MicroSim](../../sims/boolean-logic-lab/index.md){ .md-button }

Notice something sneaky: when A alone decides the answer, the B block grays out and says "Python never looked here." That trick is called **short-circuit evaluation**, and you will meet it again in Chapter 19. The bonus panel at the bottom previews another Chapter 19 idea — every value, even `0` and `""`, can act as a Boolean.

## Chained Comparisons

Python lets you write range checks in a natural, math-like way:

```python
x = 15

# The Python way (chained):
if 10 < x < 20:
    print("x is between 10 and 20")

# The long way (same thing):
if x > 10 and x < 20:
    print("x is between 10 and 20")
```

Both forms are correct, but chained comparisons read more naturally and look more like how you'd write it in math class.

## Nested if Statements

A **nested `if`** is an `if` statement placed inside another `if` body.
Use nesting when you need to check a second condition only after a first one is already `True`:

```python
is_member = True
age = 14

if is_member:
    if age >= 13:
        print("Full member access!")
    else:
        print("Junior member access!")
else:
    print("Please sign up first.")
```

Keep nesting to two levels maximum — deeply nested code becomes hard to read quickly.

## if/elif/else with Turtle: Draw Different Shapes

Now let's use branching to make the turtle draw different shapes based on a variable.
The program below should draw a different shape depending on the value of `shape_choice` — but the `elif` chain is incomplete.

!!! mascot-thinking "Your Turn — Complete the elif Chain"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program checks `shape_choice` and draws a square when it equals `"square"`.
    Add **two more elif blocks** so that `"triangle"` draws a triangle (3 sides, 120° turns)
    and `"hexagon"` draws a hexagon (6 sides, 60° turns).

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

shape_choice = "triangle"   # try "square", "triangle", "hexagon"

if shape_choice == "square":
    for i in range(4):
        t.forward(100)
        t.right(90)
# Add elif for "triangle" (3 sides, turn 120 degrees each)

# Add elif for "hexagon" (6 sides, turn 60 degrees each)

else:
    t.write("Unknown shape: " + shape_choice, font=("Arial", 14, "normal"))`);
</script>

Once all three shapes work, try setting `shape_choice = "circle"` to see the else branch draw the "Unknown shape" message!

## Experiments

Try these changes to the programs above. For each one, predict what will happen first, then run it to check!

1. In the first lab, change `score = 75` to `score = 92`. **You'll know it worked when** the `if score >= 60` block still runs but now `score >= 90` would also be `True`.
2. Add an `elif score == 75: print("Exactly 75!")` block. **You'll know it worked when** changing `score` back to `75` prints that message.
3. In the turtle lab, add an `elif shape_choice == "pentagon":` block that draws 5 sides with 72° turns. **You'll know it worked when** `shape_choice = "pentagon"` draws a pentagon.
4. Add `t.pencolor("purple")` inside the triangle branch only. **You'll know it worked when** the triangle draws in purple but the square stays black.
5. Try `shape_choice = "hexagon"`. **You'll know it worked when** a six-sided hexagon appears on the canvas.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Your programs can now make decisions! You know Boolean values, six comparison operators, three logical operators, and four types of branching: `if`, `if/else`, `elif` chains, and nested `if`. These are the building blocks of every interactive program ever written. Let's keep coding it together!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
