import turtle
dan = turtle.Turtle()
dan.shape('turtle')
# needed for the sin() function
import math

dan.penup()
dan.goto(-200, 28)
dan.color('blue')
dan.pensize(3)
dan.pendown()
for x in range(-200, 200):
    y = math.sin(math.radians(x))
    dan.goto(x, y * 80)
