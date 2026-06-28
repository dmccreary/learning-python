---
title: Lists — Methods and Patterns
description: Master list methods for adding, removing, sorting, and iterating — plus list comprehensions, stacks, and queues
generated_by: claude skill chapter-content-generator
date: 2026-06-28 12:40:00
version: 0.09
---

# Lists — Methods and Patterns

By the end of this lesson you'll be able to:

- Add items with `append()`, `insert()`, and `extend()`, and remove items with `remove()`, `pop()`, and `clear()`
- Sort and reverse a list with `sort()` and `reverse()`
- Build lists dynamically inside a `for` loop or using a **list comprehension**
- Use a list as a **stack** (last in, first out) or a **queue** (first in, first out)

Lists become really powerful once you can add, remove, and reorganize their items.
In this chapter you'll see patterns that show up in real Python programs every day.

!!! mascot-welcome "Welcome to Chapter 16!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to make your lists work harder? Today you'll learn to add items, remove items,
    sort your collection, and even build brand-new lists automatically!
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## Adding Items to a List

There are three methods for adding items.

Before we try them, let's define each one clearly:

- `append(x)` — adds `x` to the **end** of the list
- `insert(i, x)` — adds `x` **before** the item at index `i`
- `extend(other_list)` — adds every item from `other_list` to the end

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">fruits = ["apple", "banana"]
print("Start:", fruits)

fruits.append("mango")
print("After append:", fruits)

fruits.insert(1, "kiwi")   # insert "kiwi" at index 1
print("After insert:", fruits)

extras = ["grape", "lemon"]
fruits.extend(extras)
print("After extend:", fruits)
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

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    After `fruits.insert(1, "kiwi")`, what does the list look like?
    Which item gets pushed to index 2? Make your guess — then run it!

Were you right? `insert(1, "kiwi")` slots `"kiwi"` at position 1, pushing `"banana"` to position 2.

## Removing Items from a List

There are three methods for removing items:

- `remove(x)` — removes the **first** occurrence of the value `x` (raises `ValueError` if not found)
- `pop()` — removes and returns the **last** item (or `pop(i)` removes at index `i`)
- `clear()` — removes **all** items, leaving an empty list

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">items = ["a", "b", "c", "d", "e"]
print("Start:", items)

items.remove("c")
print("After remove('c'):", items)

last = items.pop()
print("Popped:", last)
print("After pop:", items)

second = items.pop(1)
print("Popped index 1:", second)
print("After pop(1):", items)
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

## Sorting and Reversing

`sort()` rearranges the items in a list in ascending order (alphabetical for strings, smallest-first for numbers).
`reverse()` flips the order — last becomes first.

Both methods modify the list **in place** — the original list changes.

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">scores = [73, 100, 87, 55, 92]
print("Before sort:", scores)

scores.sort()
print("After sort:", scores)

scores.reverse()
print("After reverse:", scores)

words = ["banana", "apple", "cherry"]
words.sort()
print("Sorted words:", words)
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

## Finding Items with `index()` and `count()`

- `list.index(x)` — returns the index of the first occurrence of `x`
- `list.count(x)` — counts how many times `x` appears

```python
colors = ["red", "blue", "red", "green", "red"]
print(colors.index("blue"))   # 1
print(colors.count("red"))    # 3
```

## Iterating Over a List

The most common way to work with every item in a list is a `for` loop:

```python
for item in my_list:
    # do something with item
```

You can also iterate and build a new list at the same time — called the **loop-with-list-building** pattern:

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">scores = [73, 100, 87, 55, 92]
doubled = []

for s in scores:
    doubled.append(s * 2)

print("Original:", scores)
print("Doubled: ", doubled)
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

## List Comprehensions

A **list comprehension** is a shorter way to build a new list from an existing one.
It packs the loop and the expression into a single line inside square brackets.

Before the comprehension, make sure you understand the loop version:

```python
# The long way:
doubled = []
for s in scores:
    doubled.append(s * 2)

# The short way (list comprehension):
doubled = [s * 2 for s in scores]
```

Both produce exactly the same result. The comprehension just reads like English: "s times 2, for each s in scores."

You can even add an `if` filter:

```python
passing = [s for s in scores if s >= 70]   # only scores 70 and above
```

<div id="skulpt-lab-5" class="skulpt-text-only">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">scores = [73, 100, 87, 55, 92, 68]

doubled  = [s * 2 for s in scores]
passing  = [s for s in scores if s >= 70]
graded   = ["pass" if s >= 70 else "fail" for s in scores]

print("Doubled:", doubled)
print("Passing:", passing)
print("Graded: ", graded)
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

## Nested Lists

A **nested list** is a list that contains other lists as items.
Think of it like a grid — rows and columns.

```python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grid[0])      # [1, 2, 3] — first row
print(grid[1][2])   # 6 — row 1, column 2
```

## Lists as Stacks and Queues

A **stack** is a "last in, first out" collection — like a stack of plates. You add and remove from the top.
Use `append()` to push and `pop()` to pop:

```python
stack = []
stack.append("a")   # push
stack.append("b")
stack.append("c")
print(stack.pop())  # "c" — last in, first out
```

A **queue** is "first in, first out" — like a line at a lunch counter.
Use `append()` to add to the back and `pop(0)` to remove from the front:

```python
queue = []
queue.append("first")
queue.append("second")
queue.append("third")
print(queue.pop(0))   # "first" — first in, first out
```

## Learning Check

!!! mascot-thinking "Your Turn — Build a Filtered List"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below tries to build a list of only the even numbers from `numbers`,
    but the list comprehension has a bug in its `if` condition.
    Fix it so `evens` contains only even numbers!

<div id="skulpt-lab-6" class="skulpt-text-only">
  <div id="editor-container-6">
    <textarea id="code-6" spellcheck="false">numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Bug: this keeps odd numbers, not even ones!
evens = [n for n in numbers if n % 2 == 1]

print("Evens:", evens)
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

1. Start with an empty list. Use `append()` to add the numbers 1 through 5. Print the list.
   **You'll know it worked when** you see `[1, 2, 3, 4, 5]`.

2. Create a list of five names. Sort it alphabetically and print it.
   **You'll know it worked when** the names appear in A–Z order.

3. Write a list comprehension that turns `["hello", "world", "python"]` into all-caps.
   **You'll know it worked when** you see `["HELLO", "WORLD", "PYTHON"]`.

4. Simulate a stack of three pancakes. Push "bottom", "middle", "top". Pop one. Print the remaining stack.
   **You'll know it worked when** "top" is removed and two pancakes remain.

5. Create a nested list for a 3×3 grid. Print the center value (row 1, column 1).
   **You'll know it worked when** you see the number at position `[1][1]`.

!!! mascot-celebration "List Champion!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered append, insert, remove, sort, comprehensions, stacks, and queues!
    Lists are one of the workhorses of Python — you'll use these patterns in almost every program you build from here on. Let's keep coding together!
