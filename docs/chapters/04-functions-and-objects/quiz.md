# Quiz: Functions and Objects

Test your understanding of defining functions, parameters, return values, and the Standard Library with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What Python keyword do you use to define a new function?

<div class="upper-alpha" markdown>
1. `function`
2. `make`
3. `def`
4. `create`
</div>

??? question "Show Answer"
    The correct answer is **C**. The keyword `def` (short for "define") starts a function definition in Python. You write `def`, then the function's name, then parentheses, then a colon. Everything indented below that line becomes the function body — the steps that run when you call the function.

    **Concept Tested:** def Keyword

---

#### 2. What is the difference between defining a function and calling a function?

<div class="upper-alpha" markdown>
1. Defining runs the function; calling writes the recipe for it
2. Defining writes the steps under a name; calling says "run those steps right now"
3. They are the same thing — defining and calling happen at the same time
4. Defining removes the function from memory; calling creates it
</div>

??? question "Show Answer"
    The correct answer is **B**. Defining a function (with `def`) writes the recipe and stores it under a name — Python reads it but does not run it yet. Calling a function (writing its name with parentheses) tells Python to run the stored steps right now. You can define once and call many times.

    **Concept Tested:** Function Calls

---

#### 3. How many lines of output will this program produce?

```python
def say_hi():
    print("Hi!")
    print("Welcome!")

say_hi()
say_hi()
```

<div class="upper-alpha" markdown>
1. 2 lines
2. 4 lines
3. 1 line
4. 6 lines
</div>

??? question "Show Answer"
    The correct answer is **B**. The function `say_hi()` contains two `print()` calls, so each call to the function produces 2 lines of output. The program calls `say_hi()` twice, giving 2 × 2 = 4 lines total. This shows the power of functions — write the steps once, run them as many times as you need.

    **Concept Tested:** Function Calls

---

#### 4. What is a parameter in a Python function?

<div class="upper-alpha" markdown>
1. The colon at the end of the `def` line
2. A variable declared inside the parentheses that receives a value when the function is called
3. The name of the module where the function is stored
4. A comment that explains what the function does
</div>

??? question "Show Answer"
    The correct answer is **B**. A parameter is a variable listed inside the parentheses of a `def` statement. When you call the function and provide a value, Python copies that value into the parameter. Inside the function body, the parameter works just like any other variable. The value you provide at call time is called an argument.

    **Concept Tested:** Positional Parameters

---

#### 5. What will this code print?

```python
def greet(name):
    print("Hello, " + name + "!")

greet("Monty")
```

<div class="upper-alpha" markdown>
1. `Hello, name!`
2. `Hello, Monty!`
3. `greet("Monty")`
4. An error, because `name` is not defined outside the function
</div>

??? question "Show Answer"
    The correct answer is **B**. When `greet("Monty")` is called, the string `"Monty"` is copied into the parameter `name`. Inside the function, `"Hello, " + name + "!"` becomes `"Hello, Monty!"`, which is printed. The parameter `name` is only defined inside the function, so you would get an error trying to use `name` outside it — but the call itself works fine.

    **Concept Tested:** Positional Parameters

---

#### 6. What does the `return` statement do in a function?

<div class="upper-alpha" markdown>
1. It prints the result to the screen
2. It sends a value back to the code that called the function
3. It repeats the function body from the beginning
4. It ends the entire program immediately
</div>

??? question "Show Answer"
    The correct answer is **B**. The `return` statement sends a value back to whatever code called the function. The caller can then store that value in a variable or use it directly. `return` is different from `print()` — `print` displays something on screen, while `return` passes a value back invisibly so your program can use it further.

    **Concept Tested:** Return Values

---

#### 7. What value does Python return from a function that has no `return` statement?

<div class="upper-alpha" markdown>
1. `0`
2. `False`
3. `None`
4. An empty string `""`
</div>

??? question "Show Answer"
    The correct answer is **C**. If a function finishes running without hitting a `return` statement, Python automatically returns `None`. This is called "functions returning None." A very common beginner bug is forgetting to write `return` in a function that calculates something — the function runs but the result disappears, and the caller gets `None` instead.

    **Concept Tested:** Functions Returning None

---

#### 8. Where should a docstring be placed inside a function?

<div class="upper-alpha" markdown>
1. After the last line of the function body
2. Before the `def` keyword on a separate line
3. As the first line inside the function body, in triple quotes
4. In a comment using `#` anywhere inside the function
</div>

??? question "Show Answer"
    The correct answer is **C**. A docstring is a string surrounded by triple quotes (`"""`) placed as the very first line inside the function body. Python tools can read docstrings automatically and display them as help text. Docstrings explain what the function does, its parameters, and what it returns — helping the next reader (often future you) understand the code quickly.

    **Concept Tested:** Docstrings

---

#### 9. What is the Python Standard Library?

<div class="upper-alpha" markdown>
1. A website where you download extra Python packages
2. A collection of pre-written modules that comes with every Python installation
3. The set of Python keywords that are reserved for the language
4. A special file you create to store all your own functions
</div>

??? question "Show Answer"
    The correct answer is **B**. The Standard Library is a large collection of pre-written modules (like `math`, `random`, `time`, and `turtle`) that comes bundled with every Python installation for free. You bring a module into your program using `import`, then access its functions with dot notation: `math.sqrt(25)`.

    **Concept Tested:** Standard Library

---

#### 10. What does the dot in `math.sqrt(16)` mean?

<div class="upper-alpha" markdown>
1. It multiplies `math` by `sqrt`
2. It accesses the `sqrt` function that lives inside the `math` module
3. It separates a whole number from a decimal
4. It marks the end of the function call
</div>

??? question "Show Answer"
    The correct answer is **B**. The dot in `math.sqrt(16)` is dot notation — it connects the module name (`math`) to a function that lives inside it (`sqrt`). After you write `import math`, you access everything inside the module this way: module name, dot, then the function or value you want. You will use this pattern throughout the entire course.

    **Concept Tested:** Standard Library

---
