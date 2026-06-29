import turtle

colorList = ['red', 'orange', 'green', 'blue', 'indigo', 'violet', 'brown']

def draw_petal(turtle, color, size):
    turtle.pendown()
    turtle.color(color)
    turtle.left(80)
    turtle.forward(size*3)
    for i in range(0, 14):
       turtle.left(20)
       turtle.forward(size/2)
    turtle.forward(size)

myTurtle = turtle.Turtle()
myTurtle.shape("turtle")
myTurtle.speed(5)

space = 20
numberPetals = 6
myTurtle.penup()
# move to the upper left
myTurtle.goto(-50, 100)

# draw a five petal flower
for i in range(0, numberPetals):
   draw_petal(myTurtle, colorList[i], space)
   myTurtle.forward(space)
   myTurtle.right(360/numberPetals)
