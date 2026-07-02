---
title: Dictionary Key Lookup
description: Type a key and watch the matching drawer spring open - or hit a KeyError - then race a dictionary against a list to feel why dict lookup is one hop.
image: /sims/dictionary-key-lookup/dictionary-key-lookup.png
og:image: /sims/dictionary-key-lookup/dictionary-key-lookup.png
twitter:image: /sims/dictionary-key-lookup/dictionary-key-lookup.png
social:
   cards: false
quality_score: 93
---

# Dictionary Key Lookup

<iframe src="main.html" height="532" width="100%" scrolling="no"></iframe>

[Run the Dictionary Key Lookup MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Why is dictionary lookup instant, and why does a missing key crash? This sim
draws the dictionary as a cabinet of drawers with keys written on the fronts.
A typed key springs the matching drawer open in "one hop"; a missing key
shows the real `KeyError` banner — or, with the `.get()` toggle, a polite
`None`. The comparison mode puts the same data in a list and counts how many
items must be checked one by one, planting the efficiency seed without any
hash-table jargon.

**Learning objective:** The student will be able to explain how a dictionary
finds a value from a key and why a missing key raises KeyError while `.get()`
does not.

- **Bloom's Taxonomy (2001):** Understand — *explain, compare, infer*
- **Interaction pattern:** type-a-key lookup with a list-vs-dict comparison
  mode

## How to Use

1. Look up `grace` — the drawer opens in one hop.
2. Try `Grace` with a capital G: keys must match exactly, so you get a
   `KeyError`.
3. Check **use .get()** and repeat: `None` instead of a crash.
4. Check **compare with a list search** and look up `guido` (the last
   drawer): the list checks all five items; the dictionary still takes one
   hop.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/dictionary-key-lookup/main.html"
        height="532px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 21 (Dictionaries)

### Duration

10 minutes

### Prerequisites

- Creating dictionaries and accessing values by key (Chapter 21 opening sections)
- Lists and the in operator (Chapters 15-16)

### Activities

1. **Exact-match drill** (3 min): Students predict the outcome for `grace`,
   `Grace`, and `gracie`, then test all three.
2. **Crash vs None** (3 min): Same missing key with brackets and with
   .get(); students write one sentence on when they would choose each.
3. **The race** (4 min): With comparison on, students look up the first,
   middle, and last keys and record the list's check counts vs the dict's.

### Assessment

- Student can explain why `phone_book["Grace"]` fails when the key is `"grace"`
- Student can state what `.get()` returns for a missing key
- Student can explain why dictionaries are faster than lists for lookups

## References

1. [Python Tutorial — Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
