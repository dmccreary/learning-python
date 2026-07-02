---
title: RGB Color Mixer
description: Mix red, green, and blue with sliders, read the live hex code with the changing digits highlighted, and beat match-the-color challenges.
image: /sims/rgb-color-mixer/rgb-color-mixer.png
og:image: /sims/rgb-color-mixer/rgb-color-mixer.png
twitter:image: /sims/rgb-color-mixer/rgb-color-mixer.png
social:
   cards: false
quality_score: 93
---

# RGB Color Mixer

<iframe src="main.html" height="482" width="100%" scrolling="no"></iframe>

[Run the RGB Color Mixer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Hex codes like `"#FF6B35"` look like magic spells until students see them
assembled. This mixer shows the same color three ways at once: the swatch,
the three decimal numbers, and the hex code — with each channel's two hex
digits colored to match its slider, and the last-moved channel highlighted.
A copy-ready `t.pencolor("#...")` line connects the sim directly to the
chapter's turtle labs, and challenge mode turns color matching into a game
with a closeness meter.

**Learning objective:** The student will be able to produce a target color
by adjusting red, green, and blue values and read/write its hex code.

- **Bloom's Taxonomy (2001):** Apply — *use, demonstrate, solve*
- **Interaction pattern:** parameter sliders with immediate feedback plus a
  match-the-color challenge

## How to Use

1. Drag one slider at a time and watch which two hex digits change.
2. Mix these classics: yellow (high R, high G, low B), purple (high R, low
   G, high B), and gray (all three equal).
3. Click **New Challenge** and adjust the sliders until the closeness meter
   reads "Matched!"
4. Copy the `t.pencolor(...)` line into any turtle lab in Chapter 12.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/rgb-color-mixer/main.html"
        height="482px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14), Chapter 12 (Colors, Fill, and Turtle Art)

### Duration

10 minutes

### Prerequisites

- Turtle pen colors with named colors (Chapter 5)

### Activities

1. **Predict the mix** (3 min): Students predict slider settings for yellow,
   white, black, and gray, then verify.
2. **Hex detective** (3 min): Given `"#00FF00"`, students say what color it
   is before mixing it.
3. **Challenge round** (4 min): Three New Challenge colors; students record
   the hex code of each match.

### Assessment

- Student can produce a named color (orange, purple, teal) within two tries
- Student can explain which hex digits belong to which channel
- Student can read a simple hex code like `"#FF0000"` at sight

## References

1. [Python turtle — colormode and pencolor](https://docs.python.org/3/library/turtle.html#turtle.pencolor) — official turtle color documentation
2. [MDN — Hex color notation](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color) — how hex colors work on the web
3. [p5.js](https://p5js.org/) — the JavaScript library used to build this MicroSim
