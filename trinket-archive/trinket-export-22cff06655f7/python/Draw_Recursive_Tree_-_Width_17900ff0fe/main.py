import turtle

colorList = ['red', 'orange', 'green', 'blue', 'indigo', 'violet', 'brown']

def draw_branch(turtle, color, size, pensize, level):
  if level > 1:
    turtle.pensize(pensize)
    turtle.pendown()
    turtle.color(color)
    turtle.forward(size)
    turtle.right(20)
    # draw three branches at half length with a branch on the tip of each branch 
    for i in range(0, 3):
       turtle.forward(size/2)
       draw_branch(turtle, colorList[i-1], size/2, pensize/2, level - 1)
       turtle.backward(size/2)
       turtle.left(20)
    turtle.right(40)
    # turtle.penup()
    turtle.backward(size)
    
myTurtle = turtle.Turtle()
myTurtle.shape("turtle")
myTurtle.speed(150)

length = 130
numberPetals = 6
myTurtle.penup()
# move to the bottom center
myTurtle.goto(0, -220)
myTurtle.left(90)

draw_branch(myTurtle, colorList[0], length, 20, 6)
