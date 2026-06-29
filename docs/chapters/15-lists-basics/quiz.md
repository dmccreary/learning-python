# Quiz: Lists — Basics

Test your understanding of Python lists, indexing, slicing, and mutability with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. How do you create a list in Python that holds three colors?

<div class="upper-alpha" markdown>
1. `colors = {"red", "green", "blue"}`
2. `colors = ("red", "green", "blue")`
3. `colors = ["red", "green", "blue"]`
4. `colors = "red, green, blue"`
</div>

??? question "Show Answer"
    The correct answer is **C**. Lists in Python are created using square brackets `[]` with items separated by commas. Option A creates a set (curly braces), option B creates a tuple (parentheses), and option D is just a single string — not a collection of separate items.

    **Concept Tested:** List Type

---

#### 2. Given `scores = [95, 87, 100, 73]`, what does `scores[2]` return?

<div class="upper-alpha" markdown>
1. `87`
2. `73`
3. `95`
4. `100`
</div>

??? question "Show Answer"
    The correct answer is **D**. Python uses zero-based indexing: index 0 is `95`, index 1 is `87`, index 2 is `100`, and index 3 is `73`. A very common mistake is to assume index 2 is the second item, but it is actually the third item (counting from zero).

    **Concept Tested:** List Indexing

---

#### 3. Given `colors = ["red", "green", "blue", "yellow"]`, what does `colors[-1]` return?

<div class="upper-alpha" markdown>
1. `"red"` (the first item)
2. An error, because negative indexes are invalid for lists
3. `"green"` (the second item)
4. `"yellow"` (the last item)
</div>

??? question "Show Answer"
    The correct answer is **D**. Negative indexes count from the end of the list. Index `-1` is the last item, `-2` is second-to-last, and so on. For `["red", "green", "blue", "yellow"]`, `colors[-1]` is `"yellow"`. This is useful when you want the last item without knowing the list's length.

    **Concept Tested:** Negative Indexing

---

#### 4. What does `scores[1:3]` return for `scores = [95, 87, 100, 73]`?

<div class="upper-alpha" markdown>
1. `[87, 100, 73]`
2. `[87, 100]`
3. `[95, 87, 100]`
4. `[100, 73]`
</div>

??? question "Show Answer"
    The correct answer is **B**. List slicing `[start:end]` returns items from index `start` up to but NOT including index `end`. `scores[1:3]` gives items at indexes 1 and 2: `[87, 100]`. The item at index 3 (`73`) is not included. This is the same rule as string slicing.

    **Concept Tested:** List Slicing

---

#### 5. What does `len(["apple", "banana", "kiwi"])` return?

<div class="upper-alpha" markdown>
1. `15` (the total number of characters in all words)
2. `2`
3. `3`
4. `0`
</div>

??? question "Show Answer"
    The correct answer is **C**. `len()` counts the number of **items** in a list, not the number of characters in the items. The list `["apple", "banana", "kiwi"]` has 3 items, so `len()` returns `3`. `len()` works the same way on strings (counting characters) and other collections.

    **Concept Tested:** List Length with len()

---

#### 6. How do you check if `"mango"` is in the list `fruits = ["apple", "banana", "mango"]`?

<div class="upper-alpha" markdown>
1. `fruits.contains("mango")`
2. `fruits.find("mango")`
3. `"mango" in fruits`
4. `fruits["mango"]`
</div>

??? question "Show Answer"
    The correct answer is **C**. The `in` operator checks membership and returns `True` or `False`. `"mango" in fruits` returns `True` because `"mango"` is in the list. You can also use `not in` to check that something is absent. This works the same way for strings: `"py" in "python"` returns `True`.

    **Concept Tested:** Membership with in

---

#### 7. What is the key difference between mutable and immutable types?

<div class="upper-alpha" markdown>
1. Mutable types are faster; immutable types are slower
2. Mutable types can be changed after creation; immutable types cannot
3. Mutable types hold numbers; immutable types hold strings
4. Mutable types are created with `[]`; immutable types use `()`
</div>

??? question "Show Answer"
    The correct answer is **B**. A mutable object can be changed after it is created — you can update, add, or remove items. A list is mutable: `colors[0] = "purple"` works. An immutable object cannot be changed — you must create a new one instead. Strings are immutable: `word[0] = "H"` raises a `TypeError`.

    **Concept Tested:** Mutable vs Immutable

---

#### 8. What does `colors[1] = "purple"` do to the list `colors = ["red", "green", "blue"]`?

<div class="upper-alpha" markdown>
1. Adds `"purple"` to the end of the list
2. Creates a brand-new list with `"purple"` inserted
3. Replaces `"green"` (at index 1) with `"purple"` in the existing list
4. Raises a `TypeError` because lists cannot be changed
</div>

??? question "Show Answer"
    The correct answer is **C**. Lists are mutable, so you can assign a new value to any existing index. `colors[1] = "purple"` changes the item at index 1 from `"green"` to `"purple"`. After this line, `colors` is `["red", "purple", "blue"]`. This in-place modification is one of the key features that distinguishes lists from immutable types like strings.

    **Concept Tested:** List Indexing

---

#### 9. Which of the following correctly creates an empty list?

<div class="upper-alpha" markdown>
1. `my_list = {}`
2. `my_list = None`
3. `my_list = ()`
4. `my_list = []`
</div>

??? question "Show Answer"
    The correct answer is **D**. An empty list is created with `[]` — square brackets with nothing inside. `{}` creates an empty dictionary (or set), `()` creates an empty tuple, and `None` is a special value meaning "nothing here." You can then add items to the empty list using methods like `append()`.

    **Concept Tested:** List Type

---

#### 10. What happens when you try to access `colors[10]` on a list that only has 4 items?

<div class="upper-alpha" markdown>
1. Python returns `None` for any out-of-range index
2. Python returns the last item in the list
3. Python raises an `IndexError` because the index is out of range
4. Python automatically extends the list with empty items up to index 10
</div>

??? question "Show Answer"
    The correct answer is **C**. Accessing an index that does not exist in a list raises an `IndexError: list index out of range`. For a list with 4 items, valid positive indexes are 0, 1, 2, and 3. Trying to access index 10 (or index 4 or higher) causes an error. Always make sure your index is within the valid range.

    **Concept Tested:** List Indexing

---
