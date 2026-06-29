# Quiz: Lists — Methods and Patterns

Test your understanding of list methods, sorting, list comprehensions, and stack/queue patterns with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does `fruits.append("mango")` do?

<div class="upper-alpha" markdown>
1. Inserts `"mango"` at the beginning of the list
2. Adds `"mango"` to the end of the list
3. Replaces the first item with `"mango"`
4. Creates a new list with `"mango"` as the only item
</div>

??? question "Show Answer"
    The correct answer is **B**. `append(x)` adds a single item to the **end** of an existing list, modifying it in place. If `fruits = ["apple", "banana"]`, then after `fruits.append("mango")` the list becomes `["apple", "banana", "mango"]`. Use `insert(i, x)` instead if you want to add the item at a specific position.

    **Concept Tested:** append() Method

---

#### 2. What does `items.insert(1, "kiwi")` do to `items = ["apple", "banana"]`?

<div class="upper-alpha" markdown>
1. Replaces `"banana"` with `"kiwi"`
2. Adds `"kiwi"` to the end of the list
3. Inserts `"kiwi"` before the item at index 1, making the list `["apple", "kiwi", "banana"]`
4. Raises an error because `"banana"` is already at index 1
</div>

??? question "Show Answer"
    The correct answer is **C**. `insert(i, x)` inserts item `x` **before** the item currently at index `i`. With `items = ["apple", "banana"]`, calling `items.insert(1, "kiwi")` places `"kiwi"` at index 1 and pushes `"banana"` to index 2: `["apple", "kiwi", "banana"]`. The list grows by one item.

    **Concept Tested:** insert() Method

---

#### 3. What does `items.pop()` do?

<div class="upper-alpha" markdown>
1. Removes the first item from the list and returns it
2. Removes and returns the last item from the list
3. Removes all items from the list
4. Returns the last item without removing it
</div>

??? question "Show Answer"
    The correct answer is **B**. `pop()` with no argument removes and returns the **last** item in the list. You can also use `pop(i)` to remove and return the item at a specific index. This makes `pop()` very useful for implementing stacks (last in, first out), where you always work with the top (last) item.

    **Concept Tested:** pop() Method

---

#### 4. What does `scores.sort()` do to `scores = [73, 100, 87, 55]`?

<div class="upper-alpha" markdown>
1. Returns a new sorted list without changing the original
2. Sorts the list in descending order (largest first)
3. Sorts the list in ascending order (smallest first) and modifies it in place
4. Creates a sorted copy and stores it in a new variable called `sorted_scores`
</div>

??? question "Show Answer"
    The correct answer is **C**. `sort()` rearranges the items in the list **in place** in ascending order (smallest-first for numbers, alphabetical for strings). After `scores.sort()`, `scores` itself becomes `[55, 73, 87, 100]`. It does NOT return a new list — if you write `result = scores.sort()`, `result` will be `None`.

    **Concept Tested:** sort() Method

---

#### 5. What is the result of `[s * 2 for s in [1, 2, 3]]`?

<div class="upper-alpha" markdown>
1. `[1, 2, 3, 1, 2, 3]`
2. `12`
3. `[2, 4, 6]`
4. `[[2], [4], [6]]`
</div>

??? question "Show Answer"
    The correct answer is **C**. This is a list comprehension — it builds a new list by applying an expression (`s * 2`) to each item in the source list `[1, 2, 3]`. The result is `[2, 4, 6]`. List comprehensions are a concise, readable way to transform lists without writing a full loop.

    **Concept Tested:** List Comprehensions

---

#### 6. What does the following list comprehension produce?

```python
[s for s in [60, 80, 45, 90] if s >= 70]
```

<div class="upper-alpha" markdown>
1. `[60, 80, 45, 90]` — the original list unchanged
2. `[80, 90]` — only scores 70 and above
3. `[60, 45]` — only scores below 70
4. `[True, True, False, True]` — a list of booleans
</div>

??? question "Show Answer"
    The correct answer is **B**. The `if` clause in a list comprehension acts as a filter — only items where the condition is `True` are included in the result. `s >= 70` is `True` for `80` and `90`, so only those two values appear in the output list. This is a very common pattern for filtering data.

    **Concept Tested:** List Comprehensions

---

#### 7. What does `colors.remove("red")` do if `colors = ["red", "blue", "red"]`?

<div class="upper-alpha" markdown>
1. Removes all occurrences of `"red"` from the list
2. Removes the item at the index named `"red"`
3. Removes only the first occurrence of `"red"` from the list
4. Raises a `ValueError` because `"red"` appears more than once
</div>

??? question "Show Answer"
    The correct answer is **C**. `remove(x)` searches for and removes the **first** occurrence of the value `x`. After `colors.remove("red")`, the list becomes `["blue", "red"]` — the second `"red"` stays. If `x` is not in the list at all, `remove()` raises a `ValueError`.

    **Concept Tested:** remove() Method

---

#### 8. In a stack data structure, which item is removed first?

<div class="upper-alpha" markdown>
1. The item at index 0 (first added)
2. The item in the middle of the stack
3. A randomly chosen item
4. The most recently added item (last in, first out)
</div>

??? question "Show Answer"
    The correct answer is **D**. A stack follows the LIFO (Last In, First Out) principle — the most recently added item is the first one to be removed. You implement a stack in Python with a list: `append()` to push items onto the top and `pop()` to remove items from the top. Think of a stack of plates — you always take the top one first.

    **Concept Tested:** Stack Pattern

---

#### 9. How do you find how many times the value `5` appears in `numbers = [5, 3, 5, 8, 5]`?

<div class="upper-alpha" markdown>
1. `numbers.find(5)`
2. `numbers.index(5)`
3. `numbers.count(5)`
4. `len(numbers, 5)`
</div>

??? question "Show Answer"
    The correct answer is **C**. `count(x)` returns the number of times the value `x` appears in the list. `numbers.count(5)` would return `3` because there are three `5`s in the list. `index(x)` returns the position of the first occurrence (not the count). `find()` is a string method, not a list method.

    **Concept Tested:** count() and index() Methods

---

#### 10. What does `my_list.extend(["x", "y"])` do that `my_list.append(["x", "y"])` does NOT?

<div class="upper-alpha" markdown>
1. `extend()` adds each item individually; `append()` would add the whole list as a single nested item
2. `extend()` creates a new list; `append()` modifies the original
3. `extend()` only works with strings; `append()` works with any type
4. They do the same thing — `extend()` and `append()` are interchangeable
</div>

??? question "Show Answer"
    The correct answer is **A**. `extend(other_list)` unpacks `other_list` and adds each item individually to the end. `append(other_list)` adds the entire list as a single item (creating a nested list). If `my_list = [1, 2]`, then `extend([3, 4])` gives `[1, 2, 3, 4]`, while `append([3, 4])` gives `[1, 2, [3, 4]]`.

    **Concept Tested:** extend() Method

---
