# Quiz: Tuples and Sets

Test your understanding of Python's tuple and set types, tuple unpacking, and set operations with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the key difference between a tuple and a list?

<div class="upper-alpha" markdown>
1. Tuples use parentheses; lists use square brackets, but otherwise they are identical
2. Tuples are immutable (cannot be changed after creation); lists are mutable (can be changed)
3. Tuples can only hold numbers; lists can hold any type
4. Tuples are faster to create; lists are faster to access
</div>

??? question "Show Answer"
    The correct answer is **B**. The most important difference is mutability. Lists can have items added, removed, or changed. Tuples cannot — once created, their contents are fixed. Both support indexing, slicing, and iteration. Use a tuple when the data represents a fixed thing (like a coordinate) and a list when the collection needs to change.

    **Concept Tested:** Tuple Type

---

#### 2. How do you create a single-element tuple containing the number 42?

<div class="upper-alpha" markdown>
1. `(42)`
2. `[42]`
3. `{42}`
4. `(42,)`
</div>

??? question "Show Answer"
    The correct answer is **D**. A trailing comma is required to tell Python you mean a tuple. `(42)` is just the integer 42 in parentheses — not a tuple. `(42,)` has the trailing comma that signals "this is a one-element tuple." For tuples with two or more items, no trailing comma is needed: `(1, 2)` is already clearly a tuple.

    **Concept Tested:** Single-Element Tuple Syntax

---

#### 3. What does tuple unpacking do?

<div class="upper-alpha" markdown>
1. Removes all items from a tuple one at a time
2. Converts a tuple into a list so its items can be changed
3. Assigns each item in a tuple to a separate variable in one step
4. Prints all items in a tuple on separate lines
</div>

??? question "Show Answer"
    The correct answer is **C**. Tuple unpacking (also called destructuring) lets you write `x, y = (10, 20)` to assign `10` to `x` and `20` to `y` in a single line. The number of variables on the left must match the number of items in the tuple. This is the same mechanism that makes Python's one-line variable swap (`a, b = b, a`) work.

    **Concept Tested:** Tuple Unpacking

---

#### 4. What is a common use case for returning a tuple from a function?

<div class="upper-alpha" markdown>
1. To make the function run faster
2. To return multiple values from a function at once
3. To prevent the caller from changing the return value
4. To ensure the function can only be called once
</div>

??? question "Show Answer"
    The correct answer is **B**. A function can only have one `return` statement, but you can pack multiple values into a tuple and return them all at once. For example, `return min_val, max_val` returns a tuple. The caller can then unpack it: `lo, hi = find_range(data)`. This is cleaner than returning a list or using global variables.

    **Concept Tested:** Tuples as Return Values

---

#### 5. What happens when you add a duplicate item to a set?

<div class="upper-alpha" markdown>
1. The set raises a `ValueError`
2. The item is added a second time, creating a duplicate
3. The duplicate is silently ignored — the set stays unchanged
4. The original item is replaced by the new copy
</div>

??? question "Show Answer"
    The correct answer is **C**. Sets automatically enforce uniqueness — no duplicates are allowed. If you `add()` an item that is already in the set, or create a set with repeated values like `{1, 2, 2, 3}`, Python silently ignores the duplicates. The set `{1, 2, 2, 3}` becomes `{1, 2, 3}`.

    **Concept Tested:** Set Type

---

#### 6. Given `A = {1, 2, 3, 4}` and `B = {3, 4, 5, 6}`, what is `A & B`?

<div class="upper-alpha" markdown>
1. `{1, 2, 3, 4, 5, 6}` (all items from both)
2. `{1, 2}` (items only in A)
3. `{3, 4}` (items in both A and B)
4. `{5, 6}` (items only in B)
</div>

??? question "Show Answer"
    The correct answer is **C**. The `&` operator performs set intersection — it returns a new set containing only items that appear in **both** sets. Both `3` and `4` are in A and in B, so `A & B = {3, 4}`. The `|` operator is union (all items), and `-` is difference (in first but not second).

    **Concept Tested:** Set Intersection

---

#### 7. What does `A | B` produce for `A = {1, 2, 3}` and `B = {3, 4, 5}`?

<div class="upper-alpha" markdown>
1. `{3}` (only the shared item)
2. `{1, 2, 4, 5}` (items not in both)
3. `{1, 2}` (items only in A)
4. `{1, 2, 3, 4, 5}` (all unique items from both)
</div>

??? question "Show Answer"
    The correct answer is **D**. The `|` operator performs set union — it returns a new set containing all items from both sets, with no duplicates. `{1, 2, 3} | {3, 4, 5}` gives `{1, 2, 3, 4, 5}`. The shared item `3` appears only once in the result because sets do not allow duplicates.

    **Concept Tested:** Set Union

---

#### 8. What is the difference between `s.remove(x)` and `s.discard(x)` on a set?

<div class="upper-alpha" markdown>
1. `remove()` removes by index; `discard()` removes by value
2. `remove()` raises a `KeyError` if `x` is not found; `discard()` silently does nothing if `x` is not found
3. `remove()` works on lists; `discard()` only works on sets
4. They are identical — just two names for the same operation
</div>

??? question "Show Answer"
    The correct answer is **B**. Both methods remove an item from a set by value, but they differ in error handling. `remove(x)` raises a `KeyError` if `x` is not in the set. `discard(x)` does nothing and raises no error if `x` is absent. Use `discard()` when you are not sure whether the item exists and do not want to check first.

    **Concept Tested:** Set Methods

---

#### 9. What is the quickest way to remove duplicates from a list in Python?

<div class="upper-alpha" markdown>
1. Sort the list and remove adjacent duplicates with a loop
2. Convert the list to a set with `set()`, which automatically removes duplicates
3. Use `list.remove_duplicates()` (a built-in method)
4. Iterate over the list and check each item with `in` before appending
</div>

??? question "Show Answer"
    The correct answer is **B**. `set(my_list)` converts a list to a set, automatically discarding all duplicate values. If you need the result as a list again, wrap it: `list(set(my_list))`. The only caveat is that sets are unordered, so the original order is not preserved. There is no built-in `remove_duplicates()` method in Python.

    **Concept Tested:** Set Type

---

#### 10. What does `A - B` produce for `A = {1, 2, 3, 4}` and `B = {3, 4, 5}`?

<div class="upper-alpha" markdown>
1. `{5}` (items only in B)
2. `{-2, -2, -2, -1}` (subtracting each item)
3. `{1, 2}` (items in A that are not in B)
4. `{1, 2, 5}` (all unique items not shared)
</div>

??? question "Show Answer"
    The correct answer is **C**. The `-` operator performs set difference — it returns items that are in the first set but NOT in the second. `{1, 2, 3, 4} - {3, 4, 5}` gives `{1, 2}` because `3` and `4` are removed (they are in B) and `5` is not included (it was only in B). Note that `A - B` and `B - A` give different results.

    **Concept Tested:** Set Difference

---
