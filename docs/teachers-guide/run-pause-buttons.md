# The Run ⇄ Pause Button

Every Skulpt lab in this textbook uses a single button that changes its label
as the program's state changes. This page explains what the button does in
each state, how that compares to other Python environments, and why we chose
this design for a post-Scratch audience.

## What the Button Does

| Label | When it appears | What clicking does |
|-------|----------------|-------------------|
| **▶ Run** | No program is running | Runs the code in the editor |
| **❚❚ Pause** | A program is running | Freezes the program at the next drawing step |
| **▶ Resume** | Paused, code unchanged | Continues exactly where the program stopped |
| **▶ Run New Code** | Paused, code has been edited | Discards the paused program, clears the canvas, and runs the edited code from the start |

The **Reset** button stops a running or paused program and restores the
original code.

Pausing is especially useful in the turtle graphics labs: long-running
fractals and tilings can be frozen mid-draw so the class can discuss the
pattern, or so a student can take a screenshot of an interesting intermediate
state.

If a student edits while paused and then undoes their changes (back to the
exact code that was running), the label flips back to **Resume** — the
program really is unchanged, so it can safely continue.

## How Other Python Environments Handle This

Most Python teaching tools do not have a pause button at all:

- **IDLE, the terminal, and Thonny** offer Run and Stop. A running program
  can only be killed (Ctrl+C or a stop button), and editing the source never
  affects a program that is already running — you always stop and rerun.
- **Jupyter notebooks** let you interrupt the kernel, but there is no
  "freeze and continue," and code changes only matter the next time a cell
  is executed.
- **Trinket** (used by an earlier edition of this book) used a Run/Stop
  toggle: the Run button became Stop while the program ran.

Where pause/resume *is* standard is **debuggers**: a program stopped at a
breakpoint resumes exactly where it left off, running the old code, because
Python cannot swap new source code into a live program. A few professional
IDEs offer "edit and continue," but the feature is rare and fragile, and
Python has never really supported it.

Meanwhile, our students mostly arrive from **Scratch**, where editing a
script *while it runs* takes effect live. Their instinct is: "I changed the
code, so my change should show up."

## Why We Chose This Design

The button's behavior is a deliberate hybrid of these conventions:

1. **Pause/resume comes from debuggers and simulation tools** — it exists
   because the drawing itself is worth stopping to look at.
2. **Restart-on-edit meets the Scratch instinct honestly.** Silently
   resuming old code after an edit (pure debugger semantics) would violate
   the student's expectation; live-editing a running Python program is
   technically impossible. Starting a fresh run with the new code is the
   honest middle ground.
3. **The "Run New Code" label makes the outcome predictable.** The moment a
   paused program's code is edited, the button says what will happen next —
   the student is never surprised by a cleared canvas, because they were
   told they are running new code, not resuming.

There is also a genuine Python lesson hiding in this button: **a program is
read once, at start.** Changing the source never changes a program that is
already running — a true fact about Python (and most languages) that Scratch
deliberately hides. When a student asks why their edit didn't change the
drawing until the restart, that is a teachable moment, and the button's
label is the answer: edits require running *new code*.

## Talking Points for the Classroom

- "Pause is a camera, not an editor" — pause to look, screenshot, and
  discuss; edit whenever you like, but edits mean starting over.
- Ask students: *why* can't Python push your edit into the running program?
  (The program was translated and started already; the editor text is just
  text until Run reads it.)
- Students who undo their edits and see **Run New Code** flip back to
  **Resume** have discovered the rule precisely: the button compares the
  editor against the code that is actually running.
