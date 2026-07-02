---
title: Scope Inspector
description: Step through a program with global and local variables, watching scope rooms appear and vanish and name lookups probe local first, then global.
image: /sims/scope-inspector/scope-inspector.png
og:image: /sims/scope-inspector/scope-inspector.png
twitter:image: /sims/scope-inspector/scope-inspector.png
social:
   cards: false
quality_score: 93
---

# Scope Inspector

<iframe src="main.html" height="512" width="100%" scrolling="no"></iframe>

[Run the Scope Inspector MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Scope is the most abstract idea in the first half of the book: variables
"living" in invisible rooms. This inspector draws the rooms. The Global room
is always on screen; each function call opens a temporary Function room that
vanishes at return — taking its variables with it. Every name lookup
highlights the box Python actually uses, and when a local lookup misses, a
badge says "not found here → check the Global room." The Shadowing Bug preset
shows a local `score = 99` hiding the global 10; The global Fix preset shows
the `global` keyword writing straight into the Global room.

**Learning objective:** The student will be able to determine which variable
a name refers to at any line, differentiating local, global, and shadowed
variables.

- **Bloom's Taxonomy (2001):** Analyze — *differentiate, attribute, debug*
- **Interaction pattern:** step-through with nested scope rooms and lookup
  highlighting

## How to Use

1. Start with **Read the Global**: watch the empty Function room appear, and
   the lookup fall through to the Global room.
2. Switch to **Shadowing Bug** and predict: what does the final
   `print(score)` show? Step through — the local 99 box is thrown away with
   its room.
3. Run **The global Fix** to see how the `global` keyword changes where the
   write lands.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/scope-inspector/main.html"
        height="512px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 11 (Functions, Parameters, and Scope)

### Duration

15 minutes

### Prerequisites

- Defining and calling functions (Chapter 4)
- Variables and assignment (Chapter 3)

### Activities

1. **Rooms tour** (4 min): Step through Read the Global. Ask: "when does the
   Function room exist, and when does it not?"
2. **Predict the bug** (5 min): Before stepping Shadowing Bug, students vote:
   99 or 10? Step through and identify the exact step where the local box is
   destroyed.
3. **Fix comparison** (4 min): Run The global Fix and have students state in
   one sentence what `global score` changes.

### Assessment

- Student predicts the output of a shadowing program correctly
- Student can explain why a local variable disappears after the call
- Student can state when the `global` keyword is needed and why it is rare

## References

1. [Python FAQ — What are the rules for local and global variables?](https://docs.python.org/3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python) — official explanation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
