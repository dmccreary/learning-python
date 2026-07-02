---
title: Text Processing and Regular Expressions
description: Learn regular expressions — search, findall, split, sub, character classes, quantifiers, groups, and compiled patterns
generated_by: claude skill chapter-content-generator
date: 2026-06-28 14:50:00
version: 0.09
---

# Text Processing and Regular Expressions

By the end of this lesson you'll be able to:

- Write basic **regular expressions** to match patterns in text
- Use `re.search()`, `re.findall()`, `re.split()`, and `re.sub()` to search and transform text
- Build patterns using character classes, quantifiers, anchors, and groups
- Use **raw strings** (`r"..."`) to avoid backslash confusion

Regular expressions (regex) are a mini-language for describing text patterns.
With a single regex, you can find phone numbers, validate email addresses, or extract data from thousands of lines of text.

!!! mascot-welcome "Welcome to Chapter 29!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Regular expressions look scary at first — but once you learn the building blocks, they're incredibly powerful.
    One line of regex can do what would take 20 lines of string methods.
    Let's decode the mystery! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## The `re` Module

Import Python's regex module with `import re`.

The core functions are:

| Function | Returns | Use when |
|----------|---------|---------|
| `re.search(pattern, text)` | Match object or `None` | Check if pattern appears anywhere |
| `re.findall(pattern, text)` | List of all matches | Get every occurrence |
| `re.split(pattern, text)` | List of pieces | Split text by a pattern |
| `re.sub(pattern, replacement, text)` | New string | Replace matches |

## Raw Strings

Regex patterns use backslashes a lot — `\d`, `\w`, `\s`.
In regular Python strings, `\d` is treated as a special escape sequence.
To avoid confusion, always write regex patterns as **raw strings** by putting `r` before the quote: `r"\d"`.

```python
# Without raw string: Python interprets \n as newline
pattern = "\n"   # newline character

# With raw string: Python passes \n literally to the regex engine
pattern = r"\n"  # the two characters backslash + n
```

**Rule: always use `r"..."` for regex patterns.**

## Basic Pattern Elements

Before we write real patterns, here are the building blocks:

| Pattern | Matches |
|---------|---------|
| `.` | Any single character (except newline) |
| `\d` | A digit (0–9) |
| `\w` | A word character (letter, digit, underscore) |
| `\s` | A whitespace character (space, tab, newline) |
| `\D` | Not a digit |
| `\W` | Not a word character |
| `\S` | Not whitespace |
| `^` | Start of the string |
| `$` | End of the string |

## Quantifiers

Quantifiers control how many times a pattern element repeats:

| Quantifier | Meaning | Example |
|-----------|---------|---------|
| `*` | 0 or more times | `\d*` — zero or more digits |
| `+` | 1 or more times | `\d+` — one or more digits |
| `?` | 0 or 1 times | `\d?` — optional digit |
| `{n}` | Exactly n times | `\d{3}` — exactly 3 digits |
| `{n,m}` | Between n and m times | `\d{2,4}` — 2 to 4 digits |

## `re.search()` — Find First Match

`re.search(pattern, text)` scans through `text` looking for the first location where the pattern matches.
It returns a **match object** if found, or `None` if not.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below searches for a phone number pattern in different strings.
    Which strings do you think will match the pattern `\d{3}-\d{4}`?
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
initCmLab('', `import re

texts = [
    "Call me at 555-1234!",
    "My number is 867-5309.",
    "No number here.",
    "Fax: 123-4567 or 987-6543"
]

for t in texts:
    match = re.search(r"\\d{3}-\\d{4}", t)
    if match:
        print(f"Found in: {t!r}")
        print(f"  Match: {match.group()}")
    else:
        print(f"No match in: {t!r}")`);
</script>

`match.group()` returns the text that was matched.

## `re.findall()` — Find All Matches

`re.findall(pattern, text)` returns a **list** of every non-overlapping match.

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
initCmLab('-2', `import re

text = "Prices: $5.99, $12.00, $3.50, and $100.00"

prices = re.findall(r"\\$\\d+\\.\\d{2}", text)
print("Prices found:", prices)

# Find all words (sequences of letters):
words = re.findall(r"[A-Za-z]+", text)
print("Words found:", words)`);
</script>

### See It: The Regex Match Lab

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The lab below starts with the pattern `\d{3}-\d{4}`. Read the chips under
    the pattern box, then predict: **which pieces of the sample text will
    light up — and how many matches will findall report?**

<iframe src="../../sims/regex-match-lab/main.html" height="372" width="100%" scrolling="no"></iframe>

[Explore the Regex Match Lab MicroSim](../../sims/regex-match-lab/index.md){ .md-button }

Now experiment: delete the `-` from the pattern and watch the matches change instantly. Try each preset button, then build your own pattern one character at a time. The chip strip always translates your pattern into plain English — regex stops being magic once you can read it aloud.

## Character Classes

A **character class** is a set of characters in square brackets. It matches any single character in the set.

| Pattern | Matches |
|---------|---------|
| `[aeiou]` | Any lowercase vowel |
| `[A-Z]` | Any uppercase letter |
| `[a-z]` | Any lowercase letter |
| `[0-9]` | Any digit (same as `\d`) |
| `[^aeiou]` | Any character that is NOT a vowel |

## `re.split()` — Split by Pattern

`re.split(pattern, text)` splits text wherever the pattern matches — like `str.split()` but with regex power.

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
initCmLab('-3', `import re

# Split on any punctuation (,  ;  :  or space):
sentence = "apples, bananas; oranges: mangoes kiwis"
fruits = re.split(r"[,;:\\s]+", sentence)
print("Fruits:", fruits)

# Split on multiple whitespace:
text = "hello    world\\t\\tpython"
words = re.split(r"\\s+", text)
print("Words:", words)`);
</script>

## `re.sub()` — Substitute Matches

`re.sub(pattern, replacement, text)` replaces every match with the replacement string.

```python
import re

# Remove all digits from a string:
cleaned = re.sub(r"\d", "", "Hello123World456")
print(cleaned)   # "HelloWorld"

# Replace multiple spaces with one:
normalized = re.sub(r"\s+", " ", "too   many    spaces")
print(normalized)   # "too many spaces"
```

## Anchors: Start and End

`^` matches the start of the string.
`$` matches the end.

```python
# Matches only if string starts with "Hello":
if re.search(r"^Hello", text):
    print("Starts with Hello")

# Matches only if string ends with a digit:
if re.search(r"\d$", text):
    print("Ends with a digit")
```

## Alternation with `|`

`|` means "or" — match either the left or the right pattern.

```python
import re

pattern = r"cat|dog|rabbit"
matches = re.findall(pattern, "I have a cat, a dog, and a rabbit.")
print(matches)   # ['cat', 'dog', 'rabbit']
```

## Groups with Parentheses

Parentheses `()` create a **group** — they let you capture specific parts of a match.

```python
import re

text = "Born: 2010-06-15"
match = re.search(r"(\d{4})-(\d{2})-(\d{2})", text)
if match:
    year, month, day = match.group(1), match.group(2), match.group(3)
    print(f"Year={year}, Month={month}, Day={day}")
```

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
initCmLab('-4', `import re

emails = [
    "alice@example.com",
    "bob.smith@school.edu",
    "not-an-email",
    "carol@work.org"
]

# Simple email pattern: word@word.word
pattern = r"(\\w[\\w.]+)@(\\w+\\.\\w+)"

for email in emails:
    match = re.search(pattern, email)
    if match:
        user, domain = match.group(1), match.group(2)
        print(f"Valid: user={user}, domain={domain}")
    else:
        print(f"Invalid: {email!r}")`);
</script>

## Escaping Special Characters

Some characters have special meaning in regex: `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, `^`, `$`, `|`, `\`.
To match them literally, escape them with a backslash: `\.` matches a literal dot.

```python
# Match a literal dot (not "any character"):
re.findall(r"\d+\.\d+", "3.14 and 2.71 and hello.world")
# → ['3.14', '2.71']
```

## Compiled Regex Patterns

If you use the same pattern many times, **compile** it first for better performance:

```python
import re

digit_pattern = re.compile(r"\d+")   # compile once

for text in many_strings:
    matches = digit_pattern.findall(text)   # use repeatedly
```

## Learning Check

!!! mascot-thinking "Your Turn — Extract Phone Numbers"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below should extract all phone numbers from the text.
    The pattern only matches 3-digit numbers. Fix the pattern to match the full format `NNN-NNN-NNNN`!

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
initCmLab('-5', `import re

text = "Contact us at 800-555-1234 or 415-867-5309. Fax: 888-123-4567."

# Bug: pattern only matches 3 digits!
phones = re.findall(r"\\d{3}", text)
print("Found:", phones)`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Use `re.findall(r"\b\w{5}\b", text)` to find all 5-letter words in a sentence. `\b` is a word boundary.
   **You'll know it worked when** you see only 5-letter words.

2. Use `re.sub(r"\b\d+\b", "NUM", "I have 3 cats and 12 birds")` to replace all numbers with "NUM".
   **You'll know it worked when** you see `"I have NUM cats and NUM birds"`.

3. Validate a password: at least 8 characters, at least one digit. Use `re.search(r"^.{8,}$", pw)` and `re.search(r"\d", pw)`.
   **You'll know it worked when** `"abc12345"` passes and `"abc123"` fails (too short).

4. Use `re.split(r"\s*,\s*", "Alice , Bob,  Carol, Dave")` to split a comma-separated list ignoring extra spaces.
   **You'll know it worked when** you see four clean names.

5. Compile the pattern `r"\d{4}"` and use it to find all 4-digit years in a sentence about history.
   **You'll know it worked when** you see a list of years.

!!! mascot-celebration "Regex Wizard!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Regular expressions are a superpower — one pattern can search through millions of lines of text!
    They appear in web scraping, data validation, log analysis, and almost every text processing task.
    You've just added a serious tool to your programmer toolbox. Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
