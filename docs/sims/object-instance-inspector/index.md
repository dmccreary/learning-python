---
title: Object Instance Inspector
description: Step through Dog constructions and method calls, watching instance cards get their own attributes while a glowing self arrow shows which card each method works on.
image: /sims/object-instance-inspector/object-instance-inspector.png
og:image: /sims/object-instance-inspector/object-instance-inspector.png
twitter:image: /sims/object-instance-inspector/object-instance-inspector.png
social:
   cards: false
quality_score: 93
---

# Object Instance Inspector

<iframe src="main.html" height="572" width="100%" scrolling="no"></iframe>

[Run the Object Instance Inspector MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Students routinely conflate the class with its objects and cannot say what
`self` refers to. This inspector separates the two visually: the class is a
dashed **blueprint** card that makes nothing by itself; each `Dog(...)` call
spawns a solid instance card with its own `name` and `age` boxes. During
`rex.bark()`, a glowing orange arrow connects the blueprint's method to
exactly one card — `self` is the object left of the dot. The final step reads
`rex.species` and shows the lookup falling through to the shared class
variable on the blueprint.

**Learning objective:** The student will be able to explain the difference
between a class and its instances and identify which object `self` refers to
during a method call.

- **Bloom's Taxonomy (2001):** Understand — *explain, exemplify,
  differentiate*
- **Interaction pattern:** step-through of construction and method calls
  with instance cards and a self arrow

## How to Use

1. Step 1: notice that `class Dog:` creates NO dog — just the dashed
   blueprint.
2. Steps 2-3: each `Dog(...)` call builds a separate card with its own
   boxes.
3. Step 4: before clicking, predict whose name `rex.bark()` prints, then
   follow the `self` arrow.
4. Step 5: `rex.species` is not on rex's card — watch the dotted lookup
   climb to the blueprint.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/object-instance-inspector/main.html"
        height="572px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 25 (Object-Oriented Programming)

### Duration

10-15 minutes

### Prerequisites

- Functions and parameters (Chapters 4 and 11)
- Objects and dot notation (Chapter 4)

### Activities

1. **Blueprint check** (3 min): After step 1, ask: "How many dogs exist
   right now?" (Zero — a common misconception.)
2. **Whose name?** (4 min): Students predict the output of `rex.bark()` and
   `bella.bark()`, then verify with the self arrow.
3. **Shared vs owned** (4 min): Students sort `name`, `age`, and `species`
   into "each dog owns one" vs "all dogs share one."

### Assessment

- Student can state what self refers to in any method call
- Student can explain why two instances have independent attribute values
- Student can predict where Python finds rex.species

## References

1. [Python Tutorial — Classes](https://docs.python.org/3/tutorial/classes.html) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
