
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

# penup, forward, right, left, backward, color
# is modulo for remainder
for i in range(1,9):
   if i % 2:
        dan.color('red')
   else:
        dan.color('blue')
   dan.forward(40)
   dan.right(45)
   
dan.write('done')