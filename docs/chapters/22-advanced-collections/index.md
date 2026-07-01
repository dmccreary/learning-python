---
title: Advanced Collections and Built-in Functions
description: Master enumerate(), zip(), *args, **kwargs, max/min/sum/sorted, map/filter, and powerful collection construction patterns
generated_by: claude skill chapter-content-generator
date: 2026-06-28 13:40:00
version: 0.09
---

# Advanced Collections and Built-in Functions

By the end of this lesson you'll be able to:

- Use `enumerate()` for indexed loops and `zip()` to combine iterables
- Write flexible functions with `*args` and `**kwargs`
- Build dictionaries from two lists using `zip()`
- Use `max()`, `min()`, `sum()`, `sorted()`, `reversed()`, `map()`, and `filter()` with confidence

Python's built-in functions are a powerful toolkit. This chapter gathers the most useful ones so you can write shorter, cleaner code that does more.

!!! mascot-welcome "Welcome to Chapter 22!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Python's built-in toolkit is like a Swiss Army knife — there's a tool for almost everything!
    Today we're learning the ones you'll reach for most often.
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## `enumerate()` — Loop with an Index

`enumerate(iterable)` wraps a list (or any sequence) and gives you both the index *and* the item on each loop iteration.
Without `enumerate()`, you'd need a separate counter variable.

```python
# Without enumerate — manual counter:
fruits = ["apple", "banana", "mango"]
for i in range(len(fruits)):
    print(i, fruits[i])

# With enumerate — cleaner:
for i, fruit in enumerate(fruits):
    print(i, fruit)
```

Both produce the same output. `enumerate()` starts at 0 by default; use `enumerate(fruits, 1)` to start at 1.

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
initCmLab('', `menu = ["Burger", "Pizza", "Salad", "Pasta"]

print("Menu:")
for num, item in enumerate(menu, 1):
    print(f"  {num}. {item}")`);
</script>

## `zip()` — Combine Iterables in Parallel

`zip(a, b)` pairs up items from two (or more) iterables step by step.
It stops when the shortest iterable runs out.

```python
names  = ["Alice", "Bob", "Carol"]
scores = [95, 87, 91]

for name, score in zip(names, scores):
    print(f"{name}: {score}")
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below zips two lists of different lengths.
    How many pairs do you think `zip()` will produce?
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
initCmLab('-2', `letters = ["A", "B", "C", "D", "E"]
numbers = [1, 2, 3]

pairs = list(zip(letters, numbers))
print("Pairs:", pairs)
print("Count:", len(pairs))`);
</script>

Were you right? `zip()` stops at 3 pairs because `numbers` runs out first.

## Dictionary from Two Lists with `zip()`

Combine `zip()` with `dict()` to build a dictionary from two parallel lists — one of keys, one of values:

```python
keys   = ["name", "age", "city"]
values = ["Alice", 14, "Paris"]

d = dict(zip(keys, values))
print(d)   # {"name": "Alice", "age": 14, "city": "Paris"}
```

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
initCmLab('-3', `countries = ["France", "Japan", "Brazil"]
capitals  = ["Paris", "Tokyo", "Brasília"]

capital_map = dict(zip(countries, capitals))
print(capital_map)
print("Japan's capital:", capital_map["Japan"])`);
</script>

## `*args` — Variable Number of Positional Arguments

Sometimes you want a function that can accept any number of arguments.
`*args` collects all extra positional arguments into a tuple.

```python
def total(*args):
    return sum(args)

print(total(1, 2, 3))       # 6
print(total(10, 20))        # 30
print(total(5, 5, 5, 5))    # 20
```

## `**kwargs` — Variable Number of Keyword Arguments

`**kwargs` collects extra keyword arguments into a dictionary.

```python
def describe(**kwargs):
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

describe(name="Monty", species="python", color="green")
```

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
initCmLab('-4', `def total(*args):
    return sum(args)

def describe(**kwargs):
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

print("Total:", total(10, 20, 30, 40))

print("Monty's profile:")
describe(name="Monty", level=7, language="Python")`);
</script>

## Aggregating Functions: `max()`, `min()`, `sum()`

These three built-ins work on any iterable of numbers (or comparables for max/min):

```python
scores = [73, 100, 87, 55, 92]

print("Max:", max(scores))    # 100
print("Min:", min(scores))    # 55
print("Sum:", sum(scores))    # 407
print("Avg:", sum(scores) / len(scores))  # 81.4
```

## `sorted()` and `reversed()`

`sorted(iterable)` returns a new sorted list without modifying the original.
`reversed(iterable)` returns an iterator that goes through items in reverse order.

| Function | Modifies original? | Returns |
|----------|-------------------|---------|
| `list.sort()` | Yes | None |
| `sorted(list)` | No | New sorted list |
| `list.reverse()` | Yes | None |
| `reversed(list)` | No | Iterator |

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_nums = sorted(numbers)               # ascending
desc_nums   = sorted(numbers, reverse=True) # descending
```

## `isinstance()` — Type Checking

`isinstance(value, type)` returns `True` if the value is the given type (or a subtype).
It's safer than using `type(x) == int` because it handles inheritance.

```python
print(isinstance(42, int))         # True
print(isinstance(3.14, float))     # True
print(isinstance("hi", str))       # True
print(isinstance([1,2], list))     # True
print(isinstance(42, (int, float)))# True — multiple types allowed
```

## `map()` and `filter()`

`map(func, iterable)` applies a function to every item and returns the results.
`filter(func, iterable)` keeps only items where the function returns `True`.

Both return iterators — wrap them in `list()` to see the results:

```python
numbers = [1, 2, 3, 4, 5, 6]

doubled  = list(map(lambda x: x * 2, numbers))
evens    = list(filter(lambda x: x % 2 == 0, numbers))

print("Doubled:", doubled)   # [2, 4, 6, 8, 10, 12]
print("Evens:", evens)       # [2, 4, 6]
```

A **lambda** is a tiny anonymous function written on one line: `lambda x: x * 2` means "take x, return x times 2."

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
initCmLab('-5', `scores = [45, 78, 92, 61, 88, 73, 55]

passing  = list(filter(lambda s: s >= 70, scores))
bonus    = list(map(lambda s: s + 5, scores))

print("Passing scores:", passing)
print("All scores + 5:", bonus)
print("Max:", max(scores), "Min:", min(scores), "Avg:", round(sum(scores)/len(scores), 1))`);
</script>

## Collection Constructors

You can convert between collection types using `list()`, `tuple()`, `set()`, and `dict()`:

```python
my_list  = list(range(5))         # [0, 1, 2, 3, 4]
my_tuple = tuple([1, 2, 3])       # (1, 2, 3)
my_set   = set([3, 1, 4, 1, 5])   # {1, 3, 4, 5}
```

## Learning Check

!!! mascot-thinking "Your Turn — Use enumerate and zip Together"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below prints player names and their scores, but the output looks messy.
    Fix it to use `zip()` to pair names with scores and `enumerate()` starting at 1 to number the entries.
    Each line should look like: `1. Alice: 95`

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
initCmLab('-6', `names  = ["Alice", "Bob", "Carol"]
scores = [95, 87, 91]

# Fix: use enumerate(zip(...), 1) to print "1. Alice: 95" etc.
for name in names:
    print(name)`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Use `enumerate(["Mon","Tue","Wed","Thu","Fri"], 1)` to print a numbered weekday list.
   **You'll know it worked when** you see `1. Mon`, `2. Tue`, etc.

2. Write a function `my_max(*args)` that returns the largest argument without using the built-in `max()`.
   **You'll know it worked when** `my_max(3, 9, 1, 7)` returns `9`.

3. Use `filter()` to keep only strings longer than 4 characters from `["cat","elephant","dog","hippo"]`.
   **You'll know it worked when** you see `["elephant","hippo"]`.

4. Use `sorted(words, key=len)` to sort a list of words by their length (shortest first).
   **You'll know it worked when** short words appear before long ones.

5. Use `dict(zip(range(1, 6), ["one","two","three","four","five"]))` to build a number-to-word dictionary.
   **You'll know it worked when** `d[3]` prints `"three"`.

!!! mascot-celebration "Built-in Function Master!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've leveled up with enumerate, zip, args, kwargs, map, filter, and more!
    These tools make Python code shorter, more readable, and more powerful.
    Professional programmers use every single one of them regularly. Great work!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
