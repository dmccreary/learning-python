!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

## Functions

Now we will create a new function that will draw each side.

## Sample Code
```python
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 50
angle = 90

def side():
   # if event then red 2, 4 etc.
   if i % 2:
      dan.color('red')
   # else if odd then draw blue 1, 3 etc.
   else:
      dan.color('blue')
   dan.forward(distance)
   dan.right(angle)
   
# repeat the forward/right functions four times
for i in range(4):
   side()
   
dan.write('done with square')
```
## Run the Example on Trinket

[Run the Functions Program on Trinket](https://trinket.io/library/trinkets/e3a8279a76)



## Experiments
Can you change the name of the function to be "petal"?