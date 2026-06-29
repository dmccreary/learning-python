
import turtle
dan = turtle.Turtle()
dan.shape('turtle')


distance = 50
sides = 8
angle = 360 / sides
my_color = "red"

dan.penup()
dan.goto(-50, 100)
dan.pendown()
dan.color(my_color)
dan.begin_fill()
# repeat the forward/right functions four times
for i in range(sides):
   dan.forward(distance)
   dan.right(angle)

dan.end_fill()
dan.hideturtle()

dan.penup()
dan.right(110)
dan.forward(80)
dan.color('white')
dan.write('STOP', font=("Arial", 30, "bold"))