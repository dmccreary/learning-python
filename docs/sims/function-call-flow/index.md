---
title: Function Call Flow
description: Trace a Python function call step by step - the argument binds to the parameter, the body computes, and the return value flows back to the call site.
image: /sims/function-call-flow/function-call-flow.png
og:image: /sims/function-call-flow/function-call-flow.png
twitter:image: /sims/function-call-flow/function-call-flow.png
social:
   cards: false
quality_score: 93
---

# Function Call Flow

<iframe src="main.html" height="502" width="100%" scrolling="no"></iframe>

[Run the Function Call Flow MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

"Why doesn't `def` run my code?" and "where does the argument go?" are the two
most common questions in the functions chapter. This MicroSim answers both
visually. The `def` step stores the function as a green "machine" without
running it. Each call step shows the argument flying into the parameter slot,
the body computing, and the return value flying back to replace the call
site. The same function runs twice with different arguments, so students see
why functions are reusable.

**Learning objective:** The student will be able to trace a function call,
explaining how the argument value binds to the parameter and how the return
value replaces the call site.

- **Bloom's Taxonomy (2001):** Understand — *explain, trace, infer*
- **Interaction pattern:** step-through with data-flow arrows and concrete
  values visible at every step (no animation)

## How to Use

1. Read the program and **predict the two numbers it will print**.
2. Click **Next Step**. The first step is `def` — notice that nothing runs;
   Python only stores the recipe.
3. Watch the blue arrow carry the argument `5` into the parameter slot `n`,
   and the orange arrow carry the returned `10` back out.
4. Keep stepping to see the same machine run again with `7`.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/function-call-flow/main.html"
        height="502px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 4 (Functions and Objects)

### Duration

10 minutes

### Prerequisites

- Variables and assignment (Chapter 3)
- The idea that programs run top to bottom (Chapters 1-2)

### Activities

1. **Predict** (3 min): Students write down the two numbers the program will
   print, before touching the sim.
2. **Trace** (5 min): Step through all 9 steps. Pause at step 1 and ask:
   "Why is the output still empty after Python read the def block?"
3. **Reuse** (2 min): Ask students what would print if a third line called
   `double(100)` — they should be able to trace it mentally now.

### Assessment

- Student can explain why the function body does not run at the `def` line
- Student can state where the argument value goes and where the return value ends up
- Student correctly traces a new call like `double(12)` without the sim

## References

1. [Python Tutorial — Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
