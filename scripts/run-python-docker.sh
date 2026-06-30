#!/usr/bin/env bash
# run-python-docker.sh
#
# Starts a small local HTTP service that lets students run Python code from
# the textbook web pages (mkdocs serve on localhost:8000).
#
# The service listens on http://127.0.0.1:5001 and accepts:
#   POST /run   JSON body: {"code": "<python source>"}
#   Response:   {"stdout": "...", "stderr": "...", "returncode": 0}
#
# Each submission runs inside a fresh, isolated Docker container with:
#   - No network access   (--network=none)
#   - 64 MB memory cap    (--memory=64m)
#   - 0.5 CPU cores       (--cpus=0.5)
#   - 32 process limit    (--pids-limit=32)
#   - 10-second timeout   (subprocess timeout)
#   - Auto-removed on exit (--rm)
#
# Usage:
#   bash scripts/run-python-docker.sh
#   PYTHON_DOCKER_PORT=5002 bash scripts/run-python-docker.sh   # custom port

set -euo pipefail

PORT="${PYTHON_DOCKER_PORT:-5001}"
DOCKER_IMAGE="python:3.11-alpine"

# ──────────────────────────────────────────────────────────────────────────────
# 1. Verify Docker is installed
# ──────────────────────────────────────────────────────────────────────────────
if ! command -v docker &>/dev/null; then
    cat <<'INSTALL_HELP'

ERROR: Docker is not installed on this computer.

Docker is a free tool that lets your computer run small, isolated software
environments called "containers."  In this textbook, we use Docker to run
student-written Python code safely — the code runs inside a container that
cannot read your files, cannot reach the internet, and is deleted the moment
the program finishes.  This makes it safe to experiment with code without
worrying about accidentally damaging anything on your computer.

HOW TO INSTALL DOCKER
──────────────────────────────────────────────────────────────────────────────

  macOS
  ─────
  1. Open your web browser and go to https://www.docker.com/products/docker-desktop/
  2. Click the "Download for Mac" button.  Choose the Apple Silicon (M1/M2/M3/M4)
     version if your Mac is from 2020 or later; choose the Intel version otherwise.
  3. Open the downloaded .dmg file and drag Docker into your Applications folder.
  4. Open Docker Desktop from your Applications folder (Launchpad → Docker).
  5. Wait for the animated whale icon to appear in your menu bar at the top-right
     of your screen.  This means Docker is running.
  6. Open a new Terminal window (Applications → Utilities → Terminal) and type:
       docker --version
     You should see something like: Docker version 27.x.x

  Windows 10 / Windows 11
  ────────────────────────
  1. Open your web browser and go to https://www.docker.com/products/docker-desktop/
  2. Click "Download for Windows" and run the installer.
  3. During setup you may be asked to enable WSL 2 (Windows Subsystem for Linux).
     Follow the on-screen instructions — this is safe and recommended.
  4. After installation, open Docker Desktop from the Start menu.
  5. Wait for the animated whale icon to appear in the system tray (bottom-right
     of your screen near the clock).
  6. Open PowerShell or Command Prompt and type:
       docker --version
     You should see something like: Docker version 27.x.x

  Linux (Ubuntu 22.04 / Debian 12)
  ──────────────────────────────────
  1. Open a terminal.
  2. Run the following commands one at a time:
       sudo apt-get update
       sudo apt-get install -y docker.io
       sudo systemctl enable --now docker
       sudo usermod -aG docker $USER
  3. Log out and log back in so the group change takes effect.
  4. Type:  docker --version
     You should see something like: Docker version 24.x.x

  Raspberry Pi OS
  ────────────────
  1. Open a terminal and run:
       curl -fsSL https://get.docker.com | sh
       sudo usermod -aG docker $USER
  2. Reboot your Pi.
  3. After rebooting, type:  docker --version

──────────────────────────────────────────────────────────────────────────────

After Docker is installed and running, open a new terminal and re-run:
  bash scripts/run-python-docker.sh

INSTALL_HELP
    exit 1
fi

# ──────────────────────────────────────────────────────────────────────────────
# 2. Verify Docker daemon is running
# ──────────────────────────────────────────────────────────────────────────────
if ! docker info &>/dev/null 2>&1; then
    echo ""
    echo "ERROR: Docker is installed but the Docker daemon is not running."
    echo ""
    echo "The Docker daemon is the background service that manages containers."
    echo "It must be started before you can run Python code in Docker."
    echo ""

    OS="$(uname -s)"
    case "${OS}" in
        Darwin)
            echo "  You are on macOS.  Try one of these:"
            echo ""
            echo "  Option 1 — open Docker Desktop from the GUI:"
            echo "    Open Launchpad (or Spotlight) and launch 'Docker'."
            echo "    Wait for the whale icon in your menu bar to stop animating."
            echo ""
            echo "  Option 2 — launch Docker Desktop from the terminal:"
            echo "    open -a Docker"
            echo "    Then wait about 30 seconds and re-run this script."
            echo ""
            echo "  If you don't have Docker Desktop installed, download it from:"
            echo "    https://www.docker.com/products/docker-desktop/"
            ;;
        Linux)
            echo "  You are on Linux.  Try:"
            echo ""
            if command -v systemctl &>/dev/null; then
                echo "    sudo systemctl start docker"
            else
                echo "    sudo service docker start"
            fi
            echo ""
            echo "  If Docker is not in your PATH or the service doesn't exist,"
            echo "  you may need to install Docker first:"
            echo "    sudo apt-get install -y docker.io   # Ubuntu/Debian"
            echo "    curl -fsSL https://get.docker.com | sh   # Raspberry Pi / others"
            ;;
        MINGW*|MSYS*|CYGWIN*)
            echo "  You are on Windows.  Open Docker Desktop from the Start menu"
            echo "  and wait for the whale icon in your system tray to stop animating."
            ;;
        *)
            echo "  Start Docker Desktop for your operating system, then try again."
            ;;
    esac

    echo ""
    echo "Once Docker is running, re-run:"
    echo "  bash scripts/run-python-docker.sh"
    echo ""
    exit 1
fi

# ──────────────────────────────────────────────────────────────────────────────
# 3. Pull the Python image (cached after first run, ~50 MB)
# ──────────────────────────────────────────────────────────────────────────────
echo ""
echo "Checking for Docker image: ${DOCKER_IMAGE}"
echo "(First-time download is ~50 MB — subsequent starts are instant)"
docker pull "${DOCKER_IMAGE}" --quiet
echo "Image ready."

# ──────────────────────────────────────────────────────────────────────────────
# 4. Start the local API server
# ──────────────────────────────────────────────────────────────────────────────
echo ""
echo "┌─────────────────────────────────────────────────────────────────┐"
echo "│  Python Docker execution service                                │"
echo "│                                                                 │"
echo "│  Listening on:  http://127.0.0.1:${PORT}                          │"
echo "│  Using image:   ${DOCKER_IMAGE}                         │"
echo "│                                                                 │"
echo "│  Keep this terminal open while using the textbook.             │"
echo "│  Press Ctrl+C to stop.                                         │"
echo "└─────────────────────────────────────────────────────────────────┘"
echo ""

# Pass settings to Python via the environment so we can use a quoted heredoc
# (single-quoted PYEOF prevents bash from expanding anything inside the script).
export _DOCKER_PORT="${PORT}"
export _DOCKER_IMAGE="${DOCKER_IMAGE}"

python3 - <<'PYEOF'
import http.server
import json
import os
import subprocess
import time

PORT  = int(os.environ["_DOCKER_PORT"])
IMAGE = os.environ["_DOCKER_IMAGE"]

# Marker written to container stderr so we can extract Python-side timing
_EXEC_MARKER = "__EXEC_MS__:"


class DockerRunHandler(http.server.BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        pass

    def do_OPTIONS(self):
        self.send_response(204)
        self._set_cors_headers()
        self.end_headers()

    def do_POST(self):
        if self.path != "/run":
            self.send_error(404, "Only POST /run is supported")
            return

        # ── Phase 1 begins: request arrives at server ──────────────────────
        t_received = time.perf_counter()

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            data = json.loads(body)
            code = data.get("code", "")
            show_timing = bool(data.get("show_timing", False))
        except (json.JSONDecodeError, KeyError):
            self.send_error(400, "Request body must be JSON with a 'code' field")
            return

        # ── Phase 2 begins: hand off to Docker ─────────────────────────────
        t_docker_start = time.perf_counter()
        result = self._run_in_docker(code, instrument=show_timing)
        t_docker_done = time.perf_counter()

        server_overhead_ms  = round((t_docker_start - t_received)  * 1000, 1)
        docker_total_ms     = round((t_docker_done  - t_docker_start) * 1000, 1)
        python_exec_ms      = result.pop("python_exec_ms", None)

        # container_startup_ms = docker_total_ms minus the time Python actually
        # ran user code (measured from inside the container).
        container_startup_ms = (
            round(docker_total_ms - python_exec_ms, 1)
            if python_exec_ms is not None else None
        )

        payload = {
            "stdout":    result["stdout"],
            "stderr":    result["stderr"],
            "returncode": result["returncode"],
            "timing": {
                "server_overhead_ms":   server_overhead_ms,
                "docker_total_ms":      docker_total_ms,
                "container_startup_ms": container_startup_ms,
                "python_exec_ms":       python_exec_ms,
            },
        }
        self._json_response(200, payload)

    def _run_in_docker(self, code, instrument=False):
        """Run code in a fresh container; optionally wrap it with a timer."""
        if instrument:
            # Prepend/append timing lines so we can measure pure Python
            # execution time from inside the container.
            run_code = (
                "import time as _t, sys as _sys\n"
                "_t0 = _t.perf_counter()\n"
                + code + "\n"
                "_exec_ms = (_t.perf_counter() - _t0) * 1000\n"
                "print(f'" + _EXEC_MARKER + "{_exec_ms:.3f}', file=_sys.stderr)\n"
            )
        else:
            run_code = code

        try:
            proc = subprocess.run(
                [
                    "docker", "run", "--rm",
                    "--network=none",
                    "--memory=64m",
                    "--memory-swap=64m",
                    "--cpus=0.5",
                    "--pids-limit=32",
                    IMAGE,
                    "python", "-c", run_code,
                ],
                capture_output=True,
                text=True,
                timeout=10,
            )

            stderr = proc.stderr
            python_exec_ms = None

            if instrument:
                # Strip the timing marker from stderr so it doesn't appear
                # in the student's output, and extract the value.
                clean_lines = []
                for line in stderr.splitlines():
                    if line.startswith(_EXEC_MARKER):
                        try:
                            python_exec_ms = round(float(line[len(_EXEC_MARKER):]), 3)
                        except ValueError:
                            pass
                    else:
                        clean_lines.append(line)
                stderr = "\n".join(clean_lines)
                if stderr and not stderr.endswith("\n"):
                    stderr += "\n"

            return {
                "stdout":         proc.stdout,
                "stderr":         stderr,
                "returncode":     proc.returncode,
                "python_exec_ms": python_exec_ms,
            }

        except subprocess.TimeoutExpired:
            return {
                "stdout": "",
                "stderr": "Your program was stopped after 10 seconds (timeout).",
                "returncode": 1,
                "python_exec_ms": None,
            }
        except Exception as exc:
            return {
                "stdout": "",
                "stderr": f"Docker error: {exc}",
                "returncode": 1,
                "python_exec_ms": None,
            }

    def _json_response(self, status, payload):
        body = json.dumps(payload).encode()
        self.send_response(status)
        self._set_cors_headers()
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _set_cors_headers(self):
        origin = self.headers.get("Origin", "")
        allowed_origins = {
            "http://localhost:8000",
            "http://127.0.0.1:8000",
            "http://localhost:5500",
            "http://127.0.0.1:5500",
        }
        cors_origin = origin if origin in allowed_origins else "http://localhost:8000"
        self.send_header("Access-Control-Allow-Origin", cors_origin)
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")


server = http.server.HTTPServer(("127.0.0.1", PORT), DockerRunHandler)
print(f"Ready — accepting code submissions at http://127.0.0.1:{PORT}/run")
server.serve_forever()
PYEOF
