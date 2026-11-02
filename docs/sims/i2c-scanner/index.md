---
title: I2C Bus Scanner
description: Watch a CPU ask every I2C address from 0x08 to 0x77 "is anyone there?" while an MPU-6050 (0x68), an HMC5883L compass (0x1E) and an SSD1306 display (0x3C) answer with an ACK.
image: /sims/i2c-scanner/i2c-scanner.png
og:image: /sims/i2c-scanner/i2c-scanner.png
twitter:image: /sims/i2c-scanner/i2c-scanner.png
social:
   cards: false
quality_score: 100
---

# I2C Bus Scanner

<iframe src="main.html" height="692px" width="100%" scrolling="no"></iframe>

[Run the I2C Bus Scanner MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

Every I2C device on a bus has a 7-bit address, but a device never announces
that address by itself. The CPU (the *controller*) has to ask. An I2C scan
does exactly that: it calls out every address from `0x08` to `0x77`, one at a
time, and listens during the ninth clock pulse. A device that owns the address
pulls the data wire (SDA) low. That is an **ACK**. If nobody pulls SDA low, the
wire stays high and the answer is a **NACK**: nobody lives there.

This MicroSim runs that scan in slow motion on a bus with three devices: an
**MPU-6050** (accelerometer and gyroscope, `0x68`), an **HMC5883L** (compass,
`0x1E`) and an **SSD1306** OLED display (`0x3C`). You can watch the clock (SCL)
and data (SDA) traces for the address being asked, see the matching device
answer, and watch the address map fill in. When the scan finishes, the console
prints what `i2c-scanner.py` would print on a real Raspberry Pi Pico.

**Learning objective:** The student will be able to explain how an I2C scan
discovers devices: the controller calls out each address, and only the device
that owns the address answers with an ACK.

- **Bloom's Taxonomy (2001):** Understand - *explain, demonstrate*
- **Interaction pattern:** step-through (Start, Step, Reset) with a
  plug-and-unplug experiment

## How to Use

1. Press **Step** a few times at the default speed. Watch the CPU box: it shows
   the address it is asking about, in hex and in decimal.
2. Drag the **Speed** slider to 1 and press **Start**. Follow one address from
   the START condition, through the 7 address bits and the write bit, to the
   ACK slot.
3. Turn on **Pause at each ACK**, press **Start**, and let the scan run. It
   stops each time a device answers so you can look at the green ACK slot.
4. Speed the scan up and let it finish. Compare the console output with the
   green cells in the address map.
5. **Unplug** a device by unchecking its box, press **Scan again**, and predict
   which address will disappear before the scan reaches it.

## Key Ideas to Look For

- **The CPU asks; devices answer.** The device boxes say "listening..." for
  every address, and only one of them says "ACK! That is me."
- **Addresses are numbers.** `0x1E`, `0x3C` and `0x68` are the same numbers as
  30, 60 and 104. The console prints both so you can match it to code that
  prints decimal values.
- **The bus is shared.** All three devices hear every address on the same two
  wires. That is why no two devices on one bus may use the same address.
- **Reserved addresses are skipped.** `0x00-0x07` and `0x78-0x7F` are grey.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/i2c-scanner/main.html"
        height="692px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Upper elementary and middle school (ages 10-14). Part of
[Appendix A: The I2C Bus](../../appendices/i2c-bus/index.md).

### Duration

10-15 minutes

### Prerequisites

- Lists and loops in Python (Chapters 7 and 15)
- Hexadecimal numbers such as `0x68` (see the Hex Colors lab)

### Activities

1. **Predict and step** (4 min): Students predict whether address `0x09` gets
   an ACK, press Step, and read the result in the status line.
2. **Slow-motion ACK** (4 min): At speed 1, students find the ACK slot in the
   waveform and explain who pulled the SDA line low.
3. **Unplug experiment** (5 min): Students uncheck one device, predict the
   new scan result, and run the scan to check.
4. **Connect to code** (2 min): Students match each console line to the
   `i2c.scan()` call in `i2c-scanner.py`.

### Assessment

- Student explains, in their own words, why a device does not announce itself
- Student can read a scan result such as `[30, 60, 104]` and name the devices
- Student predicts what a scan shows after a device is unplugged

## References

1. [UM10204: I2C-bus specification and user manual, Rev. 7.0](https://www.nxp.com/docs/en/user-guide/UM10204.pdf) - NXP, 2021
2. [MicroPython machine.I2C](https://docs.micropython.org/en/latest/library/machine.I2C.html) - documents `scan()` and its 0x08-0x77 range
3. [Appendix A: The I2C Bus](../../appendices/i2c-bus/index.md) - the full explanation that goes with this MicroSim
4. [p5.js](https://p5js.org/) - the JavaScript library used to build this MicroSim
