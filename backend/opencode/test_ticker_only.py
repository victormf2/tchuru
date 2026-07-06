"""Prove the ticker fires every 200ms. No async, no SDK, just a thread."""
import sys
import threading
import time

T0 = time.monotonic()
stop = threading.Event()


def ticker():
    n = 0
    while not stop.is_set():
        time.sleep(0.2)
        n += 1
        print(f"[+{time.monotonic() - T0:6.2f}s] tick {n}", flush=True)


threading.Thread(target=ticker, daemon=True).start()
print("[main] thread started, sleeping 5s", flush=True)
time.sleep(5)
stop.set()
print("[main] done", flush=True)
