# Quiz: Colors, Fill, and Turtle Art

Test your understanding of hex color codes, the RGB color model, and filling shapes with turtle graphics with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What does the hex color code `#FF0000` represent?

<div class="upper-alpha" markdown>
1. Pure blue
2. Pure green
3. Pure red
4. White
</div>

??? question "Show Answer"
    The correct answer is **C**. In a hex color code, the six characters split into three pairs: the first pair controls red, the second controls green, and the third controls blue. `#FF0000` has `FF` (maximum = 255) for red and `00` (none) for green and blue — so it is pure red. `#0000FF` would be pure blue and `#00FF00` would be pure green.

    **Concept Tested:** Hex Color Codes

---

#### 2. What color does `#FFFF00` produce?

<div class="upper-alpha" markdown>
1. White (all colors at maximum)
2. Yellow (red + green, no blue)
3. Cyan (green + blue, no red)
4. Magenta (red + blue, no green)
</div>

??? question "Show Answer"
    The correct answer is **B**. `#FFFF00` has maximum red (`FF`), maximum green (`FF`), and no blue (`00`). In the RGB color model, mixing full red and full green light produces yellow. This is the same reason a yellow traffic light uses red and green LEDs. `#FFFFFF` would be white (all maximums) and `#00FFFF` would be cyan.

    **Concept Tested:** Hex Color Codes

---

#### 3. What does the RGB color model use to create all colors?

<div class="upper-alpha" markdown>
1. Red, yellow, and blue pigments mixed together
2. Combinations of red, green, and blue light at different intensities
3. A palette of 140 pre-named colors chosen by Python
4. Hue, saturation, and lightness values from 0 to 360
</div>

??? question "Show Answer"
    The correct answer is **B**. The RGB model mixes red, green, and blue light at varying intensities (0–255 each) to create every color your screen can display. Every pixel on a monitor has three tiny lights — red, green, and blue — and their combined brightness produces the color you see. This is different from mixing paint (where red + green = dark brown).

    **Concept Tested:** RGB Color Model

---

#### 4. What RGB values produce pure white?

<div class="upper-alpha" markdown>
1. Red=0, Green=0, Blue=0
2. Red=255, Green=0, Blue=0
3. Red=128, Green=128, Blue=128
4. Red=255, Green=255, Blue=255
</div>

??? question "Show Answer"
    The correct answer is **D**. White is produced by all three color channels at their maximum value: Red=255, Green=255, Blue=255. In hex, this is `#FFFFFF`. Conversely, Black is all zeros: Red=0, Green=0, Blue=0 (hex `#000000`). Gray is produced by equal values between 0 and 255, like (128, 128, 128).

    **Concept Tested:** RGB Color Model

---

#### 5. What does `t.fillcolor("gold")` do?

<div class="upper-alpha" markdown>
1. Immediately fills the entire canvas with gold color
2. Changes the color of the lines the turtle draws to gold
3. Sets the color that will be used to fill the next shape drawn with `begin_fill()` and `end_fill()`
4. Changes the turtle cursor itself to a gold color
</div>

??? question "Show Answer"
    The correct answer is **C**. `t.fillcolor()` sets the fill color — the color used to paint the interior of shapes when you use `begin_fill()` and `end_fill()`. It does not immediately fill anything. It is separate from `pencolor()`, which controls the outline color. You can set both at once with `t.color(pencolor, fillcolor)`.

    **Concept Tested:** begin_fill() and end_fill()

---

#### 6. What is the correct order of calls to draw a filled shape?

<div class="upper-alpha" markdown>
1. Draw the shape, then call `begin_fill()`, then call `end_fill()`
2. Call `end_fill()`, draw the shape, then call `begin_fill()`
3. Call `begin_fill()`, draw the shape, then call `end_fill()`
4. Call `begin_fill()` and `end_fill()` at the same time before drawing
</div>

??? question "Show Answer"
    The correct answer is **C**. The correct order is: (1) `t.begin_fill()` to signal the start of the fill region, (2) draw the shape, (3) `t.end_fill()` to seal the region and paint it with the fill color. If you call them in the wrong order, the fill either does nothing or produces unexpected results. The shape should also be closed (end where it started) for a clean fill.

    **Concept Tested:** begin_fill() and end_fill()

---

#### 7. What does `t.color("blue", "yellow")` do?

<div class="upper-alpha" markdown>
1. Sets the pen color to yellow and the fill color to blue
2. Sets the pen color to blue and the fill color to yellow
3. Mixes blue and yellow to create green for both pen and fill
4. Sets the background color to blue and the pen color to yellow
</div>

??? question "Show Answer"
    The correct answer is **B**. `t.color(pencolor, fillcolor)` sets both colors at once. The first argument is the pen color (outline) and the second is the fill color. So `t.color("blue", "yellow")` draws outlines in blue and fills shapes with yellow. This is a convenient shorthand for calling `t.pencolor()` and `t.fillcolor()` separately.

    **Concept Tested:** Background and Pen Colors

---

#### 8. Which hex value represents the color black?

<div class="upper-alpha" markdown>
1. `#FFFFFF`
2. `#FF0000`
3. `#808080`
4. `#000000`
</div>

??? question "Show Answer"
    The correct answer is **D**. `#000000` has zero for all three color channels — no red, no green, no blue — which produces black. `#FFFFFF` is white (all channels maximum). `#FF0000` is red. `#808080` has all channels at 128, which is medium gray.

    **Concept Tested:** Hex Color Codes

---

#### 9. Why must a shape be closed (end where it started) for `end_fill()` to work correctly?

<div class="upper-alpha" markdown>
1. Python raises an error if the shape is not closed before `end_fill()` is called
2. An unclosed shape leaves a gap in the outline, causing the fill to leak outside the intended boundary
3. `end_fill()` can only fill shapes with exactly four sides
4. Closing the shape tells Python to add an extra outline in a different color
</div>

??? question "Show Answer"
    The correct answer is **B**. Python fills the region bounded by the path the turtle traced between `begin_fill()` and `end_fill()`. If the shape is not closed — if the end point is not the same as the start point — there is a gap in the boundary. Python still fills something, but the fill may extend beyond or outside the intended shape in unexpected ways.

    **Concept Tested:** begin_fill() and end_fill()

---

#### 10. How do you set the canvas background color in a turtle program?

<div class="upper-alpha" markdown>
1. `t.background("lightblue")`
2. `t.fillcolor("lightblue")`
3. `wn.bgcolor("lightblue")`
4. `turtle.fill("lightblue")`
</div>

??? question "Show Answer"
    The correct answer is **C**. `bgcolor()` is a method on the Screen object (usually stored in a variable like `wn`). You call `wn.bgcolor("lightblue")` to change the canvas background. `t.fillcolor()` sets the fill color for the turtle's shapes, not the background. `t.background()` and `turtle.fill()` are not valid turtle methods.

    **Concept Tested:** Background and Pen Colors

---
