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
    cat <<'DAEMON_HELP'

ERROR: Docker is installed but the Docker daemon is not running.

The Docker daemon is the background service that actually manages containers.
It needs to be started before you can use Docker.

  macOS / Windows:
    Open Docker Desktop from your Applications folder (Mac) or Start menu
    (Windows) and wait for the whale icon to stop animating.  Then try again.

  Linux:
    Run:  sudo systemctl start docker
    Then try again.

DAEMON_HELP
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

PORT  = int(os.environ["_DOCKER_PORT"])
IMAGE = os.environ["_DOCKER_IMAGE"]


class DockerRunHandler(http.server.BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        # Suppress per-request noise; errors still reach stderr.
        pass

    def do_OPTIONS(self):
        """Respond to CORS pre-flight requests from the browser."""
        self.send_response(204)
        self._set_cors_headers()
        self.end_headers()

    def do_POST(self):
        if self.path != "/run":
            self.send_error(404, "Only POST /run is supported")
            return

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            data = json.loads(body)
            code = data.get("code", "")
        except (json.JSONDecodeError, KeyError):
            self.send_error(400, "Request body must be JSON with a 'code' field")
            return

        result = self._run_in_docker(code)
        self._json_response(200, result)

    def _run_in_docker(self, code):
        """Run Python code in a fresh, isolated Docker container."""
        try:
            proc = subprocess.run(
                [
                    "docker", "run", "--rm",
                    "--network=none",          # no internet access
                    "--memory=64m",            # RAM cap
                    "--memory-swap=64m",       # no swap
                    "--cpus=0.5",              # half a core
                    "--pids-limit=32",         # no fork bombs
                    IMAGE,
                    "python", "-c", code,
                ],
                capture_output=True,
                text=True,
                timeout=10,
            )
            return {
                "stdout": proc.stdout,
                "stderr": proc.stderr,
                "returncode": proc.returncode,
            }
        except subprocess.TimeoutExpired:
            return {
                "stdout": "",
                "stderr": "Your program was stopped after 10 seconds (timeout).",
                "returncode": 1,
            }
        except Exception as exc:
            return {
                "stdout": "",
                "stderr": f"Docker error: {exc}",
                "returncode": 1,
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
        # Allow the MkDocs dev server and common alternatives.
        origin = self.headers.get("Origin", "")
        allowed_origins = {
            "http://localhost:8000",
            "http://127.0.0.1:8000",
            "http://localhost:5500",   # VS Code Live Server
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
