
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

# penup, forward, right, left, backward, color
# is modulo for remainder
for i in range(1,9):
   if (i % 4) == 0:
        dan.color('red')
   elif (i % 4) == 1:
        dan.color('blue')
   elif (i % 4) == 2:
        dan.color('green')
   else:
        dan.color('orange')
   dan.forward(40)
   dan.right(45)
   
dan.write('done')