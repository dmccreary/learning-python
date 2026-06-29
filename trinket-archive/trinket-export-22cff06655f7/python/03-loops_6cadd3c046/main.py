
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 50
angle = 90

# repeat the forward/right functions four times
for i in range(4):
   dan.forward(distance)
   dan.right(angle)

dan.write('done with square')