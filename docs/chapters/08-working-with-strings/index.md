---
title: Working with Strings
description: Explore Python's string type — quotes, concatenation, repetition, escape characters, len(), immutability, raw strings, and turtle.write() for canvas labels.
generated_by: claude skill chapter-content-generator
date: 2026-06-28 10:40:00
version: 0.09
---

# Working with Strings

## Summary

Text in Python is called a *string*. This chapter introduces the string type,
single vs double quotes, concatenation (joining strings), repetition, escape
characters like `\n`, measuring length with `len()`, raw strings, and
string immutability. As a practical project you'll use `turtle.write()` to
draw labels and text directly onto your turtle canvas.

## Concepts Covered

This chapter covers the following 9 concepts from the learning graph:

1. String Type
2. Single vs Double Quotes
3. String Concatenation
4. String Repetition
5. Escape Characters
6. String Length with len()
7. String Immutability
8. Raw Strings
9. Writing Text with turtle.write()

## Prerequisites

This chapter builds on concepts from:

- [Chapter 5: Drawing with Turtle Graphics](../05-drawing-with-turtle/index.md)
- [Chapter 7: For Loops and Drawing Shapes](../07-for-loops-and-shapes/index.md)

---

By the end of this lesson you'll be able to:

- Create strings using either single or double quotes
- Join strings with `+` (concatenation) and repeat them with `*`
- Use escape characters like `\n` and `\t` to control text layout
- Draw labeled text directly onto the turtle canvas with `turtle.write()`

Numbers are not the only data Python works with.
**Text** — names, sentences, emoji, file paths, URLs — is just as important.
Python calls text a **string**, and this chapter gives you the tools to create, combine, and display strings in your programs.

!!! mascot-welcome "Welcome to Chapter 8!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Strings open up a whole new side of Python! Once you know how to work with text, your turtle programs can draw labels, scores, and messages right onto the canvas. Let's code it together!

## The String Type

A **string** is any sequence of characters — letters, digits, spaces, punctuation, emoji — wrapped in quotation marks.
Python stores strings with the type name `str`.

```python
greeting = "Hello, Coder!"
species  = 'Python snake'
number   = "42"             # still a string, not an integer!
```

Notice that `"42"` (with quotes) is a *string*, not the number 42.
If you tried to add `"42" + 1` Python would give you an error — strings and numbers are different types.

## Single vs Double Quotes

Python accepts both single quotes `'...'` and double quotes `"..."` for strings.
They work identically — choose whichever you prefer, just be consistent.

The main reason to know both is **when your string contains an apostrophe or quotation marks**:

```python
msg1 = "It's a great day!"     # apostrophe inside — use double quotes
msg2 = 'She said "wow!"'       # quote marks inside — use single quotes
```

If you accidentally use the same quote type inside and outside the string, Python gets confused and gives you a `SyntaxError`.

## String Concatenation

**Concatenation** means joining two or more strings end-to-end.
Python uses the `+` operator for concatenation:

```python
first = "Monty"
last  = "Python"
full  = first + " " + last
print(full)    # Monty Python
```

You can concatenate as many strings as you like in a single expression.
Notice that Python does **not** add a space automatically — you have to include `" "` yourself if you want one.

The program below builds a greeting message from two variables.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Look at the last `print()` call before you click Run.
    `name` is `"Alex"` and `greeting` is `"Hello, "`.
    What exactly will the program print on that last line?
    Make your guess — then find out!

## Try It Now

Edit the code below and click **Run** to see the result.

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

<div class="cm-lab cm-text-only">
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
initCmLab('', `name = "Alex"
greeting = "Hello, "
farewell = "See you later, "

# Concatenation: joining strings with +
print(greeting + name + "!")
print(farewell + name + "!")

# Repetition: repeat a string with *
print("-" * 20)
print("Ha" * 4)`);
</script>

Were you right? The first `print()` outputs `Hello, Alex!`. Notice how `"-" * 20` creates a divider line of exactly twenty dashes — much faster than typing them one by one!

## String Repetition

Just as `+` joins strings, `*` **repeats** a string a given number of times:

```python
print("Echo! " * 3)    # Echo! Echo! Echo!
print("=" * 30)        # ============================== (30 equals signs)
```

String repetition is handy for creating visual separators, borders, and patterns.
The number on the right must be an integer — `"ha" * 2.5` gives an error.

## Escape Characters

Some characters can't be typed directly inside a string.
Python provides **escape characters** — special two-character sequences that start with a backslash `\`:

| Escape | Meaning | Example output |
|--------|---------|----------------|
| `\n` | New line | Moves to the next line |
| `\t` | Tab | Adds a tab-sized space |
| `\\` | Literal backslash | Prints `\` |
| `\'` | Literal single quote | Prints `'` inside a single-quoted string |
| `\"` | Literal double quote | Prints `"` inside a double-quoted string |

```python
print("Line one\nLine two\nLine three")
print("Name:\tMonty\nAge:\t12")
print("She said \"Wow!\"")
```

The `\n` (newline) is one of the most-used escape characters — it lets one `print()` call produce multiple lines of output.

!!! mascot-tip "Scratch Bridge"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    In Scratch, the **Say** block displays one message at a time in a speech bubble. Python's `print()` is similar, but much more flexible — you can print multiple lines, add tabs, join variables and text, and display numbers all in one call!

## String Length with len()

The `len()` function counts how many characters are in a string — including spaces and punctuation:

```python
word  = "Python"
print(len(word))          # 6
sentence = "Hello, world!"
print(len(sentence))      # 13
print(len(""))            # 0  (empty string has length zero)
```

`len()` is one of Python's **built-in functions** — you don't need to import anything, it just works.
You'll use `len()` constantly: checking if a password is long enough, measuring user input, or controlling how many characters to display.

## String Immutability

Once a string is created, you **cannot change individual characters inside it**.
This property is called **immutability**:

```python
name = "Monty"
name[0] = "B"    # ← ERROR! You can't change a single character
```

This surprises beginners who expect strings to work like a list.
To "change" a string, you create a *new* string from the old one:

```python
name = "Monty"
name = "B" + name[1:]    # creates a brand-new string "Bonty"
print(name)              # Bonty
```

Immutability is not a bug — it makes strings faster and safer to use.
You will learn string slicing (the `[1:]` part above) in a later chapter.

## Raw Strings

Sometimes you want Python to ignore escape characters entirely.
For example, if you are writing a Windows file path like `C:\new_folder\text.txt`, the `\n` and `\t` would be interpreted as a newline and a tab!

A **raw string** is created by putting `r` before the opening quote.
Inside a raw string, backslashes are treated as literal characters:

```python
# Without r: \n becomes a newline, \t becomes a tab
print("C:\new_folder\text.txt")    # messy output!

# With r: backslashes are literal
print(r"C:\new_folder\text.txt")   # C:\new_folder\text.txt
```

Raw strings are most commonly used for file paths and patterns (which you'll learn about in Chapter 29).

!!! mascot-warning "Watch Out!"
    ![Monty warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A raw string cannot end with an **odd** number of backslashes. `r"path\"` gives a `SyntaxError` because the last `\"` looks like an escaped quote mark. If you need to end a string with a backslash, just use a regular string and write `"\\"` (two backslashes = one literal backslash).

## Writing Text with turtle.write()

The `turtle.write()` function draws a text label directly onto the canvas at the turtle's current position.
This lets your drawings include titles, captions, scores, or any other text.

The basic form is:

```python
t.write("Hello, turtle world!", font=("Arial", 16, "normal"))
```

The `font` argument is a tuple of three values: the font name, the size in points, and the style (`"normal"`, `"bold"`, or `"italic"`).

The program below draws a polygon and then labels it.

!!! mascot-thinking "Your Turn — Add the Label"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The program below draws a pentagon but doesn't label it yet.
    Add **one line** after the loop to call `t.write()` and display the text `"Pentagon"` on the canvas.
    **Hint:** move `t.penup()` and position the turtle first with `t.goto(-40, -120)`, then call `t.write()`.

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
t = turtle.Turtle()
t.speed(3)

# Draw a pentagon
sides = 5
turn_angle = 360 / sides
for i in range(sides):
    t.forward(80)
    t.right(turn_angle)

# Move to a label position and write the name
t.penup()
t.goto(-40, -120)
# Add one line here to call t.write() and display "Pentagon"
# Use font=("Arial", 16, "bold") for a nice look`);
</script>

Once the label appears, try changing the font size, style, or the text itself!

## Experiments

Try these changes to the programs above. For each one, predict what will happen first, then run it to check!

1. In the first lab, change `name = "Alex"` to your own name. **You'll know it worked when** the greeting prints your name.
2. Change `"Ha" * 4` to `"Ha" * 10`. **You'll know it worked when** you see ten "Ha"s in a row.
3. In the turtle lab, add a `print(len("Pentagon"))` line. **You'll know it worked when** you see `8` printed below the canvas.
4. Change the label text to `"My " + str(sides) + "-sided shape"`. **You'll know it worked when** the label reads "My 5-sided shape".
5. Try changing `sides = 5` to `sides = 8` and the label to `"Octagon"`. **You'll know it worked when** you see an eight-sided shape with the correct label.

!!! mascot-celebration "Great Work!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You've mastered Python's string type! You can join strings with `+`, repeat them with `*`, add newlines and tabs with escape characters, measure their length with `len()`, and even draw text labels right onto the turtle canvas. Strings are everywhere in programming — and now you know how to use them. Let's keep coding it together!

[See Annotated References](./references.md)
