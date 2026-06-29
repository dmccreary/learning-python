# Quiz: Functions with Parameters and Scope

Test your understanding of default parameters, keyword arguments, scope, and pure functions with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is a default parameter value in a Python function?

<div class="upper-alpha" markdown>
1. The value a parameter holds when the function returns `None`
2. A value the function uses automatically when the caller does not provide an argument for that parameter
3. The first argument passed to a function when it is called
4. A parameter that is required and must always be provided by the caller
</div>

??? question "Show Answer"
    The correct answer is **B**. A default parameter value is defined in the `def` line using `parameter=default`. When someone calls the function without providing that argument, Python automatically uses the default. When they do provide a value, that value overrides the default. This makes functions flexible — they work with or without certain arguments.

    **Concept Tested:** Default Parameter Values

---

#### 2. Which function call uses a keyword argument?

<div class="upper-alpha" markdown>
1. `draw_polygon(6, 80, "red")`
2. `draw_polygon(sides=6, color="red")`
3. `draw_polygon("red", 6, 80)`
4. `draw_polygon(6)`
</div>

??? question "Show Answer"
    The correct answer is **B**. A keyword argument uses the parameter's name followed by `=` and a value in the function call: `sides=6` and `color="red"`. Keyword arguments can be supplied in any order because Python matches them by name, not by position. Option A uses positional arguments, which must be in the correct order.

    **Concept Tested:** Keyword Arguments

---

#### 3. What is the scope of a variable?

<div class="upper-alpha" markdown>
1. How many characters long the variable's name is
2. How large the value stored in the variable is
3. Which parts of the program can see and use the variable
4. How many times the variable is used in the program
</div>

??? question "Show Answer"
    The correct answer is **C**. Scope describes where in your program a variable is visible and accessible. A variable created inside a function has **local** scope — it only exists while that function runs. A variable created outside all functions has **global** scope — it is visible throughout the entire program.

    **Concept Tested:** Local Scope and Global Scope

---

#### 4. What happens when you try to use a local variable outside the function that created it?

<div class="upper-alpha" markdown>
1. The variable keeps its last value and can be used anywhere
2. Python prints the value automatically without needing `print()`
3. Python raises a `NameError` because the variable does not exist outside the function
4. The variable becomes a global variable after the function runs
</div>

??? question "Show Answer"
    The correct answer is **C**. A local variable only exists while its function is running. When the function finishes, the local variable disappears. Trying to use it afterward causes a `NameError: name 'variable' is not defined`. This is by design — local variables prevent naming conflicts between functions.

    **Concept Tested:** Local Scope and Global Scope

---

#### 5. What does the `global` keyword inside a function tell Python?

<div class="upper-alpha" markdown>
1. Create a brand-new local variable with that name inside this function
2. Delete the global variable when the function finishes
3. Use the variable that exists in the global (outer) scope, not create a new local one
4. Print the variable's value to the output when the function is called
</div>

??? question "Show Answer"
    The correct answer is **C**. Without `global`, if you assign to a variable inside a function, Python creates a new local variable that shadows the global one. Writing `global score` inside a function tells Python "I mean the `score` that lives outside, not a new local one" — so assignments to `score` inside that function actually change the global variable.

    **Concept Tested:** global Keyword

---

#### 6. What output does this program produce?

```python
speed = 10

def reset():
    speed = 0
    print("Inside:", speed)

reset()
print("Outside:", speed)
```

<div class="upper-alpha" markdown>
1. `Inside: 0` then `Outside: 0`
2. `Inside: 10` then `Outside: 10`
3. `Inside: 0` then `Outside: 10`
4. An error because `speed` is defined twice
</div>

??? question "Show Answer"
    The correct answer is **C**. Inside `reset()`, `speed = 0` creates a **new local variable** named `speed` — it does NOT change the global `speed`. So inside the function, `speed` is 0. But outside, the global `speed` is still 10. This is a common naming conflict that causes confusing bugs; using `global speed` inside the function would fix it if you actually wanted to change the global.

    **Concept Tested:** Local Scope and Global Scope

---

#### 7. By convention, how do Python programmers write the name of a constant?

<div class="upper-alpha" markdown>
1. Starting with a lowercase letter, like `maxSpeed`
2. Surrounded by double underscores, like `__max_speed__`
3. In ALL_CAPS with underscores, like `MAX_SPEED`
4. Starting with an uppercase letter, like `MaxSpeed`
</div>

??? question "Show Answer"
    The correct answer is **C**. Python programmers use ALL_CAPS with underscores to signal that a variable is a constant — a value that should never be changed after it is set. Examples: `MAX_SPEED = 10`, `CANVAS_WIDTH = 400`. Python does not enforce this; it is a naming convention that tells other programmers "treat this as a fixed rule."

    **Concept Tested:** Constants by Convention

---

#### 8. Which rule applies when defining a function that has both required parameters and default parameters?

<div class="upper-alpha" markdown>
1. Default parameters must come before required parameters
2. Required parameters must come before default parameters
3. You cannot mix required and default parameters in the same function
4. Default parameters must all have the same default value
</div>

??? question "Show Answer"
    The correct answer is **B**. Required parameters (those without defaults) must come first in the function definition, followed by parameters with default values. For example: `def greet(name, greeting="Hello"):` is valid. Writing `def greet(greeting="Hello", name):` would cause a `SyntaxError` because the required parameter `name` comes after the default parameter.

    **Concept Tested:** Default Parameter Values

---

#### 9. What is a pure function?

<div class="upper-alpha" markdown>
1. A function that only uses numbers, never strings
2. A function defined with `def pure:` instead of `def`
3. A function that always produces the same output for the same inputs and does not change anything outside itself
4. A function that only calls other functions and never uses `print()`
</div>

??? question "Show Answer"
    The correct answer is **C**. A pure function always returns the same result given the same arguments, and it does not change any variables outside its own scope (no side effects). Pure functions are easier to test and debug. In contrast, a function that modifies a global variable, prints to the screen, or draws on a canvas has side effects.

    **Concept Tested:** Pure Functions vs Side Effects

---

#### 10. What is the fastest way to swap the values of variables `a` and `b` in Python?

<div class="upper-alpha" markdown>
1. `a = b` then `b = a`
2. `temp = a`, then `a = b`, then `b = temp`
3. `a, b = b, a`
4. `swap(a, b)`
</div>

??? question "Show Answer"
    The correct answer is **C**. Python supports multiple assignment that evaluates the right side completely before assigning, making `a, b = b, a` a safe one-line swap. Option A loses the original value of `a`. Option B (the temporary variable approach) is correct but takes three lines. Option D is not a built-in Python function.

    **Concept Tested:** Swapping Variables

---
