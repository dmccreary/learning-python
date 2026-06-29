# Quiz: Data Visualization with matplotlib

Test your understanding of matplotlib, chart types, labels, subplots, and saving figures with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the standard way to import matplotlib for chart creation?

<div class="upper-alpha" markdown>
1. `import matplotlib`
2. `from matplotlib import charts as mc`
3. `import matplotlib.pyplot as plt`
4. `import pyplot from matplotlib`
</div>

??? question "Show Answer"
    The correct answer is **C**. The standard convention is `import matplotlib.pyplot as plt`. The `pyplot` sub-module contains all the charting functions: `plt.plot()`, `plt.show()`, `plt.title()`, etc. The alias `plt` is universally used in the Python data science community — you will see it in every tutorial, textbook, and professional code example.

    **Concept Tested:** Importing matplotlib

---

#### 2. What does `plt.show()` do?

<div class="upper-alpha" markdown>
1. Saves the current chart to a file named `chart.png`
2. Clears all previous chart data and starts a new chart
3. Renders and displays the chart that has been built up with previous `plt.plot()` calls
4. Prints the raw data values used in the chart to the console
</div>

??? question "Show Answer"
    The correct answer is **C**. `plt.show()` renders and displays the chart window. You build up a chart by calling `plt.plot()`, `plt.title()`, `plt.xlabel()`, etc., then call `plt.show()` to actually display it. In Jupyter Notebooks, charts may render automatically without `plt.show()`, but it is always good practice to include it.

    **Concept Tested:** plt.show()

---

#### 3. Which matplotlib function creates a scatter plot?

<div class="upper-alpha" markdown>
1. `plt.dots(x, y)`
2. `plt.points(x, y)`
3. `plt.scatter(x, y)`
4. `plt.spot(x, y)`
</div>

??? question "Show Answer"
    The correct answer is **C**. `plt.scatter(x, y)` creates a scatter plot — individual points plotted without connecting lines. Scatter plots are useful for showing the relationship (correlation) between two variables. Use `plt.plot(x, y)` for line charts (connecting dots). There are no `dots()`, `points()`, or `spot()` functions in matplotlib.

    **Concept Tested:** Scatter Plots

---

#### 4. What does `plt.xlabel("Time (seconds)")` do?

<div class="upper-alpha" markdown>
1. Sets the chart title to "Time (seconds)"
2. Adds a label to the x-axis (horizontal axis)
3. Limits the x-axis range to 0-10 seconds
4. Changes the x-axis tick marks to show seconds
</div>

??? question "Show Answer"
    The correct answer is **B**. `plt.xlabel("text")` adds a text label below the x-axis (the horizontal axis) of the chart. Similarly, `plt.ylabel("text")` labels the y-axis (vertical axis), and `plt.title("text")` sets the title at the top. Always label your axes so readers know what the data represents and what units are being used.

    **Concept Tested:** Axis Labels and Titles

---

#### 5. How do you add multiple lines to one chart?

<div class="upper-alpha" markdown>
1. Call `plt.new_line()` before each `plt.plot()` call
2. Pass all data as a nested list to a single `plt.plot()` call
3. Call `plt.plot()` multiple times before calling `plt.show()`
4. Create multiple figures with `plt.figure()` and overlay them
</div>

??? question "Show Answer"
    The correct answer is **C**. Each call to `plt.plot()` adds another line to the current chart. All lines are combined when you call `plt.show()`. Use the `label=` parameter on each `plt.plot()` call and then call `plt.legend()` to show a legend identifying which line is which.

    **Concept Tested:** Multiple Lines

---

#### 6. What type of chart is best for showing how a continuous value changes over time?

<div class="upper-alpha" markdown>
1. A bar chart
2. A histogram
3. A pie chart
4. A line chart
</div>

??? question "Show Answer"
    The correct answer is **D**. A line chart (created with `plt.plot()`) is ideal for showing continuous data that changes over time — like temperature over a week, a stock price over months, or a physics experiment over seconds. Bar charts compare discrete categories. Histograms show frequency distributions. Pie charts show proportions of a whole.

    **Concept Tested:** Chart Types

---

#### 7. What does `plt.grid(True)` do?

<div class="upper-alpha" markdown>
1. Divides the chart window into a grid of subplots
2. Adds background grid lines to the chart to make values easier to read
3. Snaps data points to the nearest grid intersection
4. Displays the chart coordinates of every data point
</div>

??? question "Show Answer"
    The correct answer is **B**. `plt.grid(True)` adds light background grid lines to the chart, making it easier to read approximate values from the chart visually. Call it after your `plt.plot()` calls but before `plt.show()`. The grid does not affect the data or calculations — it is purely a visual aid for the reader.

    **Concept Tested:** Grid Lines

---

#### 8. What does `plt.savefig("chart.png")` do?

<div class="upper-alpha" markdown>
1. Loads a previously saved chart from `chart.png`
2. Takes a screenshot of the entire screen and saves it
3. Saves the current chart to a file named `chart.png` instead of displaying it in a window
4. Converts the chart to a PDF format automatically
</div>

??? question "Show Answer"
    The correct answer is **C**. `plt.savefig("filename.png")` saves the chart to an image file. Call it before `plt.show()` (or instead of it). You can save as PNG, PDF, SVG, or other formats by changing the file extension. This is essential for including charts in reports, websites, or sharing results without requiring the recipient to have matplotlib installed.

    **Concept Tested:** Saving Figures

---

#### 9. What does a histogram chart show?

<div class="upper-alpha" markdown>
1. The change in one variable over time
2. The correlation between two variables plotted as individual points
3. The frequency distribution of a dataset — how often values fall within each range
4. A comparison of totals across discrete categories
</div>

??? question "Show Answer"
    The correct answer is **C**. A histogram (created with `plt.hist()`) shows how frequently values fall within ranges (called bins). For example, a histogram of student scores shows how many students scored 60-70, 70-80, 80-90, etc. It reveals the shape of the data distribution — whether it is symmetric, skewed, or has outliers. Bar charts compare distinct categories; histograms show continuous value distributions.

    **Concept Tested:** Histograms

---

#### 10. What does `plt.subplots(1, 2)` create?

<div class="upper-alpha" markdown>
1. One chart with two y-axes for comparing different scales
2. A figure with 1 row and 2 columns of chart panels side by side
3. Two separate chart windows displayed on screen at once
4. A single chart with two color themes applied simultaneously
</div>

??? question "Show Answer"
    The correct answer is **B**. `fig, axes = plt.subplots(rows, cols)` creates a figure with a grid of chart panels (subplots). `plt.subplots(1, 2)` creates one row and two columns — two charts side by side. You then plot to each one with `axes[0].plot(...)` and `axes[1].plot(...)`. This is how you compare related datasets in a single figure.

    **Concept Tested:** Subplots

---
