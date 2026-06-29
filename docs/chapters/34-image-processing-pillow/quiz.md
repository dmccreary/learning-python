# Quiz: Image Processing with Pillow

Test your understanding of Pillow (PIL), image modes, pixel data, resizing, cropping, and saving images with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. How do you install and import Pillow in Python?

<div class="upper-alpha" markdown>
1. Install with `pip install PIL`; import with `import pillow`
2. Install with `pip install pillow`; import with `from PIL import Image`
3. Install with `pip install image`; import with `import Image`
4. Pillow is part of the standard library — no installation needed
</div>

??? question "Show Answer"
    The correct answer is **B**. Install with `pip install pillow` (the package name is lowercase `pillow`), but import using the original name: `from PIL import Image`. This is because Pillow is the maintained fork of the older PIL (Python Imaging Library) and kept the same import name for backward compatibility.

    **Concept Tested:** Importing Pillow

---

#### 2. What does `img.size` return for a Pillow image?

<div class="upper-alpha" markdown>
1. The file size in bytes
2. A tuple `(width, height)` in pixels
3. The total number of pixels (width × height)
4. A tuple `(height, width)` following mathematical convention
</div>

??? question "Show Answer"
    The correct answer is **B**. `img.size` returns a tuple `(width, height)` — the image dimensions in pixels. For example, a 1920×1080 image has `img.size = (1920, 1080)`. Note this is `(width, height)` — the opposite of NumPy arrays which use `(rows, cols)` or `(height, width)`. You can also access `img.width` and `img.height` separately.

    **Concept Tested:** Image Attributes

---

#### 3. What does `"L"` mean for `image.mode`?

<div class="upper-alpha" markdown>
1. Large format — the image is bigger than standard size
2. Lossless compression format
3. Luminance — grayscale mode where each pixel is a single brightness value 0-255
4. Layered — the image has multiple transparent layers
</div>

??? question "Show Answer"
    The correct answer is **C**. In Pillow's mode system, `"L"` means grayscale (luminance). Each pixel is a single integer from 0 (black) to 255 (white). `"RGB"` uses three values per pixel (red, green, blue), and `"RGBA"` adds a fourth alpha channel for transparency. Convert to grayscale with `img.convert("L")`.

    **Concept Tested:** Image Mode

---

#### 4. What are the RGB values for pure white?

<div class="upper-alpha" markdown>
1. `(0, 0, 0)`
2. `(255, 255, 255)`
3. `(128, 128, 128)`
4. `(255, 0, 0)`
</div>

??? question "Show Answer"
    The correct answer is **B**. In RGB mode, each channel (red, green, blue) ranges from 0 to 255. White has the maximum value for all three channels: `(255, 255, 255)`. Black is `(0, 0, 0)` — minimum for all channels. Gray is when all three are equal: `(128, 128, 128)`. Pure red is `(255, 0, 0)`.

    **Concept Tested:** Pixel Data

---

#### 5. How do you resize a Pillow image to 200×100 pixels?

<div class="upper-alpha" markdown>
1. `img.resize = (200, 100)`
2. `img.scale(200, 100)`
3. `small = img.resize((200, 100))`
4. `img.setSize(200, 100)`
</div>

??? question "Show Answer"
    The correct answer is **C**. `img.resize((width, height))` returns a **new** image object at the specified dimensions — it does not modify the original. Always assign the result to a variable. For better quality when reducing size, pass a resampling filter: `img.resize((200, 100), Image.LANCZOS)`. There is no `.scale()` or `.setSize()` method in Pillow.

    **Concept Tested:** Resizing Images

---

#### 6. What does `img.crop((left, top, right, bottom))` do?

<div class="upper-alpha" markdown>
1. Deletes the border around the image
2. Returns a new image containing only the rectangular region defined by the coordinates
3. Rotates the image to remove empty space at the edges
4. Converts the image to black and white by removing color information
</div>

??? question "Show Answer"
    The correct answer is **B**. `img.crop((left, top, right, bottom))` returns a new image that is a rectangular cutout of the original. The coordinates are in pixels from the top-left corner: `left` and `top` define the top-left corner of the crop box, and `right` and `bottom` define the bottom-right corner. Like `resize()`, `crop()` returns a new image without changing the original.

    **Concept Tested:** Cropping Images

---

#### 7. How do you save a Pillow image as a PNG file?

<div class="upper-alpha" markdown>
1. `img.export("output.png")`
2. `img.write("output.png")`
3. `Image.save(img, "output.png")`
4. `img.save("output.png")`
</div>

??? question "Show Answer"
    The correct answer is **D**. `img.save("filename.ext")` saves the image to a file. Pillow determines the format from the file extension — `.png` saves as PNG, `.jpg` saves as JPEG, `.gif` saves as GIF, etc. There is no `.export()`, `.write()`, or `Image.save()` function.

    **Concept Tested:** Saving Images

---

#### 8. What does `img.convert("L")` do?

<div class="upper-alpha" markdown>
1. Converts the image to a large-format high-resolution version
2. Converts the image from RGB to grayscale
3. Converts the image file to a lossless format
4. Converts the pixel coordinates from (x, y) to (row, col) order
</div>

??? question "Show Answer"
    The correct answer is **B**. `img.convert("L")` returns a new image in grayscale mode. Each pixel becomes a single brightness value from 0 (black) to 255 (white). Other useful conversions: `img.convert("RGB")` converts to standard color mode, `img.convert("RGBA")` adds an alpha (transparency) channel, `img.convert("1")` converts to black-and-white (binary).

    **Concept Tested:** Color Mode Conversion

---

#### 9. What does `img.getpixel((x, y))` return for an RGB image?

<div class="upper-alpha" markdown>
1. A single integer representing the pixel's brightness
2. A list of all pixels in row y
3. A tuple `(R, G, B)` with the red, green, and blue values of that pixel
4. The hex color code of the pixel as a string like `"#FF5500"`
</div>

??? question "Show Answer"
    The correct answer is **C**. `img.getpixel((x, y))` returns the color of the pixel at column `x`, row `y` as a tuple. For an RGB image, this is `(R, G, B)` — three integers 0–255. For RGBA, it includes a fourth alpha value. For grayscale (`"L"` mode), it returns a single integer. Coordinates are `(x, y)` where (0,0) is the top-left corner.

    **Concept Tested:** Pixel Data

---

#### 10. What is the main difference between JPEG and PNG image formats?

<div class="upper-alpha" markdown>
1. JPEG is for photos; PNG cannot store photographs at all
2. JPEG uses lossy compression (loses some quality to reduce file size); PNG uses lossless compression (no quality loss) and supports transparency
3. JPEG supports transparency; PNG does not
4. PNG is an older format that most computers cannot open
</div>

??? question "Show Answer"
    The correct answer is **B**. JPEG uses lossy compression — it discards some image data to achieve smaller file sizes, which is fine for photographs but causes visible artifacts at high compression. PNG uses lossless compression — no data is lost, and it supports transparency (alpha channel). Use JPEG for photos where small file size matters; use PNG for logos, screenshots, and images where quality and transparency are important.

    **Concept Tested:** Image Formats

---
