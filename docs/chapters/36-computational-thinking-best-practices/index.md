---
title: Computational Thinking and Best Practices
description: Master the habits of expert programmers — decomposition, abstraction, DRY, meaningful names, refactoring, test-driven thinking, and pair programming
generated_by: claude skill chapter-content-generator
date: 2026-06-28 16:00:00
version: 0.09
---

# Computational Thinking and Best Practices

By the end of this lesson you'll be able to:

- Apply the four pillars of **computational thinking**: decomposition, pattern recognition, abstraction, algorithm design
- Follow **DRY** (Don't Repeat Yourself) and **modularity** principles
- Write **meaningful names** and useful comments
- Describe **test-driven thinking** and how to debug systematically
- Understand **version control** and **pair programming**

Writing code that works is only half the job. Expert programmers write code that works *and* is easy to read, change, and share with others. This chapter collects the habits that separate good programmers from great ones.

!!! mascot-welcome "Welcome to Chapter 36!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    You've learned Python's tools — now it's time to learn how to *think* like a programmer.
    The habits in this chapter will make every future project smoother and more enjoyable.
    Let's level up! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## Computational Thinking — Four Pillars

**Computational thinking** is a problem-solving framework that lets you tackle any complex problem with a computer.
It has four key skills:

| Pillar | Meaning | Example |
|--------|---------|---------|
| **Decomposition** | Break a big problem into smaller ones | "Build a quiz app" → "Store questions", "Ask user", "Check answer", "Track score" |
| **Pattern Recognition** | Spot similarities and repetition | All quiz questions have: text, choices, correct answer |
| **Abstraction** | Focus on essential details; hide unnecessary ones | A function `ask_question(q)` hides the input/output details |
| **Algorithm Design** | Write a clear, step-by-step solution | "While questions remain: ask one, record answer, check result" |

These four skills aren't Python-specific — they apply to any programming language, any field, any problem.

## Decomposition in Practice

A common beginner mistake is trying to write an entire program at once.
**Decomposition** means breaking the problem down first, then coding one piece at a time.

```
Problem: Build a word guessing game
│
├── Read a secret word
├── Show blanks (one _ per letter)
├── Accept one guess per turn
│   ├── Validate: is it a single letter?
│   └── Check: is the letter in the word?
├── Reveal matched letters
├── Track wrong guesses (max 6)
└── Announce win or loss
```

Each leaf in this tree is small enough to code in a single function.

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">def make_display(secret, guessed):
    return " ".join(ch if ch in guessed else "_" for ch in secret)

def is_solved(secret, guessed):
    return all(ch in guessed for ch in secret)

# Simulate one round (no real input):
secret  = "python"
guessed = set("p_t")
wrong   = ["x", "z"]

print("Word:", make_display(secret, guessed))
print("Wrong guesses:", wrong)
print("Solved?", is_solved(secret, guessed))

guessed = set("python")
print("After all letters:", make_display(secret, guessed))
print("Solved?", is_solved(secret, guessed))
</textarea>
    <div id="button-row">
      <button id="run-btn" onclick="runSkulpt()">&#9654; Run</button>
      <button id="reset-btn" onclick="resetSkulpt()">&#8635; Reset</button>
    </div>
    <pre id="output"></pre>
  </div>
  <div id="canvas-container">
    <div id="turtle-target"></div>
  </div>
</div>

## DRY — Don't Repeat Yourself

The **DRY principle** says: every piece of knowledge should have exactly one representation in your code.

If the same logic appears in two places, a bug fix or change must be made twice — and it's easy to update one and forget the other.

**Wet code (repeating yourself):**
```python
score1 = max(0, min(100, score1))
score2 = max(0, min(100, score2))
score3 = max(0, min(100, score3))
```

**Dry code (one function does the job):**
```python
def clamp(value):
    return max(0, min(100, value))

score1 = clamp(score1)
score2 = clamp(score2)
score3 = clamp(score3)
```

Even better — apply it to a list:
```python
scores = [clamp(s) for s in scores]
```

## Modularity

**Modularity** means organizing code into independent, reusable units (functions, classes, modules).
A well-structured program has many small functions, each doing one thing clearly.

**Signs your function is NOT modular:**
- It's longer than 20-30 lines
- Its name contains "and" (e.g., `validate_and_save`)
- It does I/O and computation together

**Refactor into smaller pieces:**

```python
# Before: one long function
def process(data):
    cleaned = [x.strip().lower() for x in data if x.strip()]
    unique  = list(set(cleaned))
    sorted_ = sorted(unique)
    return sorted_

# After: three named steps
def clean(data):
    return [x.strip().lower() for x in data if x.strip()]

def deduplicate(data):
    return list(set(data))

def process(data):
    return sorted(deduplicate(clean(data)))
```

## Meaningful Names

Variable and function names are your most powerful documentation tool.
A reader who can't run the code should still understand it from the names alone.

| Bad | Better | Why |
|-----|--------|-----|
| `x` | `elapsed_seconds` | Describes the meaning |
| `lst` | `student_names` | Describes the content |
| `do_thing()` | `calculate_average()` | Describes what it returns |
| `check(x)` | `is_valid_email(text)` | Describes what it checks |
| `n` | `num_retries` | No mental translation needed |

**Rule for booleans:** name them as a yes/no question — `is_logged_in`, `has_errors`, `can_retry`.

## When to Comment

Comments explain the **why**, not the **what**. Well-named code already tells you what — comments tell you why that was the right choice.

```python
# BAD: repeats what the code says
i = i + 1   # increment i by 1

# GOOD: explains the non-obvious reason
# Start from 1 because the first row is always a header
for row in rows[1:]:
    process(row)
```

Write no comment if the code is self-explanatory.
Write a comment when a future reader (including future-you) would wonder "why did they do it that way?"

!!! mascot-tip "The Rule of Three"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    If you write the same logic once — keep it. Twice — add a comment noting the pattern. Three times — pull it into a function.
    This is called the "rule of three" and it stops you from over-abstracting before you're sure the pattern is real.

<div id="skulpt-lab-2" class="skulkt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, value))

def letter_grade(score):
    clamped = clamp(score)
    if clamped >= 90: return "A"
    if clamped >= 80: return "B"
    if clamped >= 70: return "C"
    if clamped >= 60: return "D"
    return "F"

# Test with values that need clamping:
test_scores = [110, 95, 82, 73, 65, -5, 45]
for s in test_scores:
    print(f"  {s:4d} → clamped={clamp(s):3d}, grade={letter_grade(s)}")
</textarea>
    <div id="button-row-2">
      <button id="run-btn-2" onclick="runSkulpt('-2')">&#9654; Run</button>
      <button id="reset-btn-2" onclick="resetSkulpt('-2')">&#8635; Reset</button>
    </div>
    <pre id="output-2"></pre>
  </div>
  <div id="canvas-container-2">
    <div id="turtle-target-2"></div>
  </div>
</div>

## Pseudocode and Algorithm Design

**Pseudocode** is a step-by-step description of an algorithm written in plain English, not a real programming language.
It lets you plan before you code — and catches problems before you've spent time writing syntax.

```
ALGORITHM: Find the most frequent word

1. Split the text into a list of words
2. Convert each word to lowercase
3. Create an empty frequency dictionary
4. For each word in the list:
   a. If the word is already in the dictionary, add 1
   b. Otherwise, set its count to 1
5. Find the key with the highest value
6. Return that key and its count
```

Only then do you translate to Python. The algorithm is clear — the coding is just transcription.

## Test-Driven Thinking

Professional developers write **tests** before (or alongside) code.
Even if you're not writing formal test functions, think in terms of tests:

1. **What should the function return for a normal input?**
2. **What should it do with empty input?**
3. **What should it do with invalid input?**
4. **What's the edge case?** (Empty list, zero, negative number, very long string)

```python
def word_frequency(text):
    words = text.lower().split()
    freq  = {}
    for w in words:
        freq[w] = freq.get(w, 0) + 1
    return freq

# Mental test cases:
print(word_frequency(""))               # {} — empty input
print(word_frequency("cat cat dog"))    # {'cat': 2, 'dog': 1}
print(word_frequency("A a A"))          # {'a': 3} — case insensitive
```

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">def word_frequency(text):
    words = text.lower().split()
    freq  = {}
    for w in words:
        freq[w] = freq.get(w, 0) + 1
    return freq

def most_common(freq):
    if not freq:
        return None, 0
    word = max(freq, key=freq.get)
    return word, freq[word]

text = "the quick brown fox jumps over the lazy dog the fox"
freq = word_frequency(text)
print("Frequencies:", freq)
word, count = most_common(freq)
print(f"Most common: '{word}' ({count} times)")
</textarea>
    <div id="button-row-3">
      <button id="run-btn-3" onclick="runSkulpt('-3')">&#9654; Run</button>
      <button id="reset-btn-3" onclick="resetSkulpt('-3')">&#8635; Reset</button>
    </div>
    <pre id="output-3"></pre>
  </div>
  <div id="canvas-container-3">
    <div id="turtle-target-3"></div>
  </div>
</div>

## Debugging Strategies

When code doesn't work, resist the urge to change things randomly until it "magically" works.
Use a systematic approach:

1. **Read the traceback** — the bottom line is the error; work up to find where it came from
2. **Print the state** — add `print()` statements just before the error to see what the variables actually contain
3. **Simplify** — replace complex expressions with simpler ones until the bug disappears
4. **Rubber duck debugging** — explain your code out loud, line by line, to an imaginary listener; the bug often reveals itself
5. **Search the error message** — copy the error text into a search engine; someone has seen it before

## Refactoring

**Refactoring** means improving code structure without changing what it does.
It's normal to write messy code first, then refactor once the program works.

Common refactoring moves:
- Extract a repeated block into a named function
- Rename a variable to be more descriptive
- Replace a long chain of `if/elif` with a dictionary lookup
- Split a long function into two smaller ones

## Version Control with Git

**Git** is the standard tool for tracking changes to code over time.
Even working alone, git lets you:
- Go back to any previous version of your project
- See exactly what changed between versions
- Work on risky experiments without fear of breaking working code

The basic workflow:

```bash
git init              # start tracking a project
git add myfile.py     # stage a changed file
git commit -m "Add score tracker"  # save a snapshot
git log               # see history of commits
```

## Pair Programming

**Pair programming** means two people work on one computer — one person types (the "driver"), one person reviews and suggests (the "navigator").

Research shows that pair programming:
- Catches bugs before they're committed
- Spreads knowledge between teammates
- Produces cleaner code on the first try

Even practicing pair programming with a classmate for 20 minutes builds better habits.

## Learning Check

!!! mascot-thinking "Your Turn — Refactor This Code"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below works but violates DRY — the grade calculation logic is repeated three times.
    Refactor it into a single `letter_grade(score)` function and use it in all three places!

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false"># Wet code — grade logic repeated three times:
score1 = 87
if score1 >= 90: grade1 = "A"
elif score1 >= 80: grade1 = "B"
elif score1 >= 70: grade1 = "C"
else: grade1 = "F"

score2 = 73
if score2 >= 90: grade2 = "A"
elif score2 >= 80: grade2 = "B"
elif score2 >= 70: grade2 = "C"
else: grade2 = "F"

score3 = 95
if score3 >= 90: grade3 = "A"
elif score3 >= 80: grade3 = "B"
elif score3 >= 70: grade3 = "C"
else: grade3 = "F"

print(f"Score 1: {score1} → {grade1}")
print(f"Score 2: {score2} → {grade2}")
print(f"Score 3: {score3} → {grade3}")
</textarea>
    <div id="button-row-4">
      <button id="run-btn-4" onclick="runSkulpt('-4')">&#9654; Run</button>
      <button id="reset-btn-4" onclick="resetSkulpt('-4')">&#8635; Reset</button>
    </div>
    <pre id="output-4"></pre>
  </div>
  <div id="canvas-container-4">
    <div id="turtle-target-4"></div>
  </div>
</div>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Apply the four computational thinking pillars to "Write a program that sorts a list of names alphabetically." Write out the decomposition as comments before coding.
   **You'll know it worked when** you have clear sub-steps before any Python code.

2. Refactor the `word_frequency` + `most_common` functions into a single `analyze_text(text)` function that returns a dict with both `"frequencies"` and `"top_word"` keys.
   **You'll know it worked when** `analyze_text("cat cat dog")["top_word"]` returns `"cat"`.

3. Write a `safe_divide(a, b)` function that returns `a / b` normally, but returns `None` (not an error) when `b == 0`. Write at least 3 test cases.
   **You'll know it worked when** all three test cases print the expected result.

4. Take any function you wrote in an earlier chapter and rename all variables to be more descriptive. Does it feel more readable?
   **You'll know it worked when** the function reads almost like English without comments.

5. Find a partner and try pair programming: one person types the solution to experiment 3 while the other reads it aloud and suggests improvements.
   **You'll know it worked when** you discover at least one improvement through the discussion.

!!! mascot-celebration "Expert Programmer Mindset Unlocked!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You now think like a professional programmer — with decomposition, abstraction, DRY code, meaningful names, and systematic debugging in your toolkit.
    Two chapters remain: machine learning and neural networks. The frontier of computer science is right ahead! Let's keep coding!
