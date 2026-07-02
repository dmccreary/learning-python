---
title: Modulo Clock
description: See the remainder as wrap-around counting on a circular dial and as dots grouped into equal rows with leftovers highlighted.
image: /sims/modulo-clock/modulo-clock.png
og:image: /sims/modulo-clock/modulo-clock.png
twitter:image: /sims/modulo-clock/modulo-clock.png
social:
   cards: false
quality_score: 93
---

# Modulo Clock

<iframe src="main.html" height="502" width="100%" scrolling="no"></iframe>

[Run the Modulo Clock MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

"The leftover after dividing" is an abstract phrase. This MicroSim gives the
remainder two concrete bodies at once: a clock dial that wraps at the divisor
(count 17 hops around a 5-slot dial and you land on 2) and a grouping view
(17 dots in rows of 5 leaves 2 orange leftovers). When the divisor is 2, the
sim announces even or odd — the classic `n % 2` trick.

**Learning objective:** The student will be able to explain the remainder as
wrap-around counting and use `%` to test even/odd and cycle through values.

- **Bloom's Taxonomy (2001):** Understand → Apply — *explain, use,
  demonstrate*
- **Interaction pattern:** parameter sliders with immediate visual feedback

## How to Use

1. Predict `17 % 5`, then check both views: the dial lands on your answer
   and the dot rows show it as leftovers.
2. Drag the **Dividend** slider slowly upward and watch the remainder cycle
   0, 1, 2, 3, 4, 0, 1, 2... — that repeating pattern is modulo's superpower.
3. Set the **Divisor** to 2 and test several dividends: remainder 0 means
   even, remainder 1 means odd.
4. Find a dividend/divisor pair with no leftovers. What does that say about
   the two numbers?

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/modulo-clock/main.html"
        height="502px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 6 (Math and Arithmetic)

### Duration

10 minutes

### Prerequisites

- Division and integer division `//` (Chapter 6)

### Activities

1. **Predict** (2 min): Students compute `17 % 5`, `20 % 4`, and `9 % 2` by
   hand.
2. **Verify** (4 min): Check each with the sliders. Ask students to describe
   what the dial does when the dividend goes up by exactly one divisor.
3. **Even/odd hunt** (4 min): With divisor 2, students classify five numbers
   as even or odd before moving the slider, then verify.

### Assessment

- Student can compute `n % d` for small numbers without the sim
- Student can explain why remainders always stay between 0 and divisor − 1
- Student can state how `n % 2` tells you whether n is even

## References

1. [Python Documentation — Binary arithmetic operations](https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations) — the `%` operator
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
