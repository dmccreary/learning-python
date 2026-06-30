---
title: Object-Oriented Programming
description: Create your own classes with __init__, self, methods, inheritance, __str__, and class vs instance variables
generated_by: claude skill chapter-content-generator
date: 2026-06-28 14:10:00
version: 0.09
---

# Object-Oriented Programming

By the end of this lesson you'll be able to:

- Define a **class** with `__init__()`, `self`, attributes, and methods
- Create class **instances** and access their attributes with dot notation
- Define a `__str__()` method so `print()` shows a useful description
- Use **inheritance** and `super()` to build subclasses that extend parent classes

You've been using objects all along — turtle, strings, lists, and dictionaries are all objects.
Now it's time to create your own.

!!! mascot-welcome "Welcome to Chapter 25!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    You've used objects like Lego bricks — now you get to design your own bricks!
    Object-oriented programming is how most large Python programs are organized.
    Let's build something! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Attributes and Methods

You already know that objects have **attributes** (data stored inside them) and **methods** (functions you call on them).

```python
t = turtle.Turtle()
t.speed(5)          # method call
t.pencolor("red")   # method call — sets an attribute
```

Now you'll define your own objects.

## The `class` Keyword

A **class** is a blueprint for creating objects.
Use `class ClassName:` followed by indented code that defines the class.
By convention, class names use **CamelCase** (each word capitalized, no underscores).

```python
class Dog:
    pass   # empty class — just a placeholder for now
```

## `__init__()` — The Constructor

`__init__()` is the **constructor** — a special method Python calls automatically when you create a new instance.
It sets up the object's initial attributes.

`self` refers to the specific instance being created. Every method in a class takes `self` as its first parameter.

Before we define attributes, note that `self.attribute_name = value` stores a value inside the object:

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
initCmLab('', `class Dog:
    def __init__(self, name, breed, age):
        self.name  = name    # instance attribute
        self.breed = breed
        self.age   = age

    def bark(self):
        print(f"{self.name} says: Woof!")

    def describe(self):
        print(f"{self.name} is a {self.age}-year-old {self.breed}.")

fido  = Dog("Fido", "Labrador", 3)
bella = Dog("Bella", "Poodle", 5)

fido.describe()
bella.bark()
print(fido.name, fido.age)`);
</script>

## Creating Instances and Dot Notation

Each time you call the class like a function, Python creates a new **instance** (a separate object from the same blueprint).

```python
fido  = Dog("Fido", "Labrador", 3)   # instance 1
bella = Dog("Bella", "Poodle", 5)    # instance 2
```

Access attributes and methods with **dot notation**: `fido.name`, `fido.bark()`.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below creates two `Student` instances. Which student has the higher score?
    What will the loop print for each one? Make your guess — then run it!

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
initCmLab('-2', `class Student:
    def __init__(self, name, score):
        self.name  = name
        self.score = score

    def grade(self):
        if self.score >= 90:
            return "A"
        elif self.score >= 80:
            return "B"
        elif self.score >= 70:
            return "C"
        else:
            return "F"

students = [Student("Alice", 92), Student("Bob", 75), Student("Carol", 88)]

for s in students:
    print(f"{s.name}: {s.score} → {s.grade()}")`);
</script>

## `__str__()` — String Representation

`__str__()` defines what `print(obj)` and `str(obj)` show.
Without it, `print(fido)` shows something like `<__main__.Dog object at 0x...>` — not very helpful.

```python
class Dog:
    def __init__(self, name, breed):
        self.name  = name
        self.breed = breed

    def __str__(self):
        return f"Dog({self.name}, {self.breed})"

fido = Dog("Fido", "Labrador")
print(fido)   # Dog(Fido, Labrador)
```

`__repr__()` is similar but meant for developers — it should ideally show code you could paste to recreate the object.

## Class Variables vs Instance Variables

An **instance variable** (defined with `self.`) belongs to one specific object.
A **class variable** (defined directly in the class body, not inside any method) is shared by all instances.

```python
class Counter:
    count = 0   # class variable — shared by all instances

    def __init__(self):
        Counter.count += 1   # increment the shared counter

a = Counter()
b = Counter()
c = Counter()
print(Counter.count)   # 3 — three instances created
```

## Strings and Lists as OOP Examples

You've been using OOP all along — string and list methods are just methods on objects:

```python
name = "monty"
name.upper()       # calls the upper() method on the string object

items = [3, 1, 2]
items.sort()       # calls the sort() method on the list object
```

## Inheritance

**Inheritance** lets you create a new class (**subclass**) that inherits all the attributes and methods of an existing class (**parent class**).

Use `class SubClass(ParentClass):` to declare inheritance.
The `super()` function calls the parent class's `__init__()` so you don't have to repeat all its setup code.

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
initCmLab('-3', `class Animal:
    def __init__(self, name, sound):
        self.name  = name
        self.sound = sound

    def speak(self):
        print(f"{self.name} says {self.sound}!")

    def __str__(self):
        return f"Animal({self.name})"

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name, "Woof")   # call parent __init__

    def fetch(self):
        print(f"{self.name} fetches the ball!")

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")

    def purr(self):
        print(f"{self.name} purrs contentedly.")

dog = Dog("Rex")
cat = Cat("Whiskers")

dog.speak()     # inherited from Animal
dog.fetch()     # defined in Dog

cat.speak()     # inherited from Animal
cat.purr()      # defined in Cat

print(dog)      # uses Animal's __str__`);
</script>

## Method Overriding

A subclass can **override** a parent method by defining a method with the same name.
The subclass version runs instead of the parent's.

```python
class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks loudly!")   # overrides Animal.speak
```

## Learning Check

!!! mascot-thinking "Your Turn — Add a Method"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The `Rectangle` class below has `width` and `height` attributes but is missing two methods.
    Add `area()` (returns width × height) and `perimeter()` (returns 2 × (width + height)).

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
initCmLab('-4', `class Rectangle:
    def __init__(self, width, height):
        self.width  = width
        self.height = height

    def __str__(self):
        return f"Rectangle({self.width}x{self.height})"

    # Add area() here:

    # Add perimeter() here:

r = Rectangle(4, 7)
print(r)
print("Area:", r.area())
print("Perimeter:", r.perimeter())`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Add a `birthday()` method to the `Dog` class that increments `self.age` by 1. Call it twice and print the age.
   **You'll know it worked when** `fido.age` increases by 2 after two birthday calls.

2. Create a `Square(Rectangle)` subclass where `__init__` only takes `side` and calls `super().__init__(side, side)`.
   **You'll know it worked when** `Square(5).area()` returns `25`.

3. Add a `__repr__()` to `Dog` that returns `f"Dog(name={self.name!r}, age={self.age})"`.
   **You'll know it worked when** using `repr(fido)` shows a reconstructable string.

4. Create a class `BankAccount` with `balance = 0`, a `deposit(n)` method, and a `withdraw(n)` method that refuses if the balance would go negative.
   **You'll know it worked when** withdrawing more than the balance prints an error and balance stays unchanged.

5. Create a list of three `Student` objects and sort them by score using `sorted(students, key=lambda s: s.score)`.
   **You'll know it worked when** the students appear in ascending score order.

!!! mascot-celebration "OOP Expert!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've learned to design your own objects with classes, inheritance, and special methods!
    OOP is the foundation of almost all professional Python code — from web frameworks to game engines.
    You're building real software skills. Let's keep coding!

[See Annotated References](./references.md)
