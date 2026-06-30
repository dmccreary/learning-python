---
title: Neural Networks and MNIST
description: Build a Convolutional Neural Network (CNN) to classify MNIST digits — and get an overview of RNNs, LSTMs, and autoencoders
generated_by: claude skill chapter-content-generator
date: 2026-06-28 16:20:00
version: 0.09
---

# Neural Networks and MNIST

By the end of this lesson you'll be able to:

- Explain what makes a **Convolutional Neural Network (CNN)** different from a dense network
- Understand **Conv2D**, **MaxPooling2D**, **Flatten**, and **Dropout** layers
- Read and write a complete Keras CNN model
- Use `model.compile()`, `model.fit()`, `model.evaluate()`, and `model.predict()`
- Describe at a high level: **RNNs**, **LSTMs**, and **autoencoders**

Dense networks from Chapter 37 treat an image as a flat vector — losing all spatial information.
Convolutional networks keep the 2-D structure of images and look for **local patterns** like edges, corners, and shapes. This is why CNNs are the dominant architecture for image recognition.

!!! mascot-welcome "Welcome to Chapter 38!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Welcome to the final chapter of *Beginning Python*!
    You've come from printing "Hello, World!" all the way to building AI that reads handwritten digits.
    Let's finish strong! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="../../js/codemirror-lab.js"></script>

## Why Convolutions?

A dense network that takes a 28×28 image flattens it to 784 numbers — it completely discards the fact that pixel (3, 5) is next to pixel (3, 6).

A **convolutional** layer slides a small filter (called a **kernel**) across the image.
The kernel detects local patterns — a 3×3 kernel can detect a horizontal edge, a diagonal, or a corner.
Multiple kernels at the same layer detect different features simultaneously.

This gives CNNs two huge advantages:
- **Parameter efficiency** — one kernel is shared across the whole image (vs dense where every pixel has its own weight for every neuron)
- **Translation invariance** — a kernel that detects a "7" shape in the top-left also recognizes it in the bottom-right, because the same kernel scans everywhere

## Key CNN Layer Types

Before reading Keras code, here are the four new layer types in this chapter:

| Layer | Purpose |
|-------|---------|
| `Conv2D(filters, kernel_size, activation)` | Slide `filters` kernels of size `kernel_size×kernel_size` across the image |
| `MaxPooling2D(pool_size)` | Shrink the spatial dimensions by taking the max in each region |
| `Dropout(rate)` | Randomly set `rate` fraction of neurons to zero during training — fights overfitting |
| `Flatten()` | Convert 2-D feature maps to a 1-D vector before the dense layers |

A **filter** (or feature map) is the output of one kernel applied to the full image.
`Conv2D(32, (3,3))` creates 32 different 3×3 kernels — producing 32 feature maps.

`MaxPooling2D((2,2))` divides the image into 2×2 blocks and keeps only the maximum value in each block — halving the width and height.

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below simulates one step of Max Pooling on a tiny 4×4 grid.
    If the pool size is 2×2, how many output values do you expect?
    Make your guess — then run it!

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
initCmLab('', `def max_pool_2d(grid, pool_size=2):
    rows = len(grid)
    cols = len(grid[0])
    out_rows = rows // pool_size
    out_cols = cols // pool_size
    result = []
    for r in range(out_rows):
        row = []
        for c in range(out_cols):
            block = [
                grid[r*pool_size + dr][c*pool_size + dc]
                for dr in range(pool_size)
                for dc in range(pool_size)
            ]
            row.append(max(block))
        result.append(row)
    return result

# 4x4 feature map (imagine after a convolution):
feature_map = [
    [1, 3, 2, 4],
    [5, 6, 1, 2],
    [3, 1, 7, 2],
    [2, 4, 1, 8],
]

print("Input (4x4):")
for row in feature_map:
    print(" ", row)

pooled = max_pool_2d(feature_map, pool_size=2)
print("\\nAfter MaxPooling 2x2:")
for row in pooled:
    print(" ", row)
print(f"Output size: {len(pooled)}x{len(pooled[0])}")`);
</script>

## Dropout — Fighting Overfitting

**Dropout** is a simple but powerful regularization technique.

During each training step, Dropout randomly sets a fraction of neurons' outputs to zero.
With `Dropout(0.5)`, half the neurons are randomly silenced each time — so the network can't rely on any single neuron.

This forces the network to learn **redundant representations** — multiple ways to detect the same feature.
At inference time (prediction), Dropout is automatically disabled and all neurons participate.

```python
keras.layers.Dropout(0.5)   # randomly zero out 50% of inputs during training
keras.layers.Dropout(0.25)  # gentler — zero out 25%
```

## A Complete CNN for MNIST

Here is a full CNN that achieves **~99% accuracy** on MNIST:

```python
import tensorflow as tf
from tensorflow import keras

# Load and prepare data:
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# Add channel dimension: (samples, 28, 28) → (samples, 28, 28, 1)
x_train = x_train.reshape(-1, 28, 28, 1) / 255.0
x_test  = x_test.reshape(-1, 28, 28, 1) / 255.0

# Build CNN:
model = keras.Sequential([
    keras.layers.Conv2D(32, (3, 3), activation="relu",
                        input_shape=(28, 28, 1)),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation="relu"),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Flatten(),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dropout(0.5),
    keras.layers.Dense(10, activation="softmax")
])

model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

model.summary()   # print layer-by-layer shape info
```

## Understanding `model.compile()`

`model.compile()` sets three key training choices:

- **optimizer** — how weights are updated (e.g., `"adam"`, `"sgd"`)
- **loss** — what to minimize during training
  - `"sparse_categorical_crossentropy"` — for integer class labels (e.g., 0, 1, 2, …, 9)
  - `"categorical_crossentropy"` — for one-hot encoded labels
  - `"binary_crossentropy"` — for two-class (yes/no) problems
- **metrics** — what to track but not optimize (e.g., `"accuracy"`)

## Training with `model.fit()`

```python
history = model.fit(
    x_train, y_train,
    epochs=10,
    batch_size=64,
    validation_split=0.1
)
```

`model.fit()` returns a `history` object.
`history.history` is a dict with keys `"accuracy"`, `"val_accuracy"`, `"loss"`, `"val_loss"`.

You can plot training curves to visualize overfitting:

```python
import matplotlib.pyplot as plt

plt.plot(history.history["accuracy"],     label="train accuracy")
plt.plot(history.history["val_accuracy"], label="val accuracy")
plt.legend()
plt.title("Training Curves")
plt.show()
```

## Evaluating with `model.evaluate()`

```python
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"Test accuracy: {test_acc:.2%}")   # e.g., "99.15%"
```

Call this **once**, at the very end, on data the model has never seen.

## Making Predictions with `model.predict()`

```python
predictions = model.predict(x_test[:10])   # probabilities for first 10 images
predicted_classes = predictions.argmax(axis=1)
print("Predicted:", predicted_classes)
print("True labels:", y_test[:10])
```

`predictions` is an array of shape `(10, 10)` — 10 images, each with 10 class probabilities.
`.argmax(axis=1)` picks the index of the highest probability for each image.

<div class="cm-lab cm-text-only">
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
initCmLab('-2', `import math

def softmax(vec):
    exps = [math.exp(v) for v in vec]
    s = sum(exps)
    return [e/s for e in exps]

def argmax(lst):
    return lst.index(max(lst))

# Simulate predictions for 5 "images":
raw_outputs = [
    [10.2, 0.1, 0.3, 0.0, 0.5, 0.1, 0.2, 0.0, 0.1, 0.1],  # very sure: class 0
    [0.1, 0.0, 0.2, 0.1, 0.1, 0.0, 0.1, 9.8, 0.2, 0.1],   # very sure: class 7
    [0.5, 0.3, 9.1, 0.2, 0.1, 0.3, 0.1, 0.2, 0.1, 0.1],   # very sure: class 2
    [0.1, 9.5, 0.1, 0.0, 0.2, 0.1, 0.1, 0.0, 0.1, 0.0],   # very sure: class 1
    [2.0, 0.5, 1.5, 1.0, 2.5, 0.8, 1.2, 0.9, 1.8, 2.1],   # uncertain!
]
true_labels = [0, 7, 2, 1, 5]

for i, (logits, true) in enumerate(zip(raw_outputs, true_labels)):
    probs = softmax(logits)
    pred  = argmax(probs)
    conf  = max(probs)
    status = "✓" if pred == true else "✗"
    print(f"  {status} True={true}, Pred={pred}, Confidence={conf:.1%}")`);
</script>

## Feature Extraction

A trained CNN isn't just a digit classifier — its **intermediate layers** have learned meaningful visual features:

- Early Conv2D layers: detect edges and corners
- Middle Conv2D layers: detect curves and simple shapes
- Later layers: detect digit-specific features

**Transfer learning** exploits this: take a CNN pre-trained on millions of images, cut off the last few layers, and attach new layers trained on your smaller dataset. The pre-trained features transfer to the new task.

This is why a model trained on ImageNet (1.3M photos) can be quickly adapted to classify medical X-rays, satellite images, or art styles — with only hundreds of new labeled examples.

## Other Neural Network Architectures

### Recurrent Neural Networks (RNNs)

**RNNs** process sequences — text, audio, time series — one step at a time.
Each step produces a **hidden state** that is passed to the next step, giving the network memory of the past.

```python
keras.layers.SimpleRNN(64)
```

RNNs struggle with long sequences because the gradient signal weakens across many time steps (the "vanishing gradient" problem).

### Long Short-Term Memory (LSTM)

**LSTMs** are a special type of RNN with gating mechanisms that let them remember or forget information over long sequences.
They are the standard choice for language modeling, speech recognition, and time series forecasting.

```python
keras.layers.LSTM(128)
```

### Autoencoders

An **autoencoder** learns to compress data into a small representation (the **bottleneck**) and then reconstruct the original.

```
Input (784 pixels) → Encoder → Bottleneck (32 values) → Decoder → Reconstructed image
```

Applications: anomaly detection, denoising, generative art, data compression.

## Putting It All Together — The CNN Shape Journey

The table below traces the data shape through the CNN for a single 28×28 MNIST image:

| Layer | Output Shape | Parameters |
|-------|-------------|------------|
| Input | (28, 28, 1) | 0 |
| Conv2D(32, 3×3) | (26, 26, 32) | 320 |
| MaxPooling2D | (13, 13, 32) | 0 |
| Conv2D(64, 3×3) | (11, 11, 64) | 18,496 |
| MaxPooling2D | (5, 5, 64) | 0 |
| Flatten | (1,600,) | 0 |
| Dense(128) | (128,) | 204,928 |
| Dropout(0.5) | (128,) | 0 |
| Dense(10) | (10,) | 1,290 |

Total parameters: **225,034** — much more efficient than a dense-only model of similar depth.

## Learning Check

!!! mascot-thinking "Your Turn — Count the Parameters"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A `Dense(64)` layer following a `Flatten()` layer with 1,600 inputs has 1,600 × 64 weights plus 64 bias values.
    Write a function that computes the parameter count for a Dense layer from its input size and neuron count!

<div class="cm-lab cm-text-only">
  <div class="cm-editor-wrap">
    <div id="cm-editor-3"></div>
    <div class="cm-button-row">
      <button class="cm-run-btn" onclick="runCmLab('-3')">&#9654; Run</button>
      <button class="cm-reset-btn" onclick="resetCmLab('-3')">&#8635; Reset</button>
    </div>
    <pre class="cm-output" id="cm-output-3"></pre>
  </div>
  <div class="cm-canvas-wrap">
    <div id="cm-turtle-3"></div>
  </div>
</div>
<script>
initCmLab('-3', `def dense_params(input_size, neurons):
    weights = input_size * neurons
    biases  = neurons
    return weights + biases

# CNN architecture:
layers = [
    ("Conv2D(32, 3x3)",  (3 * 3 * 1) * 32 + 32),   # kernel * in_channels * filters + bias
    ("MaxPooling2D",     0),
    ("Conv2D(64, 3x3)",  (3 * 3 * 32) * 64 + 64),  # 32 input channels
    ("MaxPooling2D",     0),
    ("Flatten",          0),
    ("Dense(128)",       dense_params(1600, 128)),
    ("Dropout(0.5)",     0),
    ("Dense(10)",        dense_params(128, 10)),
]

total = 0
print(f"{'Layer':<22} {'Parameters':>12}")
print("-" * 36)
for name, params in layers:
    print(f"{name:<22} {params:>12,}")
    total += params
print("-" * 36)
print(f"{'Total':<22} {total:>12,}")`);
</script>

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. Modify the max pooling simulation to use a 3×3 pool size on a 6×6 grid. What is the output size?
   **You'll know it worked when** you see a 2×2 output.

2. In the prediction simulator, change the last row's logits so they favor class 5 more strongly.
   **You'll know it worked when** the confidence for class 5 exceeds 70%.

3. Implement `min_pool_2d` (same as `max_pool_2d` but using `min` instead of `max`). How do the outputs differ from max pooling on the same input?
   **You'll know it worked when** you see that min pooling keeps darker (smaller) values.

4. Compute the parameter count for a `Dense(256)` layer following a `Dense(128)` layer.
   **You'll know it worked when** you get 128 × 256 + 256 = 33,024.

5. Research: look up "GPT" or "BERT" and describe in 2-3 sentences how they differ from the CNN described in this chapter.
   **You'll know it worked when** you can explain: what kind of data they process and what architecture they use.

!!! mascot-celebration "You Did It — Python Graduate!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You have completed all 38 chapters of *Beginning Python*!
    You started with a turtle drawing a square and finished by building an AI that reads handwritten digits with 99% accuracy.
    You are no longer a beginner — you are a Python programmer. Go build something amazing!

[See Annotated References](./references.md)
