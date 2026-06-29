# Quiz: Python Development Tools

Test your understanding of Python IDEs, the REPL, pip, virtual environments, and the Python ecosystem with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. Which Python version should you use for new projects?

<div class="upper-alpha" markdown>
1. Python 2, because it is more stable and widely used
2. Python 1, the original version
3. Python 3, the current version that everyone uses today
4. The version that came with your operating system, whatever it is
</div>

??? question "Show Answer"
    The correct answer is **C**. Python 3 is the current standard. Python 2 reached end of life in 2020 and is no longer updated or supported. If you see Python 2 code, you can recognize it by `print "hello"` (without parentheses). Always install Python 3 and run your programs with `python3`.

    **Concept Tested:** Python 2 vs Python 3

---

#### 2. What is Thonny best suited for?

<div class="upper-alpha" markdown>
1. Professional web development and deploying servers
2. Machine learning with GPU acceleration
3. Beginners and students learning Python, especially for stepping through code with the debugger
4. Data science and scientific computing with pandas and NumPy
</div>

??? question "Show Answer"
    The correct answer is **C**. Thonny (thonny.org) is designed specifically for learning Python. Its built-in debugger shows exactly how variables change as each line executes, making it ideal for beginners ages 10-15 who are learning control flow and debugging. VS Code and PyCharm are better for professional projects; Spyder is better for data science.

    **Concept Tested:** Thonny IDE

---

#### 3. What does REPL stand for, and what does it do?

<div class="upper-alpha" markdown>
1. Run-Execute-Print-Loop — a loop that runs a full Python script and then repeats
2. Read-Eval-Print Loop — an interactive shell where you type Python expressions and see results immediately
3. Recursive-Execution-Protocol-Language — Python's internal execution engine
4. Remote-Execution-Python-Layer — a cloud service that runs Python scripts online
</div>

??? question "Show Answer"
    The correct answer is **B**. The REPL (Read-Eval-Print Loop) is Python's interactive shell. Start it by typing `python3` in your terminal. You type an expression, Python reads it, evaluates it, prints the result, and loops back for more. It is perfect for quick experiments, testing a formula, or exploring a module without writing a full script.

    **Concept Tested:** Python REPL

---

#### 4. What is `pip` used for?

<div class="upper-alpha" markdown>
1. Running Python scripts from the terminal
2. Installing packages from PyPI (Python Package Index) that are not in the standard library
3. Converting Python 2 code to Python 3 automatically
4. Creating graphical user interfaces in Python
</div>

??? question "Show Answer"
    The correct answer is **B**. `pip` is Python's package installer. Run `pip install package_name` in your terminal to download and install any package from PyPI (pypi.org), which hosts hundreds of thousands of open-source Python packages. For example, `pip install matplotlib` installs the matplotlib library for creating charts.

    **Concept Tested:** pip

---

#### 5. What is a virtual environment in Python?

<div class="upper-alpha" markdown>
1. A cloud computer where Python runs remotely
2. An isolated Python installation with its own packages, keeping different projects from conflicting with each other
3. A graphical interface that shows Python variables visually
4. A special mode that makes Python run faster by using the GPU
</div>

??? question "Show Answer"
    The correct answer is **B**. A virtual environment is an isolated copy of Python with its own installed packages. This prevents conflicts between projects — Project A might need `requests==2.28` and Project B might need `requests==2.31`. With virtual environments, each project uses exactly the packages it needs without affecting others. Create one with `python3 -m venv venv` and activate it with `source venv/bin/activate` (Mac/Linux).

    **Concept Tested:** Virtual Environments

---

#### 6. What is a Jupyter Notebook best used for?

<div class="upper-alpha" markdown>
1. Writing large object-oriented programs with many classes
2. Building web servers and REST APIs
3. Data analysis and reports that mix executable code cells with explanatory text and output like charts
4. Developing mobile apps for iOS and Android
</div>

??? question "Show Answer"
    The correct answer is **C**. A Jupyter Notebook is a document format that combines executable code cells, Markdown text, and rich output (charts, tables, images) in a single file. This makes it ideal for data analysis, machine learning experiments, and shareable reports where you want to explain the code alongside the results. Google Colab provides free cloud-hosted Jupyter Notebooks.

    **Concept Tested:** Jupyter Notebooks

---

#### 7. How do you run a Python script named `my_script.py` from the terminal?

<div class="upper-alpha" markdown>
1. `open my_script.py`
2. `python3 my_script.py`
3. `run my_script.py`
4. `execute my_script.py`
</div>

??? question "Show Answer"
    The correct answer is **B**. To run a Python script from the terminal (Command Prompt on Windows, Terminal on Mac/Linux), type `python3 my_script.py`. On Windows you may use `python` instead of `python3`. Make sure you are in the same directory as the script, or provide the full path. The script runs from top to bottom and exits when finished.

    **Concept Tested:** Running Scripts

---

#### 8. What is Google Colab best known for providing?

<div class="upper-alpha" markdown>
1. A free, cloud-based Jupyter Notebook environment with pre-installed data science libraries and free GPU access
2. A beginner-friendly IDE with a built-in debugger for school use
3. A professional IDE with Git integration and autocomplete for team projects
4. A package manager for installing Python libraries offline
</div>

??? question "Show Answer"
    The correct answer is **A**. Google Colab (colab.research.google.com) is a free, cloud-hosted Jupyter Notebook service. It comes pre-installed with NumPy, pandas, TensorFlow, and other data science libraries, and provides free GPU access for machine learning. You only need a Google account — no installation required.

    **Concept Tested:** Google Colab

---

#### 9. How can you recognize code written for Python 2 (rather than Python 3)?

<div class="upper-alpha" markdown>
1. It uses `import` statements instead of `from` statements
2. It uses `print "hello"` without parentheses, and `5/2` gives `2` instead of `2.5`
3. It requires `end=""` at the end of every `print()` call
4. It uses curly braces `{}` for code blocks instead of indentation
</div>

??? question "Show Answer"
    The correct answer is **B**. Python 2 code uses `print "hello"` (a statement, not a function call) and integer division where `5/2 = 2`. Python 3 requires parentheses: `print("hello")` and returns a float: `5/2 = 2.5`. Python 2 reached end of life in 2020, so avoid using it. If you find old Python 2 code, use the `2to3` tool to help convert it.

    **Concept Tested:** Python 2 vs Python 3

---

#### 10. What command checks what version of Python is installed?

<div class="upper-alpha" markdown>
1. `pip version`
2. `import python`
3. `python3 --version`
4. `check python`
</div>

??? question "Show Answer"
    The correct answer is **C**. Running `python3 --version` (or `python --version` on Windows) in the terminal prints the installed Python version, such as `Python 3.11.4`. After installing Python from python.org, this is the standard way to verify the installation was successful. On some systems you may also use `python3 -V` (capital V) as a shortcut.

    **Concept Tested:** Installing Python

---
