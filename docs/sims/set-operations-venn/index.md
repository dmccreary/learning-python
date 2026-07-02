---
title: Set Operations Venn
description: Type two sets, watch member chips land in the right Venn regions, and light up union, intersection, difference, and symmetric difference.
image: /sims/set-operations-venn/set-operations-venn.png
og:image: /sims/set-operations-venn/set-operations-venn.png
twitter:image: /sims/set-operations-venn/set-operations-venn.png
social:
   cards: false
quality_score: 93
---

# Set Operations Venn

<iframe src="main.html" height="542" width="100%" scrolling="no"></iframe>

[Run the Set Operations Venn MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Union, intersection, and difference are inherently spatial ideas that the
text output of `{...}` completely hides. Here students type two sets and the
member chips land in the correct Venn regions automatically. Each operation
button shades exactly the region it selects — `A | B` lights both circles,
`A & B` only the lens, `A - B` the left crescent, `A ^ B` everything except
the lens — while the Python expression and its result set print below.
Typing a duplicate visibly collapses it, and an empty intersection prints
`set()`, Python's empty-set notation.

**Learning objective:** The student will be able to classify which elements
belong to A | B, A & B, A − B, and A ^ B for two given sets.

- **Bloom's Taxonomy (2001):** Understand → Analyze — *classify, compare,
  organize*
- **Interaction pattern:** editable sets plus operation buttons that
  highlight regions

## How to Use

1. Predict which animals `A & B` selects, then click the intersection
   button and check the shaded region.
2. Click all four operations and describe each shaded region in your own
   words.
3. Edit the sets: type your own items, then type one item twice in set A —
   the duplicate collapses because sets never hold repeats.
4. Remove all shared items and click `A & B` — the result is `set()`.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/set-operations-venn/main.html"
        height="542px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 20 (Tuples and Sets)

### Duration

10-15 minutes

### Prerequisites

- Creating sets with curly braces (Chapter 20)

### Activities

1. **Region tour** (4 min): For the default sets, students predict all four
   operation results on paper, then verify each with a click.
2. **Build your own** (4 min): Students enter their two favorite-food sets
   and find their intersection with a partner's.
3. **Edge cases** (4 min): Make the intersection empty (what prints?), make
   B a subset of A (what does A - B leave?), and enter a duplicate.

### Assessment

- Student matches each operator symbol to its shaded region
- Student predicts the result set for all four operations on new sets
- Student can explain why sets automatically remove duplicates

## References

1. [Python Documentation — Set Types](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset) — official set operations documentation
2. [Wikipedia — Venn diagram](https://en.wikipedia.org/wiki/Venn_diagram) — background on the visualization
3. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
