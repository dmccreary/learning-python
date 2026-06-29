# Quiz: Python Code Structure

Test your understanding of Python code structure, indentation, keywords, and more with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. How do you create a multi-line string in Python?

<div class="upper-alpha" markdown>
1. Wrap the text in single quotes like `'text'`
2. Wrap the text in triple quotes like `"""text"""`
3. Use the `multiline()` function
4. Add a `#` before each line of text
</div>

??? question "Show Answer"
    The correct answer is **B**. Triple quotes (`"""` or `'''`) create a multi-line string in Python. Everything between the opening and closing triple quotes — including line breaks — becomes part of the string. Regular single or double quotes only work for text that stays on one line.

    **Concept Tested:** Multi-Line Strings

---

#### 2. In Python, what does indentation mean?

<div class="upper-alpha" markdown>
1. Using curly braces `{ }` to group lines of code together
2. Adding extra blank lines between sections of your program
3. Adding spaces at the start of lines to show which lines belong together
4. Writing comments at the end of every line of code
</div>

??? question "Show Answer"
    The correct answer is **C**. Indentation means adding spaces at the beginning of a line to push it to the right. In Python, indentation is not just for looks — it is part of the language's grammar. Python uses the number of spaces at the start of each line to decide which lines belong together in a block.

    **Concept Tested:** Indentation as Syntax

---

#### 3. What error does Python show when your indentation is wrong?

<div class="upper-alpha" markdown>
1. `NameError`
2. `TypeError`
3. `SyntaxError`
4. `IndentationError`
</div>

??? question "Show Answer"
    The correct answer is **D**. When you have too many spaces, too few spaces, or mix tabs and spaces, Python stops and shows an `IndentationError`. The fix is always to use exactly 4 spaces for each level of indentation and never mix tabs and spaces in the same file.

    **Concept Tested:** Indentation as Syntax

---

#### 4. What is a Python keyword?

<div class="upper-alpha" markdown>
1. A special word that Python reserves for its own use and cannot be used as a variable name
2. Any word you type inside a `print()` statement
3. The name you give to a turtle object
4. A word that appears in a comment after the `#` symbol
</div>

??? question "Show Answer"
    The correct answer is **A**. Python keywords are words that already have a specific meaning in the language — words like `for`, `if`, `while`, `def`, and `import`. You cannot use them as names for your own variables or functions because Python would be confused about whether you meant the command or your variable.

    **Concept Tested:** Python Keywords

---

#### 5. Which of the following is a Python keyword?

<div class="upper-alpha" markdown>
1. `turtle`
2. `print`
3. `for`
4. `forward`
</div>

??? question "Show Answer"
    The correct answer is **C**. `for` is a reserved Python keyword used to write loops. You cannot use `for` as a variable name. The others — `turtle`, `print`, and `forward` — are not keywords; they are built-in names or library names that could technically be reused (though doing so is a bad idea).

    **Concept Tested:** Python Keywords

---

#### 6. What signals the start of a code block in Python?

<div class="upper-alpha" markdown>
1. A line that starts with `#`
2. A line that ends with a colon `:`
3. A blank line before the indented code
4. The word `begin` at the start of the line
</div>

??? question "Show Answer"
    The correct answer is **B**. In Python, a colon `:` at the end of a line opens a new code block. The lines that follow, indented by 4 spaces, belong to that block. This pattern appears with `for` loops, `if` statements, function definitions, and more. Python does not use `begin`/`end` keywords like some other languages.

    **Concept Tested:** Code Block Structure

---

#### 7. What is the difference between a statement and an expression in Python?

<div class="upper-alpha" markdown>
1. A statement produces a value; an expression performs an action
2. A statement performs an action; an expression produces a value
3. Statements use quotes; expressions use numbers
4. Statements and expressions are two names for the exact same thing
</div>

??? question "Show Answer"
    The correct answer is **B**. A statement is an instruction that *does* something (like `print("Hello")` or `import turtle`) but does not produce a value you can store. An expression is a piece of code that *produces a value* (like `2 + 3` which produces `5`). Many Python lines combine both — for example `print(2 + 3)` is a statement containing an expression.

    **Concept Tested:** Statement vs Expression

---

#### 8. Which whitespace rule does Python actually enforce (cause an error if broken)?

<div class="upper-alpha" markdown>
1. You must add one blank line between every two statements
2. You must put exactly one space after every comma
3. You must use consistent indentation to show which lines belong inside a block
4. You must add spaces around the `=` sign in every assignment
</div>

??? question "Show Answer"
    The correct answer is **C**. Python enforces indentation rules — inconsistent or incorrect indentation causes an `IndentationError`. The other rules (spaces after commas, spaces around `=`, blank lines between statements) are style conventions that make code more readable but do not cause errors if you break them.

    **Concept Tested:** Whitespace Rules

---

#### 9. How do you set the turtle's pen color to orange in Python?

<div class="upper-alpha" markdown>
1. `t.color = "orange"`
2. `t.setcolor("orange")`
3. `t.pencolor("orange")`
4. `color("orange", t)`
</div>

??? question "Show Answer"
    The correct answer is **C**. The turtle method `pencolor()` sets the color of the turtle's drawing pen. You call it with a named color string like `t.pencolor("orange")`. The other options use incorrect syntax — Python would either raise an `AttributeError` or produce no visible change.

    **Concept Tested:** Named Colors

---

#### 10. Which of the following is NOT a valid named color you can use with turtle?

<div class="upper-alpha" markdown>
1. `"skyblue"`
2. `"forestgreen"`
3. `"ultraviolet"`
4. `"crimson"`
</div>

??? question "Show Answer"
    The correct answer is **C**. `"ultraviolet"` is not one of the 140 named X11 colors that the turtle library recognizes — it would cause a color error. The other options — `"skyblue"`, `"forestgreen"`, and `"crimson"` — are all valid X11 named colors you can use with `t.pencolor()`.

    **Concept Tested:** Named Colors

---
