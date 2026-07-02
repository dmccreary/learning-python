---
title: Boolean Logic Lab
description: Set True/False inputs feeding and, or, and not, watch a result lamp, and see short-circuit evaluation gray out the operand Python never checks.
image: /sims/boolean-logic-lab/boolean-logic-lab.png
og:image: /sims/boolean-logic-lab/boolean-logic-lab.png
twitter:image: /sims/boolean-logic-lab/boolean-logic-lab.png
social:
   cards: false
quality_score: 93
---

# Boolean Logic Lab

<iframe src="main.html" height="512" width="100%" scrolling="no"></iframe>

[Run the Boolean Logic Lab MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Truth tables are usually memorized; this lab lets students *build* them. Two
True/False inputs feed an operator block (`and`, `or`, `not`) wired to a
result lamp. The lab also makes short-circuit evaluation visible: when input
A alone decides the answer (`False and ...`, `True or ...`), the B block
grays out with a "Python never looked here" badge. A truthiness panel shows
`bool()` verdicts for values like `0`, `""`, `[]`, and `None`, previewing
Chapter 19.

**Learning objective:** The student will be able to determine the result of
`and`, `or`, and `not` expressions and explain when Python skips evaluating
the second operand.

- **Bloom's Taxonomy (2001):** Understand → Apply — *classify, explain,
  demonstrate*
- **Interaction pattern:** input selectors with an immediate circuit-and-lamp
  display

## How to Use

1. Build all four rows of the `and` truth table by trying every A/B
   combination. Which single combination lights the lamp?
2. Switch to `or` and find the one combination that does NOT light it.
3. Set A to False with `and` — watch B gray out. Change B: does the result
   ever change? That is short-circuit evaluation.
4. In the bonus panel, test `bool(0)`, `bool("")`, and `bool([3, 7])`.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/boolean-logic-lab/main.html"
        height="512px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapters 9 and 19

### Duration

10 minutes

### Prerequisites

- Comparison operators producing True/False (Chapter 9)

### Activities

1. **Build the tables** (4 min): Students record all four combinations for
   `and` and `or` in a paper truth table, using the lab to verify.
2. **Short-circuit discovery** (3 min): "Set it up so that changing B does
   nothing. How many ways can you do it?" (Two: False-and, True-or.)
3. **Truthiness sort** (3 min): Students predict True/False for all eight
   bonus values, then check.

### Assessment

- Student completes and/or truth tables from memory
- Student can name the two short-circuit situations
- Student can classify 0, "", [], and None as falsy

## References

1. [Python Documentation — Boolean Operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not) — including short-circuit behavior
2. [Python Documentation — Truth Value Testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing) — the falsy values list
3. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
