#3d cube 

import turtle 
tina = turtle.Turtle() 


#Set variables 
# x is the size of the box 
x = 100 
def y(): 
   tina.forward(x) 

# right side 
tina.color("cyan") 
tina.begin_fill() 
tina.left(45) 
y() 
tina.right(135) 
y() 
tina.right(45) 
y() 
tina.right(135) 
y() 
tina.end_fill() 

# left side 
tina.color("darkblue") 
tina.begin_fill() 
tina.left(45) 
y() 
tina.left(135) 
y() 
tina.left(45) 
y() 
tina.left(135) 
y() 
tina.end_fill() 

# top side 
tina.color("lightblue") 
tina.begin_fill() 
tina.left(45) 
y() 
tina.right(90) 
y() 
tina.right(90) 
y() 
tina.right(90) 
y() 
tina.right(135) 
y() 
tina.end_fill()