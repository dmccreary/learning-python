---
title: Python Development Tools
description: Explore real Python environments — Thonny, VS Code, Jupyter, pip, virtual environments, the REPL, and Raspberry Pi
generated_by: claude skill chapter-content-generator
date: 2026-06-28 14:40:00
version: 0.09
---

# Python Development Tools

By the end of this lesson you'll be able to:

- Describe the key Python development environments and when to use each one
- Install Python locally and run scripts from the terminal
- Use the **Python REPL** (interactive shell) for quick experiments
- Install packages with `pip` and understand **virtual environments**

Skulpt and Trinket are great for learning — you don't need to install anything.
But real Python projects use richer tools. This chapter is your map to the Python ecosystem.

!!! mascot-welcome "Welcome to Chapter 28!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    You're ready to step off the Skulpt training wheels and into the real Python world!
    There are many great tools to choose from — let's find the right one for you.
    Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## Python 2 vs Python 3

You may occasionally see Python code written for **Python 2** — an older version that reached its end of life in 2020.
Python 3 is what everyone uses today.

Key differences you might encounter in old Python 2 code:

| Feature | Python 2 | Python 3 |
|---------|----------|----------|
| Print | `print "hello"` | `print("hello")` |
| Integer division | `5/2 = 2` | `5/2 = 2.5` |
| String type | ASCII by default | Unicode by default |

If you ever see code that uses `print` without parentheses, it was written for Python 2.
Avoid it — install Python 3.

## Development Environments

A **development environment** (also called an IDE — Integrated Development Environment) is where you write, run, and debug Python code.
Here's a comparison of the most popular options for beginners and beyond.

### Thonny — Best for Beginners

**Thonny** (thonny.org) is designed specifically for learning Python.
It has a simple interface and a built-in debugger that shows you exactly how variables change as each line runs.

**Best for:** absolute beginners, ages 10–15, learning control flow and debugging

### Repl.it — Browser-Based Collaboration

**Repl.it** (replit.com) lets you write and run Python in a browser with zero installation.
It supports multiple files and collaborative editing.

**Best for:** sharing projects, working from any computer, coding club use

### VS Code — Professional Choice

**VS Code** (Visual Studio Code) is one of the most popular code editors in the world.
With the Python extension installed, it provides autocomplete, debugging, a built-in terminal, Git integration, and hundreds of extensions.

**Best for:** serious projects, multiple languages, professional workflows

### Spyder — Scientific Python

**Spyder** is designed for data science and scientific computing.
It has a variable explorer that shows your NumPy arrays and DataFrames visually.

**Best for:** data analysis, scientific computing, users coming from MATLAB

### Jupyter Notebooks — Interactive Data Science

A **Jupyter Notebook** is a document that mixes text (Markdown), code cells you can run individually, and output (charts, tables, results) all in one file.

```python
# In a Jupyter Notebook, each "cell" is a runnable block:
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]
plt.plot(x, y)
plt.title("Squares")
plt.show()
```

**Best for:** data analysis, machine learning, reports that mix code and explanation

### Google Colab — Free Cloud Jupyter

**Google Colab** (colab.research.google.com) is a free cloud-hosted Jupyter Notebook environment.
It comes with NumPy, pandas, TensorFlow, and GPU access pre-installed — no setup needed.

**Best for:** machine learning, free GPU access, sharing notebooks

### JupyterLab

**JupyterLab** is the next-generation Jupyter interface — a full browser-based IDE with file browser, terminals, notebooks, and text editors in one.

## Installing Python Locally

To run Python on your own computer:

1. Visit [python.org](https://python.org) and download the latest Python 3 installer for your operating system.
2. Run the installer — on Windows, check **"Add Python to PATH"** before clicking Install.
3. Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux).
4. Type `python3 --version` to verify the installation.

## Running Scripts from the Terminal

Once Python is installed, you can run any `.py` file from the terminal:

```bash
python3 my_script.py
```

On Windows, you may use `python` instead of `python3`.

## The Python REPL Shell

The **REPL** (Read-Eval-Print Loop) is Python's interactive shell.
Type `python3` (or just `python`) in the terminal to start it.
Then type any Python expression and press Enter — Python evaluates it immediately.

```
>>> 2 + 2
4
>>> name = "Monty"
>>> print(f"Hello, {name}")
Hello, Monty
>>> [x**2 for x in range(5)]
[0, 1, 4, 9, 16]
```

The REPL is perfect for quick experiments: testing a function, checking a formula, exploring a module.

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false"># This Skulpt window works like a mini-REPL!
# Try typing expressions and running them.

import math

# Quick experiments:
print(math.factorial(10))
print(math.gcd(48, 36))
print(2 ** 32)
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

## `pip` — The Package Installer

Python's standard library is large, but thousands more packages are available at PyPI (Python Package Index).
`pip` is the tool that installs them.

To install a package, run this in your terminal:

```bash
pip install requests
pip install matplotlib
pip install pillow
```

To see what's installed: `pip list`

To install a specific version: `pip install requests==2.31.0`

## Virtual Environments

A **virtual environment** is an isolated Python installation for a specific project.
It lets each project have its own set of packages without interfering with other projects.

To create and use a virtual environment:

```bash
# Create:
python3 -m venv myenv

# Activate (Mac/Linux):
source myenv/bin/activate

# Activate (Windows):
myenv\Scripts\activate

# Install packages (only inside this environment):
pip install flask

# Deactivate when done:
deactivate
```

**Why bother?** Imagine two projects — one needs `requests 2.28`, another needs `requests 2.31`.
Without virtual environments, installing one breaks the other. With them, each project is isolated.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below prints information about the Python environment.
    What Python version do you think is running in this Skulpt environment?
    Make your guess — then run it!

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import sys

print("Python version:", sys.version)
print("Platform:", sys.platform)
print("Default encoding:", sys.getdefaultencoding())
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

## The Conda Package Manager

**Conda** (from Anaconda) is an alternative package manager popular in data science.
It manages both Python packages and non-Python dependencies (like C libraries needed by NumPy).

```bash
conda create -n myenv python=3.11
conda activate myenv
conda install numpy pandas matplotlib
```

Anaconda (the full distribution) includes Python, conda, Jupyter, and 200+ data science packages pre-installed.

## Raspberry Pi Python Platform

The **Raspberry Pi** is a tiny, affordable computer (about the size of a credit card) that runs full Python.
It's popular for hardware projects — controlling LEDs, reading sensors, building robots.

Python comes pre-installed on Raspberry Pi OS.
Libraries like `RPi.GPIO` let Python programs control physical pins.

```python
import RPi.GPIO as GPIO
GPIO.setup(17, GPIO.OUT)   # set pin 17 as output
GPIO.output(17, True)      # turn on an LED
```

## Choosing the Right Tool

| Situation | Recommended tool |
|-----------|-----------------|
| Just learning Python | Skulpt (this course) or Thonny |
| Sharing code online | Repl.it or Google Colab |
| Professional projects | VS Code |
| Data science / ML | Jupyter Notebook or JupyterLab |
| Hardware projects | Raspberry Pi + Thonny |
| Scientific computing | Spyder + Anaconda |

!!! mascot-tip "Start Simple"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    You don't need to pick the "perfect" tool right away.
    Thonny is a great first step after Skulpt — it's free, runs offline, and shows you exactly what Python is doing.
    Once you outgrow Thonny, VS Code is the natural next step for most programmers.

## Learning Check

!!! mascot-thinking "Your Turn — Match the Tool"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Read each scenario below and decide which tool fits best.
    Write your answers — there's no code to run, just reasoning to do!

Use this Skulpt window to record your answers:

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false"># Scenario → Best tool
# 1. A student wants to learn Python without installing anything on the school computer.
#    Answer:

# 2. A data scientist needs to share analysis with charts and explanation in one document.
#    Answer:

# 3. A developer is building a Flask web app with multiple Python files and a database.
#    Answer:

# 4. A maker wants to control LEDs and sensors with Python on cheap hardware.
#    Answer:

print("Scenarios answered above!")
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

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. In the sys info lab, also print `sys.executable` to see the full path to the Python interpreter.
   **You'll know it worked when** you see a path ending in `python` or `python3`.

2. Use `sys.getsizeof([])` and `sys.getsizeof([1,2,3])` to compare list memory sizes.
   **You'll know it worked when** you see that the list with 3 items takes more bytes.

3. Try `sys.maxsize` — the maximum integer Python can store efficiently.
   **You'll know it worked when** you see a very large number (9,223,372,036,854,775,807 on 64-bit systems).

4. Research: look up what `pip show numpy` does (in a real terminal). Write a comment explaining it.
   **You'll know it worked when** your comment describes the package version, author, and install location.

5. Write a comment block listing three packages from PyPI you'd like to explore next and why.
   **You'll know it worked when** you have a mini "wish list" for your Python learning journey.

!!! mascot-celebration "Python World Explorer!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You now have a map of the entire Python ecosystem — from beginner tools to professional environments!
    Choosing the right tool for the job is a real developer skill.
    When you're ready, pick one environment and start building something real. Let's keep coding!
