---
title: Image Processing with Pillow
description: Open, display, resize, crop, convert, and save images with Python's Pillow (PIL) library — and understand pixel-level data
generated_by: claude skill chapter-content-generator
date: 2026-06-28 15:40:00
version: 0.09
---

# Image Processing with Pillow

By the end of this lesson you'll be able to:

- Open and display images with **Pillow** (`PIL`)
- Inspect image size, mode, and pixel data
- Resize, crop, flip, and rotate images
- Convert between color modes (RGB, grayscale, RGBA)
- Apply basic filters and save to different formats

A photograph on your phone is just a grid of colored pixels. Python can read, analyze, and transform that grid — automating tasks like resizing profile pictures, converting formats, adding watermarks, or applying artistic filters.

!!! mascot-welcome "Welcome to Chapter 34!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Pillow is Python's go-to library for image work — and it's surprisingly simple.
    From a school photo to a satellite image, the same functions apply!
    Let's start editing! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## What is Pillow?

**Pillow** is the maintained fork of the classic **PIL** (Python Imaging Library). You install it with:

```bash
pip install pillow
```

But you import it using the original name:

```python
from PIL import Image
```

Pillow supports over 30 image formats including JPEG, PNG, GIF, BMP, TIFF, and WebP.

## Opening and Inspecting Images

`Image.open(filepath)` loads an image file into memory.
The returned object has several useful attributes:

| Attribute | What it tells you |
|-----------|------------------|
| `image.size` | `(width, height)` in pixels |
| `image.width` | Width in pixels |
| `image.height` | Height in pixels |
| `image.mode` | Color mode: `"RGB"`, `"RGBA"`, `"L"` (grayscale), `"P"` (palette) |
| `image.format` | File format: `"JPEG"`, `"PNG"`, etc. (None if created in code) |

```python
from PIL import Image

img = Image.open("photo.jpg")
print(img.size)    # (1920, 1080)
print(img.mode)    # "RGB"
img.show()         # opens in the system image viewer
```

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below creates a tiny image from scratch using pixel data.
    What color do you think pixel (1,1) will be — red, green, or blue?
    Predict first, then run it!

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">from PIL import Image

# Create a 3x3 RGB image manually:
# Each row is a list of (R, G, B) tuples
pixels = [
    [(255,   0,   0), (  0, 255,   0), (  0,   0, 255)],  # red, green, blue
    [(255, 255,   0), (  0, 255, 255), (255,   0, 255)],  # yellow, cyan, magenta
    [(255, 255, 255), (128, 128, 128), (  0,   0,   0)],  # white, gray, black
]

img = Image.new("RGB", (3, 3))
for row_idx, row in enumerate(pixels):
    for col_idx, color in enumerate(row):
        img.putpixel((col_idx, row_idx), color)

print("Image size:", img.size)
print("Image mode:", img.mode)
print("Pixel at (0,0):", img.getpixel((0, 0)))   # top-left
print("Pixel at (1,0):", img.getpixel((1, 0)))   # top-middle
print("Pixel at (1,1):", img.getpixel((1, 1)))   # center
</textarea>
    <div id="button-row">
      <button id="run-btn" onclick="runSkulpt()">&#9654; Run</button>
      <button id="reset-btn" onclick="resetSkulpt()">&#8635; Reset</button>
    </div>
    <pre id="output"></pre>
  </div>
  <div id="canvas-container">
    <div id="turtle-target"></div>
  </div>
</div>

## Understanding Pixel Data

A pixel in RGB mode is a tuple of three integers — `(red, green, blue)` — each ranging from 0 to 255.

| Color | RGB |
|-------|-----|
| Red | (255, 0, 0) |
| Green | (0, 255, 0) |
| Blue | (0, 0, 255) |
| White | (255, 255, 255) |
| Black | (0, 0, 0) |
| Yellow | (255, 255, 0) |
| Cyan | (0, 255, 255) |
| Gray | (128, 128, 128) |

`img.getpixel((x, y))` returns the color of one pixel. Note: x = column (left→right), y = row (top→bottom).

## Resizing and Thumbnailing

`image.resize((width, height))` creates a new image at the requested size.
The original is not modified — Pillow operations always return a new image.

```python
from PIL import Image

img = Image.open("photo.jpg")
small = img.resize((200, 150))
small.save("photo_small.jpg")
```

`image.thumbnail((max_width, max_height))` is smarter — it shrinks the image to fit within the box **while keeping the aspect ratio**. It modifies the image in place:

```python
img.thumbnail((400, 400))   # fits in 400×400 box, keeps proportions
```

## Cropping Images

`image.crop((left, upper, right, lower))` extracts a rectangular region.
The four numbers are pixel coordinates measured from the top-left corner.

```python
# Crop a 100×100 region starting at pixel (50, 30):
region = img.crop((50, 30, 150, 130))
region.save("cropped.jpg")
```

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false">from PIL import Image

# Create a 10x10 image with a color gradient:
img = Image.new("RGB", (10, 10))
for y in range(10):
    for x in range(10):
        r = int(x / 9 * 255)
        g = int(y / 9 * 255)
        b = 100
        img.putpixel((x, y), (r, g, b))

print("Original size:", img.size)

# Crop the top-right quadrant:
cropped = img.crop((5, 0, 10, 5))
print("Cropped size:", cropped.size)
print("Cropped pixel (0,0):", cropped.getpixel((0, 0)))
print("Cropped pixel (4,4):", cropped.getpixel((4, 4)))
</textarea>
    <div id="button-row-2">
      <button id="run-btn-2" onclick="runSkulpt('-2')">&#9654; Run</button>
      <button id="reset-btn-2" onclick="resetSkulpt('-2')">&#8635; Reset</button>
    </div>
    <pre id="output-2"></pre>
  </div>
  <div id="canvas-container-2">
    <div id="turtle-target-2"></div>
  </div>
</div>

## Flipping and Rotating

`image.transpose(method)` flips or rotates the image.
The method constants live in `Image.Transpose` (or the older `Image` namespace):

```python
from PIL import Image

img = Image.open("photo.jpg")
flipped_h = img.transpose(Image.Transpose.FLIP_LEFT_RIGHT)   # mirror horizontally
flipped_v = img.transpose(Image.Transpose.FLIP_TOP_BOTTOM)   # mirror vertically
rotated   = img.rotate(90)                                    # rotate 90° counter-clockwise
```

`img.rotate(angle)` rotates by the given angle — positive angles rotate counter-clockwise.

## Color Mode Conversion

`image.convert(mode)` changes the color mode of an image.

The most common conversions are:

| Conversion | What it does |
|------------|-------------|
| `img.convert("L")` | Convert to grayscale (L = luminance) |
| `img.convert("RGB")` | Convert to 3-channel color |
| `img.convert("RGBA")` | Add transparency channel |
| `img.convert("1")` | Convert to 1-bit black and white |

Converting to grayscale is a simple way to apply a classic photo effect:

```python
from PIL import Image

img  = Image.open("photo.jpg")
gray = img.convert("L")
gray.save("photo_grayscale.jpg")
```

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">from PIL import Image

# Create a small color image, then convert it to grayscale:
img = Image.new("RGB", (4, 4))
colors = [
    (255, 0,   0),   (0,   255, 0),   (0,   0,   255), (255, 255, 0),
    (255, 0, 255),   (0,   255, 255), (128, 0,   0),   (0,   128, 0),
    (0,   0, 128),   (128, 128, 0),   (128, 0,   128), (0,   128, 128),
    (255, 128, 0),   (128, 255, 0),   (0,   255, 128), (0,   128, 255),
]
for i, c in enumerate(colors):
    img.putpixel((i % 4, i // 4), c)

gray = img.convert("L")

print("Original RGB pixels (row 0):")
for x in range(4):
    print(f"  ({x},0): {img.getpixel((x, 0))}")

print("Grayscale pixels (row 0):")
for x in range(4):
    print(f"  ({x},0): {gray.getpixel((x, 0))}")
</textarea>
    <div id="button-row-3">
      <button id="run-btn-3" onclick="runSkulpt('-3')">&#9654; Run</button>
      <button id="reset-btn-3" onclick="resetSkulpt('-3')">&#8635; Reset</button>
    </div>
    <pre id="output-3"></pre>
  </div>
  <div id="canvas-container-3">
    <div id="turtle-target-3"></div>
  </div>
</div>

## Applying Filters

Pillow's `ImageFilter` module provides ready-made filters:

```python
from PIL import Image, ImageFilter

img = Image.open("photo.jpg")

blurred   = img.filter(ImageFilter.BLUR)
sharpened = img.filter(ImageFilter.SHARPEN)
edges     = img.filter(ImageFilter.FIND_EDGES)
embossed  = img.filter(ImageFilter.EMBOSS)

edges.save("edges.png")
```

Filters work by examining each pixel's neighbors and computing a new value — a process called **convolution**.

## Saving Images

`image.save(filepath)` saves to any supported format.
Pillow detects the format from the file extension:

```python
img.save("output.png")   # saves as PNG
img.save("output.jpg", quality=85)   # JPEG with quality setting (1-95)
img.save("output.bmp")   # BMP format
```

For JPEG: lower quality = smaller file but more visual artifacts. Quality 80–90 is usually a good balance.

## Learning Check

!!! mascot-thinking "Your Turn — Write a Brightness Booster"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below has a function stub for `brighten(image, amount)`.
    Complete it: for every pixel, add `amount` to each R, G, B channel — but clamp the result between 0 and 255!

<div id="skulpt-lab-4" class="skulpt-text-only">
  <div id="editor-container-4">
    <textarea id="code-4" spellcheck="false">from PIL import Image

def brighten(img, amount):
    result = Image.new("RGB", img.size)
    for y in range(img.height):
        for x in range(img.width):
            r, g, b = img.getpixel((x, y))
            # Add 'amount' to each channel, but clamp between 0 and 255:
            nr = r   # TODO: add amount and clamp
            ng = g   # TODO: add amount and clamp
            nb = b   # TODO: add amount and clamp
            result.putpixel((x, y), (nr, ng, nb))
    return result

# Test with a simple 3x3 image:
img = Image.new("RGB", (3, 3), (100, 150, 200))
print("Before brighten:", img.getpixel((0, 0)))
bright = brighten(img, 80)
print("After brighten:", bright.getpixel((0, 0)))
</textarea>
    <div id="button-row-4">
      <button id="run-btn-4" onclick="runSkulpt('-4')">&#9654; Run</button>
      <button id="reset-btn-4" onclick="resetSkulpt('-4')">&#8635; Reset</button>
    </div>
    <pre id="output-4"></pre>
  </div>
  <div id="canvas-container-4">
    <div id="turtle-target-4"></div>
  </div>
</div>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Create a 100×100 image where each pixel's R value equals its x-coordinate and G value equals its y-coordinate. Save it as a PNG and open it.
   **You'll know it worked when** you see a gradient that shifts from dark to bright in two directions.

2. Open a JPEG photo and use `thumbnail((300, 300))` to shrink it, then save as PNG.
   **You'll know it worked when** the output file is a smaller image in PNG format.

3. Convert an RGB image to grayscale and then convert it back to RGB. Print a pixel — is it the same as the original?
   **You'll know it worked when** you see the gray color has equal R, G, B values.

4. Use `img.rotate(45)` on a photo. Note that the corners are black (background fill). Add `expand=True` to see the difference.
   **You'll know it worked when** `expand=True` grows the canvas to show the full rotated image.

5. Apply `ImageFilter.FIND_EDGES` to a photo. Save the result and compare it to the original.
   **You'll know it worked when** you see bright lines where the original had color edges.

!!! mascot-celebration "Image Wizard!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You can now open, inspect, transform, filter, and save images with Python!
    These same techniques power computer vision systems, photo-editing apps, and machine learning pipelines.
    The next chapter returns to turtle graphics for event-driven animation. Let's keep coding!

[See Annotated References](./references.md)
