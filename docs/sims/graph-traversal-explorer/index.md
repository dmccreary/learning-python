---
title: Graph Traversal Explorer
description: Step BFS and DFS over the same graph, watching nodes light up in visit order while the live queue or stack that drives each algorithm is shown beside the graph.
image: /sims/graph-traversal-explorer/graph-traversal-explorer.png
og:image: /sims/graph-traversal-explorer/graph-traversal-explorer.png
twitter:image: /sims/graph-traversal-explorer/graph-traversal-explorer.png
social:
   cards: false
quality_score: 95
---

# Graph Traversal Explorer

<iframe src="main.html" height="537" width="100%" scrolling="no"></iframe>

[Run the Graph Traversal Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

BFS's level-by-level ripple and DFS's deep dive differ for exactly one
reason: the data structure holding the frontier. This explorer keeps that
structure on screen — the live **queue** (BFS) or **stack** (DFS) updates
after every Step, and each visited node gets its visit number stamped on it.
After BFS completes, the final step highlights the shortest path from start
A to goal J, the classic "why BFS" payoff; DFS on the same graph produces a
completely different order because the stack always grabs the newest
discovery. The start node is fixed at A so the two traversals stay directly
comparable.

**Learning objective:** The student will be able to trace the visit order of
BFS and DFS on the same graph and attribute the difference to the queue
versus the stack.

- **Bloom's Taxonomy (2001):** Analyze — *differentiate, organize, trace*
- **Interaction pattern:** step-through with the frontier data structure
  shown live
- **Library:** vis-network (mouse zoom/pan disabled, navigation buttons
  enabled)

## How to Use

1. In BFS mode, predict the first four visits, then Step and check the
   queue after each one.
2. Step to the end — the final click reveals the shortest path from A to J.
3. Switch to DFS and step again: same graph, same start. Where do the two
   orders first disagree, and which frontier entry explains it?
4. Watch node E in BFS: it gets visited but discovers "nothing new" —
   everything around it was already found.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/graph-traversal-explorer/main.html"
        height="537px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 30 (Algorithms and Data Structures); reinforces the maze content in the intermediate section

### Duration

15 minutes

### Prerequisites

- Stacks and queues (Chapter 16 and the Stack and Queue Simulator)
- Graphs as nodes and edges (Chapter 30)

### Activities

1. **Predict the ripple** (5 min): Students write BFS's expected visit
   order for the whole graph, then verify step by step.
2. **First disagreement** (4 min): Students find the first step where DFS's
   order differs from BFS's and explain it using the frontier panel.
3. **Shortest path** (4 min): After the BFS payoff step, students trace the
   highlighted path and explain why level-by-level exploration guarantees
   it is shortest.

### Assessment

- Student can produce the BFS visit order for a small new graph by hand
- Student can state which data structure produces which traversal
- Student can explain why BFS finds shortest paths and DFS may not

## References

1. [Wikipedia — Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) — the algorithm and its properties
2. [vis-network](https://visjs.github.io/vis-network/docs/network/) — the network library used to build this MicroSim
