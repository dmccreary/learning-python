import turtle

# Create a turtle object
t = turtle.Turtle()

# Set the turtle's speed
t.speed(10)

# Set the starting position
t.penup()
t.goto(0, 0)
t.pendown()

# Draw the concentric circles
for i in range(10):
    t.pencolor(i/10, 0, 1-i/10)
    t.circle(10*i)

# Hide the turtle
t.hideturtle()