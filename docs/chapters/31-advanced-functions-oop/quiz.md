# Quiz: Advanced Functions and OOP

Test your understanding of map(), filter(), any(), all(), custom exceptions, properties, dunder methods, and object composition with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does `map(square, [1, 2, 3, 4])` do?

<div class="upper-alpha" markdown>
1. Returns the sum of all squares
2. Returns a sorted list of squares
3. Applies the `square` function to every item and returns an iterator of the results
4. Filters the list to only include numbers that are perfect squares
</div>

??? question "Show Answer"
    The correct answer is **C**. `map(function, iterable)` applies the function to every element and returns a map object (iterator). Wrap it with `list()` to get a list: `list(map(square, [1, 2, 3, 4]))` gives `[1, 4, 9, 16]`. `map()` is a functional programming tool — often replaced by list comprehensions in modern Python, but still useful and concise.

    **Concept Tested:** map()

---

#### 2. What does `filter(is_even, [1, 2, 3, 4, 5, 6])` return?

<div class="upper-alpha" markdown>
1. The count of even numbers: `3`
2. A filter object (iterator) yielding only the items where `is_even` returns `True`
3. The first even number found: `2`
4. A list of odd numbers: `[1, 3, 5]`
</div>

??? question "Show Answer"
    The correct answer is **B**. `filter(function, iterable)` returns a filter object (iterator) that yields only items for which the function returns `True`. Wrap with `list()` to get a list: `list(filter(is_even, [1,2,3,4,5,6]))` gives `[2, 4, 6]`. Like `map()`, `filter()` is lazy — it processes items one at a time as needed.

    **Concept Tested:** filter()

---

#### 3. What does `any([False, False, True, False])` return?

<div class="upper-alpha" markdown>
1. `False` (not all items are True)
2. `1` (the count of True items)
3. `True` (at least one item is truthy)
4. `[True]` (a list of only the truthy items)
</div>

??? question "Show Answer"
    The correct answer is **C**. `any(iterable)` returns `True` if at least one item in the iterable is truthy. It short-circuits — as soon as it finds one truthy item, it stops and returns `True` without checking the rest. `all(iterable)` returns `True` only if every item is truthy, and short-circuits on the first falsy item.

    **Concept Tested:** any() and all()

---

#### 4. What does `ord("A")` return?

<div class="upper-alpha" markdown>
1. The string `"a"` (lowercase version)
2. `1` (A is the 1st letter of the alphabet)
3. `"A1"` (letter and its position combined)
4. `65` (the ASCII/Unicode integer code for capital A)
</div>

??? question "Show Answer"
    The correct answer is **D**. `ord(character)` returns the integer Unicode (ASCII) code for a character. `ord("A")` is `65`, `ord("B")` is `66`, and so on. The reverse function is `chr(integer)`: `chr(65)` returns `"A"`. These are useful for implementing ciphers, character math, or generating sequences of characters in a loop.

    **Concept Tested:** chr() and ord()

---

#### 5. What does `dir(math)` show you?

<div class="upper-alpha" markdown>
1. The source code of the math module
2. A list of all attributes and methods available on the math module
3. The documentation for every math function
4. The location of the math module file on disk
</div>

??? question "Show Answer"
    The correct answer is **B**. `dir(obj)` returns a list of all attributes and methods available on an object or module. `dir(math)` shows all functions available in the `math` module (like `sqrt`, `sin`, `pi`, `factorial`, etc.). For detailed documentation on one function, use `help(math.sqrt)`. Together, `dir()` and `help()` are essential tools for exploring unfamiliar modules.

    **Concept Tested:** dir() and help()

---

#### 6. How do you create a custom exception class in Python?

<div class="upper-alpha" markdown>
1. `def CustomError(): raise Exception`
2. `class CustomError(Exception): pass`
3. `error CustomError = new Exception()`
4. `CustomError = Exception("custom message")`
</div>

??? question "Show Answer"
    The correct answer is **B**. Custom exception classes are created by subclassing `Exception` (or a more specific built-in exception like `ValueError`). The simplest form is `class MyError(Exception): pass`. You can also override `__init__()` to add custom attributes or messages. Callers can catch your custom exception specifically with `except MyError:`, making error handling much more precise.

    **Concept Tested:** Custom Exception Classes

---

#### 7. What is the `@property` decorator used for?

<div class="upper-alpha" markdown>
1. To make a method run automatically when the class is imported
2. To turn a method into an attribute that can be read without calling it with parentheses, while allowing you to add validation logic
3. To prevent the method from being inherited by subclasses
4. To mark a method as a class variable rather than an instance method
</div>

??? question "Show Answer"
    The correct answer is **B**. The `@property` decorator lets you define a method that is accessed like an attribute — `obj.temperature` instead of `obj.temperature()`. You can add a corresponding `@temperature.setter` to run validation code when the value is assigned. This gives you clean attribute syntax while keeping control over how values are get and set.

    **Concept Tested:** @property Decorator

---

#### 8. What is a dunder method (also called a magic method) in Python?

<div class="upper-alpha" markdown>
1. A method that can only be called once per program run
2. A method starting and ending with double underscores that Python calls automatically in response to specific operations like printing or arithmetic
3. A method hidden from `dir()` and inaccessible to the programmer
4. A method that runs in a separate thread for better performance
</div>

??? question "Show Answer"
    The correct answer is **B**. Dunder methods (double-underscore methods) like `__init__`, `__str__`, `__add__`, and `__len__` are called automatically by Python in response to operations. `__str__` is called by `print()`, `__add__` is called by the `+` operator, and `__len__` is called by `len()`. Defining them on your class customizes how Python's built-in operations work with your objects.

    **Concept Tested:** Dunder Methods

---

#### 9. What is object composition?

<div class="upper-alpha" markdown>
1. Using multiple inheritance to combine features from several parent classes
2. Building complex objects by containing simpler objects as attributes, instead of using inheritance
3. Combining two lists of objects into one
4. Compressing an object's data to save memory
</div>

??? question "Show Answer"
    The correct answer is **B**. Composition is the "has-a" relationship: a `Car` object *has* an `Engine` object and a `Wheel` object as attributes. This is different from inheritance (the "is-a" relationship). Composition is often preferred over deep inheritance hierarchies because it is more flexible and easier to change — you can swap out the engine component without changing the car's interface.

    **Concept Tested:** Object Composition

---

#### 10. What does `all([True, True, True, False])` return?

<div class="upper-alpha" markdown>
1. `True` (most items are True)
2. `False` (not every item is True)
3. `3` (the count of True items)
4. `[True, True, True]` (the truthy items)
</div>

??? question "Show Answer"
    The correct answer is **B**. `all(iterable)` returns `True` only if every item in the iterable is truthy. Since the list `[True, True, True, False]` contains a `False`, `all()` returns `False`. It short-circuits — the moment it finds the first falsy item, it stops and returns `False` without checking the remaining items.

    **Concept Tested:** any() and all()

---
