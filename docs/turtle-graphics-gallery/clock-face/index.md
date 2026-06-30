---
hide:
    - toc
---
# Clock Face

By the end of this lab you'll be able to:

- Draw a clock face with tick marks and hour numbers
- Convert hours, minutes, and seconds into angles for clock hands
- Use `setheading()` to point each hand at the correct angle

A complete analog clock face — outer ring with 60 tick marks, 12 numbered hours, and three hands (hour, minute, second) drawn at computed angles.

!!! mascot-welcome "Welcome to the Clock Face!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    An analog clock is a math problem: convert time into angles!
    The minute hand moves `6° per minute`, the hour hand moves `0.5° per minute`.
    Let's compute it and draw it!

## How It Works

Angles for hands: `second_angle = 90 - seconds * 6`, `minute_angle = 90 - minutes * 6 - seconds * 0.1`, `hour_angle = 90 - hours * 30 - minutes * 0.5`. A `draw_hand(angle, length, width)` function draws a hand at the given angle.

## Sample Code

```python
import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_tick(angle, length, width):
    monty.penup()
    r = 130
    rad = math.radians(angle)
    monty.goto(r * math.cos(rad), r * math.sin(rad))
    monty.setheading(angle + 180)
    monty.pendown()
    monty.pensize(width)
    monty.forward(length)

for i in range(60):
    angle = 90 - i * 6
    if i % 5 == 0:
        draw_tick(angle, 15, 3)
    else:
        draw_tick(angle, 8, 1)

monty.pencolor('black')
for h in range(1, 13):
    angle = 90 - h * 30
    rad = math.radians(angle)
    monty.penup()
    monty.goto(100 * math.cos(rad) - 8, 100 * math.sin(rad) - 8)
    monty.write(str(h), font=('Arial', 9, 'bold'))

def draw_hand(angle, length, color, width):
    rad = math.radians(angle)
    monty.penup()
    monty.goto(0, 0)
    monty.pendown()
    monty.pencolor(color)
    monty.pensize(width)
    monty.goto(length * math.cos(rad), length * math.sin(rad))

hours, minutes, seconds = 10, 10, 30
sec_angle = 90 - seconds * 6
min_angle = 90 - minutes * 6 - seconds * 0.1
hr_angle = 90 - hours * 30 - minutes * 0.5

draw_hand(hr_angle, 60, 'black', 4)
draw_hand(min_angle, 90, 'black', 3)
draw_hand(sec_angle, 110, 'red', 1)
monty.penup(); monty.goto(0, 0); monty.dot(8, 'black')
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code sets `hours=10, minutes=10, seconds=30`.
    Before running, look at an analog clock and imagine where the hands should point.
    Make your prediction — then click Run!

## Try It Now

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

<div class="cm-lab">
  <div class="cm-editor-wrap">
    <div id="cm-editor"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab()">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab()">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle"></div>
  </div>
</div>
<script>
initCmLab('', `import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_tick(angle, length, width):
    monty.penup()
    r = 130
    rad = math.radians(angle)
    monty.goto(r * math.cos(rad), r * math.sin(rad))
    monty.setheading(angle + 180)
    monty.pendown()
    monty.pensize(width)
    monty.pencolor('black')
    monty.forward(length)

for i in range(60):
    angle = 90 - i * 6
    if i % 5 == 0:
        draw_tick(angle, 15, 3)
    else:
        draw_tick(angle, 8, 1)

for h in range(1, 13):
    angle = 90 - h * 30
    rad = math.radians(angle)
    monty.penup()
    monty.goto(100 * math.cos(rad) - 5, 100 * math.sin(rad) - 7)
    monty.pencolor('black')
    monty.write(str(h), font=('Arial', 9, 'bold'))

def draw_hand(angle, length, color, width):
    rad = math.radians(angle)
    monty.penup()
    monty.goto(0, 0)
    monty.pendown()
    monty.pencolor(color)
    monty.pensize(width)
    monty.goto(length * math.cos(rad), length * math.sin(rad))

hours, minutes, seconds = 10, 10, 30
sec_angle = 90 - seconds * 6
min_angle = 90 - minutes * 6 - seconds * 0.1
hr_angle = 90 - hours * 30 - minutes * 0.5

draw_hand(hr_angle, 60, 'black', 4)
draw_hand(min_angle, 90, 'black', 3)
draw_hand(sec_angle, 110, 'red', 1)
monty.penup(); monty.goto(0, 0); monty.dot(8, 'black')`);
</script>

A clock showing **10:10:30** — the hour hand between 10 and 11 (already past the 10), minute hand at 2 (10 minutes), second hand at 3 (30 seconds). Were you right?

## How It Works

Clock angles:
- Each **second** = 6° clockwise = −6° in turtle angle
- Each **minute** = 6° clockwise; the second also moves the minute hand slightly (0.1° per second)
- Each **hour** = 30° clockwise; the minute also moves the hour hand (0.5° per minute)

## Explanation Table

| Line | What it does |
|------|-------------|
| `sec_angle = 90 - seconds * 6` | 0s = 12 o'clock = 90°, each second = −6° |
| `min_angle = 90 - minutes*6 - seconds*0.1` | Minute hand moves smoothly |
| `hr_angle = 90 - hours*30 - minutes*0.5` | Hour hand moves between hours |
| `i % 5 == 0` | Every 5th tick is a long hour tick |

## Learning Check

!!! mascot-thinking "Your Turn — Change the Time"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change to `hours=3, minutes=45, seconds=0`.
    Before running, visualize where each hand will point. Then run to verify!

<div class="cm-lab">
  <div class="cm-editor-wrap">
    <div id="cm-editor-2"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-2')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-2')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-2"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-2"></div>
  </div>
</div>
<script>
initCmLab('-2', `import turtle
import math
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

def draw_tick(angle, length, width):
    monty.penup()
    r = 130
    rad = math.radians(angle)
    monty.goto(r * math.cos(rad), r * math.sin(rad))
    monty.setheading(angle + 180)
    monty.pendown()
    monty.pensize(width)
    monty.pencolor('navy')
    monty.forward(length)

for i in range(60):
    angle = 90 - i * 6
    if i % 5 == 0:
        draw_tick(angle, 15, 3)
    else:
        draw_tick(angle, 8, 1)

for h in range(1, 13):
    angle = 90 - h * 30
    rad = math.radians(angle)
    monty.penup()
    monty.goto(100 * math.cos(rad) - 5, 100 * math.sin(rad) - 7)
    monty.pencolor('navy')
    monty.write(str(h), font=('Arial', 9, 'bold'))

def draw_hand(angle, length, color, width):
    rad = math.radians(angle)
    monty.penup(); monty.goto(0, 0); monty.pendown()
    monty.pencolor(color); monty.pensize(width)
    monty.goto(length * math.cos(rad), length * math.sin(rad))

hours, minutes, seconds = 3, 45, 0
sec_angle = 90 - seconds * 6
min_angle = 90 - minutes * 6 - seconds * 0.1
hr_angle = 90 - hours * 30 - minutes * 0.5

draw_hand(hr_angle, 60, 'navy', 4)
draw_hand(min_angle, 90, 'navy', 3)
draw_hand(sec_angle, 110, 'red', 1)
monty.penup(); monty.goto(0, 0); monty.dot(8, 'navy')`);
</script>

3:45:00 — the minute hand at 9, the hour hand 3/4 of the way between 3 and 4 (because 45 minutes = 3/4 of the way to the next hour).

## Experiments

1. **Display your current time.** Use Python's `datetime` module: `import datetime; now = datetime.datetime.now()` then `hours = now.hour % 12; minutes = now.minute; seconds = now.second`. You'll know it worked when the clock shows the actual current time.

2. **Add a colored clock face.** Draw a filled circle in a light color behind the tick marks. You'll know it worked when the clock has a colored background.

3. **Make the hands colored.** Use different colors for hour, minute, and second hands. You'll know it worked when each hand is visually distinct.

4. **Add Roman numerals.** Replace the number labels with Roman numerals. You'll know it worked when `I`, `II`, `III`... appear around the clock.

!!! mascot-celebration "Tick Tock!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a working analog clock face from scratch using angle math!
    The same `angle = 90 - n * step` formula works for any clock-like display.
    Up next: **Spirograph Drawer** — interactive spirograph with changing parameters.
