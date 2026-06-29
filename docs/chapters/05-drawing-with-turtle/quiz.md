# Quiz: Drawing with Turtle Graphics

Test your understanding of turtle graphics commands, pen control, and screen setup with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does `turtle.Screen()` create in a turtle program?

<div class="upper-alpha" markdown>
1. The turtle drawing agent that moves around and draws lines
2. The drawing window where all your shapes will appear
3. The color of the background behind the turtle
4. A list of all available turtle commands
</div>

??? question "Show Answer"
    The correct answer is **B**. `turtle.Screen()` creates the drawing window — the blank canvas where your turtle will draw. Think of it as the stage in a play: you set it up before the actors perform. You store it in a variable (commonly `wn` for "window") so you can give it instructions like changing the background color.

    **Concept Tested:** turtle.Screen() Object

---

#### 2. Which command moves the turtle forward 100 pixels in the direction it is facing?

<div class="upper-alpha" markdown>
1. `t.move(100)`
2. `t.go(100)`
3. `t.forward(100)`
4. `t.walk(100)`
</div>

??? question "Show Answer"
    The correct answer is **C**. `t.forward(100)` tells the turtle to walk forward 100 pixels in whatever direction it is currently facing while drawing a line. The turtle starts facing right (East). The other options — `move()`, `go()`, and `walk()` — are not valid turtle methods and would cause an `AttributeError`.

    **Concept Tested:** Turtle Movement Commands

---

#### 3. The turtle always starts at the center of the screen facing which direction?

<div class="upper-alpha" markdown>
1. North (up)
2. South (down)
3. West (left)
4. East (right)
</div>

??? question "Show Answer"
    The correct answer is **D**. When you create a new `turtle.Turtle()`, it starts at the center of the screen facing East (right). The first `t.forward(100)` will therefore draw a line pointing to the right. You use `t.right()` and `t.left()` to change the direction it faces before moving.

    **Concept Tested:** Turtle Movement Commands

---

#### 4. What does `t.penup()` do?

<div class="upper-alpha" markdown>
1. Makes the turtle move faster
2. Changes the pen color to white
3. Lifts the pen so the turtle can move without drawing a line
4. Erases the most recent line the turtle drew
</div>

??? question "Show Answer"
    The correct answer is **C**. `t.penup()` lifts the virtual pen off the canvas, so the turtle can travel to a new position without leaving a mark. This is how you create gaps in a drawing. After moving to the new position, call `t.pendown()` to lower the pen again so future movements draw lines.

    **Concept Tested:** penup() and pendown()

---

#### 5. A student runs this code and sees nothing drawn on the canvas. What is most likely wrong?

```python
import turtle
t = turtle.Turtle()
t.penup()
t.forward(100)
t.forward(100)
```

<div class="upper-alpha" markdown>
1. `forward()` does not work after `penup()`
2. The turtle needs a `Screen()` before it can move
3. The student forgot to call `t.pendown()` before drawing
4. You must import turtle twice to draw two lines
</div>

??? question "Show Answer"
    The correct answer is **C**. The student called `t.penup()` but never called `t.pendown()`. The turtle moves exactly where commanded — but with the pen up, it leaves no trace on the canvas. Adding `t.pendown()` before the second `forward()` (or between them, depending on where the gap should be) would fix the problem.

    **Concept Tested:** penup() and pendown()

---

#### 6. Which command sets the background color of the turtle window to light blue?

<div class="upper-alpha" markdown>
1. `t.bgcolor("lightblue")`
2. `wn.bgcolor("lightblue")`
3. `t.pencolor("lightblue")`
4. `turtle.background("lightblue")`
</div>

??? question "Show Answer"
    The correct answer is **B**. `bgcolor()` is a method on the **Screen** object, not on the Turtle object. You call it as `wn.bgcolor("lightblue")` where `wn` is the variable holding your `turtle.Screen()`. The turtle's `pencolor()` method only changes the drawing pen's color, not the background.

    **Concept Tested:** turtle.Screen() Object

---

#### 7. What does `t.pensize(5)` do?

<parameter name="content">#### 7. What does `t.pensize(5)` do?

<div class="upper-alpha" markdown>
1. Makes the turtle move 5 times faster
2. Sets the thickness of the lines the turtle draws to 5 pixels
3. Changes the turtle's shape to a size-5 circle
4. Draws a square with sides 5 pixels long
</div>

??? question "Show Answer"
    The correct answer is **B**. `t.pensize(5)` sets the width (thickness) of the lines the turtle draws to 5 pixels. The default size is 1 pixel, which is quite thin. Increasing the pen size to 3, 5, or 10 creates bolder, more visible lines. It does not affect speed, shape, or the size of shapes drawn.

    **Concept Tested:** Pen Size and Color

---

#### 8. Which turtle command makes the turtle cursor invisible without erasing the drawing?

<div class="upper-alpha" markdown>
1. `t.erase()`
2. `t.invisible()`
3. `t.hideturtle()`
4. `t.penup()`
</div>

??? question "Show Answer"
    The correct answer is **C**. `t.hideturtle()` makes the turtle cursor invisible so it does not appear on your finished drawing. The drawing itself stays fully visible on screen. You can bring the turtle back with `t.showturtle()`. This is useful when you want to display a clean artwork without the arrow cursor on top of it.

    **Concept Tested:** Turtle Appearance

---

#### 9. How many degrees should the turtle turn to make a right-angle corner (like the corner of a square)?

<div class="upper-alpha" markdown>
1. 45 degrees
2. 90 degrees
3. 180 degrees
4. 360 degrees
</div>

??? question "Show Answer"
    The correct answer is **B**. A right-angle corner is 90 degrees — one quarter of a full 360-degree circle. To draw a square, you repeat `forward()` and `right(90)` four times. This is exactly like the geometry you learn in school: the corners of a square are all 90 degrees.

    **Concept Tested:** Turtle Movement Commands

---

#### 10. What does `t.shape("turtle")` do?

<div class="upper-alpha" markdown>
1. Draws a turtle shape on the canvas in the turtle's current color
2. Changes the appearance of the turtle cursor from an arrow to a cartoon turtle
3. Creates a second turtle object named "turtle"
4. Imports a picture of a turtle from the internet
</div>

??? question "Show Answer"
    The correct answer is **B**. `t.shape("turtle")` changes the appearance of the turtle cursor — the small icon that shows where the turtle is on the screen. Instead of the default arrowhead, it displays a top-down cartoon turtle. Six built-in shapes are available: `"arrow"`, `"turtle"`, `"circle"`, `"square"`, `"triangle"`, and `"classic"`.

    **Concept Tested:** Turtle Appearance

---
