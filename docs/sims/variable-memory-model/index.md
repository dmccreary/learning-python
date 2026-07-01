---
title: Variable Memory Model
description: Step through a short Python script and watch labeled memory boxes get created, read, and replaced as each assignment runs.
image: /sims/variable-memory-model/variable-memory-model.png
og:image: /sims/variable-memory-model/variable-memory-model.png
twitter:image: /sims/variable-memory-model/variable-memory-model.png
social:
   cards: false
quality_score: 93
---

# Variable Memory Model

<iframe src="main.html" height="482" width="100%" scrolling="no"></iframe>

[Run the Variable Memory Model MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

`score = 10` is invisible magic until you can see the box. This MicroSim makes
the sticky-note metaphor operational: each assignment creates or updates a
labeled memory box, each read outlines the box being looked at in blue, and
each reassignment shows the old value being replaced (with a small "was 10"
note so students see that the old value is gone).

**Learning objective:** The student will be able to explain what happens in
memory when a variable is created, read, and reassigned.

- **Bloom's Taxonomy (2001):** Understand — *explain, interpret, predict*
- **Interaction pattern:** step-through worked example with labeled memory
  boxes (no animation)

## How to Use

1. Read the script on the left and **predict how many boxes will exist** when
   it finishes, and what each will hold.
2. Click **Next Step** to run one line. Orange means a box is being
   **written**; blue means a box is being **read**.
3. Watch `score = score + 5` carefully: Python reads the old value first,
   then replaces it.
4. Try all three programs. **Copy Surprise** answers a classic question:
   after `b = a`, does changing `a` also change `b`?

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/variable-memory-model/main.html"
        height="482px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 3 (Variables and Numbers)

### Duration

10 minutes

### Prerequisites

- print() and the idea that programs run top to bottom (Chapters 1-2)

### Activities

1. **Predict** (3 min): For the "Game Score" script, students write down the
   final value of every variable before stepping.
2. **Step and check** (4 min): Step through and compare. Pause on
   `score = score + 5` and ask: "Which happens first — the read or the
   write?"
3. **Copy Surprise** (3 min): Students predict what `print(b)` shows after
   `a = 7`. Most expect 7; the sim shows why it is 5.

### Assessment

- Student can state that assignment stores a value and reassignment replaces it
- Student correctly predicts the output of a 4-line script using reassignment
- Student can explain why changing `a` after `b = a` does not change `b`

## References

1. [Python Tutorial — Numbers and Variables](https://docs.python.org/3/tutorial/introduction.html) — official introduction to assignment
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
