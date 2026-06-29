#import useful libraries
import matplotlib.pyplot as plt
from numpy import *

print('This Trinket shows how to graph data and a best-fit function.')

#
# Paste the data you wish to graph in tab-delimited rows in the format:
#
#       xdata <tab> ydata
#
# In this example, the x data is diameter (m) and y data is 
# terminal speed (m/s).
#

datalist = """
0	0
0.00238125	0.00674
0.003175	0.0113
0.00396875	0.0179
0.0047625	0.0242
0.00635	0.0391
""".split('\n') 

#
# Take the list of strings defined above and store it as numbers in lists. 
#

Dlist = [] #Diameter
D2list = [] #Diameter squared
vlist = [] #terminal speed

for s in datalist:
    if s:
        D,v = s.split()     # split the string into two strings
        D=float(D)          # convert diameter string to float
        v=float(v)          # convert speed string to float
        Dlist.append(D)     # store diameter in a list
        D2list.append(D*D)  # store diameter squared in a list
        vlist.append(v)     # store terminal speed in a list


#
# Determine the best-fit curve using other software like Logger Pro or 
# Gnuplot. Define variables for the best-fit function.
# Use the array() function to convert the xdata list to an array.
# Calculate the theoretical values for "y" to plot on the yaxis.

m=1100 #slope
b=0 #intercept
vtheor=m*array(D2list)+b #y=mx*b is the best-fit function

#
# Graph data and the best-fit curve. 
#

plt.title('terminal speed vs diameter squared of a steel ball')
plt.xlabel('D^2 (m^2)')
plt.ylabel('v_term (m/s)')
plt.plot(D2list,vlist,'co', D2list, vtheor, 'm-')
plt.show()

