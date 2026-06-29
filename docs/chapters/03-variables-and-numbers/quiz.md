# Quiz: Variables and Numbers

Test your understanding of variables, integers, floats, and naming rules with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is a variable in Python?

<div class="upper-alpha" markdown>
1. A word that Python reserves for its own use
2. A labeled storage location that holds a value in your program's memory
3. A type of loop that repeats a block of code
4. A special symbol used to write comments
</div>

??? question "Show Answer"
    The correct answer is **B**. A variable is a labeled storage location in your program's memory. You give it a name, store a value inside it, and Python remembers that value for you. Think of it like a sticky note with a name on the front and the current value on the back — when you need it, you look it up by name.

    **Concept Tested:** Variable Assignment

---

#### 2. What does the `=` sign mean in the Python statement `score = 10`?

<div class="upper-alpha" markdown>
1. Check whether `score` is equal to `10`
2. Add `10` to the current value of `score`
3. Store the value `10` in the variable named `score`
4. Print the number `10` to the output area
</div>

??? question "Show Answer"
    The correct answer is **C**. In Python, `=` is the assignment operator — it means "take the value on the right and store it in the variable on the left." It is a one-way instruction; the value flows from right to left. It does not mean "is equal to" the way it does in math — that comparison uses `==` (two equals signs).

    **Concept Tested:** Variable Assignment

---

#### 3. Which variable name follows Python's snake_case naming convention?

<div class="upper-alpha" markdown>
1. `MyScore`
2. `my-score`
3. `myscore`
4. `my_score`
</div>

??? question "Show Answer"
    The correct answer is **D**. Snake_case joins words with underscores and keeps all letters lowercase: `my_score`. `MyScore` uses capital letters (that is camelCase or PascalCase). `my-score` uses a dash, which Python reads as subtraction. `myscore` runs the words together with no separator, making it harder to read.

    **Concept Tested:** Variable Naming (snake_case)

---

#### 4. What kind of number is `3.14` in Python?

<div class="upper-alpha" markdown>
1. An integer (`int`)
2. A string (`str`)
3. A float (`float`)
4. A boolean (`bool`)
</div>

??? question "Show Answer"
    The correct answer is **C**. Any number with a decimal point is a float (short for floating-point number) in Python. Integers are whole numbers with no decimal point. `3.14` has a decimal point, so Python stores it as a `float`. You use floats for measurements, money, and values that do not land exactly on a whole number.

    **Concept Tested:** Floats

---

#### 5. What will Python print when this code runs?

```python
score = 10
score = 25
print(score)
```

<div class="upper-alpha" markdown>
1. `10`
2. `25`
3. `10` and then `25` on two lines
4. An error, because you cannot assign to a variable twice
</div>

??? question "Show Answer"
    The correct answer is **B**. Python reads each line in order. First it stores `10` in `score`, then it replaces that value with `25`. When `print(score)` runs, the variable holds `25`. There is no error — reassigning a variable is completely normal and is how programs update values as they run.

    **Concept Tested:** Variable Reassignment

---

#### 6. Which variable name would cause a Python error?

<div class="upper-alpha" markdown>
1. `player_score`
2. `_hidden`
3. `1st_place`
4. `total_points`
</div>

??? question "Show Answer"
    The correct answer is **C**. Variable names cannot start with a digit. `1st_place` begins with `1`, so Python raises a `SyntaxError`. Variable names must start with a letter or an underscore. `player_score`, `_hidden`, and `total_points` all follow that rule and are valid names.

    **Concept Tested:** Variable Naming Rules

---

#### 7. What does Python print when you divide two integers using `/`?

```python
result = 10 / 2
print(result)
```

<div class="upper-alpha" markdown>
1. `5` (an integer)
2. `5.0` (a float)
3. `10/2` (a fraction)
4. An error, because you cannot divide integers
</div>

??? question "Show Answer"
    The correct answer is **B**. In Python 3, dividing with `/` always returns a float, even when the result is a whole number. So `10 / 2` gives `5.0`, not `5`. If you want a whole-number result, use the floor division operator `//` instead: `10 // 2` gives `5`.

    **Concept Tested:** Floats

---

#### 8. What is the value of `None` in Python?

<div class="upper-alpha" markdown>
1. The integer zero (`0`)
2. An empty string with no characters (`""`)
3. A special value meaning "no value yet" or "nothing here"
4. The boolean value `False`
</div>

??? question "Show Answer"
    The correct answer is **C**. `None` is a special Python value of type `NoneType` that means "no value" or "nothing here." It is different from `0` (an integer), `""` (an empty string), and `False` (a boolean) — each of those is something, whereas `None` means the absence of any value at all.

    **Concept Tested:** None Value

---

#### 9. What is wrong with the variable name `my-score`?

<div class="upper-alpha" markdown>
1. It is too long and will slow down the program
2. Python reads the dash as a minus sign and thinks you are subtracting two variables
3. Variable names must start with a capital letter
4. You cannot use the letter `y` in a variable name
</div>

??? question "Show Answer"
    The correct answer is **B**. The dash `-` is Python's subtraction operator. When Python sees `my-score`, it reads it as the variable `my` minus the variable `score`, not as a single name. This causes a `NameError` because `my` and `score` have not been defined. Always use an underscore `_` to join words in a variable name.

    **Concept Tested:** Variable Naming Rules

---

#### 10. Which of the following best describes when to use an integer versus a float?

<div class="upper-alpha" markdown>
1. Always use floats — they are more accurate than integers
2. Use integers for things you count (sides, lives, score) and floats for measurements or decimals
3. Use integers for text and floats for numbers
4. Use floats in the first half of a program and integers in the second half
</div>

??? question "Show Answer"
    The correct answer is **B**. Integers (`int`) are for countable whole things — number of lives, game score, number of sides on a shape. Floats (`float`) are for values that can have decimal parts — heights, prices, percentages, pi. Choosing the right type makes your code clearer and avoids unexpected decimal results.

    **Concept Tested:** Integers

---
