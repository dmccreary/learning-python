# Adding Custom Python Labs to the Textbook

This guide explains how to add new interactive Python labs to the textbook,
what tools are available to generate them, and how to choose the right
execution environment for your students.

---

## Two Skills for Generating Labs

This textbook uses Claude Code skills to generate consistent, well-structured
lab pages.  Two skills are available:

### The Skulpt Lab Skill

The `chapter-content-generator` skill (and the broader textbook content pipeline)
generates labs using **Skulpt** — a Python interpreter compiled to JavaScript
that runs entirely inside the student's web browser.

- No installation required on student machines
- Works on Chromebooks, tablets, and locked-down school computers
- Labs are part of the published textbook and can be shared with any teacher
  who has the URL
- Turtle graphics renders inline next to the code editor
- Fully offline once the page is loaded (no server, no account)

### The Docker Python Lab Skill

The `docker-python-lab` skill generates labs that run real Python code inside
an isolated Docker container on the teacher's or student's local machine.

To invoke it, type:

```
/docker-python-lab
```

Claude will generate the HTML lab block, check that the shared CSS and
JavaScript files exist, and verify that `mkdocs.yml` is wired up correctly.
The student clicks **Run** in the browser, the code travels to a local service
on port 5001, runs in a fresh container, and the output comes back in about
300 milliseconds (after the first cold-start run).

---

## Strongly Recommended: Keep Things Simple with Skulpt

Before reaching for Docker or a local Python install, consider the advantages
of staying with Skulpt for chapters 1–18:

**Skulpt labs travel with the textbook.**
A Skulpt lab is just a `<textarea>` and some HTML in a Markdown file.  It lives
in the GitHub repository alongside the lesson text.  When you share a link to
a page, the lab comes with it — no setup, no port numbers, no "make sure the
service is running."

**Every student has the same environment.**
There is no version mismatch, no missing library, no "it works on my machine"
moment.  Skulpt always runs Python 3 with the standard turtle module, identically
on every device.

**Skulpt removes the largest barrier to entry.**
For students aged 10–14 who are trying Python for the first time, the cognitive
load of installing software, managing environments, and troubleshooting PATH
issues is enormous.  Skulpt lets them write and run code in the same session
they learn what a variable is.

**Skulpt labs can be contributed back.**
Because they are plain Markdown files, any teacher can submit a pull request
to add a new Skulpt lab to the shared textbook repository.  A Docker lab
requires the receiving teacher to also run the local service, which breaks
the "open the link and teach" workflow.

**When Skulpt is not enough**, the nine options below describe progressively
more powerful (and more complex) alternatives.

---

## Nine Options for Running Python

Use this table to match the right execution environment to your teaching context:

| # | Option | Best for | Complexity |
|---|--------|----------|------------|
| 1 | **Skulpt (in-browser)** | All beginners, shared textbook labs | None |
| 2 | **Local Python install** | Students with their own computers | Low |
| 3 | **Python virtual environment (venv)** | Intermediate projects with dependencies | Medium |
| 4 | **Conda virtual environment** | Data science, ML, scientific computing | Medium |
| 5 | **Docker container** | Reproducible environments, server-side code | High |
| 6 | **Thonny IDE** | New students moving to local development | Low |
| 7 | **VS Code** | Students ready for professional tooling | Medium |
| 8 | **Jupyter Notebook / Lab** | Data science, visualisation, narrative code | Medium |
| 9 | **Another IDE** | Any other editor or environment | Varies |

---

### Option 1 — Skulpt (In-Browser Python)

**What it is:** Python compiled to JavaScript, running entirely in the browser
with no server or install.

**Use when:** Teaching chapters 1–18 of this textbook, running a coding club
on Chromebooks or school-managed devices, sharing labs with other teachers,
or demonstrating Python to a group where you cannot control every machine.

**How to add a lab:** Use the `chapter-content-generator` skill or write the
Skulpt HTML block directly.  See the existing labs in `docs/chapters/` for
the exact format.

**Limitations:** No file I/O, no third-party packages (`numpy`, `pandas`,
`requests`, etc.), no `input()` from the terminal.  Turtle graphics and basic
math/string/list operations work perfectly.

---

### Option 2 — Local Python Install (System Python)

**What it is:** Python installed directly on the student's operating system,
run from a terminal with `python3 script.py`.

**Use when:** Students have personal laptops and are ready to move beyond
Skulpt.  See `docs/intermediate/20-installing-local-python.md` for the
step-by-step installation guide already in this textbook.

**How to add a lab:** Write a static code block (```` ```python ````) in the
Markdown page.  Students copy the code into a local file and run it in their
terminal.

**Limitations:** Python version, PATH configuration, and installed packages
vary by machine.  Expect to spend 10–20 minutes troubleshooting per student
on setup day.  The [XKCD "Python environments"](https://www.explainxkcd.com/wiki/index.php/1987:_Python_Environment) comic on the installing-Python
page is not entirely a joke.

---

### Option 3 — Python Virtual Environment (`venv`)

**What it is:** A lightweight, isolated Python environment created with
`python3 -m venv` that keeps each project's packages separate.

**Use when:** A project needs specific package versions (e.g., `matplotlib
3.8`) without affecting the system Python or other projects.

**Quick start:**
```sh
python3 -m venv .venv
source .venv/bin/activate        # macOS / Linux
.venv\Scripts\activate           # Windows
pip install matplotlib pandas
```

**Use when:** Intermediate students beginning to install third-party libraries.
Teach `venv` before `pip install` so students develop the habit of isolating
dependencies from the start.

**Limitations:** Students must remember to activate the environment in every
new terminal session.  Forgetting is the #1 source of "it worked yesterday"
bugs.

---

### Option 4 — Conda Virtual Environment (Preferred for Data Science)

**What it is:** Anaconda or Miniconda's environment manager, which handles
both Python versions and compiled binary packages (NumPy, SciPy, PyTorch, etc.)
in a single tool.

**Use when:** Teaching data science, machine learning, image processing, or any
topic that requires scientific computing libraries.  Conda resolves binary
dependencies that `pip` sometimes cannot.

**Quick start:**
```sh
conda create -n coderdojo python=3.11
conda activate coderdojo
conda install numpy matplotlib scikit-learn
```

**Why it is preferred for data science:** `pip install numpy` can fail on
Windows or Apple Silicon if the C compiler toolchain is missing.  `conda install
numpy` always provides a pre-compiled binary that just works.

**Limitations:** Miniconda is a ~60 MB download.  The `conda` command is slower
than `pip`.  Students sometimes confuse `conda activate` with system Python.

---

### Option 5 — Docker Container

**What it is:** Python running inside an isolated container via
`scripts/run-python-docker.sh`.  Students edit code in the browser and click
**Run**; the code executes in a fresh container and the output returns in ~300 ms
(after the first cold-start run of ~5 seconds).

**Use when:** You want a reproducible, sandboxed environment for intermediate
or advanced students without asking them to install Python or manage environments.
Also useful for topics where you want to demonstrate that the same code runs
identically for every student regardless of their OS.

**How to add a lab:** Use the `/docker-python-lab` skill.  The skill generates
the HTML lab block, creates the shared CSS and JavaScript files if they do not
exist, and checks `mkdocs.yml`.

**Limitations:** Requires Docker Desktop installed and running on the local
machine (or the teacher's machine if projecting).  The service (`run-python-docker.sh`)
must be running in a separate terminal while students use the page.  No turtle
graphics.  No `input()`.  Packages beyond the Python standard library require
a custom Docker image.

**Sharability:** Docker labs in the published textbook only work for readers who
have the service running locally — they will see "Cannot connect to the Python
Docker service" otherwise.  This is the primary reason Skulpt is preferred for
shared textbook content.

---

### Option 6 — Thonny IDE (Preferred for New Students Moving to Local Python)

**What it is:** A free, beginner-friendly Python IDE designed specifically for
learning.  It has a built-in Python interpreter, a step-through debugger that
highlights each line as it runs, and a variable inspector that shows every
variable's current value.

**Download:** [thonny.org](https://thonny.org) — works on Windows, macOS,
and Linux, including Raspberry Pi OS (pre-installed).

**Use when:** Students are ready to leave Skulpt and write Python on their own
computer for the first time.  Thonny's debugger is unmatched for building
mental models of how loops and functions work.

**Why it is preferred over VS Code for beginners:** Thonny installs Python
automatically alongside the IDE — no separate Python download, no PATH setup,
no terminal.  A student can go from zero to running their first script in
under five minutes.

**Limitations:** Thonny is intentionally simple.  It does not have Git
integration, extensions, or the language-server features that professional
developers rely on.  Students who outgrow it will migrate naturally to VS Code.

---

### Option 7 — VS Code

**What it is:** Microsoft's free, professional-grade code editor with a rich
Python extension, integrated terminal, Git support, and Copilot integration.

**Download:** [code.visualstudio.com](https://code.visualstudio.com)

**Use when:** Students have completed the beginning Python curriculum and are
ready to work on multi-file projects, use Git, or prepare for a coding internship
or competition.

**Setup checklist:**
1. Install VS Code
2. Install the **Python** extension (Microsoft)
3. Select the correct Python interpreter (`Ctrl+Shift+P` → "Python: Select Interpreter")
4. Open the integrated terminal and run `python --version` to verify

**Limitations:** More initial setup than Thonny.  Students unfamiliar with
the terminal may struggle with interpreter selection and virtual environment
activation inside VS Code.

---

### Option 8 — Jupyter Notebook / Lab

**What it is:** A browser-based interactive computing environment where code,
output, visualisations, and explanatory text live together in a single
*notebook* (`.ipynb`) file.  Jupyter Notebook is the classic single-document
interface; Jupyter Lab is the modern multi-panel successor.

**Install:**
```sh
pip install jupyterlab        # or: conda install jupyterlab
jupyter lab                   # opens in your default browser
```

**Use when:**
- Teaching data science, statistics, or machine learning — the inline charts
  and cell-by-cell execution make it easy to explore data step by step.
- Students need to submit work that includes both code *and* written
  explanations of results (common in science classes).
- Demonstrating NumPy, Pandas, Matplotlib, or Scikit-learn, where seeing the
  output immediately below each cell accelerates understanding.
- Running the advanced chapters of this textbook (MNIST digit prediction,
  stock ticker analysis) — see `docs/jupyter/` for the Jupyter-specific labs
  already included.

**Why it deserves its own option:** Jupyter is fundamentally different from a
traditional IDE.  Code runs in *cells*, not as a single script from top to
bottom.  Students can re-run individual cells, keep intermediate results in
memory, and mix `print()` output with `matplotlib` plots in a single view.
That interactivity is a superpower for data exploration but can confuse
students who are still learning that programs run line by line.

**Google Colab variant:** If students do not want to install anything, Google
Colab (`colab.research.google.com`) provides a cloud-hosted Jupyter environment
with free GPU access — ideal for the ML chapters.  Requires a Google account
and an internet connection.

**Limitations:** Notebooks are not great for teaching program structure —
students can run cells out of order and end up with hidden state bugs that are
hard to reproduce.  Not suitable for turtle graphics.  Not a good first
environment for absolute beginners.

---

### Option 9 — Another IDE

**What it is:** Any other editor — PyCharm, Spyder, Mu Editor, Replit, etc.

**Use when:** A specific tool is already in use at your school, or a student
has a strong preference.  The Python code in this textbook is standard and
runs in any environment.

**Notes for specific tools:**

- **PyCharm** — powerful professional IDE with excellent debugger and refactoring
  tools; Community Edition is free.  Better suited to experienced students than
  to beginners.
- **Spyder** — a scientific Python IDE bundled with Anaconda; similar to MATLAB's
  layout with a variable explorer panel.  Good for data science students already
  using Conda.
- **Mu Editor** — similar simplicity to Thonny; designed for MicroPython and
  Raspberry Pi projects.  Good for hardware/electronics electives.
- **Replit** — browser-based like Skulpt but requires an account and internet
  connection.  Useful when students need a persistent file system or more
  packages than Skulpt supports, but do not have admin rights on school machines.

---

## Decision Guide

```
Does the lab need turtle graphics or run in the shared textbook?
  └─ YES → Use Skulpt (Option 1)

Does the lab need third-party packages (numpy, matplotlib, requests)?
  ├─ Data science / ML / visualisation → Use Jupyter + Conda (Options 8 + 4)
  └─ General packages only             → Use venv (Option 3)

Is this a student's first time running Python locally?
  └─ YES → Use Thonny (Option 6)

Do you need a fully reproducible sandbox with no student setup?
  └─ YES → Use Docker (Option 5)

Is the student writing narrative code (code + explanation + charts)?
  └─ YES → Use Jupyter (Option 8)

Is the student ready for professional tools / multi-file projects?
  └─ YES → Use VS Code (Option 7)
```

---

## Summary

For the vast majority of lessons in this textbook — especially chapters 1–18 —
**Skulpt is the right choice**.  It requires nothing from students, travels with
every link you share, and keeps the focus on learning Python rather than on
configuring tools.

Reserve the more powerful options for the intermediate and advanced sections,
where the topic itself (file I/O, data science, APIs) genuinely requires a
local Python environment.
