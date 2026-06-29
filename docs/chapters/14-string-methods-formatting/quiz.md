# Quiz: String Methods and Formatting

Test your understanding of string indexing, slicing, methods, and f-strings with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What index does the first character of a Python string have?

<div class="upper-alpha" markdown>
1. `1`
2. `-1`
3. `0`
4. The index depends on the length of the string
</div>

??? question "Show Answer"
    The correct answer is **C**. Python strings (and most Python sequences) use zero-based indexing — the first character is at index `0`, the second at `1`, and so on. So for the string `"Python"`, `word[0]` gives `"P"`, `word[1]` gives `"y"`, and `word[5]` gives `"n"`.

    **Concept Tested:** String Indexing

---

#### 2. What does `"Python"[-1]` return?

<div class="upper-alpha" markdown>
1. `"P"` (the first character)
2. An error, because negative indexes are not allowed
3. `"n"` (the last character)
4. `6` (the length of the string)
</div>

??? question "Show Answer"
    The correct answer is **C**. Negative indexes count backwards from the end of the string. Index `-1` is the last character, `-2` is second-to-last, and so on. For `"Python"`, index `-1` is `"n"`. This is convenient when you want the last character without knowing the string's length.

    **Concept Tested:** String Indexing

---

#### 3. What does `"programming"[0:4]` return?

<div class="upper-alpha" markdown>
1. `"prog"`
2. `"rogr"`
3. `"prog "` (with a space)
4. `"rogramming"`
</div>

??? question "Show Answer"
    The correct answer is **A**. String slicing `[start:end]` returns characters from index `start` up to, but NOT including, index `end`. `"programming"[0:4]` gives characters at indexes 0, 1, 2, and 3 — which are `p`, `r`, `o`, `g` — forming `"prog"`. The character at index 4 (`a`) is not included.

    **Concept Tested:** String Slicing

---

#### 4. What does `"hello world".split()` return?

<div class="upper-alpha" markdown>
1. `"hello"` and `"world"` as two separate print statements
2. `["hello", "world"]` — a list of two strings
3. `"hello,world"` with a comma added
4. `11` — the number of characters including the space
</div>

??? question "Show Answer"
    The correct answer is **B**. `split()` with no argument breaks a string at every whitespace and returns a list of the pieces. `"hello world".split()` returns the list `["hello", "world"]`. You can also split on a specific character: `"a,b,c".split(",")` returns `["a", "b", "c"]`.

    **Concept Tested:** split() Method

---

#### 5. What does `"-".join(["a", "b", "c"])` return?

<div class="upper-alpha" markdown>
1. `"a-b-c"`
2. `["a", "b", "c"]` unchanged
3. `"-a-b-c-"`
4. `"abc"` with no separator
</div>

??? question "Show Answer"
    The correct answer is **A**. `join()` glues a list of strings together using the string it is called on as the separator. `"-".join(["a", "b", "c"])` returns `"a-b-c"`. The separator appears between items but not at the beginning or end. `join()` is the reverse of `split()`.

    **Concept Tested:** join() Method

---

#### 6. What does `"the fox ran".replace("fox", "dog")` return?

<div class="upper-alpha" markdown>
1. `"the fox ran"` unchanged
2. `"the dog ran"`
3. `"the dog dog ran"` replacing once
4. An error, because `replace()` requires three arguments
</div>

??? question "Show Answer"
    The correct answer is **B**. `replace(old, new)` returns a new string with every occurrence of `old` replaced by `new`. `"the fox ran".replace("fox", "dog")` returns `"the dog ran"`. Note that strings are immutable — `replace()` does not change the original string; it returns a new one.

    **Concept Tested:** replace() Method

---

#### 7. What does `"report.pdf".endswith(".pdf")` return?

<div class="upper-alpha" markdown>
1. The index where `".pdf"` starts in the string
2. `True`
3. `False`
4. `".pdf"` (the matching suffix)
</div>

??? question "Show Answer"
    The correct answer is **B**. `endswith(suffix)` returns `True` if the string ends with the given suffix, `False` otherwise. `"report.pdf".endswith(".pdf")` returns `True` because the string does end with `".pdf"`. This is very useful for checking file extensions, URL endings, and other suffix patterns.

    **Concept Tested:** String Search Methods

---

#### 8. What is an f-string in Python?

<div class="upper-alpha" markdown>
1. A string that can only hold floating-point numbers
2. A special "fast" string type that runs faster than regular strings
3. A formatted string literal that lets you embed variables directly using `{variable}` inside the string
4. A string defined with triple quotes for multiple lines
</div>

??? question "Show Answer"
    The correct answer is **C**. An f-string (formatted string literal) is created by putting `f` before the opening quote: `f"Hello, {name}!"`. Any expression inside `{}` is evaluated and inserted into the string. F-strings replace the need to convert numbers with `str()` before joining and are much more readable than concatenation.

    **Concept Tested:** f-Strings

---

#### 9. What does `f"Score: {95:.1f}%"` produce?

<div class="upper-alpha" markdown>
1. `"Score: 95%"`
2. `"Score: 95.0%"`
3. `"Score: 95.1%"`
4. An error because integers cannot use `.1f` format
</div>

??? question "Show Answer"
    The correct answer is **B**. The format spec `:.1f` inside an f-string formats a number as a float with exactly 1 decimal place. `95` formatted as `:.1f` becomes `95.0`. So `f"Score: {95:.1f}%"` produces `"Score: 95.0%"`. Format specs like `.2f` (2 decimal places) or `.0f` (no decimals) give you precise control over numeric display.

    **Concept Tested:** f-Strings

---

#### 10. What does `s.find("xyz")` return when `"xyz"` is not found in the string `s`?

<div class="upper-alpha" markdown>
1. `None`
2. `False`
3. An error is raised
4. `-1`
</div>

??? question "Show Answer"
    The correct answer is **D**. `find()` returns the index of the first occurrence of the search string. If the search string is not found, `find()` returns `-1` rather than raising an error. This lets you check the result: `if s.find("xyz") != -1:` means "if xyz was found." The `in` operator (`"xyz" in s`) is another common way to check without worrying about the index.

    **Concept Tested:** String Search Methods

---
