---
title: Expression Evaluator
description: Watch a Python arithmetic expression collapse one operation at a time in the exact order Python evaluates it, guided by a precedence ladder.
image: /sims/expression-evaluator/expression-evaluator.png
og:image: /sims/expression-evaluator/expression-evaluator.png
twitter:image: /sims/expression-evaluator/expression-evaluator.png
social:
   cards: false
quality_score: 93
---

# Expression Evaluator

<iframe src="main.html" height="422" width="100%" scrolling="no"></iframe>

[Run the Expression Evaluator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Order of operations is usually taught as a table to memorize. This MicroSim
lets students watch it *happen*: each Next Step highlights the operation
Python computes next and collapses it into its value, while a precedence
ladder shows which rank ("running now") is active. Presets cover the classic
`2 + 3 * 4` surprise, parentheses, left-to-right evaluation, exponents, and
the `//` / `%` pair.

**Learning objective:** The student will be able to evaluate an arithmetic
expression in the same order Python does, one operation at a time.

- **Bloom's Taxonomy (2001):** Understand → Apply — *interpret, execute,
  predict*
- **Interaction pattern:** step-through reduction with a live precedence
  legend

## How to Use

1. Pick an expression and **predict the final answer** before stepping.
2. Click **Next Step**. The amber highlight shows the operation Python runs
   next; the ladder shows why it was chosen.
3. Compare `2 + 3 * 4` with `(2 + 3) * 4` — same numbers, different answers.
4. Try `10 - 4 - 3` to see that equal-rank operators run left to right.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/expression-evaluator/main.html"
        height="422px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 6 (Math and Arithmetic)

### Duration

10 minutes

### Prerequisites

- The seven arithmetic operators, including `**`, `//`, and `%` (Chapter 6)

### Activities

1. **Predict** (3 min): Students write down answers for all five preset
   expressions before using the sim.
2. **Step and check** (5 min): Step through each expression. Score their
   predictions.
3. **Discuss** (2 min): "Which prediction surprised you most, and what rule
   explains it?"

### Assessment

- Student correctly evaluates a new mixed expression like `1 + 2 ** 2 * 3` by hand
- Student can explain why `10 - 4 - 3` is 3 and not 9
- Student can state when parentheses change a result and when they do not

## References

1. [Python Documentation — Operator precedence](https://docs.python.org/3/reference/expressions.html#operator-precedence) — the full precedence table
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
