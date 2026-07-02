---
title: Inheritance Explorer
description: Click a method call and watch the lookup climb the class tree until a match highlights - overridden parent methods show as shadowed, and super() hops up explicitly.
image: /sims/inheritance-explorer/inheritance-explorer.png
og:image: /sims/inheritance-explorer/inheritance-explorer.png
twitter:image: /sims/inheritance-explorer/inheritance-explorer.png
social:
   cards: false
quality_score: 95
---

# Inheritance Explorer

<iframe src="main.html" height="507" width="100%" scrolling="no"></iframe>

[Run the Inheritance Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

When you call a method on an object, Python performs an invisible search:
look on the object's own class first, then climb parent by parent. This
explorer makes the dispatch visible. The class tree (`Animal` with children
`Dog` and `Cat`, and an instance `d` below Dog) is a live diagram; each call
button animates the lookup hop by hop with a plain-language log. `d.eat()`
misses on Dog and climbs to Animal (inheritance); `d.speak()` stops at Dog
while Animal's copy is marked *shadowed* (overriding); the `super()` preset
shows a child deliberately hopping up to run the parent's version too.

**Learning objective:** The student will be able to determine which class's
method runs when a method is called on a subclass instance.

- **Bloom's Taxonomy (2001):** Analyze — *attribute, organize,
  differentiate*
- **Interaction pattern:** click-a-call lookup animation with a hop-by-hop
  log
- **Library:** vis-network (class hierarchy as nodes and edges; mouse
  zoom/pan disabled, navigation buttons enabled)

## How to Use

1. Predict where each of the three methods lives, then click **d.fetch()**,
   **d.speak()**, and **d.eat()** and follow the highlights.
2. Notice `d.eat()` needs an extra hop — Dog never defines `eat()`, it
   inherits it.
3. After `d.speak()`, look at the Animal box: its `speak()` is marked
   shadowed. The parent's version never ran.
4. Click the **super()** button to see how a child can run the parent's
   method on purpose.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/inheritance-explorer/main.html"
        height="507px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 25 (Object-Oriented Programming)

### Duration

10 minutes

### Prerequisites

- Classes, instances, and self (Chapter 25; Object Instance Inspector MicroSim)

### Activities

1. **Predict the hops** (4 min): For each of the three calls, students write
   how many hops the lookup will take before clicking.
2. **Override vs inherit** (3 min): Students explain in one sentence why
   `d.speak()` and `d.eat()` end in different classes.
3. **super() discussion** (3 min): "When would a child want to run the
   parent's version too?" (Example: adding to a parent's greeting.)

### Assessment

- Student can trace which class answers any method call on a Dog instance
- Student can define overriding and inheritance using the tree
- Student can explain what super() changes about the lookup

## References

1. [Python Tutorial — Inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance) — official documentation
2. [vis-network](https://visjs.github.io/vis-network/docs/network/) — the network library used to build this MicroSim
