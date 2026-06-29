# Quiz: Making Decisions with If/Else

Test your understanding of Boolean values, comparison operators, and if/elif/else branching with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What are the only two possible values of a Boolean in Python?

<div class="upper-alpha" markdown>
1. `yes` and `no`
2. `1` and `0`
3. `True` and `False`
4. `on` and `off`
</div>

??? question "Show Answer"
    The correct answer is **C**. In Python, Boolean values are written exactly as `True` and `False` — with a capital first letter. They belong to the type `bool`. Booleans are the result of comparisons and are used in `if` statements to decide which branch of code to run.

    **Concept Tested:** Boolean Type

---

#### 2. What is the difference between `=` and `==` in Python?

<div class="upper-alpha" markdown>
1. `=` compares two values; `==` assigns a value to a variable
2. `=` assigns a value to a variable; `==` compares two values for equality
3. Both do the same thing — they are interchangeable
4. `=` works with numbers; `==` works with strings
</div>

??? question "Show Answer"
    The correct answer is **B**. `=` is the assignment operator: `x = 5` stores the value 5 in the variable `x`. `==` is the equality comparison operator: `x == 5` checks whether `x` currently holds the value 5 and returns `True` or `False`. Using `=` inside an `if` condition causes a `SyntaxError` — this is one of the most common beginner mistakes.

    **Concept Tested:** Comparison Operators

---

#### 3. What will this code print when `score = 75`?

```python
if score >= 60:
    print("Passing!")
else:
    print("Try again!")
```

<div class="upper-alpha" markdown>
1. `Try again!`
2. Both `Passing!` and `Try again!`
3. `Passing!`
4. Nothing — the program skips both branches
</div>

??? question "Show Answer"
    The correct answer is **C**. When `score = 75`, the condition `score >= 60` evaluates to `True` (75 is greater than or equal to 60). So Python runs the `if` block and prints `"Passing!"`. Since the `if` block ran, Python skips the `else` block entirely. An `if/else` always runs exactly one of the two branches.

    **Concept Tested:** if...else Block

---

#### 4. What does the `elif` keyword do in a chain of conditions?

<div class="upper-alpha" markdown>
1. It runs alongside the `if` block every time the program runs
2. It creates a new variable to store a condition result
3. It checks an additional condition only if all previous conditions were False
4. It restarts the entire if/elif/else chain from the beginning
</div>

??? question "Show Answer"
    The correct answer is **C**. `elif` (short for "else if") adds another branch to a decision chain. Python checks conditions from top to bottom and runs the body of the **first** branch whose condition is `True`, then skips all remaining branches. If no `if` or `elif` is `True`, the `else` branch runs (if one exists).

    **Concept Tested:** elif Chains

---

#### 5. What does the `and` logical operator require for a combined condition to be `True`?

<div class="upper-alpha" markdown>
1. At least one of the conditions must be `True`
2. Neither condition can be `True`
3. Both conditions must be `True`
4. The conditions must be exactly equal to each other
</div>

??? question "Show Answer"
    The correct answer is **C**. The `and` operator returns `True` only when **both** conditions on its left and right are `True`. If either one is `False`, the whole expression is `False`. This is different from `or`, which returns `True` when **at least one** condition is `True`.

    **Concept Tested:** Logical Operators

---

#### 6. What is the result of `not True`?

<div class="upper-alpha" markdown>
1. `True`
2. `0`
3. `None`
4. `False`
</div>

??? question "Show Answer"
    The correct answer is **D**. The `not` operator flips a Boolean value: `not True` becomes `False`, and `not False` becomes `True`. It is useful for making conditions more readable — for example, `if not is_finished:` reads naturally as "if we are not finished yet."

    **Concept Tested:** Logical Operators

---

#### 7. Which grade will Python print for `score = 83` in this code?

```python
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("D")
```

<div class="upper-alpha" markdown>
1. `A`
2. `C`
3. `B`
4. Both `B` and `C`
</div>

??? question "Show Answer"
    The correct answer is **C**. Python checks conditions from top to bottom and stops at the first `True` one. `83 >= 90` is `False`, so it moves to `83 >= 80`, which is `True`. Python prints `"B"` and skips all remaining branches, including `elif score >= 70`. Even though `83 >= 70` is also `True`, it is never checked because a branch already ran.

    **Concept Tested:** elif Chains

---

#### 8. What does this chained comparison check?

```python
if 0 <= age < 18:
```

<div class="upper-alpha" markdown>
1. Whether `age` equals 0 or equals 18
2. Whether `age` is between 0 and 18, including 0 but not including 18
3. Whether `age` is negative or greater than 18
4. Whether `age` is exactly 0 or exactly 18
</div>

??? question "Show Answer"
    The correct answer is **B**. The chained comparison `0 <= age < 18` checks whether `age` is at least 0 AND less than 18. This is equivalent to `age >= 0 and age < 18`. Python allows this math-like notation for range checks. Age 0 would pass (0 <= 0 is True) but age 18 would not (18 < 18 is False).

    **Concept Tested:** Chained Comparisons

---

#### 9. What is a nested `if` statement?

<div class="upper-alpha" markdown>
1. An `if` statement written on a single line with no colon
2. An `if` statement placed inside the body of another `if` statement
3. An `if` statement that checks more than three conditions at once
4. An `if` statement that runs backwards from bottom to top
</div>

??? question "Show Answer"
    The correct answer is **B**. A nested `if` is an `if` statement written inside the body (indented block) of another `if` statement. This allows you to check a second condition only when the first condition is already `True`. Nesting gives you fine-grained control, but too many levels of nesting can make code hard to read.

    **Concept Tested:** Nested if Statements

---

#### 10. Which condition correctly checks if a variable `n` is both greater than 0 AND even?

<div class="upper-alpha" markdown>
1. `if n > 0 or n % 2 == 0:`
2. `if n > 0 and n % 2 == 0:`
3. `if n > 0 and n % 2 != 0:`
4. `if n > 0 not n % 2 == 0:`
</div>

??? question "Show Answer"
    The correct answer is **B**. To require both conditions, use `and`. `n > 0` checks that the number is positive, and `n % 2 == 0` checks that the remainder after dividing by 2 is zero (meaning it is even). Using `or` would make the condition `True` if only one of them is satisfied, which is not what we want.

    **Concept Tested:** Logical Operators

---
