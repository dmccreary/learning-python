
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

# penup, forward, right, left, backward
dan.penup
dan.left(90)
dan.forward(180)
dan.right(90)
dan.pendown
for i in range(1, 36):
   dan.forward(20)
   dan.right(10)

dan.write('done')