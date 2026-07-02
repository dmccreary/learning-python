---
title: JSON to Python Type Mapper
description: Edit JSON on the left and watch the Python objects it becomes on the right, with true/True, null/None, and every type pairing color-coded.
image: /sims/json-python-mapper/json-python-mapper.png
og:image: /sims/json-python-mapper/json-python-mapper.png
twitter:image: /sims/json-python-mapper/json-python-mapper.png
social:
   cards: false
quality_score: 95
---

# JSON to Python Type Mapper

<iframe src="main.html" height="442" width="100%" scrolling="no"></iframe>

[Run the JSON to Python Type Mapper MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

JSON looks deceptively like Python, so the differences (`true` vs `True`,
`null` vs `None`, double-quotes-only, no trailing commas) cause silent
confusion. This two-pane mapper makes the conversion visible: edit JSON on
the left and the Python object `json.loads()` would build re-renders live on
the right, with every type pairing color-coded and hover tooltips naming
both types. Two deliberately broken presets show the classic JSON mistakes
with friendly explanations instead of cryptic parser errors.

**Learning objective:** The student will be able to convert values between
JSON text and Python objects and identify the type mapping in each
direction.

- **Bloom's Taxonomy (2001):** Understand → Apply — *interpret, convert,
  classify*
- **Interaction pattern:** live two-pane editing with per-type color coding
- **Library:** custom HTML (no charting library needed)

## How to Use

1. Predict what `true` and `null` become, then check the **The tricky
   trio** preset.
2. Edit the left pane: add a new key, change a number to a decimal, nest a
   list — the right pane follows every keystroke.
3. Try both **Broken** presets and read the friendly explanation of why
   JSON refuses what Python would accept.
4. Hover the colored values on the right to read the type pairing.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/json-python-mapper/main.html"
        height="442px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 27 (Standard Library and JSON)

### Duration

10 minutes

### Prerequisites

- Dictionaries and lists (Chapters 15 and 21)
- json.loads() and json.dumps() (Chapter 27)

### Activities

1. **Trio drill** (3 min): Students write the Python equivalents of `true`,
   `false`, and `null` from memory, then verify with the preset.
2. **Build a record** (4 min): Students write JSON describing themselves
   (name, age, hobbies list) and confirm the Python types on the right.
3. **Bug hunt** (3 min): Using the broken presets, students state the one
   edit that fixes each error.

### Assessment

- Student converts a JSON snippet to its Python literal on paper
- Student can name the two JSON rules that Python does not share
- Student can explain why JSON keys are always strings

## References

1. [Python Documentation — json module](https://docs.python.org/3/library/json.html) — official documentation with the full conversion table
2. [json.org](https://www.json.org/json-en.html) — the JSON standard
