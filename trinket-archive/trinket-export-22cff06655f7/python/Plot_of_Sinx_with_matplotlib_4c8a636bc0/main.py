import matplotlib.pyplot as plt
import math

x_list = []
y_list = []
for p in range(0,200): # we will use 200 points
        x_list.append(p/10)
        y_list.append(math.sin(p/10))

plt.title('Using matploglib.pyplot to show the sin(x) function from x=0 to 20')
plt.xlabel('x')
plt.ylabel('sin')
plt.plot(x_list,y_list, color='green')
plt.show()
