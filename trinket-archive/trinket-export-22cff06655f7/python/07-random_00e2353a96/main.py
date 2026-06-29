
import turtle
import random
# this is a list of colors
colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'gold']
dan = turtle.Turtle()
dan.shape('turtle')

# draw a circle at a random location on the screen
for i in range(10):
   x = random.randint(-200, 200)
   y = random.randint(-200, 200)
   dan.goto(x,y)
   # pick a random color from the colorList by getting a random index from 0 to 9
   dan.color(colorList[random.randint(0,9)])
   # draw a circle with radius of 7 units
   dan.begin_fill()
   dan.circle(7)
   dan.end_fill()

