# Quiz: Object-Oriented Programming

Test your understanding of classes, instances, constructors, inheritance, and Python's OOP model with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is a class in Python?

<div class="upper-alpha" markdown>
1. A function that returns a list of objects
2. A blueprint for creating objects, defining their attributes and methods
3. A type of variable that stores multiple values
4. A special loop used to process groups of items
</div>

??? question "Show Answer"
    The correct answer is **B**. A class is a blueprint or template for creating objects. It defines what data (attributes) and behaviors (methods) every instance of that class will have. You define a class with the `class` keyword, and then create individual objects (instances) by calling the class like a function.

    **Concept Tested:** class Keyword

---

#### 2. What is the purpose of `__init__()` in a class?

<div class="upper-alpha" markdown>
1. To print the object's contents when it is created
2. To import the class from another file
3. To initialize an instance's attributes when the object is first created
4. To delete the object from memory when it is no longer needed
</div>

??? question "Show Answer"
    The correct answer is **C**. `__init__()` is the constructor — a special method Python calls automatically each time you create a new instance. It sets up the object's initial state by assigning values to attributes with `self.attribute_name = value`. Without `__init__()`, the object would have no attributes until you set them manually.

    **Concept Tested:** __init__() Constructor

---

#### 3. What does `self` refer to inside a class method?

<div class="upper-alpha" markdown>
1. The class definition itself
2. The most recently created instance of the class
3. The specific instance the method is being called on
4. A required keyword meaning "this is a method, not a function"
</div>

??? question "Show Answer"
    The correct answer is **C**. `self` is a reference to the particular instance the method is being called on. When you write `fido.bark()`, Python passes `fido` as the `self` argument automatically. Inside `bark()`, `self.name` refers to `fido.name`. Every method in a class takes `self` as its first parameter, though Python fills it in automatically — you never pass it yourself.

    **Concept Tested:** self

---

#### 4. How do you create an instance of a class named `Dog`?

<div class="upper-alpha" markdown>
1. `Dog.create("Fido", "Labrador")`
2. `new Dog("Fido", "Labrador")`
3. `Dog = instance("Fido", "Labrador")`
4. `fido = Dog("Fido", "Labrador")`
</div>

??? question "Show Answer"
    The correct answer is **D**. You create an instance by calling the class like a function with the arguments that `__init__()` expects (after `self`). Python automatically calls `__init__()` and returns a new instance. Unlike some other languages, Python does not use the `new` keyword — you just call the class name with parentheses.

    **Concept Tested:** Creating Instances

---

#### 5. What is dot notation used for with objects?

<div class="upper-alpha" markdown>
1. To add two objects together with the `+` operator
2. To access an object's attributes and call its methods
3. To import a specific method from a class
4. To check whether one object is equal to another
</div>

??? question "Show Answer"
    The correct answer is **B**. Dot notation (`object.attribute` or `object.method()`) is how you access data stored inside an object or call behaviors defined on it. For example, `fido.name` reads the `name` attribute, and `fido.bark()` calls the `bark` method. You have been using dot notation all along with strings (`"hello".upper()`), lists (`items.append(x)`), and the turtle (`t.forward(100)`).

    **Concept Tested:** Dot Notation

---

#### 6. What does `__str__()` control in a class?

<div class="upper-alpha" markdown>
1. How the object is stored in memory
2. What Python displays when you use `print(obj)` or `str(obj)` on the object
3. How the object compares to other objects with `==`
4. How many instances of the class can be created
</div>

??? question "Show Answer"
    The correct answer is **B**. `__str__()` defines the human-readable string representation of an object. Without it, `print(fido)` shows something unhelpful like `<__main__.Dog object at 0x10a3b2c>`. With `__str__()` returning `f"Dog({self.name}, {self.breed})"`, `print(fido)` shows `Dog(Fido, Labrador)` instead.

    **Concept Tested:** __str__() Method

---

#### 7. What is the difference between a class variable and an instance variable?

<div class="upper-alpha" markdown>
1. Class variables are faster to access; instance variables are slower
2. A class variable is shared by all instances; an instance variable belongs to one specific object
3. Class variables are defined with `self`; instance variables are defined without `self`
4. Class variables can only hold numbers; instance variables can hold any type
</div>

??? question "Show Answer"
    The correct answer is **B**. An instance variable (`self.name = value`) belongs to one specific object. Changing it on one instance does not affect any other. A class variable is defined in the class body (not inside a method) and is shared by all instances. A common use of class variables is counting how many instances have been created.

    **Concept Tested:** Class vs Instance Variables

---

#### 8. How is inheritance declared in Python?

<div class="upper-alpha" markdown>
1. `class Puppy extends Dog:`
2. `class Puppy inherits Dog:`
3. `class Puppy(Dog):`
4. `class Puppy from Dog:`
</div>

??? question "Show Answer"
    The correct answer is **C**. Put the parent class name in parentheses after the subclass name: `class Puppy(Dog):`. The subclass automatically inherits all attributes and methods from the parent. Only Python uses the `(ParentClass)` syntax for inheritance; other languages use `extends` or similar keywords.

    **Concept Tested:** Inheritance

---

#### 9. What does `super()` do inside a subclass constructor?

<div class="upper-alpha" markdown>
1. Creates an additional instance of the parent class
2. Deletes the parent class so only the subclass remains
3. Calls the parent class's `__init__()` method to set up inherited attributes
4. Returns a reference to the class at the top of the inheritance chain
</div>

??? question "Show Answer"
    The correct answer is **C**. `super().__init__(...)` calls the parent class's constructor, so you can run its setup code without rewriting it. This is important because the subclass needs the parent's attributes too. For example, if `Animal.__init__` sets `self.name` and `self.sound`, calling `super().__init__(name, sound)` in a subclass handles all of that automatically.

    **Concept Tested:** super()

---

#### 10. Which naming convention does Python use for class names?

<div class="upper-alpha" markdown>
1. `snake_case` (all lowercase with underscores)
2. `ALL_CAPS` (all uppercase with underscores)
3. `camelCase` (first word lowercase, rest capitalized)
4. `CamelCase` (each word capitalized, no underscores)
</div>

??? question "Show Answer"
    The correct answer is **D**. Python class names use CamelCase (also called PascalCase) — each word starts with a capital letter and there are no underscores: `Dog`, `Student`, `BankAccount`, `LinkedList`. This is a convention from PEP 8 (Python's style guide). By contrast, variable and function names use `snake_case`, and constants use `ALL_CAPS`.

    **Concept Tested:** CamelCase Naming Convention

---
