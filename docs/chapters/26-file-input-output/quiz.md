# Quiz: File Input and Output

Test your understanding of file modes, the with statement, reading and writing files, and CSV handling with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does the `with` statement do when used with `open()`?

<div class="upper-alpha" markdown>
1. It makes the file read-only so it cannot be accidentally changed
2. It opens the file, runs the indented block, and automatically closes the file when done
3. It creates a backup copy of the file before opening it
4. It downloads the file from the internet to your computer
</div>

??? question "Show Answer"
    The correct answer is **B**. The `with` statement is a context manager. When you write `with open("file.txt") as f:`, Python opens the file, executes the indented block, and closes the file automatically when the block ends — even if an error occurs inside the block. This prevents the common bug of forgetting to close the file.

    **Concept Tested:** with Statement

---

#### 2. What file mode should you use to add content to the end of an existing file without deleting what is already there?

<div class="upper-alpha" markdown>
1. `"r"` (read mode)
2. `"w"` (write mode)
3. `"a"` (append mode)
4. `"e"` (extend mode)
</div>

??? question "Show Answer"
    The correct answer is **C**. Opening a file with `"a"` (append mode) adds new content to the end of the existing file. Mode `"w"` (write mode) creates a new file or overwrites the entire existing content. Mode `"r"` (read mode) only allows reading — you cannot write to it. There is no `"e"` mode in Python.

    **Concept Tested:** File Modes

---

#### 3. What does `open("data.txt", "w")` do if `data.txt` already exists?

<div class="upper-alpha" markdown>
1. It raises a `FileExistsError` because the file already exists
2. It opens the file for reading without changing anything
3. It creates a new file with a different name like `data(1).txt`
4. It creates a new empty file, overwriting and deleting all existing content
</div>

??? question "Show Answer"
    The correct answer is **D**. Write mode (`"w"`) overwrites the file completely. If the file already exists, its previous contents are erased and replaced. If the file does not exist, Python creates it. This is why it is important to use `"a"` (append mode) if you want to preserve the existing content.

    **Concept Tested:** File Modes

---

#### 4. Why must you add `"\n"` when writing lines to a file with `f.write()`?

<div class="upper-alpha" markdown>
1. Because `write()` automatically removes all line endings from text
2. Because `write()` does not add a newline character automatically — you must add it yourself
3. Because `"\n"` tells Python to flush the file to disk immediately
4. Because files on Windows require double newlines (`"\n\n"`) between lines
</div>

??? question "Show Answer"
    The correct answer is **B**. Unlike `print()`, which automatically adds a newline at the end of each call, `f.write()` writes exactly what you give it — nothing more. If you want each piece of text on its own line in the file, you must include `"\n"` at the end: `f.write("Hello\n")`. Without it, all your text runs together on one line.

    **Concept Tested:** Writing to a File

---

#### 5. What does `f.read()` return?

<div class="upper-alpha" markdown>
1. A list where each item is one line from the file
2. The entire file contents as a single string
3. Only the first line of the file
4. The number of characters in the file
</div>

??? question "Show Answer"
    The correct answer is **B**. `f.read()` reads the entire file and returns all of its contents as one big string, including all newline characters `"\n"`. To get a list with each line as a separate item, use `f.readlines()`. To process one line at a time efficiently (especially for large files), iterate directly over the file object with `for line in f:`.

    **Concept Tested:** Reading Files

---

#### 6. What is the difference between `f.read()` and `f.readlines()`?

<div class="upper-alpha" markdown>
1. `read()` reads text files; `readlines()` reads binary files
2. `read()` returns a single string with all contents; `readlines()` returns a list where each item is one line
3. `read()` is faster; `readlines()` is more accurate
4. `read()` requires mode `"r"`; `readlines()` works with any mode
</div>

??? question "Show Answer"
    The correct answer is **B**. `f.read()` returns the entire file as one string. `f.readlines()` reads the file and returns a list where each element is one line from the file (with the `"\n"` character still attached). Both require a file opened in read mode. Use `readlines()` when you want to process each line separately without manually splitting.

    **Concept Tested:** readlines()

---

#### 7. What does `"r"` (read mode) do if the file does not exist?

<div class="upper-alpha" markdown>
1. Python creates a new empty file with that name
2. Python returns an empty string from `f.read()`
3. Python raises a `FileNotFoundError`
4. Python asks the user to type the file contents from the keyboard
</div>

??? question "Show Answer"
    The correct answer is **C**. Read mode (`"r"`) requires the file to already exist. If the file cannot be found, Python raises `FileNotFoundError`. You can handle this gracefully with a `try/except FileNotFoundError:` block. Write mode (`"w"`) and append mode (`"a"`) both create the file if it does not exist.

    **Concept Tested:** File Modes

---

#### 8. What Python module do you import to read and write CSV files?

<div class="upper-alpha" markdown>
1. `import files`
2. `import csv`
3. `import spreadsheet`
4. `import tabular`
</div>

??? question "Show Answer"
    The correct answer is **B**. Python's standard library includes the `csv` module for reading and writing CSV (Comma-Separated Values) files. It handles tricky cases like commas inside quoted fields automatically. Use `csv.reader(f)` to read rows and `csv.writer(f)` to write rows. There is no `files`, `spreadsheet`, or `tabular` module in the standard library.

    **Concept Tested:** CSV Module

---

#### 9. What does each iteration give you when you loop over a file object with `for line in f:`?

<div class="upper-alpha" markdown>
1. One character at a time from the file
2. One word at a time separated by spaces
3. One line at a time as a string, including the trailing `"\n"`
4. A tuple of `(line_number, line_text)` for each line
</div>

??? question "Show Answer"
    The correct answer is **C**. Iterating directly over a file object with `for line in f:` gives you one line per iteration as a string. The line includes the trailing newline character `"\n"` at the end (except possibly the last line). Use `line.strip()` to remove leading/trailing whitespace including `"\n"`. This is memory-efficient for large files because Python reads one line at a time instead of loading everything at once.

    **Concept Tested:** Line Iteration

---

#### 10. What is the current working directory?

<div class="upper-alpha" markdown>
1. The folder where Python is installed on your computer
2. The folder that is currently active — the folder Python looks in when you specify a filename without a full path
3. The last folder you visited before running Python
4. The folder where all Python standard library files are stored
</div>

??? question "Show Answer"
    The correct answer is **B**. The current working directory (CWD) is the folder Python uses as the starting point when you give a filename without a full path. If your script is in `~/projects/` and you write `open("data.txt")`, Python looks for `data.txt` in `~/projects/`. You can check the CWD with `import os; print(os.getcwd())` and navigate in the terminal with `cd`.

    **Concept Tested:** Current Working Directory

---
