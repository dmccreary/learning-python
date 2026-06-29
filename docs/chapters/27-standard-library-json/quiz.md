# Quiz: Standard Library and JSON

Test your understanding of Python modules, JSON data, the sys and os modules, and the collections module with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is a Python module?

<div class="upper-alpha" markdown>
1. A built-in function like `print()` or `len()`
2. A `.py` file containing functions, variables, and classes that can be imported and reused
3. A special comment that tells Python to load extra features
4. A folder containing multiple Python programs
</div>

??? question "Show Answer"
    The correct answer is **B**. A module is simply a `.py` file. Any Python file can be a module — you write functions and variables in it, then use `import module_name` in another file to access them. Python also ships with many pre-built modules (the standard library) like `math`, `random`, `os`, `sys`, and `json`.

    **Concept Tested:** Custom Modules

---

#### 2. What does the `if __name__ == "__main__":` guard do?

<div class="upper-alpha" markdown>
1. It makes the program run faster by skipping imports
2. It checks whether the module has been imported before
3. It ensures the indented block runs only when the file is executed directly, not when it is imported
4. It defines the entry point for a web server
</div>

??? question "Show Answer"
    The correct answer is **C**. When Python runs a file directly, `__name__` equals `"__main__"`. When a file is imported as a module, `__name__` equals the module's filename. The guard `if __name__ == "__main__":` is used to put test code or script logic that should only run when you execute the file directly — not when another program imports it.

    **Concept Tested:** __name__ Guard

---

#### 3. What does `sys.argv` contain?

<div class="upper-alpha" markdown>
1. The list of all modules currently imported into the program
2. The command-line arguments passed to the Python script when it was run
3. A list of all functions defined in the program
4. The Python interpreter's version and platform information
</div>

??? question "Show Answer"
    The correct answer is **B**. `sys.argv` is a list of strings representing the command-line arguments. `sys.argv[0]` is always the script name itself. If you run `python my_script.py hello 42`, then `sys.argv` equals `["my_script.py", "hello", "42"]`. This allows programs to accept configuration from the command line without using `input()`.

    **Concept Tested:** sys Module

---

#### 4. What does `os.path.exists("data.txt")` return?

<div class="upper-alpha" markdown>
1. The full path to `data.txt` on your computer
2. `True` if the file or folder exists, `False` if it does not
3. The file size in bytes
4. The date and time when the file was last modified
</div>

??? question "Show Answer"
    The correct answer is **B**. `os.path.exists(path)` checks whether a file or directory exists at the given path and returns `True` or `False`. This is useful before trying to open a file — you can check first to avoid a `FileNotFoundError`. The `os.path` sub-module has many other useful functions like `os.path.join()` and `os.path.basename()`.

    **Concept Tested:** os Module

---

#### 5. What is JSON?

<div class="upper-alpha" markdown>
1. A Python-specific binary format for saving program data
2. A text format for storing structured data that looks like Python dictionaries and lists
3. A type of encrypted file used for storing passwords securely
4. A database language similar to SQL
</div>

??? question "Show Answer"
    The correct answer is **B**. JSON (JavaScript Object Notation) is a lightweight text format for structured data. It uses curly braces `{}` for objects (like Python dictionaries), square brackets `[]` for arrays (like Python lists), and `true`/`false`/`null` for booleans and None. JSON is the most common format for web APIs and configuration files, and Python's `json` module makes it easy to read and write.

    **Concept Tested:** JSON Format

---

#### 6. What does `json.loads('{"x": 1}')` return?

<div class="upper-alpha" markdown>
1. The string `'{"x": 1}'` unchanged
2. A Python dictionary `{"x": 1}`
3. A Python list `[{"x": 1}]`
4. An error because JSON requires double quotes around keys
</div>

??? question "Show Answer"
    The correct answer is **B**. `json.loads(text)` parses a JSON string and returns the equivalent Python object. `{"x": 1}` in JSON becomes a Python `dict`. The function name "loads" stands for "load string." JSON uses double quotes for strings, which is valid Python when the string is inside single quotes. The result is a native Python dictionary you can use like any other.

    **Concept Tested:** json.loads()

---

#### 7. What does `json.dumps({"name": "Alice", "age": 14})` do?

<div class="upper-alpha" markdown>
1. Saves the dictionary directly to a file named `Alice.json`
2. Prints the dictionary to the console in JSON format
3. Converts the Python dictionary to a JSON-formatted string
4. Loads the dictionary from a JSON file
</div>

??? question "Show Answer"
    The correct answer is **C**. `json.dumps(obj)` converts a Python object (dict, list, number, string, bool, or None) into a JSON-formatted string. The name "dumps" stands for "dump string." To save JSON to a file, use `json.dump(obj, file_object)` instead. `json.dumps()` is useful when you need a JSON string in memory, for example to send over a network.

    **Concept Tested:** json.dumps()

---

#### 8. What Python type does JSON `true` map to?

<div class="upper-alpha" markdown>
1. The string `"true"`
2. The integer `1`
3. The Python boolean `True`
4. The Python value `None`
</div>

??? question "Show Answer"
    The correct answer is **C**. JSON uses lowercase `true` and `false` for booleans; Python uses capitalized `True` and `False`. When `json.loads()` encounters `true` in JSON, it converts it to Python's `True`. Similarly, JSON `false` becomes Python `False`, and JSON `null` becomes Python `None`.

    **Concept Tested:** JSON Type Mapping

---

#### 9. What does `os.path.join("folder", "file.txt")` produce?

<div class="upper-alpha" markdown>
1. `"folder file.txt"` (with a space)
2. `"folder/file.txt"` on Mac/Linux or `"folder\file.txt"` on Windows, using the correct separator for the operating system
3. Always `"folder/file.txt"` regardless of operating system
4. An error because you cannot join paths without a leading slash
</div>

??? question "Show Answer"
    The correct answer is **B**. `os.path.join()` builds a file path using the correct separator for the current operating system — forward slash `/` on Mac and Linux, backslash `\` on Windows. Never manually concatenate path strings with `"/"` because your code will break on Windows. Always use `os.path.join()` for portable, cross-platform path construction.

    **Concept Tested:** os.path

---

#### 10. What is the difference between `json.loads()`/`json.dumps()` and `json.load()`/`json.dump()`?

<div class="upper-alpha" markdown>
1. `loads`/`dumps` are faster; `load`/`dump` produce better formatted output
2. `loads`/`dumps` work with strings; `load`/`dump` work with file objects
3. `loads` reads one line; `load` reads the entire file
4. They are identical — the extra `s` is just an alias
</div>

??? question "Show Answer"
    The correct answer is **B**. `json.loads(text)` parses from a string; `json.dumps(obj)` serializes to a string. `json.load(file)` reads JSON directly from an open file object; `json.dump(obj, file)` writes JSON directly to an open file object. Use the `s` versions (loads/dumps) for in-memory strings; use the no-`s` versions (load/dump) when working with files.

    **Concept Tested:** json Module Functions

---
