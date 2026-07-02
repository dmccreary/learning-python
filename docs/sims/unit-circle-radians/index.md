---
title: Unit Circle Degrees and Radians
description: Drag a point around the unit circle and read the angle in degrees, radians, and multiples of pi, with sin and cos projection lines and a rotating turtle.
image: /sims/unit-circle-radians/unit-circle-radians.png
og:image: /sims/unit-circle-radians/unit-circle-radians.png
twitter:image: /sims/unit-circle-radians/unit-circle-radians.png
social:
   cards: false
quality_score: 93
---

# Unit Circle Degrees and Radians

<iframe src="main.html" height="522" width="100%" scrolling="no"></iframe>

[Run the Unit Circle MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Students meet angles twice in this book, speaking two languages: the turtle
takes degrees, but `math.sin()` demands radians. This sim anchors the
conversion spatially. Drag the orange point around the unit circle and read
the same angle three ways — degrees, radians, and multiples of π — while
blue and green projection bars show `sin` and `cos`, and a turtle at the
center rotates to match the heading.

**Learning objective:** The student will be able to convert between degrees
and radians and locate an angle on the unit circle.

- **Bloom's Taxonomy (2001):** Understand → Apply — *interpret, convert,
  use*
- **Interaction pattern:** direct manipulation (drag the angle point) with
  live dual readouts and landmark snap buttons

## How to Use

1. Drag the orange point to 180° — the radians readout shows π (about
   3.14). A full turn is 2π.
2. Use the snap buttons to visit the landmark angles and note their radian
   values (90° = 0.50π, 45° = 0.25π).
3. Watch the blue **sin** bar: where is it longest? Where is it zero?
4. Watch the turtle at the center — its heading is the angle, connecting
   `t.setheading(90)` to `math.radians(90)`.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/unit-circle-radians/main.html"
        height="522px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 18 (Math Module and Turtle Projects)

### Duration

10 minutes

### Prerequisites

- Turtle headings in degrees (Chapter 5)
- math.sin() and math.cos() (Chapter 18)

### Activities

1. **Landmark tour** (4 min): Students visit each snap angle and record
   degrees, radians, and the π-multiple in a three-column table.
2. **Sin hunt** (3 min): "Drag until sin = 1. Where are you? Drag until
   sin = 0. How many places can you find?"
3. **Convert by hand** (3 min): Students compute radians for 60° using the
   formula, then verify by dragging.

### Assessment

- Student converts 90°, 180°, and 360° to radians without the sim
- Student can point to where sin is maximum and where cos is maximum
- Student can explain why math.sin(90) does not give 1

## References

1. [Python Documentation — math.radians](https://docs.python.org/3/library/math.html#math.radians) — official conversion function
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
