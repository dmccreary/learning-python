---
title: Lists — Basics
description: Discover Python lists — how to create them, access items by index, slice sublists, and understand the difference between mutable and immutable types
generated_by: claude skill chapter-content-generator
date: 2026-06-28 12:30:00
version: 0.09
---

# Lists — Basics

By the end of this lesson you'll be able to:

- Create a Python list and access items by index (including negative indexing)
- Slice a sublist using the `[start:end]` notation
- Measure a list's length with `len()` and test for membership with `in`
- Explain the difference between **mutable** (changeable) and **immutable** (unchangeable) types

Variables hold one value. But what if you need to store a whole collection of values — like the names of all your friends, or the scores from ten games?
That's what **lists** are for.

!!! mascot-welcome "Welcome to Chapter 15!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Lists are one of the most powerful tools in Python!
    Once you learn lists, you'll wonder how you ever programmed without them.
    Let's build our first collection! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## The List Type

A **list** is an ordered, changeable collection of items.
You create one using square brackets, with items separated by commas:

```python
colors = ["red", "green", "blue", "yellow"]
scores = [95, 87, 100, 73, 88]
mixed  = ["Monty", 42, True, 3.14]   # lists can hold different types
empty  = []                           # an empty list
```

Lists can hold any type of value — strings, numbers, booleans, even other lists.

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">colors = ["red", "green", "blue", "yellow"]
scores = [95, 87, 100, 73, 88]

print("Colors:", colors)
print("Scores:", scores)
print("Type of colors:", type(colors))
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

## List Indexing

Just like strings, each item in a list has an **index** starting at `0`.
Use square brackets to access an item: `my_list[index]`.

```
colors = ["red", "green", "blue", "yellow"]
           0       1        2        3
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Look at the list `colors` above. What does `colors[2]` print?
    And what about `colors[0]`?  Make your guess — then run it!

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">colors = ["red", "green", "blue", "yellow"]
print("colors[0]:", colors[0])
print("colors[2]:", colors[2])
print("colors[3]:", colors[3])
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

Were you right? Index `0` is the first item, index `2` is the third.

You can also change an item using its index:

```python
colors[1] = "purple"   # replaces "green" with "purple"
```

## Negative Indexing

**Negative indexing** lets you count backwards from the end.
`-1` is the last item, `-2` is the second-to-last, and so on.

```
colors = ["red", "green", "blue", "yellow"]
            -4     -3       -2       -1
```

This is especially useful when you don't know how long the list is but you always want the last item.

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">colors = ["red", "green", "blue", "yellow"]
print("Last item:", colors[-1])
print("Second to last:", colors[-2])
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

## List Slicing

**Slicing** extracts a portion of a list. The syntax is the same as string slicing: `my_list[start:end]`.
It returns a new list containing items from `start` up to (but not including) `end`.

```python
scores = [95, 87, 100, 73, 88]
print(scores[1:4])   # [87, 100, 73]
print(scores[:3])    # [95, 87, 100]
print(scores[2:])    # [100, 73, 88]
```

## Measuring Length with `len()`

`len()` counts how many items are in a list. It works on strings too (counting characters).

```python
colors = ["red", "green", "blue", "yellow"]
print(len(colors))   # 4
```

Use `len()` when you need the number of items — for example, to loop exactly as many times as there are items.

## Testing Membership with `in`

The **`in` operator** checks whether a value is in a list.
It returns `True` if the value is found, `False` if not.

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">fruits = ["apple", "banana", "mango", "kiwi"]

print("apple" in fruits)     # True
print("grape" in fruits)     # False
print("mango" not in fruits) # False

if "banana" in fruits:
    print("We have bananas!")
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

`not in` is the opposite — it returns `True` when the item is **not** in the list.

## Mutable vs Immutable Types

**Mutable** means you can change something after you create it.
**Immutable** means once created, it cannot be changed — you have to make a new one instead.

Lists are **mutable** — you can change any item, add items, or remove items.

Strings are **immutable** — once you create `"hello"`, you cannot change character `[0]` to something else.

| Type | Mutable? | Example |
|------|----------|---------|
| `list` | Yes | `colors[0] = "purple"` works |
| `str` | No | `word[0] = "P"` raises `TypeError` |
| `int`, `float` | No | `x = 5` then `x = 6` creates a new int, doesn't change the old one |

<div id="skulpt-lab-5" class="skulpt-text-only">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">colors = ["red", "green", "blue"]
print("Before:", colors)

colors[1] = "purple"   # change the item at index 1
print("After change:", colors)

# Strings are immutable:
word = "hello"
# word[0] = "H"   # this would cause a TypeError!
new_word = "H" + word[1:]   # must create a new string
print("New word:", new_word)
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

## Learning Check

!!! mascot-thinking "Your Turn — Find the Index Bug"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below is supposed to print the *last* item in the list using negative indexing.
    But it has an off-by-one bug. Fix the index so it prints `"kiwi"`.

<div id="skulpt-lab-6" class="skulpt-text-only">
  <div id="editor-container-6">
    <textarea id="code-6" spellcheck="false">fruits = ["apple", "banana", "mango", "kiwi"]

# Bug: this prints "mango", not "kiwi"
print("Last fruit:", fruits[-2])
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

1. Create a list of five of your favorite movies. Print the first, the last (using `-1`), and the middle one.
   **You'll know it worked when** all three print without errors.

2. Slice your movies list to get just the first two items.
   **You'll know it worked when** you see a list with exactly 2 movies.

3. Use `len()` to print how many movies are in your list.
   **You'll know it worked when** you see `5` (or whatever number you used).

4. Use `in` to check if your favorite movie is in the list. Print `"Found it!"` or `"Not there!"`.
   **You'll know it worked when** the correct message appears.

5. Change the second item in your list to `"The Matrix"`. Print the whole list before and after.
   **You'll know it worked when** you see the list change.

!!! mascot-celebration "List Master!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've created lists, used indexing and slicing, measured length, checked membership, and
    discovered the mutable/immutable difference! Next chapter we'll learn how to add, remove,
    and sort items — making lists even more powerful. Let's keep coding together!

[See Annotated References](./references.md)
