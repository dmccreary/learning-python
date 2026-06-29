import turtle
import random
# this is a list of colors
colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'gold']
dan = turtle.Turtle()
dan.shape('turtle')

def star(x, y, size, color):
  dan.penup()
  dan.goto(x, y)
  # colorList[random.randint(0,len(colorList)-1)]
  dan.color(color) 
  for i in range(0,6):
    dan.begin_fill()
    dan.forward(size) 
    dan.right(150) 
    dan.forward(size) 
    dan.left(100) 
    dan.end_fill() 
    dan.right(10) 
    dan.penup()

star(50, 25, 20, 'blue')
star(100, -50, 40, 'red')
star(-50, -50, 60, 'green')