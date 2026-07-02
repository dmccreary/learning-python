---
title: Modules and Random Numbers
description: Learn how to import modules, use aliases, and harness the random module to build games and generative art
generated_by: claude skill chapter-content-generator
date: 2026-06-28 12:50:00
version: 0.09
---

# Modules and Random Numbers

By the end of this lesson you'll be able to:

- Import a module using `import`, `from...import`, and `import...as` syntax
- Generate random integers with `random.randint()` and random floats with `random.random()`
- Pick random items with `random.choice()` and shuffle a list with `random.shuffle()`
- Use `random.seed()` to make your random results repeatable

Python comes with a huge library of extra tools called **modules**.
Instead of writing everything from scratch, you `import` the tool you need.
The `random` module is one of the most fun — it lets you add surprise and variety to your programs.

!!! mascot-welcome "Welcome to Chapter 17!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Modules are like power-ups for your programs! Import one and suddenly you can do
    things Python couldn't do on its own. Today we're unlocking the `random` module —
    perfect for games and generative art. Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## The `import` Statement

Python's standard library contains dozens of modules ready to use.
To load a module, write `import module_name` at the top of your program.
After importing, access its functions with `module.function()`.

```python
import random
print(random.randint(1, 10))   # random number between 1 and 10
```

## `from...import` — Grab Specific Names

If you only need one or two functions from a module, you can import just those names.
After a `from...import`, you call the function directly without the module prefix.

```python
from random import randint, choice

print(randint(1, 6))       # no "random." needed
print(choice(["a","b","c"]))
```

## `import...as` — Give a Module a Nickname

Long module names can be shortened with `as`:

```python
import random as rnd
print(rnd.randint(1, 100))
```

## `from...import *` — Import Everything

`from random import *` imports every public name from the module.
This is convenient but can cause confusion if two modules define a function with the same name.
Use it only for quick experiments, not in serious programs.

## The `random` Module

The `random` module generates numbers that look unpredictable.

Before we try each function, here's a summary of the key ones:

| Function | Returns | Example |
|----------|---------|---------|
| `randint(a, b)` | Random integer from a to b (inclusive) | `randint(1, 6)` → 4 |
| `random()` | Random float from 0.0 to 1.0 | `random()` → 0.73... |
| `choice(seq)` | One random item from a list | `choice(["red","blue"])` |
| `shuffle(lst)` | Shuffles a list in place (returns None) | `shuffle(cards)` |
| `sample(seq, k)` | List of k unique random items | `sample(range(1,50), 6)` |
| `seed(n)` | Sets the random starting point | `seed(42)` → same results every time |

## `random.randint()` — Random Integers

`randint(a, b)` returns a random integer where `a <= result <= b`.
Both endpoints are included.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below simulates rolling a 6-sided die five times.
    Will you ever get the same number twice in a row? Make your guess — then run it!

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
initCmLab('', `import random

print("Rolling a die 5 times:")
for i in range(5):
    roll = random.randint(1, 6)
    print(f"  Roll {i+1}: {roll}")`);
</script>

Run it a few times — the results change each time because the numbers are random.

### See It: Randomness Has a Shape

Five rolls look like pure chaos. But what happens after a **thousand** rolls? Before you click anything in the histogram below, predict: **after 1000 rolls of one die, will some faces come up way more than others, or will the bars be roughly even?**

<iframe src="../../sims/dice-roll-histogram/main.html" height="482" width="100%" scrolling="no"></iframe>

[Explore the Dice Roll Histogram MicroSim](../../sims/dice-roll-histogram/index.md){ .md-button }

Now switch the dropdown to **Sum of two dice** and roll 1000 again. The flat skyline turns into a mountain with its peak at 7 — can you figure out why there are more ways to roll a 7 than a 2? That discovery is the seed of probability.

## `random.choice()` — Pick from a List

`choice(seq)` picks one random item from a sequence (list, string, or tuple).

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
initCmLab('-2', `import random

colors = ["red", "orange", "yellow", "green", "blue", "violet"]
print("Random color:", random.choice(colors))

directions = ["left", "right", "forward", "back"]
print("Random direction:", random.choice(directions))`);
</script>

## `random.shuffle()` — Shuffle a List

`shuffle(lst)` rearranges the items of a list in a random order.
It modifies the list **in place** and returns `None` — so don't write `lst = shuffle(lst)`.

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
initCmLab('-3', `import random

cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
print("Before shuffle:", cards[:5], "...")
random.shuffle(cards)
print("After shuffle: ", cards[:5], "...")`);
</script>

## `random.random()` — Random Float

`random()` returns a float between 0.0 and 1.0. The result can be exactly 0.0 but is never exactly 1.0.

This is useful when you want a *percentage* or *probability*. Multiply to scale it:

```python
import random
prob = random.random()           # between 0.0 and 1.0
scaled = random.random() * 100  # between 0.0 and 100.0
```

## `random.sample()` — Pick Without Replacement

`sample(seq, k)` picks `k` unique items from the sequence (no repeats).
This is like drawing lottery numbers — once a number is drawn, it can't be drawn again.

```python
import random
lottery = random.sample(range(1, 50), 6)
print("Lottery numbers:", sorted(lottery))
```

## `random.seed()` — Repeatable Randomness

Every time you run a random program, Python uses a different starting point (called a **seed**) so the results are different.

If you call `random.seed(n)` with the same number every time, you get exactly the same "random" sequence.
This is useful for testing — you want your program to behave the same way during testing.

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
initCmLab('-4', `import random

random.seed(42)
print("With seed 42:", [random.randint(1, 10) for _ in range(5)])

random.seed(42)   # reset to the same seed
print("Same again: ", [random.randint(1, 10) for _ in range(5)])

# No seed — different every run:
print("No seed:   ", [random.randint(1, 10) for _ in range(5)])`);
</script>

## Random Art with Turtle

Let's put `random` to work with turtle graphics — random colors, sizes, and positions to create generative art.

<div class="cm-lab">
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
initCmLab('-5', `import turtle
import random

t = turtle.Turtle()
t.speed(0)
t.hideturtle()
turtle.bgcolor("black")

colors = ["#FF6B6B", "#FFE66D", "#4ECDC4", "#95E1D3", "#F38181", "#A8E6CF"]

for _ in range(40):
    t.penup()
    x = random.randint(-180, 180)
    y = random.randint(-180, 180)
    t.goto(x, y)
    t.pendown()
    t.pencolor(random.choice(colors))
    t.pensize(random.randint(1, 4))
    size = random.randint(10, 50)
    sides = random.randint(3, 8)
    t.fillcolor(random.choice(colors))
    t.begin_fill()
    for i in range(sides):
        t.forward(size)
        t.right(360 / sides)
    t.end_fill()`);
</script>

Run it multiple times — because of randomness, you'll get a different artwork every single time!

## Creating Your Own Module

So far you've only *used* modules that already exist. You can also **author** your own — package a set of functions into a `.py` file so other programs (or your future self) can `import` them, exactly like `random`.

!!! mascot-warning "This Needs a Real Python Environment"
    ![Monty with a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Creating a separate file and importing it only works with a real Python installation — Thonny, VS Code, or the terminal. Skulpt runs a single file, so this walkthrough uses regular code blocks instead of an interactive lab.

Save the functions below in a file named `fibo.py`:

```python
# fibo.py
def fib(n):    # print the Fibonacci series up to n
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a + b
    print()

def fib2(n):   # return the Fibonacci series up to n as a list
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result
```

Then, in a **different** file saved in the same folder, `import` it by its filename (without the `.py`):

```python
import fibo

fibo.fib(100)            # 0 1 1 2 3 5 8 13 21 34 55 89
numbers = fibo.fib2(100)
print(numbers)            # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
```

You can also grab one function directly, just like you did with `random`:

```python
from fibo import fib

fib(20)
```

Python treats every `.py` file the same way — whether it ships with the standard library or you wrote it five minutes ago.

## Learning Check

!!! mascot-thinking "Your Turn — Fix the Shuffle"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below tries to shuffle a list and print it, but it has a bug —
    it assigns the return value of `shuffle()` to `cards`, losing the list!
    Fix it so the list is actually shuffled and printed.

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
initCmLab('-6', `import random

cards = ["A", "2", "3", "4", "5"]

# Bug: shuffle returns None, not the shuffled list!
cards = random.shuffle(cards)

print("Shuffled:", cards)`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Simulate flipping a coin 10 times. Use `random.choice(["heads", "tails"])` and count how many heads you get.
   **You'll know it worked when** you see a count between 0 and 10.

2. Pick 6 lottery numbers from 1–49 using `random.sample(range(1, 50), 6)`. Print them sorted.
   **You'll know it worked when** you see 6 unique numbers in order.

3. Change the random art loop count from `40` to `100`. Notice the effect.
   **You'll know it worked when** the canvas is much more filled with shapes.

4. Set `random.seed(7)` before the random art loop. Run it twice.
   **You'll know it worked when** both runs produce identical artwork.

5. Use `random.random()` to simulate a 30% chance event: print `"Lucky!"` if the result is below `0.3`.
   Run it 10 times with a loop.
   **You'll know it worked when** roughly 3 out of 10 iterations print "Lucky!".

!!! mascot-celebration "Random Wizard!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've unlocked modules and mastered the `random` module!
    Games, simulations, and generative art all rely on randomness — and now you can use it too.
    Next chapter we'll add math power to your turtle programs. Let's keep coding!

[Take the Chapter Review Quiz](./quiz.md)

[See Annotated References](./references.md)
