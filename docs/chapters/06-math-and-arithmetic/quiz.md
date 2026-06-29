# Quiz: Math and Arithmetic

Test your understanding of Python's arithmetic operators, order of operations, and augmented assignment with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the result of `10 // 3` in Python?

<div class="upper-alpha" markdown>
1. `3.3333`
2. `1`
3. `3`
4. `0.3`
</div>

??? question "Show Answer"
    The correct answer is **C**. The `//` operator is integer division — it divides and keeps only the whole-number part, throwing away any decimal. 10 divided by 3 is 3 with a remainder of 1, so `10 // 3` gives `3`. If you want the decimal result, use `/` instead: `10 / 3` gives `3.3333...`.

    **Concept Tested:** Integer Division Operator

---

#### 2. What does the modulo operator `%` calculate?

<div class="upper-alpha" markdown>
1. The percentage of one number compared to another
2. The remainder left over after dividing two integers
3. The average of two numbers
4. The larger of two numbers
</div>

??? question "Show Answer"
    The correct answer is **B**. The `%` operator (modulo) gives you the remainder after division. For example, `10 % 3` is `1` because 3 goes into 10 three times (that's 9), and 10 − 9 = 1 left over. Modulo is very useful for checking if a number is even (`n % 2 == 0`) and for creating repeating patterns in programs.

    **Concept Tested:** Modulo Operator

---

#### 3. What does `2 ** 8` evaluate to in Python?

<div class="upper-alpha" markdown>
1. `16`
2. `256`
3. `28`
4. `10`
</div>

??? question "Show Answer"
    The correct answer is **B**. The `**` operator is exponentiation — "to the power of." `2 ** 8` means 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2, which equals 256. This is the same as 2 raised to the 8th power in mathematics. Exponentiation is one of Python's three extra arithmetic operators not found in Scratch.

    **Concept Tested:** Exponentiation Operator

---

#### 4. What is the result of `2 + 3 * 4` in Python?

<div class="upper-alpha" markdown>
1. `20`
2. `24`
3. `14`
4. `9`
</div>

??? question "Show Answer"
    The correct answer is **C**. Python follows the standard order of operations (PEMDAS): multiplication comes before addition. So Python calculates `3 * 4 = 12` first, then adds `2 + 12 = 14`. If you wanted to add first and then multiply, you would write `(2 + 3) * 4`, which equals `20`.

    **Concept Tested:** Order of Operations

---

#### 5. Which shorthand operator adds 5 to the variable `score`?

<div class="upper-alpha" markdown>
1. `score =+ 5`
2. `score += 5`
3. `score + 5`
4. `score == score + 5`
</div>

??? question "Show Answer"
    The correct answer is **B**. `score += 5` is an augmented assignment operator — it is shorthand for `score = score + 5`. It reads the current value of `score`, adds 5, and stores the result back in `score`. This pattern is used constantly in loops: `count += 1` adds 1 to a counter every time the loop repeats.

    **Concept Tested:** Augmented Assignment Operators

---

#### 6. What is the value of `x` after this code runs?

```python
x = 10
x -= 3
x *= 2
print(x)
```

<div class="upper-alpha" markdown>
1. `7`
2. `14`
3. `20`
4. `4`
</div>

??? question "Show Answer"
    The correct answer is **B**. Python runs each line in order. First `x = 10` sets x to 10. Then `x -= 3` means `x = x - 3` = `10 - 3` = 7, so x is now 7. Then `x *= 2` means `x = x * 2` = `7 * 2` = 14. The final value printed is 14.

    **Concept Tested:** Augmented Assignment Operators

---

#### 7. What does `a, b = 5, 10` do in Python?

<div class="upper-alpha" markdown>
1. Creates a list with two items: 5 and 10
2. Assigns 5 to `a` and 10 to `b` at the same time
3. Swaps the values of `a` and `b`
4. Multiplies `a` by `b` and stores the result
</div>

??? question "Show Answer"
    The correct answer is **B**. Multiple assignment lets you assign values to two or more variables in one line. Python reads the values on the right (`5` and `10`) and assigns them left to right to the variables on the left (`a` and `b`). After this line, `a` holds `5` and `b` holds `10`.

    **Concept Tested:** Multiple Assignment

---

#### 8. Why does `10 / 2` return `5.0` instead of `5` in Python?

<div class="upper-alpha" markdown>
1. Python automatically rounds up all division results
2. The `/` operator always returns a float, even when the answer is a whole number
3. `5.0` and `5` are exactly the same in Python
4. You need to use parentheses to get an integer from division
</div>

??? question "Show Answer"
    The correct answer is **B**. In Python 3, the `/` division operator always returns a float (a number with a decimal point), even when the numbers divide evenly. So `10 / 2` gives `5.0`, not `5`. If you want the integer result, use the `//` operator: `10 // 2` gives `5`.

    **Concept Tested:** Division Returns Float

---

#### 9. What is `3e8` in Python?

<div class="upper-alpha" markdown>
1. The number 38
2. 3 raised to the power of 8 (= 6561)
3. 3 times 10 to the power of 8 (= 300,000,000)
4. An error, because `e` is not a valid number character
</div>

??? question "Show Answer"
    The correct answer is **C**. Python uses the letter `e` (or `E`) for scientific notation. `3e8` means 3 × 10^8, which equals 300,000,000 (the approximate speed of light in meters per second). Scientific notation is useful when working with very large or very small numbers to avoid writing many zeros.

    **Concept Tested:** Scientific Notation Floats

---

#### 10. To draw a regular hexagon with a turtle, what turn angle should you use at each corner?

<div class="upper-alpha" markdown>
1. 45 degrees
2. 72 degrees
3. 60 degrees
4. 120 degrees
</div>

??? question "Show Answer"
    The correct answer is **C**. For any regular polygon, the turn angle at each corner is `360 / number_of_sides`. A hexagon has 6 sides, so the turn angle is `360 / 6 = 60` degrees. You would repeat `t.forward(length)` and `t.right(60)` six times. For a pentagon (5 sides), the turn is `360 / 5 = 72` degrees.

    **Concept Tested:** Arithmetic Operators

---
