import sys
import math
import matplotlib.pyplot
# The system path is a key list that holds a set of sequential places that Python
# looks for functions.
# sys.path returns a list of places to look for code and it will execute the
# first function that it matches
myPath = sys.path

for step in range(0, len(myPath)):
    print(step+1, myPath[step])