!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

## Using a Loop

In this example program we will make the turtle go forward 40 steps and then make a right turn of 90 degrees.  
We will repeat this four times to complete a square.


## Sample Code
```python
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 50
angle = 90

# repeat the forward/right functions four times
for i in range(4):
   dan.forward(distance)
   dan.right(angle)
   
dan.write('done with square')
```

## Running the Example on Trinket

[Run Loop Program on Trinket](https://trinket.io/python/6cadd3c046)

## Experiments
1. Can you make the turtle draw a larger square?  Hint: change the distance to be 80.  How big can you make the square before the turtle goes off the screen?
2. Can you make a hexagon?  This is a figure with six sides.  Hint: the angle will need to be 60 and the range limit will need to be 6.
3. Can you make an octagon?  An Octagon has eight sides.  Hints: Try using an angle of 45.
4. Can you make a stop sign?  You will need to use a dan.color('red'). a dan.beginfill() and a dan.endfill().  You can add the text of the word "stop" by using dan.moveto(x,y) and dan.write("STOP",None,None, "30pt bold").  You can also use the dan.hideturtle() so that the outline of the turtle is not displayed at the end.  See: [Python Stop Sign Tutorial](https://www.youtube.com/watch?v=HhxYt9Lskrw)
