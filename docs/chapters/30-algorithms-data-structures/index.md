---
title: Algorithms and Data Structures
description: Explore stacks, queues, graphs, BFS, DFS, sorting algorithms, binary search, and Big-O complexity analysis
generated_by: claude skill chapter-content-generator
date: 2026-06-28 15:00:00
version: 0.09
---

# Algorithms and Data Structures

By the end of this lesson you'll be able to:

- Explain and implement a **stack** (LIFO) and a **queue** (FIFO)
- Represent a **graph** as an adjacency list and traverse it with **BFS** and **DFS**
- Implement **bubble sort**, **selection sort**, and **binary search**
- Describe Big-O notation and explain the time complexity of common operations

This chapter introduces the computer science fundamentals that power everything from search engines to game AI.

!!! mascot-welcome "Welcome to Chapter 30!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Data structures and algorithms are the heart of computer science.
    Every search, every recommendation, every route-planning app uses the ideas in this chapter.
    Let's unlock them! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Abstract Data Types

An **Abstract Data Type (ADT)** describes *what* a data structure does, not *how* it does it internally.
A stack, queue, and graph are ADTs — each defines operations like push, pop, enqueue, and dequeue.

## Stacks — LIFO

A **stack** is a Last In, First Out (LIFO) collection.
Think of a stack of plates — you can only add or remove from the top.

Two operations:
- **Push** — add to the top
- **Pop** — remove from the top

Python lists work perfectly as stacks:

```python
stack = []
stack.append("first")    # push
stack.append("second")   # push
stack.append("third")    # push
print(stack.pop())       # "third" — last in, first out
print(stack.pop())       # "second"
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below uses a stack to reverse a string.
    After pushing all characters and popping them, what order will they appear?
    Make your guess — then run it!

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab()">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle"></div>
  </div>
</div>
<script>
initCmLab('', `def reverse_string(s):
    stack = []
    for ch in s:
        stack.append(ch)   # push each character
    result = ""
    while stack:
        result += stack.pop()   # pop in reverse order
    return result

print(reverse_string("Hello"))
print(reverse_string("Python"))`);
</script>

## Queues — FIFO

A **queue** is a First In, First Out (FIFO) collection.
Think of a line at a lunch counter — the first person in line is the first to be served.

Two operations:
- **Enqueue** — add to the back
- **Dequeue** — remove from the front

Python's `collections.deque` is more efficient than a list for queues:

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-2"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-2')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-2')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-2"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-2"></div>
  </div>
</div>
<script>
initCmLab('-2', `from collections import deque

queue = deque()
queue.append("Alice")    # enqueue
queue.append("Bob")
queue.append("Carol")

print("Queue:", list(queue))
print("Served:", queue.popleft())   # dequeue — FIFO
print("Served:", queue.popleft())
print("Remaining:", list(queue))`);
</script>

## Graphs — Nodes and Edges

A **graph** is a set of **nodes** (also called vertices) connected by **edges**.
Graphs model social networks, road maps, the internet, and many more real-world systems.

An **adjacency list** represents a graph as a dictionary where each key is a node and the value is a list of its neighbors.

```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}
```

## Breadth-First Search (BFS)

**BFS** explores a graph level by level — all nodes at distance 1 first, then distance 2, and so on.
It uses a **queue** to keep track of which node to visit next.

BFS finds the **shortest path** in an unweighted graph.

Before the code, the key steps are:
1. Start at the source node; mark it as visited; enqueue it
2. While the queue is not empty: dequeue a node, process it, enqueue all unvisited neighbors

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-3"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-3')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-3')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-3"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-3"></div>
  </div>
</div>
<script>
initCmLab('-3', `from collections import deque

graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}

def bfs(graph, start):
    visited = set()
    queue   = deque([start])
    visited.add(start)
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order

print("BFS from A:", bfs(graph, "A"))`);
</script>

## Depth-First Search (DFS)

**DFS** explores as far as possible along each branch before backtracking.
It uses a **stack** (or recursion) to keep track of the path.

DFS does not guarantee the shortest path, but uses less memory than BFS for deep graphs.

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-4"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-4')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-4')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-4"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-4"></div>
  </div>
</div>
<script>
initCmLab('-4', `graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}

def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    result = [start]
    for neighbor in graph[start]:
        if neighbor not in visited:
            result += dfs(graph, neighbor, visited)
    return result

print("DFS from A:", dfs(graph, "A"))
print("BFS is level-by-level; DFS goes deep before backtracking.")`);
</script>

| | BFS | DFS |
|--|-----|-----|
| Data structure | Queue | Stack / recursion |
| Shortest path? | Yes (unweighted) | Not guaranteed |
| Memory | More (stores whole frontier) | Less (stores one path) |
| Best for | Shortest path, social networks | Exploring all paths, cycles |

### See It: The Queue and the Stack Drive Everything

The only difference between BFS and DFS is the row in that table's first line — which waiting node gets visited next. The explorer below shows the queue or stack **live** beside the graph while you step. Before you click, predict: **starting at A, which node does BFS visit third? Does DFS agree?**

<iframe src="../../sims/graph-traversal-explorer/main.html" height="537" width="100%" scrolling="no"></iframe>

[Explore the Graph Traversal Explorer MicroSim](../../sims/graph-traversal-explorer/index.md){ .md-button }

Step all the way through BFS and watch the ripple move level by level — then the final step reveals the payoff: following the parents backward gives the **shortest path** from A to the goal. Switch to DFS and step again: same graph, same start, completely different order, because the stack always grabs the *newest* discovery.

## Applying BFS: Finding a Path Through a Maze

A maze is just a graph — junctions and rooms are nodes, corridors are edges. BFS's queue already explores level by level, which means it can find the **shortest path**, not just answer "can I get there?" The trick is remembering **where you came from** at each step, so you can retrace your route once you reach the goal.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The maze below has two possible routes from "Start" to "Goal".
    Which rooms do you think the path will pass through — "A"/"C" or "B"/"D"? Make your guess — then run it!

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-7"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-7')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-7')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-7"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-7"></div>
  </div>
</div>
<script>
initCmLab('-7', `from collections import deque

maze = {
    "Start": ["A", "B"],
    "A": ["Start", "C"],
    "B": ["Start", "D"],
    "C": ["A", "Goal"],
    "D": ["B", "Goal"],
    "Goal": ["C", "D"]
}

def find_path(maze, start, goal):
    came_from = {start: None}   # remembers which room led to each room
    queue = deque([start])

    while queue:
        current = queue.popleft()
        if current == goal:
            break
        for neighbor in maze[current]:
            if neighbor not in came_from:
                came_from[neighbor] = current
                queue.append(neighbor)

    # Walk backwards from the goal to the start using came_from
    path = [goal]
    while path[-1] != start:
        path.append(came_from[path[-1]])
    path.reverse()
    return path

print("Path found:", find_path(maze, "Start", "Goal"))`);
</script>

Were you right? BFS discovers "A" and "B" at the same time, but "A" is listed first in `maze["Start"]`, so it's discovered first — the path goes through "A" and "C".

DFS could solve the same maze by following one corridor all the way before backtracking, but as the table above shows, it wouldn't guarantee the shortest route.

## Sorting Algorithms

### Bubble Sort

**Bubble sort** compares adjacent items and swaps them if they're in the wrong order.
Each pass "bubbles" the largest unsorted item to its correct position.
Time complexity: O(n²) — slow for large lists.

```python
def bubble_sort(lst):
    n = len(lst)
    for i in range(n):
        for j in range(n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return lst
```

### Selection Sort

**Selection sort** finds the smallest item and moves it to the front, then repeats for the remaining items.
Also O(n²) but makes fewer swaps than bubble sort.

### Insertion Sort

**Insertion sort** builds the sorted list one item at a time — like sorting playing cards in your hand.
O(n²) worst case but O(n) for nearly-sorted lists, making it fast in practice for small or nearly-sorted inputs.

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-5"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-5')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-5')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-5"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-5"></div>
  </div>
</div>
<script>
initCmLab('-5', `def bubble_sort(lst):
    lst = lst[:]   # work on a copy
    n = len(lst)
    for i in range(n):
        for j in range(n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return lst

def insertion_sort(lst):
    lst = lst[:]
    for i in range(1, len(lst)):
        key = lst[i]
        j = i - 1
        while j >= 0 and lst[j] > key:
            lst[j + 1] = lst[j]
            j -= 1
        lst[j + 1] = key
    return lst

data = [64, 34, 25, 12, 22, 11, 90]
print("Unsorted:", data)
print("Bubble:  ", bubble_sort(data))
print("Insertion:", insertion_sort(data))
print("Built-in:", sorted(data))`);
</script>

### See It: Sorting in Slow Motion

The code above shows *what* each sort computes; the comparer below shows *how they move*. Every sort is just compares and swaps in a different choreography. Before you click Step, predict: **for 10 reversed values, roughly how many comparisons will bubble sort need?**

<iframe src="../../sims/sorting-comparer/main.html" height="542" width="100%" scrolling="no"></iframe>

[Explore the Sorting Algorithm Comparer MicroSim](../../sims/sorting-comparer/index.md){ .md-button }

Step through each algorithm and watch its signature move: bubble sort's big values float right, selection sort hunts for the minimum, insertion sort slides each new value into place. Then pick **Race — Bubble vs Insertion**, switch the data to **nearly sorted**, and Auto-play: insertion sort demolishes bubble sort — the answer to "which sort is best?" is always *it depends on the data*.

## Binary Search

**Binary search** finds an item in a *sorted* list in O(log n) time — far faster than linear search.

The idea: repeatedly cut the search range in half.
1. Look at the middle item
2. If it matches — done!
3. If the target is smaller — search the left half
4. If the target is larger — search the right half

```python
def binary_search(sorted_list, target):
    lo, hi = 0, len(sorted_list) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if sorted_list[mid] == target:
            return mid
        elif sorted_list[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1   # not found
```

### See It: Linear vs Binary, Head to Head

The race below runs both searches on the same shelf of 31 boxes. Before you click Step, predict: **how many checks will each search need to find 24?** (Linear starts at the left; binary starts in the middle.)

<iframe src="../../sims/search-race/main.html" height="522" width="100%" scrolling="no"></iframe>

[Explore the Search Race MicroSim](../../sims/search-race/index.md){ .md-button }

Watch binary search throw away half the shelf with every check: 31 → 15 → 7 → 3 → 1. Then switch to the **shuffled shelf (trap!)** and search again — binary search can report NOT FOUND even when the target is sitting right there. Cutting the problem in half only works when the shelf is sorted, which is exactly why the function above is named `binary_search(sorted_list, ...)`.

## Big-O Notation — Time and Space Complexity

**Big-O notation** describes how an algorithm's running time grows with input size.

| Big-O | Name | Example |
|-------|------|---------|
| O(1) | Constant | Dictionary lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search, single loop |
| O(n log n) | Log-linear | Python's built-in `sorted()` |
| O(n²) | Quadratic | Bubble sort, nested loops |
| O(2ⁿ) | Exponential | Brute-force subset enumeration |

**Space complexity** describes how much memory an algorithm uses.
BFS uses O(n) memory because the queue can grow to hold all nodes.
DFS uses O(depth) memory — just the current path.

!!! mascot-tip "Why Big-O Matters"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    With 1,000 items: O(n²) = 1,000,000 operations; O(n log n) = ~10,000.
    That's 100× faster! For 1,000,000 items, the gap becomes 1,000,000× faster.
    Choosing the right algorithm is often more important than buying faster hardware.

## Learning Check

!!! mascot-thinking "Your Turn — Implement Binary Search"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below calls `binary_search` but the function body is missing!
    Implement it using the algorithm described above — repeatedly halve the search range.

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-6"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-6')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-6')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-6"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-6"></div>
  </div>
</div>
<script>
initCmLab('-6', `def binary_search(sorted_list, target):
    lo, hi = 0, len(sorted_list) - 1
    # Implement: while lo <= hi, check middle, adjust lo or hi
    # Return the index if found, -1 if not found
    return -1   # placeholder — replace with your implementation

data = sorted([34, 7, 23, 32, 5, 62, 12, 77])
print("Sorted data:", data)
print("Find 23:", binary_search(data, 23))
print("Find 99:", binary_search(data, 99))`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Modify the BFS function to also return the **distance** (number of hops) from the start to each node.
   **You'll know it worked when** each node is paired with its distance from "A".

2. Add a new node "G" to the graph connected to "D". Run BFS again and check that G appears.
   **You'll know it worked when** "G" is included in the BFS output.

3. Compare BFS and DFS starting from "C" instead of "A". Notice how the visit orders differ.
   **You'll know it worked when** both start at "C" and explore in clearly different patterns.

4. Implement selection sort: find the minimum in the unsorted portion and swap it to the front.
   **You'll know it worked when** `selection_sort([5, 3, 8, 1])` returns `[1, 3, 5, 8]`.

5. Test binary search on a list of 1,000,000 items. How many comparisons does it need?
   Add a counter inside the loop and print it.
   **You'll know it worked when** you see it takes at most 20 comparisons — O(log 1,000,000) ≈ 20!

!!! mascot-celebration "Computer Scientist!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've learned data structures and algorithms — the foundation of all efficient software!
    Stacks, queues, graphs, BFS, DFS, sorting, and Big-O are the tools professional developers think about every day.
    You're now thinking like a computer scientist. Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
