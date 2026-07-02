---
hide:
    - toc
---
# Binary Tree Name

By the end of this lab you'll be able to:

- Convert a letter to a number with `ord()` and pull out its binary bits with `//` and `%`
- Trace a path down a binary tree — left for 0, right for 1
- Draw the same structure at every level using nested loops

Every letter in your name is secretly a number, and every number is secretly a string of bits. This lab draws a five-level binary tree, then traces each letter of a name down the tree — branching left for every 0 bit and right for every 1 bit. Each letter lands on its own leaf!

!!! mascot-welcome "Welcome to Binary Tree Name!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Computers store letters as numbers, and numbers as bits.
    Today you'll *see* those bits — as colorful paths through a tree.
    Let's code it together!

## How It Works

`ord('M') - 64` gives 13, because M is the 13th letter of the alphabet. Written in five bits, 13 is `01101`. Starting at the root, the turtle reads the bits from left to right: 0 means "go down-left", 1 means "go down-right". After five moves every letter arrives at its own unique leaf — that's why five bits can label 32 different letters.

## Sample Code

```python
import turtle
monty = turtle.Turtle()
monty.speed(0)
monty.hideturtle()

name = 'MONTY'
top = 160
drop = 50

pos = 0
for ch in name:
    n = ord(ch) - 64
    monty.penup()
    monty.goto(0, top)
    monty.pendown()
    x = 0
    y = top
    off = 88
    d = 16
    while d >= 1:
        bit = (n // d) % 2
        if bit == 1:
            x = x + off
        else:
            x = x - off
        y = y - drop
        monty.goto(x, y)
        off = off / 2
        d = d // 2
    pos = pos + 1
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    MONTY has 5 letters, but the letter T appears once and Y once — all 5 letters are
    different. Will all 5 colored paths end on **different** leaves, or will any two
    paths land on the same leaf? Make your guess, then click Run!

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

name = 'MONTY'
colors = ['crimson', 'darkorange', 'forestgreen', 'royalblue', 'purple']
top = 160
drop = 50

monty.pencolor('lightgray')
monty.pensize(1)
for level in range(5):
    for i in range(2 ** level):
        x = 0
        off = 88
        for j in range(level):
            bit = (i // (2 ** (level - 1 - j))) % 2
            if bit == 1:
                x = x + off
            else:
                x = x - off
            off = off / 2
        y = top - drop * level
        monty.penup()
        monty.goto(x, y)
        monty.pendown()
        monty.goto(x - off, y - drop)
        monty.penup()
        monty.goto(x, y)
        monty.pendown()
        monty.goto(x + off, y - drop)

monty.pensize(3)
pos = 0
for ch in name:
    n = ord(ch) - 64
    monty.pencolor(colors[pos % 5])
    monty.penup()
    monty.goto(0, top)
    monty.pendown()
    x = 0
    y = top
    off = 88
    bits = ''
    d = 16
    while d >= 1:
        bit = (n // d) % 2
        bits = bits + str(bit)
        if bit == 1:
            x = x + off
        else:
            x = x - off
        y = y - drop
        monty.goto(x, y)
        off = off / 2
        d = d // 2
    monty.penup()
    monty.goto(x, y - 16)
    monty.write(ch, False, 'center')
    monty.goto(-180 + pos * 74, -140)
    monty.write(ch + ' = ' + bits, False, 'left')
    pos = pos + 1`);
</script>

Every letter lands on its own leaf — different letters always mean different bit patterns, so their paths must split apart somewhere. Were you right?

## How It Works

The gray scaffold is drawn first: at each of the 5 levels, the loop visits every node (there are `2 ** level` of them) and draws its two child branches. The branch spread `off` halves at every level (88, 44, 22, 11...) so branches never collide. Then each letter's number is peeled apart high-bit-first: dividing by 16, 8, 4, 2, 1 and taking `% 2` yields the five bits in reading order, steering the colored pen down the tree.

## Explanation Table

| Line | What it does |
|------|-------------|
| `n = ord(ch) - 64` | Letter position in the alphabet: A=1 ... Z=26 |
| `bit = (n // d) % 2` | Extracts one bit; d counts down 16, 8, 4, 2, 1 |
| `off = off / 2` | Halves the branch spread at each level down |
| `monty.write(ch + ' = ' + bits, ...)` | Prints the letter's full bit string below the tree |

## Learning Check

!!! mascot-thinking "Your Turn — Encode Your Initials"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    This smaller version traces just three letters — but it's set to 'ABC'.
    A is 1, which in five bits is `00001` — four moves left, then one right.
    Change `name` to **your own initials** and predict which side of the tree
    each letter will land on before you run it!

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

name = 'ABC'
colors = ['crimson', 'royalblue', 'forestgreen']
top = 160
drop = 50

pos = 0
for ch in name:
    n = ord(ch) - 64
    monty.pencolor(colors[pos])
    monty.pensize(3)
    monty.penup()
    monty.goto(0, top)
    monty.pendown()
    x = 0
    y = top
    off = 88
    bits = ''
    d = 16
    while d >= 1:
        bit = (n // d) % 2
        bits = bits + str(bit)
        if bit == 1:
            x = x + off
        else:
            x = x - off
        y = y - drop
        monty.goto(x, y)
        off = off / 2
        d = d // 2
    monty.penup()
    monty.goto(x, y - 20)
    monty.write(ch, False, 'center')
    pos = pos + 1`);
</script>

Letters early in the alphabet (small numbers) start with 0 bits, so they drift left; letters from Q onward start with a 1 bit and go right. Initials like 'AZ' split to opposite edges of the tree!

## Experiments

1. **Trace the whole alphabet.** Set `name` to 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' and use `colors[pos % 5]`. You'll know it worked when every leaf from the far left to position 26 has a path.

2. **Six-bit tree.** Change `top` to 180, start `d` at 32, and add a sixth level to the scaffold loop (`range(6)`). You'll know it worked when the tree gains a whole extra row of tinier branches.

3. **Count the leaves.** Add a loop that puts a tiny `monty.dot(4, 'gray')` at all 32 leaf positions of the bottom row. You'll know it worked when you see exactly 32 dots.

4. **Secret word decoder.** Delete the letter labels (both `write` calls) and ask a friend to decode your word from the paths alone. You'll know it worked when they can read the bits right off the drawing.

!!! mascot-celebration "You Speak Binary!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just drew what every computer does with text — turn letters into bits!
    ASCII, Unicode, files, and the whole internet rest on this one idea.
    Up next: **Turtle Chase** — a predator turtle hunts its prey with `atan2()`.
