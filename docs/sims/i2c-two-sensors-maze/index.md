---
title: I2C Two Sensors in a Maze
description: A robot drives a maze while the CPU takes turns reading an accelerometer and a gyroscope (or an HMC5883L compass) over one shared I2C bus.
image: /sims/i2c-two-sensors-maze/i2c-two-sensors-maze.png
og:image: /sims/i2c-two-sensors-maze/i2c-two-sensors-maze.png
twitter:image: /sims/i2c-two-sensors-maze/i2c-two-sensors-maze.png
social:
   cards: false
quality_score: 100
---

# I2C Two Sensors in a Maze

<iframe src="main.html" height="677px" width="100%" scrolling="no"></iframe>

[Run the I2C Two Sensors in a Maze MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

A robot drives from START to GOAL through a maze. Two sensors report what it
is doing, and both talk to the CPU over the **same two wires**:

- the **accelerometer** inside the MPU-6050 (address `0x68`) feels the robot
  speeding up and braking, and
- a second sensor: either the **gyroscope** inside the same MPU-6050 (also
  `0x68`, different registers) that feels the robot turning, or the
  **HMC5883L compass** (address `0x1E`, a separate chip) that reports which
  way the robot is facing.

It looks as if the two sensors send their values "at the same time", but they
cannot. I2C allows only one conversation at a time. The CPU asks the
accelerometer, waits for its six bytes, and only then asks the second sensor.
The timeline at the bottom stretches those reads so you can see them take turns
and never overlap. The **Reads per second** slider shows what happens when the
CPU asks less often: the dots spread out and quick changes fall between them.

**Learning objective:** The student will be able to explain why two I2C
sensors on one bus are read one after another, and describe what an
accelerometer and a gyroscope (or compass) each tell the robot.

- **Bloom's Taxonomy (2001):** Understand - *explain, compare*
- **Interaction pattern:** exploration with a sample-rate slider and a sensor
  selector

## How to Use

1. Press **Start**. The robot drives the maze and the CPU starts polling.
2. Watch the **Accelerometer** chart: it bumps up when the robot speeds up and
   down when it brakes. The **Gyroscope** chart stays flat until the robot
   turns, then spikes. Right turns and left turns spike in opposite directions.
3. Look at the **timeline**: red (accelerometer) and purple (gyroscope) blocks
   alternate. They never overlap.
4. Drag **Reads per second** down to 1 or 2. Which events does the CPU miss?
5. Change **Second sensor** to the compass. The gyroscope box turns grey, the
   HMC5883L lights up as a different chip at a different address, and the chart
   shows the robot's heading in degrees.

## Key Ideas to Look For

- **One chip, two sensors.** The MPU-6050 box holds the accelerometer and the
  gyroscope. They share address `0x68` and differ only in which register the
  CPU starts reading (`0x3B` or `0x43`).
- **Raw values are bytes.** Each reading arrives as two bytes per axis (high
  byte first). The table shows the number, the two bytes in hex, and the value
  in real units.
- **The compass sends X, Z, Y.** The HMC5883L outputs its axes in that odd
  order, also high byte first.
- **Sampling is a trade-off.** The grey line is the truth. The coloured dots
  are what the CPU actually knows, held until the next read.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/learning-python/sims/i2c-two-sensors-maze/main.html"
        height="677px"
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

- The I2C Bus Scanner MicroSim (addresses and ACK)
- Lists and loops in Python (Chapters 7 and 15)

### Activities

1. **Predict the spikes** (4 min): Before pressing Start, students sketch what
   the accelerometer and gyroscope charts will look like for one lap.
2. **Take turns** (3 min): Students find where the accelerometer read ends and
   the gyroscope read begins on the timeline, and explain why they cannot
   overlap.
3. **Sampling rate** (4 min): Students set the rate to 2 reads per second and
   describe what the chart no longer shows.
4. **Swap the sensor** (4 min): Students switch to the compass and compare it
   with the gyroscope: same chip or different chip, same address or different?

### Assessment

- Student explains why the two readings are taken in turns
- Student matches each chart feature to a robot motion (speeding up, braking,
  turning)
- Student explains why a slow read rate can miss a quick event

## References

1. [UM10204: I2C-bus specification and user manual, Rev. 7.0](https://www.nxp.com/docs/en/user-guide/UM10204.pdf) - NXP, 2021
2. [HMC5883L 3-Axis Digital Compass IC datasheet](https://cdn-shop.adafruit.com/datasheets/HMC5883L_3-Axis_Digital_Compass_IC.pdf) - Honeywell
3. [MPU-6050 on the Arduino Playground](https://www.arduino.cc/playground/Main/MPU-6050/) - register map pointers for the accelerometer and gyroscope
4. [Appendix A: The I2C Bus](../../appendices/i2c-bus/index.md) - the full explanation that goes with this MicroSim
5. [p5.js](https://p5js.org/) - the JavaScript library used to build this MicroSim
