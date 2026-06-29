# Use the Python turtle library to draw a set squares that are filled in with random colors.  Place the squares randomly on the page.

import turtle
import random

# Create a turtle object
t = turtle.Turtle()

# Set the turtle speed
t.speed(0)

# Create a loop to draw the squares
for i in range(20):
    # Set the random color
    t.fillcolor(random.random(), random.random(), random.random())
    # Begin filling the square
    t.begin_fill()
    # Move the turtle to a random position
    t.penup()
    t.goto(random.randint(-200, 200), random.randint(-200, 200))
    t.pendown()
    # Draw the square
    for j in range(4):
        t.forward(50)
        t.right(90)
    # End filling the square
    t.end_fill()

# Keep the window open
turtle.done()