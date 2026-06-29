import turtle
dan = turtle.Turtle()
dan.shape('turtle')

size = 40
angle = 90

def square(fillColor, borderColor, x, y):
   dan.color(fillColor)
   dan.penup()
   dan.goto(x, y)
   dan.pendown()
   
   ## border region
   dan.color(borderColor)
   dan.pensize(10)
   for i in range(4):
      dan.forward(size + 10)
      dan.right(angle)


   ## draw the center that is filled
   dan.pensize(1)
   dan.forward(5)
   dan.right(90)
   dan.forward(5)
   dan.left(90)
   dan.color(fillColor)
   dan.begin_fill()
   for i in range(4):
      dan.forward(size)
      dan.right(angle)
   dan.end_fill()
   

   
square('red', 'green', -80, 80)
square('orange', 'blue', 60, 70)
square('lime', 'teal', -70, -20)
square('blue', 'pink', 90, -50)
square('hotpink', 'purple', 0, 0)

dan.hideturtle()