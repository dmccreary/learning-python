---
title: MicroSim Ideas for Beginning Python
description: A prioritized, Bloom-classified list of proposed MicroSims for the Beginning Python textbook, with an implementation plan for each.
status: draft-for-review
---
# MicroSim Ideas for Beginning Python

**Status: Draft for review — no sims have been generated yet.**

This document was produced by scanning all 38 chapters in `docs/chapters/`, the
17 Python labs, the learning graph, and the turtle graphics gallery. Every
chapter already has strong Skulpt/CodeMirror "see it, run it, modify it" labs,
so these proposals deliberately avoid duplicating what a run-the-code lab
already does well. Instead, each proposed MicroSim targets **invisible
machinery** — the mental models (memory, control flow, the call stack, hash
lookup, convolution) that students cannot see in program output alone.

## Design Ground Rules

All proposals follow the `microsim-generator` skill conventions:

- **Directory:** `docs/sims/<sim-id>/` with `main.html`, `<sim-id>.js`,
  `index.md`, and `metadata.json` (scaffolded by `generate-sim-scaffold.py`)
- **Library routing** follows the generator's routing table (p5.js for custom
  simulations, Chart.js for charts, Plotly for f(x) plots, vis-network for
  node/edge graphs, custom HTML for Venn and table sims)
- **Interaction pattern matches the Bloom level** (generator Step 3.2):
  Understand-level sims use **step-through** (Next/Previous buttons, concrete
  data visible), never continuous animation; Apply-level sims use **parameter
  sliders with immediate feedback**; Analyze-level sims use **comparison and
  exploration tools**; Create-level sims use **builders and canvases**
- Every `.js` file declares `// CANVAS_HEIGHT: <n>` in its first 10 lines;
  iframe height = CANVAS_HEIGHT + 2; iframes are relative-path,
  `scrolling="no"`, no `style` attribute
- Audience is ages 10–14: one concept per sim, large touch-friendly controls,
  no jargon in labels

### Revised (2001) Bloom's Taxonomy Quick Reference

| Level | Cognitive Process | Typical Verbs |
|-------|-------------------|---------------|
| 1. Remember | Retrieve knowledge | recognize, recall, list, identify, name |
| 2. Understand | Construct meaning | explain, interpret, classify, summarize, infer, compare, predict, exemplify |
| 3. Apply | Carry out a procedure | execute, implement, use, demonstrate, solve |
| 4. Analyze | Break into parts, relate | differentiate, organize, attribute, contrast, debug, deconstruct |
| 5. Evaluate | Judge against criteria | check, critique, judge, justify, defend, test |
| 6. Create | Assemble something new | generate, plan, design, produce, construct, compose |

## Priority Summary

| Tier | Focus | Sims | Rationale |
|------|-------|------|-----------|
| 1 | Core mental models (Ch 1–10) | 11 | The book's foundation; misconceptions formed here persist for years |
| 2 | Data and functions (Ch 11–20) | 9 | Indexing, scope, and collections are the top sources of beginner bugs |
| 3 | Intermediate CS (Ch 21–30) | 10 | Call stack, hashing, and algorithms are classic "must-visualize" topics |
| 4 | Advanced topics (Ch 31–38) | 6 | Smaller audience reaches these chapters; still high value per sim |

---

## Tier 1 — Core Mental Models (Chapters 1–10)

### 1. Code Stepper (`code-stepper`)

- **Chapter:** 1–2 (Welcome to Python; Python Code Structure)
- **Concept and gap:** Students run whole programs and see only final output.
  They never see the interpreter walking the code top to bottom, one line at
  a time — the single most fundamental mental model in programming.
- **Bloom (2001):** Understand — *explain, predict, trace*
- **Learning objective:** The student will be able to predict which line of a
  short Python program executes next and explain that Python runs statements
  in order, top to bottom.
- **Library:** p5.js (custom step-through simulation)
- **Interaction pattern:** Step-through with Next / Previous / Reset buttons
  (no continuous animation — this is an Understand-level objective)
- **Implementation plan:**
    - Left panel: a fixed 6–8 line program (print statements, a variable, a
      comment) with the current line highlighted by a moving arrow
    - Right panel: the output console that grows one line per step, plus a
      small "skipped — it's a comment" callout when the arrow passes a comment
    - Dropdown to swap among 3 preset programs of increasing trickiness
    - Buttons: Next Step, Previous Step, Reset; step counter display
    - Estimated `CANVAS_HEIGHT: 460` (400 draw + 60 controls)

### 2. Variable Memory Model (`variable-memory-model`)

- **Chapter:** 3 (Variables and Numbers)
- **Concept and gap:** `score = 10` is invisible magic. The sticky-note
  metaphor is described in prose but never shown operating. Reassignment
  ("the old value is replaced") is a common misconception point.
- **Bloom (2001):** Understand — *explain, interpret, predict*
- **Learning objective:** The student will be able to explain what happens in
  memory when a variable is created, read, and reassigned.
- **Library:** p5.js
- **Interaction pattern:** Step-through of a short assignment script; labeled
  memory boxes update per step
- **Implementation plan:**
    - Top: 5-line script (`score = 10`, `lives = 3`, `score = score + 5`, …)
      with current-line highlight
    - Bottom: named memory boxes; on reassignment the old value visibly pops
      out and the new value drops in; reads draw an arrow from box to
      expression
    - Prediction prompt before the `score = score + 5` step: "What will the
      box hold?" with a 3-choice click check
    - Buttons: Next, Reset; preset selector (numbers, strings, mixed)
    - Estimated `CANVAS_HEIGHT: 480`

### 3. Function Call Flow (`function-call-flow`)

- **Chapter:** 4 (Functions and Objects), reused in 11
- **Concept and gap:** Students cannot see the argument → parameter binding,
  the jump into the function body, or the return value flowing back. "Why
  doesn't `def` run my code?" is the #1 question in this chapter.
- **Bloom (2001):** Understand — *explain, trace, infer*
- **Learning objective:** The student will be able to trace a function call,
  explaining how the argument value binds to the parameter and how the return
  value replaces the call site.
- **Library:** p5.js
- **Interaction pattern:** Step-through with data-flow arrows (per generator
  guidance: concrete data visibility, not particle effects)
- **Implementation plan:**
    - Program panel showing a `def double(n): return n * 2` plus two calls;
      define phase renders the function as a labeled "machine" box that is
      stored but not run
    - On call steps, animate-by-step: argument `5` travels into parameter slot
      `n`, body computes, `10` travels back to the call site and replaces it
    - Show the same function called twice with different arguments to
      reinforce reusability
    - Buttons: Next, Previous, Reset
    - Estimated `CANVAS_HEIGHT: 500`

### 4. Turtle State Inspector (`turtle-state-inspector`)

- **Chapter:** 5 (Drawing with Turtle Graphics), reused in 7 and 18
- **Concept and gap:** Students command the turtle but never see its internal
  state: (x, y) position, heading angle, pen up/down. Without a heading model,
  `t.right(90)` is memorized, not understood.
- **Bloom (2001):** Understand → Apply — *interpret, predict, demonstrate*
- **Learning objective:** The student will be able to predict the turtle's
  position and heading after each command and demonstrate how heading changes
  produce shapes.
- **Library:** p5.js
- **Interaction pattern:** Step-through of a command list plus a live state
  dashboard
- **Implementation plan:**
    - Main canvas: coordinate grid with origin crosshair, turtle drawn as a
      triangle with a heading vector arrow
    - Side dashboard: live x, y, heading (compass dial), pen state (up/down
      icon), pen color swatch — updated each step
    - Command list (e.g., the classic square) stepped with Next; the executed
      command highlights and the dashboard values flash when they change
    - Preset selector: square, triangle, star, penup/pendown demo
    - Estimated `CANVAS_HEIGHT: 520`

### 5. Expression Evaluator (`expression-evaluator`)

- **Chapter:** 6 (Math and Arithmetic)
- **Concept and gap:** Order of operations is shown as a static table.
  Students need to see `2 + 3 * 4` collapse in the right order, step by step.
- **Bloom (2001):** Understand → Apply — *interpret, execute, predict*
- **Learning objective:** The student will be able to evaluate an arithmetic
  expression in the same order Python does, one operation at a time.
- **Library:** p5.js
- **Interaction pattern:** Step-through evaluation with predict-first option
- **Implementation plan:**
    - Large expression rendered center-canvas; each Next click highlights the
      next operation to run (color-coded by precedence) and collapses it to
      its value
    - "Show parentheses" toggle that draws implied grouping before stepping
    - Preset expressions covering `**`, `//`, `%`, and parentheses; plus a
      "your turn" input box (digits and operators only) that evaluates the
      student's own expression
    - Estimated `CANVAS_HEIGHT: 420`

### 6. Modulo Clock (`modulo-clock`)

- **Chapter:** 6 (Math and Arithmetic)
- **Concept and gap:** `10 % 3` as "the leftover" is abstract; modulo's real
  power (cycling, even/odd) needs a wrap-around visual.
- **Bloom (2001):** Understand → Apply — *explain, use, demonstrate*
- **Learning objective:** The student will be able to explain the remainder as
  wrap-around counting and use `%` to test even/odd and cycle through values.
- **Library:** p5.js
- **Interaction pattern:** Two sliders with immediate visual feedback
  (Apply-level: real-time response is appropriate)
- **Implementation plan:**
    - Circular dial with `divisor` tick marks; a token hops around the dial
      `dividend` times and lands on the remainder
    - Sliders: dividend (0–60), divisor (2–12); readout shows
      `17 % 5 = 2` updating live, plus the grouping view (17 dots grouped
      into rows of 5 with 2 left over)
    - "Even/odd tester" mini-mode using divisor locked at 2
    - Estimated `CANVAS_HEIGHT: 470`

### 7. For-Loop Stepper (`for-loop-stepper`)

- **Chapter:** 7 (For Loops and Drawing Shapes)
- **Concept and gap:** The loop-trip table in prose is static. Students need to
  watch `i` change, the body re-execute, and — crucially for this book — the
  turtle draw one square side per trip.
- **Bloom (2001):** Understand — *trace, explain, predict*
- **Learning objective:** The student will be able to trace a `for` loop,
  stating the value of the loop variable on each trip and predicting the total
  number of repetitions.
- **Bloom stretch:** an accumulator preset (`total += i`) raises it toward
  Apply.
- **Library:** p5.js
- **Interaction pattern:** Step-through; each click advances one statement
  (not one full trip) so the back-to-the-top jump is visible
- **Implementation plan:**
    - Left: `for i in range(4):` + 2-line body with execution arrow; `i` badge
      showing current value; trip counter ("Trip 2 of 4")
    - Right: mini turtle canvas drawing one side per trip — connects directly
      to the chapter's square lab
    - Preset selector: draw square, print countdown, accumulator (running
      total shown as a growing bar)
    - Buttons: Next, Auto-play (slow, pausable), Reset
    - Estimated `CANVAS_HEIGHT: 500`

### 8. Range Explorer (`range-explorer`)

- **Chapter:** 7 (For Loops and Drawing Shapes)
- **Concept and gap:** `range(start, stop, step)` off-by-one confusion ("why
  is stop not included?") is the top bug source in loop chapters.
- **Bloom (2001):** Apply — *use, execute, solve*
- **Learning objective:** The student will be able to choose start, stop, and
  step values that produce a desired sequence of numbers.
- **Library:** p5.js
- **Interaction pattern:** Three sliders with immediate feedback plus
  challenge mode
- **Implementation plan:**
    - Number line 0–20 with generated values lit up as filled dots; `stop`
      rendered as a hollow "not included" dot
    - Sliders: start (0–10), stop (1–20), step (1–5, plus negative toggle)
    - Live code readout `range(2, 12, 3)` → `[2, 5, 8, 11]`
    - Challenge mode: "light up 3, 6, 9" — student sets sliders, checks answer
    - Estimated `CANVAS_HEIGHT: 440`

### 9. Control Flow Explorer (`control-flow-explorer`)

- **Chapter:** 9 (Making Decisions with If/Else)
- **Concept and gap:** Students know each branch's output but never see that
  exactly one path lights up and the others are skipped, especially in
  `elif` chains.
- **Bloom (2001):** Understand → Analyze — *predict, trace, differentiate*
- **Learning objective:** The student will be able to predict which branch of
  an if/elif/else chain executes for a given input and explain why later
  branches are skipped.
- **Library:** p5.js (interactive path highlighting driven by a slider —
  Mermaid was considered per the flowchart routing rule, but the sim needs
  input-driven live re-highlighting, which Mermaid does not support)
- **Interaction pattern:** Slider input + highlighted flowchart path;
  step-through option for the condition checks
- **Implementation plan:**
    - Flowchart of a grade program (`if score >= 90 … elif … else`) drawn on
      canvas; diamond nodes for conditions, rectangles for actions
    - Slider: score 0–100; the taken path glows green, skipped branches dim;
      condition diamonds show True/False verdicts in order
    - Step mode: watch conditions checked one at a time top-down —
      demonstrates that the first True wins
    - Preset selector: simple if, if/else, elif chain, nested if
    - Estimated `CANVAS_HEIGHT: 540`

### 10. Boolean Logic Lab (`boolean-logic-lab`)

- **Chapter:** 9 and 19 (Booleans and Conditionals)
- **Concept and gap:** Truth tables are memorized, not understood; and
  short-circuit evaluation (Ch 19) is completely invisible in code.
- **Bloom (2001):** Understand → Apply — *classify, explain, demonstrate*
- **Learning objective:** The student will be able to determine the result of
  `and`, `or`, and `not` expressions and explain when Python skips evaluating
  the second operand.
- **Library:** p5.js
- **Interaction pattern:** Toggle switches with immediate feedback plus a
  step-through short-circuit mode
- **Implementation plan:**
    - Two large True/False toggle switches feeding an operator block
      (`and` / `or` / `not` selector); result lamp lights green/red instantly
    - Short-circuit mode: step through `a and b` — when `a` is False, the `b`
      switch grays out with a "Python never looked here" badge
    - Truthiness bonus panel: type or pick a value (`0`, `""`, `[]`, `"hi"`,
      `42`) and see its `bool()` verdict — covers the Ch 19 falsy table
    - Estimated `CANVAS_HEIGHT: 480`

### 11. While-Loop Stepper (`while-loop-stepper`)

- **Chapter:** 10 (While Loops and Animation)
- **Concept and gap:** The check-condition → run-body → check-again rhythm is
  invisible, and students can't safely experience an infinite loop in Skulpt.
- **Bloom (2001):** Understand → Analyze — *trace, predict, debug*
- **Learning objective:** The student will be able to trace a while loop's
  condition checks and identify why a loop terminates — or never does.
- **Library:** p5.js
- **Interaction pattern:** Step-through with an explicit condition-check stage;
  sandboxed infinite-loop demo
- **Implementation plan:**
    - Countdown program (`while count > 0:`) with the execution arrow visiting
      the condition line before every trip; condition verdict (True/False)
      stamped each visit; `count` memory box updates live
    - "Break the loop" toggle: remove the `count -= 1` line and step — a trip
      odometer spins up with a warning banner ("this would run forever"),
      capped at 50 trips for safety
    - Buttons: Next, Reset; preset selector (countdown, wait-for-password,
      infinite-bug)
    - Estimated `CANVAS_HEIGHT: 500`

---

## Tier 2 — Data and Functions (Chapters 11–20)

### 12. Scope Inspector (`scope-inspector`)

- **Chapter:** 11 (Functions, Parameters, and Scope)
- **Concept and gap:** Local vs global scope and shadowing are the most
  abstract ideas in the first half of the book — variables "living" in
  invisible rooms.
- **Bloom (2001):** Analyze — *differentiate, attribute, debug*
- **Learning objective:** The student will be able to determine which variable
  a name refers to at any line, differentiating local, global, and shadowed
  variables.
- **Library:** p5.js
- **Interaction pattern:** Step-through with nested scope boxes (frames)
- **Implementation plan:**
    - Program with a global `score` and a function that creates a local
      `score`; canvas draws a large "Global" room and, during the call, a
      "Function" room that appears and later vanishes with its variables
    - Name-lookup arrows: when a line reads `score`, an arrow probes the local
      room first, then the global room — shadowing becomes literally visible
    - Presets: read-only global, shadowing bug, `global` keyword fix
    - Buttons: Next, Reset
    - Estimated `CANVAS_HEIGHT: 520`

### 13. RGB Color Mixer (`rgb-color-mixer`)

- **Chapter:** 12 (Colors, Fill, and Turtle Art)
- **Concept and gap:** Hex strings like `"#FF6B35"` look like magic spells;
  the RGB→hex mapping needs live manipulation.
- **Bloom (2001):** Apply — *use, demonstrate, solve*
- **Learning objective:** The student will be able to produce a target color
  by adjusting red, green, and blue values and read/write its hex code.
- **Library:** p5.js
- **Interaction pattern:** Three sliders with immediate feedback plus
  match-the-color challenge
- **Implementation plan:**
    - Large color swatch; R, G, B sliders (0–255) colored to match channel;
      live readouts in decimal and hex with the changing hex pair highlighted
    - "Match this color" challenge mode: target swatch appears, student mixes,
      proximity meter gives feedback
    - Copy-ready output line: `t.pencolor("#3FA7D6")` to paste into any
      chapter lab
    - Estimated `CANVAS_HEIGHT: 460`

### 14. String Slicer (`string-slicer`)

- **Chapter:** 14 (String Methods and Formatting), foundations in 8
- **Concept and gap:** Index positions (starting at 0, negative indices) and
  the end-exclusive slice boundary cause endless off-by-one bugs.
- **Bloom (2001):** Apply — *use, execute, solve*
- **Learning objective:** The student will be able to write index and slice
  expressions that extract a desired substring.
- **Library:** p5.js
- **Interaction pattern:** Direct manipulation (drag slice handles) with live
  notation readout
- **Implementation plan:**
    - The string `"PYTHON ROCKS"` in large letter tiles with positive indices
      above and negative below each tile
    - Two draggable bracket handles select a range; selected tiles highlight;
      readout shows `word[2:7]` → `"THON "` live; step slider (1–3) adds the
      third slice argument
    - Click a single tile for index mode (`word[3]` → `"H"`)
    - Challenge mode: "extract ROCKS" — student drags handles, checks answer
    - Text input to try their own word (12-char max)
    - Estimated `CANVAS_HEIGHT: 450`

### 15. List Index Explorer (`list-index-explorer`)

- **Chapter:** 15–16 (Lists)
- **Concept and gap:** Same off-by-one trap as strings, plus mutation: lists
  change in place (`append`, `pop`, `insert`) and students never see the
  boxes shift.
- **Bloom (2001):** Apply → Analyze — *use, demonstrate, differentiate*
- **Learning objective:** The student will be able to select items by positive
  and negative index and demonstrate how append, insert, pop, and remove
  reshape a list in place.
- **Library:** p5.js
- **Interaction pattern:** Button-driven operations with one-step-at-a-time
  visual updates
- **Implementation plan:**
    - A list of colored boxes with dual index labels (0,1,2… and −1,−2,…);
      indices visibly renumber whenever the list changes
    - Operation buttons: append, insert-at, pop, remove-by-value, each showing
      the equivalent code line (`colors.append("purple")`) as it runs; boxes
      slide to make room or close a gap
    - Contrast panel: try the same "change item 0" on a string → blocked with
      the actual `TypeError` text (covers mutable vs immutable)
    - Estimated `CANVAS_HEIGHT: 480`

### 16. Stack and Queue Simulator (`stack-queue-simulator`)

- **Chapter:** 16 (Lists — Methods and Patterns), reused heavily in 30
- **Concept and gap:** LIFO vs FIFO ordering is temporal and spatial; code
  output alone can't show why the pop order differs.
- **Bloom (2001):** Understand → Apply — *compare, demonstrate, predict*
- **Learning objective:** The student will be able to predict the removal
  order of items from a stack versus a queue and match each to its list
  operations.
- **Library:** p5.js
- **Interaction pattern:** Button-driven push/pop with side-by-side comparison
- **Implementation plan:**
    - Split canvas: stack of plates (vertical) vs waiting line (horizontal),
      fed by the same "Add item" button so the contrast is controlled
    - Buttons: Add, Remove (stack pops top / queue leaves from front), with
      the list-method equivalent shown (`stack.pop()` vs `queue.pop(0)`)
    - Prediction chip before each Remove: "which item leaves?" click-to-guess
    - Removal history strips under each structure to compare final orders
    - Estimated `CANVAS_HEIGHT: 520`

### 17. Dice Roll Histogram (`dice-roll-histogram`)

- **Chapter:** 17 (Modules and Random Numbers)
- **Concept and gap:** One `randint()` call looks like pure chaos; the uniform
  distribution only emerges over many trials — impossible to see in a
  10-line lab.
- **Bloom (2001):** Analyze — *organize, compare, attribute*
- **Learning objective:** The student will be able to analyze how the
  distribution of random rolls flattens as the number of trials grows, and
  contrast one die with the sum of two dice.
- **Library:** Chart.js (routing: chart/bar/statistics) with button controls
- **Interaction pattern:** Experiment runner — student triggers batches and
  compares outcomes
- **Implementation plan:**
    - Bar chart of counts for faces 1–6; buttons: Roll 1, Roll 100, Roll 1000,
      Reset; running total and per-face percentage labels
    - Mode toggle: one die (flat) vs sum of two dice (triangle around 7) —
      a genuinely surprising discovery moment
    - Optional seed checkbox demonstrating reproducible "random" sequences
      (ties to `random.seed()` in the chapter)
    - Estimated `CANVAS_HEIGHT: 505`

### 18. Sine Wave Explorer (`sine-wave-explorer`)

- **Chapter:** 18 (Math Module and Turtle Projects)
- **Concept and gap:** The chapter's sine-wave turtle project works, but
  students must edit-and-rerun code to feel amplitude and frequency; sliders
  give the tight feedback loop.
- **Bloom (2001):** Apply — *demonstrate, use, solve*
- **Learning objective:** The student will be able to demonstrate how
  amplitude, frequency, and phase each change the shape of a sine wave.
- **Library:** Plotly.js (routing: mathematical function f(x))
- **Interaction pattern:** Parameter sliders with immediate re-plot
- **Implementation plan:**
    - Plot of `y = A * sin(f * x + p)` over 0–4π; sliders for amplitude
      (0.5–3), frequency (0.5–4), phase (0–2π)
    - Live annotation of the equation with current values substituted
    - "Ghost" checkbox keeps the previous curve dimmed for comparison
    - Estimated `CANVAS_HEIGHT: 475`

### 19. Unit Circle: Degrees and Radians (`unit-circle-radians`)

- **Chapter:** 18 (Math Module and Turtle Projects)
- **Concept and gap:** `math.sin()` wants radians; students only know degrees
  from turtle turns. The conversion needs a spatial anchor.
- **Bloom (2001):** Understand → Apply — *interpret, convert, use*
- **Learning objective:** The student will be able to convert between degrees
  and radians and locate an angle on the unit circle.
- **Library:** p5.js
- **Interaction pattern:** Drag the angle point; dual readouts update live
- **Implementation plan:**
    - Unit circle with a draggable point; the swept arc shades in; readouts
      show degrees, radians (as both decimal and multiples of π), and
      sin/cos values with projection lines to the axes
    - Snap buttons for landmark angles (0°, 90°, 180°, 270°, 45°)
    - A turtle icon at the circle center rotates to match — bridging turtle
      headings to the math
    - Estimated `CANVAS_HEIGHT: 520`

### 20. Set Operations Venn (`set-operations-venn`)

- **Chapter:** 20 (Tuples and Sets)
- **Concept and gap:** Union, intersection, and difference are inherently
  spatial; text output of `{...}` hides the overlap structure.
- **Bloom (2001):** Understand → Analyze — *classify, compare, organize*
- **Learning objective:** The student will be able to classify which elements
  belong to A | B, A &amp; B, A − B, and A ^ B for two given sets.
- **Library:** Custom Venn (routing: sets/overlap → venn guide)
- **Interaction pattern:** Editable sets + operation buttons that highlight
  regions
- **Implementation plan:**
    - Two-circle Venn with member chips placed in the correct regions from two
      editable sets (comma-separated inputs, e.g. pets Alice and Bob want)
    - Operation buttons: `A | B`, `A & B`, `A - B`, `A ^ B` — matching region
      glows and the Python expression plus result set print below
    - Duplicate-entry demo: typing a duplicate visibly collapses into one chip
      (sets remove duplicates)
    - Estimated `CANVAS_HEIGHT: 560`

---

## Tier 3 — Intermediate CS (Chapters 21–30)

### 21. Dictionary Key Lookup (`dictionary-key-lookup`)

- **Chapter:** 21 (Dictionaries)
- **Concept and gap:** Why is dict lookup instant, and why must keys be exact?
  The key → value mapping machinery is invisible; `KeyError` feels arbitrary.
- **Bloom (2001):** Understand — *explain, compare, infer*
- **Learning objective:** The student will be able to explain how a dictionary
  finds a value from a key and why a missing key raises KeyError while
  `.get()` does not.
- **Library:** p5.js
- **Interaction pattern:** Type-a-key lookup with step-through of the search;
  list-vs-dict comparison
- **Implementation plan:**
    - A phone-book dict drawn as key/value drawers; student types a key and
      the matching drawer springs open with the value; a wrong key shows the
      red `KeyError` banner vs the `.get()` toggle returning `None` politely
    - Comparison mode: find the same entry in a list (step through items one
      by one, counting checks) vs the dict (one hop) — a gentle Big-O seed
      without hash-table internals (age-appropriate simplification)
    - Add/update mode: assigning to an existing key replaces; to a new key
      creates a new drawer
    - Estimated `CANVAS_HEIGHT: 500`

### 22. Recursion Call Stack (`recursion-call-stack`)

- **Chapter:** 24 (Recursion and Fractals), reusable in 23 (tracebacks)
- **Concept and gap:** The call stack is *the* canonical invisible machine.
  Students see `factorial(5) = 120` but not the frames stacking up and
  unwinding — which is also exactly what a traceback prints.
- **Bloom (2001):** Analyze — *deconstruct, organize, trace*
- **Learning objective:** The student will be able to deconstruct a recursive
  call into stack frames, identify the base case, and trace values returning
  back down the stack.
- **Library:** p5.js
- **Interaction pattern:** Step-through; frames push and pop one click at a
  time with all values visible
- **Implementation plan:**
    - Left: `factorial(n)` code with current-line highlight; right: the stack
      as physical frames, each labeled with its `n` and its pending
      `return n * factorial(n-1)`
    - Push phase stacks frames upward until the base case lights gold; pop
      phase fills in each pending multiplication as values flow down
    - Presets: `factorial(4)`, `countdown(3)`, and a missing-base-case bug
      that hits a "RecursionError" ceiling (max 8 frames drawn)
    - Buttons: Next, Previous, Reset; frame-count display
    - Estimated `CANVAS_HEIGHT: 560`

### 23. Fractal Tree Explorer (`fractal-tree-explorer`)

- **Chapter:** 24 (Recursion and Fractals)
- **Concept and gap:** The chapter's fractal lab requires edit-and-rerun for
  each parameter change; live sliders reveal the parameter sensitivity that
  makes fractals exciting.
- **Bloom (2001):** Apply → Create — *demonstrate, experiment, design*
- **Learning objective:** The student will be able to demonstrate how branch
  angle, depth, and shrink factor shape a recursive tree and design a tree of
  their own.
- **Library:** p5.js
- **Interaction pattern:** Parameter sliders with immediate redraw
  (appropriate: Apply-level with real-time feedback)
- **Implementation plan:**
    - Full-canvas recursive tree; sliders: branch angle (10–60°), depth
      (1–9), shrink factor (0.5–0.8); depth slider doubles as a live
      demonstration of recursion levels (each depth tinted its own color)
    - "Randomize" and "Snapshot" buttons; snapshot overlays a ghost for
      comparison
    - Readout shows the recursive call count — connecting beauty back to the
      call stack sim (#22)
    - Estimated `CANVAS_HEIGHT: 540`

### 24. Object Instance Inspector (`object-instance-inspector`)

- **Chapter:** 25 (Object-Oriented Programming)
- **Concept and gap:** `self` and instance attributes: which dog's `name` is
  which? Students conflate the class (blueprint) with its instances.
- **Bloom (2001):** Understand — *explain, exemplify, differentiate*
- **Learning objective:** The student will be able to explain the difference
  between a class and its instances and identify which object `self` refers
  to during a method call.
- **Library:** p5.js
- **Interaction pattern:** Step-through of construction and method calls with
  instance boxes
- **Implementation plan:**
    - Top: a `Dog` class card (blueprint styling, dashed border) with
      `__init__` and `bark`; below: instances appear as solid cards with
      their own `name`/`age` values as `Dog("Rex", 3)` etc. step through
    - During `rex.bark()`, a glowing `self` arrow connects the method in the
      blueprint to the rex card, and attribute reads pull from that card only
    - Class-variable demo: a shared `species` field drawn once on the
      blueprint with dotted arrows from all instances
    - Estimated `CANVAS_HEIGHT: 540`

### 25. Inheritance Explorer (`inheritance-explorer`)

- **Chapter:** 25 (Object-Oriented Programming)
- **Concept and gap:** Method lookup up the class hierarchy (and overriding
  plus `super()`) is invisible dispatch.
- **Bloom (2001):** Analyze — *attribute, organize, differentiate*
- **Learning objective:** The student will be able to determine which class's
  method runs when a method is called on a subclass instance.
- **Library:** vis-network (routing: nodes/edges hierarchy) with a call panel
- **Interaction pattern:** Click a method call; watch the lookup climb the tree
- **Implementation plan:**
    - Network of `Animal` → `Dog` / `Cat` class nodes, each listing its
      methods; an instance node hangs below `Dog`
    - Buttons for calls (`d.speak()`, `d.eat()`); the lookup path animates
      node-by-node up the hierarchy until a match highlights; overridden
      methods show the parent's version grayed with a "shadowed" badge
    - `super()` preset shows a child method that then hops up explicitly
    - Estimated `CANVAS_HEIGHT: 600`

### 26. JSON–Python Type Mapper (`json-python-mapper`)

- **Chapter:** 27 (Standard Library and JSON)
- **Concept and gap:** JSON looks deceptively like Python; the differences
  (`true`/`True`, `null`/`None`, keys must be strings) cause silent
  confusion.
- **Bloom (2001):** Understand → Apply — *interpret, convert, classify*
- **Learning objective:** The student will be able to convert values between
  JSON text and Python objects and identify the type mapping in each
  direction.
- **Library:** Custom HTML (two-pane editor; routing: matrix/detail-panel
  style custom interaction)
- **Interaction pattern:** Side-by-side editable panes with type highlighting
- **Implementation plan:**
    - Left pane: JSON text; right pane: the resulting Python literal;
      editing either side re-renders the other, with per-token color coding
      (object↔dict, array↔list, true↔True, null↔None)
    - Hover any token to see a tooltip naming both types
    - Deliberate-error presets: single quotes in JSON, trailing comma — with
      friendly parse-error explanations
    - Estimated `CANVAS_HEIGHT: 520`

### 27. Regex Match Lab (`regex-match-lab`)

- **Chapter:** 29 (Text Processing and Regular Expressions)
- **Concept and gap:** Regex is a language of invisible rules; students need
  live match highlighting to connect pattern pieces to matched characters.
- **Bloom (2001):** Apply → Analyze — *use, test, deconstruct*
- **Learning objective:** The student will be able to test a regular
  expression against sample text and attribute each match to the pattern
  element that produced it.
- **Library:** Custom HTML (input fields + highlighting; no canvas needed)
- **Interaction pattern:** Live pattern editor with token-by-token explainer
- **Implementation plan:**
    - Pattern input (pre-filled `\d{3}-\d{4}`) over a sample-text area; all
      matches highlight in real time; a match counter mirrors `re.findall`
    - Pattern explainer strip: the pattern rendered as chips (`\d` "a digit",
      `{3}` "three times", `-` "a dash") — hover a chip to flash its matched
      characters
    - Preset patterns: phone numbers, words starting with capital, digits,
      vowels; preset texts to search
    - Age-appropriate scope: only the chapter's elements (`\d \w \s . * + ?
      {n,m} [] ^ $ |`)
    - Estimated `CANVAS_HEIGHT: 540`

### 28. Sorting Algorithm Comparer (`sorting-comparer`)

- **Chapter:** 30 (Algorithms and Data Structures)
- **Concept and gap:** Bubble, selection, and insertion sort differ only in
  their compare/swap choreography — invisible in code, obvious in animation.
- **Bloom (2001):** Analyze → Evaluate — *compare, organize, judge*
- **Learning objective:** The student will be able to compare how bubble,
  selection, and insertion sort rearrange the same data and judge which does
  less work for a given input.
- **Library:** p5.js
- **Interaction pattern:** Step-through per comparison, with an auto-play
  race option for the Evaluate objective
- **Implementation plan:**
    - Bar chart of 10 values; algorithm selector; Step button highlights the
      pair being compared and animates swaps; counters for comparisons and
      swaps
    - Race mode: two algorithm panels sort identical data side by side with
      live operation counters
    - Data presets: random, nearly sorted, reversed — reveals why "it
      depends on the data"
    - Shuffle button for new data
    - Estimated `CANVAS_HEIGHT: 560`

### 29. Search Race (`search-race`)

- **Chapter:** 30 (Algorithms and Data Structures)
- **Concept and gap:** Big-O is abstract; the visceral experience of binary
  search halving 100 items in 7 checks makes efficiency real.
- **Bloom (2001):** Analyze → Evaluate — *compare, test, justify*
- **Learning objective:** The student will be able to compare the number of
  checks linear and binary search need and justify why binary search requires
  sorted data.
- **Library:** p5.js
- **Interaction pattern:** Pick a target, then step or race both searches
- **Implementation plan:**
    - A sorted shelf of 31 numbered boxes duplicated in two lanes; student
      picks a target; Step mode advances both searches one check at a time —
      linear plods left-to-right, binary jumps to midpoints and grays out the
      discarded half
    - Check counters per lane; results banner ("binary: 5 checks, linear: 24")
    - "Unsorted trap" preset: run binary search on shuffled data and watch it
      fail — answering *why sorted matters*
    - Estimated `CANVAS_HEIGHT: 520`

### 30. Graph Traversal Explorer (`graph-traversal-explorer`)

- **Chapter:** 30 (Algorithms and Data Structures); also reinforces the maze
  content in `docs/intermediate/`
- **Concept and gap:** BFS's level-by-level ripple vs DFS's deep dive is
  spatial and temporal; the hidden queue/stack driving each is the real
  lesson.
- **Bloom (2001):** Analyze — *differentiate, organize, trace*
- **Learning objective:** The student will be able to trace the visit order of
  BFS and DFS on the same graph and attribute the difference to the queue
  versus the stack.
- **Library:** vis-network (routing: nodes/edges) with a side panel
- **Interaction pattern:** Step-through with the frontier data structure shown
  live
- **Implementation plan:**
    - A 10-node graph; BFS/DFS mode toggle; Step button visits the next node
      (numbered in visit order); side panel shows the live queue (BFS) or
      stack (DFS) contents after every step
    - Start-node selectable by clicking; Reset re-randomizes layout
    - Shortest-path payoff: after BFS completes, highlight the shortest path
      to a goal node — the "why BFS" moment
    - Estimated `CANVAS_HEIGHT: 620`

---

## Tier 4 — Advanced Topics (Chapters 31–38)

### 31. NumPy Broadcasting Visualizer (`numpy-broadcasting`)

- **Chapter:** 33 (NumPy and Scientific Computing)
- **Concept and gap:** `array + 5` silently stretches the scalar across every
  element; nothing in the printed output shows the pairing.
- **Bloom (2001):** Understand — *explain, infer, predict*
- **Learning objective:** The student will be able to explain how a scalar or
  smaller array is stretched to match a larger array during element-wise
  operations.
- **Library:** p5.js
- **Interaction pattern:** Step-through of one element-pairing at a time
- **Implementation plan:**
    - A 1-D array as a row of cells; the scalar (or 1-row array) drawn once,
      then ghost-copied to align under each cell as steps proceed; each step
      computes one output cell
    - Presets: array + scalar, array + array (same length), 2-D grid + row
      (the classic broadcast); mismatched lengths preset shows the actual
      ValueError
    - Operation selector: `+`, `*`, `>` (booleans out — a nice surprise)
    - Estimated `CANVAS_HEIGHT: 500`

### 32. Pixel Grid Editor (`pixel-grid-editor`)

- **Chapter:** 34 (Image Processing with Pillow)
- **Concept and gap:** "An image is a grid of RGB tuples" is stated but not
  felt; editing individual pixels closes the loop.
- **Bloom (2001):** Apply → Create — *demonstrate, produce, construct*
- **Learning objective:** The student will be able to construct an image by
  setting pixel RGB values and demonstrate what `getpixel`/`putpixel`
  operate on.
- **Library:** p5.js
- **Interaction pattern:** Direct manipulation canvas (Create-level: builder)
- **Implementation plan:**
    - 16×16 pixel grid, zoomed large; RGB sliders set the "paint" color;
      click/drag to paint; hovering any pixel shows its coordinates and tuple
      `(255, 107, 53)` — the `getpixel` view
    - "Actual size" inset shows the true 16×16 rendering next to the zoom
    - Transform buttons: grayscale, invert, flip horizontal — each described
      as the pixel math it performs (e.g., gray = average of R, G, B)
    - Estimated `CANVAS_HEIGHT: 560`

### 33. Event Loop Visualizer (`event-loop-visualizer`)

- **Chapter:** 35 (Advanced Turtle and Event-Driven Programming)
- **Concept and gap:** "Register a callback and wait" inverts everything
  students know about top-to-bottom execution; the dispatch loop is
  invisible.
- **Bloom (2001):** Understand — *explain, interpret, predict*
- **Learning objective:** The student will be able to explain how a program
  registers event handlers and predict which handler runs for a given event.
- **Library:** p5.js
- **Interaction pattern:** The student IS the event source — clicking and
  key-pressing inside the sim feeds a visible dispatch pipeline
- **Implementation plan:**
    - Left: a mini turtle screen the student clicks / presses keys on;
      center: an event queue where each event appears as a ticket (CLICK at
      (x, y), KEY "space"); right: the handler table (`onscreenclick → jump`,
      `onkey space → change color`)
    - Each ticket visibly travels to its matching handler row, which flashes
      and runs its effect on the mini screen; unhandled events fall through
      to a "no handler registered" bin
    - Slow-motion toggle to stretch the dispatch steps
    - Estimated `CANVAS_HEIGHT: 540`

### 34. Overfitting Explorer (`overfitting-explorer`)

- **Chapter:** 37 (Machine Learning Foundations)
- **Concept and gap:** Overfitting is invisible in code and only appears as
  diverging curves; students need to cause it themselves to believe it.
- **Bloom (2001):** Analyze → Evaluate — *compare, attribute, judge*
- **Learning objective:** The student will be able to analyze training versus
  validation curves and judge when a model has begun to memorize instead of
  learn.
- **Library:** Chart.js (line chart) with a p5.js-free control row
- **Interaction pattern:** Complexity slider with immediate curve response
- **Implementation plan:**
    - Left: scatter of ~20 2-D points with a fitted curve whose wiggliness
      follows a "model complexity" slider (1 = straight line, 10 = hits every
      point)
    - Right: train vs validation error lines re-plotted per slider move; the
      divergence zone shades red with a "memorizing!" label
    - "New data" button drops fresh validation points onto the fitted curve
      so students watch the overfit model miss badly
    - Precomputed data (no real training) keeps it instant and Skulpt-free
    - Estimated `CANVAS_HEIGHT: 540`

### 35. Neural Network Forward Pass (`nn-forward-pass`)

- **Chapter:** 37–38 (Machine Learning; Neural Networks and MNIST)
- **Concept and gap:** Layers, weights, and activations are named in code
  (`Dense(128, activation="relu")`) but the data flow is a black box.
- **Bloom (2001):** Understand → Analyze — *explain, trace, attribute*
- **Learning objective:** The student will be able to trace an input through
  a tiny network, explaining how weights and activations shape each layer's
  output.
- **Library:** p5.js
- **Interaction pattern:** Step-through, layer by layer, with all numbers
  visible (Understand-level: concrete data, no particle effects)
- **Implementation plan:**
    - A tiny 2–3–2 network drawn as circles and weighted edges (edge
      thickness = weight magnitude, color = sign); two input sliders
    - Step button advances one layer: incoming values multiply along edges,
      sum at each neuron, then pass the ReLU gate (values shown at each
      stage in small readouts)
    - Weight-nudge mode: drag one edge weight and watch the output flip —
      seeds the "training adjusts weights" idea for Ch 38
    - Estimated `CANVAS_HEIGHT: 560`

### 36. Convolution Kernel Explorer (`convolution-explorer`)

- **Chapter:** 38 (Neural Networks and MNIST), reinforces filters in 34
- **Concept and gap:** The sliding 3×3 kernel is the heart of CNNs and of
  Pillow's filters, and it is purely spatial — the ideal MicroSim topic.
- **Bloom (2001):** Understand → Analyze — *explain, trace, compare*
- **Learning objective:** The student will be able to trace one kernel
  position's multiply-and-sum computation and compare what edge-detect,
  blur, and sharpen kernels each emphasize.
- **Library:** p5.js
- **Interaction pattern:** Step-through of kernel positions plus kernel
  selector
- **Implementation plan:**
    - Left: an 8×8 grayscale input grid (preset: a hand-drawn "7"); a 3×3
      kernel window slides one Step per click; center: the zoomed
      multiply-and-sum arithmetic for the current position; right: the output
      feature map filling in cell by cell
    - Kernel presets: blur, sharpen, vertical edges, horizontal edges;
      editable kernel cells for the adventurous
    - Auto-complete button fills the remaining output fast once the point is
      made; before/after comparison view
    - Estimated `CANVAS_HEIGHT: 580`

---

## Backlog — Worthy Ideas Not in the First Wave

These surfaced in the chapter scan but are either narrower, partially covered
by a first-wave sim, or better served by prose plus a Skulpt lab. Kept here so
nothing is lost.

| Idea | Chapter | Bloom | Notes |
|------|---------|-------|-------|
| Indentation block grouper | 2 | Understand — *classify* | Animated scope-bubble around indented lines; partially covered by #1 and #9 |
| Escape sequence parser | 8 | Understand — *interpret* | Character-by-character parse of `\n`, `\t`, `\\`; small p5.js sim |
| Type conversion pipeline | 13 | Understand — *trace* | `input() → "42" → int() → 42` journey; pairs with #2 |
| HSL vs RGB comparison | 12 | Understand — *compare* | Extension mode for #13 rather than its own sim |
| zip() lockstep pairing | 22 | Understand — *explain* | Two lists walked in parallel; small step-through |
| map/filter pipeline | 22, 31 | Analyze — *organize* | Data-flow chips through function boxes |
| Traceback annotator | 23 | Analyze — *deconstruct* | Color-coded anatomy of a real traceback; #22 covers the stack half |
| File mode and pointer | 26 | Understand — *differentiate* | r/w/a pointer positions; niche but cheap to build |
| CSV two-pane viewer | 26 | Understand — *interpret* | Raw text vs table sync view |
| Counter frequency chart | 27 | Apply — *use* | Live `Counter.most_common()` bar chart; Chart.js |
| Dunder method dispatch | 31 | Analyze — *attribute* | Which `__dunder__` does `obj + other` call? |
| Exception hierarchy tree | 31 | Understand — *classify* | vis-network tree of built-in exceptions |
| Chart type chooser | 32 | Evaluate — *judge* | Same data as line/bar/scatter/histogram; "which chart tells the truth?" |
| Array reshape simulator | 33 | Understand — *interpret* | Watch elements reflow under `reshape()` |
| Max pooling animator | 38 | Understand — *explain* | Fold into #36 as a second mode |
| Train/val/test splitter | 37 | Understand — *classify* | Drag points into three bins; partially covered by #34 |
| Decomposition tree builder | 36 | Create — *plan* | Break a problem into subtasks interactively |
| Git commit timeline | 36 | Understand — *summarize* | vis-timeline of a small branching history |

---

## Suggested Build Order

1. **Pilot (validate the pipeline):** #7 For-Loop Stepper, #13 RGB Color
   Mixer, #14 String Slicer — one step-through, one slider sim, one
   direct-manipulation sim; three different interaction patterns through the
   full generator workflow (scaffold → js → validate → iframe heights →
   Playwright → screenshot → layout review)
2. **Tier 1 completion** in chapter order — these serve every reader
3. **Tier 2, then Tier 3** — prioritizing #22 Recursion Call Stack and
   #28/#29 (sorting/search), the highest-demand CS visualizations
4. **Tier 4** as the advanced chapters gain readers

Each sim should be generated with the `microsim-generator` single-sim route
(Step 1B), embedded in its chapter with a `mascot-thinking` prediction prompt
immediately above the iframe, and linked from the gallery in
`docs/sims/index.md`.
