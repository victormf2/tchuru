"""Wrapper: ticks every 200ms while running test_event_stream.py as a subprocess.
Pipes its stdout so the ticker and the script output interleave in real time.

Run:
    python -u backend/opencode/test_event_stream_runner.py
"""
import os
import subprocess
import sys
import threading
import time
from pathlib import Path

HERE = Path(__file__).parent
SCRIPT = HERE / "test_event_stream.py"
TIMEOUT_S = 90

T0 = time.monotonic()


def out(msg: str) -> None:
    print(f"[+{time.monotonic() - T0:6.2f}s] {msg}", flush=True)


def ticker(stop: threading.Event) -> None:
    n = 0
    while not stop.is_set():
        time.sleep(1.0)
        n += 1
        out(f".tick {n}")


def main() -> int:
    out(f"launching: {SCRIPT.name}")
    proc = subprocess.Popen(
        [sys.executable, "-u", str(SCRIPT)],
        cwd=str(HERE),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        bufsize=1,
        text=True,
        env={**os.environ, "PYTHONUNBUFFERED": "1"},
    )

    stop = threading.Event()
    th = threading.Thread(target=ticker, args=(stop,), daemon=True)
    th.start()

    deadline = T0 + TIMEOUT_S
    try:
        assert proc.stdout is not None
        for line in proc.stdout:
            out(f"  | {line.rstrip()}")
            if time.monotonic() > deadline:
                out(f"TIMEOUT {TIMEOUT_S}s reached, killing subprocess")
                proc.kill()
                break
    finally:
        stop.set()
        th.join(timeout=1)
        rc = proc.wait(timeout=5)
        out(f"subprocess exited rc={rc}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
