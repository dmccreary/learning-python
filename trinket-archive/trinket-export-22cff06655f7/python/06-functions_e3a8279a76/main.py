
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 50
angle = 90

# function to draw one side of a square
def side():
   # if odd then red 2, 4 etc
   if i % 2:
      dan.color('red')
   # if even then blue 1, 3
   else:
      dan.color('blue')
   dan.forward(distance)
   dan.right(angle)
   
# repeat the forward/right functions four times
for i in range(4):
   side()