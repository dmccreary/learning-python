---
title: Tuples and Sets
description: Learn Python's tuple and set types — immutable sequences for fixed data, and unordered collections for unique items and set math
generated_by: claude skill chapter-content-generator
date: 2026-06-28 13:20:00
version: 0.09
---

# Tuples and Sets

By the end of this lesson you'll be able to:

- Create and unpack **tuples**, and explain when to use them instead of lists
- Return multiple values from a function using a tuple
- Create a **set** and use `union()`, `intersection()`, and `difference()` for set math
- Test membership in a set and add or remove items

Python gives you four main collection types. You've mastered lists. Now let's meet two more: tuples and sets.

!!! mascot-welcome "Welcome to Chapter 20!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Tuples are like lists that are locked in place — perfect for things that should never change.
    Sets are like bags where duplicates are forbidden and order doesn't matter.
    Let's explore both! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## The Tuple Type

A **tuple** is an ordered, immutable (unchangeable) collection of items.
You create one using parentheses with items separated by commas.

```python
point = (3, 5)
rgb   = (255, 128, 0)
empty = ()
```

Tuples look and act a lot like lists, but they cannot be changed after creation.
You cannot add, remove, or reassign items in a tuple.

### When to Use a Tuple Instead of a List

Use a tuple when the data is *fixed* and shouldn't change:

| Use case | Example |
|----------|---------|
| Coordinates | `(x, y)` or `(x, y, z)` |
| RGB color values | `(255, 0, 128)` |
| Days of the week | `("Mon", "Tue", ...)` |
| Function return values | return `(lat, lng)` |

Use a list when you need to add, remove, or change items over time.

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">point = (3, 5)
print("Point:", point)
print("x:", point[0], "y:", point[1])
print("Type:", type(point))

# Tuples support indexing and slicing like lists:
colors = ("red", "green", "blue", "yellow")
print("First:", colors[0])
print("Last:", colors[-1])
print("Slice:", colors[1:3])
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

## Single-Element Tuple Syntax

A tuple with *one* item needs a trailing comma — otherwise Python just sees parentheses around a value:

```python
not_a_tuple = (42)    # just the integer 42
is_a_tuple  = (42,)   # a tuple containing 42
```

The trailing comma is the signal to Python that you mean a tuple.

## Tuple Unpacking

**Tuple unpacking** assigns each item in a tuple to a separate variable in one step.
This makes code clean and expressive.

```python
point = (10, 20)
x, y = point          # unpack into x and y
print(x)              # 10
print(y)              # 20
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below unpacks a tuple with three items.
    What values do you think `a`, `b`, and `c` will have?
    Make your guess — then run it!

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">rgb = (255, 128, 0)
r, g, b = rgb
print(f"Red={r}, Green={g}, Blue={b}")

# Swap two variables using tuple unpacking:
x = 10
y = 20
x, y = y, x
print(f"After swap: x={x}, y={y}")
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

## Tuples as Return Values

Functions can return multiple values by packing them into a tuple.
The caller unpacks the result:

```python
def min_max(numbers):
    return (min(numbers), max(numbers))

lo, hi = min_max([3, 1, 7, 2, 9])
print(f"Min: {lo}, Max: {hi}")
```

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">def divide(a, b):
    quotient  = a // b   # integer division
    remainder = a % b    # remainder
    return quotient, remainder   # returns a tuple

q, r = divide(17, 5)
print(f"17 / 5 = {q} remainder {r}")
</textarea>
    <div id="button-row-3">
      <button id="run-btn-3" onclick="runSkulpt('-3')">&#9654; Run</button>
      <button id="reset-btn-3" onclick="resetSkulpt('-3')">&#8635; Reset</button>
    </div>
    <pre id="output-3"></pre>
  </div>
  <div id="canvas-container-3">
    <div id="turtle-target-3"></div>
  </div>
</div>

## The Set Type

A **set** is an unordered collection of **unique** items. Two key properties:
1. No duplicates — adding the same item twice has no effect
2. No guaranteed order — items may print in any order

Create a set with curly braces `{}` or the `set()` constructor:

```python
fruits = {"apple", "banana", "mango", "apple"}   # duplicates removed!
print(fruits)   # {"mango", "banana", "apple"} — order varies
```

Sets are most useful for:
- Removing duplicates from a list
- Fast membership testing (faster than lists for large collections)
- Mathematical set operations

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">numbers = [1, 2, 2, 3, 3, 3, 4]
unique = set(numbers)   # remove duplicates
print("Original list:", numbers)
print("Unique set:", unique)
print("Number of unique items:", len(unique))

# Membership testing:
print("3 in unique:", 3 in unique)
print("7 in unique:", 7 in unique)
</textarea>
    <div id="button-row-4">
      <button id="run-btn-4" onclick="runSkulpt('-4')">&#9654; Run</button>
      <button id="reset-btn-4" onclick="resetSkulpt('-4')">&#8635; Reset</button>
    </div>
    <pre id="output-4"></pre>
  </div>
  <div id="canvas-container-4">
    <div id="turtle-target-4"></div>
  </div>
</div>

## Set Methods: `add()`, `remove()`, `discard()`

- `s.add(x)` — adds `x` to the set (no effect if already present)
- `s.remove(x)` — removes `x`; raises `KeyError` if not found
- `s.discard(x)` — removes `x` if present; silently does nothing if not found

Use `discard()` when you're not sure whether the item exists.

## Set Operations: Union, Intersection, Difference

Before we try them, here's what each operation means:

- **Union (`|`)** — all items from both sets (no duplicates)
- **Intersection (`&`)** — only items that appear in *both* sets
- **Difference (`-`)** — items in the first set but not the second

```
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

A | B  → {1, 2, 3, 4, 5, 6}   union
A & B  → {3, 4}               intersection
A - B  → {1, 2}               in A but not B
B - A  → {5, 6}               in B but not A
```

<div id="skulpt-lab-5" class="skulpt-text-only">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">python_students = {"Alice", "Bob", "Carol", "Dave"}
math_students   = {"Carol", "Dave", "Eve", "Frank"}

both   = python_students & math_students   # intersection
either = python_students | math_students   # union
only_python = python_students - math_students  # difference

print("Both Python and Math:", both)
print("In either class:", either)
print("Only in Python:", only_python)
</textarea>
    <div id="button-row-5">
      <button id="run-btn-5" onclick="runSkulpt('-5')">&#9654; Run</button>
      <button id="reset-btn-5" onclick="resetSkulpt('-5')">&#8635; Reset</button>
    </div>
    <pre id="output-5"></pre>
  </div>
  <div id="canvas-container-5">
    <div id="turtle-target-5"></div>
  </div>
</div>

## Frozensets

A **frozenset** is an immutable version of a set — you cannot add or remove items after creation.
This makes it usable as a dictionary key or stored inside another set (regular sets can't do this).

```python
fs = frozenset([1, 2, 3])
print(fs)        # frozenset({1, 2, 3})
# fs.add(4)      # AttributeError — frozenset is immutable
```

## Learning Check

!!! mascot-thinking "Your Turn — Find Shared Interests"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Two friends listed their favorite animals. Write code to find which animals they *both* like.
    Use the set intersection operator `&` to find the shared items!

<div id="skulpt-lab-6" class="skulpt-text-only">
  <div id="editor-container-6">
    <textarea id="code-6" spellcheck="false">alice_favorites = {"cat", "dog", "rabbit", "parrot"}
bob_favorites   = {"dog", "hamster", "parrot", "fish"}

# Find which animals BOTH Alice and Bob like:
shared = alice_favorites  # replace this line with the correct operation

print("Both like:", shared)
</textarea>
    <div id="button-row-6">
      <button id="run-btn-6" onclick="runSkulpt('-6')">&#9654; Run</button>
      <button id="reset-btn-6" onclick="resetSkulpt('-6')">&#8635; Reset</button>
    </div>
    <pre id="output-6"></pre>
  </div>
  <div id="canvas-container-6">
    <div id="turtle-target-6"></div>
  </div>
</div>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Create a tuple of seven colors of the rainbow. Unpack the first three into `r`, `o`, `y`.
   **You'll know it worked when** three color names are printed without errors.

2. Write a function `circle_stats(radius)` that returns the area and circumference as a tuple.
   Use `math.pi`. Unpack and print both values.
   **You'll know it worked when** radius 5 gives area ≈ 78.54 and circumference ≈ 31.42.

3. Convert the list `[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]` to a set and back to a sorted list.
   **You'll know it worked when** you see `[1, 2, 3, 4, 5, 6, 9]` — duplicates removed.

4. Try adding an item to a frozen set. Read the error message carefully.
   **You'll know it worked when** you see `AttributeError: 'frozenset' object has no attribute 'add'`.

5. Use the `|` union operator to merge two sets of numbers and print the sorted result.
   **You'll know it worked when** you see a combined list with no duplicates.

!!! mascot-celebration "Collection Expert!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered tuples for fixed data and sets for unique collections!
    Now you have four collection tools: list, tuple, set, and (coming next) dictionary.
    Each has its place — knowing when to use which one is a real programming skill!
