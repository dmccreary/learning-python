# Quiz: Working with Strings

Test your understanding of Python strings, concatenation, escape characters, and more with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is a string in Python?

<div class="upper-alpha" markdown>
1. A list of numbers stored in a variable
2. Any sequence of characters wrapped in quotation marks
3. A special kind of loop that repeats text
4. A Python keyword used to print text
</div>

??? question "Show Answer"
    The correct answer is **B**. A string (`str`) is any sequence of characters — letters, digits, spaces, punctuation, and even emoji — wrapped in quotation marks. You can use either single quotes (`'...'`) or double quotes (`"..."`). Strings are different from numbers: `"42"` (with quotes) is a string, not the integer 42.

    **Concept Tested:** String Type

---

#### 2. Why might you choose single quotes for a string instead of double quotes?

<div class="upper-alpha" markdown>
1. Single quotes make the string run faster
2. Single quotes are required for strings stored in variables
3. When the string contains double quote marks inside it
4. Python only recognizes single quotes for multi-word strings
</div>

??? question "Show Answer"
    The correct answer is **C**. Both quote types work identically in Python. The main reason to switch is when your string contains one type of quote inside it. For example, `'She said "wow!"'` uses single quotes on the outside because the string contains double quotes. If you used the same quote type inside and outside, Python would get confused and raise a `SyntaxError`.

    **Concept Tested:** Single vs Double Quotes

---

#### 3. What does the `+` operator do when used with two strings?

<div class="upper-alpha" markdown>
1. Adds the lengths of the two strings together
2. Joins the two strings end-to-end (concatenation)
3. Converts both strings to numbers and adds them
4. Compares whether the two strings are equal
</div>

??? question "Show Answer"
    The correct answer is **B**. When `+` is used between two strings, it concatenates them — joins them end-to-end into one longer string. For example, `"Hello, " + "Monty"` produces `"Hello, Monty"`. Python does not add spaces automatically, so you must include any spaces you want in your concatenation.

    **Concept Tested:** String Concatenation

---

#### 4. What does `"Ha" * 3` produce?

<div class="upper-alpha" markdown>
1. `"Ha Ha Ha"` with spaces
2. `"HaHaHa"` with no spaces
3. `6` (the length of the repeated string)
4. An error, because you cannot multiply a string
</div>

??? question "Show Answer"
    The correct answer is **B**. The `*` operator repeats a string a given number of times with no separator. `"Ha" * 3` produces `"HaHaHa"`. If you want spaces between the repetitions, you must include them in the string itself: `"Ha " * 3` would give `"Ha Ha Ha "`. The number on the right must be an integer.

    **Concept Tested:** String Repetition

---

#### 5. What does the escape character `\n` do inside a string?

<div class="upper-alpha" markdown>
1. Prints a backslash followed by the letter n
2. Starts a new line in the output
3. Adds a tab-sized space to the output
4. Signals the end of the string
</div>

??? question "Show Answer"
    The correct answer is **B**. `\n` is the newline escape character. When Python encounters `\n` inside a string, it moves the cursor to the beginning of the next line in the output. This lets a single `print()` call produce multiple lines: `print("Line one\nLine two")` displays two lines of text.

    **Concept Tested:** Escape Characters

---

#### 6. What does `len("Hello!")` return?

<div class="upper-alpha" markdown>
1. `5`
2. `7`
3. `6`
4. `1`
</div>

??? question "Show Answer"
    The correct answer is **C**. `len()` counts every character in the string, including punctuation. `"Hello!"` has six characters: H, e, l, l, o, and !. The `len()` function is a Python built-in — you do not need to import anything to use it. It works on strings, lists, and many other data types.

    **Concept Tested:** String Length with len()

---

#### 7. What does it mean that Python strings are immutable?

<div class="upper-alpha" markdown>
1. Strings can never be stored in variables
2. You cannot change individual characters inside a string once it is created
3. Strings cannot be printed with the `print()` function
4. String variables cannot be reassigned to new values
</div>

??? question "Show Answer"
    The correct answer is **B**. Immutability means that once a string is created, you cannot modify its individual characters. Trying `name[0] = "B"` raises a `TypeError`. To "change" a string, you create a new string from the old one and reassign the variable. Immutability makes strings faster and safer to use in Python.

    **Concept Tested:** String Immutability

---

#### 8. Which of the following correctly handles a string that contains an apostrophe?

<div class="upper-alpha" markdown>
1. `"It's raining"`
2. `'It's raining'`
3. `"It\'s raining"`
4. Both A and C are correct
</div>

??? question "Show Answer"
    The correct answer is **D**. You can handle an apostrophe inside a string two ways: use double quotes on the outside (`"It's raining"`) so the apostrophe is just a regular character, or use an escape sequence inside single quotes (`'It\'s raining'`). Option B would cause a `SyntaxError` because the apostrophe ends the string early.

    **Concept Tested:** Single vs Double Quotes

---

#### 9. What is a raw string in Python, and how do you create one?

<div class="upper-alpha" markdown>
1. A string that removes all spaces — created with `space("")`
2. A string where backslash escape sequences are treated as literal characters — created with `r"..."`
3. A string that can only hold numbers — created with `num("...")`
4. A string printed without quotation marks — created with `bare("...")`
</div>

??? question "Show Answer"
    The correct answer is **B**. A raw string tells Python to ignore backslash escape sequences and treat every character literally. You create one by putting `r` before the opening quote: `r"C:\new_folder"` prints as `C:\new_folder` instead of starting a new line at `\n`. Raw strings are especially useful for Windows file paths and regular expressions.

    **Concept Tested:** Raw Strings

---

#### 10. What does `t.write("Score: 10")` do in a turtle program?

<div class="upper-alpha" markdown>
1. Saves the turtle program to a file named "Score: 10"
2. Draws the text "Score: 10" on the turtle canvas at the turtle's current position
3. Prints "Score: 10" in the text output area below the canvas
4. Sets the turtle's speed to 10 and labels it
</div>

??? question "Show Answer"
    The correct answer is **B**. `t.write(text)` draws a text label directly onto the turtle canvas at the turtle's current position. This lets you add scores, titles, and labels to your turtle drawings. The text appears on the canvas itself — not in the output area below — making it perfect for labeling shapes or displaying information inside a drawing.

    **Concept Tested:** Writing Text with turtle.write()

---
