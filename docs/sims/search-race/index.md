---
title: Search Race
description: Pick a target and step linear and binary search side by side - linear plods left to right while binary discards half the shelf per check.
image: /sims/search-race/search-race.png
og:image: /sims/search-race/search-race.png
twitter:image: /sims/search-race/search-race.png
social:
   cards: false
quality_score: 93
---

# Search Race

<iframe src="main.html" height="522" width="100%" scrolling="no"></iframe>

[Run the Search Race MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Big-O is abstract until you feel it. This race runs linear and binary search
on the same shelf of 31 numbered boxes: linear checks box after box while
binary checks the middle and grays out the discarded half — 31 → 15 → 7 →
3 → 1. Per-lane check counters quantify the gap, odd targets are absent on
purpose (both searches must discover that), and the **shuffled shelf
(trap!)** preset delivers the chapter's key justification: binary search can
miss a value that is right there, because halving only works on sorted data.

**Learning objective:** The student will be able to compare the number of
checks linear and binary search need and justify why binary search requires
sorted data.

- **Bloom's Taxonomy (2001):** Analyze → Evaluate — *compare, test,
  justify*
- **Interaction pattern:** pick a target, then step or auto-play both
  searches side by side

## How to Use

1. Predict both check counts for target 24, then Step and compare.
2. Slide the target to 62 (the last box): linear needs 31 checks, binary
   still needs only 5.
3. Pick an odd target like 33 — it is not on the shelf. How does each
   search find out?
4. Switch to the **shuffled shelf (trap!)** and watch binary search get
   lost.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/search-race/main.html"
        height="522px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 30 (Algorithms and Data Structures)

### Duration

10-15 minutes

### Prerequisites

- Lists and indexing (Chapters 15-16)
- The chapter's binary_search function

### Activities

1. **Worst case hunt** (4 min): Students find the target that makes linear
   search work hardest, then the one that makes binary work hardest —
   binary's worst case is still only 5 checks.
2. **Halving chant** (3 min): Step binary search while the class calls out
   the shrinking range: 31, 15, 7, 3, 1.
3. **The trap** (5 min): On the shuffled shelf, students find a target that
   binary search misses, then explain the failure in one sentence.

### Assessment

- Student predicts binary search's maximum checks for 31 boxes (5) and for
  ~1000 boxes (about 10)
- Student can explain why binary search requires sorted data using the trap
- Student can state which search to choose for unsorted data

## References

1. [Wikipedia — Binary search](https://en.wikipedia.org/wiki/Binary_search) — the algorithm and its history
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
