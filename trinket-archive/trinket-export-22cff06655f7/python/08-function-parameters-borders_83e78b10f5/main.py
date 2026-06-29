import turtle
dan = turtle.Turtle()
dan.shape('turtle')

size = 40
angle = 90

def square(myColor, x, y):
   dan.color(myColor)
   dan.penup()
   dan.goto(x, y)
   dan.pendown()
   for i in range(4):
      dan.forward(size)
      dan.right(angle)
   
   
square('red', -50, 80)
square('orange', 50, 70)
square('green', -50, -20)
square('blue', 70, -50)