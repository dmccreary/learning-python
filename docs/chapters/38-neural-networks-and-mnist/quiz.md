# Quiz: Neural Networks and MNIST

Test your understanding of Convolutional Neural Networks, Conv2D, MaxPooling, Dropout, Flatten, and Keras model training with these questions. Click "Show Answer" to reveal the correct answer and explanation.

---

#### 1. What is the main advantage of a Convolutional Neural Network (CNN) over a dense network for image data?

<div class="upper-alpha" markdown>
1. CNNs train faster because they have fewer total parameters to update
2. CNNs preserve the 2-D spatial structure of images and detect local patterns like edges and corners, regardless of where they appear
3. CNNs can process color images; dense networks can only handle grayscale
4. CNNs do not require labeled training data, unlike dense networks
</div>

??? question "Show Answer"
    The correct answer is **B**. Dense networks flatten an image to a 1-D vector, losing all spatial relationships between pixels. CNNs slide filter kernels across the 2-D image to detect local patterns (edges, corners, shapes). The same kernel detects a pattern wherever it appears — a "7" in the top-left and bottom-right are recognized by the same kernel. This is called translation invariance.

    **Concept Tested:** CNN vs Dense Networks

---

#### 2. What does a `Conv2D(32, (3,3))` layer do?

<div class="upper-alpha" markdown>
1. Creates a dense layer with 32 neurons and 3×3 connections
2. Splits the image into 32 blocks each of size 3×3
3. Slides 32 different 3×3 kernel filters across the image, producing 32 feature maps
4. Compresses the image to a 32×32 pixel resolution
</div>

??? question "Show Answer"
    The correct answer is **C**. `Conv2D(filters, kernel_size)` creates `filters` learnable kernels, each of size `kernel_size × kernel_size`. Each kernel slides across the entire input and produces one feature map. `Conv2D(32, (3,3))` produces 32 feature maps — each detecting a different visual pattern (horizontal edges, curves, corners, etc.).

    **Concept Tested:** Conv2D Layer

---

#### 3. What does `MaxPooling2D((2,2))` do to a feature map?

<div class="upper-alpha" markdown>
1. Applies a 2×2 convolution filter to find edges
2. Doubles the width and height of the feature map for higher resolution
3. Divides the feature map into 2×2 blocks and keeps only the maximum value in each block, halving the width and height
4. Averages the values in each 2×2 block instead of taking the maximum
</div>

??? question "Show Answer"
    The correct answer is **C**. MaxPooling divides the feature map into non-overlapping blocks of the given size and keeps the maximum value from each block. `MaxPooling2D((2,2))` on a 24×24 feature map produces a 12×12 feature map. This reduces computational cost and creates a degree of position invariance — small shifts in the input produce the same pooling output.

    **Concept Tested:** MaxPooling2D

---

#### 4. What does the `Flatten()` layer do in a CNN?

<div class="upper-alpha" markdown>
1. Normalizes all pixel values to be between 0 and 1
2. Converts the 2-D feature maps from convolutional layers into a single 1-D vector for the dense layers
3. Flattens the learning rate to a constant value during training
4. Removes all zero values from the feature maps to reduce memory
</div>

??? question "Show Answer"
    The correct answer is **B**. After convolutional and pooling layers, the data is still 2-D (or higher-dimensional). Dense layers require 1-D input. `Flatten()` reshapes the multi-dimensional tensor into a 1-D vector without changing any values. For example, a 5×5×64 output becomes a vector of length 5×5×64 = 1,600 values.

    **Concept Tested:** Flatten Layer

---

#### 5. What does `Dropout(0.5)` do during training?

<div class="upper-alpha" markdown>
1. Drops 50% of the training examples each epoch to speed up training
2. Randomly sets 50% of neuron outputs to zero during each training step, forcing the network to learn redundant representations and reducing overfitting
3. Reduces the learning rate by 50% after each epoch
4. Keeps only the top 50% of neurons by weight magnitude
</div>

??? question "Show Answer"
    The correct answer is **B**. Dropout randomly silences (sets to zero) a fraction of neurons during each training step. With `Dropout(0.5)`, 50% of neurons are randomly disabled each time. This prevents the network from relying too heavily on any single neuron, forcing it to develop multiple independent pathways for detecting each feature. At prediction time, Dropout is automatically disabled and all neurons are active.

    **Concept Tested:** Dropout

---

#### 6. What does `model.compile()` configure?

<div class="upper-alpha" markdown>
1. The number of layers and neurons in the model
2. The optimizer (how weights update), the loss function (what to minimize), and the metrics to track
3. The hardware (CPU vs GPU) that will be used for training
4. The input and output shape that the model expects
</div>

??? question "Show Answer"
    The correct answer is **B**. `model.compile()` sets up three key training choices before you can call `model.fit()`: (1) the optimizer — how the model updates weights (e.g., `"adam"`, `"sgd"`); (2) the loss function — what measure of wrongness to minimize; and (3) metrics to monitor but not optimize (e.g., `"accuracy"`). You must compile before training.

    **Concept Tested:** model.compile()

---

#### 7. What does `model.fit()` do?

<div class="upper-alpha" markdown>
1. Checks whether the model's architecture matches the input data shape
2. Predicts labels for new, unseen data
3. Trains the model by running the optimizer to minimize the loss over the training data for a given number of epochs
4. Saves the trained model weights to a file
</div>

??? question "Show Answer"
    The correct answer is **C**. `model.fit(x_train, y_train, epochs=10)` runs the training loop: for each epoch, it passes all training examples through the model, computes the loss, and runs the optimizer to update the weights. It returns a history object containing the loss and metrics for each epoch. Use `validation_split=0.1` to monitor validation accuracy during training.

    **Concept Tested:** model.fit()

---

#### 8. What does the batch_size parameter in `model.fit()` control?

<div class="upper-alpha" markdown>
1. The total number of training examples to use for training
2. The number of training examples processed together before the model updates its weights
3. The number of layers to train in parallel
4. The size of the images in pixels that the model can accept
</div>

??? question "Show Answer"
    The correct answer is **B**. `batch_size` determines how many training examples are grouped together for each weight update. A batch size of 64 means the model processes 64 examples, computes the average loss, then updates weights once. Smaller batches give noisier but more frequent updates; larger batches give smoother but less frequent updates. Common values are 32, 64, and 128.

    **Concept Tested:** Training with model.fit()

---

#### 9. What is translation invariance in CNNs?

<div class="upper-alpha" markdown>
1. The ability to translate (shift) the output predictions to different languages
2. A kernel learned in the training set that does not work on the test set
3. The property that the same feature detector (kernel) can recognize a pattern regardless of where it appears in the image
4. Converting pixel coordinates from one coordinate system to another
</div>

??? question "Show Answer"
    The correct answer is **C**. Translation invariance means a CNN can recognize a feature — like the curve at the top of a "6" — whether it appears in the top-left or bottom-right of the image. This is because the same learned kernel is shared and scanned across the entire image. Dense networks lack this property: each position in the image has independent weights, so the network must separately learn each position.

    **Concept Tested:** CNN Properties

---

#### 10. What are RNNs (Recurrent Neural Networks) used for?

<div class="upper-alpha" markdown>
1. Processing grid-structured data like images with local filters
2. Sequential data where order matters — like text, speech, time series, and stock prices
3. Generating images from text descriptions
4. Clustering unlabeled data into groups automatically
</div>

??? question "Show Answer"
    The correct answer is **B**. Recurrent Neural Networks (RNNs) process sequences where the order matters. Unlike dense or CNN layers, RNNs maintain hidden state — a "memory" that carries information from earlier in the sequence to later steps. This makes them well-suited for natural language processing, speech recognition, time-series forecasting, and music generation. LSTMs (Long Short-Term Memory) are an improved version of RNNs that handle longer sequences.

    **Concept Tested:** RNNs and LSTMs

---
