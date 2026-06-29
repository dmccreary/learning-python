# Quiz: Advanced Turtle and Event-Driven Programming

Test your understanding of the event-driven model, callbacks, mouse events, keyboard events, and timer-based animation with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the main difference between sequential and event-driven programming?

<div class="upper-alpha" markdown>
1. Sequential programs use functions; event-driven programs do not
2. Sequential programs run code top to bottom line by line; event-driven programs wait for events and respond to them with callback functions
3. Sequential programs are slower; event-driven programs run in parallel
4. Sequential programs use loops; event-driven programs use if/else statements instead
</div>

??? question "Show Answer"
    The correct answer is **B**. Sequential programs execute each line in order from top to bottom and then finish. Event-driven programs start an event loop that waits indefinitely. When an event occurs (a mouse click, key press, or timer tick), the loop calls the registered callback function. The program does not know in advance when or how many times events will fire.

    **Concept Tested:** Event-Driven Model

---

#### 2. What is a callback function in event-driven programming?

<div class="upper-alpha" markdown>
1. A function that calls itself (recursion)
2. A function you write that is passed as an argument and called automatically when a specific event occurs
3. A function that checks whether an event has occurred and returns True or False
4. A function that cancels all pending events when called
</div>

??? question "Show Answer"
    The correct answer is **B**. A callback is a function you define and pass to an event registration function. You do not call it yourself — the event loop calls it automatically when the corresponding event fires. For example, `screen.onscreenclick(my_function)` registers `my_function` as the callback for mouse clicks, and the event system calls it with the click coordinates.

    **Concept Tested:** Callback Functions

---

#### 3. What does `screen.onscreenclick(callback)` do?

<div class="upper-alpha" markdown>
1. Makes the turtle move to wherever the user clicks on the screen
2. Pauses the program and waits until the user clicks before continuing
3. Registers a callback function to be called with the x, y coordinates each time the user clicks on the canvas
4. Detects single vs double clicks and calls different functions
</div>

??? question "Show Answer"
    The correct answer is **C**. `screen.onscreenclick(callback)` registers a function to handle mouse clicks on the turtle canvas. When the user clicks, Python calls `callback(x, y)` automatically, where `x` and `y` are the coordinates in turtle coordinate space (center is 0, 0). You can then use those coordinates to draw, move the turtle, or trigger any other action.

    **Concept Tested:** onscreenclick()

---

#### 4. What does `screen.listen()` do, and why must you call it?

<div class="upper-alpha" markdown>
1. It plays audio through the computer's speakers when keys are pressed
2. It enables the turtle canvas to receive keyboard events — without it, keyboard callbacks are ignored
3. It starts recording all events to a log file for debugging
4. It makes the turtle face the direction of the most recent keypress
</div>

??? question "Show Answer"
    The correct answer is **B**. `screen.listen()` tells the turtle screen to direct keyboard input to the event system. Without calling it first, `screen.onkey()` callbacks will be registered but never triggered — keyboard events are simply ignored. Always call `screen.listen()` after setting up your keyboard callbacks and before `screen.mainloop()`.

    **Concept Tested:** keyboard events and listen()

---

#### 5. What arguments does the callback receive from `screen.onscreenclick(callback)`?

<div class="upper-alpha" markdown>
1. No arguments — you check `screen.last_click` to get the position
2. The x and y coordinates of the click in turtle coordinate space
3. The mouse button number (1 for left, 2 for right)
4. A tuple of `(x, y, button, timestamp)` for the click
</div>

??? question "Show Answer"
    The correct answer is **B**. The callback function must accept two parameters: `x` and `y` — the click coordinates in turtle coordinate space where (0,0) is the center of the screen. Define your callback as `def on_click(x, y):` and the event system fills them in automatically when the user clicks.

    **Concept Tested:** onscreenclick()

---

#### 6. What does `screen.ontimer(callback, milliseconds)` do?

<div class="upper-alpha" markdown>
1. Pauses the program for the given number of milliseconds
2. Measures how many milliseconds a function takes to run
3. Calls the callback function repeatedly every N milliseconds forever
4. Calls the callback function once after the specified delay in milliseconds
</div>

??? question "Show Answer"
    The correct answer is **D**. `screen.ontimer(callback, ms)` calls the callback function once after `ms` milliseconds. To create a repeating animation loop, the callback must re-register itself by calling `screen.ontimer(callback, ms)` again at the end of each call. This is the standard pattern for turtle animation: update position, draw, then schedule the next call.

    **Concept Tested:** ontimer()

---

#### 7. What does `screen.mainloop()` do in a turtle event-driven program?

<div class="upper-alpha" markdown>
1. Runs the main Python loop that processes list operations
2. Starts the event loop that keeps the window open and dispatches events to callbacks
3. Iterates over all registered turtles and moves them one step
4. Prints a summary of all events that occurred during the program
</div>

??? question "Show Answer"
    The correct answer is **B**. `screen.mainloop()` starts the turtle event loop. It keeps the window open, watches for events (clicks, keypresses, timers), and calls the appropriate callback functions when events fire. Without `mainloop()`, the window would close immediately after setup. This call blocks — code after it does not run until the window is closed.

    **Concept Tested:** Event Loop

---

#### 8. How do you register a callback for pressing the Up arrow key?

<div class="upper-alpha" markdown>
1. `screen.onkey("Up", go_forward)`
2. `screen.onkeypress(go_forward, 38)` (using the key code for Up)
3. `screen.onkey(go_forward, "Up")`
4. `turtle.listen_key("Up", go_forward)`
</div>

??? question "Show Answer"
    The correct answer is **C**. The correct syntax is `screen.onkey(callback, key_name)` — the callback function first, then the key name string. Key name strings for arrow keys are `"Up"`, `"Down"`, `"Left"`, `"Right"`. For letter keys, use the letter itself: `"w"`. For other keys: `"space"`, `"Return"`, `"Escape"`. Remember to call `screen.listen()` for key events to work.

    **Concept Tested:** onkey()

---

#### 9. What is an event loop?

<div class="upper-alpha" markdown>
1. A for loop that iterates over a list of events one time
2. A recurring loop that waits for events to occur and calls the corresponding callback functions
3. A special type of while loop that only runs when there is user input
4. The main program that creates event objects and dispatches them manually
</div>

??? question "Show Answer"
    The correct answer is **B**. An event loop is an ongoing loop maintained by the framework (turtle's `mainloop()`, in this case) that continuously checks for events. When an event occurs, the loop identifies which callback was registered for that event and calls it. After the callback finishes, the loop returns to waiting. This is the foundation of all interactive applications — games, GUIs, and web apps all use event loops.

    **Concept Tested:** Event Loop

---

#### 10. What does `t.dot(20, "steelblue")` do?

<div class="upper-alpha" markdown>
1. Changes the turtle's pen color to steelblue
2. Draws a circle outline with diameter 20 in steelblue
3. Draws a filled circle (dot) with diameter 20 pixels in steelblue at the turtle's current position
4. Moves the turtle 20 pixels toward steelblue coordinates
</div>

??? question "Show Answer"
    The correct answer is **C**. `t.dot(size, color)` draws a filled circle of the specified diameter at the turtle's current position. It does not move the turtle. This is useful in event-driven programs where you want to stamp a dot at a click location: `t.goto(x, y)` then `t.dot(20, "steelblue")`. The dot is drawn immediately without needing separate `begin_fill()` / `end_fill()` calls.

    **Concept Tested:** turtle.dot()

---
