---
title: Dictionaries
description: Master Python dictionaries — key-value pairs, safe access with get(), iteration, nesting, and dictionary comprehensions
generated_by: claude skill chapter-content-generator
date: 2026-06-28 13:30:00
version: 0.09
---

# Dictionaries

By the end of this lesson you'll be able to:

- Create a dictionary and access values by key
- Safely retrieve values with `get()` to avoid `KeyError`
- Add, update, and remove entries, and iterate over keys, values, and items
- Use nested dictionaries and dictionary comprehensions

A dictionary maps **keys** to **values** — exactly like a real-world dictionary maps words to definitions.
Dictionaries are one of the most widely-used data structures in Python.

!!! mascot-welcome "Welcome to Chapter 21!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Imagine a phone book that you can look up in any order, add new contacts to, and search in an instant.
    That's a Python dictionary! Let's build one. Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## Creating a Dictionary

A dictionary is created with curly braces `{}`. Each entry is a `key: value` pair, separated by commas.

```python
phone_book = {
    "Alice": "555-1234",
    "Bob":   "555-5678",
    "Carol": "555-9012"
}
```

Keys must be unique within a dictionary.
Keys are usually strings or numbers. Values can be anything — strings, numbers, lists, even other dictionaries.

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">student = {
    "name": "Monty",
    "grade": 7,
    "score": 92.5,
    "clubs": ["coding", "chess"]
}

print("Student:", student)
print("Type:", type(student))
print("Keys:", list(student.keys()))
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

## Accessing Values by Key

Use square brackets with the key to retrieve a value:

```python
phone_book["Alice"]   # "555-1234"
```

If the key doesn't exist, Python raises a `KeyError` — so be careful.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below tries to access both a key that exists and one that doesn't.
    What do you think happens when a key is missing? Make your guess — then run it!

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">grades = {"Alice": 95, "Bob": 87, "Carol": 91}

print("Alice's grade:", grades["Alice"])
print("Bob's grade:", grades["Bob"])

# Uncomment the next line to see a KeyError:
# print("Dave's grade:", grades["Dave"])
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

## Safe Access with `get()`

`dict.get(key)` returns the value if the key exists, or `None` if it doesn't — no crash.
You can also provide a default value: `dict.get(key, default)`.

```python
grades = {"Alice": 95, "Bob": 87}
print(grades.get("Alice"))          # 95
print(grades.get("Dave"))           # None
print(grades.get("Dave", 0))        # 0 — custom default
```

Use `get()` whenever you're not sure whether a key exists.

## Adding and Updating Entries

Add a new key or update an existing one using the same assignment syntax:

```python
grades["Dave"] = 78     # new key
grades["Alice"] = 96    # update existing key
```

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">inventory = {"apples": 10, "bananas": 5}
print("Start:", inventory)

inventory["oranges"] = 8    # add new item
inventory["apples"] = 12    # update existing
print("After update:", inventory)
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

## Removing Entries

- `d.pop(key)` — removes the key and returns its value (raises `KeyError` if missing unless you pass a default)
- `del d[key]` — removes the key (raises `KeyError` if missing)

```python
grades.pop("Bob")      # removes Bob, returns 87
del grades["Carol"]    # removes Carol
```

## Keys, Values, and Items

Three dictionary methods give you different views of the data:

- `d.keys()` — all keys
- `d.values()` — all values
- `d.items()` — all `(key, value)` pairs as tuples

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">scores = {"Alice": 95, "Bob": 87, "Carol": 91}

print("Keys:", list(scores.keys()))
print("Values:", list(scores.values()))
print("Items:", list(scores.items()))
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

## Iterating over a Dictionary

You can loop over keys, values, or key-value pairs:

```python
# Loop over keys:
for name in scores:
    print(name)

# Loop over key-value pairs (most common):
for name, score in scores.items():
    print(f"{name}: {score}")
```

## Key Membership with `in`

Use `in` to check whether a key exists without causing a `KeyError`:

```python
if "Alice" in scores:
    print("Alice's score:", scores["Alice"])
```

## Nested Dictionaries

A dictionary can contain other dictionaries as values.
This is perfect for representing structured data — like a contacts list where each contact has several fields.

```python
contacts = {
    "Alice": {"phone": "555-1234", "email": "alice@example.com"},
    "Bob":   {"phone": "555-5678", "email": "bob@example.com"}
}

# Access Alice's phone:
print(contacts["Alice"]["phone"])
```

## Dictionary Comprehensions

A **dictionary comprehension** builds a new dictionary from an existing sequence, similar to a list comprehension.

Syntax: `{key_expr: value_expr for item in iterable}`

Before the comprehension, here's the long-form equivalent to make the pattern clear:

```python
# Long way:
squares = {}
for n in range(1, 6):
    squares[n] = n * n

# Comprehension — same result:
squares = {n: n * n for n in range(1, 6)}
```

## The Default Dictionary Pattern

A common pattern is building a dictionary where missing keys should start with a default value.
The manual approach uses `get()`:

```python
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1
```

<div id="skulpt-lab-5" class="skulpt-text-only">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">text = "the cat sat on the mat the cat"
words = text.split()

word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

for word, count in sorted(word_count.items()):
    print(f"  {word}: {count}")
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

!!! mascot-thinking "Your Turn — Build a Grade Book"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below creates an empty grade book.
    Add three students — `"Alice"` with 95, `"Bob"` with 87, and `"Carol"` with 91 —
    then print each student's name and grade using a `for` loop over `.items()`.

<div id="skulpt-lab-6" class="skulpt-text-only">
  <div id="editor-container-6">
    <textarea id="code-6" spellcheck="false">grade_book = {}

# Add Alice (95), Bob (87), and Carol (91):


# Print each name and grade:
for name, grade in grade_book.items():
    print(f"{name}: {grade}")
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

1. Create a dictionary of capital cities: `{"France": "Paris", "Japan": "Tokyo", "Brazil": "Brasília"}`.
   Print the capital of Japan.
   **You'll know it worked when** you see `Tokyo`.

2. Add a new country to your capitals dictionary and print all keys.
   **You'll know it worked when** the new country appears in the key list.

3. Use a dictionary comprehension to create `{1: 1, 2: 8, 3: 27, 4: 64, 5: 125}` (cubes of 1–5).
   **You'll know it worked when** you see those five key-value pairs.

4. Try `capitals.get("Germany", "Unknown")` when "Germany" isn't in the dictionary.
   **You'll know it worked when** you see "Unknown" instead of a `KeyError`.

5. Count the frequency of each letter in `"mississippi"` using the default dictionary pattern.
   **You'll know it worked when** you see `{"m": 1, "i": 4, "s": 4, "p": 2}`.

!!! mascot-celebration "Dictionary Wizard!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered one of Python's most powerful data structures!
    Dictionaries are everywhere — in APIs, configuration files, databases, and machine learning models.
    Next chapter we'll combine all four collection types with Python's powerful built-in functions!
