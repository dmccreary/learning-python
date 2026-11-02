---
title: I2C Five-Device Sensor Fusion
description: Five I2C devices (accelerometer, gyroscope, VL53L0X distance sensor, INA219 battery monitor and SSD1306 display) share one bus while the CPU schedules them and fuses accelerometer and gyroscope data into one tilt angle.
image: /sims/i2c-sensor-fusion/i2c-sensor-fusion.png
og:image: /sims/i2c-sensor-fusion/i2c-sensor-fusion.png
twitter:image: /sims/i2c-sensor-fusion/i2c-sensor-fusion.png
social:
   cards: false
quality_score: 100
---

# I2C Five-Device Sensor Fusion

<iframe src="main.html" height="756px" width="100%" scrolling="no"></iframe>

[Run the I2C Five-Device Sensor Fusion MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

A robot rocks back and forth on a tilting platform while a distance sensor
watches an obstacle slide back and forth and its battery slowly drains. One CPU
runs the whole robot over a single I2C bus with **five devices**:

| Device | Chip | Address | What the CPU does |
|--------|------|---------|-------------------|
| Accelerometer | MPU-6050 | `0x68` | read 6 bytes every 10 ms |
| Gyroscope | MPU-6050 | `0x68` | read 6 bytes every 10 ms |
| Distance | VL53L0X | `0x29` | read 2 bytes every 50 ms |
| Battery monitor | INA219 | `0x40` | read the 2-byte bus voltage every 250 ms, then convert volts to percent |
| Display | SSD1306 | `0x3C` | draw text, then send a 1,024-byte frame |

The accelerometer and gyroscope are two *functions* of one chip, so five
devices need only four addresses.

The **timeline is drawn to scale**. Every transaction lasts exactly as long as
its bits take on the wire (nine bits per byte at 100 kHz or 400 kHz). A sensor
read is a thin sliver. One display frame is about 23 milliseconds at 400 kHz,
and about 94 milliseconds at 100 kHz. While the frame is being sent, the CPU
cannot read any sensor. The red bars show reads that were due but had to wait.

The chart shows **sensor fusion**. The accelerometer alone is noisy (press
**Bump the robot!**). The gyroscope alone is smooth but drifts away because of
its small zero-rate error. A *complementary filter* (98% gyroscope, 2%
accelerometer) keeps the best of both.

**Learning objective:** The student will be able to analyze how several I2C
devices share one bus, explain how a display update delays sensor reads, and
explain why the CPU fuses accelerometer and gyroscope readings.

- **Bloom's Taxonomy (2001):** Analyze - *compare, examine*
- **Interaction pattern:** controlled experiments (bus speed, display rate,
  bump) on a scale-accurate timeline

## How to Use

1. Press **Start**. Time runs at 10% speed by default so you can watch.
2. Find the long orange **display frame** blocks on the timeline, and the red
   "due but had to wait" bars that appear on the accelerometer lane while a
   frame is being sent.
3. Read **Bus busy** and **reads per second** in the bottom-right panel. The
   goal is 100 gyro and accelerometer reads per second.
4. Set **Display** to *Off*. What happens to the reads per second?
5. Set **Bus speed** to *100 kHz* and **Display** to *20 per second*. Predict
   first, then watch the bus fill up and the sensor reads collapse.
6. Press **Bump the robot!** and compare the red (accelerometer only), blue
   (gyroscope only) and green (fused) lines in the chart.

## Key Ideas to Look For

- **One device at a time.** The timeline never shows two blocks at the same
  moment.
- **Time on the wire is arithmetic.** bits = 9 x bytes plus a few framing
  bits; time = bits / bus speed. The display frame has about 500 times more
  bytes than a distance reading.
- **A slow device can delay a fast one.** The gyroscope needs a fresh reading
  every 10 ms. The display frame blocks the bus for more than twice that.
- **Raw bytes need decoding.** The INA219 sends a voltage register whose low
  three bits are not part of the voltage. The CPU shifts them away, multiplies
  by 4 millivolts, then looks up a battery percentage.
- **Fusion beats either sensor alone.** The fused line stays close to the
  black truth line, even during a bump.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/i2c-sensor-fusion/main.html"
        height="756px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level

Middle school (ages 11-14). Part of
[Appendix A: The I2C Bus](../../appendices/i2c-bus/index.md).

### Duration

15-20 minutes

### Prerequisites

- The I2C Bus Scanner and I2C Two Sensors in a Maze MicroSims
- Lists, loops and functions in Python (Chapters 7, 11 and 15)

### Activities

1. **Predict the hog** (3 min): Before pressing Start, students guess which
   device will use the most bus time and why.
2. **Measure the budget** (5 min): Students read the bus-busy percentage with
   the display at 10 per second and again with the display off.
3. **Break the bus** (5 min): Students set 100 kHz and 20 display frames per
   second, then explain in one sentence why the sensor reads collapse.
4. **Fix it** (4 min): Students find two ways to bring the sensor reads back
   to 100 per second (faster bus, slower display, no display).
5. **Fusion** (3 min): Students press Bump and explain which line to trust.

### Assessment

- Student calculates the wire time of a transaction from its byte count
- Student explains why a display update delays sensor reads, and names two fixes
- Student explains why accelerometer and gyroscope readings are fused

## References

1. [UM10204: I2C-bus specification and user manual, Rev. 7.0](https://www.nxp.com/docs/en/user-guide/UM10204.pdf) - NXP, 2021
2. [INA219 datasheet](https://www.ti.com/lit/ds/symlink/ina219.pdf) - Texas Instruments: registers, 4 mV bus-voltage step, address pins
3. [Pololu VL53L0X library](https://github.com/pololu/vl53l0x-arduino) - model-ID register 0xC0 and the range register at 0x1E
4. [SSD1306 datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf) - Solomon Systech
5. [Sensor fusion](https://en.wikipedia.org/wiki/Sensor_fusion) - Wikipedia
6. [Appendix A: The I2C Bus](../../appendices/i2c-bus/index.md) - the full explanation that goes with this MicroSim
7. [p5.js](https://p5js.org/) - the JavaScript library used to build this MicroSim
