---
title: Data Visualization with matplotlib
description: Create line charts, scatter plots, bar charts, histograms, and multi-panel figures using matplotlib — Python's most popular charting library
generated_by: claude skill chapter-content-generator
date: 2026-06-28 15:20:00
version: 0.09
---

# Data Visualization with matplotlib

By the end of this lesson you'll be able to:

- Import and use **matplotlib.pyplot** to create charts in Python
- Add titles, axis labels, legends, and grids to any chart
- Create **line plots**, **scatter plots**, **bar charts**, and **histograms**
- Plot **multiple lines** on one chart and arrange **subplots** side by side
- Save a chart to an image file with `savefig()`

A chart can communicate in one second what a table of numbers takes minutes to understand. `matplotlib` is the tool Python programmers reach for first.

!!! mascot-welcome "Welcome to Chapter 32!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Data visualization turns raw numbers into stories you can see.
    Scientists, journalists, business analysts, and game developers all use charts built with matplotlib.
    Let's start plotting! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Importing matplotlib

matplotlib is a large library — you typically import just its `pyplot` sub-module, aliased as `plt`:

```python
import matplotlib.pyplot as plt
```

Everything you need — `plt.plot()`, `plt.show()`, `plt.title()` — lives in `pyplot`.

!!! mascot-tip "matplotlib in Skulpt"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    The Skulpt labs below use a text-based simulation to show the data that matplotlib would chart.
    In a real Python environment (Thonny, VS Code, Jupyter), `plt.show()` opens an interactive window.
    The patterns you learn here transfer directly — same function names, same parameters.

## Your First Line Chart

`plt.plot(x_values, y_values)` draws a line connecting the given data points.
`plt.show()` renders the chart.

The simplest pattern is:

```python
import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4, 5]
y = [0, 1, 4, 9, 16, 25]

plt.plot(x, y)
plt.title("Squares")
plt.xlabel("Number")
plt.ylabel("Square")
plt.show()
```

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
initCmLab('', `import matplotlib
import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4, 5]
y = [0, 1, 4, 9, 16, 25]

plt.plot(x, y)
plt.title("Squares")
plt.xlabel("Number")
plt.ylabel("Square")
plt.show()

print("Chart data:")
for i, j in zip(x, y):
    print(f"  x={i}, y={j}")`);
</script>

## Adding Labels, Titles, and a Grid

These functions dress up any chart:

| Function | Effect |
|----------|--------|
| `plt.title("text")` | Chart title |
| `plt.xlabel("text")` | Label the x-axis |
| `plt.ylabel("text")` | Label the y-axis |
| `plt.legend()` | Show a legend for labeled series |
| `plt.grid(True)` | Add a background grid |
| `plt.xlim(lo, hi)` | Set x-axis range |
| `plt.ylim(lo, hi)` | Set y-axis range |

Call them after `plt.plot()` but before `plt.show()`.

## Plotting Multiple Lines

Calling `plt.plot()` multiple times before `plt.show()` puts all lines on the same chart.
Use the `label=` parameter and then call `plt.legend()` so readers know which line is which.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below plots three different mathematical series on one chart.
    Which one do you think will grow fastest: x, x squared, or x cubed (scaled down)?
    Make your guess — then run it!

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
initCmLab('-2', `import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4, 5]

y_linear = [v for v in x]
y_square = [v**2 for v in x]
y_cube   = [v**3 / 10 for v in x]   # scaled so all fit on one chart

plt.plot(x, y_linear, label="x (linear)")
plt.plot(x, y_square, label="x² (quadratic)")
plt.plot(x, y_cube,   label="x³/10 (cubic)")

plt.title("Growth Comparison")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True)
plt.show()

print("Values at x=5:")
print(f"  linear : {y_linear[-1]}")
print(f"  quadratic: {y_square[-1]}")
print(f"  cubic/10 : {y_cube[-1]:.1f}")`);
</script>

## Scatter Plots

A **scatter plot** shows individual data points without connecting them with lines.
Use `plt.scatter(x, y)` instead of `plt.plot()`.

Scatter plots are ideal for showing relationships between two variables — for example, height vs. weight, or study hours vs. test score.

```python
import matplotlib.pyplot as plt

study_hours = [1, 2, 3, 4, 5, 6, 7, 8]
test_scores = [45, 55, 60, 70, 75, 80, 88, 95]

plt.scatter(study_hours, test_scores, color="blue", s=80)
plt.title("Study Hours vs. Test Score")
plt.xlabel("Hours Studied")
plt.ylabel("Score")
plt.grid(True)
plt.show()
```

The `s=` parameter controls dot size (default is 20).
The `color=` parameter accepts color names (`"red"`, `"blue"`, `"green"`) or hex codes (`"#FF6600"`).

## Bar Charts

`plt.bar(x_labels, heights)` creates a **vertical bar chart**.
Bar charts are best for comparing discrete categories — scores by student, revenue by month, etc.

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
initCmLab('-3', `import matplotlib.pyplot as plt

subjects = ["Math", "Science", "English", "History", "Art"]
scores   = [88, 92, 76, 85, 95]
colors   = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974"]

plt.bar(subjects, scores, color=colors)
plt.title("Student Scores by Subject")
plt.xlabel("Subject")
plt.ylabel("Score")
plt.ylim(0, 100)
plt.grid(axis="y")
plt.show()

print("Scores:")
for subj, score in zip(subjects, scores):
    print(f"  {subj}: {score}")
print(f"Average: {sum(scores)/len(scores):.1f}")`);
</script>

`plt.grid(axis="y")` adds grid lines only on the y-axis — a common style for bar charts.

## Histograms

A **histogram** shows the distribution of a set of numbers — how many values fall in each range (called a "bin").

`plt.hist(data, bins=10)` automatically divides the data into `bins` equal-width groups and draws bars showing the count in each group.

```python
import matplotlib.pyplot as plt

# 50 random-ish heights (cm):
heights = [162, 170, 168, 175, 180, 165, 172, 178, 160, 185,
           163, 171, 177, 182, 169, 174, 179, 166, 173, 188,
           160, 171, 164, 176, 183, 168, 175, 180, 162, 170,
           165, 172, 178, 184, 167, 174, 179, 163, 171, 187,
           161, 170, 166, 175, 181, 169, 173, 178, 164, 172]

plt.hist(heights, bins=8, color="steelblue", edgecolor="white")
plt.title("Height Distribution")
plt.xlabel("Height (cm)")
plt.ylabel("Number of People")
plt.show()
```

## Saving Figures with `savefig()`

Instead of `plt.show()`, call `plt.savefig("filename.png")` to save the chart to a file.

```python
plt.plot(x, y)
plt.title("My Chart")
plt.savefig("chart.png", dpi=150)   # 150 dots-per-inch, good for screen
```

Supported formats include `.png`, `.jpg`, `.pdf`, and `.svg`.
Call `savefig()` before `plt.show()` — `show()` resets the figure.

## Subplots — Multiple Charts Side by Side

`plt.subplots(rows, cols)` creates a grid of charts (called **axes**).
It returns the `fig` (the whole canvas) and an array of `ax` objects — one per chart position.

```python
fig, axes = plt.subplots(1, 2, figsize=(10, 4))

axes[0].plot(x, y_square)
axes[0].set_title("Quadratic")

axes[1].bar(subjects, scores)
axes[1].set_title("Scores")

plt.tight_layout()   # prevent charts from overlapping
plt.show()
```

Notice: when using subplots, use `ax.set_title()` (not `plt.title()`) and `ax.set_xlabel()` (not `plt.xlabel()`).

## Learning Check

!!! mascot-thinking "Your Turn — Fix the Bar Chart"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below tries to make a bar chart but is missing the axis labels and title.
    Add `plt.title()`, `plt.xlabel()`, and `plt.ylabel()` to complete it!

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
initCmLab('-4', `import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales  = [120, 145, 130, 165, 182, 200]

plt.bar(months, sales, color="coral")
# Add title, xlabel, and ylabel here:

plt.show()

print("Sales data:")
for month, amount in zip(months, sales):
    print(f"  {month}: {amount} units")`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change the line chart colors by adding the `color=` parameter: `plt.plot(x, y, color="red")`.
   **You'll know it worked when** the line appears in the color you chose.

2. Add a `marker="o"` parameter to `plt.plot()` to show dots at each data point.
   **You'll know it worked when** circles appear at every x, y coordinate.

3. Create a horizontal bar chart using `plt.barh(subjects, scores)` instead of `plt.bar()`.
   **You'll know it worked when** bars grow horizontally instead of vertically.

4. Generate a list of 100 numbers using a list comprehension with `(i % 10)` and plot a histogram with `bins=10`.
   **You'll know it worked when** you see a flat distribution — every bin has about the same height.

5. Use `plt.subplots(2, 1)` to stack two charts vertically: a line chart on top and a bar chart below.
   **You'll know it worked when** both charts appear in the same figure, stacked.

!!! mascot-celebration "Data Visualizer!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've turned raw numbers into charts that tell stories!
    Line plots, scatter plots, bar charts, histograms, and subplots — these are the bread and butter of every data scientist.
    The next chapter takes you into NumPy, where you'll learn to crunch large amounts of numerical data at lightning speed. Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
