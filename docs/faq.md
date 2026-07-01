# Beginning Python FAQ

Welcome to the Frequently Asked Questions for *Beginning Python — From Blocks to Code with Monty*.
These questions are organized from introductory topics all the way to advanced concepts,
so you can jump straight to whatever you need most.

---

## Getting Started Questions

### What is this course about?

*Beginning Python — From Blocks to Code with Monty* is a project-driven course that takes
students who have already learned Scratch (or another block-based language) and teaches them
how to write real Python programs. The course starts with visual turtle graphics — so you see
results immediately — and builds steadily toward variables, loops, functions, data structures,
and eventually machine learning. Along the way, **Monty** the python-snake mascot pops up in
every lesson to give tips, bridge ideas from Scratch, and celebrate your progress.

See [course-description.md](course-description.md) for the full overview.

### Who is this course for?

This course is designed for elementary and middle school students, approximately **ages 10–13**,
who have completed at least one semester of block-based programming — Scratch, Snap!, or MIT
App Inventor — and are ready to move to text-based coding. You do not need any prior Python
experience. You just need basic reading skills and the ability to add and subtract.

### What should I already know before starting?

You should be comfortable with the idea of **sequences** (doing steps in order), **loops**
(repeating actions), **conditionals** (if something is true, do this), and **variables**
(storing a value under a name). If you have used those ideas in Scratch, you are fully prepared.
No prior Python, no math beyond arithmetic, and no installation required.

### How do I run Python code in this textbook?

Every lesson in Chapters 1–18 contains one or more **Skulpt labs** — interactive code windows
built right into the page. You click **Run** and Python executes immediately in your browser.
No login, no account, no installation needed. For Chapters 19–38, some examples use a
locally installed Python, but Skulpt labs still appear throughout.

### What is Skulpt and why do Chapters 1–18 use it?

**Skulpt** is a version of Python that runs entirely inside a web browser using JavaScript.
Because it runs in the browser, students do not need to install anything or open a new tab —
the code window is right on the page. The first 18 chapters focus on concepts that Skulpt
handles well: print, variables, loops, functions, lists, and turtle graphics. Later chapters
introduce libraries (NumPy, matplotlib, Pillow, Keras) that require a full Python installation.

See [chapters/01-welcome-to-python/index.md](chapters/01-welcome-to-python/index.md) for an
introduction to Skulpt.

### Who is Monty and what does he do?

**Monty** is the friendly python-snake mascot who lives inside this textbook. Monty has exactly
seven jobs: welcoming you at the start of each lesson, helping you predict what code will do
before you run it, giving tips that experienced programmers use, bridging Python ideas to their
Scratch equivalents, warning you about common mistakes, encouraging you when a concept is hard,
and celebrating with you at the end of each lesson. Monty only appears when doing one of those
seven things — never randomly.

### Do I need to install Python to use this textbook?

**No** — not for Chapters 1–18. All you need is a modern web browser. The inline Skulpt labs
run Python right on the page. If you want to explore beyond the textbook — or tackle the more
advanced chapters that use NumPy, matplotlib, or Keras — you can install Python from
[python.org](https://www.python.org) or use a cloud environment like Google Colab.

See [chapters/28-python-dev-tools/index.md](chapters/28-python-dev-tools/index.md) for
installation guidance.

### What makes Python different from Scratch?

In Scratch you drag colorful blocks and snap them together. In Python you **type** instructions
as text. The core ideas — sequences, loops, conditionals, variables — are the same, but typing
gives you much more flexibility: you can write loops that run millions of times, work with large
data files, create graphics, and build machine learning models. Monty highlights the Scratch
equivalent whenever a new Python concept appears so you can build on what you already know.

See [chapters/01-welcome-to-python/index.md](chapters/01-welcome-to-python/index.md) for the
full Scratch-to-Python comparison.

### What can I build by the end of this course?

By the end of this 38-chapter course you will be able to build:

- Colorful turtle graphics programs and animated fractals
- Interactive games using mouse clicks and keyboard events
- Data-processing programs that read and write text files
- Custom modules you can reuse across projects
- Maze-solving programs using graph algorithms
- Data visualization dashboards with matplotlib
- A neural network that recognizes handwritten digits from the MNIST dataset

### How long does this course take to complete?

The course is designed for approximately **one school year** in a coding club or elective class
that meets two or three times per week, or for motivated self-directed students who spend
30–45 minutes per session. The 38 chapters are organized so that Chapters 1–18 form a complete
**beginning** track and Chapters 19–38 form an **intermediate-to-advanced** extension.

### Is there a teacher's guide available?

Yes. The course includes a **detailed teacher's guide** with pacing recommendations,
prerequisite concept maps, discussion prompts, common misconceptions, extension activities,
assessment rubrics, and alignment to CSTA K-12 CS education standards. See
[course-description.md](course-description.md) for a description of all included materials.

### How are the chapters organized?

The 38 chapters follow a carefully sequenced learning graph of 450 concepts, each concept
building on the ones before it. The first five chapters introduce the Python environment and
turtle graphics, establishing visual, immediate feedback as a learning tool. Chapters 6–18
cover the core language: math, loops, strings, decisions, functions, colors, input, and lists.
Chapters 19–30 introduce advanced collections, error handling, recursion, OOP, file I/O, and
algorithms. Chapters 31–38 cover data visualization, NumPy, image processing, and machine
learning.

---

## Core Concept Questions

### What is the Python interpreter?

The **Python interpreter** is the program that reads your Python code and carries out its
instructions, one line at a time from top to bottom. Think of it as a very fast reader who
translates your English-like instructions into actions the computer can perform. When you click
**Run** in a Skulpt lab, the Skulpt interpreter — a version of Python built for web browsers —
does exactly this job. When you run a `.py` file from a terminal, the standard CPython
interpreter does the same thing on your own computer.

See [chapters/01-welcome-to-python/index.md](chapters/01-welcome-to-python/index.md).

### What is indentation and why does Python care about it?

**Indentation** means putting spaces (or a tab) at the start of a line to show that it belongs
inside a block. In Python, indentation is not just style — it is part of the language syntax.
A `for` loop body, an `if` block, and a function body are all identified by their indentation.
Most Python programmers use **4 spaces** per level.

Example — the `print` below is inside the loop because it is indented:

```python
for i in range(3):
    print(i)   # indented — runs 3 times
print("done")  # not indented — runs once after the loop
```

If you forget to indent, Python raises an `IndentationError`.

See [chapters/02-python-code-structure/index.md](chapters/02-python-code-structure/index.md).

### What is a variable?

A **variable** is a named container that holds a value. You create one with the assignment
operator `=`:

```python
score = 10
name = "Monty"
```

After that line, `score` refers to the number `10` and `name` refers to the text `"Monty"`.
You can use the variable name anywhere you would use the value, and you can update it by
assigning a new value at any time. In Scratch, these were called *variables* too — same idea,
different spelling.

See [chapters/03-variables-and-numbers/index.md](chapters/03-variables-and-numbers/index.md).

### What are the six core Python data types?

Python's six core data types are:

| Type | Example | What it holds |
|------|---------|--------------|
| `int` | `42` | Whole numbers |
| `float` | `3.14` | Decimal numbers |
| `str` | `"hello"` | Text |
| `bool` | `True` / `False` | True or false |
| `list` | `[1, 2, 3]` | Ordered, changeable collection |
| `dict` | `{"a": 1}` | Key-value pairs |

You can always check the type of a value with `type(value)`.

### What is a for loop?

A **`for` loop** repeats a block of code once for each item in a sequence. The most common
form uses `range()` to count:

```python
for i in range(4):
    print(i)   # prints 0, 1, 2, 3
```

You can also loop over a list, a string, or any other sequence. For loops are the Python
equivalent of Scratch's *repeat N times* block. They are used constantly for drawing shapes,
processing lists, and building accumulator patterns.

See [chapters/07-for-loops-and-shapes/index.md](chapters/07-for-loops-and-shapes/index.md).

### What is a while loop?

A **`while` loop** repeats a block of code as long as a condition stays `True`. Unlike a `for`
loop (which counts a fixed number of repetitions), a `while` loop runs an unknown number of
times — it depends on what happens inside the loop.

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

While loops are perfect for animation (keep going until the user clicks stop), input validation
(keep asking until the user enters a valid number), and game loops (keep playing until someone
wins).

See [chapters/10-while-loops-and-animation/index.md](chapters/10-while-loops-and-animation/index.md).

### How does an if/elif/else statement work?

An **`if` statement** runs a block of code only when a condition is `True`. Add **`elif`**
(short for "else if") to check additional conditions in order. Add **`else`** to catch
everything that did not match:

```python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("Keep practicing!")
```

Python checks each condition from top to bottom and runs only the first block that is `True`.
This is exactly how Scratch's *if-else* block works, just written in text.

See [chapters/09-decisions-if-else/index.md](chapters/09-decisions-if-else/index.md).

### What is a function and why should I use one?

A **function** is a reusable block of code that you give a name and can call whenever you need
it. You define a function with `def`:

```python
def greet(name):
    print("Hello, " + name + "!")

greet("Monty")   # prints: Hello, Monty!
greet("Alex")    # prints: Hello, Alex!
```

Functions let you avoid writing the same code twice (the DRY principle), make programs easier
to read, and break big problems into smaller, manageable pieces. In Scratch, custom blocks work
the same way.

See [chapters/11-functions-parameters-scope/index.md](chapters/11-functions-parameters-scope/index.md).

### What is a list?

A **list** is an ordered, changeable collection of values. You create one with square brackets:

```python
colors = ["red", "green", "blue"]
print(colors[0])   # red — indexing starts at 0
colors.append("yellow")
```

Lists are the workhorse of Python data storage. You can add items (`append`), remove items
(`remove`, `pop`), sort them, loop over them, and slice out sub-sections. Every list keeps
items in the order you put them.

See [chapters/15-lists-basics/index.md](chapters/15-lists-basics/index.md).

### What is a dictionary?

A **dictionary** stores data as **key-value pairs**. Instead of a number index, you look up
values by a descriptive key:

```python
grades = {"Alice": 95, "Bob": 88, "Carol": 92}
print(grades["Alice"])  # 95
grades["Dan"] = 79      # add a new entry
```

Dictionaries are perfect for storing named data: a grade book, a word frequency counter,
configuration settings, or any situation where you want to look something up by name rather
than by position.

See [chapters/21-dictionaries/index.md](chapters/21-dictionaries/index.md).

### What is turtle graphics?

**Turtle graphics** is a way to draw shapes by controlling a small arrow (the "turtle") that
moves around a canvas. You give commands like `forward(100)`, `left(90)`, and `pencolor("red")`
to direct its movement and appearance. Because you can see the result of every command
immediately, turtle graphics is an excellent way to learn loops, functions, and coordinates.
It is the primary drawing tool in Chapters 5–18 of this course.

See [chapters/05-drawing-with-turtle/index.md](chapters/05-drawing-with-turtle/index.md).

### What is recursion?

**Recursion** is when a function calls itself. Each recursive call works on a smaller version
of the problem until it reaches the **base case** — a condition that stops the chain of calls.

```python
def countdown(n):
    if n <= 0:          # base case
        print("Go!")
        return
    print(n)
    countdown(n - 1)    # recursive call
```

Recursion is especially powerful for problems that have a naturally self-similar structure,
like fractal trees, where each branch is a smaller version of the whole tree.

See [chapters/24-recursion-and-fractals/index.md](chapters/24-recursion-and-fractals/index.md).

### What is a module?

A **module** is a Python file (or collection of files) that contains reusable functions,
variables, and classes. You bring a module into your program with `import`:

```python
import math
print(math.sqrt(25))   # 5.0

import random
print(random.randint(1, 10))   # a random number 1-10
```

Python ships with a large **standard library** of modules covering math, file handling, dates,
regular expressions, data structures, and much more. You can also create your own modules and
import them into other programs.

See [chapters/17-modules-and-random/index.md](chapters/17-modules-and-random/index.md).

### What is a class in Python?

A **class** is a blueprint for creating objects. Each object built from the class gets its own
set of **attributes** (data) and **methods** (actions). You define a class with `class` and
set up its attributes in a special method called `__init__`:

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        print(self.name + " says: Woof!")

fido = Dog("Fido", "Labrador")
fido.bark()   # Fido says: Woof!
```

You have been using classes already: `turtle.Turtle()` and `turtle.Screen()` are both classes
provided by the turtle module.

See [chapters/25-object-oriented-programming/index.md](chapters/25-object-oriented-programming/index.md).

### What is a string?

A **string** is a sequence of text characters enclosed in quotes. Both single quotes `'hello'`
and double quotes `"hello"` work. Strings are **immutable** — you cannot change individual
characters, but you can create new strings by combining or transforming existing ones:

```python
greeting = "Hello, " + "world!"   # concatenation
upper = greeting.upper()           # "HELLO, WORLD!"
words = greeting.split(", ")      # ["Hello", "world!"]
```

Strings have dozens of built-in methods for searching, splitting, replacing, and formatting text.

See [chapters/08-working-with-strings/index.md](chapters/08-working-with-strings/index.md).

### What is the difference between a list, a tuple, and a set?

All three are Python collections, but they differ in important ways:

| Collection | Ordered? | Changeable? | Duplicates? |
|------------|----------|-------------|-------------|
| `list` | Yes | Yes (mutable) | Allowed |
| `tuple` | Yes | No (immutable) | Allowed |
| `set` | No | Yes | Not allowed |

Use a **list** when order matters and you need to add or remove items. Use a **tuple** for a
fixed collection of values (like coordinates `(x, y)`). Use a **set** when you only care
whether an item is present and each item must be unique.

See [chapters/20-tuples-and-sets/index.md](chapters/20-tuples-and-sets/index.md).

### What is scope in Python?

**Scope** determines where in a program a variable can be seen. A variable defined inside a
function has **local scope** — it only exists inside that function. A variable defined outside
all functions has **global scope** — it can be seen everywhere. This means two functions can
each have their own variable named `count` without interfering with each other.

```python
def example():
    x = 10      # local — only visible inside example()

y = 20          # global — visible everywhere
```

Understanding scope prevents a common class of bugs where you accidentally overwrite a
variable from another part of your program.

See [chapters/11-functions-parameters-scope/index.md](chapters/11-functions-parameters-scope/index.md).

### What are BFS and DFS?

**BFS (Breadth-First Search)** and **DFS (Depth-First Search)** are algorithms for visiting
every node in a graph or tree.

- **BFS** uses a **queue** (first-in, first-out). It explores all neighbors at the current
  distance before going deeper. BFS **guarantees the shortest path** in an unweighted graph.
- **DFS** uses a **stack** (last-in, first-out) — or recursion. It plunges as deep as possible
  along one path before backtracking.

BFS is the right choice for finding the shortest route through a maze. DFS is often simpler to
implement recursively and works well for problems that require exploring all possibilities.

See [chapters/30-algorithms-data-structures/index.md](chapters/30-algorithms-data-structures/index.md).

### What is object-oriented programming?

**Object-oriented programming (OOP)** is a style of programming that organizes code around
**objects** — entities that bundle data (attributes) and behavior (methods) together.
Python is an object-oriented language: strings, lists, dictionaries, and turtle graphics are all
objects. When you call `my_list.append(5)`, you are calling the `append` method on a list
object. OOP becomes especially useful for modeling real-world things: a `Player` class in a
game, a `Quiz` class for a quiz app, a `Turtle` class for your drawing agent.

See [chapters/25-object-oriented-programming/index.md](chapters/25-object-oriented-programming/index.md).

### What is a graph data structure?

In computer science, a **graph** is a collection of **nodes** (also called vertices) connected
by **edges**. Graphs model networks: cities connected by roads, web pages linked by hyperlinks,
or rooms in a maze connected by corridors. Python represents graphs as **adjacency lists** —
dictionaries where each key is a node and its value is a list of neighboring nodes.

```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A"],
    "D": ["B"],
}
```

BFS and DFS are the two standard algorithms for searching a graph.

See [chapters/30-algorithms-data-structures/index.md](chapters/30-algorithms-data-structures/index.md).

### What is the random module?

The **`random` module** provides functions for generating random numbers and making random
choices. The most common ones in this course are:

- `random.randint(a, b)` — random integer between `a` and `b` (inclusive)
- `random.choice(seq)` — pick one random item from a list
- `random.random()` — random float between 0.0 and 1.0
- `random.shuffle(lst)` — shuffle a list in place

Random numbers are used throughout turtle graphics projects: random colors, random starting
positions, turtle races, and star-field generators.

See [chapters/17-modules-and-random/index.md](chapters/17-modules-and-random/index.md).

### What is machine learning?

**Machine learning** is a branch of artificial intelligence where a program learns patterns
from data instead of following hand-written rules. You provide labeled examples and the program
adjusts internal numbers (called **weights**) until it can correctly classify new examples it
has never seen. In this course, you use the **Keras** library to build a small neural network
that learns to recognize handwritten digits from the MNIST dataset — 60,000 training images of
digits 0–9.

See [chapters/37-machine-learning-foundations/index.md](chapters/37-machine-learning-foundations/index.md).

### What is a list comprehension?

A **list comprehension** is a compact way to build a new list by transforming or filtering
another sequence. It combines a `for` loop and an optional `if` condition into a single line:

```python
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

List comprehensions are more concise than building a list with `append()` inside a regular
`for` loop, and experienced Python programmers use them constantly.

See [chapters/22-advanced-collections/index.md](chapters/22-advanced-collections/index.md).

---

## Technical Detail Questions

### What is the difference between Python 2 and Python 3?

Python 3 (released 2008) made several improvements that were not backward-compatible with
Python 2. The biggest practical difference for beginners is that `print` changed from a
statement (`print "hello"`) to a function (`print("hello")`). Division also changed:
in Python 2, `5 / 2` returned `2` (integer division); in Python 3 it returns `2.5`.
**This course uses Python 3.** Python 2 reached end-of-life in January 2020 and should not be
used for new projects.

### What does the print() function do?

`print()` displays output to the screen. You pass one or more values separated by commas, and
Python prints them on a single line with spaces between them, followed by a newline:

```python
print("Hello", "world")   # Hello world
print(42)                  # 42
print(1 + 1)               # 2
```

`print()` is the most fundamental debugging tool in Python — when something goes wrong, adding
`print()` statements to show the values of variables is often the fastest way to find the bug.

### How do f-strings work?

An **f-string** (formatted string literal) lets you embed variable values directly inside a
string by placing an `f` before the opening quote and wrapping variable names in `{}`:

```python
name = "Monty"
score = 95
message = f"Great job, {name}! You scored {score} points."
print(message)
# Great job, Monty! You scored 95 points.
```

Any Python expression inside the braces is evaluated and inserted into the string. F-strings
are the preferred way to build strings that include variable values in modern Python.

See [chapters/14-string-methods-formatting/index.md](chapters/14-string-methods-formatting/index.md).

### What does the range() function do?

`range(n)` generates a sequence of integers from `0` up to (but not including) `n`. You can
also specify a start, stop, and step:

```python
range(5)         # 0, 1, 2, 3, 4
range(2, 8)      # 2, 3, 4, 5, 6, 7
range(0, 10, 2)  # 0, 2, 4, 6, 8
range(5, 0, -1)  # 5, 4, 3, 2, 1
```

`range()` is used in nearly every `for` loop that counts. It does not create a list in memory
— it generates values one at a time, which makes it efficient even for very large ranges.

### What is the modulo operator?

The **modulo operator `%`** returns the remainder after division:

```python
10 % 3   # 1  (10 divided by 3 = 3 remainder 1)
8 % 2    # 0  (8 divided by 2 = 4 remainder 0)
7 % 5    # 2
```

The most common uses for `%` in this course are:
- **Even or odd**: `if n % 2 == 0:` is true for even numbers
- **Every Nth iteration**: `if i % 10 == 0: print(i)` prints every 10th value in a loop

See [chapters/06-math-and-arithmetic/index.md](chapters/06-math-and-arithmetic/index.md).

### How do I get input from the user?

The built-in `input()` function prints a prompt and waits for the user to type something.
It always returns a **string**, so if you need a number you must convert it:

```python
name = input("What is your name? ")
age = int(input("How old are you? "))
print(f"Hi {name}, you are {age} years old!")
```

If the user enters something that cannot be converted to `int`, Python raises a `ValueError` —
wrapping the conversion in a `try/except` block handles that gracefully.

See [chapters/13-user-input-type-conversion/index.md](chapters/13-user-input-type-conversion/index.md).

### What is the difference between = and ==?

- `=` is the **assignment operator** — it stores a value in a variable: `x = 5`
- `==` is the **equality comparison operator** — it tests whether two values are equal
  and returns `True` or `False`: `x == 5` → `True`

Mixing these up is one of the most common beginner mistakes:

```python
x = 10        # assigns 10 to x
if x == 10:   # checks whether x equals 10
    print("yes")
```

Using `=` inside an `if` condition is a `SyntaxError` in Python (unlike C or Java, where it
is a common bug that silently works).

### What are comparison operators?

Python's **comparison operators** compare two values and return `True` or `False`:

| Operator | Meaning |
|----------|---------|
| `==` | Equal to |
| `!=` | Not equal to |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal to |
| `>=` | Greater than or equal to |

You combine comparisons with the logical operators `and`, `or`, and `not`.

### What does the import statement do?

`import` loads a module and makes its contents available under the module's name:

```python
import math
print(math.pi)      # 3.141592653589793
print(math.sqrt(9)) # 3.0
```

You can also import specific names from a module (`from math import sqrt`) or give the module
a shorter alias (`import numpy as np`). The `import` statement runs the module's code once and
caches the result, so importing the same module twice is efficient.

### What is the math module?

The **`math` module** provides mathematical functions and constants beyond basic arithmetic:

- `math.sqrt(x)` — square root
- `math.pi` — the constant π (3.14159…)
- `math.sin(x)`, `math.cos(x)` — trigonometric functions (x in radians)
- `math.radians(degrees)` — convert degrees to radians
- `math.floor(x)`, `math.ceil(x)` — round down or up to an integer
- `math.factorial(n)` — n! (n factorial)

The `math` module is used heavily in Chapter 18 for plotting sine waves and other mathematical
turtle graphics.

See [chapters/18-math-module-turtle-projects/index.md](chapters/18-math-module-turtle-projects/index.md).

### What is a traceback?

A **traceback** is Python's error report. When a runtime error occurs, Python prints the chain
of function calls that led to the error (most recent last), followed by the error type and a
short message. Reading a traceback from **bottom to top** is the fastest way to find the
problem: the last line tells you what went wrong, and the lines above tell you where.

```
Traceback (most recent call last):
  File "my_program.py", line 5, in <module>
    result = 10 / 0
ZeroDivisionError: division by zero
```

See [chapters/23-error-handling-debugging/index.md](chapters/23-error-handling-debugging/index.md).

### What is a try/except block?

A **`try/except` block** lets your program handle errors gracefully instead of crashing.
Code in the `try` block runs normally. If a specified error occurs, Python jumps to the
`except` block instead of stopping:

```python
try:
    age = int(input("Enter your age: "))
except ValueError:
    print("Please enter a whole number!")
```

You should catch the most specific exception possible. Catching bare `Exception` or using a
bare `except:` makes bugs harder to find later.

See [chapters/23-error-handling-debugging/index.md](chapters/23-error-handling-debugging/index.md).

### How do I read a file in Python?

Use the built-in `open()` function with a `with` statement. The `with` statement
automatically closes the file when you are done, even if an error occurs:

```python
with open("story.txt", "r") as f:
    for line in f:
        print(line.strip())
```

The `"r"` means read mode. Use `"w"` to write (overwrites the file) or `"a"` to append.
The `.strip()` removes the trailing newline character from each line.

See [chapters/26-file-input-output/index.md](chapters/26-file-input-output/index.md).

### What is a regular expression?

A **regular expression (regex)** is a pattern that describes a set of strings. The `re` module
lets you search for, extract, and replace text based on these patterns:

```python
import re
text = "My phone is 555-1234 and backup is 555-9876"
phones = re.findall(r"\d{3}-\d{4}", text)
# ['555-1234', '555-9876']
```

Common pattern pieces: `\d` matches any digit, `\w` matches any word character, `.` matches
any character, `*` means zero or more, `+` means one or more, `?` means zero or one.

See [chapters/29-text-processing-regex/index.md](chapters/29-text-processing-regex/index.md).

### What are the turtle movement commands?

The four core movement commands for a turtle object `t` are:

| Command | Action |
|---------|--------|
| `t.forward(n)` | Move `n` pixels in the current direction |
| `t.backward(n)` | Move `n` pixels in the opposite direction |
| `t.left(angle)` | Turn left by `angle` degrees |
| `t.right(angle)` | Turn right by `angle` degrees |

Supporting commands: `t.penup()` / `t.pendown()` lift and lower the pen; `t.goto(x, y)`
teleports the turtle to any coordinate; `t.speed(n)` controls drawing speed (0 is fastest).

See [chapters/05-drawing-with-turtle/index.md](chapters/05-drawing-with-turtle/index.md).

### What is NumPy?

**NumPy** is a Python library for fast numerical computing. Its central object is the
**ndarray** — a multi-dimensional array that supports element-wise math operations orders of
magnitude faster than Python lists:

```python
import numpy as np
a = np.array([1, 2, 3, 4])
print(a * 2)   # [2 4 6 8]
print(a ** 2)  # [1 4 9 16]
```

NumPy is the foundation of scientific Python: matplotlib uses NumPy arrays, and Keras
processes image data as NumPy arrays. Chapter 33 covers the NumPy functions used in this course.

See [chapters/33-numpy-scientific-computing/index.md](chapters/33-numpy-scientific-computing/index.md).

### What is matplotlib?

**matplotlib** is the most widely-used Python library for creating data visualizations.
`matplotlib.pyplot` provides a MATLAB-like interface for line plots, scatter plots, bar charts,
and histograms:

```python
import matplotlib.pyplot as plt
x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 6, 3]
plt.plot(x, y)
plt.title("My Chart")
plt.xlabel("X Axis")
plt.ylabel("Y Axis")
plt.show()
```

See [chapters/32-data-visualization-matplotlib/index.md](chapters/32-data-visualization-matplotlib/index.md).

### What does lambda mean?

A **lambda** is a short, anonymous function written in a single expression. It is useful when
you need a simple function for only one place in your code:

```python
square = lambda x: x ** 2
print(square(5))   # 25

# Equivalent def version:
def square(x):
    return x ** 2
```

Lambdas are commonly passed as arguments to functions like `sorted()` and `map()`:
`sorted(words, key=lambda w: len(w))` sorts a list of words by length.

See [chapters/24-recursion-and-fractals/index.md](chapters/24-recursion-and-fractals/index.md).

---

## Common Challenge Questions

### Why does Python say "IndentationError"?

An `IndentationError` means Python found a line that is indented inconsistently with the
lines around it. The most common causes are:

1. **Mixing tabs and spaces** — Python 3 treats them as different characters. Stick to 4
   spaces per level everywhere.
2. **Wrong level** — you indented one line too many or too few spaces.
3. **Forgot to indent** — a line that should be inside a `for`, `if`, or `def` block is
   at the wrong level.

Fix: set your editor to **always insert spaces** (never tabs) and use **4 spaces per indent**.
Most code editors do this automatically when you press Tab.

See [chapters/02-python-code-structure/index.md](chapters/02-python-code-structure/index.md).

### Why is my turtle not drawing anything?

Common reasons the turtle window appears blank:

1. **Speed is `0` but the program ended before the canvas displayed** — call
   `turtle.done()` or `wn.mainloop()` at the end to keep the window open.
2. **Pen is up** — check that you called `t.pendown()` before moving.
3. **Color matches background** — if the turtle color and background color are the same,
   lines are invisible.
4. **`forward(0)`** — moving zero pixels draws nothing.
5. **In Skulpt** — the Skulpt turtle output appears inside the page div, not in a separate
   window. Make sure you are looking at the output area below the code editor.

See [chapters/05-drawing-with-turtle/index.md](chapters/05-drawing-with-turtle/index.md).

### What is the difference between a syntax error and a runtime error?

- A **syntax error** is detected *before* the program runs. Python cannot even parse the code
  because it violates Python grammar — a missing colon after `if`, unmatched parentheses, or
  misspelled `def`. Python shows a `SyntaxError` with the line number.
- A **runtime error** (also called an **exception**) is detected *while* the program is
  running. The code is syntactically valid but something goes wrong during execution —
  dividing by zero, looking up a key that does not exist in a dictionary, calling a method
  on the wrong type.

There is also a third type: **logic errors** — the program runs to completion but produces the
wrong answer. Python gives no error message; you have to figure out the mistake by reasoning
through the code or adding `print()` statements.

See [chapters/23-error-handling-debugging/index.md](chapters/23-error-handling-debugging/index.md).

### Why does my while loop run forever?

An **infinite loop** happens when the condition in a `while` loop never becomes `False`.
The most common causes are:

1. **Forgetting to update the loop variable** — if you never change the value being tested,
   the condition stays `True` forever.
2. **Off-by-one in the update** — `count += 0` instead of `count += 1`.
3. **Condition that can never be `False`** — like `while True:` without a `break` statement.

Fix: add a `print(count)` inside the loop to see whether the value is actually changing.
If you are stuck in a Skulpt lab, refresh the page. In a terminal, press **Ctrl+C** to
interrupt the program.

See [chapters/10-while-loops-and-animation/index.md](chapters/10-while-loops-and-animation/index.md).

### Why do I get a "NameError" for a variable I defined?

`NameError: name 'x' is not defined` means Python cannot find the variable `x` in scope
at the point where you used it. Common causes:

1. **Typo** — `scroe` instead of `score`. Python is case-sensitive: `Score` and `score` are
   different names.
2. **Defined in a function** — local variables only exist inside the function where they
   are created.
3. **Defined after the line that uses it** — Python reads code top-to-bottom; you cannot
   use a variable before the line that assigns it.
4. **Loop variable used after the loop** — in Python, `for` loop variables persist after
   the loop, but `for i in []:` never assigns anything if the list is empty.

### What is "RecursionError: maximum recursion depth exceeded"?

This error means a recursive function called itself so many times that Python ran out of
space on the **call stack**. Python's default recursion limit is 1000 calls. This almost
always means one of two things:

1. **Missing base case** — you forgot to write (or correctly test) the condition that
   stops the recursion.
2. **Base case is never reached** — the recursive call does not actually reduce the problem
   toward the base case.

Fix: add a `print(n)` at the top of your recursive function to see whether the value is
getting smaller on each call. If it is not, the logic of your recursive step needs fixing.

See [chapters/24-recursion-and-fractals/index.md](chapters/24-recursion-and-fractals/index.md).

### Why does my function return None instead of a value?

Every Python function returns `None` unless you explicitly use a `return` statement with a
value. Common causes of unexpected `None`:

1. **Forgot `return`** — the function computes the answer but does not return it.
2. **`return` is inside an `if` block that was not reached** — only some code paths
   return a value.
3. **`print()` instead of `return`** — `print()` shows a value on the screen but does not
   send it back to the caller.

```python
def add(a, b):
    result = a + b
    # Bug: missing return statement below
    # return result

total = add(3, 4)
print(total)   # None — because add() returned nothing
```

See [chapters/11-functions-parameters-scope/index.md](chapters/11-functions-parameters-scope/index.md).

### What does "TypeError: can only concatenate str (not 'int') to str" mean?

This error means you tried to join a string and a number with `+`. Python's `+` operator
either concatenates two strings or adds two numbers, but it cannot mix the two. Convert the
number to a string first:

```python
age = 12
# Bug:
print("I am " + age + " years old.")   # TypeError

# Fix:
print("I am " + str(age) + " years old.")

# Better fix using an f-string:
print(f"I am {age} years old.")
```

See [chapters/08-working-with-strings/index.md](chapters/08-working-with-strings/index.md).

### Why does my for loop skip the last number?

Because `range(n)` generates numbers **up to but not including** `n`. This is intentional:

```python
for i in range(5):
    print(i)   # 0, 1, 2, 3, 4  — stops at 4, not 5
```

To include `n`, use `range(n + 1)`. To loop from `1` to `10` inclusive: `range(1, 11)`.
This "exclusive upper bound" is consistent with how Python indexing works — the last valid
index of a list of 5 items is `4`, not `5`.

### How do I fix a logic error when there is no error message?

Logic errors are the hardest bugs because Python does not complain — the program just produces
the wrong output. Strategies:

1. **Add print statements** — print variable values at key points to see what is actually
   happening versus what you expect.
2. **Trace the code by hand** — on paper, step through the code line by line as Python
   would, keeping track of every variable's value.
3. **Split the problem** — test smaller pieces of your program independently to narrow down
   which part produces the wrong result.
4. **Rubber-duck debug** — explain your code out loud (to a rubber duck, a friend, or Monty)
   — the act of explaining often reveals the mistake.

See [chapters/23-error-handling-debugging/index.md](chapters/23-error-handling-debugging/index.md).

### Why does 1 == 1.0 return True in Python?

It does! Python compares `int` and `float` values mathematically: `1 == 1.0` is `True`
because the number one is the same regardless of type. However, `1 is 1.0` is `False` because
`is` checks object identity (whether they are literally the same object in memory), not
mathematical equality. Use `==` for value comparisons. Use `is` only for comparing to `None`,
`True`, or `False`.

---

## Best Practice Questions

### How should I name my variables?

Python variable names should be:

- **Descriptive** — `student_count` beats `n`, `sc`, or `x`
- **Snake case** — words separated by underscores: `first_name`, `total_score`
- **Lowercase** — by convention, only constants use `ALL_CAPS` (`MAX_SIZE = 100`)
- **Not a Python keyword** — avoid `list`, `type`, `input`, `id`, `print` as variable names

Good naming makes code read almost like English: `if score >= passing_grade:` is far clearer
than `if s >= pg:`. One concise variable name saves a comment and prevents confusion.

See [chapters/03-variables-and-numbers/index.md](chapters/03-variables-and-numbers/index.md).

### When should I write a function instead of repeating code?

Write a function whenever you find yourself **copying and pasting the same code** with only
small changes. The threshold is roughly **three repetitions** — once is fine, twice is a
coincidence, three times is a pattern worth abstracting.

Also write a function when:
- A block of code grows long enough that you lose track of what it does
- You want to give a complex operation a meaningful name
- You want to be able to test a piece of logic in isolation

Functions make bugs easier to fix: repair the function once instead of hunting down every
copy of the pasted code.

See [chapters/11-functions-parameters-scope/index.md](chapters/11-functions-parameters-scope/index.md).

### How do I choose between a list and a dictionary?

Use a **list** when:
- Items are ordered and you access them by position (`items[0]`, `items[-1]`)
- You are processing a sequence of similar things (a list of scores, a list of colors)

Use a **dictionary** when:
- You need to look up values by a meaningful name or key (`grades["Alice"]`)
- You are mapping one thing to another (word → frequency, username → password)
- You want to avoid searching through a list one item at a time

When in doubt: if you find yourself writing `if item in list` repeatedly for lookup, switch
to a dictionary or a set.

See [chapters/21-dictionaries/index.md](chapters/21-dictionaries/index.md).

### What is the DRY principle?

**DRY** stands for **Don't Repeat Yourself**. Every piece of knowledge or logic should exist
in exactly one place. When you copy and paste code and later need to change it, you risk
forgetting to update one of the copies. Functions, modules, and loops are all tools for
avoiding repetition.

The opposite of DRY is **WET** (Write Everything Twice), which leads to harder-to-maintain
programs. Applying DRY consistently is one of the most important habits a programmer can build.

See [chapters/36-computational-thinking-best-practices/index.md](chapters/36-computational-thinking-best-practices/index.md).

### When should I use a for loop versus a while loop?

Use a **`for` loop** when you know in advance how many times to repeat — iterating over a
list, processing each line in a file, or counting from 1 to 10.

Use a **`while` loop** when the number of repetitions depends on something that changes
during the loop — waiting for user input, running an animation until a condition changes,
or searching until an item is found.

A `while True:` loop with a `break` inside is common for "repeat until the user wants to
stop" patterns in interactive programs.

### How do I make my code easier to read?

- **Use meaningful names** — `player_health` instead of `ph`
- **Keep functions short** — if a function is more than 20 lines, consider splitting it
- **Add a blank line** between logical sections of your program
- **Use constants** for magic numbers: `MAX_SPEED = 10` instead of `10` scattered everywhere
- **Write a docstring** for each function that explains what it does, its parameters, and
  what it returns
- **Avoid deep nesting** — more than 3 levels of indentation is a sign to refactor

See [chapters/36-computational-thinking-best-practices/index.md](chapters/36-computational-thinking-best-practices/index.md).

### When should I use try/except?

Use `try/except` at **system boundaries** — places where your code interacts with the outside
world and things can go wrong unpredictably:

- Converting user input to a number (`int(input(...))`)
- Opening a file that might not exist
- Parsing data from an external source (CSV, JSON)

Do **not** use `try/except` to hide bugs in your own logic. If you get a `KeyError` inside
your own dictionary lookup, that is a bug to fix — not something to silently swallow with
`except`.

See [chapters/23-error-handling-debugging/index.md](chapters/23-error-handling-debugging/index.md).

### When is recursion a good choice?

Recursion shines when the problem is **naturally self-similar** — when you can express the
solution to the big problem in terms of the same kind of problem at a smaller scale:

- Fractal drawings (each branch is a smaller version of the tree)
- Tree traversal (left subtree + right subtree, same algorithm)
- Maze solving with backtracking
- Directory listing (each subdirectory is itself a directory)

Recursion can be harder to debug than iteration, and deep recursion uses more memory
(Python's default limit is 1000 calls). For straightforward counting problems, a `for` or
`while` loop is usually simpler.

See [chapters/24-recursion-and-fractals/index.md](chapters/24-recursion-and-fractals/index.md).

### How do I organize a larger Python program?

For programs that span more than one or two screens of code:

1. **Break work into functions** — one clear job per function
2. **Group related functions into modules** — put drawing functions in `drawing.py`,
   data functions in `data.py`
3. **Use a `main()` function** as the entry point and call it with the `if __name__ == "__main__":` guard
4. **Keep data separate from display logic** — compute your results first, then print or draw them
5. **Write a short docstring** at the top of each file explaining its purpose

These practices scale from a 100-line script to a 10,000-line project without changing
the core habits.

See [chapters/31-advanced-functions-oop/index.md](chapters/31-advanced-functions-oop/index.md).

### How do I use version control with Python?

**Git** is the standard version control tool for Python projects. The basic workflow:

1. `git init` — set up a new repository in your project folder
2. `git add my_file.py` — stage a file you changed
3. `git commit -m "Add drawing function"` — save a snapshot with a message
4. `git log` — see your history of snapshots

Version control lets you experiment safely: if you break something, you can always roll back
to the last working snapshot. For sharing and collaboration, GitHub is the most popular hosting
service.

See [chapters/36-computational-thinking-best-practices/index.md](chapters/36-computational-thinking-best-practices/index.md).

---

## Advanced Topic Questions

### How does BFS guarantee the shortest path?

BFS explores nodes **level by level** using a queue. Because a queue is first-in, first-out,
BFS always processes all nodes at distance 1 before any node at distance 2, and all at
distance 2 before any at distance 3, and so on. This means the first time BFS reaches the
goal node, it reached it via the fewest steps possible. A longer path to the same goal cannot
arrive first because the shorter path was already fully explored at an earlier level.

DFS makes no such guarantee — it can go deep down a dead end before exploring a shorter
route, so it may find a path that is not the shortest.

See [chapters/30-algorithms-data-structures/index.md](chapters/30-algorithms-data-structures/index.md).

### What is a convolutional neural network?

A **convolutional neural network (CNN)** is a type of neural network designed for processing
data that has a grid structure — like images. Instead of connecting every pixel to every neuron
(which would be millions of connections), a CNN uses small **filters** (for example 3×3 grids
of weights) that slide across the image, detecting edges, corners, and patterns locally.
Stacking convolutional layers allows the network to detect increasingly complex features:
edges → shapes → objects.

In Chapter 38, the course extends the MNIST example with a simple CNN using Keras `Conv2D`
and `MaxPooling2D` layers.

See [chapters/38-neural-networks-and-mnist/index.md](chapters/38-neural-networks-and-mnist/index.md).

### What is the MNIST dataset?

**MNIST** (Modified National Institute of Standards and Technology) is a classic machine
learning dataset containing 70,000 grayscale images of handwritten digits 0–9, each 28×28
pixels. 60,000 images are used for training and 10,000 for testing. MNIST is the "Hello
World" of machine learning: models trained on it typically achieve 97–99% accuracy, making
it a good benchmark for learning how neural networks work without requiring enormous
computational resources.

See [chapters/37-machine-learning-foundations/index.md](chapters/37-machine-learning-foundations/index.md).

### What is the difference between supervised and unsupervised learning?

- **Supervised learning** trains on **labeled examples** — each input has a correct answer
  (label) provided. The model learns to predict the label for new inputs. MNIST digit
  recognition is supervised: every image is labeled with its correct digit (0–9).
- **Unsupervised learning** finds structure in **unlabeled data** — no correct answers are
  provided. The model discovers groupings, patterns, or compressed representations on its
  own. Clustering and autoencoders are examples.

This course focuses on supervised learning. Unsupervised learning is briefly mentioned
in [chapters/37-machine-learning-foundations/index.md](chapters/37-machine-learning-foundations/index.md).

### What is NumPy broadcasting?

**Broadcasting** is NumPy's rule for applying an operation between arrays of different shapes.
When you write `array + 5`, NumPy behaves as if `5` were an array of the same shape as
`array`, filled with fives, and adds element-wise. More generally, if two arrays have
compatible shapes, NumPy extends the smaller one to match the larger one without copying data.

```python
import numpy as np
a = np.array([[1, 2, 3],
              [4, 5, 6]])
print(a * 2)   # every element multiplied by 2
```

Broadcasting makes numerical code much more concise and efficient than writing explicit loops.

See [chapters/33-numpy-scientific-computing/index.md](chapters/33-numpy-scientific-computing/index.md).

### How does image processing work with Pillow?

**Pillow** (PIL) lets you open, display, modify, and save images in Python:

```python
from PIL import Image
img = Image.open("photo.jpg")
img.show()                        # display in default viewer
small = img.resize((100, 100))   # resize
gray = img.convert("L")          # convert to grayscale
gray.save("gray_photo.jpg")      # save to file
```

Pillow also gives access to the raw pixel data as a NumPy array, which allows you to
manipulate individual pixels — brightening, inverting colors, or extracting image features
for machine learning preprocessing.

See [chapters/34-image-processing-pillow/index.md](chapters/34-image-processing-pillow/index.md).

### What is event-driven programming?

**Event-driven programming** is a style where the program waits for **events** — user actions
like mouse clicks or key presses — and runs a **callback function** when each event occurs.
Instead of executing top-to-bottom once, the program enters an **event loop** that keeps
listening for events indefinitely.

Turtle graphics uses event-driven programming: `wn.onscreenclick(my_function)` registers
`my_function` as the callback for mouse click events. When the user clicks the canvas,
the turtle module calls `my_function` with the click coordinates.

```python
def clicked(x, y):
    t.goto(x, y)

wn.onscreenclick(clicked)
wn.mainloop()   # start the event loop
```

See [chapters/35-advanced-turtle-event-driven/index.md](chapters/35-advanced-turtle-event-driven/index.md).

### How do I create my own Python module?

Creating a module is as simple as saving Python code in a `.py` file. Any functions,
variables, or classes you define in that file become available when another program imports
it:

```python
# shapes.py
def draw_square(t, size):
    for _ in range(4):
        t.forward(size)
        t.right(90)

def draw_triangle(t, size):
    for _ in range(3):
        t.forward(size)
        t.right(120)
```

```python
# main.py
import turtle
import shapes

t = turtle.Turtle()
shapes.draw_square(t, 100)
shapes.draw_triangle(t, 80)
```

Both files must be in the same directory (or on Python's module search path). Add a
`if __name__ == "__main__":` guard in `shapes.py` if you want to test it independently
without that test code running when it is imported.

See [chapters/27-standard-library-json/index.md](chapters/27-standard-library-json/index.md).

### What are common sorting algorithms and when do I need them?

This course covers three elementary sorting algorithms:

- **Bubble sort** — repeatedly swap adjacent elements that are out of order. Simple to
  understand, slow for large lists (O(n²)).
- **Selection sort** — find the minimum element in the unsorted portion and move it to the
  front. Also O(n²) but fewer swaps than bubble sort.
- **Insertion sort** — build the sorted list one element at a time by inserting each new
  element in its correct position. Efficient for nearly-sorted data.

In practice, you almost never need to implement your own sort — Python's built-in `sorted()`
and `list.sort()` use Timsort, which is O(n log n) and beats all three elementary algorithms
on real data. You study sorting algorithms to understand how computers solve ordering problems
and to learn to analyze algorithm efficiency with Big-O notation.

See [chapters/30-algorithms-data-structures/index.md](chapters/30-algorithms-data-structures/index.md).
