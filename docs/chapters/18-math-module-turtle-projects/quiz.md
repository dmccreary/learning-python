# Quiz: Math Module and Turtle Projects

Test your understanding of Python's built-in math functions, the math module, and radians vs degrees with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does `abs(-15)` return?

<div class="upper-alpha" markdown>
1. `-15`
2. `15`
3. `0`
4. An error, because you cannot use `abs()` on negative numbers
</div>

??? question "Show Answer"
    The correct answer is **B**. `abs(x)` returns the absolute value of a number — the distance from zero, which is always non-negative. `abs(-15)` returns `15`. `abs(15)` also returns `15`. The `abs()` function is built into Python and does not require any import.

    **Concept Tested:** abs() Function

---

#### 2. What does `round(3.74, 1)` return?

<div class="upper-alpha" markdown>
1. `3`
2. `4.0`
3. `3.7`
4. `3.74`
</div>

??? question "Show Answer"
    The correct answer is **C**. `round(x, n)` rounds `x` to `n` decimal places. `round(3.74, 1)` rounds to 1 decimal place, giving `3.7` (since the digit after the first decimal is 4, which rounds down). With no second argument, `round(x)` rounds to the nearest integer: `round(3.74)` gives `4`.

    **Concept Tested:** round() Function

---

#### 3. What does `math.sqrt(144)` return?

<div class="upper-alpha" markdown>
1. `12` (an integer)
2. `12.0` (a float)
3. `72.0`
4. `20736.0`
</div>

??? question "Show Answer"
    The correct answer is **B**. `math.sqrt(x)` always returns a float, even when the result is a whole number. The square root of 144 is 12, but `math.sqrt(144)` returns `12.0`. If you need an integer, you can wrap it: `int(math.sqrt(144))` gives `12`.

    **Concept Tested:** math.sqrt()

---

#### 4. What is the difference between `math.floor(3.9)` and `math.ceil(3.1)`?

<div class="upper-alpha" markdown>
1. Both return `3`
2. `floor` returns `4` and `ceil` returns `3`
3. `floor` returns `3` (rounds down) and `ceil` returns `4` (rounds up)
4. Both return `4`
</div>

??? question "Show Answer"
    The correct answer is **C**. `math.floor(x)` rounds **down** to the nearest integer (3.9 → 3), and `math.ceil(x)` rounds **up** to the nearest integer (3.1 → 4). This is different from `round()`, which rounds to the nearest integer (up or down depending on the decimal). Floor always goes down, ceil always goes up.

    **Concept Tested:** math.floor() and math.ceil()

---

#### 5. What is the approximate value of `math.pi`?

<div class="upper-alpha" markdown>
1. `2.71828`
2. `1.41421`
3. `3.14159`
4. `6.28318`
</div>

??? question "Show Answer"
    The correct answer is **C**. `math.pi` is the mathematical constant π (pi), approximately `3.14159265358979`. It represents the ratio of a circle's circumference to its diameter. The constant `math.e` (approximately 2.71828) is Euler's number, and `6.28318` is 2π (two pi), also called tau.

    **Concept Tested:** math.pi

---

#### 6. Python's `math.sin()` and `math.cos()` expect their input in which unit?

<div class="upper-alpha" markdown>
1. Degrees (like in a geometry class)
2. Radians
3. Gradians (1/400 of a circle)
4. Pixels
</div>

??? question "Show Answer"
    The correct answer is **B**. `math.sin()` and `math.cos()` take their arguments in **radians**, not degrees. If you want the sine of 90 degrees, you must first convert: `math.sin(math.radians(90))`. One full circle is 360 degrees = 2π radians. A half circle is 180 degrees = π radians.

    **Concept Tested:** Radians vs Degrees

---

#### 7. What does `math.radians(180)` return?

<div class="upper-alpha" markdown>
1. `180.0`
2. `90.0`
3. `math.pi` (approximately 3.14159)
4. `2 * math.pi` (approximately 6.28318)
</div>

??? question "Show Answer"
    The correct answer is **C**. `math.radians(degrees)` converts an angle from degrees to radians. 180 degrees equals π radians (a half circle). So `math.radians(180)` returns approximately `3.14159`. Similarly, `math.radians(360)` returns `2 * math.pi` (a full circle).

    **Concept Tested:** math.radians()

---

#### 8. What does `math.factorial(5)` return?

<div class="upper-alpha" markdown>
1. `5` (just the number itself)
2. `25` (5 squared)
3. `10` (5 + 4 + 3 + 2 + 1)
4. `120` (5 × 4 × 3 × 2 × 1)
</div>

??? question "Show Answer"
    The correct answer is **D**. `math.factorial(n)` computes n! — the product of all positive integers up to n. `5! = 5 × 4 × 3 × 2 × 1 = 120`. Factorials grow very quickly: `10! = 3,628,800`. Factorials are used in probability, combinations, and many mathematical formulas.

    **Concept Tested:** math.factorial()

---

#### 9. Why is the sine wave such a useful pattern for turtle art and animation?

<div class="upper-alpha" markdown>
1. Because `math.sin()` always returns integers that are easy to use with turtle
2. Because the sine function produces smooth, repeating up-and-down values between -1 and 1, perfect for creating wave shapes
3. Because sine values are always between 0 and 100, matching the pixel scale of the turtle canvas
4. Because `math.sin()` is the only function that works inside a `for` loop
</div>

??? question "Show Answer"
    The correct answer is **B**. `math.sin()` returns values that smoothly oscillate between -1.0 and 1.0 as the input angle increases. By multiplying the output by an amplitude (like 100 pixels) and stepping through angles with a loop, you can make the turtle trace a smooth wave pattern. This same principle is used in games, music, and physics simulations.

    **Concept Tested:** math.sin() and Turtle Projects

---

#### 10. What is the result of `math.degrees(math.pi)`?

<div class="upper-alpha" markdown>
1. `90.0`
2. `360.0`
3. `3.14159`
4. `180.0`
</div>

??? question "Show Answer"
    The correct answer is **D**. `math.degrees(radians)` converts from radians to degrees. π radians equals 180 degrees (a half circle). So `math.degrees(math.pi)` returns `180.0`. This is the reverse of `math.radians(180)`. Use `math.degrees()` when you have a radian value (perhaps from a calculation) and need to display it in degrees.

    **Concept Tested:** math.degrees()

---
