---
title: More Booleans and Conditionals
description: Deepen your understanding of truthiness, short-circuit evaluation, ternary expressions, match/case, and compound conditions
generated_by: claude skill chapter-content-generator
date: 2026-06-28 13:10:00
version: 0.09
---

# More Booleans and Conditionals

By the end of this lesson you'll be able to:

- Explain **truthiness** and **falsiness** — how any Python value can act as True or False
- Use **short-circuit evaluation** to write safer, faster conditions
- Write compact **ternary expressions** and use Python's `match/case` statement
- Combine conditions with `and`, `or`, and `not` to build powerful boolean logic

You've used `if` statements since Chapter 9. Now it's time to understand how Python's truth system really works — and unlock some powerful shortcuts.

!!! mascot-welcome "Welcome to Chapter 19!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Did you know Python treats lots of things as True or False — not just `True` and `False`?
    Today we'll peek behind the curtain and discover some clever boolean tricks!
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## Truthiness and Falsiness

In Python, **every value** can be tested in an `if` statement, not just `True` and `False`.

A value is **falsy** if Python treats it like `False` in a boolean context:

| Falsy values |
|-------------|
| `False` |
| `0` (zero integer) |
| `0.0` (zero float) |
| `""` (empty string) |
| `[]` (empty list) |
| `{}` (empty dict) |
| `None` |

Everything else is **truthy** — including non-zero numbers, non-empty strings, and non-empty lists.

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">values = [0, 1, "", "hello", [], [0], None, False, True]
for v in values:
    label = "TRUTHY" if v else "FALSY"
    print(repr(v), "->", label)
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

Truthiness lets you write concise checks. Instead of `if len(name) > 0:`, just write `if name:`.

## Short-Circuit Evaluation

When Python evaluates an `and` or `or` expression, it stops as soon as it knows the answer.
This is called **short-circuit evaluation**.

With `and`: if the left side is falsy, Python returns it immediately without checking the right side.
With `or`: if the left side is truthy, Python returns it immediately.

This matters because it can prevent errors — and provides a useful default-value pattern:

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">name = ""
greeting = name or "stranger"   # if name is falsy, use "stranger"
print(f"Hello, {greeting}!")

name = "Monty"
greeting = name or "stranger"   # name is truthy, so it's used
print(f"Hello, {greeting}!")

# and short-circuits: if data is None, .upper() never runs
data = None
result = data and data.upper()
print("Result:", result)   # None — no crash!
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

## Functions Returning None

Every Python function that doesn't have a `return` statement automatically returns `None`.
This catches many beginners off-guard:

```python
def add(a, b):
    result = a + b
    # forgot to write: return result

x = add(3, 4)
print(x)   # None — oops!
```

Always use `return` when you want a function to send a value back.

## Checking for `None` with `is`

To check whether a value is `None`, use `is None` rather than `== None`.

```python
result = get_data()

if result is None:
    print("Nothing came back")
else:
    print("Got:", result)
```

`is` checks identity (the exact same object in memory), while `==` checks equality in value.
For `None`, `True`, and `False`, always use `is`.

## Implicit vs Explicit Conversion

Python sometimes converts values automatically — this is **implicit conversion**.
When you convert deliberately using `int()`, `str()`, etc., that's **explicit conversion**.

```python
# Implicit: Python automatically converts int to float in mixed math
result = 3 + 2.5   # 5.5 — int 3 became float 3.0 automatically

# Explicit: you control the conversion
n = int("42")
s = str(3.14)
b = bool(0)
```

Understanding the difference helps you spot where Python is "helping" you — and when that help might cause surprises.

## Reading Multiple Inputs

You can ask for several values on one line using `split()`:

```python
x, y = input("Enter x and y: ").split()
x = int(x)
y = int(y)
print(f"Sum: {x + y}")
```

The user types something like `3 7`, `split()` returns `["3", "7"]`, and Python unpacks that into `x` and `y`.

## The Conditional Ternary Expression

A **ternary expression** condenses a simple if/else into one line.
The format is: `value_if_true if condition else value_if_false`.

```python
# Normal if/else:
if score >= 70:
    grade = "pass"
else:
    grade = "fail"

# Ternary — same result, one line:
grade = "pass" if score >= 70 else "fail"
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below uses a nested ternary expression.
    What will it print for `score = 85`? For `score = 55`?
    Make your guess — then run it!

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">for score in [95, 85, 55]:
    label = "excellent" if score >= 90 else ("good" if score >= 70 else "needs work")
    print(f"Score {score}: {label}")
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

## Compound Conditions

Use `and`, `or`, and `not` to combine multiple conditions:

```python
age = 15
has_ticket = True

if age >= 13 and has_ticket:
    print("You may enter.")

if age < 5 or age > 65:
    print("Discounted admission!")

if not has_ticket:
    print("You need a ticket!")
```

| Operator | Meaning | True when |
|----------|---------|-----------|
| `and` | Both must be true | `True and True` |
| `or` | At least one must be true | `True or False` |
| `not` | Flip true/false | `not False` |

## `match/case` — Python's Pattern Matching

Python 3.10 introduced **`match/case`**, which compares a value against several patterns — similar to a long chain of `if/elif` but much cleaner.

```python
command = input("Command (start/stop/pause): ").strip().lower()

match command:
    case "start":
        print("Starting!")
    case "stop":
        print("Stopping!")
    case "pause":
        print("Pausing!")
    case _:
        print("Unknown command.")
```

The `_` case is the **wildcard** — it matches anything not already handled.
Use `|` inside a case to match multiple values:

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">day = input("Enter a day (Mon/Tue/Wed/Thu/Fri/Sat/Sun): ").strip().title()

match day:
    case "Sat" | "Sun":
        print(f"{day}: Weekend!")
    case "Mon" | "Tue" | "Wed" | "Thu" | "Fri":
        print(f"{day}: Weekday.")
    case _:
        print(f"I don't recognize '{day}'.")
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

## Learning Check

!!! mascot-thinking "Your Turn — Fix the Default"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below is supposed to greet a user by name — or say "Hello, stranger!" if nothing is entered.
    But the `or` operands are reversed, so it always says "stranger".
    Swap them to fix it!

<div id="skulpt-lab-5" class="skulpt-text-only">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">name = input("Enter your name (or press Enter to skip): ").strip()

# Bug: "stranger" is truthy so it always wins!
greeting = "stranger" or name

print(f"Hello, {greeting}!")
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

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Print `bool([])`, `bool([0])`, `bool("")`, and `bool(" ")` (a space).
   **You'll know it worked when** you see `False`, `True`, `False`, `True`.

2. Write a ternary expression that returns `"even"` if a number is divisible by 2, else `"odd"`.
   **You'll know it worked when** `7` gives `"odd"` and `8` gives `"even"`.

3. Use `match/case` to classify a score: 90+ → "A", 80–89 → "B", 70–79 → "C", below 70 → "F".
   **You'll know it worked when** entering `85` gives "B".

4. Use a short-circuit `or` to assign a `timeout = user_value or 30` default.
   **You'll know it worked when** an empty input gives `30` and `"60"` gives `"60"`.

5. Write a compound condition that validates a username: truthy AND length >= 3 AND no spaces.
   **You'll know it worked when** `"ab"` fails (too short) and `"hello world"` fails (has space).

!!! mascot-celebration "Boolean Master!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've unlocked truthiness, short-circuits, ternary expressions, and match/case!
    These tools let you write smarter, cleaner conditional logic in far fewer lines.
    The more you practice, the more natural they feel. Let's keep coding!
