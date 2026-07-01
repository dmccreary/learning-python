!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

## Python List

How would we create and access a list of colors in Python?
Here is a list of colors:

```python
colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'gold']
```
To access any color you can reference the index of the color by using a number.  For example to get the third
color you would use:

```python
colorList[2]
```

## Sample Code to Draw A Circle with a Color Index
```python
import turtle
import random
dan = turtle.Turtle()
dan.shape('turtle')

colorList = ['red', 'orange', 'yellow', 'green', 'blue',
  'purple', 'pink', 'brown', 'gray', 'gold']

dan.begin_fill()
dan.color(colorList[3])
dan.circle(20)
dan.end_fill()
```

## Iterating over many colors

```py
import turtle
import random
dan = turtle.Turtle()
dan.shape('turtle')

color_list = ['red', 'orange', 'yellow', 'green', 'blue',
  'purple', 'pink', 'brown', 'gray', 'gold', 'cyan', 'Gainsboro', 'gray',
  'dimgray', 'LightSlateGray','AliceBlue', 'LimeGreen', 'DarkKhaki', 'Khaki']

dan.penup()
dan.goto(-180, 160)
dan.begin_fill()
for myColor in color_list:
  dan.color(myColor)
  dan.pendown()
  dan.begin_fill()
  dan.circle(10)
  dan.end_fill()
  dan.penup()
  dan.forward(20)
dan.hideturtle()
```

## Drawing
![](../img/green-circle.png)

## Run Sample Program on Trinket
[Draw a Green Circle Using List](https://trinket.io/python/6b93c1711f)

## Experiments

1. Can you change the name of the function to be "petal"?
1. What does ```print(len(colorList))``` return?
1. Go to the [Trinket colors page](https://trinket.io/docs/colors) and see the name of other colors you can use.
1. What happens if a list does not fit on a single line? Can a list span multiple lines?
1. Can you use double quotes and single quotes in the same list?