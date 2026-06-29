import turtle

colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'brown']

def draw_petal(turtle, color, size):
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.begin_fill()
    turtle.circle(size)
    turtle.end_fill()

tommy = turtle.Turtle()
tommy.shape("turtle")
tommy.speed(300)

space = 40
tommy.penup()
# move to the upper left
tommy.goto(-100, 100)

for i in range(0, 8):
   draw_petal(tommy, colorList[i], 20)
   tommy.forward(space)
   tommy.right(45)
