
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 100
angle = 120

def petal():
   if i % 2:
      dan.color('red')
   else:
      dan.color('blue')
   dan.left(30)
   # draw a triangle and fill in the color
   dan.begin_fill()
   dan.forward(distance)
   dan.right(angle)
   dan.forward(distance)
   dan.right(angle)
   dan.forward(distance)
   dan.end_fill()
   dan.left(angle)
   
# repeat the forward/right functions four times
for i in range(4):
   petal()
   
dan.write('done with flower')