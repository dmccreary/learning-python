---
title: Recursion Call Stack
description: Step factorial(4) and watch stack frames pile up to the gold base case, then unwind as each pending multiplication fills in.
image: /sims/recursion-call-stack/recursion-call-stack.png
og:image: /sims/recursion-call-stack/recursion-call-stack.png
twitter:image: /sims/recursion-call-stack/recursion-call-stack.png
social:
   cards: false
quality_score: 93
---

# Recursion Call Stack

<iframe src="main.html" height="562" width="100%" scrolling="no"></iframe>

[Run the Recursion Call Stack MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The call stack is the canonical invisible machine: students see
`factorial(4) = 24` but never the frames stacking up and unwinding. This sim
draws each frame as a physical box remembering its own `n` and its paused
work (`4 × ?`). Frames pile upward until the base case lights **gold**, then
pop one at a time as each pending multiplication fills in and its answer
flows down. The `countdown(3)` preset shows recursion with side effects and
no return value; **Missing Base Case** grows the tower past `n = 0` until a
`RecursionError` banner appears.

**Learning objective:** The student will be able to deconstruct a recursive
call into stack frames, identify the base case, and trace values returning
back down the stack.

- **Bloom's Taxonomy (2001):** Analyze — *deconstruct, organize, trace*
- **Interaction pattern:** step-through with every frame's variables and
  pending work visible

## How to Use

1. Predict how tall the tower will get for `factorial(4)`, then step and
   count the frames.
2. Watch the turn-around moment: the gold base case is the only frame that
   answers without asking anyone else.
3. On the way down, follow each answer: 1 → 2 → 6 → 24.
4. Try **countdown(3)** (recursion that prints instead of returning) and
   **Missing Base Case** (why the stopping rule matters).

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/recursion-call-stack/main.html"
        height="562px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 24 (Recursion and Fractals); also useful for tracebacks in Chapter 23

### Duration

15 minutes

### Prerequisites

- Functions, parameters, and return values (Chapters 4 and 11)

### Activities

1. **Tower prediction** (4 min): Students predict the maximum frame count
   for factorial(4), then factorial(6) (without the sim).
2. **Two-phase trace** (5 min): Step through all 8 steps; students narrate
   the "up with pauses, down with answers" rhythm in their own words.
3. **Break it** (4 min): Run Missing Base Case. Students write the one line
   that fixes it and say where it must go.

### Assessment

- Student states the maximum stack depth for factorial(n)
- Student can identify the base case in a new recursive function
- Student can explain what RecursionError means and how to prevent it

## References

1. [Python Tutorial — more on defining functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) — background on function calls
2. [Wikipedia — Call stack](https://en.wikipedia.org/wiki/Call_stack) — the general concept
3. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
