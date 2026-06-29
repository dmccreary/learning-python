# Quiz: Text Processing and Regular Expressions

Test your understanding of regular expressions, the re module, pattern elements, quantifiers, and text substitution with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What Python module provides regular expression functions?

<div class="upper-alpha" markdown>
1. `import regex`
2. `import pattern`
3. `import re`
4. `import text`
</div>

??? question "Show Answer"
    The correct answer is **C**. Python's standard library includes the `re` module for regular expressions. Import it with `import re`. The main functions are `re.search()`, `re.findall()`, `re.split()`, and `re.sub()`. Regular expressions are patterns you write to search, match, split, or replace text in powerful ways that would take many lines of string methods to replicate.

    **Concept Tested:** re Module

---

#### 2. Why should you use raw strings (`r"..."`) for regex patterns?

<div class="upper-alpha" markdown>
1. Raw strings run faster because Python skips the string parser
2. Raw strings prevent Python from interpreting backslashes as escape sequences, so regex characters like `\d` are passed literally to the regex engine
3. Raw strings are required for multi-line patterns to work correctly
4. Raw strings automatically make the pattern case-insensitive
</div>

??? question "Show Answer"
    The correct answer is **B**. Regex patterns use many backslash sequences: `\d` for digit, `\w` for word character, `\s` for whitespace. In a normal Python string, backslash starts escape sequences (`\n` = newline). A raw string (`r"..."`) tells Python not to process backslashes, so `r"\d"` passes `\d` literally to the regex engine. Always use `r"..."` for regex patterns.

    **Concept Tested:** Raw Strings for Regex

---

#### 3. What does the regex pattern `\d` match?

<div class="upper-alpha" markdown>
1. Any letter (a-z or A-Z)
2. Any whitespace character (space, tab, newline)
3. Any single digit (0-9)
4. Any word character (letter, digit, or underscore)
</div>

??? question "Show Answer"
    The correct answer is **C**. `\d` matches any single digit character from 0 to 9. To match a word character (letters, digits, underscore), use `\w`. To match whitespace, use `\s`. The uppercase versions (`\D`, `\W`, `\S`) match the opposite — anything that is NOT a digit, word character, or whitespace, respectively.

    **Concept Tested:** Pattern Elements

---

#### 4. What does `re.search(r"\d{3}-\d{4}", "Call 555-1234!")` return?

<div class="upper-alpha" markdown>
1. `True`
2. The string `"555-1234"`
3. A match object (because the pattern was found in the text)
4. `None` (because the text is not entirely a phone number)
</div>

??? question "Show Answer"
    The correct answer is **C**. `re.search()` returns a **match object** if the pattern is found anywhere in the text, or `None` if not found. It does not return a simple boolean or the matched text directly. To get the actual matched string, call `.group()` on the match object: `match.group()` would return `"555-1234"`.

    **Concept Tested:** re.search()

---

#### 5. What does the quantifier `+` mean in a regex pattern?

<div class="upper-alpha" markdown>
1. Match the preceding element exactly one time
2. Match the preceding element one or more times
3. Match the preceding element zero or one time (making it optional)
4. Match the preceding element zero or more times
</div>

??? question "Show Answer"
    The correct answer is **B**. The `+` quantifier means "one or more times" — the preceding element must appear at least once. For example, `\d+` matches one or more digits: it matches `"5"`, `"42"`, `"1000"` but NOT an empty string. Compare: `*` means zero or more (can be absent), `?` means zero or one (optional), `{n}` means exactly n times.

    **Concept Tested:** Quantifiers

---

#### 6. What does `re.findall(r"\d+", "I have 3 cats and 12 fish")` return?

<div class="upper-alpha" markdown>
1. `"3"` (only the first number found)
2. `None`
3. `["3", "12"]` (a list of all matches)
4. `2` (the count of matches)
</div>

??? question "Show Answer"
    The correct answer is **C**. `re.findall()` returns a list of all non-overlapping matches as strings. For `\d+` (one or more digits) applied to `"I have 3 cats and 12 fish"`, it finds `"3"` and `"12"` and returns them as `["3", "12"]`. Unlike `re.search()` which stops at the first match, `findall()` collects all occurrences.

    **Concept Tested:** re.findall()

---

#### 7. What does `re.sub(r"\s+", "-", "hello world  foo")` produce?

<div class="upper-alpha" markdown>
1. `"hello world  foo"` (unchanged, because sub only works with exact matches)
2. `"hello-world-foo"`
3. `["hello", "world", "foo"]`
4. `"hello-world  foo"` (only the first match is replaced)
</div>

??? question "Show Answer"
    The correct answer is **B**. `re.sub(pattern, replacement, text)` replaces all matches of the pattern with the replacement string. `\s+` matches one or more whitespace characters. The single space between "hello" and "world" and the double space between "world" and "foo" are both replaced by `"-"`, giving `"hello-world-foo"`. By default, `re.sub()` replaces all occurrences.

    **Concept Tested:** re.sub()

---

#### 8. What does the `^` anchor do in a regex pattern?

<div class="upper-alpha" markdown>
1. Matches any character except newline
2. Marks the end of the pattern to match
3. Makes the pattern case-insensitive
4. Requires the pattern to match at the start of the string
</div>

??? question "Show Answer"
    The correct answer is **D**. The `^` anchor asserts that the match must occur at the beginning of the string. For example, `r"^\d"` matches strings that start with a digit. Without `^`, `re.search(r"\d", text)` finds a digit anywhere in the text. The `$` anchor similarly requires the match to be at the end of the string. Together, `^...$` matches the entire string.

    **Concept Tested:** Anchors

---

#### 9. What does `re.split(r",\s*", "apples, oranges,bananas,  grapes")` return?

<div class="upper-alpha" markdown>
1. `"apples oranges bananas grapes"` (all commas removed)
2. `["apples", "oranges", "bananas", "grapes"]`
3. `["apples, oranges", "bananas,  grapes"]`
4. `4` (the number of items)
</div>

??? question "Show Answer"
    The correct answer is **B**. `re.split(pattern, text)` splits the text at every match of the pattern, returning a list of the pieces. The pattern `r",\s*"` matches a comma followed by zero or more whitespace characters, handling all the different spacing styles around commas. The result is a clean list: `["apples", "oranges", "bananas", "grapes"]`.

    **Concept Tested:** re.split()

---

#### 10. What does the `.` character match in a regular expression?

<div class="upper-alpha" markdown>
1. Only a literal period character
2. Any single character except a newline
3. Any digit or letter (but not punctuation)
4. Zero or more of the preceding character
</div>

??? question "Show Answer"
    The correct answer is **B**. In a regex, `.` is a wildcard that matches any single character except a newline (`\n`). For example, `r"c.t"` would match `"cat"`, `"cut"`, `"c4t"`, and `"c!t"`. To match a literal period, escape it: `r"\."`. The quantifiers `*` and `+` control repetition — they are not matched by `.`.

    **Concept Tested:** Pattern Elements

---
