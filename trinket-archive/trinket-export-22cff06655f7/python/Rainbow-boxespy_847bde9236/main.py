import turtle

# Create the turtle object and name it "t"
t = turtle.Turtle()
t.penup()
t.goto(-200, 0)
t.pendown()

# Define the colors of the rainbow
colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

# Loop through the colors and draw a box for each one
for i in range(7):
    t.fillcolor(colors[i])
    t.begin_fill()
    for j in range(4):
        t.forward(50)
        t.right(90)
    t.end_fill()
    t.penup()
    t.forward(50)
    t.pendown()

# Hide the turtle cursor when done
t.hideturtle()

# Wait for the user to close the window
turtle.done()
