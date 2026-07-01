---
title: Advanced Functions and OOP
description: Round out your functional-programming and OOP skills with map, filter, dir, help, custom exceptions, @property, dunder methods, and object composition
generated_by: claude skill chapter-content-generator
date: 2026-06-28 15:10:00
version: 0.09
---

# Advanced Functions and OOP

By the end of this lesson you'll be able to:

- Use `map()`, `filter()`, `any()`, `all()`, `chr()`, `ord()`, `dir()`, and `help()` effectively
- Create **custom exception classes** and use exception chaining
- Define **properties** with `@property` and use **dunder methods** to customize object behavior
- Apply **object composition** to build complex objects from simpler ones

This chapter fills in the remaining advanced tools from Python's functional and OOP toolkit.

!!! mascot-welcome "Welcome to Chapter 31!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This is where your Python skills reach professional level!
    Custom exceptions, properties, dunder methods — these are the tools that separate beginner code from expert code.
    Let's level up! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## `map()` and `filter()` with Named Functions

You saw `map()` and `filter()` with lambdas in Chapter 22. They work just as well with named functions:

```python
def is_even(n):
    return n % 2 == 0

def square(n):
    return n * n

numbers = [1, 2, 3, 4, 5, 6]
evens   = list(filter(is_even, numbers))   # [2, 4, 6]
squares = list(map(square, numbers))       # [1, 4, 9, 16, 25, 36]
```

This style is more readable than lambdas for complex logic.

## `any()` and `all()`

`any(iterable)` returns `True` if at least one item is truthy.
`all(iterable)` returns `True` if every item is truthy.

Both short-circuit — they stop as soon as the answer is known.

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
initCmLab('', `scores = [75, 92, 88, 60, 95]

print("Any failing (<70)?", any(s < 70 for s in scores))
print("All passing (>=60)?", all(s >= 60 for s in scores))
print("All excellent (>=90)?", all(s >= 90 for s in scores))

words = ["hello", "world", "Python"]
print("Any starts with 'P'?", any(w.startswith("P") for w in words))`);
</script>

## `chr()` and `ord()` — Characters and ASCII Codes

`ord(character)` converts a character to its ASCII (Unicode) integer code.
`chr(integer)` does the reverse — converts an integer to its character.

```python
print(ord("A"))   # 65
print(ord("a"))   # 97
print(chr(65))    # "A"
print(chr(9829))  # "♥" — Unicode heart
```

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
initCmLab('-2', `# Print A-Z using chr() and ord():
for code in range(ord("A"), ord("Z") + 1):
    print(chr(code), end=" ")
print()

# Simple Caesar cipher (shift each letter by 3):
def encrypt(text, shift=3):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

print(encrypt("Hello, World!"))`);
</script>

## `dir()` and `help()` — Exploring Objects

`dir(obj)` returns a list of all attributes and methods available on `obj`.
`help(obj)` prints detailed documentation.

These are your best friends when exploring an unfamiliar module or object:

```python
import math
print(dir(math))         # see all math functions
help(math.sqrt)          # full docs for sqrt
```

## `id()` and `hash()`

`id(obj)` returns the unique memory address of an object.
Two variables with the same `id` are the same object — not just equal, but literally the same in memory.

`hash(obj)` returns a hash value (an integer fingerprint). Dictionaries use hashes for fast lookups.
Only immutable objects (strings, numbers, tuples) can be hashed.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below compares `is` vs `==` for strings. Will the small strings share the same id?
    Make your guess — then run it!

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
initCmLab('-3', `a = "hello"
b = "hello"
c = "hel" + "lo"   # built from parts at runtime

print("a == b:", a == b)
print("a is b:", a is b)
print("a == c:", a == c)
print("id(a):", id(a))
print("id(b):", id(b))
print("id(c):", id(c))`);
</script>

## Custom Exception Classes

You can create your own exception types by subclassing `Exception`.
Custom exceptions make your error messages much clearer to users of your code.

```python
class InvalidAgeError(ValueError):
    pass

class NegativeBalanceError(Exception):
    def __init__(self, amount):
        super().__init__(f"Cannot withdraw ${amount} — balance would go negative.")
        self.amount = amount
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
initCmLab('-4', `class InvalidScoreError(ValueError):
    def __init__(self, score):
        super().__init__(f"Score {score} is out of range (0-100).")
        self.score = score

def record_score(score):
    if not (0 <= score <= 100):
        raise InvalidScoreError(score)
    return score

for s in [85, 110, -5, 0, 100]:
    try:
        print(f"Recorded: {record_score(s)}")
    except InvalidScoreError as e:
        print(f"Error: {e}")`);
</script>

## Static Methods

A **static method** belongs to the class but doesn't need access to `self` (the instance).
Decorate it with `@staticmethod`. Use it for utility functions that logically belong to the class.

```python
class Temperature:
    @staticmethod
    def celsius_to_fahrenheit(c):
        return (c * 9/5) + 32

    @staticmethod
    def fahrenheit_to_celsius(f):
        return (f - 32) * 5/9

print(Temperature.celsius_to_fahrenheit(100))   # 212.0
```

## Properties with `@property`

A **property** lets you define a method that behaves like an attribute.
This lets you add validation or computation to attribute access without changing the interface.

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative.")
        self._radius = value

    @property
    def area(self):
        return 3.14159 * self._radius ** 2

c = Circle(5)
print(c.radius)   # calls the getter
print(c.area)     # computed property
c.radius = 10     # calls the setter (validates!)
```

## Dunder Methods Overview

**Dunder methods** (also called "magic methods") are special methods with double underscores on both sides.
You've already seen `__init__` and `__str__`. There are many more:

| Method | Called when |
|--------|------------|
| `__len__(self)` | `len(obj)` |
| `__add__(self, other)` | `obj + other` |
| `__eq__(self, other)` | `obj == other` |
| `__lt__(self, other)` | `obj < other` |
| `__contains__(self, item)` | `item in obj` |
| `__iter__(self)` | `for x in obj` |
| `__getitem__(self, key)` | `obj[key]` |

By implementing dunders, your custom classes work naturally with Python operators and built-in functions.

## Object Composition

**Object composition** means building a complex object from simpler objects — storing instances of one class inside another.

This is often better than deep inheritance hierarchies:

```python
class Engine:
    def __init__(self, horsepower):
        self.hp = horsepower

    def start(self):
        print(f"Engine ({self.hp} hp) running.")

class Car:
    def __init__(self, model, horsepower):
        self.model  = model
        self.engine = Engine(horsepower)   # composition!

    def drive(self):
        self.engine.start()
        print(f"{self.model} is moving.")

car = Car("Python GT", 300)
car.drive()
```

!!! mascot-tip "Composition over Inheritance"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Professional Python developers prefer composition over deep inheritance.
    Instead of `ElectricCar(Car(Vehicle))`, build `ElectricCar` with an `engine` attribute.
    It's easier to change individual parts without breaking unrelated code.

## Learning Check

!!! mascot-thinking "Your Turn — Add a Dunder Method"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The `Bag` class below stores items, but `len(bag)` doesn't work yet.
    Add the `__len__` dunder method so `len(bag)` returns the number of items!

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
initCmLab('-5', `class Bag:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    # Add __len__ here so len(bag) works:

bag = Bag()
bag.add("apple")
bag.add("banana")
bag.add("mango")

print("Items:", bag.items)
print("Count:", len(bag))   # this will fail until you add __len__`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Use `any()` to check if any string in a list has more than 10 characters.
   **You'll know it worked when** the result is `True` or `False` based on the actual lengths.

2. Write a Caesar cipher decryption function (shift by -3 instead of +3). Encrypt then decrypt "Hello".
   **You'll know it worked when** you get back the original "Hello".

3. Add `__add__` to the `Bag` class so `bag1 + bag2` returns a new Bag with all items from both.
   **You'll know it worked when** `len(bag1 + bag2)` equals `len(bag1) + len(bag2)`.

4. Add `@property area` to a `Rectangle` class. Ensure it recomputes every time width or height changes.
   **You'll know it worked when** changing `r.width = 10` updates `r.area` automatically.

5. Create a `Stack` class using composition (it has a `list` attribute) with `push`, `pop`, `peek`, and `__len__`.
   **You'll know it worked when** all four operations work as expected.

!!! mascot-celebration "Python Expert!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've reached the advanced Python tier! Custom exceptions, properties, dunders, and composition are tools used by professional Python developers every day.
    The last chapters take you into data science and machine learning territory. Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
