# Quiz: Error Handling and Debugging

Test your understanding of Python error types, tracebacks, try/except, and debugging techniques with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What type of error occurs when Python cannot parse your code before it even runs?

<div class="upper-alpha" markdown>
1. Logic error
2. Runtime error
3. Syntax error
4. Import error
</div>

??? question "Show Answer"
    The correct answer is **C**. A syntax error is caught before the program runs because Python cannot even understand the code. Examples include a missing colon after `if`, mismatched parentheses, or bad indentation. Runtime errors (exceptions) occur while the program is running. Logic errors are when the program runs but produces the wrong answer.

    **Concept Tested:** Types of Errors

---

#### 2. What kind of error is produced by `int("hello")`?

<div class="upper-alpha" markdown>
1. `SyntaxError`
2. `NameError`
3. `ValueError`
4. `TypeError`
</div>

??? question "Show Answer"
    The correct answer is **C**. A `ValueError` occurs when a function receives a value of the correct type but an inappropriate value for the context. `int()` expects a string that looks like a number, but `"hello"` cannot be converted to an integer. A `TypeError` would occur if you passed the wrong type entirely (like `int([1, 2, 3])`).

    **Concept Tested:** Common Exception Types

---

#### 3. What does a Python traceback tell you?

<div class="upper-alpha" markdown>
1. How fast the program ran before the error
2. The file, line number, exact code that crashed, and the exception type and message
3. A suggestion for how to fix the error automatically
4. The total memory used by the program before it crashed
</div>

??? question "Show Answer"
    The correct answer is **B**. A traceback shows the sequence of calls that led to the crash, and most importantly: the file name, line number, the exact line of code that failed, and the exception type with a description. Read it from the bottom up — the last line gives the error type and message, the lines above show where in the code it happened.

    **Concept Tested:** Reading Tracebacks

---

#### 4. What is the purpose of a `try/except` block?

<div class="upper-alpha" markdown>
1. To run code faster by skipping error checks
2. To catch runtime errors and handle them gracefully so the program does not crash
3. To test whether your code has syntax errors before running
4. To repeat code until it runs without errors
</div>

??? question "Show Answer"
    The correct answer is **B**. A `try/except` block lets you run risky code inside `try:` and specify what to do in `except:` if an error occurs. Instead of crashing, the program continues with the error-handling code. This is essential for writing programs that deal with user input, file operations, or network connections where errors are expected and should be handled.

    **Concept Tested:** try/except Blocks

---

#### 5. What exception is raised when you try to divide by zero?

<div class="upper-alpha" markdown>
1. `ValueError`
2. `MathError`
3. `ZeroDivisionError`
4. `ArithmeticException`
</div>

??? question "Show Answer"
    The correct answer is **C**. Python raises `ZeroDivisionError` when you attempt to divide any number by zero (`10 / 0`). You catch it specifically with `except ZeroDivisionError:`. Always check for a zero denominator before dividing if the denominator comes from user input or a calculation that could produce zero.

    **Concept Tested:** Common Exception Types

---

#### 6. What does the `else` clause do in a `try/except/else` block?

<div class="upper-alpha" markdown>
1. It runs if an exception was caught
2. It runs only if the `try` block completed without raising any exception
3. It always runs, whether or not an exception occurred
4. It re-raises the caught exception after handling it
</div>

??? question "Show Answer"
    The correct answer is **B**. The `else` clause in a `try/except` block runs only when the `try` block completed successfully — with no exception raised. This is a clean way to write the "success path" code separately from the `try` block itself. The `finally` clause, by contrast, always runs regardless of whether an exception occurred.

    **Concept Tested:** else and finally Clauses

---

#### 7. When does the `finally` block execute?

<div class="upper-alpha" markdown>
1. Only when the `try` block raises an exception
2. Only when no exception is raised
3. Always — whether or not an exception occurred
4. Only when you explicitly call it with `finally()`
</div>

??? question "Show Answer"
    The correct answer is **C**. The `finally` clause always executes, no matter what happens in the `try` and `except` blocks. It runs even if an exception is caught, even if it is not caught, and even if there is a `return` statement in the `try` block. This makes `finally` perfect for cleanup operations like closing files or network connections.

    **Concept Tested:** else and finally Clauses

---

#### 8. What does `raise ValueError("Speed cannot be negative.")` do?

<div class="upper-alpha" markdown>
1. Prints an error message and continues running the program
2. Triggers a `ValueError` exception with the given message, which will crash the program unless caught
3. Creates a new type of error called "Speed cannot be negative"
4. Stores the message in a variable called `ValueError`
</div>

??? question "Show Answer"
    The correct answer is **B**. The `raise` statement deliberately triggers an exception. `raise ValueError("message")` creates a `ValueError` with your custom message. This is useful for enforcing rules in your code — if bad input is detected, you raise an exception so the caller knows something is wrong. The caller can catch it with `try/except ValueError`.

    **Concept Tested:** raise Statement

---

#### 9. What is the difference between a runtime error and a logic error?

<div class="upper-alpha" markdown>
1. Runtime errors only occur in loops; logic errors only occur in functions
2. Runtime errors crash the program while it is running; logic errors allow the program to run but produce wrong results
3. Runtime errors can be fixed; logic errors are permanent
4. Runtime errors only happen with user input; logic errors only happen with math
</div>

??? question "Show Answer"
    The correct answer is **B**. A runtime error (exception) causes the program to crash mid-run with an error message — Python detected something wrong. A logic error is when the program runs to completion without crashing but produces incorrect results. Logic errors are often the hardest to find because Python gives no error message — you must figure out why the output is wrong.

    **Concept Tested:** Types of Errors

---

#### 10. What is the `assert` statement used for?

<div class="upper-alpha" markdown>
1. To print a message to the output area
2. To catch exceptions thrown by other code
3. To check that a condition is True and raise an `AssertionError` if it is not
4. To declare that a variable will never change
</div>

??? question "Show Answer"
    The correct answer is **C**. `assert condition, "message"` checks that `condition` is `True`. If it is `False`, Python raises an `AssertionError` with your message. It is commonly used in testing and debugging to verify that your code's assumptions are correct at specific points. For example, `assert len(items) > 0, "List must not be empty"` confirms the list has items before processing it.

    **Concept Tested:** assert Statement

---
