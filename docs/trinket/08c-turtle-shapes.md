!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

# Change the Turtle Shape

With the turtle shape() method we can change your turtle shape to be any of the following shapes

1. arrow
2. turtle
3. circle
4. square
5. triangle
6. classic

```py
import turtle
dan = turtle.Turtle()
dan.shape('square')
```

The ```classic``` shape is a small arrow.

## Using a List of Shapes
What if we want to use a list of shapes?

```py
import turtle, time
dan = turtle.Turtle()

myList = ["square", "circle", 'triangle', 'arrow', 'classic', 'turtle']

for index in range(0, len(myList)):
  dan.shape(myList[index])
  time.sleep(1)
```

```py
import turtle, time
dan = turtle.Turtle()

myList = ["square", "circle", 'triangle', 'arrow', 'classic', 'turtle']

for myShape in myList:
  dan.shape(myShape)
  time.sleep(1)
```


##Sample program
[Sample](https://trinket.io/library/trinkets/c9924a123a)

## Experiments
Can you use the new shapes to draw a star or any other shape of your chosing