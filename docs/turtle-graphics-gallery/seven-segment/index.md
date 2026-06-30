---
hide:
    - toc
---
# Seven-Segment Display

By the end of this lab you'll be able to:

- Represent each digit as a bitmask of which of 7 segments are "on"
- Draw horizontal and vertical line segments at computed positions
- Display a multi-digit number using a dictionary of segment patterns

A seven-segment display like those on digital clocks and calculators. Each digit is encoded as a pattern of 7 binary flags — one per segment. A drawing function reads the flags and draws the lit segments.

!!! mascot-welcome "Welcome to the Seven-Segment Display!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Digital clocks use seven-segment displays — each digit is just 7 on/off switches!
    This lab builds a dictionary-driven display renderer in Python.
    Let's code it together!

## How It Works

Each digit is stored as a tuple of 7 booleans: `(top, top-left, top-right, middle, bot-left, bot-right, bottom)`. A `draw_digit(n, x, y)` function checks each flag and draws the corresponding line segment.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

w, h = 30, 50
segments = {
    '0': (1,1,1,0,1,1,1), '1': (0,0,1,0,0,1,0),
    '2': (1,0,1,1,1,0,1), '3': (1,0,1,1,0,1,1),
    '4': (0,1,1,1,0,1,0), '5': (1,1,0,1,0,1,1),
    '6': (1,1,0,1,1,1,1), '7': (1,0,1,0,0,1,0),
    '8': (1,1,1,1,1,1,1), '9': (1,1,1,1,0,1,1),
}

def seg_line(x1, y1, x2, y2):
    monty.penup(); monty.goto(x1, y1)
    monty.pendown(); monty.goto(x2, y2)

def draw_digit(ch, x, y):
    s = segments.get(ch, (0,)*7)
    monty.pensize(4)
    monty.pencolor('red')
    if s[0]: seg_line(x, y+h, x+w, y+h)
    if s[1]: seg_line(x, y+h/2, x, y+h)
    if s[2]: seg_line(x+w, y+h/2, x+w, y+h)
    if s[3]: seg_line(x, y+h/2, x+w, y+h/2)
    if s[4]: seg_line(x, y, x, y+h/2)
    if s[5]: seg_line(x+w, y, x+w, y+h/2)
    if s[6]: seg_line(x, y, x+w, y)

number = "2026"
start_x = -(len(number) * (w + 10)) / 2
for i, ch in enumerate(number):
    draw_digit(ch, start_x + i * (w + 10), -h/2)
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each digit is encoded as 7 flags — the code looks up the pattern for each character.
    Will it look like a real digital display, or just scattered lines?
    Make your guess — then click Run to find out!

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

w, h = 30, 50
segments = {
    '0': (1,1,1,0,1,1,1), '1': (0,0,1,0,0,1,0),
    '2': (1,0,1,1,1,0,1), '3': (1,0,1,1,0,1,1),
    '4': (0,1,1,1,0,1,0), '5': (1,1,0,1,0,1,1),
    '6': (1,1,0,1,1,1,1), '7': (1,0,1,0,0,1,0),
    '8': (1,1,1,1,1,1,1), '9': (1,1,1,1,0,1,1),
}

def seg_line(x1, y1, x2, y2):
    monty.penup(); monty.goto(x1, y1)
    monty.pendown(); monty.goto(x2, y2)

def draw_digit(ch, x, y):
    s = segments.get(ch, (0,)*7)
    monty.pensize(4)
    monty.pencolor('red')
    if s[0]: seg_line(x, y+h, x+w, y+h)
    if s[1]: seg_line(x, y+h/2, x, y+h)
    if s[2]: seg_line(x+w, y+h/2, x+w, y+h)
    if s[3]: seg_line(x, y+h/2, x+w, y+h/2)
    if s[4]: seg_line(x, y, x, y+h/2)
    if s[5]: seg_line(x+w, y, x+w, y+h/2)
    if s[6]: seg_line(x, y, x+w, y)

number = "2026"
start_x = -(len(number) * (w + 10)) / 2
for i, ch in enumerate(number):
    draw_digit(ch, start_x + i * (w + 10), -h/2)`);
</script>

A **real-looking digital display** — the segment patterns produce recognizable digits. Were you right?

## How It Works

The `segments` dictionary maps each digit character to a 7-tuple. The positions:
- **s[0]**: top horizontal, **s[1]**: upper-left vertical, **s[2]**: upper-right vertical
- **s[3]**: middle horizontal, **s[4]**: lower-left vertical, **s[5]**: lower-right vertical, **s[6]**: bottom horizontal

## Explanation Table

| Line | What it does |
|------|-------------|
| `segments = {'0': (1,1,1,0,1,1,1), ...}` | Dictionary: digit → 7 segment flags |
| `s = segments.get(ch, (0,)*7)` | Look up the pattern, default to all off |
| `if s[0]: seg_line(...)` | Draw only segments that are on |
| `start_x = -(len(number)*(w+10))/2` | Center the display |

## Learning Check

!!! mascot-thinking "Your Turn — Display the Year You Were Born"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Change `number = "2026"` to the year you were born.
    Predict which digit shapes will appear — then run it to check!

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
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

w, h = 30, 50
segments = {
    '0': (1,1,1,0,1,1,1), '1': (0,0,1,0,0,1,0),
    '2': (1,0,1,1,1,0,1), '3': (1,0,1,1,0,1,1),
    '4': (0,1,1,1,0,1,0), '5': (1,1,0,1,0,1,1),
    '6': (1,1,0,1,1,1,1), '7': (1,0,1,0,0,1,0),
    '8': (1,1,1,1,1,1,1), '9': (1,1,1,1,0,1,1),
}

def seg_line(x1, y1, x2, y2):
    monty.penup(); monty.goto(x1, y1)
    monty.pendown(); monty.goto(x2, y2)

def draw_digit(ch, x, y):
    s = segments.get(ch, (0,)*7)
    monty.pensize(4)
    monty.pencolor('forestgreen')
    if s[0]: seg_line(x, y+h, x+w, y+h)
    if s[1]: seg_line(x, y+h/2, x, y+h)
    if s[2]: seg_line(x+w, y+h/2, x+w, y+h)
    if s[3]: seg_line(x, y+h/2, x+w, y+h/2)
    if s[4]: seg_line(x, y, x, y+h/2)
    if s[5]: seg_line(x+w, y, x+w, y+h/2)
    if s[6]: seg_line(x, y, x+w, y)

number = "12345"
start_x = -(len(number) * (w + 10)) / 2
for i, ch in enumerate(number):
    draw_digit(ch, start_x + i * (w + 10), -h/2)`);
</script>

Green digits 1-5 displayed in sequence — each digit's unique segment pattern is clearly visible.

## Experiments

1. **Draw a clock.** Display `"12:30"` by adding a colon character (two dots). You'll know it worked when a time display appears.

2. **Animate a counter.** Use a loop to display 0 through 9 one at a time. You'll know it worked when the display cycles through digits.

3. **Make the display larger.** Change `w, h = 30, 50` to `w, h = 50, 80`. You'll know it worked when much bigger digits appear.

4. **Add dim background segments.** Draw all 7 segments in dark gray before drawing the active ones. You'll know it worked when the inactive segments appear as faint shadows.

!!! mascot-celebration "Digital Numbers!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You built a working seven-segment display renderer!
    This is exactly how ATMs, gas pumps, and alarm clocks display numbers.
    Up next: **Circular Name Badge** — text arranged in a circle.
