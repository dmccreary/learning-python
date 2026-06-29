# Quiz: Advanced Collections and Built-in Functions

Test your understanding of enumerate(), zip(), *args, **kwargs, and Python's built-in functions with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does `enumerate(["a", "b", "c"])` give you in a loop?

<div class="upper-alpha" markdown>
1. Only the items: `"a"`, `"b"`, `"c"`
2. Only the indexes: `0`, `1`, `2`
3. Both the index and item as pairs: `(0, "a")`, `(1, "b")`, `(2, "c")`
4. The items in reverse order: `"c"`, `"b"`, `"a"`
</div>

??? question "Show Answer"
    The correct answer is **C**. `enumerate(iterable)` wraps a sequence and gives you both the index and the item on each loop iteration. Using `for i, item in enumerate(my_list):` is cleaner than maintaining a separate counter variable. By default counting starts at 0; pass a second argument to start at a different number: `enumerate(items, 1)` starts at 1.

    **Concept Tested:** enumerate()

---

#### 2. What does `zip(["A", "B", "C"], [1, 2])` produce?

<div class="upper-alpha" markdown>
1. `[("A", 1), ("B", 2), ("C", None)]`
2. `[("A", 1), ("B", 2)]`
3. `["A", "B", "C", 1, 2]`
4. An error because the lists have different lengths
</div>

??? question "Show Answer"
    The correct answer is **B**. `zip()` pairs up items from two or more iterables and stops when the shortest one runs out. Since the second list has only 2 items, `zip()` produces only 2 pairs: `("A", 1)` and `("B", 2)`. The third item `"C"` is ignored because there is no matching item in the second list.

    **Concept Tested:** zip()

---

#### 3. How do you build a dictionary from two lists `keys` and `values` using `zip()`?

<div class="upper-alpha" markdown>
1. `{keys: values}`
2. `dict(keys, values)`
3. `dict(zip(keys, values))`
4. `zip(dict(keys), dict(values))`
</div>

??? question "Show Answer"
    The correct answer is **C**. `zip(keys, values)` pairs each key with its corresponding value. Wrapping with `dict()` converts those pairs into a dictionary. For example, `dict(zip(["a", "b"], [1, 2]))` gives `{"a": 1, "b": 2}`. This is a very common and clean pattern for building dictionaries from parallel lists.

    **Concept Tested:** Dictionary from zip()

---

#### 4. What does `*args` do in a function definition?

<div class="upper-alpha" markdown>
1. Creates a required argument that must always be provided
2. Collects all extra positional arguments into a tuple
3. Spreads a list out into separate arguments
4. Marks a parameter as optional with a default value of `None`
</div>

??? question "Show Answer"
    The correct answer is **B**. `*args` in a function definition collects any number of positional arguments the caller passes into a single tuple. For example, `def total(*args): return sum(args)` can be called as `total(1, 2, 3)` or `total(10)` — the extra positional arguments all end up in `args`.

    **Concept Tested:** *args

---

#### 5. What does `**kwargs` collect in a function definition?

<div class="upper-alpha" markdown>
1. Extra positional arguments as a list
2. Extra keyword arguments as a dictionary
3. A fixed set of keyword arguments with required types
4. All arguments of any kind into a single tuple
</div>

??? question "Show Answer"
    The correct answer is **B**. `**kwargs` collects extra keyword arguments (those passed as `name=value`) into a dictionary. Calling `describe(color="red", size=5)` would give `kwargs = {"color": "red", "size": 5}` inside the function. You then iterate over it with `kwargs.items()`. `*args` handles positional arguments; `**kwargs` handles keyword arguments.

    **Concept Tested:** **kwargs

---

#### 6. What does `max([73, 100, 87, 55])` return?

<div class="upper-alpha" markdown>
1. `55`
2. `73`
3. `415` (the sum)
4. `100`
</div>

??? question "Show Answer"
    The correct answer is **D**. `max(iterable)` returns the largest value in the collection. For `[73, 100, 87, 55]`, the largest value is `100`. Similarly, `min()` returns the smallest value (`55` here), and `sum()` returns the total (`415`). All three work on any iterable of comparable values.

    **Concept Tested:** max(), min(), sum()

---

#### 7. What is the difference between `list.sort()` and `sorted(list)`?

<div class="upper-alpha" markdown>
1. `sort()` works on strings; `sorted()` works on numbers
2. `sort()` modifies the list in place and returns `None`; `sorted()` returns a new sorted list without changing the original
3. `sort()` is ascending; `sorted()` is always descending
4. They produce identical results in every way
</div>

??? question "Show Answer"
    The correct answer is **B**. `list.sort()` rearranges the list **in place** and returns `None`. `sorted(iterable)` creates and returns a **new** sorted list, leaving the original unchanged. Use `sort()` when you want to change the list directly. Use `sorted()` when you need to keep the original order while also having a sorted version.

    **Concept Tested:** sorted() and reversed()

---

#### 8. What does `isinstance(42, int)` return?

<div class="upper-alpha" markdown>
1. `"int"`
2. `False`
3. `42`
4. `True`
</div>

??? question "Show Answer"
    The correct answer is **D**. `isinstance(value, type)` returns `True` if the value is an instance of the given type, `False` otherwise. `42` is an integer, so `isinstance(42, int)` returns `True`. This is the preferred way to check types in Python because it also handles inheritance, unlike `type(x) == int` which does not.

    **Concept Tested:** isinstance()

---

#### 9. What does `sorted([5, 2, 8, 1], reverse=True)` return?

<div class="upper-alpha" markdown>
1. `[1, 2, 5, 8]`
2. `[8, 5, 2, 1]`
3. `[5, 2, 8, 1]` (unchanged)
4. `[8, 5, 1, 2]`
</div>

??? question "Show Answer"
    The correct answer is **B**. `sorted(iterable, reverse=True)` returns a new list sorted in descending order (largest first). For `[5, 2, 8, 1]`, the result is `[8, 5, 2, 1]`. The original list is not modified. To sort ascending (the default), just use `sorted(iterable)` without the `reverse` argument.

    **Concept Tested:** sorted() and reversed()

---

#### 10. What does `enumerate(["x", "y", "z"], 1)` produce as the first value in a loop?

<div class="upper-alpha" markdown>
1. `(0, "x")`
2. `(1, "y")`
3. `("x", 1)`
4. `(1, "x")`
</div>

??? question "Show Answer"
    The correct answer is **D**. `enumerate(iterable, start)` begins counting from the `start` value instead of 0. With `enumerate(["x", "y", "z"], 1)`, the first pair is `(1, "x")`, the second is `(2, "y")`, and so on. This is useful when you want to display numbered lists starting from 1 instead of 0.

    **Concept Tested:** enumerate()

---
