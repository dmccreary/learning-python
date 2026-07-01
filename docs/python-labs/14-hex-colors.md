# Hex Colors and Styled Text

By the end of this lesson you'll be able to:

- Set a turtle color using a **hex color code** like `'#FF5733'`
- Use `turtle.Screen().bgcolor()` to paint the canvas background
- Write styled text on the canvas with a specific font, size, and weight

Color names like `'red'` and `'blue'` are convenient, but they only give you a few dozen choices. **Hex color codes** give you access to more than 16 million colors — every shade imaginable — using a six-digit code that looks like `#FF5733`.

!!! mascot-welcome "Welcome to This Lesson!"
    ![Monty waving welcome](../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to paint with millions of colors? Today you'll learn the color codes that designers
    and web developers use every day — and draw a colorful greeting card with styled text!
    Let's code it together!

## Hex Color Codes

A **hex color code** starts with `#` followed by six characters — each a digit from 0–9 or a letter from A–F. The six characters come in three pairs, controlling how much **red**, **green**, and **blue** light to mix:

```
# RR GG BB
  FF 57 33   →  lots of red, some green, a little blue  →  a warm orange-red
```

- `#FF0000` — pure red (full red, no green, no blue)
- `#00FF00` — pure green
- `#0000FF` — pure blue
- `#FFFFFF` — white (all three at maximum)
- `#000000` — black (all three at zero)

You can use a tool like [coolors.co](https://coolors.co) or Google "hex color picker" to find any color you want.

## Styled Text

`monty.write()` draws text at the turtle's current position. Add a `font` argument to control the typeface, size, and style:

```python
monty.write("Hello!", font=("Arial", 40, "bold"))
```

The three values in `font` are: **font name**, **size in points**, and **style** (`"normal"`, `"bold"`, or `"italic"`).

## Sample Code

```python
import turtle

screen = turtle.Screen()
screen.bgcolor('#1A1A2E')

monty = turtle.Turtle()
monty.hideturtle()
monty.speed(10)

monty.penup()
monty.goto(-120, 60)
monty.color('#E94560')
monty.write("Hello,", font=("Arial", 48, "bold"))

monty.goto(-80, -20)
monty.color('#F5A623')
monty.write("Python!", font=("Arial", 48, "bold"))

monty.goto(-60, -100)
monty.color('#00C9A7')
monty.write("Let's code!", font=("Arial", 24, "italic"))
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The background is `'#1A1A2E'` — a very dark blue. The text colors are bright hex codes.
    What do you think the contrast will look like? Will the text be easy to read?
    Make your guess — then click Run!

## Try It Now

Edit the code below and click **Run** to see the result right on this page.
No account needed — everything runs in your browser.

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

screen = turtle.Screen()
screen.bgcolor('#1A1A2E')

monty = turtle.Turtle()
monty.hideturtle()
monty.speed(10)

monty.penup()
monty.goto(-120, 60)
monty.color('#E94560')
monty.write("Hello,", font=("Arial", 48, "bold"))

monty.goto(-80, -20)
monty.color('#F5A623')
monty.write("Python!", font=("Arial", 48, "bold"))

monty.goto(-60, -100)
monty.color('#00C9A7')
monty.write("Let's code!", font=("Arial", 24, "italic"))`);
</script>

Were you right? Dark navy background with vivid red, orange, and teal text — the contrast makes the colors pop in a way that named colors rarely achieve.

## How It Works

`turtle.Screen()` gives you a handle to the drawing window itself. `bgcolor()` paints the background before any turtle drawing happens — so everything you draw appears on top of it.

`monty.hideturtle()` removes the cursor icon entirely so the text stands alone without a turtle shape in the corner.

## Explanation Table

| Line | What it does |
|------|-------------|
| `turtle.Screen()` | Gets a handle to the drawing window |
| `screen.bgcolor('#1A1A2E')` | Paints the canvas background with a hex color |
| `monty.hideturtle()` | Hides the turtle icon — useful for text-only drawings |
| `monty.goto(-120, 60)` | Moves the text cursor to that position |
| `monty.write("Hello,", font=("Arial", 48, "bold"))` | Writes text in 48-point bold Arial |

!!! mascot-tip "Finding the Perfect Color"
    ![Monty with a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    Search Google for **"hex color picker"** and you'll see a color wheel — click any color and copy
    the `#RRGGBB` code it shows. Paste it directly into your Python string!

## Learning Check

!!! mascot-thinking "Your Turn — Design Your Own Card"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below sets up a background but writes only one line of text.
    Add **two more** `write()` calls with different hex colors and positions to complete
    a three-line greeting card. Choose your own colors using a hex color picker!

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

screen = turtle.Screen()
screen.bgcolor('#0D3B66')

monty = turtle.Turtle()
monty.hideturtle()
monty.speed(10)
monty.penup()

monty.goto(-100, 60)
monty.color('#FAF0CA')
monty.write("Hello, Coder!", font=("Arial", 36, "bold"))

# Add two more write() lines here with different colors and positions`);
</script>

## Experiments

Try these changes to the greeting card code. Predict first, then run!

1. Change `screen.bgcolor('#1A1A2E')` to `screen.bgcolor('#FFFFFF')` (white).
   **You'll know it worked when** the background turns white — now check if the text is still readable.

2. Change one font style from `"bold"` to `"italic"`.
   **You'll know it worked when** that word appears slanted instead of thick.

3. Change a font size from `48` to `72`.
   **You'll know it worked when** the text is noticeably larger and may extend off-screen.

4. Use `'Times New Roman'` as the font name for one line.
   **You'll know it worked when** that line has a serif typeface instead of the default sans-serif.

5. Add a filled rectangle behind the text using `begin_fill()`, `end_fill()`, and a loop to draw four sides — then use `hideturtle()` and write the text on top.
   **You'll know it worked when** the text appears inside a colored box.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You unlocked 16 million colors and styled text — the building blocks of digital design!
    In the next lab you'll use math functions to plot a sine wave across the canvas.
    Let's code it together!
