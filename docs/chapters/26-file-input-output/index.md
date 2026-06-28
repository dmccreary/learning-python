---
title: File Input and Output
description: Read and write files using open(), the with statement, file modes, line iteration, and CSV handling
generated_by: claude skill chapter-content-generator
date: 2026-06-28 14:20:00
version: 0.09
---

# File Input and Output

By the end of this lesson you'll be able to:

- Open a file for reading or writing using `open()` and the `with` statement
- Read file contents with `read()`, `readlines()`, and line iteration
- Write and append text to a file with `write()`
- Read and write simple CSV files using Python's `csv` module

Programs become much more useful when they can save data between runs.
With file I/O, your programs can remember high scores, process text files, and share data with other programs.

!!! mascot-welcome "Welcome to Chapter 26!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Today your programs stop forgetting everything when they close!
    Files let your programs save and load data — a superpower that opens up a whole new world of projects.
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## The Command Line and File System Navigation

Files live in a **file system** organized as folders inside folders.
When you run a Python script from the **command line** (the terminal), Python looks for files relative to the **current working directory** — the folder you're running the script from.

You can navigate in the terminal using:

```
cd foldername    # move into a folder
cd ..            # move up one level
ls               # list files (Mac/Linux)
dir              # list files (Windows)
pwd              # print current folder (Mac/Linux)
```

For Skulpt labs in this chapter, file content is simulated in memory. In your own Python environment, these same commands work with real files on disk.

## `open()` and File Modes

`open(filename, mode)` opens a file and returns a **file object**.

The mode tells Python what you want to do with the file:

| Mode | Meaning |
|------|---------|
| `"r"` | Read (default) — file must exist |
| `"w"` | Write — creates file or overwrites existing content |
| `"a"` | Append — adds to the end without deleting existing content |
| `"b"` | Binary — used with `"rb"` or `"wb"` for images and other binary files |

Always close the file when you're done: `file.close()`.
But the better way is to use a `with` statement (explained below).

## The `with` Statement — Safe File Handling

The **`with` statement** (also called a **context manager**) opens a file, runs the indented block, then automatically closes the file when the block ends — even if an error occurs.

```python
with open("greeting.txt", "w") as f:
    f.write("Hello from Python!\n")
# file is automatically closed here
```

Always use `with open(...)` instead of bare `open()`. It prevents the most common file bug: forgetting to close the file.

## Writing to a File

`file.write(text)` writes text to the file. It does **not** add a newline automatically — add `"\n"` yourself:

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import io

# Simulate writing to a file:
buffer = io.StringIO()
buffer.write("Line 1: Hello, Python!\n")
buffer.write("Line 2: I am writing to a file.\n")
buffer.write("Line 3: This is fun!\n")

# Read back what we wrote:
buffer.seek(0)
print(buffer.read())
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

In a real Python environment, this writes to a file on disk:

```python
with open("notes.txt", "w") as f:
    f.write("Line 1: Hello, Python!\n")
    f.write("Line 2: I am writing to a file.\n")
```

## Reading from a File

Three methods read file content:

- `f.read()` — reads the entire file as one big string
- `f.readlines()` — reads all lines into a list (each line includes `\n`)
- `f.readline()` — reads one line at a time

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import io

content = "apple\nbanana\nmango\nkiwi\n"
f = io.StringIO(content)

lines = f.readlines()
print("Number of lines:", len(lines))
for i, line in enumerate(lines, 1):
    print(f"  Line {i}: {line.strip()}")
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

Note the `.strip()` call — it removes the `\n` from the end of each line.

## Iterating over File Lines

The cleanest way to process a file line by line is a simple `for` loop:

```python
with open("data.txt") as f:
    for line in f:
        line = line.strip()
        if line:   # skip empty lines
            print(line)
```

## Text Processing with `strip()` and `lower()`

When processing file content, always clean the text first:

- `.strip()` — removes leading and trailing whitespace (spaces, tabs, newlines)
- `.lower()` — converts to lowercase for case-insensitive comparisons
- `.split()` — splits a line into words

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">import io

# Simulate a file with a word list:
words_text = "  Apple  \nbanana\n  MANGO\nkiwi  \n"
f = io.StringIO(words_text)

clean_words = []
for line in f:
    word = line.strip().lower()
    if word:
        clean_words.append(word)

print("Cleaned words:", clean_words)
print("Sorted:", sorted(clean_words))
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

## Appending to a File

Mode `"a"` adds to the end of a file without erasing existing content:

```python
with open("log.txt", "a") as f:
    f.write("New entry added.\n")
```

Run this multiple times and the log grows — each run adds a new line.

## CSV Files

**CSV** (Comma-Separated Values) is one of the most common file formats for tabular data.
Each row is one line; columns are separated by commas.

```
name,age,score
Alice,14,95
Bob,13,87
Carol,15,91
```

Python's `csv` module reads and writes CSV files cleanly:

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below reads a CSV string and prints each row as a dictionary.
    How do you think Python knows which column is "name" vs "score"?
    Make your guess — then run it!

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">import csv
import io

csv_text = """name,age,score
Alice,14,95
Bob,13,87
Carol,15,91
"""

reader = csv.DictReader(io.StringIO(csv_text))
for row in reader:
    print(f"{row['name']}: age {row['age']}, score {row['score']}")
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

`csv.DictReader` uses the first row (the header) as column names and gives you each row as a dictionary. 

## Learning Check

!!! mascot-thinking "Your Turn — Process the CSV"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below reads student scores from a CSV string.
    Add code to calculate and print the **average** score after the loop.
    You'll need to convert the score strings to integers first!

<div id="skulpt-lab-5" class="skulpt-text-only">
  <div id="editor-container-5">
    <textarea id="code-5" spellcheck="false">import csv, io

csv_text = "name,score\nAlice,95\nBob,87\nCarol,91\nDave,73\n"
reader = csv.DictReader(io.StringIO(csv_text))

total = 0
count = 0
for row in reader:
    score = int(row["score"])
    total += score
    count += 1
    print(f"{row['name']}: {score}")

# Add: calculate and print the average score
</textarea>
    <div id="button-row-5">
      <button id="run-btn-5" onclick="runSkulpt('-5')">&#9654; Run</button>
      <button id="reset-btn-5" onclick="resetSkulpt('-5')">&#8635; Reset</button>
    </div>
    <pre id="output-5"></pre>
  </div>
  <div id="canvas-container-5">
    <div id="turtle-target-5"></div>
  </div>
</div>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change the CSV to add a fourth column `"grade"` with values A/B/C. Print only rows where grade == "A".
   **You'll know it worked when** only Alice's row appears.

2. Use `io.StringIO` to simulate writing a to-do list, then read it back line by line.
   **You'll know it worked when** each to-do item prints on its own line.

3. Count how many words appear in a text string using `split()` and print the total word count.
   **You'll know it worked when** you see the correct number of words.

4. Read lines from a string and filter out any line that contains the word `"skip"`.
   **You'll know it worked when** lines with "skip" don't appear in the output.

5. Write a CSV string with three columns. Use `csv.reader` (instead of `DictReader`) to read rows as plain lists.
   **You'll know it worked when** each row prints as a Python list like `['Alice', '14', '95']`.

!!! mascot-celebration "File I/O Expert!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Your programs can now save and load data from files — including CSV spreadsheets!
    This opens the door to real data processing, log files, configuration storage, and so much more.
    You're doing advanced Python work now. Let's keep coding!
