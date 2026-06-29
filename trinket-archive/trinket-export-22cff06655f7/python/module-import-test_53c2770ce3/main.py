# You can edit this code and run it right here in the browser!
# First we'll import some turtles and shapes: 
import turtle
import shapes

# Create a turtle named Tommy:
tommy = turtle.Turtle()
tommy.shape("turtle")
tommy.speed(7)

# Draw a circle
#tommy.circle(10)
draw_circle(tommy, 'blue', 10, 10, 20)


# Try changing draw_circle to draw_square, draw_triangle, or draw_star