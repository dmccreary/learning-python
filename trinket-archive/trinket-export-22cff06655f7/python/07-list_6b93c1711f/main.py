import turtle
import random
dan = turtle.Turtle()
dan.shape('turtle')

colorList = ['red', 'orange', 'yellow', 'green', 'blue',
             'purple', 'pink', 'brown', 'gray', 'gold']

dan.begin_fill()
dan.color(colorList[3])
dan.circle(20)
dan.end_fill()
