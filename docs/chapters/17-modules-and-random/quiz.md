# Quiz: Modules and Random Numbers

Test your understanding of Python modules, import syntax, and the random module with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does the `import` statement do at the top of a Python program?

<div class="upper-alpha" markdown>
1. Saves your program to a file
2. Loads a module so your program can use its functions and values
3. Runs another Python file inside your current program
4. Creates a new variable with the module's name
</div>

??? question "Show Answer"
    The correct answer is **B**. `import module_name` loads a module from Python's Standard Library (or an installed package) and makes its functions available. After `import random`, you access its functions with `random.function_name()`. The module is only loaded once, even if you import it multiple times.

    **Concept Tested:** import Statement

---

#### 2. What is the difference between `import random` and `from random import randint`?

<div class="upper-alpha" markdown>
1. `import random` loads only `randint`; `from random import randint` loads everything
2. `import random` requires `random.randint()`; `from random import randint` lets you call `randint()` directly without the prefix
3. `from random import randint` is slower than `import random`
4. They are identical — both let you call `random.randint()` the same way
</div>

??? question "Show Answer"
    The correct answer is **B**. `import random` imports the whole module, and you access functions with `random.randint()`. `from random import randint` imports just the `randint` function by name, so you can call it directly as `randint()` without the `random.` prefix. Both approaches work; the second is more concise when you only need one or two functions.

    **Concept Tested:** from...import Syntax

---

#### 3. What does `import random as rnd` do?

<div class="upper-alpha" markdown>
1. Creates a copy of the `random` module called `rnd`
2. Imports only the `rnd` function from `random`
3. Imports the `random` module and gives it the alias `rnd`, so you use `rnd.randint()` instead of `random.randint()`
4. Renames all functions in `random` to start with `rnd_`
</div>

??? question "Show Answer"
    The correct answer is **C**. `import ... as alias` imports a module and gives it a shorter nickname. After `import random as rnd`, you call `rnd.randint(1, 6)` instead of `random.randint(1, 6)`. This is commonly used for modules with long names (like `numpy as np` or `matplotlib.pyplot as plt`) to save typing.

    **Concept Tested:** import...as Alias

---

#### 4. What does `random.randint(1, 6)` return?

<div class="upper-alpha" markdown>
1. A random float between 1.0 and 6.0
2. A random integer from 1 to 5, not including 6
3. A random integer from 1 to 6, including both 1 and 6
4. Always the number 3 (the midpoint)
</div>

??? question "Show Answer"
    The correct answer is **C**. `randint(a, b)` returns a random integer where both endpoints are included: `a <= result <= b`. So `randint(1, 6)` can return 1, 2, 3, 4, 5, or 6 — simulating a fair six-sided die. This is different from `range(1, 6)` which stops before 6.

    **Concept Tested:** random.randint()

---

#### 5. What does `random.random()` return?

<div class="upper-alpha" markdown>
1. A random integer between 0 and 100
2. A random float between 0.0 and 1.0 (not including 1.0)
3. A random choice from a list you provide
4. A random Boolean — either `True` or `False`
</div>

??? question "Show Answer"
    The correct answer is **B**. `random.random()` returns a random floating-point number in the range `[0.0, 1.0)` — that is, 0.0 is possible but 1.0 is not. This is useful for probabilities: `if random.random() < 0.3:` triggers about 30% of the time. Multiply by a range to get floats in other intervals: `random.random() * 10` gives a float from 0 to 10.

    **Concept Tested:** random.random()

---

#### 6. What does `random.choice(["rock", "paper", "scissors"])` do?

<div class="upper-alpha" markdown>
1. Returns all three items as a list
2. Returns `None` after printing a random choice
3. Picks and returns one random item from the list
4. Shuffles the list in place and returns it
</div>

??? question "Show Answer"
    The correct answer is **C**. `random.choice(sequence)` picks one random item from the sequence and returns it. Each item has an equal probability of being chosen. This is perfect for simulating coin flips, random color choices, random directions in a game, and similar tasks.

    **Concept Tested:** random.choice()

---

#### 7. What does `random.shuffle(cards)` do?

<div class="upper-alpha" markdown>
1. Returns a new shuffled copy of `cards`, leaving the original unchanged
2. Shuffles the `cards` list in place and returns `None`
3. Removes random items from `cards` until it is empty
4. Sorts `cards` randomly (the same as `sort()` but with random order)
</div>

??? question "Show Answer"
    The correct answer is **B**. `random.shuffle(lst)` shuffles the list **in place**, rearranging its items randomly, and returns `None`. This means the original list is changed directly — a new list is NOT created. So `shuffled = random.shuffle(cards)` would make `shuffled` equal `None`, not a shuffled list.

    **Concept Tested:** random.shuffle()

---

#### 8. What is the purpose of `random.seed(42)`?

<div class="upper-alpha" markdown>
1. Makes the random module 42 times faster
2. Limits random numbers to values less than 42
3. Sets a starting point so the random sequence is the same every time you run the program with that seed
4. Generates exactly 42 random numbers and then stops
</div>

??? question "Show Answer"
    The correct answer is **C**. `random.seed(n)` sets the starting point for the random number generator. With the same seed, you always get the same sequence of "random" numbers. This is very useful for testing and debugging — you can reproduce the same random results every run. Without a seed, Python uses the current time as a seed, giving different results each run.

    **Concept Tested:** random.seed()

---

#### 9. Which `from...import` line allows you to call `randint()` without the `random.` prefix?

<div class="upper-alpha" markdown>
1. `import randint from random`
2. `import random.randint`
3. `from random import randint`
4. `from randint import random`
</div>

??? question "Show Answer"
    The correct answer is **C**. The correct syntax for importing a specific function is `from module import function`. After `from random import randint`, you can call `randint(1, 6)` directly without the `random.` prefix. Options A and D have the words in the wrong order, and option B would still require you to call `random.randint()`.

    **Concept Tested:** from...import Syntax

---

#### 10. What does `random.sample(range(1, 50), 6)` return?

<div class="upper-alpha" markdown>
1. 6 random numbers from 1 to 50, with duplicates possible
2. The numbers 1 through 6 in random order
3. A list of 6 unique random numbers chosen from 1 to 49
4. The number 6 repeated 50 times
</div>

??? question "Show Answer"
    The correct answer is **C**. `random.sample(population, k)` returns a list of `k` unique items chosen from the population without replacement (no duplicates). `sample(range(1, 50), 6)` picks 6 unique numbers from 1 to 49 — like picking lottery numbers. Note that `range(1, 50)` goes from 1 to 49, not to 50.

    **Concept Tested:** random.sample()

---
