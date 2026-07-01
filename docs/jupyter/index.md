# Sample Jupyter Notebooks

!!! Warning
    This section introduces students to simple Jypyter Notebooks.
    This section has not been extensively tested and depends on a Jupyter Notebook
    library that is not well maintained since 2023.
    To run the lessons, students will need to download Jupyter Notebooks on their local computer
    or run these notebooks within an IDE like VS Code.

## What is a Jupyter Notebook

A **Jupyter Notebook** is a document that mixes together three things you'd normally keep
separate: writing, code, and the results of running that code. Instead of writing a whole
Python program in one file and running it all at once, a notebook is broken into small
boxes called **cells**. You can write a sentence in one cell, a few lines of Python in the
next cell, run just that cell, and immediately see the output appear right underneath it —
a number, some text, a chart, or even a picture.

This "run one small piece at a time" style is called **Literate Programming** — code and
the explanation of that code live side by side, so the notebook reads almost like a lab
report that also happens to be alive and runnable. Because you can re-run a single cell
without re-running the whole program, notebooks are great for experimenting: change one
number, press run, see what changed, without waiting for anything else to happen.

Some things students commonly build in a first notebook:

- A **grade calculator** — type in test scores in one cell, compute the average in the next
- A **step-by-step turtle drawing** — draw one side of a shape per cell so you can see it grow
- A **mini science log** — record measurements in a cell, then plot them as a simple chart

## What is Jupyter Lab

**Jupyter Lab** is the application (it runs in your web browser) that lets you open, edit,
and run notebooks. Think of it like a combination of a text editor and a file browser built
just for notebooks: a panel on the left shows your files and folders, and the main area in
the middle is where your notebook cells live. You can have several notebooks open in tabs at
once, just like tabs in a web browser.

Jupyter Lab is the newer, more powerful cousin of the older **Jupyter Notebook** app — they
both open the same `.ipynb` notebook files, but Jupyter Lab adds extra tools like a file
manager, an image viewer, and the ability to arrange multiple notebooks side by side on
your screen.

## Who Uses Jupyter

Jupyter notebooks are one of the most widely used tools in modern programming, especially
outside of traditional software engineering:

- **Data scientists** use notebooks to explore huge sets of data — for example, cleaning up
  and charting weather data to look for climate trends
- **AI and machine learning developers** use notebooks to train and test models, since they
  can rerun just the "training" cell over and over without rebuilding everything else
- **Scientists and researchers** use notebooks to record experiments and calculations
  together, so anyone reading the notebook can see exactly how a result was produced
- **Teachers and students** use notebooks for interactive lessons, since a notebook can mix
  explanations, runnable examples, and practice problems on the same page

If you've ever seen a spreadsheet used to analyze data, a notebook does something similar
but with the full power of the Python language behind every cell — which is part of why
some people call notebooks the "new Excel."

## How is Jupyter Different from Normal Python?

When you write a normal Python program — the kind you save as a `.py` file — the whole
file runs from top to bottom every time, in one shot. If there's a mistake on line 40, you
often have to wait for the program to reach that line before you find out, and every test
run starts over from scratch.

A Jupyter Notebook works differently:

- **Cells run independently.** You can run cell 3 without re-running cells 1 and 2, as long
  as they've already run once. This makes it fast to test small changes.
- **Variables stick around.** If you create a variable like `score = 95` in one cell, every
  cell after it can still use `score` — the notebook remembers it until you restart.
- **Output stays attached to the code that made it.** Charts, drawings, and printed text
  appear directly below the cell that produced them, so your notebook becomes a saved
  record of what you did and what happened.
- **Order matters — but isn't fixed.** You can run cells out of order while experimenting,
  which is powerful, but it also means a notebook can get confusing if you don't occasionally
  run everything from the top down to make sure it still works correctly.

In short: a `.py` file is a finished program meant to run start-to-finish, while a notebook
is more like a scratchpad for exploring ideas one small step at a time — which is exactly
why it's such a popular way to learn Python.