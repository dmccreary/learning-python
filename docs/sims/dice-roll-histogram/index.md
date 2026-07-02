---
title: Dice Roll Histogram
description: Roll a die 1, 100, or 1000 times and watch the bar chart flatten toward uniform - then switch to two dice and discover the triangle around 7.
image: /sims/dice-roll-histogram/dice-roll-histogram.png
og:image: /sims/dice-roll-histogram/dice-roll-histogram.png
twitter:image: /sims/dice-roll-histogram/dice-roll-histogram.png
social:
   cards: false
quality_score: 95
---

# Dice Roll Histogram

<iframe src="main.html" height="482" width="100%" scrolling="no"></iframe>

[Run the Dice Roll Histogram MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A single `random.randint(1, 6)` call looks like pure chaos; the pattern only
emerges over many trials. This experiment runner lets students roll in
batches of 1, 100, or 1000 and watch the histogram settle toward a flat,
uniform skyline. Switching to the **sum of two dice** produces the genuinely
surprising triangle peaked at 7 — the moment students discover that
randomness has a shape.

**Learning objective:** The student will be able to analyze how the
distribution of random rolls flattens as the number of trials grows, and
contrast one die with the sum of two dice.

- **Bloom's Taxonomy (2001):** Analyze — *organize, compare, attribute*
- **Interaction pattern:** experiment runner with student-triggered batches
- **Library:** Chart.js (bar chart with live updates and percentage
  tooltips)

## How to Use

1. Predict: after 1000 rolls, will the six bars be even or uneven?
2. Click **Roll 1** several times (chaos), then **Roll 100** (a rough
   skyline), then **Roll 1000** (nearly flat). Hover any bar for its
   percentage.
3. Switch to **Sum of two dice**, roll 1000, and explain the mountain: why
   are there more ways to make 7 than 2?
4. **Reset** and repeat — the exact bars differ every time, but the shape
   comes back.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/dice-roll-histogram/main.html"
        height="482px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 17 (Modules and Random Numbers)

### Duration

10-15 minutes

### Prerequisites

- random.randint() (Chapter 17)

### Activities

1. **Predict and roll** (4 min): Students vote on whether the 1000-roll
   histogram will be even. Roll and discuss the small wobbles.
2. **Two-dice mystery** (6 min): Switch modes, roll 1000, and challenge
   students to list all the ways to roll 7 (six ways) versus 2 (one way).
3. **Percent check** (3 min): Hover the bars — each face should sit near
   16.7%. Why that number? (1 out of 6.)

### Assessment

- Student can explain why more rolls make the one-die bars more even
- Student can explain why 7 is the most common two-dice sum
- Student can state the expected percentage for each face of one die

## References

1. [Python Documentation — random module](https://docs.python.org/3/library/random.html) — official documentation
2. [Chart.js Documentation](https://www.chartjs.org/docs/latest/) — the charting library used
