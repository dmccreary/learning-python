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

## How It Works

When you click **Run**, here is what happens behind the scenes:

1. The browser sends your code to the local service running at `http://127.0.0.1:5001/run`.
2. The service asks Docker to start a fresh Python container.
3. Docker runs your code inside the container (no network, limited memory, 10-second timeout).
4. The container captures everything printed to the screen.
5. The service sends that output back to your browser.
6. The container is deleted automatically.

The round-trip takes about 1–2 seconds.

---

## Troubleshooting

**"Cannot connect to the Python Docker service"**
: The service is not running.  Open a terminal and run `bash scripts/run-python-docker.sh`.

**"Docker error: ..."**
: Make sure Docker Desktop is running (look for the whale icon in your menu bar or system tray).

**"Timed out after 10 seconds"**
: Your program ran too long.  Check for an infinite loop (`while True:` with no `break`).

---

<style>
/* Docker lab container */
[id^="docker-lab-"] {
  border: 2px solid #642580;
  border-radius: 8px;
  padding: 16px;
  margin: 1.5em 0;
  background: #fafafa;
}

[id^="docker-editor-"] {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

[id^="docker-code-"] {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  border: 2px solid #642580;
  border-radius: 6px 6px 0 0;
  background: #1e1e2e;
  color: #cdd6f4;
  resize: vertical;
  box-sizing: border-box;
  tab-size: 4;
}

[id^="docker-code-"]:focus {
  outline: none;
  border-color: #41BAC1;
}

[id^="docker-buttons-"] {
  display: flex;
  gap: 8px;
}

[id^="docker-run-"] {
  padding: 8px 20px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #642580;
  color: white;
}
[id^="docker-run-"]:hover { background: #7a2f9e; }

[id^="docker-reset-"] {
  padding: 8px 20px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #41BAC1;
  color: white;
}
[id^="docker-reset-"]:hover { background: #2fa8b0; }

.docker-output {
  margin: 0;
  padding: 10px;
  min-height: 36px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  font-family: 'Courier New', monospace;
  color: #222;
  white-space: pre-wrap;
  word-break: break-word;
}

.docker-error {
  color: #c0392b;
}

.docker-running {
  color: #888;
  font-style: italic;
}
</style>

<script>
// Default code for each lab — used by the Reset button
const DOCKER_DEFAULTS = {
  '1': 'print("Hello, World!")',
  '2': `name = "Ada Lovelace"
year_born = 1815
current_year = 2025

age = current_year - year_born
print("Name:", name)
print("Age:", age, "years ago she was born")`,
  '3': `print("Counting with a loop:")
for i in range(1, 6):
    print(f"  Step {i} of 5")

print("Done!")`,
};

const SERVICE_URL = 'http://127.0.0.1:5001/run';

async function runDocker(suffix) {
  const codeEl   = document.getElementById('docker-code-'   + suffix);
  const outputEl = document.getElementById('docker-output-' + suffix);
  const runBtn   = document.getElementById('docker-run-'    + suffix);

  if (!codeEl || !outputEl) return;

  const code = codeEl.value;
  runBtn.disabled = true;
  outputEl.className = 'docker-output docker-running';
  outputEl.textContent = 'Running…';

  try {
    const response = await fetch(SERVICE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      throw new Error('Service returned status ' + response.status);
    }

    const data = await response.json();

    outputEl.className = 'docker-output';

    if (data.returncode !== 0 && data.stderr) {
      // Show stderr in red, stdout (if any) in normal colour
      outputEl.innerHTML =
        (data.stdout ? escHtml(data.stdout) + '\n' : '') +
        '<span class="docker-error">' + escHtml(data.stderr) + '</span>';
    } else if (data.stdout || data.stderr) {
      outputEl.textContent = (data.stdout + data.stderr).replace(/\n$/, '');
    } else {
      outputEl.textContent = '(program finished with no output)';
    }

  } catch (err) {
    outputEl.className = 'docker-output';
    const isConnectError =
      err.message.includes('Failed to fetch') ||
      err.message.includes('NetworkError') ||
      err.message.includes('net::ERR');

    if (isConnectError) {
      outputEl.innerHTML =
        '<span class="docker-error">' +
        'Cannot connect to the Python Docker service.\n\n' +
        'Please open a terminal and run:\n' +
        '  bash scripts/run-python-docker.sh\n\n' +
        'Then reload this page and try again.' +
        '</span>';
    } else {
      outputEl.innerHTML =
        '<span class="docker-error">Error: ' + escHtml(err.message) + '</span>';
    }
  } finally {
    runBtn.disabled = false;
  }
}

function resetDocker(suffix) {
  const codeEl   = document.getElementById('docker-code-'   + suffix);
  const outputEl = document.getElementById('docker-output-' + suffix);
  if (codeEl)   codeEl.value = DOCKER_DEFAULTS[suffix] || '';
  if (outputEl) { outputEl.className = 'docker-output'; outputEl.textContent = ''; }
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
</script>
