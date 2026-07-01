!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

# Getting Inputs from the User

We can prompt the user to supply a number using the input() function.

```python
import turtle
import random
dan = turtle.Turtle()
dan.shape('turtle')

colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'gold']

colorIndexInt = 0

while colorIndexInt > -1:
   colorIndexString = input("Enter a number from 0 to 9 to set the new color:")
   colorIndexInt = int(colorIndexString)
   dan.begin_fill()
   dan.color(colorList[colorIndexInt])
   dan.circle(20)
   dan.end_fill()

dan.write('done!')
```

## Example on Trinket

[Run the Input Example on Trinket](https://trinket.io/python/a4a951eeab)

## Experiments

1. Write a program that will prompt the user to enter the number of shapes to draw, the size of the shapes, the color of the shapes and the range of the screen to draw them (50 to 200).
2. Add some additional code to check the range of your expected values.  If the input is out of range, then continue to prompt the user to enter the correct number until they get a valid number.  Use a ```while``` statement to continue prompting.