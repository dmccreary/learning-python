# Quiz: Recursion and Fractals

Test your understanding of recursion, base cases, lambda functions, and the call stack with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is recursion in Python?

<div class="upper-alpha" markdown>
1. A loop that repeats a fixed number of times
2. A function that calls itself to solve a smaller version of the same problem
3. A method that reverses a list or string
4. A way of importing functions from another file
</div>

??? question "Show Answer"
    The correct answer is **B**. Recursion is when a function calls itself. Each call works on a smaller or simpler version of the problem, until it reaches a stopping point (the base case) and begins returning values back up the chain. Think of Russian nesting dolls — each contains a smaller version of itself, all the way down to the tiny solid one at the center.

    **Concept Tested:** Recursion Concept

---

#### 2. What is a base case in a recursive function?

<div class="upper-alpha" markdown>
1. The first time the function is called from the main program
2. A variable that counts how many times the function has called itself
3. The condition that stops the recursion and returns a value without calling the function again
4. The deepest level of indentation inside the function
</div>

??? question "Show Answer"
    The correct answer is **C**. The base case is what prevents a recursive function from calling itself forever. It is a condition that, when true, returns a value directly instead of making another recursive call. Without a base case, Python would call the function indefinitely until it raises a `RecursionError` (maximum recursion depth exceeded).

    **Concept Tested:** Base Case

---

#### 3. What does `factorial(5)` return if `factorial(n)` returns `n * factorial(n-1)` with a base case of `factorial(1) = 1`?

<div class="upper-alpha" markdown>
1. `15` (5 + 4 + 3 + 2 + 1)
2. `120` (5 × 4 × 3 × 2 × 1)
3. `25` (5 squared)
4. `5` (just the input)
</div>

??? question "Show Answer"
    The correct answer is **B**. `factorial(5)` expands as: `5 * factorial(4)` → `5 * 4 * factorial(3)` → `5 * 4 * 3 * factorial(2)` → `5 * 4 * 3 * 2 * factorial(1)` → `5 * 4 * 3 * 2 * 1 = 120`. Factorial (n!) multiplies all positive integers up to n together.

    **Concept Tested:** Recursive Factorial

---

#### 4. What happens if a recursive function has no base case?

<div class="upper-alpha" markdown>
1. Python automatically adds a base case when n reaches 0
2. The function runs exactly 1,000 times and then stops
3. Python raises a `RecursionError` when the call stack gets too deep
4. The function returns `None` after the first call
</div>

??? question "Show Answer"
    The correct answer is **C**. Without a base case, the function keeps calling itself indefinitely. Python limits the call stack to about 1,000 nested calls by default. When that limit is exceeded, Python raises `RecursionError: maximum recursion depth exceeded`. Always make sure your recursive function has a base case that will eventually be reached.

    **Concept Tested:** Base Case

---

#### 5. What is the call stack in the context of recursion?

<div class="upper-alpha" markdown>
1. A list of all function names defined in the program
2. The memory Python uses to save the current state of each function call while waiting for inner calls to return
3. The output printed by each recursive call in order
4. A built-in Python structure that limits loops to 1,000 iterations
</div>

??? question "Show Answer"
    The correct answer is **B**. Each time a function calls itself recursively, Python saves the current state (local variables, where it left off) on the call stack. When the base case is reached, Python works back up the stack, resuming each saved state in reverse order. The call stack grows with each recursive call and shrinks as calls return.

    **Concept Tested:** Call Stack

---

#### 6. What is a lambda function in Python?

<div class="upper-alpha" markdown>
1. A function that takes a list as its only argument
2. A function defined inside another function
3. A small, one-line anonymous function written with the `lambda` keyword
4. A function that automatically recurses until a base case is found
</div>

??? question "Show Answer"
    The correct answer is **C**. A lambda is a compact anonymous function: `lambda parameters: expression`. For example, `square = lambda x: x * x` creates a one-line function that squares its input. Lambdas are especially useful when you need a short function to pass as an argument to another function (like `sorted()` with a `key=` argument).

    **Concept Tested:** Lambda Functions

---

#### 7. What does `lambda a, b: a + b` do?

<div class="upper-alpha" markdown>
1. Creates a function that returns the larger of `a` and `b`
2. Creates an anonymous function that takes two arguments and returns their sum
3. Creates a list with elements `a` and `b` added together
4. Raises an error because lambda functions can only take one argument
</div>

??? question "Show Answer"
    The correct answer is **B**. `lambda a, b: a + b` creates an anonymous function with two parameters `a` and `b` that returns their sum. Lambda functions can take any number of parameters. This lambda is equivalent to `def add(a, b): return a + b`, just written more compactly on one line.

    **Concept Tested:** Lambda Functions

---

#### 8. Why is recursion especially well-suited to drawing fractals?

<div class="upper-alpha" markdown>
1. Fractals are too large to fit in a for loop
2. Fractals have a self-similar structure — each part looks like a smaller version of the whole — which maps naturally to recursive function calls
3. The turtle library only works with recursive functions
4. Fractals require exactly 1,000 iterations, which is Python's recursion limit
</div>

??? question "Show Answer"
    The correct answer is **B**. Fractals are self-similar — a branch on a fractal tree looks like a smaller version of the whole tree, which looks like a smaller version, and so on. This mirrors the structure of recursion perfectly: draw a branch, then call the same function to draw smaller branches at the tip, until the branches become too small to see (the base case).

    **Concept Tested:** Fractal Tree

---

#### 9. What does the recursive `countdown(n)` function do differently from a `for` loop countdown?

<div class="upper-alpha" markdown>
1. A recursive countdown is always faster than a for loop
2. A recursive countdown can handle negative numbers but a for loop cannot
3. A recursive countdown calls itself with a smaller value on each step, using the call stack rather than a loop counter
4. They are identical — recursion and loops always produce the same code
</div>

??? question "Show Answer"
    The correct answer is **C**. A recursive countdown calls itself with `n - 1` on each call, relying on the call stack to keep track of where it is. A for loop uses a counter variable managed by the loop structure. Both achieve the same result, but they use different mechanisms. For loops are often more efficient and clear for simple counting; recursion shines when the problem has a naturally recursive structure.

    **Concept Tested:** Recursion Concept

---

#### 10. Which of the following correctly defines a lambda that doubles its input?

<div class="upper-alpha" markdown>
1. `lambda: x * 2`
2. `def double = lambda x: x * 2`
3. `lambda x: x * 2`
4. `lambda x => x * 2`
</div>

??? question "Show Answer"
    The correct answer is **C**. The correct lambda syntax is `lambda parameters: expression`. `lambda x: x * 2` creates a function that takes one argument `x` and returns `x * 2`. Option A is missing the parameter `x`. Option B mixes `def` and `lambda` syntax incorrectly. Option D uses `=>` which is not valid Python (it is used in JavaScript).

    **Concept Tested:** Lambda Functions

---
