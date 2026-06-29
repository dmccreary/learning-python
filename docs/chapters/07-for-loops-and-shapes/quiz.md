# Quiz: For Loops and Drawing Shapes

Test your understanding of for loops, range(), turtle positioning, and drawing patterns with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does `range(4)` produce when used in a for loop?

<div class="upper-alpha" markdown>
1. The numbers 1, 2, 3, 4
2. The numbers 0, 1, 2, 3
3. The number 4 repeated four times
4. The numbers 0, 1, 2, 3, 4
</div>

??? question "Show Answer"
    The correct answer is **B**. `range(4)` generates the sequence 0, 1, 2, 3 — four numbers starting from zero and stopping before 4. In Python, `range(n)` always starts at 0 and goes up to but does not include `n`. So `range(4)` gives you four values: 0, 1, 2, and 3.

    **Concept Tested:** for Loop with range()

---

#### 2. What shape does this code draw?

```python
import turtle
t = turtle.Turtle()
for i in range(4):
    t.forward(100)
    t.right(90)
```

<div class="upper-alpha" markdown>
1. A triangle
2. A circle
3. A square
4. A straight line
</div>

??? question "Show Answer"
    The correct answer is **C**. The loop runs 4 times. Each time, the turtle moves forward 100 pixels and turns right 90 degrees. After four 90-degree right turns, the turtle has rotated a full 360 degrees and returns to its starting direction — creating a closed square shape with 100-pixel sides.

    **Concept Tested:** for Loop with range()

---

#### 3. What is the loop counter variable in `for i in range(5)`?

<div class="upper-alpha" markdown>
1. `range`
2. `5`
3. `for`
4. `i`
</div>

??? question "Show Answer"
    The correct answer is **D**. The variable `i` is the loop counter — it takes on each value produced by `range(5)` (that is, 0, 1, 2, 3, 4) on successive trips through the loop. You can use `i` inside the loop body to make each step slightly different, such as drawing lines that get longer on each iteration.

    **Concept Tested:** Loop Counter Variable

---

#### 4. What does `range(2, 8, 2)` produce?

<div class="upper-alpha" markdown>
1. `2, 3, 4, 5, 6, 7, 8`
2. `2, 4, 6, 8`
3. `2, 4, 6`
4. `0, 2, 4, 6, 8`
</div>

??? question "Show Answer"
    The correct answer is **C**. `range(start, stop, step)` starts at 2, stops before 8, and counts by 2. That gives 2, 4, 6 — three values. Notice that 8 itself is NOT included because `range` stops before the stop value. If you changed the stop to 9, you would get 2, 4, 6, 8.

    **Concept Tested:** Range with Start Stop Step

---

#### 5. What is an accumulator in Python?

<div class="upper-alpha" markdown>
1. A variable created inside a loop that disappears when the loop ends
2. A variable set up before a loop that is updated inside the loop on each step
3. The `range()` function that controls how many times a loop runs
4. A special type of `for` loop that counts backwards
</div>

??? question "Show Answer"
    The correct answer is **B**. An accumulator is a variable you initialize before the loop (usually to 0 or an empty value) and then update inside the loop on every iteration. A classic example: `total = 0` before the loop, then `total += i` inside. After the loop, `total` holds the sum of all values the loop processed.

    **Concept Tested:** Loop Accumulator Pattern

---

#### 6. What does `t.goto(0, 0)` do?

<div class="upper-alpha" markdown>
1. Sets the turtle's speed to zero (stops it)
2. Moves the turtle to the center of the canvas at coordinates (0, 0)
3. Creates a new turtle at the origin
4. Draws a circle at position (0, 0)
</div>

??? question "Show Answer"
    The correct answer is **B**. `t.goto(x, y)` moves the turtle to an exact position on the canvas using coordinates. The center of the turtle canvas is at `(0, 0)`. Positive x is right, positive y is up. The turtle will draw a line while moving unless you call `t.penup()` first.

    **Concept Tested:** Absolute Positioning goto()

---

#### 7. What will `t.setheading(90)` do to the turtle?

<div class="upper-alpha" markdown>
1. Make the turtle spin 90 degrees clockwise from its current direction
2. Point the turtle directly North (upward), regardless of its current direction
3. Move the turtle 90 pixels in the current direction
4. Set the turtle's speed to 90 pixels per second
</div>

??? question "Show Answer"
    The correct answer is **B**. `t.setheading(angle)` sets the turtle's direction to an exact compass heading, not a relative turn. Heading 90 means North (up), 0 means East (right), 180 means West (left), and 270 means South (down). This is different from `t.right()` and `t.left()`, which turn relative to the turtle's current facing direction.

    **Concept Tested:** setheading() Direction

---

#### 8. How many times does the body of `for i in range(6)` execute?

<div class="upper-alpha" markdown>
1. 5 times
2. 7 times
3. 0 times
4. 6 times
</div>

??? question "Show Answer"
    The correct answer is **D**. `range(6)` generates 6 values: 0, 1, 2, 3, 4, 5. The loop body executes once for each value, so it runs exactly 6 times. A common beginner mistake is thinking it runs 7 times (including 6) or 5 times (stopping at 5). Always remember: `range(n)` produces exactly `n` values.

    **Concept Tested:** for Loop with range()

---

#### 9. Which command draws a circle with a radius of 50 pixels?

<div class="upper-alpha" markdown>
1. `t.square(50)`
2. `t.oval(50)`
3. `t.circle(50)`
4. `t.round(50)`
</div>

??? question "Show Answer"
    The correct answer is **C**. `t.circle(radius)` tells the turtle to draw a circle with the given radius. The turtle starts drawing from its current position. You can use positive or negative values for the radius — a negative radius draws the circle on the opposite side of the turtle.

    **Concept Tested:** Drawing circle() and Polygons

---

#### 10. To draw a regular pentagon, how many times should the loop run and what is the turn angle?

<div class="upper-alpha" markdown>
1. Loop 5 times, turn 60 degrees each time
2. Loop 5 times, turn 72 degrees each time
3. Loop 6 times, turn 60 degrees each time
4. Loop 4 times, turn 90 degrees each time
</div>

??? question "Show Answer"
    The correct answer is **B**. A pentagon has 5 sides, so the loop runs 5 times. The turn angle at each corner is `360 / 5 = 72` degrees. You can use this formula for any regular polygon: `turn_angle = 360 / number_of_sides`. The loop repeats that many times, moving forward and turning by that angle each time.

    **Concept Tested:** Drawing circle() and Polygons

---
