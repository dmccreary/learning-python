---
title: List Index Explorer
description: Click append, insert, and pop and watch a list of colored boxes reshape in place - indices renumber live, and a String Test shows the TypeError strings give instead.
image: /sims/list-index-explorer/list-index-explorer.png
og:image: /sims/list-index-explorer/list-index-explorer.png
twitter:image: /sims/list-index-explorer/list-index-explorer.png
social:
   cards: false
quality_score: 93
---

# List Index Explorer

<iframe src="main.html" height="482" width="100%" scrolling="no"></iframe>

[Run the List Index Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Students read that lists "change in place" but never see the boxes shift.
Here every operation is one click: `append()` grows the end, `insert(1, ...)`
squeezes in and slides everything rightward, `pop()` shrinks the tail — and
both the positive and negative index rows renumber before their eyes, with
the exact Python line shown for each change. The **String Test** panel shows
the real `TypeError` a string raises for the same in-place change, making the
mutable/immutable divide concrete.

**Learning objective:** The student will be able to select items by positive
and negative index and demonstrate how append, insert, and pop reshape a
list in place.

- **Bloom's Taxonomy (2001):** Apply → Analyze — *use, demonstrate,
  differentiate*
- **Interaction pattern:** button-driven operations with one visible state
  change per click

## How to Use

1. Predict: after `insert(1, ...)`, what index will `"gold"` have? Click and
   check.
2. Watch the **negative** index row: which item always has index −1?
3. Fill the list with `append()`, then `pop()` back down — the list reprints
   below the boxes after every change.
4. Click **String Test** to see why `word[0] = "X"` fails on a string.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/list-index-explorer/main.html"
        height="482px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapters 15-16 (Lists)

### Duration

10 minutes

### Prerequisites

- String indexing (Chapters 8 and 14)

### Activities

1. **Shift hunt** (4 min): Students click insert and record which items got
   new indices and which kept theirs. Then the same for pop.
2. **Negative anchor** (3 min): "No matter what you do, what is at index
   −1?" Students test with several operations.
3. **Mutable vs immutable** (3 min): Compare the String Test error with the
   list behavior; students write one sentence for each.

### Assessment

- Student predicts the full index renumbering after an insert
- Student can state which end pop() removes from
- Student can explain the TypeError in the String Test panel

## References

1. [Python Tutorial — More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) — official list methods documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
