---
title: For-Loop Stepper
description: Step through a Python for loop one statement at a time - watch the loop variable change, the arrow jump back to the top, and a turtle draw one square side per trip.
image: /sims/for-loop-stepper/for-loop-stepper.png
og:image: /sims/for-loop-stepper/for-loop-stepper.png
twitter:image: /sims/for-loop-stepper/for-loop-stepper.png
social:
   cards: false
quality_score: 93
---

# For-Loop Stepper

<iframe src="main.html" height="502" width="100%" scrolling="no"></iframe>

[Run the For-Loop Stepper MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The static "loop trip table" becomes a machine you can crank by hand. Each
Next Step click advances one *statement*, so students see the execution arrow
jump back to the `for` line at the start of every trip — the exact moment
`i` takes its next value. In the Draw Square preset a mini turtle draws one
side per trip, tying loop mechanics directly to the chapter's square program.

**Learning objective:** The student will be able to trace a for loop, stating
the value of the loop variable on each trip and predicting the total number
of repetitions.

- **Bloom's Taxonomy (2001):** Understand — *trace, explain, predict* (the
  Running Total preset stretches toward Apply)
- **Interaction pattern:** statement-level step-through; optional slow
  auto-play that starts paused

## How to Use

1. Predict: what will `i` be on the first trip? How many trips will happen?
2. Click **Next Step** repeatedly. Watch the `i` badge and the trip counter,
   and notice the arrow jumping back to the top.
3. Use **Auto-play** to watch a full run at reading speed; click **Pause**
   any time.
4. Try **Countdown** (why does it never print 3?) and **Running Total**
   (watch the accumulator box grow by `i` each trip).

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/for-loop-stepper/main.html"
        height="502px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 7 (For Loops and Drawing Shapes)

### Duration

10-15 minutes

### Prerequisites

- Basic turtle commands (Chapter 5)
- Variables (Chapter 3)

### Activities

1. **Predict** (3 min): "What is `i` on the first trip? On the last? How
   many sides get drawn?"
2. **Crank the machine** (5 min): Step through Draw Square. Each time the
   arrow lands on the `for` line, students call out the new value of `i`.
3. **Transfer** (5 min): Switch to Countdown. Ask: "range(3) — why does 3
   never print?" Then Running Total: "Why does total grow by a different
   amount each trip?"

### Assessment

- Student states the values `i` takes for `range(4)` without running it
- Student can point to the exact step where the loop decides to stop
- Student predicts the final total for `range(5)` accumulation (10)

## References

1. [Python Tutorial — for Statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
