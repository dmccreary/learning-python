# Use the Python turtle library to draw a squares of different colors at random locations.  Create a function called draw_square that has inputs of color, x and y.  Make sure to begin the fill and end the fill and remember that colors range from 0 to 255.

import turtle
import random

def draw_square(color, x, y):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.fillcolor(color)
    turtle.begin_fill()
    for i in range(4):
        turtle.forward(50)
        turtle.right(90)
    turtle.end_fill()

for i in range(10):
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    x = random.randint(-200, 200)
    y = random.randint(-200, 200)
    draw_square((r, g, b), x, y)

turtle.done()