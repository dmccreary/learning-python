
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 50
angle = 90

# repeat the forward/right functions four times
for i in range(4):
   if i % 2:
      dan.color('red')
      dan.pensize(20)
   else:
      dan.color('blue')
      dan.pensize(5)
   dan.forward(distance)
   dan.right(angle)
   
dan.write('done with square')