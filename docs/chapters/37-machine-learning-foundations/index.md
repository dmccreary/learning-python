---
title: Machine Learning Foundations
description: Understand supervised vs unsupervised learning, train/val/test splits, overfitting, and build a first neural network with Keras on the MNIST dataset
generated_by: claude skill chapter-content-generator
date: 2026-06-28 16:10:00
version: 0.09
---

# Machine Learning Foundations

By the end of this lesson you'll be able to:

- Explain the difference between **supervised** and **unsupervised** learning
- Describe **training, validation, and test** splits and why all three matter
- Define **overfitting** and explain how to detect it
- Understand the basic components of a **neural network**: layers, activations, loss functions, and optimizers
- Read and understand a simple Keras model for classifying handwritten digits

Machine learning (ML) is a way of teaching computers to recognize patterns by showing them examples — instead of writing rules by hand. It powers image recognition, spam filters, recommendation engines, and large language models.

!!! mascot-welcome "Welcome to Chapter 37!"
    ![Monty waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Machine learning is one of the most exciting areas in computer science — and with Python, it's surprisingly approachable!
    This chapter gives you the vocabulary and concepts you need to understand and build real ML systems.
    Let's explore! Let's code it together!

<script src="https://skulpt.org/js/skulpt.min.js"></script>
<script src="https://skulpt.org/js/skulpt-stdlib.js"></script>

## What is Machine Learning?

Traditional programming: **you write the rules**.
```
Input: image of a dog
Rules: if has fur AND four legs AND tail → output "dog"
```

Machine learning: **you show examples, the computer learns the rules**.
```
Training data: 50,000 labeled images (dog / cat / bird)
ML algorithm: finds patterns in pixels that distinguish each class
Result: model that predicts the class of new, unseen images
```

The "learning" happens during **training** — a process of repeatedly adjusting the model's internal numbers (called **parameters** or **weights**) to reduce errors.

## Supervised vs Unsupervised Learning

**Supervised learning** trains on labeled examples — each input comes with the correct answer.

- Input: photo of a handwritten "3"
- Label: the digit 3
- Goal: learn to predict the correct digit for any new photo

Examples: image classification, spam detection, medical diagnosis, price prediction

**Unsupervised learning** finds patterns in data without labels.

- Input: 10,000 customer purchase records (no categories)
- Goal: discover natural groupings (clusters) in the data

Examples: customer segmentation, anomaly detection, topic modeling, data compression

!!! mascot-thinking "What Do You Think Will Happen?"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below simulates a very simple "classifier" that predicts pass/fail from a test score.
    Before you run it — what threshold do you think will give the best accuracy on the test set?
    Make your guess, then run it!

<div id="skulpt-lab" class="skulpt-text-only">
  <div id="editor-container">
    <textarea id="code" spellcheck="false">def simple_classifier(score, threshold):
    return "pass" if score >= threshold else "fail"

def evaluate(data, labels, threshold):
    correct = 0
    for score, label in zip(data, labels):
        if simple_classifier(score, threshold) == label:
            correct += 1
    return correct / len(data)

# Training data (scores and actual outcomes):
scores = [45, 62, 78, 55, 90, 38, 71, 85, 50, 93]
labels = ["fail", "pass", "pass", "fail", "pass",
          "fail", "pass", "pass", "fail", "pass"]

for threshold in [50, 60, 65, 70, 80]:
    acc = evaluate(scores, labels, threshold)
    print(f"Threshold {threshold}: accuracy = {acc:.0%}")
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

## The MNIST Dataset

**MNIST** (Modified National Institute of Standards and Technology) is the "Hello, World!" of machine learning.
It contains 70,000 grayscale images of handwritten digits (0–9), each 28×28 pixels.

- 60,000 training images
- 10,000 test images

Every pixel is a number from 0 (black) to 255 (white).
A 28×28 image is a grid of 784 numbers — this becomes a vector of 784 inputs to a neural network.

## Train / Validation / Test Splits

Before training a model, you split your data into three separate sets:

| Set | Purpose | Typical size |
|-----|---------|-------------|
| **Training** | The model learns from these examples | 70–80% |
| **Validation** | Check performance during training; tune settings | 10–15% |
| **Test** | Final evaluation on unseen data — used ONCE | 10–15% |

**Why three sets?**

- The model never trains on test data — so test accuracy is an honest measure of real-world performance
- Validation helps you catch overfitting *before* you touch the test set

**A critical rule:** Never look at your test set until you're completely done with all model tuning. Peeking and re-tuning based on test results is "cheating" — your model will appear to generalize better than it actually does.

## Overfitting

**Overfitting** happens when a model memorizes the training data instead of learning the underlying pattern.
It performs very well on training data but poorly on new, unseen examples.

Think of a student who memorizes every question from last year's exam exactly, without understanding the material. They'll ace the old test but fail on new questions.

Signs of overfitting:
- Training accuracy: 99%
- Validation accuracy: 65%
- Large gap between the two numbers

Fixes for overfitting:
- More training data
- **Dropout** — randomly disable some neurons during training (covered in Chapter 38)
- Simpler model (fewer layers, smaller layers)
- **Regularization** — penalty for large weights

## Neural Networks — Key Vocabulary

Before reading Keras code, here are the key terms:

- **Neuron** — a single computing unit that takes inputs, multiplies by weights, adds a bias, and applies an activation function
- **Layer** — a group of neurons that all receive the same inputs and produce outputs together
- **Dense layer** — every neuron connects to every neuron in the previous layer (also called "fully connected")
- **Activation function** — a non-linear function applied to each neuron's output; without it, stacking layers would be no more powerful than one layer
- **Weight / parameter** — a number the model adjusts during training to reduce errors; a typical model has thousands to billions of weights
- **Loss function** — measures how wrong the model's predictions are; training tries to minimize this value
- **Optimizer** — the algorithm that adjusts weights to reduce the loss
- **Epoch** — one complete pass through all the training data

## The `relu` and `softmax` Activations

Two activations appear in almost every classification network:

**ReLU** (Rectified Linear Unit): `f(x) = max(0, x)`
- Output is 0 for negative inputs, x for positive inputs
- Used in hidden layers; introduces non-linearity cheaply

**Softmax**: converts a vector of numbers into probabilities that sum to 1.0
- Used in the final output layer for multi-class classification
- Output: `[0.02, 0.85, 0.01, ..., 0.05]` means "85% confident this is digit 1"

## Building a Keras Model for MNIST

**Keras** is a high-level neural network library that runs on top of TensorFlow.
Install with:

```bash
pip install tensorflow
```

Here is a complete model to classify MNIST digits:

```python
import tensorflow as tf
from tensorflow import keras

# Load and prepare data:
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# Normalize pixel values from 0–255 to 0–1:
x_train = x_train / 255.0
x_test  = x_test  / 255.0

# Build the model:
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),   # 784 inputs
    keras.layers.Dense(128, activation="relu"),    # hidden layer
    keras.layers.Dense(10,  activation="softmax") # 10 output classes
])

# Compile: choose loss, optimizer, and metric:
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

# Train for 5 epochs:
model.fit(x_train, y_train, epochs=5, validation_split=0.1)

# Evaluate on the test set:
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"Test accuracy: {test_acc:.2%}")
```

This model typically achieves **97–98% accuracy** on MNIST — correctly classifying about 9,700 of 10,000 test images.

## Understanding the Model Layer by Layer

Let's walk through the architecture:

```
Input: 28×28 image (784 pixels)
    ↓
Flatten:      (784,)       — reshape to a flat vector
    ↓
Dense(128, relu):  (128,)  — 128 neurons, each connected to all 784 inputs
    ↓                         weights: 784×128 = 100,352 parameters
Dense(10, softmax): (10,)  — one output per digit class (0–9)
    ↓                         weights: 128×10 = 1,280 parameters
Output: [0.01, 0.02, 0.95, ...] — probabilities for digits 0–9
```

Total parameters: ~101,632 — small by modern standards, yet powerful enough for MNIST.

<div id="skulpt-lab-2" class="skulpt-text-only">
  <div id="editor-container-2">
    <textarea id="code-2" spellcheck="false"># Simulate the math of one Dense neuron:
import math

def relu(x):
    return max(0, x)

def dense_neuron(inputs, weights, bias):
    total = sum(i * w for i, w in zip(inputs, weights)) + bias
    return relu(total)

def softmax(vector):
    exps = [math.exp(v) for v in vector]
    total = sum(exps)
    return [e / total for e in exps]

# Simulate a tiny 3-input, 1-hidden-neuron, 3-class network:
inputs  = [0.5, 0.2, 0.8]   # pixel values (normalized)
weights = [0.4, -0.3, 0.6]
bias    = 0.1

hidden_output = dense_neuron(inputs, weights, bias)
print(f"Hidden neuron output: {hidden_output:.4f}")

# Softmax on a fake output layer:
logits = [2.0, 1.0, 0.1]   # raw scores for 3 classes
probs  = softmax(logits)
print("Softmax probabilities:", [round(p, 3) for p in probs])
print(f"Sum of probabilities: {sum(probs):.6f}")
print(f"Predicted class: {probs.index(max(probs))}")
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

## Batch Size and Epochs

Two key training settings:

**Batch size**: how many training examples the model processes before updating its weights.
- Batch size 32 means "process 32 images, compute average error, update weights" — then repeat
- Smaller batches → noisier but faster updates; larger batches → smoother but slower updates
- Common choices: 32, 64, 128

**Epochs**: how many times the model sees the entire training dataset.
- 1 epoch = one full pass through 60,000 images (in batches)
- 5 epochs = 5 full passes (300,000 batches total for MNIST with batch size 32)
- Too few epochs → model underfits; too many epochs → model overfits

!!! mascot-tip "The Adam Optimizer"
    ![Monty with a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    `"adam"` (Adaptive Moment Estimation) is the default optimizer for most beginners because it automatically adjusts the learning rate for each parameter.
    Other optimizers include SGD (stochastic gradient descent) and RMSprop.
    When in doubt, start with Adam — it works well in a wide range of tasks.

## Learning Check

!!! mascot-thinking "Your Turn — Implement Accuracy"
    ![Monty thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    The code below has a stub for an `accuracy()` function.
    Implement it: count how many predictions match their true labels, and return the fraction correct!

<div id="skulpt-lab-3" class="skulpt-text-only">
  <div id="editor-container-3">
    <textarea id="code-3" spellcheck="false">def accuracy(predictions, true_labels):
    # Return the fraction of predictions that match true_labels
    pass   # replace with your implementation

# Test your function:
preds  = [0, 1, 2, 1, 0, 2, 1, 0, 2, 1]
labels = [0, 1, 2, 0, 0, 1, 1, 0, 2, 1]

acc = accuracy(preds, labels)
print(f"Accuracy: {acc:.0%}")   # should be 80% (8 out of 10 correct)
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

## Experiments

Try these changes. Predict what will happen first, then run it to check!

1. In the threshold classifier, try `threshold = 63`. Does it improve accuracy?
   **You'll know it worked when** you see whether the accuracy changes.

2. Extend the `dense_neuron` function to handle negative inputs correctly: what does ReLU output for -2.0?
   **You'll know it worked when** negative inputs give 0, not a negative number.

3. Compute the softmax of `[1, 1, 1]`. All inputs are equal — what do the probabilities sum to, and what is each?
   **You'll know it worked when** all three probabilities equal 0.333.

4. Research: look up "confusion matrix" and describe what it shows that simple accuracy doesn't.
   **You'll know it worked when** you can explain what the rows and columns represent.

5. Think of two real-world problems: one that needs supervised learning and one that needs unsupervised. Describe what the training data would look like for each.
   **You'll know it worked when** you can articulate what "label" means (or doesn't) for each problem.

!!! mascot-celebration "Machine Learning Pioneer!"
    ![Monty celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You now understand the vocabulary, math, and structure of machine learning!
    Supervised vs unsupervised, train/val/test splits, overfitting, layers, activations, loss functions — you've got the full picture.
    One more chapter: Convolutional Neural Networks — the architecture that revolutionized computer vision. Let's keep coding!

[See Annotated References](./references.md)
