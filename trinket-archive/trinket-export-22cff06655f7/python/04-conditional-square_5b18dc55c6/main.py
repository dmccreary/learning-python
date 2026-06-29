
import turtle
dan = turtle.Turtle()
dan.shape('turtle')

distance = 100
angle = 90

for i in range(4):
   # i modulo 2 is the remainer after we divide by 2
   if i % 2: # true if i is even (remainder is 1)
      dan.color('red')
      dan.pensize(5)
   else: # true if i is odd (remainder is 0)
      dan.color('blue')
      dan.pensize(3)
   dan.forward(distance)
   dan.right(angle)