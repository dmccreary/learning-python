
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 100
angle = 90

for i in range(1, 5):
   if i > 2: # true if i greater than 2
      dan.color('red')
      dan.pensize(5)
   else: # if i is exactly 2 or less than 2
      dan.color('blue')
      dan.pensize(3)
   dan.forward(distance)
   dan.right(angle)