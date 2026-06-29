---
title: User Input and Type Conversion
description: Learn how to get user input with input(), convert between data types, validate input, and use print() effectively
generated_by: claude skill chapter-content-generator
date: 2026-06-28 12:10:00
version: 0.09
---

# User Input and Type Conversion

By the end of this lesson you'll be able to:

- Use `input()` to ask the user a question and read their answer
- Convert between data types using `int()`, `float()`, `str()`, and `bool()`
- Check a value's type with the `type()` function
- Validate user input so your program doesn't crash on bad data

Until now your programs have run the same way every time.
With `input()`, your program can have a conversation with the user — asking questions and responding to their answers.

!!! mascot-welcome "Welcome to Chapter 13!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Today your programs come alive! Instead of running the same way every time,
    they'll ask the user questions and respond to the answers.
    Get ready to build your first truly interactive programs! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## The `input()` Function

`input()` stops the program, prints a message (called a **prompt**), and waits for the user to type something and press Enter.
Whatever the user types comes back to your program as a **string**.

The key word to remember: `input()` **always returns a string**, even if the user types a number.

```python
name = input("What is your name? ")
print("Hello,", name)
```

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">name = input("What is your name? ")
print("Hello,", name + "! Welcome to Python!")
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

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch, the **"Ask ___ and wait"** block pauses the program and stores the answer in a special variable called `answer`.
    In Python, `input("your question")` does exactly the same thing — it pauses and returns the answer as a string.

## Type Conversion

Since `input()` always returns a string, you need to **convert** it before doing math.

Before we dive in, let's define three terms:
- **Integer (int):** a whole number with no decimal point — `5`, `-12`, `0`
- **Float:** a number with a decimal point — `3.14`, `-0.5`, `100.0`
- **Type conversion:** changing a value from one data type to another

### `int()` — Convert to Integer

`int()` converts a string (or float) to a whole number.
If the string contains letters, `int()` raises a `ValueError` — so always convert only after checking the input looks like a number.

```python
age_text = input("How old are you? ")
age = int(age_text)          # convert string to integer
print("Next year you'll be", age + 1)
```

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">age_text = input("How old are you? ")
age = int(age_text)
print("Next year you'll be", age + 1)
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

### `float()` — Convert to Decimal Number

`float()` converts a string to a number with a decimal point.
Use it when you need precision beyond whole numbers — for prices, measurements, or temperatures.

```python
price = float(input("Enter price: $"))
tax = price * 0.08
print("Total with tax: $" + str(round(price + tax, 2)))
```

### `str()` — Convert to String

`str()` converts a number (or other value) into a string.
You need this when you want to join a number with text using `+`.

```python
score = 95
print("Your score: " + str(score) + "/100")   # must convert to string first
```

### `bool()` — Convert to True or False

`bool()` converts a value to `True` or `False`.
The rules for what becomes `False` are worth memorizing:

| Value | `bool()` result |
|-------|----------------|
| `0` | `False` |
| `""` (empty string) | `False` |
| `None` | `False` |
| Anything else | `True` |

```python
print(bool(0))       # False
print(bool(""))      # False
print(bool("hi"))    # True
print(bool(42))      # True
```

## The `type()` Function

`type()` tells you what data type a value is.
It's incredibly useful for debugging — when you're not sure whether you're working with a string or a number, just ask Python.

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">x = input("Type something: ")
print("You entered:", x)
print("Type of x:", type(x))

y = int(x)
print("After int():", y)
print("Type of y:", type(y))
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

If you type a number like `42`, you'll see `<class 'str'>` first, then `<class 'int'>` after the conversion.

## String Methods: `lower()`, `upper()`, `strip()`

Before you convert or validate input, it's a good idea to **clean** it first.

- `s.lower()` — converts all letters to lowercase (`"Hello"` → `"hello"`)
- `s.upper()` — converts all letters to uppercase (`"hello"` → `"HELLO"`)
- `s.strip()` — removes leading and trailing spaces (`"  hi  "` → `"hi"`)

These three methods are very useful for input handling:

```python
answer = input("Do you want to continue? (yes/no) ")
answer = answer.strip().lower()   # clean the input first
if answer == "yes":
    print("Great, let's keep going!")
else:
    print("OK, stopping here.")
```

## Input Validation Basics

**Validation** means checking that the user's input is safe to use before using it.

A simple approach is to ask `str.isdigit()` — a string method that returns `True` if all characters are digits.

Before calling `int()`, you can use `isdigit()` to avoid a crash:

```python
raw = input("Enter a whole number: ")
raw = raw.strip()

if raw.isdigit():
    n = int(raw)
    print("Double is:", n * 2)
else:
    print("That doesn't look like a number!")
```

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">raw = input("Enter a whole number: ")
raw = raw.strip()

if raw.isdigit():
    n = int(raw)
    print("Double is:", n * 2)
else:
    print("That doesn't look like a whole number!")
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

Try it twice: once with a number like `7`, and once with letters like `hello`.

## `print()` Tips

`print()` is more powerful than it looks. A few useful tricks:

| Feature | Example | Output |
|---------|---------|--------|
| Multiple values | `print("a", "b", "c")` | `a b c` |
| Custom separator | `print("a", "b", sep="-")` | `a-b` |
| No newline at end | `print("Hello", end=" ")` | stays on same line |
| Empty line | `print()` | blank line |

## Learning Check

!!! mascot-thinking "Spot the Bug!"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below is supposed to add two numbers entered by the user.
    But it has a bug — it concatenates strings instead of adding numbers!
    Fix it so the math actually works.

<div id="skulpt-lab-5" class="skulpt-text-only">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">a = input("Enter first number: ")
b = input("Enter second number: ")

# Bug: this joins strings, not adds numbers!
print("Sum:", a + b)
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

If you enter `3` and `4`, the buggy version prints `34` instead of `7`.
Fix it by converting `a` and `b` to `int()` before adding them.

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change the greeting lab to ask for the user's favorite color. Print `"My favorite color is [color] too!"`.
   **You'll know it worked when** the program echoes back whatever color you typed.

2. Ask the user for a temperature in Celsius. Convert it: `fahrenheit = (celsius * 9/5) + 32`. Print the result.
   **You'll know it worked when** entering `100` prints `212.0`.

3. Ask the user for their name, then use `.upper()` to print it in capitals.
   **You'll know it worked when** typing `monty` prints `MONTY`.

4. In the validation demo, try typing a negative number like `-5`. Does `isdigit()` accept it?
   **You'll know it worked when** you see that `-5` fails the `isdigit()` check — and you understand why!

5. Use `type()` to print the types of `3.14`, `True`, and `None`.
   **You'll know it worked when** you see `float`, `bool`, and `NoneType`.

!!! mascot-celebration "Amazing Progress!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Your programs can now have real conversations with users!
    You've learned `input()`, type conversion, validation, and string cleaning.
    These skills appear in nearly every real Python program. Let's keep coding together!

[See Annotated References](./references.md)
