# Content Rules — Python Lab Generator

Condensed from `CONTENT-GENERATION-GUIDELINES.md` (project root). Read that file for the full authoritative ruleset.

---

## Teaching Philosophy

Labs are built on the "See It, Run It, Modify It" cycle:
1. **See it** — short working program in the editable code editor with prose explanation
2. **Run it** — student clicks Run, turtle draws on the canvas
3. **Modify it** — Experiments section gives 3–5 specific invitations to change the code

Every concept must have a **Predict Before You Run** moment (mascot-thinking immediately above the Try It Now section) and a **Learning Check** (second Skulpt lab where code is incomplete or buggy).

---

## Mascot Rules

### Admonition Types

| Type | Image | When to use |
|------|-------|-------------|
| `mascot-welcome` | `welcome.png` | Lesson opening — always first, always present |
| `mascot-thinking` | `thinking.png` | Prediction prompt before lab; key concept; learning check (missing line) |
| `mascot-tip` | `tip.png` | Scratch Bridge; helpful hint or shortcut |
| `mascot-warning` | `warning.png` | Common mistake; pitfall; learning check (find the bug) |
| `mascot-encourage` | `encouraging.png` | Difficult content where students may struggle |
| `mascot-celebration` | `celebration.png` | End of lesson — always last, always present |
| `mascot-neutral` | `neutral.png` | General sidebar information |

### Hard Limits

- Max **6** mascot admonitions per lab
- **Never** back-to-back — always separate with at least one paragraph
- Exactly **one** `mascot-welcome` (first admonition)
- Exactly **one** `mascot-celebration` (last admonition)

### Image Paths by Directory Depth

| File location | Image path |
|---------------|------------|
| `docs/python-labs/*.md` | `../img/mascot/` |
| `docs/chapters/##-slug/index.md` | `../../img/mascot/` |
| `docs/*.md` (root level) | `img/mascot/` |
| `docs/strategy/index.md` (one deep) | `../img/mascot/` |

Always use Markdown image syntax: `![alt](path){ class="mascot-admonition-img" }`
Never use `<img>` HTML tags.

---

## Lab Sizing

| Chapter range | Lines of Python |
|---------------|----------------|
| Introductory (Ch 1–5) | 4–8 lines |
| Mid-course (Ch 6–18) | 8–20 lines |
| Advanced (Ch 19+) | No strict limit; prefer multiple short labs |

---

## Learning Objectives

- 1–3 objectives per lab
- Written from student's perspective: "By the end of this lesson you'll be able to:"
- Use concrete verbs: *draw, write, fix, explain, change, build* — not "understand" or "know about"
- Keep at 5th-grade reading level

---

## Scratch Bridge

Include a `mascot-tip "Scratch Bridge"` admonition whenever a Python concept has a Scratch analogue (required for Chapters 1–14, optional in Chapters 11–14, skip in Chapter 15+).

Common bridges:
| Scratch | Python |
|---------|--------|
| Move ___ steps | `forward(n)` |
| Turn ↻ ___ degrees | `right(n)` |
| Turn ↺ ___ degrees | `left(n)` |
| Pen down / Pen up | `pendown()` / `penup()` |
| Set pen color | `pencolor("red")` |
| Repeat ___ | `for i in range(n):` |
| If ___ then | `if condition:` |
| Set ___ to ___ | `variable = value` |
| Say ___ | `print(...)` |

---

## New Vocabulary

When a technical term appears for the first time:
1. **Bold** it: `**parameter**`
2. Define immediately in one plain-English sentence with a concrete analogy
3. Show it in working code on the same page

Never introduce two new terms in the same sentence. Never bold a term on its second or later appearance.

---

## Prediction Prompts

- Ask one specific, answerable question: "How many sides?", "What color?", "How many times will the loop run?"
- Not vague: "What happens?"
- Calibrate difficulty so ~50% of students guess correctly
- Close the loop after the lab: "Were you right? [one sentence]"
- Skip prediction prompts on Learning Check labs (student already has a task)

---

## Learning Checks

Two types:

**Add the missing line** — use `mascot-thinking`:
```markdown
!!! mascot-thinking "Your Turn — Add the Missing Line"
    ![Monty thinking](../img/mascot/thinking.png){ class="mascot-admonition-img" }
    [Describe what's missing and what the student should add]
```

**Find and fix the bug** — use `mascot-warning`:
```markdown
!!! mascot-warning "Spot the Bug!"
    ![Monty warning](../img/mascot/warning.png){ class="mascot-admonition-img" }
    [Describe the incorrect symptom; ask student to find and fix the mistake]
```

The Learning Check lab always uses the `-2` suffix on the three element IDs (`cm-editor-2`, `cm-output-2`, `cm-turtle-2`) and in the `initCmLab` / `runCmLab` / `resetCmLab` calls.

---

## Experiments Section

- 3–5 numbered items
- Each item: specific change + success criterion
- Format: "Change X. **You'll know it worked when** [observable result]."
- Progress from easy to hard; end with one open-ended creative challenge
- Example:

```markdown
1. Change `100` to `150` in all four `forward` calls.
   **You'll know it worked when** the square is noticeably larger.

2. Add `monty.color('red')` before the first `forward`.
   **You'll know it worked when** all four sides are red.
```

---

## Error Message Notes

Only add an "If you see a red error message" note for early-chapter labs (Chapters 1–5 equivalent difficulty):

```markdown
**If you see a red error message:** Check your spelling — Python is case-sensitive,
so `Forward(100)` won't work but `forward(100)` will.
Also make sure every line inside a loop is indented by exactly 4 spaces.
```

---

## One Concept Per Lab

Each Skulpt demo lab introduces exactly **one** new concept. If a lesson covers three new turtle commands, write three short sequential labs — not one lab that introduces all three at once.

---

## Writing Style

- Audience: ages 10–14, post-Scratch
- Tone: friendly, encouraging, never condescending
- Sentences: short and clear, 5th-grade reading level
- Code comments: only for non-obvious lines
- Never link to Trinket or off-site tools
- Use `#` comments in Python code sparingly — only for lines that need explanation
