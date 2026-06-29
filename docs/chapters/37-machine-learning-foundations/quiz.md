# Quiz: Machine Learning Foundations

Test your understanding of supervised vs unsupervised learning, data splits, overfitting, neural network components, and the MNIST dataset with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the key difference between supervised and unsupervised learning?

<div class="upper-alpha" markdown>
1. Supervised learning requires a human to watch the training; unsupervised learning runs automatically
2. Supervised learning trains on labeled examples (inputs with known correct answers); unsupervised learning finds patterns in unlabeled data
3. Supervised learning is faster; unsupervised learning is more accurate
4. Supervised learning uses Python; unsupervised learning uses a different language
</div>

??? question "Show Answer"
    The correct answer is **B**. In supervised learning, every training example comes with a label — the correct answer. The model learns to map inputs to outputs (e.g., photo → "dog"). In unsupervised learning, there are no labels — the algorithm discovers hidden structure on its own, like grouping customers by purchase patterns (clustering).

    **Concept Tested:** Supervised vs Unsupervised Learning

---

#### 2. What is the purpose of the validation set in machine learning?

<div class="upper-alpha" markdown>
1. To provide extra training data when the training set is too small
2. To check model performance during training and detect overfitting before the final test
3. To validate that the code runs without errors before training begins
4. To store the final model weights after training is complete
</div>

??? question "Show Answer"
    The correct answer is **B**. The validation set is used to monitor performance during training. After each epoch, you evaluate on the validation set (which the model has never trained on) to detect overfitting: if training accuracy keeps rising but validation accuracy plateaus or drops, the model is memorizing instead of learning. The test set is held out until the very end.

    **Concept Tested:** Train/Validation/Test Splits

---

#### 3. What is overfitting in machine learning?

<div class="upper-alpha" markdown>
1. Training a model for too many epochs, making it run slowly
2. Using too much data for training, leaving too little for testing
3. A model that memorizes the training data rather than learning the underlying pattern, performing well on training but poorly on new unseen data
4. A model that is too simple to capture the patterns in the data
</div>

??? question "Show Answer"
    The correct answer is **C**. Overfitting is like a student who memorizes last year's exam answers but doesn't understand the material — they ace the old test but fail on new questions. Signs of overfitting: training accuracy is very high (95%+) but validation accuracy is much lower (65%). The model learned the noise in the training data instead of the general pattern.

    **Concept Tested:** Overfitting

---

#### 4. What is the MNIST dataset?

<div class="upper-alpha" markdown>
1. A dataset of 70,000 grayscale images of handwritten digits (0-9), each 28x28 pixels, used as a benchmark for image classification
2. A collection of 1 million English sentences used for training language models
3. A dataset of medical images for training cancer detection models
4. A benchmark dataset of stock market prices for training financial models
</div>

??? question "Show Answer"
    The correct answer is **A**. MNIST contains 70,000 grayscale handwritten digit images: 60,000 for training and 10,000 for testing. Each image is 28x28 pixels (784 numbers from 0-255). It is the "Hello, World!" of machine learning — a well-understood, manageable dataset that is perfect for learning and benchmarking new techniques.

    **Concept Tested:** MNIST Dataset

---

#### 5. What does an epoch mean in neural network training?

<div class="upper-alpha" markdown>
1. One individual training example shown to the model
2. One complete pass through all the training data
3. One adjustment of the model's weights
4. One layer of neurons in the network
</div>

??? question "Show Answer"
    The correct answer is **B**. An epoch is one complete pass through the entire training dataset. If you have 60,000 training examples and train for 10 epochs, the model sees each training example 10 times (in different orders). Multiple epochs allow the model to progressively refine its weights and improve accuracy, though too many epochs can lead to overfitting.

    **Concept Tested:** Epoch

---

#### 6. What does the loss function measure in machine learning?

<div class="upper-alpha" markdown>
1. The speed of the training process in seconds per epoch
2. How wrong the model's predictions are — the value training tries to minimize
3. The number of parameters (weights) in the model
4. The amount of memory the model uses during inference
</div>

??? question "Show Answer"
    The correct answer is **B**. The loss function quantifies how wrong the model's predictions are compared to the correct labels. Training is the process of adjusting the model's weights to minimize the loss. Common loss functions include cross-entropy (for classification) and mean squared error (for regression). A lower loss means more accurate predictions.

    **Concept Tested:** Loss Function

---

#### 7. What does the ReLU activation function do?

<div class="upper-alpha" markdown>
1. Normalizes all outputs to be between 0 and 1
2. Converts outputs to probabilities that sum to 1.0
3. Outputs 0 for negative inputs and returns the input unchanged for positive inputs: `max(0, x)`
4. Multiplies inputs by a random weight to introduce randomness
</div>

??? question "Show Answer"
    The correct answer is **C**. ReLU (Rectified Linear Unit) is defined as `f(x) = max(0, x)`. For any negative input, ReLU outputs 0. For any positive input, ReLU passes it through unchanged. ReLU is used in hidden layers because it introduces non-linearity efficiently, allowing the network to learn complex patterns. Without activation functions, stacking layers would be no more powerful than a single layer.

    **Concept Tested:** ReLU Activation

---

#### 8. What does the softmax activation function do?

<div class="upper-alpha" markdown>
1. Filters out noise from the input data before training
2. Converts a vector of raw scores into probabilities that sum to 1.0
3. Randomly drops some neurons to prevent overfitting
4. Reduces the learning rate automatically during training
</div>

??? question "Show Answer"
    The correct answer is **B**. Softmax converts a vector of raw numbers (called logits) into probabilities that sum to exactly 1.0. For a 10-class digit classifier, it might output `[0.02, 0.85, 0.01, ..., 0.05]`, meaning "85% confident this is digit 1." Softmax is used in the final output layer of multi-class classification networks.

    **Concept Tested:** Softmax Activation

---

#### 9. What is a critical rule about the test set?

<div class="upper-alpha" markdown>
1. The test set should be larger than the training set for reliable results
2. The test set must never be used during training or model selection — only for a single final evaluation
3. The test set should be reviewed before training to understand the expected difficulty level
4. The same test set should be reused across multiple projects for consistency
</div>

??? question "Show Answer"
    The correct answer is **B**. The test set must be treated as completely unseen data. If you use test results to adjust your model and re-train, you are "cheating" — the model appears to generalize better than it actually does. The test set should be used exactly once, at the very end, to report your model's real-world performance. Use the validation set for all tuning decisions.

    **Concept Tested:** Train/Validation/Test Splits

---

#### 10. What is a dense layer in a neural network?

<div class="upper-alpha" markdown>
1. A layer that uses very small weights to compress information
2. A layer specifically for processing image data in a grid pattern
3. A fully connected layer where every neuron connects to every neuron in the previous layer
4. A layer that is only active during training and disabled during prediction
</div>

??? question "Show Answer"
    The correct answer is **C**. A dense (fully connected) layer connects every neuron in the current layer to every neuron in the previous layer. This is the most common layer type in basic neural networks. Each connection has a learnable weight. For a layer with 100 neurons connected to a previous layer of 784 inputs, there are 100 × 784 = 78,400 weight parameters in that layer alone.

    **Concept Tested:** Neural Network Layers

---
