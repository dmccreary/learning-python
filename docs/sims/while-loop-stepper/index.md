---
title: While-Loop Stepper
description: Step a while loop through its check-condition, run-body rhythm with True/False verdicts stamped at every check - and safely experience an infinite loop.
image: /sims/while-loop-stepper/while-loop-stepper.png
og:image: /sims/while-loop-stepper/while-loop-stepper.png
twitter:image: /sims/while-loop-stepper/while-loop-stepper.png
social:
   cards: false
quality_score: 93
---

# While-Loop Stepper

<iframe src="main.html" height="502" width="100%" scrolling="no"></iframe>

[Run the While-Loop Stepper MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The invisible heart of a while loop is the repeated condition check. This
stepper makes the arrow physically visit the `while` line before every trip
and stamps a True/False verdict there, so students internalize the
check-run-check rhythm. The **Infinite Bug** preset is the classic
missing-decrement bug running in a safe cage: the trip odometer spins, the
verdict stamps True forever, and a warning banner explains the fix — an
experience Skulpt's safety limits normally prevent.

**Learning objective:** The student will be able to trace a while loop's
condition checks and identify why a loop terminates — or never does.

- **Bloom's Taxonomy (2001):** Understand → Analyze — *trace, predict,
  debug*
- **Interaction pattern:** step-through with an explicit condition-check
  stage and a sandboxed infinite-loop demonstration

## How to Use

1. With **Countdown**, predict: how many times does the body run, and how
   many times is the condition checked? Step through and count the stamps.
   (3 trips, 4 checks — the last check says False.)
2. Try **Double Until 100** — the loop stops at 192, not 100. Why?
3. Pick **Infinite Bug** and keep clicking: the condition is True every
   single time because nothing in the body changes `count`.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/while-loop-stepper/main.html"
        height="502px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 10 (While Loops and Animation)

### Duration

10-15 minutes

### Prerequisites

- for loops (Chapter 7) and comparison operators (Chapter 9)

### Activities

1. **Count the checks** (5 min): Students tally condition checks vs body
   runs for the Countdown preset, discovering checks = trips + 1.
2. **Overshoot** (4 min): With Double Until 100, ask students to predict the
   printed value before stepping. Most say 100; the sim shows 192.
3. **Debug** (4 min): With Infinite Bug, students write the one line that
   would fix the loop, then explain where it must go and why.

### Assessment

- Student can state the check-run-check rhythm in their own words
- Student identifies the missing line in an infinite countdown loop
- Student explains why a while loop's variable must change inside the body

## References

1. [Python Tutorial — while Statements](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
