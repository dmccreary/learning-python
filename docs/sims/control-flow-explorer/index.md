---
title: Control Flow Explorer
description: Move a score slider and watch exactly one path through an if/elif/else flowchart light up while skipped conditions are marked never checked.
image: /sims/control-flow-explorer/control-flow-explorer.png
og:image: /sims/control-flow-explorer/control-flow-explorer.png
twitter:image: /sims/control-flow-explorer/control-flow-explorer.png
social:
   cards: false
quality_score: 93
---

# Control Flow Explorer

<iframe src="main.html" height="562" width="100%" scrolling="no"></iframe>

[Run the Control Flow Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Students can read an elif chain and still believe Python checks every
condition. This explorer shows the truth: conditions are checked top-down in
numbered order, exactly one path glows green, and conditions after the first
`True` are marked **"never checked."** The Python code on the left highlights
the lines that actually ran, tying the flowchart back to the program text.

**Learning objective:** The student will be able to predict which branch of
an if/elif/else chain executes for a given input and explain why later
branches are skipped.

- **Bloom's Taxonomy (2001):** Understand → Analyze — *predict, trace,
  differentiate*
- **Interaction pattern:** slider-driven live path highlighting with check
  ordering made explicit

## How to Use

1. With the **Elif Chain** program, predict which branch runs for score 85.
2. Move the slider and watch: the diamonds show True/False verdicts, the
   winning path glows, and later checks say "never checked."
3. Slide from 100 to 0 slowly — the green path steps down the chain at
   exactly 90, 80, and 70.
4. Switch to **Simple if** and set the score below 50: the else box shows
   that nothing happens at all.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/control-flow-explorer/main.html"
        height="562px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 9 (Making Decisions with If/Else)

### Duration

10-15 minutes

### Prerequisites

- Comparison operators and the Boolean type (Chapter 9 opening sections)

### Activities

1. **Predict** (3 min): For scores 95, 85, 75, and 40, students write which
   grade the elif chain assigns.
2. **Verify** (5 min): Check each with the slider. For each score, ask "how
   many conditions did Python actually check?"
3. **Boundary hunt** (4 min): Students find the exact score where the answer
   flips from "B" to "A" — reinforcing >= boundaries.

### Assessment

- Student predicts the branch taken for any score without the sim
- Student can explain why `score = 95` checks only one condition
- Student can explain what happens in a simple if with no else when the
  condition is False

## References

1. [Python Tutorial — if Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
