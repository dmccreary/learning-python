---
title: File Input and Output
description: Read and write files using open(), the with statement, file modes, line iteration, and CSV handling
generated_by: claude skill chapter-content-generator
date: 2026-06-28 16:30:00
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

!!! mascot-warning "File I/O Needs a Real Python Environment"
    ![Monty with a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Actual file operations — `open()`, `write()`, `read()` — access your computer's disk.
    The Skulpt browser environment cannot do this, so the interactive labs below **simulate** file behavior using Python strings and lists.
    To run the real `open()`/`with` code shown in the code blocks, use **Thonny**, **VS Code**, or any local Python installation.

## The Command Line and File System Navigation

Files live in a **file system** organized as folders inside folders.
When you run a Python script from the terminal, Python looks for files relative to the **current working directory** — the folder the script lives in.

```
cd foldername    # move into a folder
cd ..            # move up one level
ls               # list files (Mac/Linux)
dir              # list files (Windows)
```

## `open()` and File Modes

`open(filename, mode)` opens a file and returns a **file object**.

The mode tells Python what you want to do with the file:

| Mode | Meaning |
|------|---------|
| `"r"` | Read (default) — file must exist |
| `"w"` | Write — creates file or overwrites existing content |
| `"a"` | Append — adds to the end without deleting existing content |
| `"b"` | Binary — used with `"rb"` or `"wb"` for images and other binary files |

## The `with` Statement — Safe File Handling

The **`with` statement** opens a file, runs the indented block, then automatically closes the file — even if an error occurs.

```python
with open("greeting.txt", "w") as f:
    f.write("Hello from Python!\n")
# file is automatically closed here
```

Always use `with open(...)`. It prevents the most common file bug: forgetting to close the file.

## Writing to a File

`file.write(text)` writes text to the file. It does **not** add a newline automatically — you must add `"\n"` yourself.

**Real Python (Thonny / VS Code):**
```python
with open("notes.txt", "w") as f:
    f.write("Line 1: Hello, Python!\n")
    f.write("Line 2: I am writing to a file.\n")
    f.write("Line 3: This is fun!\n")
```

**Skulpt simulation** — using a list as a virtual "file":

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below uses a list to simulate writing to a file and then reading it back.
    In what order will the lines appear when we read them?
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
initCmLab('', `# Virtual file — a list that stores "written" lines
virtual_file = []

def write_line(text):
    virtual_file.append(text)

# "Write" three lines:
write_line("Line 1: Hello, Python!")
write_line("Line 2: I am writing to a file.")
write_line("Line 3: This is fun!")

# "Read" back what we wrote:
print("File contents:")
for line in virtual_file:
    print(line)

print(f"\\nTotal lines: {len(virtual_file)}")`);
</script>

## Reading from a File

Three methods read file content:

- `f.read()` — reads the entire file as one big string
- `f.readlines()` — reads all lines into a list (each line includes `\n`)
- `f.readline()` — reads one line at a time

**Real Python:**
```python
with open("notes.txt") as f:
    content = f.read()
    print(content)
```

**Skulpt simulation** — splitting a multi-line string:

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
initCmLab('-2', `# Simulate a text file as a multi-line string:
file_content = "apple\\nbanana\\nmango\\nkiwi"

# Simulate readlines() using split("\\n"):
lines = file_content.split("\\n")
print("Number of lines:", len(lines))
print()
for i, line in enumerate(lines, 1):
    print(f"  Line {i}: {line.strip()}")`);
</script>

Note the `.strip()` call — it removes whitespace and `\n` from the ends of lines.

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

- `.strip()` — removes leading and trailing whitespace
- `.lower()` — converts to lowercase for case-insensitive comparisons
- `.split()` — splits a line into words

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
initCmLab('-3', `# Simulate a messy word list file:
words_text = "  Apple  \\nbanana\\n  MANGO\\nkiwi  \\n"

clean_words = []
for line in words_text.split("\\n"):
    word = line.strip().lower()
    if word:                        # skip empty lines
        clean_words.append(word)

print("Cleaned words:", clean_words)
print("Sorted:       ", sorted(clean_words))
print("Longest word: ", max(clean_words, key=len))`);
</script>

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

Python's `csv` module reads and writes CSV files cleanly.
`csv.DictReader` takes any iterable of strings — so we can pass `csv_text.splitlines()` directly, no file object needed.

`splitlines()` splits a multi-line string into a list of lines — exactly what `csv.DictReader` needs.

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
initCmLab('-4', `import csv

csv_text = """name,age,score
Alice,14,95
Bob,13,87
Carol,15,91"""

# splitlines() works in Skulpt — no io module needed
reader = csv.DictReader(csv_text.splitlines())
for row in reader:
    print(f"{row['name']}: age {row['age']}, score {row['score']}")`);
</script>

`csv.DictReader` uses the first row (the header) as column names and gives you each row as a dictionary.

## Learning Check

!!! mascot-thinking "Your Turn — Process the CSV"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below reads student scores from a CSV string.
    Add code to calculate and print the **average** score after the loop.
    You'll need to convert the score strings to integers first!

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
initCmLab('-5', `import csv

csv_text = "name,score\\nAlice,95\\nBob,87\\nCarol,91\\nDave,73"
reader = csv.DictReader(csv_text.splitlines())

total = 0
count = 0
for row in reader:
    score = int(row["score"])
    total += score
    count += 1
    print(f"{row['name']}: {score}")

# Add: calculate and print the average score`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change the CSV to add a fourth column `"grade"` with values A/B/C. Print only rows where grade == `"A"`.
   **You'll know it worked when** only Alice's row appears.

2. Use `virtual_file` (a list) to simulate a to-do list: "write" three tasks, then print each one numbered 1, 2, 3.
   **You'll know it worked when** each task prints on its own numbered line.

3. Count how many words appear in a multi-line text string using `split()` and print the total.
   **You'll know it worked when** you see the correct number of words.

4. Read lines from a string and filter out any line that contains the word `"skip"`.
   **You'll know it worked when** lines containing "skip" don't appear in the output.

5. In Thonny or VS Code, create a file called `fruits.txt`, write five fruit names (one per line), then open it again and print each line with its line number.
   **You'll know it worked when** all five fruits print in a real Python terminal with their numbers.

!!! mascot-celebration "File I/O Expert!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Your programs can now save and load data from files — including CSV spreadsheets!
    This opens the door to real data processing, log files, configuration storage, and so much more.
    For the real thing, open Thonny and practice `open()` on your own computer. Let's keep coding!

[See Annotated References](./references.md)
