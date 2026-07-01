!!! warning "Deprecated Lab — Trinket is shutting down"
    This lab was written for **Trinket.io**, which is [shutting down in August 2026](../about.md#a-note-on-platform-history). The embedded `trinket.io` links on this page will stop working after that date.

    These pages are kept for reference only. The current version of this course now runs every lab as an inline **[Skulpt](https://skulpt.org/)** editor right in the page — no account or install needed. **Start at [Chapter 1: Welcome to Python](../chapters/01-welcome-to-python/index.md).**

## Color Picker

You are not limited to the colors by name [Trinket Colors](https://trinket.io/docs/colors).
You can use Hex and RGB values and let your imagination run wild.

[Color Picker](https://projects.raspberrypi.org/en/projects/colourful-creations/1)

#Example code
```py

import turtle

#turtle.setup(400,500)
wn = turtle.Screen()
wn.setup(400,500)
#turtle.title("Tess becomes a traffic light!")
wn.bgcolor("A7E30E")
tess = turtle.Turtle()
tess.color('#FA057F')
style = ('Arial', 40, 'bold')
tess.write('Hello', font=style, align='Center')
tess.hideturtle()

```

## Experiments
Can you try different colors? 
Can you change font properties in style object?

The font name can as 'Arial', 'Courier', or 'Times New Roman'
The font size in pixels.
The font type, which can be 'normal', 'bold', or 'italic'