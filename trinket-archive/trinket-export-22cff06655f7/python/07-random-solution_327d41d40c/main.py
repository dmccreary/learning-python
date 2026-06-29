
import turtle
import random
# this is a list of colors
colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'gold']
dan = turtle.Turtle()
dan.shape('turtle')

# distance from the center
dist = 180
number_circles = 20

# draw a circle at a random location on the screen
for i in range(number_circles):
   x = random.randint(-dist, dist)
   y = random.randint(-dist, dist)
   dan.goto(x,y)
   # pick a random color from the colorList by getting a random index from 0 to 9
   dan.color(colorList[random.randint(0,9)])
   # draw a circle with radius of 7 units
   dan.begin_fill()
   dan.circle(7)
   dan.end_fill()

