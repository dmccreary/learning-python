---
title: Regex Match Lab
description: Type a pattern, watch every match highlight live in the sample text, and read the pattern as plain-English chips.
image: /sims/regex-match-lab/regex-match-lab.png
og:image: /sims/regex-match-lab/regex-match-lab.png
twitter:image: /sims/regex-match-lab/regex-match-lab.png
social:
   cards: false
quality_score: 95
---

# Regex Match Lab

<iframe src="main.html" height="372" width="100%" scrolling="no"></iframe>

[Run the Regex Match Lab MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

Regular expressions are a language of invisible rules, and beginners cannot
tell which part of the pattern matched which characters. This lab closes the
gap two ways at once: every keystroke in the pattern box re-highlights all
matches in the sample text (with a live `re.findall` result line), and a
chip strip translates the pattern into plain English — `\d` "a digit 0-9",
`{3}` "3 times", `-` "the character -". Preset buttons cover the chapter's
core elements: escapes, quantifiers, character classes, and alternation.

**Learning objective:** The student will be able to test a regular
expression against sample text and attribute each match to the pattern
element that produced it.

- **Bloom's Taxonomy (2001):** Apply → Analyze — *use, test, deconstruct*
- **Interaction pattern:** live pattern editor with a plain-English
  explainer strip
- **Library:** custom HTML (no charting library needed)

## How to Use

1. Read the chips for the starting pattern `\d{3}-\d{4}` aloud, predict the
   matches, then check the highlights.
2. Delete one character from the pattern at a time and watch which matches
   survive.
3. Try every preset: `\d+`, `[A-Z]\w+`, `cat|dog`, and `\w+ing`.
4. Build your own: can you write a pattern that matches only "sleeping" and
   "singing" but not "ing"?

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/regex-match-lab/main.html"
        height="372px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 29 (Text Processing and Regular Expressions)

### Duration

10-15 minutes

### Prerequisites

- Strings and raw strings (Chapters 8 and 29)
- re.findall() (Chapter 29)

### Activities

1. **Read-aloud drill** (4 min): For each preset, students read the chip
   strip aloud before looking at the highlights, then verify.
2. **One-character experiments** (4 min): Students change `{3}` to `{2}` in
   the phone pattern and explain the result.
3. **Pattern golf** (5 min): Challenge — match all three "-ing" words with
   the shortest possible pattern.

### Assessment

- Student can translate a chapter-scope pattern into plain English
- Student predicts findall's match count for a given pattern and text
- Student writes a working pattern for a described target (e.g., "every capitalized word")

## References

1. [Python Documentation — re module](https://docs.python.org/3/library/re.html) — official regular expression documentation
2. [Python HOWTO — Regular Expression HOWTO](https://docs.python.org/3/howto/regex.html) — a gentler official guide
