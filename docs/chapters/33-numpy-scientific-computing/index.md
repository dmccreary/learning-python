---
title: NumPy and Scientific Computing
description: Learn NumPy arrays, broadcasting, reshaping, slicing, element-wise math, and key functions like zeros, ones, linspace, argmax, mean, and std
generated_by: claude skill chapter-content-generator
date: 2026-06-28 15:30:00
version: 0.09
---

# NumPy and Scientific Computing

By the end of this lesson you'll be able to:

- Create NumPy arrays with `np.array()`, `np.zeros()`, `np.ones()`, and `np.linspace()`
- Perform **element-wise math** and understand **broadcasting**
- Slice and index NumPy arrays, including 2-D arrays
- Compute **mean**, **standard deviation**, **max**, and **argmax** on arrays
- Combine NumPy with matplotlib to plot a sine wave

Python lists are flexible, but slow for large numerical datasets. **NumPy** (Numerical Python) provides an array type that is 10–100× faster because it stores values compactly and performs operations in optimized C code.

!!! mascot-welcome "Welcome to Chapter 33!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    NumPy is the engine under almost every data science and machine learning library in Python.
    Learn it once and you'll use it in every science project for the rest of your coding career.
    Let's dive in! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Importing NumPy

Import NumPy with the standard alias `np`:

```python
import numpy as np
```

## Creating Arrays with `np.array()`

A **NumPy array** (`ndarray`) is like a Python list, but:
- All items must be the same type (usually `float64` or `int64`)
- Math operations work element-by-element automatically
- It can be multi-dimensional (2-D, 3-D, etc.)

Convert a Python list to an array:

```python
a = np.array([1, 2, 3, 4, 5])
print(a)          # [1 2 3 4 5]
print(a.dtype)    # int64
print(a.shape)    # (5,) — one dimension with 5 elements
```

## Element-Wise Math and Broadcasting

The big difference between lists and arrays: **math operators work element-by-element**.

```python
a = np.array([1, 2, 3, 4])
print(a + 10)      # [11 12 13 14]  — adds 10 to every element
print(a * 2)       # [2  4  6  8]
print(a ** 2)      # [1  4  9 16]
```

Adding a single number to every element is called **broadcasting** — NumPy "broadcasts" the scalar value across the whole array automatically, with no loop needed.

Two arrays of the same shape can be combined element-by-element:

```python
b = np.array([10, 20, 30, 40])
print(a + b)   # [11 22 33 44]
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below applies element-wise math to an array.
    Before you run it, predict: what will `temps_f` look like after the formula?
    Make your guess — then run it!

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab()">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle"></div>
  </div>
</div>
<script>
initCmLab('', `import numpy as np

temps_c = np.array([0, 20, 37, 100])
temps_f = (temps_c * 9/5) + 32

print("Celsius:   ", temps_c)
print("Fahrenheit:", temps_f)

# Also works: min, max, mean
print("Min F:", temps_f.min())
print("Max F:", temps_f.max())
print("Mean F:", temps_f.mean())`);
</script>

## Creating Arrays Automatically

NumPy provides functions for common array creation patterns:

| Function | Creates |
|----------|---------|
| `np.zeros(n)` | Array of n zeros |
| `np.ones(n)` | Array of n ones |
| `np.arange(start, stop, step)` | Like `range()` but returns an array |
| `np.linspace(start, stop, num)` | Evenly spaced values between start and stop |
| `np.random.rand(n)` | n random values between 0 and 1 |

`np.linspace()` is especially useful for math and plotting — it generates exactly `num` evenly spaced points:

```python
x = np.linspace(0, 1, 5)
print(x)   # [0.   0.25 0.5  0.75 1.  ]
```

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-2"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-2')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-2')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-2"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-2"></div>
  </div>
</div>
<script>
initCmLab('-2', `import numpy as np

print("zeros:", np.zeros(5))
print("ones:", np.ones(4))
print("arange:", np.arange(0, 10, 2))
print("linspace:", np.linspace(0, 1, 6))

# Use linspace to simulate a sine wave (without plotting):
import math
x = np.linspace(0, 2 * math.pi, 8)
y = np.array([math.sin(v) for v in x])
print("\\nSine wave sample (x, sin(x)):")
for xi, yi in zip(x, y):
    print(f"  x={xi:.2f}  sin(x)={yi:.3f}")`);
</script>

## Slicing and Indexing

NumPy arrays use the same `[start:stop:step]` slicing syntax as Python lists:

```python
a = np.array([10, 20, 30, 40, 50])
print(a[1:4])    # [20 30 40]
print(a[::2])    # [10 30 50]   — every other element
print(a[-1])     # 50            — last element
```

## 2-D Arrays — Rows and Columns

A 2-D array is like a spreadsheet table — it has rows and columns.
Create one by passing a list of lists:

```python
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix.shape)     # (3, 3) — 3 rows, 3 columns
print(matrix[1, 2])     # 6 — row 1, column 2
print(matrix[0, :])     # [1 2 3] — entire first row
print(matrix[:, 1])     # [2 5 8] — entire second column
```

The index `matrix[row, col]` selects a specific cell.
`matrix[row, :]` selects a whole row; `matrix[:, col]` selects a whole column.

## Reshaping Arrays

`array.reshape(rows, cols)` rearranges an array into a different shape without changing the data.
The total number of elements must stay the same.

```python
flat = np.arange(12)           # [0 1 2 3 4 5 6 7 8 9 10 11]
grid = flat.reshape(3, 4)      # 3 rows, 4 columns
print(grid)
```

## Statistical Functions

NumPy has fast built-in statistics:

| Function | Returns |
|----------|---------|
| `a.mean()` | Average |
| `a.std()` | Standard deviation |
| `a.min()` / `a.max()` | Minimum / maximum value |
| `a.sum()` | Sum of all elements |
| `a.argmax()` | **Index** of the maximum value |
| `a.argmin()` | **Index** of the minimum value |

`argmax()` and `argmin()` are especially useful when you want to know *where* in an array the maximum or minimum occurs — not just what the value is.

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-3"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-3')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-3')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-3"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-3"></div>
  </div>
</div>
<script>
initCmLab('-3', `import numpy as np

scores = np.array([78, 95, 88, 62, 91, 74, 99, 83])

print("Scores:", scores)
print("Mean:", scores.mean())
print("Std dev:", round(scores.std(), 2))
print("Min:", scores.min(), "at index", scores.argmin())
print("Max:", scores.max(), "at index", scores.argmax())

names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank", "Grace", "Hank"]
winner = names[scores.argmax()]
print(f"Top scorer: {winner} with {scores.max()}")`);
</script>

## Plotting a Sine Wave with NumPy and matplotlib

This is where NumPy and matplotlib combine: use `np.linspace()` to generate evenly spaced x values, apply `np.sin()` to get y values, then plot.

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 4 * np.pi, 200)   # 200 points across 2 full cycles
y = np.sin(x)

plt.plot(x, y, color="steelblue")
plt.title("Sine Wave")
plt.xlabel("x (radians)")
plt.ylabel("sin(x)")
plt.axhline(0, color="gray", linewidth=0.8)   # horizontal line at y=0
plt.grid(True)
plt.show()
```

`np.sin()`, `np.cos()`, `np.exp()`, and `np.sqrt()` all work on entire arrays — no loop needed.

## Learning Check

!!! mascot-thinking "Your Turn — Find the Hottest Day"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below has temperature data for a week, but the line that finds the hottest day is missing!
    Add one line using `argmax()` to find and print which day of the week had the highest temperature.

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-4"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-4')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-4')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-4"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-4"></div>
  </div>
</div>
<script>
initCmLab('-4', `import numpy as np

days  = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
temps = np.array([22, 25, 28, 31, 26, 24, 20])

print("Week temperatures:", temps)
print("Average:", temps.mean(), "°C")

# Add one line here: use argmax() to find and print the hottest day`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Create a 4×4 identity matrix using `np.eye(4)` — a square matrix with 1s on the diagonal.
   **You'll know it worked when** you see 1s along the diagonal and 0s everywhere else.

2. Compute the dot product of two arrays using `np.dot([1,2,3], [4,5,6])`.
   **You'll know it worked when** you get `32` (1×4 + 2×5 + 3×6 = 32).

3. Generate 5 random integers between 1 and 100 using `np.random.randint(1, 101, 5)`. Find the mean.
   **You'll know it worked when** you get a different set of numbers each run with a mean between 1 and 100.

4. Use `np.where(temps > 25, "Hot", "Cool")` on the temperature array to label each day.
   **You'll know it worked when** you see a string array like `["Cool", "Cool", "Hot", ...]`.

5. Create a 3×3 matrix and use `matrix.T` to transpose it (rows become columns).
   **You'll know it worked when** the rows and columns are swapped.

!!! mascot-celebration "Scientific Python Pioneer!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    NumPy is the foundation of the entire scientific Python ecosystem — pandas, scikit-learn, TensorFlow, and PyTorch all use NumPy arrays under the hood.
    Mastering it puts you at the starting line of data science and AI. Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
