# Quiz: More Booleans and Conditionals

Test your understanding of truthiness, short-circuit evaluation, ternary expressions, and compound conditions with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. Which of the following values is considered "falsy" in Python?

<div class="upper-alpha" markdown>
1. `"False"` (the string with text)
2. `[0]` (a list containing zero)
3. `1` (the integer one)
4. `[]` (an empty list)
</div>

??? question "Show Answer"
    The correct answer is **D**. In Python, an empty list `[]` is falsy — it is treated as `False` in a boolean context. `"False"` (a non-empty string) is truthy, `[0]` (a list with one item) is truthy, and `1` is truthy. The complete list of falsy values includes: `False`, `0`, `0.0`, `""`, `[]`, `{}`, and `None`.

    **Concept Tested:** Truthiness and Falsiness

---

#### 2. How can you use truthiness to check if a string `name` is not empty?

<div class="upper-alpha" markdown>
1. `if name == True:`
2. `if name != "":`
3. `if name:`
4. `if len(name) != 0:`
</div>

??? question "Show Answer"
    The correct answer is **C**. Because empty strings are falsy and non-empty strings are truthy, `if name:` is `True` when `name` contains text and `False` when it is empty. This is more Pythonic (idiomatic Python style) than explicitly comparing with `!= ""` or checking `len(name) != 0`. All three options B, C, and D produce the same result, but C is the preferred style.

    **Concept Tested:** Truthiness and Falsiness

---

#### 3. What is short-circuit evaluation with `and`?

<div class="upper-alpha" markdown>
1. Python evaluates the right side first to save time
2. Python stops evaluating an `and` expression as soon as the left side is falsy, without checking the right side
3. Python runs both sides of `and` at the same time in parallel
4. Python caches the result so it never runs the same expression twice
</div>

??? question "Show Answer"
    The correct answer is **B**. With `and`, if the left operand is falsy, the overall expression can never be `True`, so Python returns the left value immediately without evaluating the right side. This prevents potential errors — for example, `data and data.upper()` won't crash if `data` is `None`, because the short-circuit stops before calling `.upper()`.

    **Concept Tested:** Short-Circuit Evaluation

---

#### 4. What does the expression `name or "stranger"` return when `name = ""`?

<div class="upper-alpha" markdown>
1. `True`
2. `""` (the empty string)
3. `"stranger"`
4. An error, because you cannot use `or` with strings
</div>

??? question "Show Answer"
    The correct answer is **C**. `or` short-circuits on a truthy left side, but `""` is falsy, so Python continues to the right side and returns `"stranger"`. This is a useful default-value pattern: `value or default` returns `value` if it is truthy, otherwise returns `default`. When `name = "Monty"`, the expression returns `"Monty"` because it is truthy.

    **Concept Tested:** Short-Circuit Evaluation

---

#### 5. What is the correct way to check if `result` is `None`?

<div class="upper-alpha" markdown>
1. `if result == None:`
2. `if result = None:`
3. `if result is None:`
4. `if result.isNone():`
</div>

??? question "Show Answer"
    The correct answer is **C**. For `None`, `True`, and `False`, Python style recommends using `is` instead of `==`. `is` checks identity (whether two names refer to the exact same object in memory), while `==` checks equality in value. Since `None` is a singleton in Python (there is only one `None` object), `is None` is the correct and Pythonic way to check for it.

    **Concept Tested:** Checking for None with is

---

#### 6. What does this ternary expression evaluate to when `score = 85`?

```python
grade = "pass" if score >= 70 else "fail"
```

<div class="upper-alpha" markdown>
1. `"fail"`
2. `None`
3. `True`
4. `"pass"`
</div>

??? question "Show Answer"
    The correct answer is **D**. A ternary expression has the form `value_if_true if condition else value_if_false`. When `score = 85`, the condition `score >= 70` is `True` (85 is at least 70), so the expression evaluates to `"pass"`. If `score` were `65`, the condition would be `False` and the result would be `"fail"`.

    **Concept Tested:** Ternary Expression

---

#### 7. What is the difference between implicit and explicit type conversion?

<div class="upper-alpha" markdown>
1. Implicit conversion is slower; explicit conversion is faster
2. Implicit conversion happens automatically (e.g., int + float → float); explicit conversion uses functions like `int()` or `str()`
3. Implicit conversion requires `import`; explicit conversion is built in
4. Implicit conversion only works with numbers; explicit conversion works with any type
</div>

??? question "Show Answer"
    The correct answer is **B**. Implicit conversion (also called coercion) happens automatically when Python decides the conversion is safe — for example, `3 + 2.5` converts `3` to `3.0` automatically, giving `5.5`. Explicit conversion is when you deliberately call `int()`, `float()`, `str()`, or `bool()` to control the conversion yourself.

    **Concept Tested:** Implicit vs Explicit Conversion

---

#### 8. What does `x, y = input("Enter x and y: ").split()` do?

<div class="upper-alpha" markdown>
1. Asks the user for two separate inputs with two prompts
2. Gets one line of input from the user, splits it on spaces, and assigns the two parts to `x` and `y`
3. Creates a list `[x, y]` from the split input
4. Raises an error because `split()` cannot be chained directly with `input()`
</div>

??? question "Show Answer"
    The correct answer is **B**. `input()` returns a string of everything the user typed. `.split()` splits it on whitespace, producing a list. Multiple assignment then unpacks that list into the variables. If the user types `3 7`, the result is `x = "3"` and `y = "7"` (still strings — you need `int()` to convert them for math).

    **Concept Tested:** Reading Multiple Inputs

---

#### 9. Which compound condition checks that `age` is between 13 and 17 (inclusive)?

<div class="upper-alpha" markdown>
1. `if age > 13 or age < 17:`
2. `if age == 13 and age == 17:`
3. `if 13 <= age <= 17:`
4. `if age >= 13 or age <= 17:`
</div>

??? question "Show Answer"
    The correct answer is **C**. Python supports chained comparisons that read like math: `13 <= age <= 17` checks that age is at least 13 AND at most 17. This is equivalent to `age >= 13 and age <= 17`. Options A and D using `or` would be true for almost any age, and option B (using `==` and `and`) is impossible — no value can equal both 13 and 17 simultaneously.

    **Concept Tested:** Compound Conditions

---

#### 10. Which value is NOT falsy in Python?

<div class="upper-alpha" markdown>
1. `None`
2. `0`
3. `"0"` (the string containing zero)
4. `[]`
</div>

??? question "Show Answer"
    The correct answer is **C**. `"0"` is a non-empty string containing one character — the digit zero. Non-empty strings are truthy in Python, regardless of what characters they contain. The number `0` (integer), `None`, and `[]` (empty list) are all falsy. This distinction between the number zero and the string `"0"` is a common source of confusion.

    **Concept Tested:** Truthiness and Falsiness

---
