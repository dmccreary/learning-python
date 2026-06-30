# Running Python in Docker

So far in this course you have run Python programs in two ways:

1. **Skulpt** — Python runs right inside your browser, no install needed.
2. **Your local computer** — Python installed on your machine.

Now we add a third option: **Docker**.  Docker lets you run Python inside a
tiny, isolated box called a *container* — directly on your computer, but safely
separated from everything else.  The container can't see your files, can't reach
the internet, and disappears the moment your program finishes.

This is actually how many real companies run student code in coding platforms!

---

## Before You Begin — Start the Docker Service

You must have the Docker execution service running in a separate terminal before
the labs on this page will work.

**Open a terminal in the project folder and run:**

```sh
bash scripts/run-python-docker.sh
```

If Docker is not installed the script will print detailed instructions for
every operating system.  Once the service is running you will see:

```
Python Docker execution service
Listening on:  http://127.0.0.1:5001
```

Leave that terminal open while you work through this page.

---

## What Is a Container?

Think of a container like a lunchbox.  Your lunch (Python + your code) sits
inside the box, completely separate from everything else in your backpack.
When lunch is over you close the lid and the mess stays inside.

| Feature | Description |
|---------|-------------|
| **Isolated** | Your code cannot read files on the host computer |
| **No network** | Your code cannot connect to the internet |
| **Limited resources** | Maximum 64 MB of RAM and half a CPU core |
| **Temporary** | The container is deleted the moment your program exits |
| **Reproducible** | Every student runs the exact same Python version |

---

## Lab 1 — Hello, World!

The classic first program.  Run it, then try changing the message.

<div id="docker-lab-1">
<div id="docker-editor-1">
<textarea id="docker-code-1" rows="4" spellcheck="false">print("Hello, World!")</textarea>
<div id="docker-buttons-1">
  <button id="docker-run-1" onclick="runDocker('1')">&#9654; Run</button>
  <button id="docker-reset-1" onclick="resetDocker('1')">&#8635; Reset</button>
</div>
<pre id="docker-output-1" class="docker-output">Output will appear here after you click Run.</pre>
</div>
</div>

**Try these experiments:**

- Change `"Hello, World!"` to your own name, like `"Hello, Alex!"`
- Add a second `print()` line below the first one
- Try `print(2 + 2)` — can Python do arithmetic?

---

## Lab 2 — Variables and Arithmetic

Python can store values in *variables* and do math with them.

<div id="docker-lab-2">
<div id="docker-editor-2">
<textarea id="docker-code-2" rows="8" spellcheck="false">name = "Ada Lovelace"
year_born = 1815
current_year = 2025

age = current_year - year_born
print("Name:", name)
print("Age:", age, "years ago she was born")</textarea>
<div id="docker-buttons-2">
  <button id="docker-run-2" onclick="runDocker('2')">&#9654; Run</button>
  <button id="docker-reset-2" onclick="resetDocker('2')">&#8635; Reset</button>
</div>
<pre id="docker-output-2" class="docker-output">Output will appear here after you click Run.</pre>
</div>
</div>

**Try these experiments:**

- Change `name` to your own name
- Change `year_born` to your own birth year — what does `age` show?
- Add a line: `print("Python version check:", 3 * 7)`

---

## Lab 3 — Loops in the Container

Loops let you repeat code many times.  This one counts from 1 to 5.

<div id="docker-lab-3">
<div id="docker-editor-3">
<textarea id="docker-code-3" rows="7" spellcheck="false">print("Counting with a loop:")
for i in range(1, 6):
    print(f"  Step {i} of 5")

print("Done!")
</textarea>
<div id="docker-buttons-3">
  <button id="docker-run-3" onclick="runDocker('3')">&#9654; Run</button>
  <button id="docker-reset-3" onclick="resetDocker('3')">&#8635; Reset</button>
</div>
<pre id="docker-output-3" class="docker-output">Output will appear here after you click Run.</pre>
</div>
</div>

**Try these experiments:**

- Change `range(1, 6)` to `range(1, 11)` to count to 10
- Replace `Step` with `Rocket launch in` and count *down* using `range(10, 0, -1)`

---

## Lab 4 — How Long Does It Take?

Every time you click **Run**, your code makes a round-trip through four
distinct phases.  This lab times each one so you can see exactly where the
milliseconds go.

| # | Phase | What is happening |
|---|-------|-------------------|
| 1 | **Send to service** | Browser encodes your code as JSON and sends it over the loopback network to the Docker service running on port 5001 |
| 2 | **Container startup** | Docker creates a brand-new Python container from the cached image, sets up the isolated filesystem, and starts the Python process |
| 3 | **Python execution** | Your code actually runs inside the container |
| 4 | **Return to browser** | The container's output travels back over the loopback network and the browser renders the result |

Edit the code below — try a short program vs a long loop — then click **Run**
and watch which phases change.

<div id="docker-lab-4">
<div id="docker-editor-4">
<textarea id="docker-code-4" rows="6" spellcheck="false">print("Hello from the timed lab!")
total = 0
for i in range(100_000):
    total += i
print(f"Sum 0–99999 = {total}")</textarea>
<div id="docker-buttons-4">
  <button id="docker-run-4" onclick="runDockerTimed()">&#9654; Run + Time</button>
  <button id="docker-reset-4" onclick="resetDockerTimed()">&#8635; Reset</button>
</div>
</div>
<div id="docker-timing-display" style="display:none; margin-top:12px;">
  <table id="docker-timing-table">
    <thead>
      <tr><th>#</th><th>Phase</th><th style="text-align:right">Time (ms)</th><th>Bar</th></tr>
    </thead>
    <tbody>
      <tr id="tr-network-send">
        <td>1</td><td>Send to service (network)</td>
        <td id="td-network-send" style="text-align:right">—</td>
        <td><div class="timing-bar" id="bar-network-send"></div></td>
      </tr>
      <tr id="tr-startup">
        <td>2</td><td>Container startup</td>
        <td id="td-startup" style="text-align:right">—</td>
        <td><div class="timing-bar" id="bar-startup"></div></td>
      </tr>
      <tr id="tr-exec">
        <td>3</td><td>Python execution</td>
        <td id="td-exec" style="text-align:right">—</td>
        <td><div class="timing-bar" id="bar-exec"></div></td>
      </tr>
      <tr id="tr-network-return">
        <td>4</td><td>Return to browser (network)</td>
        <td id="td-network-return" style="text-align:right">—</td>
        <td><div class="timing-bar" id="bar-network-return"></div></td>
      </tr>
      <tr style="font-weight:bold; border-top: 2px solid #642580;">
        <td colspan="2">Total round-trip</td>
        <td id="td-total" style="text-align:right">—</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <p id="docker-timing-note" style="font-size:0.85em; color:#666; margin-top:6px;"></p>
</div>
<pre id="docker-output-4" class="docker-output" style="margin-top:10px;">Output will appear here after you click Run + Time.</pre>
</div>

**Typical results** (measured on a MacBook, running `python:3.11-alpine`):

| # | Phase | Cold start (1st run) | Warm (2nd run+) |
|---|-------|---------------------:|----------------:|
| 1 | Send to service (network) | 3.2 ms | 3.2 ms |
| 2 | Container startup | ~4,700 ms | 258 ms |
| 3 | Python execution | 9.5 ms | 9.5 ms |
| 4 | Return to browser (network) | 3.2 ms | 3.2 ms |
| | **Total round-trip** | **~5,000 ms** | **~274 ms** |

The Python code (`range(100_000)` loop) ran for 9.516 ms — just 3.5% of the
warm round-trip time.  Container startup dominates in both cases.

**Things to notice:**

- The **first run is slow (~5 seconds)** — a *cold start*.  Docker must load the
  `python:3.11-alpine` image layers from disk into RAM the very first time.
  Every run after that is a *warm start* (~300 ms) because those layers stay
  in the operating system's page cache (fast RAM).
- The **container startup** phase still dominates even on warm runs — Docker
  creates a fresh isolated process from scratch every time you click Run.
  This is the cost of safety.
- **Python execution** is just a few milliseconds even for loops over 100,000
  numbers — Python is fast once it starts.
- **Network** time is tiny because everything stays on `127.0.0.1` (your own
  machine), never touching the internet.
- Restarting your computer clears the page cache, so the next first run will
  be slow again.

---

## How It Works

When you click **Run**, here is what happens behind the scenes:

1. The browser sends your code to the local service running at `http://127.0.0.1:5001/run`.
2. The service asks Docker to start a fresh Python container.
3. Docker runs your code inside the container (no network, limited memory, 10-second timeout).
4. The container captures everything printed to the screen.
5. The service sends that output back to your browser.
6. The container is deleted automatically.

The round-trip takes about **5 seconds on the very first run** (cold start —
Docker loads the image from disk into RAM).  Every run after that takes about
**300 milliseconds** because the image stays in the operating system's memory
cache until you restart your computer.

---

## Troubleshooting

**"Cannot connect to the Python Docker service"**
: The service is not running.  Open a terminal and run `bash scripts/run-python-docker.sh`.

**"Docker error: ..."**
: Make sure Docker Desktop is running (look for the whale icon in your menu bar or system tray).

**"Timed out after 10 seconds"**
: Your program ran too long.  Check for an infinite loop (`while True:` with no `break`).

---

