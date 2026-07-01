!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

# Function Parameters

## Lesson Objective
Now we will create a new function that draw a square with a specific color at a specific x and y point.  The function will take three inputs:
- the color
- the horizontal x position on the grid
- the vertical y position on the grid

## Sample Code
```python
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

size = 40
angle = 90

def square(myColor, x, y):
   dan.color(myColor)
   dan.penup()
   dan.goto(x, y)
   dan.pendown()
   for i in range(4):
      dan.forward(size)
      dan.right(angle)
   
   
square('red', -50, 80)
square('orange', 50, 70)
square('green', -50, -20)
square('blue', 70, -50)
```
## Drawing
![](../img/four-squares.png)

[Link to Function in Trinket](https://trinket.io/library/trinkets/83e78b10f5)



## Experiments

1. Can you change the name of the function to be "petal"?
2. Can you change the function to include the ability to pass in one color for the border, and one color for the center fill?
[Sample of Border Square Program](https://trinket.io/python/3377b0fbd8)