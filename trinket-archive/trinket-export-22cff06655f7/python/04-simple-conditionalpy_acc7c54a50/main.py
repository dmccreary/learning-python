
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 100
angle = 90

for i in range(4):
   # if the second edge is equal to 1 then draw a red line
   if (i == 1):
      dan.color('red')
      dan.pensize(5)
   # if we are not drawing the second edge then draw a blue line
   else:
      dan.color('blue')
      dan.pensize(3)
   dan.forward(distance)
   dan.right(angle)