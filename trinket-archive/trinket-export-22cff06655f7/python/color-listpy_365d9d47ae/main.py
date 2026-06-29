import turtle
import random
dan = turtle.Turtle()
dan.shape('turtle')

color_list = ['red', 'orange', 'yellow', 'green', 'blue',
  'purple', 'pink', 'brown', 'gray', 'gold', 'cyan', 'WhiteSmoke', 'Gainsboro']

dan.penup()
dan.goto(-180, 160)
dan.begin_fill()
for myColor in color_list:
  dan.color(myColor)
  dan.pendown()
  dan.begin_fill()
  dan.circle(10)
  dan.end_fill()
  dan.penup()
  dan.forward(20)