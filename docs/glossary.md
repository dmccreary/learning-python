# Glossary of Terms

#### abs() — absolute value

A built-in function that returns the non-negative magnitude of a number, converting negative numbers to their positive equivalents while leaving non-negative numbers unchanged.

**Example:** `abs(-7)` returns `7`; `abs(5)` returns `5`; `abs(-3.14)` returns `3.14`.

#### Absolute positioning: goto(x, y), setx(), sety()

Turtle methods that move the turtle to a specific point on the screen rather than relative to its current position: `goto(x, y)` moves to coordinates; `setx(x)` changes only the x-coordinate; `sety(y)` changes only y.

**Example:** `t.goto(0, 0)` moves the turtle to the center of the screen; `t.goto(-200, 100)` moves it to the upper-left area.

#### Abstract data types overview

A conceptual description of a data structure defined by its behavior (the operations it supports and their rules) rather than by how it is implemented, allowing programmers to reason about data without worrying about low-level details.

**Example:** A stack is an abstract data type defined by push and pop operations; it can be implemented using a Python list.

#### Accessing attributes and calling methods (obj.attr, obj.method())

The dot notation syntax used to read or set an object's attribute (`obj.attribute`) or to invoke one of its methods (`obj.method(arguments)`).

**Example:** `player.score = 100` sets an attribute; `player.level_up()` calls a method on the same `player` object.

#### Accessing values by key (d[key])

The method of retrieving a value stored in a dictionary by placing the key inside square brackets after the dictionary name; if the key does not exist, Python raises a `KeyError`.

**Example:** `student["name"]` returns `"Alex"` from a dictionary where `"name"` is a key; accessing a missing key like `student["phone"]` raises an error.

#### Activation functions: relu, softmax

Mathematical functions applied to each neuron's output in a neural network layer: `relu` (Rectified Linear Unit) outputs zero for negative inputs and the input itself for positive ones; `softmax` converts a list of values into probabilities that sum to 1.

**Example:** Hidden layers typically use `relu` to introduce non-linearity; the final layer of a classifier uses `softmax` to output one probability per class.

#### .add(), .remove(), .discard() methods

Set methods that modify a set: `.add(item)` inserts one item; `.remove(item)` deletes an item and raises `KeyError` if it's missing; `.discard(item)` deletes an item silently if it exists or does nothing if it doesn't.

**Example:** `s.add(5)` adds 5; `s.discard(99)` does nothing if 99 is not in the set, avoiding an error.

#### Adding and updating key-value pairs

The way to insert a new key-value pair into a dictionary or change the value of an existing key by using assignment with square bracket notation.

**Example:** `inventory["apples"] = 10` adds a new entry; `inventory["apples"] = 15` updates it if `"apples"` already existed.

#### Adjacency list representation

A way to represent a graph by storing, for each node, a list of the other nodes it is directly connected to, typically as a dictionary where keys are node names and values are lists of neighbors.

**Example:** `graph = {"A": ["B", "C"], "B": ["A"], "C": ["A"]}` represents a triangle graph where A is connected to both B and C.

#### Alternation with |

A regex operator that matches either the pattern on its left or the pattern on its right, working like a logical OR inside a regular expression.

**Example:** `r"cat|dog"` matches a string containing either `"cat"` or `"dog"`.

#### Anchors: ^ (start), $ (end)

Special regex symbols that match positions in a string rather than characters: `^` asserts that the match must start at the very beginning of the string; `$` asserts that it must end at the very end.

**Example:** `r"^\d+"` matches a string that begins with digits; `r"\.$"` matches a string that ends with a period.

#### Animation loops

Repeated cycles of clear-draw-update that create the illusion of motion by quickly redrawing a scene with slightly changed positions, similar to frames in a film.

**Example:** A simple turtle animation loop calls `clear()`, updates ball position, draws the ball, then calls the loop again many times per second.

#### Animation with turtle (frame-based loops)

A technique for creating moving images in turtle graphics by repeatedly clearing the canvas and redrawing updated positions inside a loop, using `tracer()` and `update()` for smooth animation.

**Example:** A ball animation erases the old position, calculates the new one, draws the ball there, and repeats rapidly so the ball appears to move smoothly.

#### Arithmetic operators: +, -, *, /

The four basic mathematical operators in Python: `+` adds, `-` subtracts, `*` multiplies, and `/` divides two numeric values.

**Example:** `total = price * quantity + tax` uses three arithmetic operators in one expression.

#### Array operations and broadcasting basics

The NumPy feature that applies arithmetic operators to entire arrays element by element, and automatically expands a smaller array to match the shape of a larger one when performing operations between arrays of different sizes.

**Example:** `np.array([1, 2, 3]) + np.array([10, 20, 30])` returns `array([11, 22, 33])` without any loop.

#### assert statement with error messages

A debugging tool that tests a condition and raises an `AssertionError` with an optional message if the condition is `False`, used to verify assumptions within a program during development.

**Example:** `assert score >= 0, "Score must not be negative"` crashes with that message if `score` is somehow below zero.

#### Attributes — properties of an object

Variables that belong to a specific object and store data describing that object's characteristics; accessed using dot notation after the object's name.

**Example:** If `player` is an object, `player.name` and `player.score` are attributes that store the player's name and score.

#### Augmented assignment operators (+=, -=, *=, /=)

Shorthand operators that combine an arithmetic operation with assignment, updating a variable's value based on its current value without retyping the variable name twice.

**Example:** `score += 10` adds 10 to the current value of `score`, which is equivalent to writing `score = score + 10`.

#### Autoencoders — overview

A neural network architecture with an encoder that compresses input data into a compact representation and a decoder that reconstructs the original data, trained to minimize reconstruction error.

**Example:** An autoencoder trained on face images learns a compressed code for each face; the code can be used for denoising, generation, or anomaly detection.

#### Background and pen colors

Two separate color settings in turtle graphics: the background color fills the entire drawing window and is set with `bgcolor()`; the pen color determines the color of lines the turtle draws and is set with `pencolor()`.

**Example:** `screen.bgcolor("black"); t.pencolor("white")` creates a starfield effect where white lines are visible against the dark background.

#### Batch size and epochs

Two training hyperparameters: batch size is the number of training examples processed before the model's weights are updated; an epoch is one full pass through the entire training dataset.

**Example:** With 1000 samples, `batch_size=32` and `epochs=5` means the model updates its weights about 31 times per epoch and trains for 5 epochs (155 updates total).

#### BFS color tracking (white, gray, black)

A classic BFS implementation technique where nodes are labeled white (unvisited), gray (discovered but not fully processed), or black (fully explored), to track progress and avoid revisiting nodes.

**Example:** When BFS first encounters a neighbor, it marks it gray and adds it to the queue; after processing all its neighbors, it marks it black.

#### BFS for path finding

The application of Breadth-First Search to discover the shortest path between two nodes in a graph, by recording each node's parent during traversal and tracing back from destination to source.

**Example:** In a maze grid, BFS finds the minimum number of steps from start to finish by exploring all reachable cells one step at a time.

#### Binary search concept

An efficient algorithm for finding a value in a sorted list by repeatedly halving the search range — checking the middle element and eliminating half the remaining items — rather than checking each element one by one.

**Example:** Guessing a number between 1 and 100 by always guessing the midpoint (50, then 25 or 75, etc.) is binary search; it finds any number in at most 7 guesses.

#### Blank lines and code readability

The practice of inserting empty lines between sections of code — such as between function definitions or logical groups of statements — to make programs easier to scan and understand.

**Example:** Placing a blank line before and after each function definition helps readers quickly see where one function ends and the next begins.

#### bool() — convert to boolean

A built-in function that converts a value to `True` or `False` following Python's truthiness rules: `0`, `None`, empty strings, and empty collections become `False`; everything else becomes `True`.

**Example:** `bool(0)` returns `False`; `bool("hello")` returns `True`; `bool([])` returns `False`.

#### Boolean type (bool) — True and False

A Python data type that holds exactly one of two values — `True` or `False` — used to represent the result of comparisons and to control the flow of `if` statements and loops.

**Example:** `is_raining = True` stores a yes/no fact; `5 > 3` evaluates to `True` and `5 < 3` evaluates to `False`.

#### Breadth-First Search (BFS) algorithm

A graph traversal algorithm that explores all neighbors of a starting node before moving to their neighbors, visiting nodes level by level outward, and is guaranteed to find the shortest path in an unweighted graph.

**Example:** BFS on a map graph finds the fewest road segments between two cities by exploring all cities one hop away before two hops away.

#### break — exit a loop early

A statement that immediately ends the nearest enclosing `for` or `while` loop, skipping any remaining iterations and continuing with the code after the loop.

**Example:** `for n in range(100):` / `if n == 5: break` stops the loop as soon as `n` reaches 5 instead of continuing to 99.

#### Building a color picker with turtle

A turtle graphics project that creates clickable colored regions on the screen, demonstrating event handling, coordinate math, and conditional logic to change the active drawing color when the user clicks.

**Example:** A row of colored rectangles is drawn, and an `onscreenclick` handler checks which rectangle was clicked to update the pen color.

#### Callback functions

Functions that are passed as arguments to another function or registered with an event system, so they can be called later — automatically, in response to an event — rather than being called directly.

**Example:** In `screen.onscreenclick(draw_dot)`, `draw_dot` is a callback that the turtle system calls automatically whenever a click event occurs.

#### Calling a function

The act of executing a previously defined function by writing its name followed by parentheses, optionally passing arguments inside the parentheses.

**Example:** After defining `def greet(name): print("Hello, " + name)`, writing `greet("Alex")` runs the function and prints `Hello, Alex`.

#### Case sensitivity in Python

The property of Python where uppercase and lowercase letters are treated as different characters, so `Name`, `name`, and `NAME` are three separate, unrelated variable names.

**Example:** If you store a value in `score` but later type `Score`, Python will raise a `NameError` because it does not recognize `Score`.

#### Character classes: [a-z], [A-Z], [0-9]

Regex syntax that uses square brackets to define a set of characters, where a range like `a-z` matches any single lowercase letter, `A-Z` any uppercase letter, and `0-9` any single digit.

**Example:** `r"[aeiou]"` matches any vowel; `r"[A-Za-z]"` matches any letter regardless of case.

#### Checking for None with is None

The recommended way to test whether a variable holds the `None` value, using the `is` operator rather than `==`, because `is` checks identity (the exact same object) rather than equality.

**Example:** `if result is None: print("No value returned")` safely checks for `None` without triggering unexpected behavior from overloaded equality.

#### Checking key membership with in

Using the `in` keyword with a dictionary to test whether a specified key exists in the dictionary, returning `True` or `False` without raising an error.

**Example:** `if "score" in student:` checks whether the key `"score"` exists before trying to access it.

#### Checking membership with in

A keyword used in a Boolean expression to test whether a value exists as an element of a list, string, tuple, or other sequence, returning `True` or `False`.

**Example:** `"apple" in fruits` returns `True` if the list `fruits` contains `"apple"`.

#### Checking membership with in (sets)

Using the `in` keyword to test whether a value is a member of a set; this operation is very fast for sets (much faster than searching a list) because sets use hashing internally.

**Example:** `if "python" in known_words:` checks whether a word exists in the set of known words almost instantly, even for very large sets.

#### Class __str__() and __repr__() methods

Two special methods that control how objects are displayed: `__str__()` provides a friendly human-readable description used by `print()` and `str()`; `__repr__()` provides an unambiguous developer-oriented description used in the REPL and for debugging.

**Example:** `str(Dog("Buddy"))` might return `"Dog named Buddy"` while `repr(Dog("Buddy"))` returns `"Dog('Buddy', age=3)"` with all the data needed to recreate the object.

#### class keyword — defining a class

The Python keyword used to begin the definition of a new class, followed by the class name and a colon, after which an indented block contains the class's attributes and methods.

**Example:** `class Dog:` begins the definition of a `Dog` class; everything indented beneath it is part of the class.

#### Clearing: clear(), reset()

Two turtle methods that erase drawings: `clear()` erases all lines the turtle drew but keeps its current position, color, and settings; `reset()` erases drawings and also returns the turtle to the center with default settings.

**Example:** In a game, calling `t.clear()` at the start of each frame erases the previous drawing before redrawing the updated scene.

#### Code comments — when and why

The practice of adding `#` comments to explain the why behind complex or non-obvious code — the reasoning, context, or intent — rather than restating what the code already makes clear.

**Example:** `# Reverse the list so newest entries appear first` explains the intent; `# adds 1 to x` on `x += 1` adds no value.

#### Code reusability

The design goal of writing code — especially functions and modules — in a general enough way that it can be used in multiple places or projects without being rewritten.

**Example:** A `calculate_area(width, height)` function can be called anywhere you need an area, rather than rewriting the multiplication formula every time.

#### Color bars and data visualization in Jupyter

The use of matplotlib or other libraries inside a Jupyter notebook to create visual representations of data — such as color-coded bars — displayed inline in the notebook output.

**Example:** `plt.bar(subjects, scores, color=["red","blue","green"]); plt.show()` displays a color-coded bar chart of test scores directly in the notebook.

#### Color in turtle graphics

The system turtle uses to set drawing and fill colors, accepting named color strings, hex strings, or RGB tuples (after calling `colormode(255)`), and applied with methods like `color()`, `pencolor()`, and `fillcolor()`.

**Example:** `screen.colormode(255); t.color((100, 149, 237))` sets the pen to cornflower blue using an RGB tuple.

#### Color: color(), pencolor(), fillcolor()

Turtle methods that set drawing colors: `color(c)` sets both pen and fill color at once; `pencolor(c)` sets only the line color; `fillcolor(c)` sets only the interior fill color for shapes.

**Example:** `t.color("blue")` makes both the outline and fill blue; `t.pencolor("red"); t.fillcolor("yellow")` sets them separately.

#### Comments (single-line with #)

Text in a Python program that begins with the `#` character and is completely ignored by the interpreter; comments exist solely to explain the code to human readers.

**Example:** `# This loop draws a square` placed above a loop tells the reader what the code does without affecting how it runs.

#### Common exceptions: ValueError, TypeError, IndexError, KeyError, NameError, ZeroDivisionError

Six frequently encountered Python error types: `ValueError` (wrong value type), `TypeError` (wrong data type), `IndexError` (index out of range), `KeyError` (dictionary key not found), `NameError` (variable not defined), `ZeroDivisionError` (dividing by zero).

**Example:** `int("hello")` raises `ValueError`; `"text" + 5` raises `TypeError`; `[][0]` raises `IndexError`.

#### Common regex patterns: \d (digit), \w (word char), \s (whitespace)

Three frequently used shorthand character classes in regular expressions: `\d` matches any digit `0-9`; `\w` matches any letter, digit, or underscore; `\s` matches any whitespace character (space, tab, newline).

**Example:** `r"\d\d\d-\d\d\d\d"` matches a phone number pattern like `555-1234`; `r"\w+"` matches any whole word.

#### Comparison operators: >, <, >=, <=, ==, !=

Operators that compare two values and return a Boolean result: `>` (greater than), `<` (less than), `>=` (greater than or equal), `<=` (less than or equal), `==` (equal), `!=` (not equal).

**Example:** `score >= 90` returns `True` if the score is 90 or higher, which you might use to decide whether to print "A grade".

#### Conda — environment and package manager

A tool that installs Python packages and creates isolated environments so that different projects can use different versions of libraries without interfering with each other.

**Example:** You can use conda to create one environment with an older library for a school project and a separate environment with a newer library for a personal project.

#### Conditional expressions (ternary): x if condition else y

A compact single-line expression that returns one of two values depending on a condition, written as `value_if_true if condition else value_if_false`.

**Example:** `label = "adult" if age >= 18 else "minor"` sets `label` in one line instead of a four-line `if...else` block.

#### Constants (by convention, ALL_CAPS)

Values in a program that are intended never to change during execution, indicated by writing their names entirely in uppercase letters with underscores, though Python does not technically prevent reassignment.

**Example:** `MAX_PLAYERS = 4` and `GRAVITY = 9.8` are constants whose ALL_CAPS names signal to readers that these values should stay fixed.

#### continue — skip to next iteration

A statement that skips the rest of the current loop iteration and jumps directly to the next one, without exiting the loop entirely.

**Example:** `for n in range(10):` / `if n % 2 == 0: continue` / `print(n)` prints only the odd numbers by skipping the even ones.

#### Conv2D — convolutional layers

A Keras layer that applies a set of small filters (kernels) across an image to detect local patterns such as edges, textures, and shapes, forming the core building block of image-recognition networks.

**Example:** `Conv2D(32, (3, 3), activation="relu")` applies 32 different 3×3 filters to the input image to detect 32 different low-level features.

#### Converting input strings to numbers with int() / float()

The necessary step of wrapping `input()` with `int()` or `float()` to turn the text the user types into a numeric value that can be used in calculations.

**Example:** `age = int(input("Enter your age: "))` converts the typed text to an integer so you can write `age + 1` without a `TypeError`.

#### Convolutional Neural Networks (CNN)

A type of neural network architecture designed for processing grid-like data such as images, using convolutional layers to detect local patterns and pooling layers to reduce spatial size.

**Example:** The image-recognizing system in your phone's camera app is powered by a CNN that learned to identify objects from millions of labeled photos.

#### Creating a dictionary with {}

The syntax for making a new dictionary by enclosing comma-separated `key: value` pairs inside curly braces, with each key and its value separated by a colon.

**Example:** `ages = {"Alice": 12, "Bob": 13, "Carol": 11}` creates a dictionary mapping names to ages.

#### Creating a list with []

The syntax for making a new list in Python by placing zero or more comma-separated items inside square brackets.

**Example:** `empty = []` creates an empty list; `numbers = [1, 2, 3, 4, 5]` creates a list of five integers.

#### Creating a set with {} or set()

The two ways to make a set: curly braces with items (`{1, 2, 3}`) or the `set()` constructor with an iterable (`set([1, 2, 3])`); an empty set must be created with `set()` because `{}` creates an empty dictionary.

**Example:** `vowels = {"a", "e", "i", "o", "u"}` uses curly braces; `digits = set(range(10))` converts a range to a set.

#### Creating a tuple with ()

The syntax for making a new tuple by placing comma-separated items inside parentheses; the parentheses are actually optional — commas create the tuple.

**Example:** `colors = ("red", "green", "blue")` creates a tuple; `pair = 1, 2` also creates a tuple `(1, 2)` because the comma is what matters.

#### Creating a turtle.Screen() object

The act of calling `turtle.Screen()` to get a reference to the drawing window, which lets you set its size, background color, title, and respond to events.

**Example:** `screen = turtle.Screen(); screen.bgcolor("lightblue")` creates the screen object and sets its background color.

#### Creating a turtle.Turtle() object

The act of calling `turtle.Turtle()` to create a new turtle — a drawing cursor — that can be moved, turned, and styled to draw lines and shapes on the screen.

**Example:** `t = turtle.Turtle()` creates a turtle named `t`; then `t.forward(100)` moves it forward 100 pixels.

#### Creating custom modules (.py files)

The practice of saving Python functions and variables in a `.py` file that other programs can import, allowing code to be organized, shared, and reused across multiple projects.

**Example:** Saving `def greet(name): print("Hi", name)` in `helpers.py` lets another file do `from helpers import greet` and call it.

#### Creating instances of a class

The process of calling a class like a function to produce a new, independent object with its own copy of the class's attributes, initialized by `__init__()`.

**Example:** `my_dog = Dog("Buddy", 3)` creates a new `Dog` object; `your_dog = Dog("Max", 5)` creates a separate one.

#### CSV file reading basics

The process of reading a file whose values are separated by commas (Comma-Separated Values), typically done by splitting each line on commas or by using Python's `csv` module.

**Example:** A line `"Alice,90,A"` from a CSV file can be split with `.split(",")` to get `["Alice", "90", "A"]`.

#### CSV files — reading/writing structured data

Files that store tabular data (rows and columns) as plain text, with values on each row separated by commas, readable by Python's `csv` module for reliable handling of quoted fields and special characters.

**Example:** `import csv` / `with open("data.csv") as f: reader = csv.reader(f)` / `for row in reader: print(row)` reads each row as a list.

#### Data normalization/preprocessing

The step of transforming raw input data into a consistent numeric range — such as dividing pixel values by 255 to scale them from 0–255 to 0–1 — so that the neural network trains more stably and quickly.

**Example:** `x_train = x_train / 255.0` scales MNIST pixel values to the 0–1 range before feeding them to the model.

#### Debugging with print() statements

A simple technique of inserting temporary `print()` calls at strategic points in a program to display variable values and trace execution, helping pinpoint where unexpected behavior occurs.

**Example:** Adding `print("x =", x)` before a calculation confirms whether `x` holds the right value before the operation runs.

#### Default parameter values

Values specified in a function definition that are used when a caller does not supply the corresponding argument, making those parameters optional.

**Example:** `def greet(name, greeting="Hello"): print(greeting + ", " + name)` can be called as `greet("Alex")` or `greet("Alex", "Hi")`.

#### Defining a function with def

The way to create a reusable named block of code in Python by writing the `def` keyword, a function name, parentheses for parameters, a colon, and an indented body of statements.

**Example:** `def greet(name): print("Hello, " + name)` defines a function called `greet` that can be called many times with different names.

#### Dense layers — fully connected layers

A type of neural network layer in which every neuron in the layer receives input from every neuron in the previous layer, learning a weighted combination of all inputs.

**Example:** `Dense(128, activation="relu")` creates a layer with 128 neurons, each connected to every input, suitable for general-purpose learning tasks.

#### Depth-First Search (DFS) algorithm

A graph traversal algorithm that follows one path as deeply as possible before backtracking and trying another branch, exploring nodes by going as far as it can in one direction first.

**Example:** DFS on a file system explores an entire folder and all its subfolders before moving to the next folder at the same level.

#### DFS and BFS for maze solving

The application of both DFS (explore one path fully before trying another) and BFS (explore all paths level by level) to find a route through a maze, with BFS guaranteeing the shortest solution.

**Example:** In a grid maze, DFS might find a long winding path quickly; BFS will take longer but always returns the shortest path.

#### DFS with recursion and backtracking

An implementation of Depth-First Search where each node is visited by a recursive function call, and returning from the call automatically backtracks to the previous node to try another path.

**Example:** A recursive maze solver calls itself for each neighbor, marks the path as visited, and "backtracks" by unmarking when no forward path exists.

#### Dictionary comprehensions

A concise one-line syntax for creating a new dictionary by computing key-value pairs from an iterable, optionally filtered by a condition, all inside curly braces.

**Example:** `{name: len(name) for name in ["Alice", "Bob"]}` produces `{"Alice": 5, "Bob": 3}`.

#### Dictionary methods: .keys(), .values(), .items()

Built-in dictionary methods that return view objects: `.keys()` yields all keys; `.values()` yields all values; `.items()` yields all (key, value) pairs as tuples.

**Example:** `for subject, grade in report.items(): print(subject, grade)` iterates over every subject-grade pair in a report card dictionary.

#### Dictionary type (dict) — key-value pairs

A Python data type that stores an unordered collection of pairs where each unique key maps to an associated value, allowing fast lookup of values by their key.

**Example:** `student = {"name": "Alex", "grade": 8, "score": 95}` stores three related pieces of information under descriptive keys.

#### dir() — list attributes/methods of an object

A built-in function that returns a sorted list of names of all attributes and methods available on a given object or in the current scope, useful for exploring what you can do with a value.

**Example:** `dir("hello")` shows all the string methods like `upper`, `lower`, `split`, and many more.

#### Direction: setheading(angle)

A turtle method that sets the turtle's direction to an absolute angle in degrees, where 0 is right (east), 90 is up (north), 180 is left (west), and 270 is down (south).

**Example:** `t.setheading(90)` points the turtle straight up; `t.setheading(0)` points it to the right.

#### Division always returns float in Python 3

A rule in Python 3 stating that the `/` operator always produces a floating-point result even when both operands are integers and the quotient is a whole number.

**Example:** `10 / 2` evaluates to `5.0`, not `5`; use `10 // 2` if you need the integer result `5`.

#### Docstrings — documenting functions

A string literal placed as the very first statement in a function, class, or module body, surrounded by triple quotes, that describes what the function does and can be read by the `help()` function.

**Example:** `def area(r): """Return the area of a circle with radius r.""" return 3.14 * r * r` includes a docstring describing the function's purpose.

#### Drawing a sine wave with turtle and math

A turtle graphics project that combines `math.sin()` with a loop to move the turtle along a wavy path, demonstrating how mathematical functions can produce visual curves.

**Example:** `for x in range(-300, 300): t.goto(x, 100 * math.sin(math.radians(x)))` draws a smooth sine wave across the screen.

#### Drawing fractals with recursion and turtle

A turtle graphics technique that uses recursive functions to draw self-similar patterns such as the Sierpiński triangle or Koch snowflake, where each level of recursion draws smaller copies of the same shape.

**Example:** A recursive `branch(length)` function draws a line, then calls itself twice with a shorter length at two angles, building a tree-like fractal.

#### Drawing shapes on a canvas

The process of using drawing library functions to render geometric shapes — such as rectangles, circles, and lines — by specifying coordinates, sizes, and colors programmatically.

**Example:** `canvas.fill_style = "red"; canvas.fill_circle(200, 150, 50)` draws a filled red circle centered at (200, 150) with radius 50.

#### Drawing shapes: circle(radius), drawing squares/polygons with loops

Turtle drawing techniques: `circle(r)` draws a circle with radius `r`; squares and regular polygons are drawn by repeating `forward()` and `right()` in a loop, turning by 360 divided by the number of sides.

**Example:** `for _ in range(6): t.forward(80); t.right(60)` draws a regular hexagon by turning 60° (360°÷6) six times.

#### Dropout — regularization to prevent overfitting

A Keras layer that randomly sets a fraction of neuron outputs to zero during training, forcing the network not to rely too heavily on any single neuron and reducing overfitting to training data.

**Example:** `Dropout(0.5)` randomly turns off 50% of neurons during each training step, which helps the model generalize better to new data.

#### DRY principle (Don't Repeat Yourself)

A software design principle stating that every piece of knowledge or logic should exist in exactly one place in a codebase, reducing duplication and making changes easier to apply consistently.

**Example:** If you find yourself copying and pasting the same five lines in three places, the DRY principle suggests putting those lines in a function and calling it three times instead.

#### DRY principle and code reuse patterns

The combined practice of avoiding duplicated logic (Don't Repeat Yourself) and the specific coding patterns — such as functions, loops, and modules — that enable code to be written once and called many times.

**Example:** Extracting repeated password-checking logic into a `validate_password(pw)` function lets every part of the program call one shared, maintainable function instead of containing its own copy.

#### elif (else-if) chains

A way to test multiple conditions in sequence by adding one or more `elif` clauses between an `if` and an optional `else`, so Python checks each condition in order and runs only the first matching block.

**Example:** Checking a grade: `if score >= 90: ... elif score >= 70: ... else: ...` covers A, passing, and failing in three branches.

#### else clause in try/except

An optional block after the `except` clauses that runs only if the `try` block completed without raising any exception, keeping successful-path code separate from error-handling code.

**Example:** `try: n = int(input(...))` / `except ValueError: print("Not a number")` / `else: print("Got:", n)` prints the value only when conversion succeeded.

#### else clause on loops

An optional block that follows a `for` or `while` loop and runs only if the loop finished normally — that is, it was not terminated by a `break` statement.

**Example:** `for item in inventory:` / `if item == target: break` / `else: print("Not found")` reports only when the item was never found.

#### enumerate() — iterate with index and value

A built-in function that wraps an iterable and yields pairs of (index, value) during a `for` loop, so you can access both the position of an item and the item itself at the same time.

**Example:** `for i, name in enumerate(["Alice", "Bob", "Carol"]): print(i, name)` prints `0 Alice`, `1 Bob`, `2 Carol`.

#### Escape characters (\n, \t, \\, \")

Special two-character sequences beginning with a backslash that represent characters difficult to type directly inside a string, such as a newline `\n`, a tab `\t`, a literal backslash `\\`, or a quote `\"`.

**Example:** `print("Line 1\nLine 2")` prints two separate lines because `\n` tells Python to start a new line.

#### Escaping special characters with \

The practice of placing a backslash before a regex metacharacter (such as `.`, `*`, `+`, `(`, `)`) to match it literally rather than treating it as a special operator.

**Example:** `r"\."` matches a literal period, while `r"."` matches any single character.

#### Event handling: onscreenclick(function)

A turtle screen method that registers a callback function to be called whenever the user clicks on the drawing window, passing the click's x and y coordinates to the function.

**Example:** `screen.onscreenclick(draw_dot)` makes the turtle draw a dot wherever the user clicks on the canvas.

#### Event-driven programming model

A programming paradigm where the flow of execution is determined by user actions or system events — such as mouse clicks, key presses, or timers — rather than by a fixed sequential order.

**Example:** A turtle graphics program that draws a dot wherever the user clicks uses event-driven programming: the click event triggers the drawing function.

#### except ExceptionType as e — catching specific exceptions

A way to catch only a particular type of exception and bind the exception object to a variable, allowing you to print a detailed error message or take specific action for that error.

**Example:** `except ValueError as e: print("Bad input:", e)` catches only `ValueError` and prints the exception's message.

#### Exception hierarchy — understanding Exception base class

The tree-shaped organization of Python's built-in exception types, where more general classes sit higher up (such as `Exception`) and specific errors like `ValueError` and `TypeError` are subclasses further down.

**Example:** `except Exception as e:` catches almost any error because `ValueError`, `TypeError`, and most others all inherit from `Exception`.

#### Exponentiation (**)

An arithmetic operator that raises a number to a power, computing the result of multiplying a base by itself a given number of times.

**Example:** `2 ** 8` equals `256`; `9 ** 0.5` equals `3.0`, the square root of 9.

#### f-strings (formatted string literals)

A modern Python string syntax where an `f` before the opening quote allows expressions inside `{}` braces to be evaluated and inserted directly into the string, making formatting concise and readable.

**Example:** `name = "Alex"; age = 12; f"Hello, {name}! You are {age} years old."` produces `"Hello, Alex! You are 12 years old."`.

#### Feedforward networks

A neural network architecture where information flows in one direction only — from the input layer through hidden layers to the output layer — with no cycles or feedback connections.

**Example:** A simple Keras `Sequential` model with `Dense` layers is a feedforward network; input goes in one end and a prediction comes out the other.

#### File modes: 'r' (read), 'w' (write), 'a' (append), 'b' (binary)

Options passed to `open()` that determine how the file is accessed: `'r'` opens for reading (default); `'w'` opens for writing and erases existing content; `'a'` appends to existing content; `'b'` opens in binary mode for non-text files.

**Example:** `open("log.txt", "a")` opens the file so that each new `write()` adds to the end without deleting previous lines.

#### file.close() — close file handle

A file method that flushes any unwritten data, releases system resources held by the open file, and marks the file object as unusable; failing to close files can cause data loss or resource leaks.

**Example:** After reading or writing, calling `f.close()` ensures the file is properly saved and released.

#### file.read() — read entire file as string

A file method that reads the entire contents of an open file and returns them as a single string.

**Example:** `content = f.read()` stores every byte of the file as one long string in `content`.

#### file.readline() — read one line at a time

A file method that reads and returns the next line of an open file as a string, advancing the file's internal cursor; returns an empty string when the end of the file is reached.

**Example:** Calling `f.readline()` repeatedly returns each line one by one until the file is exhausted.

#### file.readlines() — read all lines into a list

A file method that reads all lines of an open file and returns them as a list of strings, where each string ends with a newline character `\n`.

**Example:** `lines = f.readlines()` gives a list like `["Line 1\n", "Line 2\n", "Line 3\n"]`.

#### file.write() — write string to file

A file method that writes a string to an open file at the current cursor position; it does not automatically add a newline, so you must include `\n` explicitly if needed.

**Example:** `f.write("Hello, world!\n")` writes the text followed by a newline to the file.

#### Fill: begin_fill(), end_fill()

A pair of turtle methods that together color in the interior of any shape drawn between them: call `begin_fill()` before drawing the shape and `end_fill()` after, and Python fills the enclosed area with the current fill color.

**Example:** `t.fillcolor("green"); t.begin_fill(); draw_triangle(); t.end_fill()` draws a solid green triangle.

#### filter() — filter items by condition

A built-in function that applies a test function to each item in an iterable and returns an iterator containing only the items for which the test returns `True`.

**Example:** `list(filter(lambda x: x > 0, [-1, 2, -3, 4]))` returns `[2, 4]`, keeping only positive numbers.

#### finally clause — always executes

An optional block at the end of a `try/except` structure that runs regardless of whether an exception occurred or not, commonly used to release resources such as closing a file or a network connection.

**Example:** `try: f = open("data.txt")` / `finally: f.close()` ensures the file is closed even if an error happens during reading.

#### Flatten layer — reshape for dense layers

A Keras layer that reshapes a multi-dimensional tensor (such as a 2D image feature map) into a one-dimensional vector, bridging the gap between convolutional layers and fully connected dense layers.

**Example:** After `Conv2D` and `MaxPooling2D` layers, a `Flatten()` layer converts the 2D grid of features into a flat list that `Dense` layers can process.

#### float() — convert to float

A built-in function that converts an integer or a numeric string into a floating-point number with a decimal point.

**Example:** `float("3.14")` returns `3.14`; `float(5)` returns `5.0`.

#### Floats (float) — decimal numbers

A Python data type that represents numbers with a decimal point, stored in a format that allows a wide range of values but may introduce tiny rounding differences for some calculations.

**Example:** `3.14`, `-0.5`, and `2.0` are floats; `1/3` evaluates to `0.3333333333333333` rather than the exact fraction.

#### for loop with range()

A common pattern that uses `range()` to generate a sequence of integers and repeats a block of code for each integer, providing a simple way to loop a specific number of times.

**Example:** `for i in range(5): print(i)` prints `0`, `1`, `2`, `3`, and `4`.

#### for loop — iterating over a sequence

A control-flow statement that repeats a block of code once for each item in a sequence — such as a list, string, or range — automatically moving to the next item after each repetition.

**Example:** `for color in ["red", "green", "blue"]: print(color)` prints each color on its own line.

#### from ... import * — import all (use sparingly)

A way to import every public name from a module directly into the current namespace at once; generally discouraged because it can create name conflicts and makes it hard to tell where a name came from.

**Example:** `from math import *` lets you write `sqrt(4)` directly, but may overwrite a variable you named `sqrt` earlier.

#### from ... import ... — import specific names

A variation of the `import` statement that loads only the specified names from a module directly into the current namespace, so they can be used without the module name prefix.

**Example:** `from math import sqrt, pi` lets you write `sqrt(16)` and `pi` instead of `math.sqrt(16)` and `math.pi`.

#### Frozensets (immutable sets)

A variant of the set data type whose contents cannot be changed after creation, making frozensets hashable and usable as dictionary keys or elements of other sets.

**Example:** `fs = frozenset([1, 2, 3])` creates an immutable set; trying `fs.add(4)` raises an `AttributeError`.

#### Function parameters (positional)

Variables listed inside the parentheses of a `def` statement that receive the values passed when the function is called, matched by their position in the argument list.

**Example:** In `def add(a, b): return a + b`, calling `add(3, 5)` assigns `3` to `a` and `5` to `b` by position.

#### Functions that return None implicitly

The behavior of Python functions that finish executing without a `return` statement, automatically sending the special value `None` back to any code that called them.

**Example:** `def say_hi(): print("Hi")` has no `return`, so `x = say_hi()` stores `None` in `x` even though "Hi" was printed.

#### Functions without return return None

A rule in Python stating that any function that reaches the end of its body without executing a `return` statement automatically returns the value `None` to the caller.

**Example:** `def greet(): print("Hi")` returns `None`; `result = greet()` stores `None` in `result` even though "Hi" was printed.

#### .get() method — safe key access with default

A dictionary method that returns the value for a specified key if the key exists, or a default value (such as `None` or a specified fallback) if the key is not present, without raising an error.

**Example:** `student.get("score", 0)` returns the score if it exists or `0` if the key `"score"` was never added.

#### global keyword — access global variable inside function

A declaration inside a function that tells Python a particular variable name refers to the global-scope variable rather than creating a new local one, allowing the function to read and modify the global value.

**Example:** `def add_point(): global score; score += 1` modifies the global `score` variable instead of creating a local copy.

#### Global scope — variables at module level

The area of a program outside all functions where variables can be accessed from anywhere in the same file, including inside functions that reference them (but do not reassign them without the `global` keyword).

**Example:** `MAX_SIZE = 100` defined at the top of a file is a global variable readable inside any function in that file.

#### Graph — nodes and edges

A data structure consisting of a set of nodes (also called vertices) representing entities and edges connecting pairs of nodes, used to model relationships such as friendships, roads, or computer networks.

**Example:** A social network is a graph where each person is a node and each friendship is an edge connecting two nodes.

#### help() — display documentation

A built-in function that prints the docstring and usage information for a function, module, class, or method, providing a quick reference without leaving the Python shell.

**Example:** `help(str.split)` displays an explanation of how the `.split()` method works, including its parameters.

#### Hex color values (#FA057F)

A way of specifying a color as a six-digit hexadecimal number preceded by `#`, where the first two digits set red intensity, the middle two set green, and the last two set blue, each ranging from `00` (none) to `FF` (maximum).

**Example:** `"#FF0000"` is pure red; `"#00FF00"` is pure green; `"#FA057F"` is a bright pink used in design tools and web pages.

#### Hiding/showing turtle: hideturtle(), showturtle()

Turtle methods that control whether the turtle cursor is visible on screen: `hideturtle()` makes it invisible while still drawing; `showturtle()` makes it visible again.

**Example:** Calling `t.hideturtle()` before a complex drawing makes it appear faster because the screen doesn't need to redraw the cursor at every step.

#### if statement

A control-flow statement that executes a block of code only when a specified condition evaluates to `True`, allowing programs to make decisions.

**Example:** `if score >= 60: print("You passed!")` prints the message only when the score is 60 or higher.

#### if...else block

A control-flow structure that executes one block of code when a condition is `True` and a different block when the condition is `False`, ensuring that exactly one of the two paths always runs.

**Example:** `if temperature > 30: print("Hot day")` / `else: print("Nice day")` prints exactly one message based on the temperature.

#### Image.open(path) — open an image

A Pillow function that opens an image file from a given file path and returns an Image object that you can inspect, modify, and save.

**Example:** `img = Image.open("photo.jpg")` loads the image so you can call `img.size` to get its dimensions.

#### image.show() — display an image

A Pillow method that opens the image in the operating system's default image viewer, useful for quickly checking what an image looks like during development.

**Example:** `img.show()` opens the image in Preview on a Mac or Photos on Windows without saving a separate file.

#### import ... as ... — alias a module

A way to import a module under a shorter or more convenient name, so you type that alias instead of the full module name throughout your code.

**Example:** `import numpy as np` allows you to write `np.array([1, 2, 3])` instead of `numpy.array([1, 2, 3])`.

#### import matplotlib.pyplot as plt

The standard way to import the plotting sub-module of matplotlib, giving it the short alias `plt` so you can call `plt.plot()`, `plt.show()`, and other functions concisely.

**Example:** `import matplotlib.pyplot as plt; plt.plot([1, 2, 3], [4, 1, 7]); plt.show()` creates and displays a simple line graph.

#### import numpy as np

The standard way to import NumPy, using the alias `np` so that all NumPy functions can be called with the shorter prefix, following a near-universal Python convention.

**Example:** After `import numpy as np`, you write `np.zeros(5)` instead of `numpy.zeros(5)` throughout your code.

#### import statement

A statement that loads a module (a file of Python code) into the current program, making the module's functions, classes, and variables available under the module's name.

**Example:** `import math` loads the math module so you can call `math.sqrt(16)` to get `4.0`.

#### import turtle

The statement that loads Python's built-in turtle graphics module, making all turtle drawing functions and classes available for creating visual programs.

**Example:** `import turtle` is always the first line in a turtle program; after it, you can create a `turtle.Turtle()` object and start drawing.

#### Importing re module

The step of writing `import re` at the top of a Python file to load the regular expressions module and make its functions — such as `re.search()`, `re.findall()`, and `re.sub()` — available for use.

**Example:** After `import re`, you can call `re.findall(r"\w+", sentence)` to extract all words from a sentence.

#### Indentation as syntax (whitespace rules)

The rule in Python that the spaces or tabs at the beginning of a line determine which block of code a statement belongs to, making indentation a required part of the language rather than just a style choice.

**Example:** The body of an `if` statement must be indented four spaces; if it is not, Python raises an `IndentationError`.

#### Infinite loops and how to avoid them

A loop whose condition never becomes `False`, causing it to run forever; avoided by making sure the loop variable changes with each iteration or by including a `break` statement that eventually triggers.

**Example:** `while True: ...` is intentionally infinite and must contain a `break`; forgetting to write `count += 1` inside `while count < 10:` also creates an accidental infinite loop.

#### Inheritance — basics

A feature of object-oriented programming where a new class (child or subclass) is created by extending an existing class (parent or superclass), automatically gaining all of the parent's attributes and methods.

**Example:** A `Cat` class that inherits from an `Animal` class automatically has `Animal`'s `name` attribute and `eat()` method without redefining them.

#### __init__() — constructor method

A special method in a Python class that is automatically called when a new object is created, used to set up the object's initial attribute values.

**Example:** `def __init__(self, name, age): self.name = name; self.age = age` runs automatically when you write `Dog("Buddy", 3)`.

#### Input validation basics

The practice of checking that the value a user entered meets expected requirements — such as being a number, being within a certain range, or not being empty — before using it in calculations.

**Example:** After calling `input()`, you might check `if response.isdigit()` before converting to `int()` to avoid a crash if the user types a letter.

#### input() function — read text from user

A built-in function that pauses the program, waits for the user to type something and press Enter, and returns the typed text as a string.

**Example:** `name = input()` stores whatever the user types into the variable `name`.

#### input() — read user input

A built-in Python function that pauses program execution, displays an optional prompt string, waits for the user to type a line of text and press Enter, then returns that text as a string.

**Example:** `name = input("Enter your name: ")` stores whatever the user types in `name`.

#### Installing Python locally

The process of downloading the Python interpreter from python.org and setting it up on your computer so you can run Python programs without needing an internet connection or a web-based tool.

#### int() — convert to integer

A built-in function that converts a value — such as a float or a string of digits — into an integer, truncating any decimal part for floats and raising a `ValueError` if the string is not a valid number.

**Example:** `int("42")` returns the integer `42`; `int(3.9)` returns `3` by truncating (not rounding) the decimal.

#### int(), float(), str(), bool() — type conversions

Four built-in functions that convert a value from one data type to another: `int()` to whole number, `float()` to decimal, `str()` to text, and `bool()` to `True` or `False`.

**Example:** `int("5") + 3` gives `8`; `str(100)` gives `"100"` for use in string concatenation.

#### Integer division (//)

An arithmetic operator that divides two numbers and rounds the result down to the nearest whole number, discarding any decimal remainder.

**Example:** `17 // 5` gives `3` because 5 goes into 17 three whole times with 2 left over.

#### Integers (int) — whole numbers, positive and negative

A Python data type that represents whole numbers with no decimal point, which can be positive, negative, or zero, and supports arithmetic operations exactly without rounding.

**Example:** `3`, `-17`, and `0` are all integers; you can compute `7 // 2` to get the integer `3` with no remainder kept.

#### ipycanvas — canvas drawing in Jupyter

A Python library for Jupyter notebooks that wraps the HTML5 Canvas API, allowing you to draw shapes, images, and text programmatically inside a notebook cell.

**Example:** `from ipycanvas import Canvas; c = Canvas(width=400, height=300); c.fill_rect(10, 10, 100, 50)` draws a rectangle in a Jupyter notebook cell.

#### isinstance() — check if object is an instance of a type

A built-in function that returns `True` if a given object is an instance of the specified class or one of its subclasses, and `False` otherwise, providing a safer type check than `type() ==`.

**Example:** `isinstance(42, int)` returns `True`; `isinstance("hello", int)` returns `False`.

#### Iterating over a dictionary

The process of using a `for` loop to visit each key (by default), or each value or key-value pair when using `.values()` or `.items()`, to process all entries in a dictionary.

**Example:** `for key in d: print(key, d[key])` prints every key and its associated value from dictionary `d`.

#### Iterating over a list with for

The common pattern of using a `for` loop to visit each item in a list one at a time, processing or printing each item in sequence.

**Example:** `for score in scores: print(score)` prints every score in the list on its own line.

#### Iterating over file lines with for

The common pattern of using a `for` loop directly on a file object to read one line at a time without loading the entire file into memory, which is efficient for large files.

**Example:** `with open("words.txt") as f:` / `for line in f: print(line.strip())` prints each line without the trailing newline.

#### Jupyter Notebooks — interactive computational environment

A web-based tool that lets you mix runnable Python code, text explanations, and charts in a single document made of cells, so you can tell a story with your data and code together.

**Example:** A data scientist writes a heading cell explaining a graph, then a code cell that draws the graph, and both appear together in the same notebook.

#### JupyterLab — enhanced Jupyter environment

An updated, more powerful version of Jupyter Notebooks that adds a file browser, multiple tabs, and a terminal window alongside your notebooks in one browser-based workspace.

#### keras library overview

A high-level Python library for building and training neural networks, designed to make deep learning accessible by providing simple, readable building blocks for defining model architectures.

**Example:** `from tensorflow import keras` gives you access to tools for building image classifiers, text analyzers, and other AI models in just a few lines of code.

#### Keyboard event handlers (turtle onkey)

A turtle function that registers a callback function to be called whenever a specific keyboard key is pressed, enabling interactive keyboard-controlled programs.

**Example:** `screen.onkey(move_up, "Up")` calls `move_up()` whenever the user presses the Up arrow key.

#### Keyword arguments

A way of calling a function by explicitly naming each parameter and its value, so arguments can be passed in any order regardless of their position in the function definition.

**Example:** `draw_box(width=100, height=50, color="blue")` makes it clear what each value means and allows any order.

#### Lambda functions (anonymous functions)

A way to define a small, one-expression function without a name using the `lambda` keyword, often used for short operations passed as arguments to other functions.

**Example:** `double = lambda x: x * 2` creates an unnamed function stored in `double`; `double(5)` returns `10`.

#### len() — length of a sequence

A built-in Python function that returns the number of items in any sequence or collection, including strings (characters), lists (elements), tuples, dictionaries (keys), and sets.

**Example:** `len("hello")` returns `5`; `len([1, 2, 3])` returns `3`; `len({})` returns `0`.

#### len() — number of items in a list

A built-in function that returns an integer equal to the number of items currently stored in a list (or any sequence).

**Example:** `len([10, 20, 30])` returns `3`; `len([])` returns `0` for an empty list.

#### List comprehensions

A concise one-line syntax for creating a new list by applying an expression to each item in an iterable, optionally filtered by a condition, all inside square brackets.

**Example:** `[x * 2 for x in range(5)]` produces `[0, 2, 4, 6, 8]`; `[x for x in scores if x >= 60]` keeps only passing scores.

#### List concatenation and repetition

The ability to join two lists using `+` to create a new combined list, or to repeat a list's items using `*` a specified number of times.

**Example:** `[1, 2] + [3, 4]` produces `[1, 2, 3, 4]`; `["go"] * 3` produces `["go", "go", "go"]`.

#### List indexing (0-based, negative indexing)

The method of accessing a single item in a list by its position, where the first item is at index `0`; negative indices count from the end, with `-1` being the last item.

**Example:** For `colors = ["red", "green", "blue"]`, `colors[0]` is `"red"` and `colors[-1]` is `"blue"`.

#### List methods as examples of OOP

An observation that Python lists are objects, and calling methods like `.append()` or `.sort()` on them is a real-world example of object-oriented programming where data and behavior are bundled together.

**Example:** `my_list.append(5)` is OOP: `my_list` is the object and `.append()` is a method that modifies that specific list.

#### List methods: .append(), .insert(), .extend()

Built-in list methods that add items: `.append(item)` adds one item to the end; `.insert(index, item)` adds one item at a specific position; `.extend(iterable)` adds all items from another iterable to the end.

**Example:** `fruits.append("mango")` adds `"mango"` at the end; `fruits.insert(0, "apple")` puts `"apple"` at the front.

#### List methods: .index(), .count()

Built-in list methods that search a list: `.index(value)` returns the index of the first occurrence of a value (raises `ValueError` if not found); `.count(value)` returns how many times a value appears.

**Example:** `["a","b","c"].index("b")` returns `1`; `[1,2,2,3].count(2)` returns `2`.

#### List methods: .remove(), .pop(), .clear()

Built-in list methods that remove items: `.remove(value)` deletes the first occurrence of a value; `.pop(index)` removes and returns the item at the given index (last item if no index given); `.clear()` removes all items.

**Example:** `scores.pop()` removes and returns the last score; `names.remove("Alex")` deletes the first `"Alex"` found.

#### List methods: .sort(), .reverse(), .copy()

Built-in list methods that rearrange or duplicate a list: `.sort()` sorts items in place (ascending by default); `.reverse()` reverses the order in place; `.copy()` returns a new list with the same items.

**Example:** `scores.sort()` rearranges the list from lowest to highest; `steps.reverse()` flips the order of the steps.

#### List slicing

The operation of extracting a sub-list from a list by specifying a start index, an end index (exclusive), and an optional step, using the same `[start:end:step]` syntax as string slicing.

**Example:** `numbers[1:4]` returns items at indices 1, 2, and 3; `numbers[::-1]` returns a reversed copy of the entire list.

#### List type (list) — ordered, mutable collection

A Python data type that stores an ordered sequence of items that can be of any type; lists can be changed after creation by adding, removing, or replacing items.

**Example:** `fruits = ["apple", "banana", "cherry"]` creates a list of three strings that can be modified later.

#### list(), tuple(), set(), dict() — collection constructors

Built-in functions that create a new collection of the specified type, optionally from an existing iterable; `dict()` can also accept keyword arguments to set initial key-value pairs.

**Example:** `list(range(5))` produces `[0, 1, 2, 3, 4]`; `set("hello")` produces `{'h', 'e', 'l', 'o'}`.

#### Literate programming with Jupyter

A style of writing programs in Jupyter notebooks where code cells are interspersed with narrative text cells, so a notebook reads like an illustrated document that also happens to run.

**Example:** A Jupyter notebook might have a markdown cell explaining a statistical formula, followed immediately by a code cell that implements and tests it.

#### Local scope — variables inside functions

The area of a program where a variable is accessible; variables created inside a function exist only for the duration of that function call and cannot be seen or used by code outside the function.

**Example:** The variable `total` created inside `def calculate():` disappears when the function finishes and cannot be accessed from the rest of the program.

#### Logical operators: and, or, not

Operators that combine or invert Boolean values: `and` is `True` only when both sides are `True`; `or` is `True` when at least one side is `True`; `not` flips `True` to `False` and vice versa.

**Example:** `age >= 10 and age <= 13` is `True` only when age is between 10 and 13 inclusive.

#### Loop counter variable (i, j)

A variable — commonly named `i` or `j` by convention — that tracks which iteration of a loop is currently running, typically used as the loop variable in `for` loops with `range()`.

**Example:** `for i in range(10): print(i)` uses `i` as the counter that goes from `0` to `9`.

#### Loss functions: categorical_crossentropy

A commonly used loss function for multi-class classification problems that measures how different the model's predicted probability distribution is from the true one-hot encoded labels.

**Example:** If the model predicts `[0.1, 0.8, 0.1]` for an image that is truly class 1 (`[0, 1, 0]`), categorical crossentropy gives a low loss because the prediction was mostly correct.

#### LSTM networks — overview

A type of recurrent neural network with special memory cells and gating mechanisms that help it learn long-range dependencies in sequences without losing earlier information.

**Example:** An LSTM trained on text can generate coherent sentences because it "remembers" words from many steps back in the sequence.

#### Machine learning overview — supervised vs unsupervised

An introduction to the branch of artificial intelligence where computers learn patterns from data: supervised learning trains on labeled examples (input → correct answer); unsupervised learning finds hidden patterns in unlabeled data.

**Example:** Training a model to classify photos of cats and dogs using labeled images is supervised; grouping customers into segments without labels is unsupervised.

#### map() and filter() — functional programming basics

Two higher-order functions that apply a function to a collection without explicit loops, following a functional programming style: `map()` transforms each item; `filter()` selects items that pass a test.

**Example:** `list(map(str.upper, ["a","b","c"]))` gives `["A","B","C"]`; `list(filter(lambda x: x>0, [-1,2,-3,4]))` gives `[2,4]`.

#### map() — apply function to each item

A built-in function that applies a given function to every item in an iterable and returns an iterator of the results, avoiding the need to write an explicit loop for simple transformations.

**Example:** `list(map(int, ["1", "2", "3"]))` converts a list of strings to `[1, 2, 3]`.

#### match/case statement (Python 3.10+, structural pattern matching)

A control-flow statement introduced in Python 3.10 that compares a value against a series of patterns and executes the block belonging to the first matching pattern, similar to a switch statement in other languages.

**Example:** `match command:` / `case "quit": exit()` / `case "help": show_help()` routes program flow based on the user's command.

#### math — mathematical functions

A standard library module that provides mathematical functions and constants, such as square root, trigonometric functions, logarithms, and the value of pi, for use in calculations.

**Example:** `import math; math.sqrt(144)` returns `12.0`.

#### math.radians() — degrees to radians

A function from the `math` module that converts an angle from degrees to radians, which is the unit required by `math.sin()`, `math.cos()`, and other trigonometric functions.

**Example:** `math.radians(180)` returns `3.141592...` (π), because 180 degrees equals π radians.

#### math.sin(), math.cos(), math.pi

Functions and a constant from the `math` module: `sin(x)` and `cos(x)` return the sine and cosine of angle `x` in radians; `math.pi` is the constant π ≈ 3.14159.

**Example:** `math.sin(math.pi / 2)` returns `1.0` because the sine of 90 degrees (π/2 radians) is 1.

#### math.sqrt(), math.floor(), math.ceil()

Three functions from the `math` module: `sqrt(x)` returns the square root of `x`; `floor(x)` rounds down to the nearest integer; `ceil(x)` rounds up to the nearest integer.

**Example:** `math.floor(3.9)` returns `3`; `math.ceil(3.1)` returns `4`; `math.sqrt(25)` returns `5.0`.

#### matplotlib library overview

A popular third-party Python library for creating static, animated, and interactive charts and graphs, widely used in data science and scientific computing to visualize data.

**Example:** `import matplotlib.pyplot as plt` gives you access to functions for making line plots, bar charts, histograms, and scatter plots.

#### max(), min() — find maximum/minimum

Built-in functions that return the largest or smallest value from a collection of items or from multiple arguments; they also accept a `key` function to customize comparison.

**Example:** `max([3, 7, 1, 9])` returns `9`; `min("apple", "banana", "cherry")` returns `"apple"` (alphabetically first).

#### MaxPooling2D — pooling layers

A Keras layer that reduces the spatial size of a feature map by taking the maximum value within each small window, making the representation smaller and more robust to small shifts.

**Example:** `MaxPooling2D((2, 2))` halves both the width and height of the feature map by keeping only the largest value in each 2×2 block.

#### Meaningful variable and function names

The practice of choosing names that clearly describe the purpose of a variable or the action of a function, making code self-documenting and easier to read without extra comments.

**Example:** `calculate_total_price()` is a meaningful function name; `f()` is not — the reader cannot tell what `f()` does without reading its body.

#### Meaningful variable names

The practice of choosing variable names that clearly describe the data they hold, making programs easier to read and debug than if single-letter or vague names were used.

**Example:** Using `student_count` instead of `x` immediately tells a reader that the variable stores the number of students.

#### Methods — functions belonging to an object

Functions defined inside a class that operate on the object's own data; called using dot notation and automatically receive the object itself as their first argument.

**Example:** `turtle.forward(100)` calls the `forward` method on a turtle object, moving that specific turtle forward 100 units.

#### Metrics: accuracy

A performance measurement for classification models that reports the fraction of predictions that exactly matched the true labels, expressed as a decimal or percentage.

**Example:** An accuracy of `0.97` means the model correctly classified 97 out of every 100 test examples.

#### MNIST dataset — handwritten digit recognition

A classic benchmark dataset of 70,000 grayscale images of handwritten digits (0–9), each 28×28 pixels, widely used to learn and test image classification models.

**Example:** Training a neural network on MNIST to correctly identify handwritten digits is one of the most common introductory machine learning exercises.

#### mobilechelonian — turtle graphics in Jupyter

A Python library that provides a turtle graphics environment that runs inside a Jupyter notebook cell, making turtle-style drawing accessible without a separate graphics window.

**Example:** `from mobilechelonian import Turtle; t = Turtle(); t.forward(100); t.right(90)` draws inside a Jupyter cell.

#### model.compile() — loss function, optimizer, metrics

A Keras method that configures the model for training by specifying how to measure error (loss function), how to update weights (optimizer), and what statistics to track (metrics).

**Example:** `model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])` prepares the model to minimize classification error.

#### model.evaluate() — testing accuracy

A Keras method that measures the model's performance on a separate test dataset that was not used during training, returning the loss and any tracked metrics.

**Example:** `loss, acc = model.evaluate(x_test, y_test)` gives the final accuracy on data the model has never seen.

#### model.fit() — training the model

A Keras method that trains the model by feeding it batches of training data, computing the loss, and updating weights repeatedly for a specified number of epochs.

**Example:** `model.fit(x_train, y_train, epochs=10, batch_size=32)` trains the model for 10 passes through the training data.

#### model.predict() — making predictions

A Keras method that passes new input data through the trained model and returns the output, such as class probabilities or regression values, for each input sample.

**Example:** `predictions = model.predict(x_new)` returns an array of softmax probabilities for each image in `x_new`.

#### Modularity — breaking code into functions

The practice of dividing a large program into smaller, named functions that each do one clearly defined task, making the overall program easier to understand, test, and change.

**Example:** Instead of one long script, a game might have separate functions: `draw_board()`, `get_player_move()`, and `check_winner()`, each handling one responsibility.

#### Modulo operator (%) — remainder after division

An arithmetic operator that returns the remainder left over after dividing one number by another, useful for checking whether a number is even or odd and for cycling through ranges.

**Example:** `17 % 5` gives `2` because 17 divided by 5 is 3 with a remainder of 2; `n % 2 == 0` checks whether `n` is even.

#### Mouse click event handlers (onscreenclick)

A turtle function that registers a callback function to be automatically called with the (x, y) coordinates whenever the user clicks on the drawing window.

**Example:** `screen.onscreenclick(handle_click)` registers `handle_click` so that every click triggers `handle_click(x, y)` with the click location.

#### Movement: forward(), backward(), left(), right()

Four fundamental turtle methods that move and turn the turtle: `forward(n)` moves `n` pixels in the current direction; `backward(n)` moves backward; `left(angle)` turns left by `angle` degrees; `right(angle)` turns right.

**Example:** `t.forward(100); t.right(90)` moves the turtle forward then turns it to draw one side and corner of a square.

#### Multi-line strings (triple quotes)

A string that spans more than one line, created by surrounding the text with three single quotes `'''` or three double quotes `"""`, preserving all line breaks inside.

**Example:** `"""Line one\nLine two\nLine three"""` stores three lines of text in a single string variable.

#### Multiple assignment (a, b = 1, 2)

A Python feature that assigns values to several variables in a single statement by matching each name on the left with the corresponding value on the right.

**Example:** `x, y = 10, 20` sets `x` to `10` and `y` to `20` at the same time; you can also use `a, b = b, a` to swap two values.

#### __name__ == "__main__" guard

A common Python pattern that runs a block of code only when the script is executed directly (not imported as a module), by checking whether the special variable `__name__` equals `"__main__"`.

**Example:** `if __name__ == "__main__": main()` prevents `main()` from running when another file imports the module for its functions.

#### __name__ == "__main__" guard for runnable modules

The pattern of wrapping the main execution code of a Python script inside `if __name__ == "__main__":` so that the code runs when the file is executed directly but is skipped when the file is imported as a module by another script.

**Example:** A helper module `utils.py` with `if __name__ == "__main__": run_tests()` runs self-tests only when you execute it directly, not when another script imports its functions.

#### Named colors (red, green, blue, orange, etc.)

Pre-defined color names built into turtle graphics and many other Python libraries that let you specify colors using easy-to-remember English words instead of numeric codes.

**Example:** `t.color("tomato")` and `t.color("dodgerblue")` use named colors; turtle supports over 100 such names including `"lime"`, `"gold"`, and `"orchid"`.

#### Nested dictionaries

A dictionary in which some or all of the values are themselves dictionaries, allowing complex hierarchical data to be stored and accessed with multiple levels of keys.

**Example:** `school = {"Alice": {"grade": 8, "score": 90}, "Bob": {"grade": 7, "score": 85}}` stores each student's data under their name.

#### Nested if statements

An `if` (or `if...else`) statement placed inside the body of another `if` statement, allowing programs to check a second condition only after a first condition has been confirmed true.

**Example:** `if is_member: if balance >= 10: print("Purchase allowed")` checks membership first, then balance.

#### Nested lists (lists of lists)

A list that contains other lists as its elements, used to represent two-dimensional data such as grids, tables, or matrices.

**Example:** `grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]` is a 3×3 grid; `grid[1][2]` accesses the value `6`.

#### Nested loops

A loop placed inside the body of another loop, so that for each iteration of the outer loop, the inner loop runs through all of its iterations.

**Example:** Two nested `for` loops with variables `row` and `col` can visit every cell in a grid, like the squares on a chessboard.

#### None — null/empty value, NoneType

A special Python value representing the intentional absence of any value, belonging to its own type called `NoneType`; it is returned by functions that do not explicitly return anything.

**Example:** A function that prints a message but has no `return` statement gives back `None`; checking `if result is None` tests whether a function returned anything useful.

#### nonlocal keyword — access enclosing scope variable

A declaration inside a nested (inner) function that tells Python a variable name refers to the variable in the nearest enclosing (outer) function's scope, allowing the inner function to modify it.

**Example:** An inner function uses `nonlocal counter` to update a `counter` variable defined in the outer function that wraps it.

#### np.argmax() — index of maximum value

A NumPy function that returns the index of the largest value in an array, useful for finding which category received the highest score in a machine learning model's output.

**Example:** `np.argmax([0.1, 0.8, 0.1])` returns `1`, indicating that the second item (index 1) has the highest value.

#### np.array() — creating arrays

A NumPy function that converts a Python list (or list of lists) into a NumPy array, an efficient data structure that supports fast element-wise math operations.

**Example:** `arr = np.array([1, 2, 3, 4]); arr * 3` produces `array([3, 6, 9, 12])` in one step.

#### numpy library overview

A powerful third-party Python library that provides a fast array data type and mathematical functions for operating on entire arrays at once, forming the foundation for most scientific and data science Python work.

**Example:** `import numpy as np; np.array([1, 2, 3]) * 2` returns `array([2, 4, 6])` without needing a loop.

#### Objects and classes — conceptual overview

A programming model where data and related actions are bundled together into a single unit called an object; objects are created from templates called classes, which define their attributes (data) and methods (behaviors).

**Example:** A `Dog` class might define attributes like `name` and `breed` and methods like `bark()` and `fetch()`, and each individual dog is a separate object created from that class.

#### open() function

A built-in Python function that opens a file and returns a file object through which you can read from or write to the file; you must specify the file path and optionally the mode.

**Example:** `f = open("notes.txt", "r")` opens `notes.txt` for reading and stores the file object in `f`.

#### Optimizer: Adam

A popular gradient-descent optimization algorithm used to train neural networks that automatically adjusts the learning rate for each parameter, combining the benefits of momentum and adaptive learning rates.

**Example:** `optimizer="adam"` in `model.compile()` tells Keras to use the Adam algorithm, which typically trains faster than basic gradient descent.

#### os — operating system interface

A standard library module that provides functions for interacting with the operating system, including working with files and directories, reading environment variables, and running system commands.

**Example:** `import os; os.getcwd()` returns the path of the current working directory.

#### os.path — file path operations

A sub-module of `os` that provides functions for manipulating file and directory path strings in a way that works correctly on any operating system.

**Example:** `os.path.exists("data.txt")` returns `True` if the file exists; `os.path.join("folder", "file.txt")` builds a path that works on Windows and Mac.

#### Pen control: penup(), pendown(), pensize()

Turtle methods that control whether the turtle draws as it moves: `penup()` lifts the pen so movement leaves no mark; `pendown()` lowers the pen so movement draws a line; `pensize(n)` sets the line thickness in pixels.

**Example:** `t.penup(); t.goto(100, 0); t.pendown()` moves the turtle without drawing, then resumes drawing from the new position.

#### PIL (Python Imaging Library) / Pillow overview

A third-party Python library for opening, editing, and saving image files in many formats; Pillow is the actively maintained fork of the original PIL.

**Example:** `from PIL import Image` gives you functions to open a JPEG, resize it, convert it to grayscale, and save the result.

#### pip — Python package installer

The standard command-line tool that downloads and installs Python libraries from the internet, making it easy to add new capabilities to Python such as web scraping or image processing.

**Example:** Running `pip install pillow` in the terminal downloads and installs the Pillow image library so you can use it in your programs.

#### Pixel data and image arrays

The representation of an image as a two-dimensional grid where each cell holds one pixel's color value; in Pillow or NumPy, this data can be read and modified as a 2D or 3D array.

**Example:** Converting an image to a NumPy array with `np.array(img)` gives a 3D array where each pixel is `[red, green, blue]`.

#### Plotting a sine wave

A common introductory data visualization task that generates a list of x-values, computes `math.sin()` for each, and passes both lists to `plt.plot()` to draw a smooth wave-shaped curve.

**Example:** `x = [i/10 for i in range(63)]; y = [math.sin(v) for v in x]; plt.plot(x, y)` plots one full cycle of a sine wave.

#### plt.grid() — show grid lines

A matplotlib function that adds a grid of horizontal and vertical reference lines to a chart, making it easier to read data values from the plot.

**Example:** `plt.grid(True)` adds grid lines; `plt.grid(True, linestyle="--", alpha=0.5)` uses dashed semi-transparent lines.

#### plt.plot(x, y) — line plot

A matplotlib function that draws a line graph connecting data points defined by matching lists of x-values and y-values.

**Example:** `plt.plot([0, 1, 2, 3], [0, 1, 4, 9])` draws a line through the points (0,0), (1,1), (2,4), (3,9), producing a curve that looks like a parabola.

#### plt.show() — display plot

A matplotlib function that renders all currently created charts and displays them in a window or inline in a Jupyter notebook; without it, the plot is created in memory but never shown.

**Example:** After calling `plt.plot(...)` and `plt.title(...)`, calling `plt.show()` opens the window with the finished chart.

#### plt.title(), plt.xlabel(), plt.ylabel() — labels

Matplotlib functions that add a title above the chart and labels to the x- and y-axes, making graphs easier to interpret.

**Example:** `plt.title("Temperature Over Time"); plt.xlabel("Day"); plt.ylabel("°C")` labels the axes of a temperature chart.

#### Position query: xcor(), ycor(), heading()

Turtle methods that report the turtle's current state: `xcor()` returns the x-coordinate; `ycor()` returns the y-coordinate; `heading()` returns the direction the turtle is facing in degrees.

**Example:** `print(t.xcor(), t.ycor())` prints the turtle's current position, useful for debugging or collision detection.

#### print() function

A built-in Python function that displays one or more values as text in the console or terminal window, ending with a newline by default.

**Example:** `print("Hello, world!")` outputs the text `Hello, world!` to the screen.

#### print() — output to console

A built-in Python function that displays text or values in the terminal or console window, with optional separator and end characters, making program output visible to the user.

**Example:** `print("Score:", score)` shows `Score: 42` if `score` is `42`; `print("a", "b", sep="-")` shows `a-b`.

#### Prompting the user (passing a string to input())

The practice of passing a descriptive string argument to `input()` so that the user sees a message explaining what they should type before the program waits for their input.

**Example:** `age = input("How old are you? ")` displays the question and stores the answer, making the program friendlier than a blank cursor.

#### Pure functions vs functions with side effects

A distinction between functions that always return the same output for the same input and change nothing outside themselves (pure), and functions that affect external state such as printing, writing files, or modifying global variables (side effects).

**Example:** `def double(x): return x * 2` is pure; `def log(x): print(x)` has a side effect because it changes what appears on the screen.

#### Python 2 vs Python 3 differences

Two major versions of the Python language that are not fully compatible with each other; Python 3 is the current standard and includes improvements such as `print()` being a function rather than a statement, and division always returning a decimal result.

**Example:** In Python 2, `print "Hello"` works, but in Python 3 you must write `print("Hello")` with parentheses.

#### Python interpreter overview

A program that reads Python code one instruction at a time and carries out each instruction immediately, translating human-readable Python into actions the computer can perform without needing to compile the entire program first.

**Example:** When you type `print("Hello!")` and press Enter in a Python shell, the interpreter reads that line and displays `Hello!` on the screen right away.

#### Python keywords (reserved words)

Special words built into the Python language — such as `if`, `for`, `while`, `def`, `return`, and `True` — that have fixed meanings and cannot be used as variable or function names.

**Example:** Trying to name a variable `for = 5` causes a `SyntaxError` because `for` is a reserved keyword.

#### Quantifiers: + (one or more), * (zero or more), ? (optional)

Regex symbols placed after a character or group to specify how many times it may repeat: `+` requires at least one occurrence; `*` allows zero or more; `?` makes the preceding element optional (zero or one).

**Example:** `r"\d+"` matches one or more digits; `r"colou?r"` matches both `"color"` and `"colour"`.

#### Queue operations: enqueue (append()), dequeue (pop(0))

The two fundamental queue operations: enqueue adds an item to the back of the queue (implemented with `.append()`); dequeue removes and returns the item at the front (implemented with `.pop(0)`).

**Example:** `queue = []; queue.append("Alice"); queue.append("Bob"); queue.pop(0)` returns `"Alice"`, who arrived first.

#### Queue — FIFO (First In, First Out)

An abstract data type where items are added at one end (the back) and removed from the other end (the front), so the item that has waited longest is always served next.

**Example:** A printer queue is FIFO — the first document sent to the printer is the first one printed.

#### raise — raising exceptions manually

A statement that deliberately triggers an exception, either to re-raise a caught one or to signal an error condition with a specific message to the caller.

**Example:** `if age < 0: raise ValueError("Age cannot be negative")` stops the program with a descriptive message when invalid data is detected.

#### random — random number generation

A standard library module that provides functions for generating pseudo-random numbers, making random choices, and shuffling sequences, useful for games, simulations, and sampling.

**Example:** `import random; random.randint(1, 6)` simulates rolling a six-sided die.

#### random.choice(sequence)

A function from the `random` module that returns a single randomly selected item from a non-empty sequence such as a list or string.

**Example:** `random.choice(["rock", "paper", "scissors"])` returns one of the three options at random.

#### random.randint(min, max)

A function from the `random` module that returns a random integer between `min` and `max`, inclusive on both ends.

**Example:** `random.randint(1, 10)` returns one random whole number between 1 and 10 each time it is called.

#### random.seed() — reproducibility

A function from the `random` module that initializes the random number generator with a specified starting value, ensuring that the same sequence of random numbers is produced every time the program runs — useful for testing.

**Example:** `random.seed(42); print(random.randint(1, 100))` always prints the same number when the seed is `42`.

#### random.shuffle(list)

A function from the `random` module that randomly rearranges the items of a list in place, modifying the original list rather than creating a new one.

**Example:** `cards = [1, 2, 3, 4, 5]; random.shuffle(cards)` rearranges `cards` into a random order each time.

#### range() — generate a sequence of numbers

A built-in function that produces an immutable sequence of integers on demand without storing all of them in memory, commonly used to control the number of iterations in a `for` loop.

**Example:** `range(5)` generates `0, 1, 2, 3, 4`; `range(10, 0, -2)` generates `10, 8, 6, 4, 2`.

#### range(start, stop, step)

A built-in function that generates a sequence of integers from `start` up to but not including `stop`, incrementing by `step` each time; `start` and `step` are optional and default to `0` and `1`.

**Example:** `range(2, 10, 2)` generates `2, 4, 6, 8`; `range(5)` generates `0, 1, 2, 3, 4`.

#### Raspberry Pi as a Python platform

A small, inexpensive single-board computer that runs Linux and comes with Python pre-installed, making it a popular device for learning programming and building physical computing projects.

**Example:** Students use a Raspberry Pi to run a Python program that controls LED lights connected to the board's GPIO pins.

#### Raw strings for regex patterns (r"...")

A string prefixed with `r` that tells Python to treat backslashes as literal backslash characters rather than escape sequences, making regex patterns easier to write and read.

**Example:** `r"\n"` is a two-character string (backslash + n) used in regex; without the `r`, `"\n"` would be a newline character.

#### re — regular expressions

A standard library module that provides tools for searching, matching, and manipulating strings using patterns called regular expressions, which describe text shapes rather than exact text.

**Example:** `import re; re.search(r"\d+", "Order 42")` finds the number `42` inside the string.

#### re.findall(pattern, string) — find all matches

A function from the `re` module that returns a list of all non-overlapping matches of a pattern found in a string, in the order they appear.

**Example:** `re.findall(r"\d+", "Call 911 or 112")` returns `["911", "112"]`.

#### re.search(pattern, string) — find first match

A function from the `re` module that scans a string and returns a match object for the first location where the pattern is found, or `None` if no match exists anywhere.

**Example:** `re.search(r"\d+", "I have 3 cats")` returns a match object for `"3"`; checking `if re.search(...):` safely tests for existence.

#### re.split(pattern, string) — split by pattern

A function from the `re` module that splits a string at every location where the pattern matches, returning a list of the pieces between matches.

**Example:** `re.split(r"\s+", "hello   world  there")` splits on any whitespace, returning `["hello", "world", "there"]`.

#### re.sub(pattern, replacement, string) — substitute matches

A function from the `re` module that replaces every occurrence of a pattern in a string with a specified replacement string and returns the modified result.

**Example:** `re.sub(r"\d", "*", "Phone: 555-1234")` returns `"Phone: ***-****"` by replacing each digit with `*`.

#### Reading a traceback (stack trace)

The skill of interpreting Python's error output, which lists the chain of function calls leading to the crash and identifies the file, line number, and type of error at the bottom.

**Example:** A traceback showing `ZeroDivisionError: division by zero` at line 12 tells you exactly where to look in your code to find the bug.

#### Reading and writing JSON files (json module)

The use of Python's built-in `json` module to serialize Python objects (dictionaries, lists) to a JSON-formatted text file with `json.dump()` and to parse JSON files back into Python objects with `json.load()`.

**Example:** `import json` / `with open("settings.json", "w") as f: json.dump({"level": 3, "score": 500}, f)` saves game settings; `json.load(f)` reads them back.

#### Reading documentation with help() and dir()

The skill of using Python's built-in `help()` to read a function's docstring and `dir()` to list an object's available attributes and methods, allowing exploration of unfamiliar code without leaving the interpreter.

**Example:** `dir(str)` shows all string methods; `help(str.replace)` explains exactly how `.replace()` works and what arguments it takes.

#### Recurrent networks (RNN) — overview

A class of neural network where connections can form directed cycles, allowing the network to maintain a hidden state across time steps, making them suitable for sequential data like text or time series.

**Example:** An RNN can process a sentence word by word, keeping track of context from earlier words to better understand the meaning of each new word.

#### Recursion base case and recursive case

The two essential parts of any recursive function: the base case is a condition that stops the recursion by returning a result without a recursive call; the recursive case breaks the problem into a smaller version and calls the function again.

**Example:** In a factorial function, `if n == 1: return 1` is the base case and `return n * factorial(n - 1)` is the recursive case.

#### Recursion depth and stack overflow

The limitation on how many times a function can call itself before Python raises a `RecursionError`; each call adds a frame to the call stack, and Python has a default maximum depth (usually 1000) to prevent the program from crashing.

**Example:** A recursive function that never reaches its base case keeps calling itself until Python raises `RecursionError: maximum recursion depth exceeded`.

#### Recursion — a function calling itself

A programming technique where a function solves a problem by calling itself with a smaller or simpler version of the problem, continuing until a base case is reached that stops the chain of calls.

**Example:** A recursive function that counts down from `n` calls itself with `n - 1` until it reaches `0`, at which point it stops.

#### Removing entries: .pop(), del

Two ways to delete a key-value pair from a dictionary: `.pop(key)` removes the pair and returns the value; `del d[key]` removes the pair without returning anything.

**Example:** `removed = inventory.pop("apples")` removes `"apples"` and stores its value; `del inventory["apples"]` removes it and discards the value.

#### repl.it — online Python IDE

A web-based platform where you can write, run, and share Python programs from any device with a browser, providing an editor, a console, and file storage all in one place.

**Example:** You can start a new Python repl at repl.it, type your code on the left, and see the output on the right without installing anything.

#### Reshaping arrays (array.reshape())

A NumPy method that changes the shape (dimensions) of an array without changing its data, such as converting a flat list of 12 numbers into a 3×4 grid.

**Example:** `np.arange(12).reshape(3, 4)` turns the sequence 0–11 into a 3-row, 4-column 2D array.

#### return statement

A statement inside a function body that immediately ends the function and sends a specified value back to the caller; without it, the function returns `None`.

**Example:** `def square(n): return n * n` sends back the result so `result = square(5)` stores `25`.

#### reversed() — return reverse iterator

A built-in function that returns an iterator that yields items from a sequence in reverse order without modifying the original or creating a full reversed copy.

**Example:** `list(reversed([1, 2, 3]))` produces `[3, 2, 1]`; `for c in reversed("abc"): print(c)` prints `c`, `b`, `a`.

#### RGB color model

A method of representing colors by specifying the intensity of red, green, and blue light components, each typically ranging from 0 to 255, that are combined to produce any visible color.

**Example:** RGB `(255, 0, 0)` is red; `(0, 255, 0)` is green; `(128, 0, 128)` is purple; `(255, 255, 255)` is white.

#### round() — round a number

A built-in function that rounds a floating-point number to the nearest integer or to a specified number of decimal places.

**Example:** `round(3.7)` returns `4`; `round(3.14159, 2)` returns `3.14`.

#### Running Python scripts from the terminal

Executing a saved `.py` file by typing `python filename.py` (or `python3 filename.py`) in a command-line window, which causes the interpreter to run the entire file from top to bottom.

**Example:** After saving `hello.py`, you open a terminal, navigate to the file's folder, and type `python hello.py` to see the output.

#### Screen setup: setup(width, height), bgcolor(color), title(text)

Three methods called on a `turtle.Screen()` object that configure the drawing window: `setup()` sets its pixel dimensions; `bgcolor()` sets the background color; `title()` sets the text shown in the title bar.

**Example:** `screen.setup(600, 400); screen.bgcolor("black"); screen.title("My Drawing")` creates a 600×400 black window.

#### Searching Stack Overflow and documentation

The practical skill of finding answers to programming questions by searching official Python documentation or the community Q&A site Stack Overflow, where millions of coding questions have already been answered.

**Example:** Searching Stack Overflow for "python list remove duplicates" returns dozens of solutions using sets or list comprehensions that you can study and adapt.

#### self parameter

A conventional first parameter in every instance method definition that refers to the specific object the method is being called on, allowing the method to access and modify the object's own attributes.

**Example:** In `def bark(self): print(self.name, "says woof!")`, `self.name` refers to the name of the particular dog that called `bark()`.

#### Sequential model

A Keras model type that stacks layers in a linear sequence, where data flows from the first layer through each subsequent layer in order, used for most straightforward neural network architectures.

**Example:** `model = keras.Sequential([Dense(64, activation="relu"), Dense(10, activation="softmax")])` builds a two-layer network.

#### Set operations: union (|), intersection (&), difference (-)

Mathematical operations on two sets: `|` returns all items in either set; `&` returns only items in both sets; `-` returns items in the first set but not the second.

**Example:** `{1,2,3} | {3,4,5}` gives `{1,2,3,4,5}`; `{1,2,3} & {3,4,5}` gives `{3}`; `{1,2,3} - {3,4,5}` gives `{1,2}`.

#### Set type (set) — unordered collection of unique items

A Python data type that stores an unordered group of items where each value can appear only once, making sets ideal for removing duplicates and performing mathematical set operations.

**Example:** `unique = {1, 2, 3, 2, 1}` stores only `{1, 2, 3}` because duplicates are automatically removed.

#### Single vs double quotes

Two interchangeable ways to delimit a string in Python, where `'text'` and `"text"` produce identical strings; the choice matters only when the string itself contains one type of quote.

**Example:** Use `"It's a great day!"` to include an apostrophe without escaping it, or `'She said "wow"'` to include double quotes inside.

#### Single-element tuple syntax ((x,))

The special syntax required to create a tuple with exactly one item, where a trailing comma must follow the item inside the parentheses; without the comma, Python treats the parentheses as grouping rather than a tuple.

**Example:** `single = (42,)` creates a one-item tuple; `not_a_tuple = (42)` is just the integer `42` in parentheses.

#### Snake_case naming convention

A style for writing multi-word variable and function names in Python where all letters are lowercase and words are separated by underscores, making names readable without spaces.

**Example:** `total_price`, `player_name`, and `max_speed` are all written in snake_case.

#### sorted() — return sorted list

A built-in function that returns a new sorted list from any iterable, leaving the original unchanged; accepts optional `key` and `reverse` arguments.

**Example:** `sorted([3, 1, 4, 1, 5])` returns `[1, 1, 3, 4, 5]`; `sorted(["banana", "apple"])` returns `["apple", "banana"]`.

#### Sorting algorithms overview (bubble, selection, insertion)

An introduction to three simple comparison-based sorting methods: bubble sort repeatedly swaps adjacent out-of-order elements; selection sort finds the minimum each pass; insertion sort places each element in its correct position among already-sorted elements.

**Example:** Bubble sort on `[3, 1, 2]` compares and swaps neighbors repeatedly until the list reads `[1, 2, 3]`.

#### Sorting with a key function (sorted(list, key=...))

A technique that customizes how `sorted()` or `.sort()` orders items by passing a `key` function that maps each item to a comparison value; items are then sorted by those values.

**Example:** `sorted(words, key=len)` sorts a list of strings from shortest to longest; `sorted(students, key=lambda s: s["score"])` sorts student dictionaries by score.

#### Speed control: speed(value)

A turtle method that sets how fast the turtle moves and draws, accepting values from `0` (fastest, no animation) to `10` (fast) or slow descriptive strings like `"slow"`, `"normal"`, `"fast"`.

**Example:** `t.speed(0)` makes the turtle draw as fast as possible, useful when drawing many complex shapes.

#### Spyder IDE — scientific Python IDE

A free development environment built for data science and math-heavy Python work that includes a variable explorer, a console, and easy access to libraries like NumPy and Matplotlib.

#### Stack — LIFO (Last In, First Out)

An abstract data type where items are added and removed from the same end (the top), so the most recently added item is always the first one removed.

**Example:** Python function calls use an internal stack — the most recently called function is the first to finish and be removed.

#### str() — convert to string

A built-in function that converts any value — such as an integer, float, or list — into its text representation as a string, enabling it to be concatenated or printed with other strings.

**Example:** `str(42)` returns `"42"`; `"Your score is " + str(score)` combines text with a number variable.

#### __str__() — string representation of an object

A special method defined in a class that controls what is returned when the object is converted to a string (e.g., with `str()` or `print()`), making objects display in a human-readable format.

**Example:** `def __str__(self): return f"Dog({self.name}, age {self.age})"` makes `print(my_dog)` show `Dog(Buddy, age 3)`.

#### String concatenation with +

The operation of joining two or more strings end-to-end using the `+` operator to produce a single longer string.

**Example:** `"Hello, " + "world!"` produces `"Hello, world!"`; `first + " " + last` combines a first and last name with a space between them.

#### String f-string formatting with format specifiers (e.g., {x:.2f})

A feature of f-strings that allows precise control over how values are displayed, using format codes inside the curly braces after a colon to specify decimal places, width, alignment, and more.

**Example:** `f"Pi is approximately {math.pi:.2f}"` displays `Pi is approximately 3.14` by rounding to two decimal places.

#### String formatting with .format()

A string method that inserts values into a template string by replacing `{}` placeholders with the provided arguments, allowing numbers and variables to be embedded neatly in text.

**Example:** `"Hello, {}! You are {} years old.".format("Alex", 12)` produces `"Hello, Alex! You are 12 years old."`.

#### String immutability

The property of Python strings that prevents any character from being changed after the string is created; operations that appear to modify a string actually create and return a new string.

**Example:** `s = "hello"; s[0] = "H"` raises a `TypeError`; instead, use `s = "H" + s[1:]` to build a new string.

#### String indexing (0-based)

The method of accessing a single character in a string by its position number, where the first character is at index `0`, the second at index `1`, and negative indices count backward from the end.

**Example:** If `word = "Python"`, then `word[0]` is `'P'`, `word[2]` is `'t'`, and `word[-1]` is `'n'`.

#### String length with len()

A built-in function that counts and returns the number of characters in a string, including spaces and punctuation.

**Example:** `len("hello")` returns `5`; `len("Hi there!")` returns `9`.

#### String methods as examples of OOP

An observation that Python strings are objects, and calling methods like `.upper()` or `.split()` on them demonstrates object-oriented programming — the string is the object and the method operates on it.

**Example:** `"hello".upper()` shows OOP in action: `"hello"` is the object and `.upper()` is the method that belongs to it.

#### String methods for text processing: .strip(), .lower(), .replace()

Three string methods frequently used when processing file content: `.strip()` removes leading/trailing whitespace and newlines; `.lower()` normalizes case; `.replace()` substitutes substrings.

**Example:** `line.strip().lower()` cleans a line read from a file by removing surrounding whitespace and converting to lowercase.

#### String methods: .isdigit(), .isalpha(), .isalnum()

Built-in string methods that return `True` or `False` based on the characters in a string: `.isdigit()` checks that every character is a digit; `.isalpha()` checks for letters only; `.isalnum()` checks for letters or digits with no spaces or symbols.

**Example:** `"123".isdigit()` returns `True`; `"abc123".isalpha()` returns `False` because digits are present.

#### String methods: .lower(), .upper(), .strip(), .lstrip(), .rstrip()

Built-in string methods that return modified copies of a string: `.lower()` converts all letters to lowercase; `.upper()` to uppercase; `.strip()` removes leading and trailing whitespace; `.lstrip()` removes only leading whitespace; `.rstrip()` only trailing.

**Example:** `"  Hello  ".strip()` returns `"Hello"`; `"Python".lower()` returns `"python"`.

#### String methods: .split(), .join(), .replace()

Built-in string methods that restructure strings: `.split()` breaks a string into a list at a delimiter; `.join()` merges a list of strings with a separator; `.replace()` swaps every occurrence of one substring with another.

**Example:** `"a,b,c".split(",")` returns `["a", "b", "c"]`; `",".join(["a", "b", "c"])` returns `"a,b,c"`.

#### String methods: .startswith(), .endswith(), .find(), .count()

Built-in string methods that inspect a string's content: `.startswith()` and `.endswith()` check how the string begins or ends; `.find()` returns the index of the first match (or `-1`); `.count()` counts non-overlapping occurrences of a substring.

**Example:** `"hello.py".endswith(".py")` returns `True`; `"banana".count("a")` returns `3`.

#### String repetition with *

The operation of repeating a string a specified number of times using the `*` operator, producing a new string that contains the original repeated consecutively.

**Example:** `"ha" * 3` produces `"hahaha"`; `"-" * 20` creates a divider line of twenty dashes.

#### String slicing (s[start:end:step])

The operation of extracting a portion of a string by specifying a start index, an end index (exclusive), and an optional step value inside square brackets.

**Example:** `"Python"[0:3]` returns `"Pyt"`; `"abcdef"[::2]` returns `"ace"` by taking every other character.

#### String type (str) — text enclosed in quotes

A Python data type that stores a sequence of characters — letters, digits, symbols, and spaces — surrounded by matching single or double quotation marks.

**Example:** `greeting = "Hello, world!"` stores a string of 13 characters in the variable `greeting`.

#### string — string constants (punctuation, digits, etc.)

A standard library module that provides useful pre-built string constants such as `string.ascii_letters`, `string.digits`, and `string.punctuation`, saving you from typing them out manually.

**Example:** `import string; string.digits` gives `"0123456789"`; you can use it to check whether a character is a digit.

#### sum() — sum values in an iterable

A built-in function that adds all numeric items in an iterable and returns their total, with an optional starting value.

**Example:** `sum([10, 20, 30])` returns `60`; `sum(range(101))` returns `5050`, the sum of 1 through 100.

#### sys — system-level operations

A standard library module that provides access to variables and functions related to the Python interpreter itself, such as command-line arguments, the Python version, and the ability to exit the program.

**Example:** `import sys; sys.exit()` stops the program immediately from anywhere in the code.

#### sys.path — Python module search path

A list inside the `sys` module that contains the directories Python searches in order when you use an `import` statement, determining where Python looks for module files.

**Example:** Printing `sys.path` shows a list of folder paths; adding a folder to `sys.path` lets Python find modules stored there.

#### The Python REPL (interactive shell)

An interactive environment — short for Read-Eval-Print Loop — where you type one Python expression at a time, the interpreter evaluates it, prints the result, and waits for your next input.

**Example:** Typing `2 + 3` in the Python REPL immediately shows `5` without needing to write a full program.

#### The Python standard library overview

A large collection of modules that comes bundled with every Python installation and provides ready-made tools for tasks like math, file I/O, working with dates, networking, and much more.

**Example:** Without installing anything extra, you can use `import random`, `import math`, `import os`, and dozens of other modules from the standard library.

#### Thonny — beginner-friendly Python IDE

A free, lightweight code editor designed for people learning Python that highlights variables, shows each step of execution, and displays helpful error messages in plain language.

**Example:** In Thonny you can click the Step button to watch your program run one line at a time, which makes it easy to spot mistakes.

#### time — time operations

A standard library module that provides functions for working with time, including getting the current time, measuring elapsed time, and pausing program execution.

**Example:** `import time; start = time.time()` records the start time so you can measure how long a block of code takes to run.

#### time.sleep() — pause execution

A function from the `time` module that pauses the program for a specified number of seconds before continuing to the next line, useful for creating delays in animations or games.

**Example:** `time.sleep(2)` causes the program to wait two seconds before executing the next line.

#### Trinket.io — web-based Python environment

A free, browser-based tool that lets you write and run Python programs — including turtle graphics — directly in a web page without installing any software on your computer.

**Example:** A teacher can share a Trinket link and students click Run to see a turtle draw a square, all inside their web browser.

#### Truthiness and falsiness of values

The property of non-Boolean Python values being treated as either `True` or `False` inside an `if` or `while` condition: empty strings, `0`, `None`, and empty collections are falsy; everything else is truthy.

**Example:** `if name:` checks whether `name` is a non-empty string without needing to write `if name != ""`.

#### try...except block

A control-flow structure that attempts to run a block of code inside `try` and, if an exception occurs, executes the matching `except` block instead of crashing the program.

**Example:** `try: result = 10 / 0` / `except ZeroDivisionError: print("Can't divide by zero!")` catches the error gracefully.

#### Tuple indexing and slicing

The same bracket-based method used for lists that allows accessing individual items by index or extracting a sub-tuple by slicing, since tuples are ordered sequences.

**Example:** `point = (10, 20, 30); point[0]` returns `10`; `point[1:]` returns `(20, 30)`.

#### Tuple type (tuple) — ordered, immutable collection

A Python data type that stores an ordered sequence of items that cannot be changed after creation, making tuples useful for fixed data that should not be accidentally modified.

**Example:** `point = (3, 7)` stores an x-y coordinate that should not change; `months = ("Jan", "Feb", "Mar")` stores a fixed list of month names.

#### Tuple unpacking

The ability to assign the individual items of a tuple to multiple variables in a single statement by matching the number of variables on the left to the number of items in the tuple.

**Example:** `x, y = (3, 7)` stores `3` in `x` and `7` in `y`; `first, *rest = (1, 2, 3, 4)` stores `1` in `first` and `[2, 3, 4]` in `rest`.

#### Turtle appearance: shape() (turtle, arrow, circle, square, triangle, classic)

A turtle method that changes the visual appearance of the turtle cursor itself, choosing from built-in shapes: `"turtle"`, `"arrow"`, `"circle"`, `"square"`, `"triangle"`, or `"classic"`.

**Example:** `t.shape("turtle")` replaces the default arrow cursor with a little turtle icon.

#### type() — get type of an object

A built-in function that returns the class (data type) of any Python object, which is helpful when debugging to confirm what kind of value a variable holds.

**Example:** `type(3.14)` returns `<class 'float'>`; `type([1, 2])` returns `<class 'list'>`.

#### type() — inspect a variable's type

A built-in function that returns the data type of any Python object, which is useful for understanding what kind of value a variable holds during debugging.

**Example:** `type(42)` returns `<class 'int'>`; `type("hello")` returns `<class 'str'>`; `type(3.14)` returns `<class 'float'>`.

#### Types of errors: syntax errors vs runtime errors vs logic errors

Three categories of programming mistakes: syntax errors are caught before the program runs (misspelled keywords, missing colons); runtime errors crash the program while it runs (dividing by zero); logic errors produce wrong answers without crashing.

**Example:** Forgetting a colon after `if x > 5` is a syntax error; accessing index 10 in a 5-item list is a runtime error; adding instead of subtracting is a logic error.

#### Using Google and Stack Overflow to debug errors

The practical skill of copying a Python error message into a search engine or visiting Stack Overflow to find explanations and solutions posted by other programmers who encountered the same problem.

**Example:** Searching `"Python IndexError: list index out of range"` on Google typically returns several explanations and fixes within seconds.

#### Variable definition and assignment (=)

The act of creating a named storage location and giving it a value using the `=` operator, which binds the name on the left to the object on the right.

**Example:** `age = 13` creates a variable named `age` and stores the integer `13` in it so you can use `age` later in your program.

#### Variable naming rules (letters, digits, underscores)

The set of rules Python enforces for valid variable names: they must start with a letter or underscore, contain only letters, digits, and underscores, and must not be a Python keyword.

**Example:** `player1_score` is a valid variable name, but `1player` is not because it starts with a digit.

#### Version control basics (git overview)

An introduction to git, a tool that tracks changes to files over time, allowing you to save snapshots of your work, see what changed, and undo mistakes by going back to a previous version.

**Example:** Running `git commit -m "Added score display"` saves a snapshot so you can return to this version of your program if later changes break something.

#### Virtual environments

Isolated folders that each contain their own copy of Python and installed libraries, allowing different projects to use different package versions without conflicts.

**Example:** You create a virtual environment for your game project so its libraries don't clash with the libraries used by your data science project.

#### VS Code — general-purpose code editor

A free, popular code editor made by Microsoft that supports many programming languages including Python and can be extended with add-ons called extensions to add features like syntax highlighting and debugging.

**Example:** After installing the Python extension in VS Code, the editor underlines mistakes in your code before you even run it.

#### When to use tuples vs lists

A design guideline: use a tuple when the number of items and their meaning are fixed (like coordinates or RGB values), and use a list when the collection needs to grow, shrink, or be sorted.

**Example:** A screen position `(x, y)` suits a tuple because it always has exactly two components; a shopping list suits a `list` because items are added and removed.

#### while loop — condition-based repetition

A control-flow statement that repeatedly executes a block of code for as long as a specified condition remains `True`, checking the condition before each iteration.

**Example:** `while count < 10: count += 1` keeps adding 1 to `count` until it reaches 10.

#### with statement (context manager) for safe file handling

A Python statement that automatically calls a resource's cleanup method (such as `file.close()`) when the indented block finishes, even if an error occurs, making file handling safer and shorter.

**Example:** `with open("data.txt", "r") as f: content = f.read()` closes the file automatically when the block exits.

#### Working with lists as x/y data

The technique of preparing two parallel lists — one for x-values and one for y-values — and passing them to plotting functions to define the data points of a chart.

**Example:** `x = [2020, 2021, 2022]; y = [150, 175, 210]` provides three data points for a bar or line chart of yearly sales.

#### Writing text: write(text, font=...)

A turtle method that places a string of text at the turtle's current position, with an optional `font` argument that specifies the font name, size, and style as a tuple.

**Example:** `t.write("Score: 100", font=("Arial", 16, "bold"))` displays the score in large bold text at the turtle's location.

#### zip() — iterate over multiple sequences simultaneously

A built-in function that pairs up items from two or more iterables by position and yields tuples of matched items, stopping when the shortest iterable is exhausted.

**Example:** `for name, score in zip(names, scores): print(name, score)` prints each student's name next to their corresponding score.

