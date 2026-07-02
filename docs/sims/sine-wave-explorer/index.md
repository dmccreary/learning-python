---
title: Sine Wave Explorer
description: Drag amplitude, frequency, and phase sliders and watch y = A*sin(f*x + p) re-plot instantly, with a live equation and a plain sin(x) reference curve.
image: /sims/sine-wave-explorer/sine-wave-explorer.png
og:image: /sims/sine-wave-explorer/sine-wave-explorer.png
twitter:image: /sims/sine-wave-explorer/sine-wave-explorer.png
social:
   cards: false
quality_score: 95
---

# Sine Wave Explorer

<iframe src="main.html" height="492" width="100%" scrolling="no"></iframe>

[Run the Sine Wave Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

The chapter's sine-wave turtle project works, but every parameter change
requires an edit-and-rerun cycle. This explorer closes the feedback loop:
amplitude, frequency, and phase sliders re-plot `y = A × sin(f·x + p)`
instantly, the substituted equation updates live, and a dotted plain
`sin(x)` reference curve makes every change measurable against the same
baseline.

**Learning objective:** The student will be able to demonstrate how
amplitude, frequency, and phase each change the shape of a sine wave.

- **Bloom's Taxonomy (2001):** Apply — *demonstrate, use, solve*
- **Interaction pattern:** parameter sliders with immediate re-plot
- **Library:** Plotly.js (mathematical function plot with hover tooltips)

## How to Use

1. Predict which slider makes the wave taller, then test each slider one at
   a time.
2. Check **show plain sin(x)** and slide the phase — your wave slides left
   past the dotted reference.
3. Set frequency to 2: how many complete waves now fit between 0 and 4π?
4. Hover the curve to read exact (x, y) values.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/sine-wave-explorer/main.html"
        height="492px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 18 (Math Module and Turtle Projects)

### Duration

10 minutes

### Prerequisites

- math.sin() and the sine wave turtle project (Chapter 18)

### Activities

1. **One slider at a time** (4 min): Students describe in one sentence what
   each slider changes, keeping the other two fixed.
2. **Reference race** (3 min): With the dotted sin(x) on, students set
   A = 2, f = 2 and count how many reference peaks fit under one of theirs.
3. **Match the turtle** (3 min): Students find slider settings that
   visually match the turtle project's `amplitude = 80, frequency = 0.05`
   wave shape.

### Assessment

- Student correctly names the parameter that controls height, wiggle count,
  and left-right shift
- Student can sketch y = 2 sin(x) versus y = sin(2x) without the sim
- Student connects the sliders back to the turtle project's variables

## References

1. [Python Documentation — math.sin](https://docs.python.org/3/library/math.html#math.sin) — official documentation
2. [Plotly.js Documentation](https://plotly.com/javascript/) — the plotting library used
