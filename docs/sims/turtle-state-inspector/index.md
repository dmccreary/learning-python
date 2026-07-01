---
title: Turtle State Inspector
description: Step through turtle commands while a live dashboard shows the turtle's hidden state - x, y position, heading compass, pen up/down, and pen color.
image: /sims/turtle-state-inspector/turtle-state-inspector.png
og:image: /sims/turtle-state-inspector/turtle-state-inspector.png
twitter:image: /sims/turtle-state-inspector/turtle-state-inspector.png
social:
   cards: false
quality_score: 93
---

# Turtle State Inspector

<iframe src="main.html" height="512" width="100%" scrolling="no"></iframe>

[Run the Turtle State Inspector MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Students command the turtle but never see what is inside it. This inspector
makes the turtle's hidden state visible: x and y position, heading (with a
compass dial), pen up/down, and pen color. Each Next Command click executes
one turtle command; every state value that just changed is highlighted, so
`t.right(90)` becomes "the heading went from 0° to 270°" instead of a
memorized incantation.

**Learning objective:** The student will be able to predict the turtle's
position and heading after each command and demonstrate how heading changes
produce shapes.

- **Bloom's Taxonomy (2001):** Understand → Apply — *interpret, predict,
  demonstrate*
- **Interaction pattern:** step-through of a command list with a live state
  dashboard

## How to Use

1. Pick a program from the dropdown (start with **Square**).
2. Before each click, **predict**: where will the turtle be, and which way
   will it face?
3. Click **Next Command** and check the highlighted values in the dashboard.
4. Try **Pen Demo** to see `penup()` and `pendown()` leave a gap, and watch
   the pen color swatch change with `t.pencolor("red")`.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/turtle-state-inspector/main.html"
        height="512px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 5 (Drawing with Turtle Graphics)

### Duration

10-15 minutes

### Prerequisites

- Basic turtle commands: forward(), right(), left() (Chapter 5 opening sections)
- Objects and dot notation (Chapter 4)

### Activities

1. **Predict the square** (5 min): Step through the Square program. Before
   each command, students call out the next heading value (0°, 270°, 180°,
   90°).
2. **Heading math** (4 min): Ask why `t.right(90)` makes the heading go
   *down* by 90. Use the compass dial to verify.
3. **Pen Demo** (4 min): Students predict where the drawn line will have a
   gap before stepping through.

### Assessment

- Student correctly predicts x, y, and heading after any two commands
- Student can explain the difference between penup() movement and pendown() movement
- Student can state the four pieces of state the turtle tracks

## References

1. [Python turtle — Turtle graphics](https://docs.python.org/3/library/turtle.html) — official turtle module documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
