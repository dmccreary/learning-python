# Quiz: User Input and Type Conversion

Test your understanding of the input() function, type conversion, and input validation with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What data type does `input()` always return?

<div class="upper-alpha" markdown>
1. An integer, if the user types a number
2. A float, if the user types a decimal
3. A string, regardless of what the user types
4. A boolean, if the user types "yes" or "no"
</div>

??? question "Show Answer"
    The correct answer is **C**. `input()` always returns a string — no matter what the user types. If the user types `42`, Python gives you the string `"42"`, not the integer `42`. This means you must convert the input to the right data type before doing math or other operations that require a number.

    **Concept Tested:** input() Function

---

#### 2. What happens if you try to add the result of `input()` to a number without converting it first?

<div class="upper-alpha" markdown>
1. Python automatically converts the string to a number and adds them
2. Python raises a `TypeError` because you cannot add a string and a number
3. Python concatenates the number to the string
4. Python prints an empty line and continues
</div>

??? question "Show Answer"
    The correct answer is **B**. Python does not automatically convert types. If `age` holds the string `"12"` (from `input()`), then `age + 1` raises a `TypeError: can only concatenate str (not "int") to str`. You must explicitly convert with `int(age)` or `float(age)` before performing arithmetic.

    **Concept Tested:** Type Conversion

---

#### 3. What does `int("42")` return?

<div class="upper-alpha" markdown>
1. The string `"42"` unchanged
2. The float `42.0`
3. The integer `42`
4. An error, because strings cannot be converted to integers
</div>

??? question "Show Answer"
    The correct answer is **C**. `int()` converts a string (or float) to a whole number (integer). `int("42")` returns the integer `42`. Note that `int("3.14")` would raise a `ValueError` because `"3.14"` contains a decimal point — you would need `float("3.14")` first, then `int()` if you want the whole number part.

    **Concept Tested:** int() Conversion

---

#### 4. Why do you need `str()` when building a message like `"Score: " + score`?

<div class="upper-alpha" markdown>
1. `str()` makes the number print in bold
2. Python cannot concatenate a string and an integer with `+` — you must convert the number to a string first
3. `str()` converts the number to a float before joining
4. You need `str()` only when the number is negative
</div>

??? question "Show Answer"
    The correct answer is **B**. The `+` operator works differently depending on types. With two strings, it concatenates. With two numbers, it adds. But mixing a string and a number with `+` raises a `TypeError`. To build a message that includes a number, you must convert the number to a string first: `"Score: " + str(score)`.

    **Concept Tested:** str() Conversion

---

#### 5. What does `bool(0)` return?

<div class="upper-alpha" markdown>
1. `True`
2. `None`
3. `"False"`
4. `False`
</div>

??? question "Show Answer"
    The correct answer is **D**. `bool()` converts a value to `True` or `False`. The values that become `False` are: `0`, `0.0`, `""` (empty string), `None`, and empty collections. Everything else becomes `True`. So `bool(0)` returns `False`, but `bool(1)` or `bool(-5)` returns `True`.

    **Concept Tested:** bool() Conversion

---

#### 6. What does `type(3.14)` return?

<div class="upper-alpha" markdown>
1. `<class 'int'>`
2. `3.14`
3. `<class 'str'>`
4. `<class 'float'>`
</div>

??? question "Show Answer"
    The correct answer is **D**. `type()` returns the data type of a value as a class object. `3.14` is a floating-point number, so `type(3.14)` returns `<class 'float'>`. This is very useful for debugging when you are not sure what type a variable holds — especially after receiving input from the user.

    **Concept Tested:** type() Function

---

#### 7. What does `"  hello  ".strip()` return?

<div class="upper-alpha" markdown>
1. `"hello"` with leading and trailing spaces removed
2. `"HELLO"` in uppercase
3. `"  hello  "` unchanged
4. An error because `strip()` requires an argument
</div>

??? question "Show Answer"
    The correct answer is **A**. `strip()` removes leading and trailing whitespace (spaces, tabs, newlines) from a string. `"  hello  ".strip()` returns `"hello"`. This is important for cleaning up user input, which often has accidental extra spaces. `strip()` does not affect spaces in the middle of the string.

    **Concept Tested:** Input Validation

---

#### 8. What does `str.isdigit()` return when called on the string `"123"`?

<div class="upper-alpha" markdown>
1. `123` (the integer)
2. `True`
3. `False`
4. `"digit"`
</div>

??? question "Show Answer"
    The correct answer is **B**. `isdigit()` returns `True` if every character in the string is a digit (0-9), and `False` otherwise. `"123".isdigit()` returns `True`. `"12.3".isdigit()` returns `False` (because of the dot), and `"abc".isdigit()` returns `False`. This lets you safely check before calling `int()` to avoid a `ValueError`.

    **Concept Tested:** Input Validation

---

#### 9. What is input validation?

<div class="upper-alpha" markdown>
1. Automatically converting all input to integers
2. Checking that user input is safe and in the expected format before using it
3. Printing the user's input back to them before the program continues
4. Storing user input in a global variable for later use
</div>

??? question "Show Answer"
    The correct answer is **B**. Input validation means checking that the data the user provides is in the form your program expects before trying to use it. For example, checking that `raw.isdigit()` before calling `int(raw)` prevents a `ValueError` crash if the user types letters instead of a number. Good programs never trust raw user input without checking it first.

    **Concept Tested:** Input Validation

---

#### 10. Which line of code correctly reads a number from the user and stores it as an integer?

<div class="upper-alpha" markdown>
1. `age = input(int("How old are you? "))`
2. `age = input("How old are you? ")`
3. `age = int(input("How old are you? "))`
4. `age = str(int("How old are you? "))`
</div>

??? question "Show Answer"
    The correct answer is **C**. `int(input("How old are you? "))` works by first calling `input()` to get the user's response as a string, then immediately passing that string to `int()` to convert it to an integer. This is the standard Python pattern for reading a number from the user. Option A incorrectly tries to convert the prompt message itself.

    **Concept Tested:** Type Conversion

---
