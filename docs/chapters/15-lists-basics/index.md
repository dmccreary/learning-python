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
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

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
initCmLab('', `colors = ["red", "green", "blue", "yellow"]
scores = [95, 87, 100, 73, 88]

print("Colors:", colors)
print("Scores:", scores)
print("Type of colors:", type(colors))`);
</script>

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
initCmLab('-2', `colors = ["red", "green", "blue", "yellow"]
print("colors[0]:", colors[0])
print("colors[2]:", colors[2])
print("colors[3]:", colors[3])`);
</script>

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
initCmLab('-3', `colors = ["red", "green", "blue", "yellow"]
print("Last item:", colors[-1])
print("Second to last:", colors[-2])`);
</script>

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

<div class="cm-lab cm-text-only">
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
initCmLab('-4', `fruits = ["apple", "banana", "mango", "kiwi"]

print("apple" in fruits)     # True
print("grape" in fruits)     # False
print("mango" not in fruits) # False

if "banana" in fruits:
    print("We have bananas!")`);
</script>

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

<div class="cm-lab cm-text-only">
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
initCmLab('-5', `colors = ["red", "green", "blue"]
print("Before:", colors)

colors[1] = "purple"   # change the item at index 1
print("After change:", colors)

# Strings are immutable:
word = "hello"
# word[0] = "H"   # this would cause a TypeError!
new_word = "H" + word[1:]   # must create a new string
print("New word:", new_word)`);
</script>

### See It: A List Reshaping Itself

Lists are **mutable** — they change shape in place, and every change renumbers the indices. In the explorer below, predict first: **if you insert a new color at index 1, what happens to the index of every color after it?** Then click `insert(1, ...)` and watch.

<iframe src="../../sims/list-index-explorer/main.html" height="482" width="100%" scrolling="no"></iframe>

[Explore the List Index Explorer MicroSim](../../sims/list-index-explorer/index.md){ .md-button }

Try a few `append()` and `pop()` clicks and watch both index rows renumber. Then click **String Test** to see the exact `TypeError` a string gives when you try the same in-place change — the mutable/immutable divide in one screen.

## Learning Check

!!! mascot-thinking "Your Turn — Find the Index Bug"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below is supposed to print the *last* item in the list using negative indexing.
    But it has an off-by-one bug. Fix the index so it prints `"kiwi"`.

<div class="cm-lab cm-text-only">
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
initCmLab('-6', `fruits = ["apple", "banana", "mango", "kiwi"]

# Bug: this prints "mango", not "kiwi"
print("Last fruit:", fruits[-2])`);
</script>

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

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
