---
title: Advanced Turtle and Event-Driven Programming
description: Build interactive programs with turtle's onscreenclick, onkey, and timer events — and understand the event-driven programming model
generated_by: claude skill chapter-content-generator
date: 2026-06-28 15:50:00
version: 0.09
---

# Advanced Turtle and Event-Driven Programming

By the end of this lesson you'll be able to:

- Explain the **event-driven programming model** and how it differs from sequential programs
- Use `turtle.onscreenclick()` to respond to mouse clicks
- Use `turtle.onkey()` and `turtle.listen()` to respond to keyboard presses
- Use `turtle.ontimer()` to create repeating animation loops
- Build a small interactive drawing program using events

Every game, app, and website uses **event-driven programming** — code that waits for something to happen (a click, a keypress, a timer) and then responds. This chapter teaches you how to build programs that react in real time.

!!! mascot-welcome "Welcome to Chapter 35!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    This is where your programs start feeling alive — responding to your mouse and keyboard in real time!
    Event-driven programming is the foundation of every game and interactive app.
    Let's make things move! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## The Event-Driven Model

In **sequential programs**, code runs top to bottom — each line executes after the previous one finishes.

In **event-driven programs**, the program starts an **event loop** that waits and watches.
When an **event** occurs (mouse click, key press, timer tick), the loop calls a **callback function** you registered for that event.

```
[Register callbacks]  →  [Start event loop]  →  [Wait]
                                                  ↓
                                           [Event occurs]
                                                  ↓
                                       [Call the callback]
                                                  ↓
                                               [Wait]
```

You don't control *when* events fire — you just write the functions that handle them.

## Three Key Concepts

Before we write interactive turtle code, here are three terms you'll see throughout this chapter:

- **Event** — something that happens: a mouse click, key press, or timer expiring
- **Callback** — the function you write to handle the event; you pass it as an argument
- **Event loop** — the ongoing loop inside `turtle.mainloop()` that watches for events and calls callbacks

## Mouse Click Events with `onscreenclick()`

`turtle.onscreenclick(callback)` registers a function to be called every time the user clicks on the turtle canvas.

The callback receives the x and y coordinates of the click as arguments.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below draws a dot wherever the user clicks. But before you run it — how does the program know where the click happened?
    Think about how the callback receives the coordinates, then run it to see!

<div id="skulpt-lab">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.title("Click to Draw Dots")

t = turtle.Turtle()
t.speed(0)
t.hideturtle()

def on_click(x, y):
    t.penup()
    t.goto(x, y)
    t.dot(20, "steelblue")

screen.onscreenclick(on_click)
screen.mainloop()
</textarea>
    <div id="button-row">
      <button id="run-btn" onclick="runSkulpt()">&#9654; Run</button>
      <button id="reset-btn" onclick="resetSkulpt()">&#8635; Reset</button>
    </div>
    <pre id="output"></pre>
  </div>
  <div id="canvas-container">
    <div id="turtle-target"></div>
  </div>
</div>

`t.dot(size, color)` draws a filled circle of the given diameter at the turtle's current position.
Click anywhere on the canvas — a dot appears at each click location!

## Keyboard Events with `onkey()` and `listen()`

`screen.onkey(callback, key)` registers a callback for a specific key.
`screen.listen()` tells the screen to start paying attention to keyboard events — you must call this before keyboard events will work.

Key name strings include `"Up"`, `"Down"`, `"Left"`, `"Right"`, `"space"`, `"Return"`, and single letters like `"a"`.

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()

def go_forward():
    t.forward(20)

def turn_left():
    t.left(15)

def turn_right():
    t.right(15)

screen.onkey(go_forward, "Up")
screen.onkey(turn_left,  "Left")
screen.onkey(turn_right, "Right")
screen.listen()   # must call listen() to activate keyboard events
screen.mainloop()
```

<div id="skulpt-lab-2">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.title("Arrow Keys to Steer")

t = turtle.Turtle()
t.shape("arrow")
t.color("steelblue")
t.speed(0)
t.pensize(2)

def go_forward():
    t.forward(20)

def go_backward():
    t.backward(20)

def turn_left():
    t.left(30)

def turn_right():
    t.right(30)

screen.onkey(go_forward,  "Up")
screen.onkey(go_backward, "Down")
screen.onkey(turn_left,   "Left")
screen.onkey(turn_right,  "Right")
screen.listen()
screen.mainloop()
</textarea>
    <div id="button-row-2">
      <button id="run-btn-2" onclick="runSkulpt('-2')">&#9654; Run</button>
      <button id="reset-btn-2" onclick="resetSkulpt('-2')">&#8635; Reset</button>
    </div>
    <pre id="output-2"></pre>
  </div>
  <div id="canvas-container-2">
    <div id="turtle-target-2"></div>
  </div>
</div>

Use the arrow keys to steer the turtle around the canvas!

## Timer Events with `ontimer()`

`screen.ontimer(callback, delay_ms)` calls `callback` once after `delay_ms` milliseconds.

The key technique for animation loops is **re-registering the timer inside the callback** — so it fires again and again:

```python
def animate():
    t.forward(5)
    t.left(3)
    screen.ontimer(animate, 50)   # schedule ourselves again in 50ms

animate()   # start the loop
screen.mainloop()
```

This creates a smooth animation running at about 20 frames per second (1000 ÷ 50ms = 20 fps).

<div id="skulpt-lab-3">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">import turtle

screen = turtle.Screen()
screen.setup(400, 400)
screen.title("Spinning Spiral")
screen.bgcolor("black")

t = turtle.Turtle()
t.speed(0)
t.hideturtle()

colors = ["red", "orange", "yellow", "green", "cyan", "blue", "violet"]
step = 0

def draw_step():
    global step
    color = colors[step % len(colors)]
    t.pencolor(color)
    t.forward(step * 0.5)
    t.left(31)
    step += 1
    if step < 200:
        screen.ontimer(draw_step, 20)

draw_step()
screen.mainloop()
</textarea>
    <div id="button-row-3">
      <button id="run-btn-3" onclick="runSkulpt('-3')">&#9654; Run</button>
      <button id="reset-btn-3" onclick="resetSkulpt('-3')">&#8635; Reset</button>
    </div>
    <pre id="output-3"></pre>
  </div>
  <div id="canvas-container-3">
    <div id="turtle-target-3"></div>
  </div>
</div>

## Combining Events — Interactive Art

The real power of event-driven programming emerges when you combine multiple event types.
The example below lets you draw with the mouse and clear with the spacebar:

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.speed(0)
t.pensize(3)
t.pencolor("steelblue")

drawing = False

def start_draw(x, y):
    global drawing
    drawing = True
    t.penup()
    t.goto(x, y)
    t.pendown()

def draw(x, y):
    if drawing:
        t.goto(x, y)

def stop_draw(x, y):
    global drawing
    drawing = False

def clear_screen():
    t.clear()

screen.onscreenclick(start_draw, 1)   # left mouse button down
screen.onscreenclick(stop_draw,  3)   # right mouse button up
screen.onkey(clear_screen, "space")
screen.listen()
screen.mainloop()
```

## The Event-Driven vs Sequential Comparison

| Feature | Sequential | Event-Driven |
|---------|-----------|--------------|
| Execution flow | Top to bottom, predictable | Waits for events, unpredictable order |
| User interaction | Limited (input() only) | Real-time (mouse, keyboard, timer) |
| Typical use | Scripts, calculations | Games, GUIs, apps |
| Complexity | Low | Medium — requires callback thinking |

!!! mascot-tip "Callbacks Are Just Functions"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    The hardest part of event-driven programming is trusting the callback pattern.
    You write the function. You register it. The system calls it when the event fires.
    You don't call it yourself — that's the event loop's job. Think of it like setting a phone alarm: you set it once, then it rings when the time comes.

## Learning Check

!!! mascot-thinking "Your Turn — Add a Color Changer"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below draws dots on click, but all dots are the same color.
    Add a key event so pressing `"c"` cycles through a list of colors with each press!

<div id="skulpt-lab-4">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">import turtle

screen = turtle.Screen()
screen.setup(400, 400)
t = turtle.Turtle()
t.hideturtle()
t.speed(0)

colors = ["red", "orange", "green", "blue", "purple"]
color_index = 0

def on_click(x, y):
    t.penup()
    t.goto(x, y)
    t.dot(24, colors[color_index])

# Add a "change_color" function and register it with "c" key:
# def change_color():
#   ...

screen.onscreenclick(on_click)
screen.listen()
screen.mainloop()
</textarea>
    <div id="button-row-4">
      <button id="run-btn-4" onclick="runSkulpt('-4')">&#9654; Run</button>
      <button id="reset-btn-4" onclick="resetSkulpt('-4')">&#8635; Reset</button>
    </div>
    <pre id="output-4"></pre>
  </div>
  <div id="canvas-container-4">
    <div id="turtle-target-4"></div>
  </div>
</div>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Change the timer delay in the spiral lab from `20` to `5`. Does the animation get faster or slower?
   **You'll know it worked when** you see the spiral build at a noticeably different speed.

2. Add an `"r"` key binding that calls `t.color("red")` — pressing R changes the turtle's draw color to red.
   **You'll know it worked when** pressing R switches the draw color.

3. Register a click callback that uses `t.write()` to stamp the click coordinates at each click location.
   **You'll know it worked when** `"(x, y)"` labels appear at every click spot.

4. Modify the spiral to stop after 300 steps (instead of 200) and add a reset function on `"s"` that clears and restarts from step 0.
   **You'll know it worked when** pressing `s` clears and restarts the spiral.

5. Create a "bouncing ball" — a circle that moves diagonally using a timer and reverses direction when it hits the canvas edges.
   **You'll know it worked when** the ball bounces around the canvas indefinitely.

!!! mascot-celebration "Event-Driven Programmer!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've built programs that respond to the real world — clicks, key presses, and timed animations!
    Event-driven programming is the foundation of every game, app, and website UI.
    Two chapters to go — and they take you into the exciting world of AI and machine learning! Let's keep coding!
