# Quiz: Algorithms and Data Structures

Test your understanding of stacks, queues, graphs, BFS, DFS, sorting, binary search, and Big-O notation with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does LIFO mean, and which data structure uses it?

<div class="upper-alpha" markdown>
1. Last In, First Out — used by a queue
2. List In, Front Out — used by a sorted array
3. Last In, First Out — used by a stack
4. Least-Item-First-Out — used by a priority queue
</div>

??? question "Show Answer"
    The correct answer is **C**. LIFO stands for "Last In, First Out." In a stack, the most recently added item is the first one removed — like a stack of plates where you always take from the top. Python lists work as stacks using `.append()` to push and `.pop()` to pop. Queues use FIFO (First In, First Out).

    **Concept Tested:** Stack (LIFO)

---

#### 2. What does FIFO mean, and which data structure uses it?

<div class="upper-alpha" markdown>
1. First In, First Out — used by a queue
2. First In, First Out — used by a stack
3. Files-In, Files-Out — used by file operations
4. Fastest Item First Out — used by a priority queue
</div>

??? question "Show Answer"
    The correct answer is **A**. FIFO stands for "First In, First Out." In a queue, the first item added is the first item removed — like a line at a lunch counter where the first person in line is served first. Python's `collections.deque` is the efficient way to implement a queue, using `.append()` to enqueue and `.popleft()` to dequeue.

    **Concept Tested:** Queue (FIFO)

---

#### 3. What data structure is used by BFS to decide which node to visit next?

<div class="upper-alpha" markdown>
1. A stack (LIFO)
2. A sorted list
3. A set (to prevent duplicates)
4. A queue (FIFO)
</div>

??? question "Show Answer"
    The correct answer is **D**. Breadth-First Search (BFS) uses a queue to track which nodes to visit next. Nodes are enqueued when they are discovered and dequeued in FIFO order — so BFS explores all nodes at distance 1 before any at distance 2, guaranteeing the shortest path in unweighted graphs. DFS, by contrast, uses a stack or recursion.

    **Concept Tested:** BFS

---

#### 4. What is an adjacency list used for?

<div class="upper-alpha" markdown>
1. Storing a sorted list of numbers efficiently
2. Representing a graph as a dictionary where each key is a node and the value is a list of its neighbors
3. Tracking which items have been visited in a set
4. Organizing dictionary keys in alphabetical order
</div>

??? question "Show Answer"
    The correct answer is **B**. An adjacency list represents a graph using a dictionary: each key is a node (vertex) and its value is a list of neighboring nodes (connected by edges). For example, `{"A": ["B", "C"], "B": ["A", "D"]}` means A connects to B and C, and B connects to A and D. This is memory-efficient for sparse graphs.

    **Concept Tested:** Graph and Adjacency List

---

#### 5. What is the key difference between BFS and DFS?

<div class="upper-alpha" markdown>
1. BFS uses recursion; DFS uses a loop
2. BFS explores level by level (shortest path first) using a queue; DFS explores as deep as possible along each branch using a stack or recursion
3. BFS only works on trees; DFS works on any graph
4. BFS is always faster than DFS
</div>

??? question "Show Answer"
    The correct answer is **B**. BFS (Breadth-First Search) explores neighbors level by level — all nodes at distance 1 first, then distance 2, guaranteeing the shortest path in an unweighted graph. It uses a queue. DFS (Depth-First Search) goes as far as possible down one path before backtracking, using a stack or recursion. DFS uses less memory for deep graphs but does not guarantee the shortest path.

    **Concept Tested:** BFS and DFS

---

#### 6. What does Big-O notation describe?

<div class="upper-alpha" markdown>
1. The exact number of seconds an algorithm will take to run
2. The amount of memory an algorithm uses in bytes
3. How an algorithm's time or space requirements grow as the input size increases
4. The number of lines of code in an algorithm
</div>

??? question "Show Answer"
    The correct answer is **C**. Big-O notation describes the growth rate of an algorithm's time or memory requirements as input size grows. For example, O(n) means time grows linearly — doubling the input doubles the time. O(n²) means time grows quadratically. It focuses on the dominant growth term and ignores constants, helping you compare algorithms independently of hardware speed.

    **Concept Tested:** Big-O Notation

---

#### 7. What is the time complexity of binary search on a sorted list of n items?

<div class="upper-alpha" markdown>
1. O(n) — checks every item
2. O(n²) — compares every pair
3. O(1) — always takes the same time
4. O(log n) — halves the search space with each step
</div>

??? question "Show Answer"
    The correct answer is **D**. Binary search works by repeatedly halving the search space. On each step, it checks the middle element: if it is too high, eliminate the upper half; if too low, eliminate the lower half. This gives O(log n) time — searching a million items takes about 20 steps (log₂(1,000,000) ≈ 20). Binary search requires the list to be sorted.

    **Concept Tested:** Binary Search

---

#### 8. How does bubble sort work?

<div class="upper-alpha" markdown>
1. It repeatedly picks the smallest remaining element and places it in its correct position
2. It divides the list in half, sorts each half, and merges them back together
3. It repeatedly steps through the list, comparing adjacent elements and swapping them if they are in the wrong order
4. It uses a hash table to count element frequencies and reconstruct the sorted order
</div>

??? question "Show Answer"
    The correct answer is **C**. Bubble sort makes repeated passes through the list, comparing adjacent pairs and swapping them if the left one is larger than the right. After each pass, the largest unsorted element has "bubbled up" to its correct position. Bubble sort is O(n²) — easy to understand but slow for large lists. Python's built-in `sorted()` and `.sort()` are much faster for real use.

    **Concept Tested:** Bubble Sort

---

#### 9. What must be true about a list for binary search to work?

<div class="upper-alpha" markdown>
1. The list must contain only integers
2. The list must have an even number of elements
3. The list must already be sorted in order
4. The list must have no duplicate values
</div>

??? question "Show Answer"
    The correct answer is **C**. Binary search relies on the fact that the list is sorted. It compares the target to the middle element and decides which half to search next. If the list were unsorted, eliminating half the elements would be invalid — the target could be in either half. Binary search on an unsorted list produces incorrect results.

    **Concept Tested:** Binary Search

---

#### 10. Which data structure is most appropriate for tracking browser history where the back button takes you to the most recently visited page?

<div class="upper-alpha" markdown>
1. A queue (FIFO)
2. A stack (LIFO)
3. A sorted list
4. A graph
</div>

??? question "Show Answer"
    The correct answer is **B**. Browser history is a classic stack use case. When you visit a new page, it is pushed onto the stack. When you click Back, the most recent page is popped off — Last In, First Out (LIFO). A queue would give you the oldest page first (wrong direction). A graph could model navigation between pages, but a stack is specifically what models the Back button.

    **Concept Tested:** Stack (LIFO)

---
