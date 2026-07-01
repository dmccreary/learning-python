# Quiz: Welcome to Python and Skulpt

Test your understanding of Python basics, the Skulpt environment, and your first programs with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the Python interpreter?

<div class="upper-alpha" markdown>
1. A website where you log in to write Python code
2. A program that reads your Python code and carries out each instruction
3. A colorful block editor similar to Scratch
4. A special keyboard for typing Python commands
</div>

??? question "Show Answer"
    The correct answer is **B**. The Python interpreter reads your code one line at a time from top to bottom and carries out each instruction. Think of it as a super-fast reader that turns your words into actions — similar to how clicking the green flag in Scratch starts your program running.

    **Concept Tested:** Python Interpreter Overview

---

#### 2. Which tool is built directly into this textbook so you can run Python without opening a new tab?

<div class="upper-alpha" markdown>
1. Thonny
2. Jupyter Labs
3. Skulpt
4. Visual Studio Code
</div>

??? question "Show Answer"
    The correct answer is **C**. Skulpt is a version of Python that runs directly inside the web page you are reading. Every interactive code box in the early chapters is powered by Skulpt — you click Run and the code executes right on the page, with no account or installation needed.

    **Concept Tested:** Skulpt Browser Python

---

#### 3. What will the following code display when it runs?

```python
print("Hello!")
print("Bye!")
```

<div class="upper-alpha" markdown>
1. Hello! Bye! on one line
2. Only the word Hello!
3. Hello! on one line, then Bye! on the next line
4. Nothing — print() needs a number, not text
</div>

??? question "Show Answer"
    The correct answer is **C**. Each `print()` call displays its text and then moves to a new line. So the first call prints `Hello!` and the second prints `Bye!` on the line below it. Python runs each statement in order from top to bottom, just like Scratch runs blocks in a script.

    **Concept Tested:** print() Function

---

#### 4. What does the `#` symbol do in a Python program?

<div class="upper-alpha" markdown>
1. It tells Python to print a number
2. It starts a comment that Python ignores when running the program
3. It imports a library into your program
4. It creates a new turtle on the screen
</div>

??? question "Show Answer"
    The correct answer is **B**. The `#` character starts a single-line comment. Everything on that line after the `#` is a note for human readers — the Python interpreter completely ignores it when running the program. Comments help explain what your code does without changing how it works.

    **Concept Tested:** Single-Line Comments

---

#### 5. Which of the following will cause an error in Python?

<div class="upper-alpha" markdown>
1. `print("hello")`
2. `Print("hello")`
3. `print("Hello, world!")`
4. `print("123")`
</div>

??? question "Show Answer"
    The correct answer is **B**. Python is case-sensitive, so `Print` with a capital P is not recognized as the built-in print function. Python will respond with a `NameError: name 'Print' is not defined`. Always use lowercase `print()`.

    **Concept Tested:** Case Sensitivity

---

#### 6. Why do programmers add blank lines between sections of code?

<div class="upper-alpha" markdown>
1. Python requires blank lines or the program will crash
2. Blank lines make the output appear on separate screens
3. Blank lines divide code into readable groups, making it easier for humans to read
4. Blank lines tell Python to pause for one second
</div>

??? question "Show Answer"
    The correct answer is **C**. Python ignores blank lines completely — they have no effect on how the program runs. But human readers find them very helpful. Blank lines divide code into logical groups, the same way paragraph breaks divide a story into scenes. It is a good habit to add them between sections that do different jobs.

    **Concept Tested:** Blank Lines and Readability

---

#### 7. What does the `import` statement do?

<div class="upper-alpha" markdown>
1. It saves your Python file to your computer
2. It tells Python to display the next line of output
3. It loads an extra toolkit (library) so your program can use its features
4. It creates a new variable to store a number
</div>

??? question "Show Answer"
    The correct answer is **C**. The `import` keyword tells the Python interpreter to load a library before running the rest of your program. By itself Python knows how to do basic things like `print()`, but tools like `turtle`, `random`, and `math` must be imported first. Import statements always go at the very top of your program.

    **Concept Tested:** import Statement

---

#### 8. What is the correct first line to write before using turtle graphics?

<div class="upper-alpha" markdown>
1. `use turtle`
2. `import turtle`
3. `load turtle`
4. `start turtle`
</div>

??? question "Show Answer"
    The correct answer is **B**. You must write `import turtle` to load the turtle library before your program can use any turtle commands. The keyword is `import` — not `use`, `load`, or `start`. This line should appear at the top of your program before any turtle commands.

    **Concept Tested:** import turtle

---

#### 9. In the code `t = turtle.Turtle()`, what does the variable `t` represent?

<div class="upper-alpha" markdown>
1. The number of steps the turtle will take
2. The color of the turtle's pen
3. A turtle object that you can give movement commands to
4. The title of the turtle window
</div>

??? question "Show Answer"
    The correct answer is **C**. `turtle.Turtle()` creates a new turtle object and assigns it to the variable `t`. Once you have this turtle, you can give it commands using dot notation — for example, `t.forward(100)` tells turtle `t` to move forward 100 steps while drawing a line.

    **Concept Tested:** import turtle

---

#### 10. Which of the following best describes why Python is a good language to learn after Scratch?

<div class="upper-alpha" markdown>
1. Python uses the same colorful snap-together blocks as Scratch
2. Python is only used by beginners and has no professional uses
3. Python uses text-based instructions that read almost like plain English and is used by professionals worldwide
4. Python programs can only run on websites, just like Scratch projects
</div>

??? question "Show Answer"
    The correct answer is **C**. Python is a text-based language whose syntax reads almost like plain English, making it a natural step up from Scratch's visual blocks. It is one of the most popular programming languages in the world, used by professionals at companies like YouTube, NASA, and in artificial intelligence research.

    **Concept Tested:** Python Interpreter Overview

---
