# Quiz: NumPy and Scientific Computing

Test your understanding of NumPy arrays, element-wise math, broadcasting, array creation, slicing, and statistical functions with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the standard alias for importing NumPy?

<div class="upper-alpha" markdown>
1. `import numpy as num`
2. `import numpy as np`
3. `import np from numpy`
4. `from numpy import *`
</div>

??? question "Show Answer"
    The correct answer is **B**. The universal convention is `import numpy as np`. Every tutorial, textbook, and professional code example uses `np` as the alias. This means you write `np.array()`, `np.zeros()`, etc. Using any other alias would make your code harder to read for other Python programmers.

    **Concept Tested:** Importing NumPy

---

#### 2. What is the main advantage of a NumPy array over a Python list for numerical data?

<div class="upper-alpha" markdown>
1. NumPy arrays can hold more types of data than lists
2. NumPy arrays have more methods like `.append()` and `.insert()`
3. NumPy arrays perform element-wise math operations 10-100x faster, using optimized C code
4. NumPy arrays automatically sort their contents
</div>

??? question "Show Answer"
    The correct answer is **C**. NumPy arrays store all values in a compact block of memory (all the same type) and perform operations in optimized C code. This makes them 10–100x faster than Python lists for numerical computations. The speed advantage is critical in data science and machine learning, where arrays can contain millions of values.

    **Concept Tested:** NumPy Arrays

---

#### 3. Given `a = np.array([1, 2, 3, 4])`, what does `a * 2` produce?

<div class="upper-alpha" markdown>
1. `[1, 2, 3, 4, 1, 2, 3, 4]` (the array repeated twice)
2. `[2, 4, 6, 8]` (every element multiplied by 2)
3. `8` (the sum of all elements times 2)
4. An error because you cannot multiply an array by a scalar
</div>

??? question "Show Answer"
    The correct answer is **B**. NumPy performs element-wise operations automatically. `a * 2` multiplies every element in the array by 2, giving `[2, 4, 6, 8]`. This is different from Python lists, where `[1, 2, 3, 4] * 2` repeats the list. Element-wise math is one of NumPy's most important features — no loop needed.

    **Concept Tested:** Element-Wise Math

---

#### 4. What is broadcasting in NumPy?

<div class="upper-alpha" markdown>
1. Sending array data over a network to multiple computers
2. Automatically applying a scalar (single number) or smaller array to every element of a larger array
3. Printing the contents of an array in a formatted table
4. Converting an array to a radio frequency signal
</div>

??? question "Show Answer"
    The correct answer is **B**. Broadcasting is NumPy's ability to automatically expand a scalar or smaller array to match the shape of a larger array during operations. When you write `a + 10`, NumPy "broadcasts" the value `10` across all elements — as if you had created an array of 10s the same size as `a`. This eliminates the need for explicit loops.

    **Concept Tested:** Broadcasting

---

#### 5. What does `np.linspace(0, 1, 5)` produce?

<div class="upper-alpha" markdown>
1. Five random values between 0 and 1
2. `[0, 0.2, 0.4, 0.6, 0.8]` (not including the endpoint 1)
3. `[0.0, 0.25, 0.5, 0.75, 1.0]` (5 evenly spaced values from 0 to 1, inclusive)
4. A range object like Python's `range(0, 1, 5)`
</div>

??? question "Show Answer"
    The correct answer is **C**. `np.linspace(start, stop, num)` creates exactly `num` evenly spaced values from `start` to `stop`, inclusive. `np.linspace(0, 1, 5)` gives `[0.0, 0.25, 0.5, 0.75, 1.0]`. This is especially useful for generating x-values for math functions and plotting smooth curves, unlike `np.arange()` which uses a step size.

    **Concept Tested:** np.linspace()

---

#### 6. What does `np.zeros(4)` create?

<div class="upper-alpha" markdown>
1. A Python list of four zeros: `[0, 0, 0, 0]`
2. A NumPy array of four floating-point zeros: `array([0., 0., 0., 0.])`
3. A 4×4 matrix of zeros
4. An array of the four smallest possible numbers
</div>

??? question "Show Answer"
    The correct answer is **B**. `np.zeros(n)` creates a NumPy 1-D array of `n` zeros, with dtype `float64` by default. `np.ones(n)` creates an array of ones. Both are commonly used to initialize arrays before filling them with computed values. For a 2-D matrix of zeros, use `np.zeros((rows, cols))`.

    **Concept Tested:** np.zeros() and np.ones()

---

#### 7. How do you find the index of the maximum value in a NumPy array `a`?

<div class="upper-alpha" markdown>
1. `a.max_index()`
2. `a.index(max(a))`
3. `np.argmax(a)`
4. `a.find_max()`
</div>

??? question "Show Answer"
    The correct answer is **C**. `np.argmax(a)` returns the index (position) of the largest value in the array. For example, if `a = np.array([3, 7, 2, 9, 1])`, then `np.argmax(a)` returns `3` (the index where `9` lives). `a.max()` returns the value `9` itself. `argmax` is useful when you need to know WHERE the maximum is, not just what it is.

    **Concept Tested:** argmax

---

#### 8. What does `a.mean()` compute for a NumPy array `a`?

<div class="upper-alpha" markdown>
1. The middle value when sorted (the median)
2. The most frequently occurring value (the mode)
3. The average (arithmetic mean) of all values in the array
4. The standard deviation of the array's values
</div>

??? question "Show Answer"
    The correct answer is **C**. `a.mean()` returns the arithmetic mean — the sum of all values divided by the count. For `np.array([2, 4, 6, 8])`, the mean is `(2+4+6+8)/4 = 5.0`. You can also use `np.mean(a)`. For the standard deviation (how spread out the values are), use `a.std()` or `np.std(a)`.

    **Concept Tested:** mean and std

---

#### 9. What does `.shape` tell you about a NumPy array?

<div class="upper-alpha" markdown>
1. The data type of the elements stored in the array
2. The total number of elements across all dimensions
3. A tuple describing the number of rows and columns (or items in each dimension)
4. Whether the array is stored in row-major or column-major order
</div>

??? question "Show Answer"
    The correct answer is **C**. The `.shape` attribute returns a tuple describing the array's dimensions. For a 1-D array of 5 elements, `a.shape` is `(5,)`. For a 2-D array with 3 rows and 4 columns, `a.shape` is `(3, 4)`. Use `.shape` to verify your array has the expected structure before passing it to a function.

    **Concept Tested:** Array Shape

---

#### 10. How does slicing a NumPy array differ from slicing a Python list?

<div class="upper-alpha" markdown>
1. NumPy arrays cannot be sliced — you must use `np.select()` instead
2. NumPy array slices are views (changes to the slice affect the original); list slices are copies
3. NumPy slices include the stop index; list slices do not
4. NumPy arrays can only be sliced in one dimension
</div>

??? question "Show Answer"
    The correct answer is **B**. A NumPy array slice is a **view** — it shares the same memory as the original array. If you modify the slice, the original array changes too. A Python list slice creates an independent copy. This view behavior is intentional in NumPy for efficiency (no copying), but it can cause unexpected bugs if you are not aware of it. Use `.copy()` to get an independent copy.

    **Concept Tested:** Array Slicing

---
