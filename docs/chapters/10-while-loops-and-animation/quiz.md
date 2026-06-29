# Quiz: While Loops and Animation

Test your understanding of while loops, break, continue, and animation concepts with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the main difference between a `for` loop and a `while` loop?

<div class="upper-alpha" markdown>
1. A `for` loop can only draw turtle shapes; a `while` loop is for printing text
2. A `for` loop uses a counter; a `while` loop cannot count
3. A `for` loop repeats a known number of times; a `while` loop repeats as long as a condition is True
4. A `for` loop runs faster than a `while` loop
</div>

??? question "Show Answer"
    The correct answer is **C**. A `for` loop is best when you know exactly how many times to repeat — like `for i in range(10)`. A `while` loop is best when you want to keep repeating as long as some condition stays `True`, without knowing in advance how many iterations that will be. Both can accomplish similar tasks, but each has situations where it fits more naturally.

    **Concept Tested:** while Loop

---

#### 2. What will this program print?

```python
count = 3
while count > 0:
    print(count)
    count -= 1
print("Done!")
```

<div class="upper-alpha" markdown>
1. `3 2 1 0` then `Done!`
2. `Done!` only
3. `3 2 1` then `Done!`
4. `3` then `Done!`
</div>

??? question "Show Answer"
    The correct answer is **C**. The loop starts with count = 3 (True), prints 3, count becomes 2 (True), prints 2, count becomes 1 (True), prints 1, count becomes 0. Now `0 > 0` is `False`, so the loop ends without printing 0. Then `"Done!"` prints. The number 0 is never printed because the condition is checked before each trip.

    **Concept Tested:** while Loop

---

#### 3. What causes an infinite loop in a `while` loop?

<div class="upper-alpha" markdown>
1. Using `break` inside the loop body
2. The loop condition never becomes `False` because the variable is never updated
3. Writing the loop body with more than two lines of code
4. Starting the loop counter at a number larger than 10
</div>

??? question "Show Answer"
    The correct answer is **B**. An infinite loop happens when the condition in a `while` loop never becomes `False` — usually because the programmer forgot to update the variable the condition depends on. For example, if you write `while count > 0:` but forget `count -= 1` inside the loop, `count` stays the same forever and the program never stops.

    **Concept Tested:** Infinite Loops to Avoid

---

#### 4. What does the `break` statement do inside a loop?

<div class="upper-alpha" markdown>
1. Pauses the loop for one second, then continues
2. Skips the current iteration and jumps to the next one
3. Exits the loop immediately, even if the condition is still True
4. Resets the loop counter back to its starting value
</div>

??? question "Show Answer"
    The correct answer is **C**. `break` exits the loop entirely and immediately, jumping to the first line of code after the loop. It does not wait for the condition to become `False` — it just stops. This is useful when something happens inside the loop that means you no longer need to continue, such as finding the answer you were searching for.

    **Concept Tested:** break Statement

---

#### 5. What does the `continue` statement do inside a loop?

<div class="upper-alpha" markdown>
1. Exits the loop immediately, just like `break`
2. Skips the rest of the current iteration and goes back to check the condition
3. Prints a blank line and moves to the next loop iteration
4. Converts the `while` loop into a `for` loop automatically
</div>

??? question "Show Answer"
    The correct answer is **B**. `continue` skips the remaining lines in the current trip through the loop and jumps straight back to check the condition. The loop does not end — it just skips that one iteration. This is useful for skipping specific values: for example, using `continue` when a number is even so only odd numbers get processed.

    **Concept Tested:** continue Statement

---

#### 6. When does the `else` clause on a `while` loop execute?

<div class="upper-alpha" markdown>
1. Every time the loop body runs
2. When the loop condition is `True` on the very first check
3. Only when the loop ends naturally because the condition became `False`
4. Only when the loop ends because a `break` statement was hit
</div>

??? question "Show Answer"
    The correct answer is **C**. The `else` clause on a `while` loop runs when the loop finishes normally — that is, when the condition becomes `False` on its own. If the loop ends because of a `break` statement, the `else` block is **skipped**. This makes it useful for the "did we find what we were looking for?" pattern in search code.

    **Concept Tested:** else Clause on Loops

---

#### 7. In a nested loop, how many times does the inner loop body run if the outer loop runs 3 times and the inner loop runs 4 times per outer trip?

<div class="upper-alpha" markdown>
1. 7 times (3 + 4)
2. 12 times (3 × 4)
3. 4 times
4. 3 times
</div>

??? question "Show Answer"
    The correct answer is **B**. In a nested loop, the inner loop runs completely for every single trip of the outer loop. If the outer loop makes 3 trips and the inner loop makes 4 trips per outer trip, the inner loop body runs 3 × 4 = 12 times total. Nested loops are powerful for drawing grids, tables, and 2D patterns.

    **Concept Tested:** Nested Loops

---

#### 8. Which module would you use to pause a Python program for 2 seconds?

<div class="upper-alpha" markdown>
1. `turtle`
2. `math`
3. `time`
4. `random`
</div>

??? question "Show Answer"
    The correct answer is **C**. The `time` module contains functions for working with time, including `time.sleep(seconds)` which pauses the program for the specified number of seconds. You import it with `import time`, then call `time.sleep(2)` to pause for 2 seconds. This is useful for creating countdown timers and controlling animation speed.

    **Concept Tested:** time Module Overview

---

#### 9. What does `time.sleep(0.5)` do in a Python program?

<div class="upper-alpha" markdown>
1. Runs the program 0.5 times and then stops
2. Sets the program's clock to 0:05
3. Repeats the previous line half a time
4. Pauses the program for half a second before continuing
</div>

??? question "Show Answer"
    The correct answer is **D**. `time.sleep(seconds)` pauses the program for the given number of seconds. You can pass decimal values: `time.sleep(0.5)` pauses for half a second. After the pause, the program continues normally. In a loop, `time.sleep()` creates a delay between each step — the foundation of simple animation.

    **Concept Tested:** time.sleep()

---

#### 10. Why is a `while` loop especially useful for creating turtle animations?

<div class="upper-alpha" markdown>
1. `while` loops draw twice as fast as `for` loops with turtle
2. The turtle library only works inside `while` loops
3. `while` loops can keep running an animation frame by frame until a stop condition is met
4. `while` loops automatically add colors to turtle drawings
</div>

??? question "Show Answer"
    The correct answer is **C**. A `while` loop is perfect for animation because it can keep running indefinitely — or until a specific stop condition is met — without needing to know in advance how many frames there will be. Each trip through the loop can move the turtle slightly, creating the illusion of motion. Combined with `time.sleep()`, you control how fast the animation plays.

    **Concept Tested:** Animation with Turtle Loops

---
