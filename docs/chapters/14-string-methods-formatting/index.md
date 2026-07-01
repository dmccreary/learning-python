---
title: String Methods and Formatting
description: Master string indexing, slicing, split/join/replace, f-strings, and multiline formatting for clean program output
generated_by: claude skill chapter-content-generator
date: 2026-06-28 12:20:00
version: 0.09
---

# String Methods and Formatting

By the end of this lesson you'll be able to:

- Access individual characters using **string indexing** and extract substrings using **slicing**
- Use `split()`, `join()`, `replace()`, `find()`, `startswith()`, and `endswith()` to work with text
- Build clean output strings using **f-strings** — the modern Python way to embed variables in text
- Format multiline output to make your programs look professional

Strings are everywhere in programming. Usernames, messages, file names, web addresses — all text.
Python gives you a huge toolkit of string methods so you can chop, search, replace, and format text with just a few lines of code.

!!! mascot-welcome "Welcome to Chapter 14!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Strings are one of the most useful tools in your Python toolbox!
    Today you'll learn how to slice them, search them, replace parts, and format beautiful output.
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## String Indexing

Every character in a string has a **position number** called an **index**.
Python starts counting at zero — so the first character is at index `0`, the second at `1`, and so on.

You access a character using square brackets: `word[index]`.

```
word = "Python"
         P  y  t  h  o  n
index:   0  1  2  3  4  5
```

You can also count backwards from the end using negative numbers:

```
         P   y   t   h   o   n
index:   0   1   2   3   4   5
         -6  -5  -4  -3  -2  -1
```

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
initCmLab('', `word = "Python"
print("First character:", word[0])
print("Third character:", word[2])
print("Last character:", word[-1])
print("Second to last:", word[-2])`);
</script>

## String Slicing

**Slicing** extracts a portion (a "slice") of a string.
The syntax is `word[start:end]` — it gives you characters from `start` up to (but NOT including) `end`.

```python
word = "Python"
print(word[0:3])   # "Pyt" — indexes 0, 1, 2
print(word[2:5])   # "tho" — indexes 2, 3, 4
print(word[:3])    # "Pyt" — same as [0:3]
print(word[3:])    # "hon" — from 3 to the end
print(word[:])     # "Python" — the whole string
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Before running the code below, predict what `"programming"[3:8]` will print.
    Count the characters starting at index 0. Make your guess — then run it!

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
initCmLab('-2', `s = "programming"
print(s[3:8])
print(s[:4])
print(s[-4:])
print(s[::2])   # every other character (step of 2)`);
</script>

Were you right? `s[3:8]` gives you `"gramm"` — characters at positions 3, 4, 5, 6, and 7.

The `::2` notation is a **step** — `s[::2]` takes every second character.

## Split, Join, and Replace

Three of the most-used string methods are `split()`, `join()`, and `replace()`.

Before looking at examples, here's a quick preview:
- `split()` breaks a string into a **list** of pieces
- `join()` glues a list of strings back together
- `replace()` swaps every occurrence of one substring for another

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
initCmLab('-3', `sentence = "the quick brown fox"

# split() — break into words
words = sentence.split()
print("Words:", words)
print("Number of words:", len(words))

# join() — glue back together with dashes
dashed = "-".join(words)
print("Dashed:", dashed)

# replace() — swap one word for another
new_sentence = sentence.replace("fox", "python")
print("Replaced:", new_sentence)`);
</script>

| Method | What it does | Example |
|--------|-------------|---------|
| `s.split()` | Split on spaces | `"a b c".split()` → `["a","b","c"]` |
| `s.split(",")` | Split on commas | `"a,b,c".split(",")` → `["a","b","c"]` |
| `"-".join(lst)` | Join with dashes | `"-".join(["a","b"])` → `"a-b"` |
| `s.replace("x","y")` | Replace x with y | `"fox".replace("x","t")` → `"fot"` |

## Searching Strings

Python gives you several methods to search inside a string:

- `s.find("x")` — returns the index of the first occurrence of `"x"`, or `-1` if not found
- `s.startswith("x")` — returns `True` if the string starts with `"x"`
- `s.endswith("x")` — returns `True` if the string ends with `"x"`
- `s.isdigit()` — returns `True` if all characters are digits (no letters, no spaces)
- `s.isalpha()` — returns `True` if all characters are letters
- `s.isalnum()` — returns `True` if all characters are letters or digits

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
initCmLab('-4', `filename = "report2024.pdf"

print("Find '.pdf':", filename.find(".pdf"))
print("Starts with 'report':", filename.startswith("report"))
print("Ends with '.pdf':", filename.endswith(".pdf"))

code = "ABC123"
print("isalnum:", code.isalnum())
print("isdigit:", code.isdigit())
print("isalpha:", code.isalpha())`);
</script>

## f-Strings — The Modern Way to Format Text

An **f-string** (formatted string literal) lets you embed variables directly inside a string.
Put an `f` before the opening quote and wrap each variable in curly braces `{}`.

Before f-strings, you had to write things like:

```python
name = "Monty"
score = 95
print("Hello, " + name + "! Your score is " + str(score) + ".")
```

With an f-string, that becomes much cleaner:

```python
print(f"Hello, {name}! Your score is {score}.")
```

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-5"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-5')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-5')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-5"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-5"></div>
  </div>
</div>
<script>
initCmLab('-5', `name = "Monty"
score = 95
max_score = 100
percentage = score / max_score * 100

print(f"Hello, {name}!")
print(f"Your score: {score}/{max_score}")
print(f"Percentage: {percentage:.1f}%")   # .1f = 1 decimal place`);
</script>

The `:.1f` format code inside the curly braces says "show 1 decimal place."
Try changing it to `:.2f` for two decimal places.

## String Comparison

You can compare strings with `==`, `<`, and `>`.
Python compares strings alphabetically, character by character.

```python
print("apple" == "apple")   # True
print("apple" == "Apple")   # False — case-sensitive!
print("apple" < "banana")   # True — a comes before b
print("zebra" > "ant")      # True — z comes after a
```

Case matters! `"apple" != "Apple"`. Use `.lower()` on both sides if you want case-insensitive comparison.

## Multiline String Formatting

You can create a string that spans multiple lines using triple quotes `"""..."""`.
This is perfect for longer messages or templates:

```python
name = "Monty"
chapter = 14

report = f"""
===== Progress Report =====
Student:  {name}
Chapter:  {chapter}
Status:   Complete!
===========================
"""
print(report)
```

## Learning Check

!!! mascot-thinking "Your Turn — Fix the Greeting"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below should print a polished greeting using an f-string,
    but it still uses the old `+` concatenation style and forgets `str()` around the number.
    Rewrite the `print()` line as a single f-string to fix both problems!

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-6"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-6')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-6')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-6"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-6"></div>
  </div>
</div>
<script>
initCmLab('-6', `player = "Monty"
level = 5

# Rewrite this as one f-string:
print("Player: " + player + ", Level: " + str(level))`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Try `"Python"[::-1]` — that's a slice with step `-1`.
   **You'll know it worked when** you see `nohtyP` (the string reversed!).

2. Use `split(",")` to split the string `"red,green,blue,yellow"` and print each color on its own line.
   **You'll know it worked when** you see four lines, one color each.

3. Use `replace()` to censor the word `"bad"` in `"This is a bad example"`, replacing it with `"***"`.
   **You'll know it worked when** the output reads `This is a *** example`.

4. Write an f-string that displays a pizza order: ingredient (e.g. `"cheese"`) and price (e.g. `8.50`) with two decimal places.
   **You'll know it worked when** you see something like `Pizza: cheese — $8.50`.

5. Use `startswith()` to check if a filename ends with `".py"`. Print `"Python file!"` or `"Not a Python file"`.
   **You'll know it worked when** `"hello.py"` gives one result and `"hello.txt"` gives the other.

!!! mascot-celebration "String Master!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've learned indexing, slicing, split, join, replace, f-strings, and more!
    These string skills appear in almost every real Python program — from web apps to data science.
    You're building a seriously impressive toolkit! Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
