---
title: Sorting Algorithm Comparer
description: Step bubble, selection, and insertion sort one comparison at a time, or race bubble vs insertion side by side with live operation counters.
image: /sims/sorting-comparer/sorting-comparer.png
og:image: /sims/sorting-comparer/sorting-comparer.png
twitter:image: /sims/sorting-comparer/sorting-comparer.png
social:
   cards: false
quality_score: 93
---

# Sorting Algorithm Comparer

<iframe src="main.html" height="542" width="100%" scrolling="no"></iframe>

[Run the Sorting Algorithm Comparer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Bubble, selection, and insertion sort differ only in their compare-and-swap
choreography — invisible in code, obvious on a bar chart. Each Step
highlights the pair being compared (amber) and flashes swaps (coral), with
live comparison and swap counters. **Race** mode runs bubble and insertion
sort side by side on *identical* data, turning "which sort is better?" into
an experiment: switch the data preset to nearly sorted or reversed and watch
the winner change.

**Learning objective:** The student will be able to compare how bubble,
selection, and insertion sort rearrange the same data and judge which does
less work for a given input.

- **Bloom's Taxonomy (2001):** Analyze → Evaluate — *compare, organize,
  judge*
- **Interaction pattern:** step-through per comparison with a side-by-side
  race mode and data presets

## How to Use

1. Step through **Bubble Sort** on random data and narrate its signature
   move: big values bubble to the right.
2. Compare with **Selection Sort** (hunts the minimum) and **Insertion
   Sort** (slides each value into place).
3. Pick **Race — Bubble vs Insertion**, Auto-play, and note both operation
   totals.
4. Change the data to **nearly sorted** and race again — insertion sort
   wins big. Try **reversed** for the worst case.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/sorting-comparer/main.html"
        height="542px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 30 (Algorithms and Data Structures)

### Duration

15 minutes

### Prerequisites

- Lists and loops (Chapters 7 and 15-16)
- The chapter's bubble/selection/insertion sort code

### Activities

1. **Choreography naming** (5 min): Students step each algorithm and write
   one sentence describing its move pattern.
2. **Prediction race** (5 min): Before each race, students bet on a winner
   and predict the operation counts within 20%.
3. **Data matters** (4 min): Students find the data preset where bubble
   sort does the LEAST work and explain why.

### Assessment

- Student matches each algorithm to its visual signature
- Student can explain why nearly-sorted data favors insertion sort
- Student can state what the comparison counter measures and why it matters

## References

1. [Wikipedia — Sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm) — overview of the classic algorithms
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
