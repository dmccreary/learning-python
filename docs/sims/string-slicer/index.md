---
title: String Slicer
description: Drag slice handles over letter tiles to build Python index and slice expressions with live word[2:7] notation, negative indices, and challenges.
image: /sims/string-slicer/string-slicer.png
og:image: /sims/string-slicer/string-slicer.png
twitter:image: /sims/string-slicer/string-slicer.png
social:
   cards: false
quality_score: 93
---

# String Slicer

<iframe src="main.html" height="482" width="100%" scrolling="no"></iframe>

[Run the String Slicer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Slice notation causes endless off-by-one bugs because students cannot see
the boundaries. This slicer makes them physical: letter tiles carry positive
indices above and negative indices below, and two draggable handles — green
start, red end — select the slice. The red handle visibly sits one position
past the last selected letter, making "end is never included" a thing you
can see rather than memorize. A step selector adds the third slice argument,
single-tile clicks show plain indexing, and challenge mode asks for target
substrings like `"ROCKS"`.

**Learning objective:** The student will be able to write index and slice
expressions that extract a desired substring.

- **Bloom's Taxonomy (2001):** Apply — *use, execute, solve*
- **Interaction pattern:** direct manipulation with live notation readout

## How to Use

1. Drag the green **start** and red **end** handles and watch
   `word[start:end]` update with its result.
2. Note where the red handle sits when the slice reads `"THON "` — one past
   the last letter.
3. Set **step** to 2 and see every-other-letter slices like `word[0:6:2]`.
4. Click a single tile for index mode, check the negative indices below the
   tiles, and try **New Challenge**.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/string-slicer/main.html"
        height="482px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 14 (String Methods and Formatting); foundations from Chapter 8

### Duration

10-15 minutes

### Prerequisites

- Strings and len() (Chapter 8)

### Activities

1. **Predict and drag** (4 min): For `"PYTHON ROCKS"`, students write the
   slice for `"ROCKS"` on paper, then verify by dragging.
2. **End-exclusive drill** (3 min): "Make a slice that selects exactly one
   letter." What do students notice about start and end? (end = start + 1)
3. **Challenges** (5 min): Solve all four New Challenge rounds, including
   the step-2 challenge.

### Assessment

- Student writes a correct slice for a named substring on the first try
- Student can explain why `word[2:7]` selects five characters, not six
- Student can use a negative index to grab the last character

## References

1. [Python Tutorial — Strings (indexing and slicing)](https://docs.python.org/3/tutorial/introduction.html#strings) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
