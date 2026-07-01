---
title: Error Handling and Debugging
description: Learn to read tracebacks, catch exceptions with try/except, raise your own errors, use assert, and debug with strategic print statements
generated_by: claude skill chapter-content-generator
date: 2026-06-28 13:50:00
version: 0.09
---

# Error Handling and Debugging

By the end of this lesson you'll be able to:

- Identify the three types of Python errors: **syntax**, **runtime**, and **logic**
- Read a Python **traceback** and find exactly where the problem is
- Use `try/except` to catch errors and keep your program running
- Use `raise`, `assert`, and strategic `print()` calls to find and report bugs

Every programmer makes mistakes. The skill isn't avoiding errors — it's finding and fixing them quickly.

!!! mascot-welcome "Welcome to Chapter 23!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Errors aren't failures — they're clues! Python's error messages are actually very helpful once you know how to read them.
    Today we'll turn scary red text into useful information.
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Three Types of Errors

A **syntax error** is caught before the program runs. Python can't parse the code at all.
A missing colon after `if`, bad indentation, or a mismatched parenthesis causes a syntax error.

A **runtime error** (also called an **exception**) happens while the program is running.
The program starts, then crashes when it hits the bad line.

A **logic error** is the trickiest — the program runs without crashing, but produces the wrong result.
Python can't detect logic errors; you have to find them yourself.

| Error type | When detected | Example |
|------------|--------------|---------|
| Syntax error | Before running | Missing `:` after `if` |
| Runtime error | While running | `int("hello")` |
| Logic error | After running | Off-by-one in a loop |

## Common Exception Types

When a runtime error occurs, Python raises an **exception** — a named error type.

| Exception | Cause |
|-----------|-------|
| `NameError` | Variable name doesn't exist |
| `TypeError` | Wrong type — e.g. adding string to integer |
| `ValueError` | Right type but bad value — e.g. `int("hello")` |
| `IndexError` | List index out of range |
| `KeyError` | Dictionary key doesn't exist |
| `ZeroDivisionError` | Dividing by zero |
| `AttributeError` | Method doesn't exist on the object |
| `FileNotFoundError` | File can't be found |

## Reading a Traceback

When Python crashes, it prints a **traceback** — a trace of exactly where things went wrong.

```
Traceback (most recent call last):
  File "my_program.py", line 5, in <module>
    result = 10 / 0
ZeroDivisionError: division by zero
```

Read from the **bottom up**:
1. The last line gives the exception type and message: `ZeroDivisionError: division by zero`
2. Above it, the exact code that crashed: `result = 10 / 0`
3. File and line number so you know where to look: `line 5`

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below has a bug. Which line will crash, and what exception type will appear?
    Make your guess — then run it!

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
initCmLab('', `numbers = [10, 20, 30]
print("First:", numbers[0])
print("Last:", numbers[5])   # this will fail!
print("This line never runs.")`);
</script>

Were you right? `IndexError: list index out of range` — index 5 doesn't exist in a 3-item list.

## `try/except` Blocks

A `try/except` block lets your program catch an error and handle it gracefully instead of crashing.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Can't divide by zero!")
```

Structure:
1. `try:` — put the risky code here
2. `except ErrorType:` — put the recovery code here; runs only if that error occurs

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
initCmLab('-2', `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Error: can't divide by zero!")
        return None

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide(7, 3))`);
</script>

## Catching Specific Exceptions

Catch multiple exception types with multiple `except` clauses:

```python
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(f"100 / {number} = {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Can't divide by zero!")
```

Catching specific exceptions is better than a bare `except:` — it prevents hiding bugs you didn't intend to catch.

## `else` and `finally` Clauses

Two optional extra clauses make `try/except` even more powerful:

- `else:` runs only if the `try` block completed without any exception
- `finally:` runs **always** — whether or not an exception occurred; perfect for cleanup

```python
try:
    n = int(input("Number: "))
    result = 10 / n
except (ValueError, ZeroDivisionError) as e:
    print(f"Error: {e}")
else:
    print(f"Result: {result}")   # only if no exception occurred
finally:
    print("Done.")               # always runs
```

## The `raise` Statement

Use `raise` to trigger an exception yourself when input violates a rule:

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
initCmLab('-3', `def set_speed(speed):
    if speed < 0:
        raise ValueError("Speed cannot be negative.")
    if speed > 300:
        raise ValueError("Speed exceeds maximum (300 km/h).")
    return speed

for s in [60, -10, 400]:
    try:
        result = set_speed(s)
        print(f"Speed set to {result}")
    except ValueError as e:
        print(f"Invalid: {e}")`);
</script>

## The `assert` Statement

`assert condition, "message"` checks that something you believe is true actually is true.
If not, it raises `AssertionError`. Use it for internal checks during development.

```python
def square(n):
    result = n * n
    assert result >= 0, "Square must be non-negative!"
    return result
```

## Validating Input Before Casting

`input()` always returns a **string** — even when you ask for a number. Casting it straight to `int()` crashes if the text isn't a valid number:

```python
def cast_to_int():
    user_input = input("Enter an integer: ")
    return int(user_input)   # crashes with ValueError on bad input

print(cast_to_int())
```

Typing a word instead of a number raises `ValueError: invalid literal for int() with base 10`. You can catch bad input *before* it crashes by checking it first with the string method `.isdigit()`, then using `assert` to stop with a clear message if the check fails:

```python
def cast_to_int():
    user_input = input("Enter an integer: ")
    assert user_input.isdigit(), "You did not enter an integer!"
    return int(user_input)

print(cast_to_int())
```

`.isdigit()` returns `True` only if every character in the string is a digit, so it catches bad input before `int()` ever runs.

## Debugging with `print()`

The simplest debugging tool is a strategic `print()` statement. Insert them to see what your program is doing at each step:

```python
def total_price(items):
    total = 0
    for item in items:
        print(f"  DEBUG: adding {item}")   # temporary debug print
        total += item
    print(f"  DEBUG: total = {total}")
    return total
```

Remove debug prints once the problem is fixed.

!!! mascot-tip "Using Search Engines to Debug"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    When you see an error you don't recognize, copy the last line of the traceback and paste it into a search engine — add "Python" at the start.
    The Python community is enormous and someone has almost certainly had the same error before!
    Reading solutions on Stack Overflow is how professional programmers debug every day.

## Learning Check

!!! mascot-thinking "Your Turn — Wrap the Dangerous Code"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below crashes when the user enters something that isn't a number.
    Wrap the `int()` call in a `try/except ValueError` block so it prints a friendly message instead!

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
initCmLab('-4', `raw = input("Enter a number: ")

# Wrap this in try/except so it doesn't crash on bad input:
n = int(raw)
print(f"Double: {n * 2}")`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Write code that deliberately triggers a `NameError` by using an undefined variable, then catch it.
   **You'll know it worked when** the error is caught and a friendly message appears instead of a crash.

2. Write a function `safe_index(lst, i)` that returns `lst[i]` or `None` if `i` is out of range.
   **You'll know it worked when** `safe_index([1,2,3], 10)` returns `None` without crashing.

3. Add an `else` clause to a `try/except` that prints `"Success!"` only when no error occurs.
   **You'll know it worked when** valid input shows "Success!" and invalid input doesn't.

4. Add a `finally` clause that always prints `"Calculation complete."` no matter what.
   **You'll know it worked when** the message appears for both valid and invalid input.

5. Use `assert` to verify that a list has exactly 3 items. Test with lists of different lengths.
   **You'll know it worked when** a 2-item list raises `AssertionError` and a 3-item list passes.

!!! mascot-celebration "Debugging Champion!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You can now read tracebacks, catch exceptions, raise your own errors, and debug like a professional!
    These skills transform error messages from obstacles into tools.
    That's a huge step forward. Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
