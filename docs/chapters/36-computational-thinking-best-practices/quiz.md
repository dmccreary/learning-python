# Quiz: Computational Thinking and Best Practices

Test your understanding of computational thinking, DRY principles, abstraction, meaningful names, debugging strategies, and version control with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does decomposition mean in computational thinking?

<div class="upper-alpha" markdown>
1. Breaking a program into its individual lines of code for analysis
2. Breaking a large, complex problem into smaller, more manageable sub-problems that can each be solved independently
3. Converting a high-level programming language into machine code
4. Removing unnecessary code from a program to make it shorter
</div>

??? question "Show Answer"
    The correct answer is **B**. Decomposition is one of the four pillars of computational thinking. Instead of trying to solve an entire complex problem at once, you break it into smaller pieces. For example, "build a quiz app" decomposes into "store questions," "ask user," "check answer," and "track score." Each piece is small enough to code and test independently.

    **Concept Tested:** Decomposition

---

#### 2. What is abstraction in computational thinking?

<div class="upper-alpha" markdown>
1. Writing code in a foreign language to hide what it does
2. Focusing on the essential details of a problem and hiding or ignoring unnecessary complexity
3. Replacing concrete numbers with variables in a formula
4. Using abstract art as inspiration for user interface design
</div>

??? question "Show Answer"
    The correct answer is **B**. Abstraction means focusing on what matters for solving the current problem and hiding the details that don't. A function `ask_question(q)` abstracts away the input/output details — the caller only needs to know it asks a question and returns the answer. Good abstraction makes code reusable and easier to reason about.

    **Concept Tested:** Abstraction

---

#### 3. What does the DRY principle stand for, and what problem does it solve?

<div class="upper-alpha" markdown>
1. "Develop Rapidly, Yes" — it encourages writing code as fast as possible
2. "Don't Repeat Yourself" — it prevents duplicated logic, so bugs and changes only need to be addressed in one place
3. "Delete Redundant Yield" — it removes unnecessary generator expressions
4. "Define, Run, Yield" — the three steps of a function's lifecycle
</div>

??? question "Show Answer"
    The correct answer is **B**. DRY stands for "Don't Repeat Yourself." If the same logic appears in multiple places, a bug fix or change must be made in every copy — and it is easy to miss one. DRY says: extract repeated logic into a single function or variable. The opposite of DRY is "WET" (Write Everything Twice), which creates brittle, hard-to-maintain code.

    **Concept Tested:** DRY Principle

---

#### 4. What is pattern recognition in computational thinking?

<div class="upper-alpha" markdown>
1. Using regular expressions to find text patterns
2. Designing repeating visual patterns in turtle graphics
3. Spotting similarities, repetition, and shared structure across different parts of a problem
4. Matching student code against known correct solutions
</div>

??? question "Show Answer"
    The correct answer is **C**. Pattern recognition means noticing when different parts of a problem have the same structure. For example, noticing that every quiz question has a text, four choices, and a correct answer — that pattern suggests a list of dictionaries or a `Question` class. Recognizing patterns lets you reuse solutions instead of solving the same problem repeatedly.

    **Concept Tested:** Pattern Recognition

---

#### 5. What makes a variable name "meaningful"?

<div class="upper-alpha" markdown>
1. It is as short as possible to save typing
2. It starts with a capital letter to stand out
3. It clearly describes what value the variable holds, making the code readable without extra comments
4. It contains no vowels, following traditional Unix naming conventions
</div>

??? question "Show Answer"
    The correct answer is **C**. A meaningful name communicates the purpose of the variable at a glance. `student_score` is much clearer than `x` or `s`. Self-documenting names reduce the need for comments and make bugs easier to find. PEP 8 (Python's style guide) recommends `snake_case` for variables — lowercase with underscores between words.

    **Concept Tested:** Meaningful Names

---

#### 6. What is refactoring?

<div class="upper-alpha" markdown>
1. Converting Python 2 code to Python 3 syntax
2. Improving the structure and readability of existing code without changing what it does
3. Rewriting a program from scratch using a different language
4. Adding new features to a program to improve what it does
</div>

??? question "Show Answer"
    The correct answer is **B**. Refactoring means restructuring existing code to make it cleaner, more readable, or better organized — without changing its external behavior. Examples: renaming variables for clarity, extracting repeated logic into a function, simplifying a complex conditional. Good programmers refactor regularly to keep their codebase maintainable.

    **Concept Tested:** Refactoring

---

#### 7. What is test-driven thinking?

<div class="upper-alpha" markdown>
1. Writing tests only after the program is complete and working
2. Using a testing framework like pytest to run automated tests
3. Thinking about what the correct output should be before writing code, and verifying each function works as expected
4. Testing a program by having users try to break it
</div>

??? question "Show Answer"
    The correct answer is **C**. Test-driven thinking means deciding what a function should do and what its output should be before (or as) you write it. For beginners, this means: think about expected inputs and outputs, test with known values, and verify edge cases (empty list, zero, negative). Formal Test-Driven Development (TDD) writes automated tests first; test-driven thinking applies the same mindset informally.

    **Concept Tested:** Test-Driven Thinking

---

#### 8. What is version control, and why do programmers use it?

<div class="upper-alpha" markdown>
1. A way to control which version of Python is running in your program
2. A system that tracks changes to code over time, allowing you to see history, undo changes, and collaborate with others
3. A feature that automatically updates your Python packages to the latest version
4. A type of commenting system that records who wrote each line of code
</div>

??? question "Show Answer"
    The correct answer is **B**. Version control (most commonly Git) records every change you make to your code as a series of commits. This lets you see the full history of your project, revert to any previous state if you break something, work on experimental features without risking the working code, and collaborate with others without overwriting each other's changes. GitHub hosts Git repositories online.

    **Concept Tested:** Version Control

---

#### 9. What is pair programming?

<div class="upper-alpha" markdown>
1. Writing code that runs in parallel on two CPU cores simultaneously
2. Two programmers working together at one computer — one types while the other reviews, and they switch roles regularly
3. Writing the same program twice to verify both versions produce the same output
4. Programming in pairs of files — one for the code and one for its tests
</div>

??? question "Show Answer"
    The correct answer is **B**. Pair programming is a practice where two developers work together at one workstation. One is the "driver" who types the code; the other is the "navigator" who reviews, suggests, and spots issues. They switch roles regularly. Research shows pair programming produces fewer bugs and helps both programmers learn from each other, though it takes more total time.

    **Concept Tested:** Pair Programming

---

#### 10. What does it mean for code to be "modular"?

<div class="upper-alpha" markdown>
1. The code uses the `mod` operator (`%`) frequently for calculations
2. The code is organized into separate, self-contained functions or modules, each with a single clear responsibility
3. The code is distributed across multiple computers running simultaneously
4. The code only uses features from the Python standard library without any external packages
</div>

??? question "Show Answer"
    The correct answer is **B**. Modular code is organized into small, independent units (functions, classes, or modules) where each unit has one clear job. Modular code is easier to test (test each piece in isolation), debug (isolate the broken piece), and reuse (copy a function into a new project). The opposite is monolithic code — a long script with no functions, where everything is tangled together.

    **Concept Tested:** Modularity

---
