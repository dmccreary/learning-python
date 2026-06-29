# Quiz: Dictionaries

Test your understanding of Python dictionaries, key-value access, iteration, and dictionary comprehensions with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. How do you create a dictionary in Python with two entries?

<div class="upper-alpha" markdown>
1. `d = ["name": "Alice", "age": 12]`
2. `d = ("name": "Alice", "age": 12)`
3. `d = {"name": "Alice", "age": 12}`
4. `d = dict[name="Alice", age=12]`
</div>

??? question "Show Answer"
    The correct answer is **C**. Dictionaries are created with curly braces `{}`, with each entry written as `key: value` and entries separated by commas. Keys must be unique within a dictionary. Values can be any type — strings, numbers, lists, or even other dictionaries.

    **Concept Tested:** Creating Dictionaries

---

#### 2. Given `grades = {"Alice": 95, "Bob": 87}`, what does `grades["Alice"]` return?

<div class="upper-alpha" markdown>
1. `"Alice"`
2. `0` (the index of "Alice")
3. `87`
4. `95`
</div>

??? question "Show Answer"
    The correct answer is **D**. Dictionary lookup with square brackets uses the key to retrieve its associated value. `grades["Alice"]` returns `95`. Unlike lists (which use integer indexes starting at 0), dictionaries use the keys you defined — in this case, the string `"Alice"` maps to the integer `95`.

    **Concept Tested:** Accessing Values by Key

---

#### 3. What happens when you access a dictionary key that does not exist using square brackets?

<div class="upper-alpha" markdown>
1. Python returns `None` automatically
2. Python creates the key with a default value of `0`
3. Python raises a `KeyError`
4. Python skips the line and continues
</div>

??? question "Show Answer"
    The correct answer is **C**. If you use `d[key]` with a key that is not in the dictionary, Python raises a `KeyError`. This crashes your program unless you catch the error. To safely access a key that might not exist, use `d.get(key)` which returns `None` (or a default you specify) instead of crashing.

    **Concept Tested:** KeyError

---

#### 4. What does `grades.get("Dave", 0)` return if `"Dave"` is not in the dictionary?

<div class="upper-alpha" markdown>
1. A `KeyError` exception
2. `None`
3. `"Dave"`
4. `0`
</div>

??? question "Show Answer"
    The correct answer is **D**. `dict.get(key, default)` returns the value for `key` if it exists, otherwise returns the `default` value. With `grades.get("Dave", 0)`, if `"Dave"` is not a key, the method returns `0`. Without a default, `get()` returns `None`. This is much safer than using `d[key]` when you are unsure if the key exists.

    **Concept Tested:** Safe Access with get()

---

#### 5. How do you add a new key `"Eve"` with value `88` to the dictionary `grades`?

<div class="upper-alpha" markdown>
1. `grades.add("Eve", 88)`
2. `grades.append({"Eve": 88})`
3. `grades["Eve"] = 88`
4. `grades.insert("Eve", 88)`
</div>

??? question "Show Answer"
    The correct answer is **C**. Adding a new entry to a dictionary uses the same syntax as updating an existing one: `d[key] = value`. If the key already exists, this updates its value. If the key is new, this creates a new entry. Dictionaries do not have `add()`, `append()`, or `insert()` methods.

    **Concept Tested:** Adding and Updating Entries

---

#### 6. Which method returns all key-value pairs as tuples for iterating?

<div class="upper-alpha" markdown>
1. `d.keys()`
2. `d.values()`
3. `d.pairs()`
4. `d.items()`
</div>

??? question "Show Answer"
    The correct answer is **D**. `d.items()` returns a view of all `(key, value)` pairs as tuples. You can iterate over them with `for key, value in d.items():`. `d.keys()` gives only the keys, `d.values()` gives only the values, and `d.pairs()` is not a valid dictionary method.

    **Concept Tested:** Keys, Values, and Items

---

#### 7. How do you check whether the key `"Bob"` is in a dictionary without risking a `KeyError`?

<div class="upper-alpha" markdown>
1. `grades.contains("Bob")`
2. `"Bob" in grades`
3. `grades.find("Bob")`
4. `grades.has_key("Bob")`
</div>

??? question "Show Answer"
    The correct answer is **B**. The `in` operator checks for key membership in a dictionary and returns `True` or `False`. `"Bob" in grades` is the standard Pythonic way to test if a key exists. `has_key()` was removed in Python 3, `contains()` is not a dictionary method, and `find()` is a string method.

    **Concept Tested:** Key Membership with in

---

#### 8. What does a nested dictionary allow you to represent?

<div class="upper-alpha" markdown>
1. A dictionary where all values must be the same type
2. Structured data where a value is itself a dictionary, enabling multi-level lookups
3. A dictionary that automatically sorts its keys in alphabetical order
4. A dictionary that can only be read, not modified
</div>

??? question "Show Answer"
    The correct answer is **B**. A nested dictionary is one where values are themselves dictionaries. This allows you to represent structured data with multiple levels — for example, a contacts list where each contact has a phone and email. Access is chained: `contacts["Alice"]["phone"]` first gets Alice's sub-dictionary, then looks up "phone" in it.

    **Concept Tested:** Nested Dictionaries

---

#### 9. What does this dictionary comprehension produce?

```python
squares = {n: n * n for n in range(1, 4)}
```

<div class="upper-alpha" markdown>
1. `[1, 4, 9]`
2. `{1, 4, 9}` (a set)
3. `{1: 1, 2: 4, 3: 9}`
4. `{0: 0, 1: 1, 2: 4}`
</div>

??? question "Show Answer"
    The correct answer is **C**. A dictionary comprehension uses the form `{key_expr: value_expr for item in iterable}`. Here, `n` becomes the key and `n * n` becomes the value. `range(1, 4)` produces 1, 2, 3 — so the result is `{1: 1, 2: 4, 3: 9}`. The curly braces with a colon pattern distinguish it from a set comprehension.

    **Concept Tested:** Dictionary Comprehensions

---

#### 10. What does `d.pop("Bob")` do if `"Bob"` exists in the dictionary?

<div class="upper-alpha" markdown>
1. Removes "Bob" from the dictionary and returns its value
2. Removes "Bob" from the dictionary and returns `None`
3. Removes the last item added to the dictionary
4. Returns "Bob"'s value but leaves it in the dictionary
</div>

??? question "Show Answer"
    The correct answer is **A**. `d.pop(key)` removes the entry with the given key from the dictionary and returns its value. If `grades = {"Bob": 87}`, then `grades.pop("Bob")` returns `87` and `grades` becomes `{}`. If the key does not exist, `pop()` raises a `KeyError` unless you provide a default: `d.pop("Bob", None)`.

    **Concept Tested:** Removing Entries

---
