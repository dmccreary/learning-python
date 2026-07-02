---
title: Stack and Queue Simulator
description: Feed the same items into a stack of plates and a waiting line, then remove them and compare the LIFO and FIFO orders side by side.
image: /sims/stack-queue-simulator/stack-queue-simulator.png
og:image: /sims/stack-queue-simulator/stack-queue-simulator.png
twitter:image: /sims/stack-queue-simulator/stack-queue-simulator.png
social:
   cards: false
quality_score: 93
---

# Stack and Queue Simulator

<iframe src="main.html" height="512" width="100%" scrolling="no"></iframe>

[Run the Stack and Queue Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

LIFO versus FIFO is a difference in *time order*, which code output alone
cannot show. This simulator makes it a controlled experiment: one Add button
feeds the identical item to both structures, so the only difference students
see is the exit. `stack.pop()` lifts the newest plate off the top;
`queue.pop(0)` releases the oldest item from the front. The removal-history
strips give the punchline — the stack returns items reversed, the queue in
original order.

**Learning objective:** The student will be able to predict the removal order
of items from a stack versus a queue and match each to its list operations.

- **Bloom's Taxonomy (2001):** Understand → Apply — *compare, demonstrate,
  predict*
- **Interaction pattern:** button-driven push/pop with a side-by-side
  controlled comparison

## How to Use

1. Click **Add Item** four times — the same letters join both structures.
2. Predict which letter each Remove button will release, then click and
   check the operation line.
3. Empty both structures and read the two history strips: reversed versus
   original order.
4. Note the code: both use `append()` to add; only the removal differs.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/stack-queue-simulator/main.html"
        height="512px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 16 (Lists — Methods and Patterns); revisited in Chapter 30

### Duration

10 minutes

### Prerequisites

- List append() and pop() (Chapter 16)

### Activities

1. **Controlled experiment** (4 min): Add A-D, predict both first exits,
   remove one from each, verify.
2. **History race** (3 min): Empty both structures; students write the two
   history orders and name the patterns (LIFO/FIFO).
3. **Real-world match** (3 min): Students match scenarios to structures:
   undo button (stack), print queue (queue), browser back button (stack),
   lunch line (queue).

### Assessment

- Student predicts the removal order for both structures after any sequence of adds
- Student can state which list method makes a stack vs a queue
- Student names one real-world example of each

## References

1. [Python Tutorial — Using Lists as Stacks and Queues](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks) — official documentation
2. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
