---
title: Recursion and Fractals
description: Discover recursion — functions that call themselves — with base cases, call stacks, lambdas, and a beautiful recursive fractal tree
generated_by: claude skill chapter-content-generator
date: 2026-06-28 14:00:00
version: 0.09
---

# Recursion and Fractals

By the end of this lesson you'll be able to:

- Explain what **recursion** is and why every recursive function needs a **base case**
- Trace through a simple recursive function step by step
- Write a **lambda** (one-line anonymous function) and pass functions as arguments
- Build a recursive **fractal tree** using turtle graphics

Recursion is one of the most mind-bending ideas in programming — a function that calls itself.
Once you understand it, you'll see fractals in a completely new way.

!!! mascot-welcome "Welcome to Chapter 24!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Recursion sounds scary, but it's really just a function that knows how to break a big problem into a smaller version of the same problem.
    Let's start simple, then build something beautiful. Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## The Recursion Concept

**Recursion** happens when a function calls itself.
Think about Russian nesting dolls — each doll contains a smaller version of itself, all the way down to the tiny solid one at the center.

The solid doll at the center is the **base case** — the point where the function stops calling itself.
Without a base case, the function would call itself forever (or until Python runs out of stack space and raises a `RecursionError`).

The simplest recursive example is counting down:

```python
def countdown(n):
    if n <= 0:          # BASE CASE — stop here
        print("Go!")
        return
    print(n)
    countdown(n - 1)    # RECURSIVE CALL — call itself with a smaller problem
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
initCmLab('', `def countdown(n):
    if n <= 0:
        print("Go!")
        return
    print(n)
    countdown(n - 1)

countdown(5)`);
</script>

## The Base Case

Every recursive function **must** have a base case.
The base case is the condition that stops the recursion and returns a value without calling the function again.

If you forget the base case, Python eventually raises `RecursionError: maximum recursion depth exceeded` after about 1000 nested calls.

A well-designed recursive function:
1. Checks for the base case first
2. Makes the recursive call with a *smaller* or *simpler* version of the input

## Recursion Depth and the Call Stack

Each time a function calls itself, Python saves the current state in memory (the **call stack**).
This means recursion uses memory — and Python limits the stack to about 1,000 levels deep by default.

For most student programs this is plenty. But for very deep recursion (like large fractals), you may need to reduce the depth.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The recursive `factorial` function below computes `n!` (n factorial).
    What do you think `factorial(5)` returns? Remember: `5! = 5 × 4 × 3 × 2 × 1`.
    Make your guess — then run it!

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
initCmLab('-2', `def factorial(n):
    if n <= 1:          # base case
        return 1
    return n * factorial(n - 1)   # recursive call

print("5! =", factorial(5))
print("7! =", factorial(7))
print("10! =", factorial(10))`);
</script>

Were you right? `5! = 120`. Tracing it: `5 * factorial(4)` → `5 * 4 * factorial(3)` → ... → `5 * 4 * 3 * 2 * 1`.

## Lambda Functions

A **lambda** is a tiny anonymous function written on one line.
The syntax is: `lambda parameters: expression`.

```python
square = lambda x: x * x
print(square(5))   # 25

add = lambda a, b: a + b
print(add(3, 4))   # 7
```

Lambdas are most useful when you need a short function as an argument to another function, like `sorted(key=...)` or `map()`.

## Functions as Arguments

In Python, functions are **first-class objects** — you can pass them as arguments to other functions.

Before we try this, note what it means: when a function takes another function as a parameter, the outer function can call it on any input without knowing what it does in advance.

```python
def apply(func, value):
    return func(value)

print(apply(abs, -7))         # 7
print(apply(str.upper, "hi")) # "HI"
print(apply(lambda x: x**2, 5))  # 25
```

## Nested Functions

You can define a function inside another function. The inner function can access variables from the outer function.

The **`nonlocal` keyword** lets an inner function modify a variable from its enclosing (outer) function — similar to how `global` lets a function modify a global variable.

```python
def make_counter():
    count = 0

    def increment():
        nonlocal count   # tells Python: use the outer count, not a new local one
        count += 1
        return count

    return increment

counter = make_counter()
print(counter())   # 1
print(counter())   # 2
print(counter())   # 3
```

## Fractals with Recursion and Turtle

A **fractal** is a pattern that repeats itself at smaller and smaller scales.
Recursive functions are perfect for drawing fractals because each branch is a smaller version of the whole.

The **fractal tree** works like this: draw a trunk, then at the top of the trunk, draw two branches at angles — and each branch is a smaller tree.

Before the code, the key parameters are:
- `length` — length of the current branch
- `angle` — how far each branch spreads left and right
- When `length < 5`, stop drawing (base case)

<div class="cm-lab">
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
initCmLab('-3', `import turtle
t = turtle.Turtle()
t.speed(0)
t.left(90)   # point upward
t.penup()
t.goto(0, -180)
t.pendown()

def draw_tree(length, angle):
    if length < 5:   # base case: stop for tiny branches
        return
    t.pensize(max(1, length // 10))
    t.forward(length)
    t.left(angle)
    draw_tree(length * 0.7, angle)   # left branch (smaller)
    t.right(angle * 2)
    draw_tree(length * 0.7, angle)   # right branch (smaller)
    t.left(angle)
    t.backward(length)

draw_tree(80, 25)
t.hideturtle()`);
</script>

Try changing the angle from `25` to `35` or `15` to see how it changes the tree's shape!

!!! mascot-tip "The Magic of Backtracking"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Notice `t.backward(length)` at the end of `draw_tree`. This is the turtle going back to where it started *before* it drew the current branch.
    Without this, the turtle would wander off. Backtracking is what makes recursive drawing work — always return the turtle to where you found it.

## Learning Check

!!! mascot-thinking "Your Turn — Add Color to the Fractal Tree"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The fractal tree draws in the default color. Modify the `draw_tree` function so that:
    - Branches with `length >= 40` are drawn in `"brown"` (trunk/main branches)
    - Shorter branches (length < 40) are drawn in `"green"` (leaves)
    Add a `t.pencolor()` call at the start of the function to set the color based on length.

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
t = turtle.Turtle()
t.speed(0)
t.left(90)
t.penup(); t.goto(0, -180); t.pendown()

def draw_tree(length, angle):
    if length < 5:
        return
    # Add: set color to "brown" if length >= 40, else "green"
    t.pensize(max(1, length // 10))
    t.forward(length)
    t.left(angle)
    draw_tree(length * 0.7, angle)
    t.right(angle * 2)
    draw_tree(length * 0.7, angle)
    t.left(angle)
    t.backward(length)

draw_tree(80, 25)
t.hideturtle()`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change the `0.7` multiplier in `draw_tree` to `0.6`. The tree will branch faster.
   **You'll know it worked when** the tree is shorter and bushier.

2. Change the angle from `25` to `40`.
   **You'll know it worked when** the branches spread out much wider.

3. Write a recursive function `sum_list(lst)` that adds up all items in a list without using Python's `sum()`.
   **You'll know it worked when** `sum_list([1, 2, 3, 4, 5])` returns `15`.

4. Write a recursive function `reverse_string(s)` that reverses a string.
   Base case: if `len(s) <= 1`, return `s`. Otherwise return `reverse_string(s[1:]) + s[0]`.
   **You'll know it worked when** `reverse_string("hello")` returns `"olleh"`.

5. Use a lambda with `sorted()` to sort `["banana", "apple", "fig", "kiwi"]` by string length.
   **You'll know it worked when** shorter words appear first.

!!! mascot-celebration "Recursion Master!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've grasped one of the most powerful and beautiful ideas in all of programming!
    Recursion, fractals, lambdas, and functions-as-arguments — these concepts appear in professional code every day.
    Next up: object-oriented programming! Let's keep coding!

[See Annotated References](./references.md)
