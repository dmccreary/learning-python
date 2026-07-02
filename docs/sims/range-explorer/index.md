---
title: Range Explorer
description: Adjust start, stop, and step sliders and instantly see which numbers range() generates on a number line, with the stop value shown as never included.
image: /sims/range-explorer/range-explorer.png
og:image: /sims/range-explorer/range-explorer.png
twitter:image: /sims/range-explorer/range-explorer.png
social:
   cards: false
quality_score: 93
---

# Range Explorer

<iframe src="main.html" height="482" width="100%" scrolling="no"></iframe>

[Run the Range Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Off-by-one errors around `range()` are the most common loop bug beginners
write. This explorer makes the rule physical: generated numbers appear as
filled blue dots on a number line, while the stop value is a hollow orange
ring labeled "not included." A live code readout shows exactly what
`range(start, stop, step)` produces, and the fact line connects the count of
numbers to how many times a for loop would run. Challenge mode shows green
target rings to hit with the sliders.

**Learning objective:** The student will be able to choose start, stop, and
step values that produce a desired sequence of numbers.

- **Bloom's Taxonomy (2001):** Apply — *use, execute, solve*
- **Interaction pattern:** parameter sliders with immediate feedback and
  automatic challenge checking

## How to Use

1. Predict what `range(2, 12, 3)` produces, then check the number line.
2. Slide **Stop** up and down and watch the hollow ring — the blue dots
   always stop short of it.
3. Click **New Challenge** and adjust the sliders until your blue dots land
   exactly on the green rings.
4. Check **count backward** to try negative steps — and discover when a
   range produces no numbers at all.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/range-explorer/main.html"
        height="482px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 7 (For Loops and Drawing Shapes)

### Duration

10 minutes

### Prerequisites

- The for loop with range() (Chapter 7 opening sections)

### Activities

1. **Predict** (3 min): Students write the outputs of `range(4)`,
   `range(2, 6)`, and `range(0, 10, 2)` before touching the sim.
2. **Verify** (3 min): Check each on the number line. Emphasize the hollow
   stop ring each time.
3. **Challenges** (4 min): Students solve three New Challenge rounds.
   Fastest correct slider settings wins.

### Assessment

- Student writes correct values for a novel range like `range(3, 14, 4)`
- Student can explain why `range(5)` runs a loop 5 times but never produces 5
- Student can produce a target sequence such as 1, 3, 5, 7, 9 on the first try

## References

1. [Python Documentation — range](https://docs.python.org/3/library/stdtypes.html#range) — official range documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
