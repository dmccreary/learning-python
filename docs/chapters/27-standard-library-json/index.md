---
title: Standard Library and JSON
description: Explore Python's standard library — custom modules, json, sys, os, collections, itertools, datetime — and learn to read/write JSON files
generated_by: claude skill chapter-content-generator
date: 2026-06-28 14:30:00
version: 0.09
---

# Standard Library and JSON

By the end of this lesson you'll be able to:

- Create your own Python module and use the `__name__ == "__main__"` guard
- Load and save data in **JSON format** using `json.loads()`, `json.dumps()`, `json.load()`, and `json.dump()`
- Use key standard library modules: `sys`, `os`, `collections`, `itertools`, and `datetime`
- Check whether a file exists and handle file paths with `os.path`

Python ships with a massive library of ready-to-use modules.
This chapter explores the most useful ones and teaches you how to organize your own code into modules.

!!! mascot-welcome "Welcome to Chapter 27!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    The Python standard library is like a huge toolbox — it comes free with every Python installation.
    Today we'll explore the most useful tools and learn to work with JSON, the universal data format of the web.
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## Creating Custom Modules

A **module** is just a `.py` file that contains functions and variables you want to reuse.
Any Python file can be imported by another file in the same directory.

Suppose you create `mymath.py`:

```python
# mymath.py
PI = 3.14159

def circle_area(r):
    return PI * r * r

def circle_circumference(r):
    return 2 * PI * r
```

Then in your main program:

```python
import mymath
print(mymath.circle_area(5))
```

## The `__name__ == "__main__"` Guard

When Python imports a module, it runs all the code at the top level.
This can cause problems if your module contains test code you only want to run directly — not when imported.

The **`__name__ == "__main__"` guard** wraps test code so it only runs when the file is executed directly:

```python
# mymath.py
def circle_area(r):
    return 3.14159 * r * r

if __name__ == "__main__":
    # This block only runs when you run mymath.py directly
    # It does NOT run when you do: import mymath
    print("Testing circle_area:", circle_area(5))
```

Always put test code and script logic inside this guard in module files.

## The `sys` Module

The `sys` module gives you information about the Python interpreter itself.

| Attribute/Function | What it provides |
|-------------------|-----------------|
| `sys.path` | List of directories Python searches for modules |
| `sys.version` | Python version string |
| `sys.argv` | Command-line arguments passed to the script |
| `sys.exit()` | Exits the program immediately |
| `sys.stdin`, `sys.stdout` | Standard input/output streams |

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import sys

print("Python version:", sys.version[:6])
print("Platform:", sys.platform)
print("Module search paths (first 2):", sys.path[:2])
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

## The `os` Module and File Path Handling

The `os` module lets Python talk to the operating system — creating directories, listing files, working with file paths.

`os.path` is the sub-module for file path operations.
Before we try them, here are the key functions:

| Function | Purpose |
|----------|---------|
| `os.getcwd()` | Get current working directory |
| `os.listdir(path)` | List files in a directory |
| `os.path.exists(path)` | Check if a file/folder exists |
| `os.path.join(a, b)` | Join path parts safely (works on Windows and Mac) |
| `os.path.basename(path)` | Get just the filename from a path |
| `os.path.dirname(path)` | Get just the directory part |

```python
import os

print(os.getcwd())                          # current directory
print(os.path.exists("notes.txt"))          # True or False
print(os.path.join("folder", "file.txt"))   # "folder/file.txt"
```

## JSON — The Universal Data Format

**JSON** (JavaScript Object Notation) is a text format for storing structured data.
It looks almost exactly like Python dictionaries and lists:

```json
{
  "name": "Alice",
  "age": 14,
  "scores": [95, 87, 91],
  "active": true
}
```

JSON is used everywhere — web APIs, configuration files, databases, and data exchange between programs.
Python's `json` module converts between JSON strings and Python objects.

| Python type | JSON type |
|-------------|-----------|
| `dict` | object `{}` |
| `list` | array `[]` |
| `str` | string `""` |
| `int`, `float` | number |
| `True`/`False` | `true`/`false` |
| `None` | `null` |

## `json.loads()` and `json.dumps()`

Two functions convert between JSON text and Python objects:

- `json.loads(text)` — **loads** JSON from a string into Python objects ("loads" = load string)
- `json.dumps(obj)` — **dumps** Python objects to a JSON string ("dumps" = dump string)

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below converts a JSON string to a Python dictionary, then back to JSON.
    Will the two JSON strings look identical? Are there any formatting differences?
    Make your guess — then run it!

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import json

# JSON string → Python object
json_text = '{"name": "Alice", "score": 95, "active": true}'
data = json.loads(json_text)

print("Type:", type(data))
print("Name:", data["name"])
print("Score:", data["score"])

# Python object → JSON string
data["score"] = 98   # update the score
new_json = json.dumps(data, indent=2)
print("\nUpdated JSON:")
print(new_json)
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

`indent=2` makes the JSON human-readable with 2-space indentation.

## Reading and Writing JSON from Files

`json.load(file)` reads JSON directly from an open file.
`json.dump(data, file)` writes JSON directly to an open file.

```python
import json

# Write JSON to a file:
data = {"players": ["Alice", "Bob"], "high_score": 1500}
with open("game.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON from a file:
with open("game.json") as f:
    loaded = json.load(f)

print(loaded["high_score"])   # 1500
```

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">import json, io

# Simulate writing to a file:
data = {
    "game": "Python Quest",
    "players": ["Alice", "Bob", "Carol"],
    "high_score": 2400
}
f = io.StringIO()
json.dump(data, f, indent=2)

# Read back:
f.seek(0)
loaded = json.load(f)
print("Game:", loaded["game"])
print("Players:", loaded["players"])
print("High score:", loaded["high_score"])
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

## The `collections` Module

`collections` provides specialized container types:

- `Counter` — count how many times each item appears
- `defaultdict` — a dict that creates default values automatically
- `OrderedDict` — a dict that remembers insertion order (less needed since Python 3.7)
- `deque` — a double-ended queue that's faster than a list for adding/removing from both ends

```python
from collections import Counter

words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
count = Counter(words)
print(count)             # Counter({'apple': 3, 'banana': 2, 'cherry': 1})
print(count["apple"])    # 3
print(count.most_common(2))  # [('apple', 3), ('banana', 2)]
```

## The `datetime` Module

`datetime` provides date and time objects:

```python
from datetime import datetime, date

now = datetime.now()
print(now.year, now.month, now.day)
print(now.strftime("%Y-%m-%d %H:%M:%S"))   # formatted string

today = date.today()
print(today)
```

## The `itertools` Module

`itertools` provides efficient tools for working with iterators:

- `itertools.chain(a, b)` — join two iterables end-to-end
- `itertools.combinations(seq, r)` — all r-length combinations
- `itertools.permutations(seq, r)` — all r-length permutations
- `itertools.cycle(seq)` — repeat a sequence forever

```python
from itertools import combinations

players = ["A", "B", "C", "D"]
pairs = list(combinations(players, 2))
print(pairs)   # [('A','B'), ('A','C'), ('A','D'), ('B','C'), ('B','D'), ('C','D')]
```

## Learning Check

!!! mascot-thinking "Your Turn — Use Counter"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below counts words in a sentence, but uses the manual `dict.get()` pattern from Chapter 21.
    Replace it with `Counter` from the `collections` module to count the same words in fewer lines!

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">text = "the quick brown fox jumps over the lazy dog the fox"
words = text.split()

# Replace this manual counting with collections.Counter:
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print(word_count)
print("Most common:", max(word_count, key=word_count.get))
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

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Use `json.dumps({"active": True, "count": None}, indent=2)`. Print the result and notice how Python's `True` and `None` become JSON's `true` and `null`.
   **You'll know it worked when** you see `true` and `null` in the output.

2. Use `Counter` to find the most common character in the string `"mississippi"`.
   **You'll know it worked when** you see `"i"` is the most common with count 4.

3. Use `json.loads()` to parse `'[1, 2, 3, 4, 5]'` (a JSON array) into a Python list, then print its sum.
   **You'll know it worked when** you see `15`.

4. Use `datetime.now().strftime("%A")` to print today's day of the week.
   **You'll know it worked when** you see the current weekday name.

5. Use `itertools.combinations("ABCD", 2)` to list all 6 two-letter combinations.
   **You'll know it worked when** you see 6 tuples.

!!! mascot-celebration "Standard Library Pro!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've explored Python's vast standard library and mastered JSON — the language of the web!
    These tools will appear in virtually every real-world Python project you work on.
    You're thinking like a professional developer now. Let's keep coding!
