import turtle

colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

def draw_circle(turtle, color, size, x, y):
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x,y)
    turtle.begin_fill()
    turtle.circle(size)
    turtle.end_fill()
    turtle.pendown()

tommy = turtle.Turtle()
tommy.shape("turtle")
tommy.goto(-100,0)
tommy.speed(400)

space = 20

for i in range(0, 8):
   draw_circle(tommy, colorList[i], 10, i*space, i*space)

