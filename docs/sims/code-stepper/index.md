---
title: Code Stepper
description: Step through a short Python program one line at a time, watching the interpreter's execution arrow move top to bottom and output appear line by line.
image: /sims/code-stepper/code-stepper.png
og:image: /sims/code-stepper/code-stepper.png
twitter:image: /sims/code-stepper/code-stepper.png
social:
   cards: false
quality_score: 93
---

# Code Stepper

<iframe src="main.html" height="452" width="100%" scrolling="no"></iframe>

[Run the Code Stepper MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The Code Stepper makes the Python interpreter's most fundamental behavior
visible: a program runs **one line at a time, from top to bottom**. Students
click Next Step to move an execution arrow through a short program while the
output console fills in one line per step. Comments and blank lines are
visibly skipped with a plain-language note explaining why.

**Learning objective:** The student will be able to predict which line of a
short Python program executes next and explain that Python runs statements in
order, top to bottom.

- **Bloom's Taxonomy (2001):** Understand — *explain, predict, trace*
- **Interaction pattern:** step-through worked example (no animation)

## How to Use

1. Read the program in the left panel and **predict the output** before
   clicking anything.
2. Click **Next Step** to run one line. Watch the orange arrow and the note
   below the panels.
3. Click **Previous** to step backward, or **Reset** to start over.
4. Use the dropdown to try all three programs. "Comments Everywhere" shows
   that a `print()` inside a comment never runs; "Python Does Math" shows the
   difference between `print(2 + 3)` and `print("2 + 3")`.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/code-stepper/main.html"
        height="452px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), first weeks of Python

### Duration

10 minutes

### Prerequisites

- None — this MicroSim supports Chapter 1 (Welcome to Python) and Chapter 2
  (Python Code Structure)

### Activities

1. **Predict** (3 min): Students read the "Hello Program" and write down what
   they think the output will be, in order.
2. **Step and check** (4 min): Students step through each line and compare
   the console to their prediction. Ask: "Why did the blank line and the
   comment produce no output?"
3. **Trick question** (3 min): Switch to "Comments Everywhere" and ask
   students to predict before stepping: "How many lines will print?" (Answer:
   2 — the commented-out print never runs.)

### Assessment

- Student correctly predicts output order for a new 5-line program
- Student can state that Python skips comment lines and blank lines
- Student can explain why `print("2 + 3")` does not print `5`

## References

1. [Python Tutorial — Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html) — official documentation on how the interpreter executes code
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
