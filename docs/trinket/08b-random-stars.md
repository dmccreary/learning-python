!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

## Random Circles

In this exercise we will draw 5 stars of different colors:
The colors are randomly picked from the list of colors
```
colorList = ['red', 'orange', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'gold']
mycolor = colorList[random.randint(0,len(colorList)-1)]
```
After these line runs, the variable mycolor will be assigned some random color from the list of colors myColorList.   We will then use this color to fill a star.
The stars are drawn at random locations selected in  x = random.randint(-max_distance, max_distance)
   y = random.randint(-max_distance, max_distance)
   The size of star is also randomly picked size = random.randint(15, 30)

## Sample Code
```python
import turtle
import random
# this is a list of colors
colorList = ['red', 'orange', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'gold']
dan = turtle.Turtle()
dan.shape('turtle')
dan.delay(1)
dan.clear()
dan.penup()

max_distance = 160

# draw an eight sided star
def star(x, y, size, color):
  dan.goto(x, y)
  dan.color(colorList[random.randint(0,len(colorList)-1)])
  dan.pendown()
  dan.begin_fill()
  for i in range(1,8):
     dan.forward(size)
     dan.right(150)
     dan.forward(size)
     dan.left(100)
  dan.end_fill()
  dan.right(10)
  dan.penup()
  
# draw a pattern at a random location on the screen
for i in range(5):
   x = random.randint(-max_distance, max_distance)
   y = random.randint(-max_distance, max_distance)
   size = random.randint(15, 30)
   color_index = random.randint(0,8)
   # draw a star with size and color
   star(x,y,size, color_index)

# hide so we have a nice drawing
dan.hideturtle()
```


## Experiments
1. Can you create a variable for the number of circles to draw?
2. Go to the [Trinket colors page](https://trinket.io/docs/colors) and see the name of other colors you can use.  Note that you can use any of these colors in your lists.
