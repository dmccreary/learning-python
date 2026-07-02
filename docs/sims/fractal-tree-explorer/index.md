---
title: Fractal Tree Explorer
description: Drag branch angle, depth, and shrink sliders and watch a recursive tree redraw instantly, with each recursion level tinted its own color.
image: /sims/fractal-tree-explorer/fractal-tree-explorer.png
og:image: /sims/fractal-tree-explorer/fractal-tree-explorer.png
twitter:image: /sims/fractal-tree-explorer/fractal-tree-explorer.png
social:
   cards: false
quality_score: 93
---

# Fractal Tree Explorer

<iframe src="main.html" height="552" width="100%" scrolling="no"></iframe>

[Run the Fractal Tree Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The chapter's turtle fractal requires an edit-and-rerun cycle for every
parameter change; this explorer closes the loop with three sliders. Each
recursion level is tinted its own color (brown trunk to green twigs), which
turns the depth slider into a live demonstration of recursion levels. The
"recursive calls" counter roughly doubles with every +1 depth — connecting
the tree's beauty back to the call stack — and Snapshot keeps a gray ghost
so students can compare designs.

**Learning objective:** The student will be able to demonstrate how branch
angle, depth, and shrink factor shape a recursive tree and design a tree of
their own.

- **Bloom's Taxonomy (2001):** Apply → Create — *demonstrate, experiment,
  design*
- **Interaction pattern:** parameter sliders with immediate redraw, plus
  snapshot comparison

## How to Use

1. Predict what the call counter does when depth goes from 6 to 7, then
   drag and check (it roughly doubles: two recursive calls per branch).
2. Sweep the **angle** slider from 10° to 60° — from poplar to banyan.
3. Click **Snapshot**, change one slider, and compare against the ghost.
4. Design challenge: make a weeping willow (big angle, high shrink), then
   a scraggly bush (Randomize and refine).

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/fractal-tree-explorer/main.html"
        height="552px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 24 (Recursion and Fractals)

### Duration

10-15 minutes

### Prerequisites

- The recursive turtle tree program (Chapter 24)
- The call stack model (Recursion Call Stack MicroSim)

### Activities

1. **Doubling hunt** (4 min): Students record the call count at depths 4,
   5, 6, 7 and describe the pattern (2^(depth+1) − 1).
2. **One-slider studies** (4 min): Change only the angle, then only the
   shrink; students write one sentence per slider about its visual effect.
3. **Design gallery** (5 min): Each student snapshots their best tree and
   records its three parameter values for a partner to reproduce.

### Assessment

- Student predicts the approximate call count for a given depth
- Student can map each slider to its line in the chapter's draw_tree code
- Student can reproduce a target tree from its three parameters

## References

1. [Wikipedia — Fractal canopy](https://en.wikipedia.org/wiki/Fractal_canopy) — the fractal family this tree belongs to
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
