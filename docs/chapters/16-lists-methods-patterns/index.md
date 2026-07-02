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
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Adding Items to a List

There are three methods for adding items.

Before we try them, let's define each one clearly:

- `append(x)` — adds `x` to the **end** of the list
- `insert(i, x)` — adds `x` **before** the item at index `i`
- `extend(other_list)` — adds every item from `other_list` to the end

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
initCmLab('', `fruits = ["apple", "banana"]
print("Start:", fruits)

fruits.append("mango")
print("After append:", fruits)

fruits.insert(1, "kiwi")   # insert "kiwi" at index 1
print("After insert:", fruits)

extras = ["grape", "lemon"]
fruits.extend(extras)
print("After extend:", fruits)`);
</script>

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
initCmLab('-2', `items = ["a", "b", "c", "d", "e"]
print("Start:", items)

items.remove("c")
print("After remove('c'):", items)

last = items.pop()
print("Popped:", last)
print("After pop:", items)

second = items.pop(1)
print("Popped index 1:", second)
print("After pop(1):", items)`);
</script>

## Sorting and Reversing

`sort()` rearranges the items in a list in ascending order (alphabetical for strings, smallest-first for numbers).
`reverse()` flips the order — last becomes first.

Both methods modify the list **in place** — the original list changes.

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
initCmLab('-3', `scores = [73, 100, 87, 55, 92]
print("Before sort:", scores)

scores.sort()
print("After sort:", scores)

scores.reverse()
print("After reverse:", scores)

words = ["banana", "apple", "cherry"]
words.sort()
print("Sorted words:", words)`);
</script>

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
initCmLab('-4', `scores = [73, 100, 87, 55, 92]
doubled = []

for s in scores:
    doubled.append(s * 2)

print("Original:", scores)
print("Doubled: ", doubled)`);
</script>

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
initCmLab('-5', `scores = [73, 100, 87, 55, 92, 68]

doubled  = [s * 2 for s in scores]
passing  = [s for s in scores if s >= 70]
graded   = ["pass" if s >= 70 else "fail" for s in scores]

print("Doubled:", doubled)
print("Passing:", passing)
print("Graded: ", graded)`);
</script>

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

### See It: Same Items, Different Exits

The simulator below feeds the **same letters** into a stack of plates and a waiting line. Before you remove anything, predict: **after adding A, B, C, D, which letter leaves the stack first — and which leaves the queue first?**

<iframe src="../../sims/stack-queue-simulator/main.html" height="512" width="100%" scrolling="no"></iframe>

[Explore the Stack and Queue Simulator MicroSim](../../sims/stack-queue-simulator/index.md){ .md-button }

Empty both structures and compare the two history strips: the stack gives back D, C, B, A (reversed!) while the queue gives back A, B, C, D (same order). One tiny difference in code — `pop()` versus `pop(0)` — flips the whole story.

## Learning Check

!!! mascot-thinking "Your Turn — Build a Filtered List"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below tries to build a list of only the even numbers from `numbers`,
    but the list comprehension has a bug in its `if` condition.
    Fix it so `evens` contains only even numbers!

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
initCmLab('-6', `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Bug: this keeps odd numbers, not even ones!
evens = [n for n in numbers if n % 2 == 1]

print("Evens:", evens)`);
</script>

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

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
