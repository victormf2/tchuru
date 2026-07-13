# Agent Instructions

## OpenCode database

The OpenCode database is at `$HOME/.local/share/opencode/opencode.db` (SQLite, read-only).

Inspect it with the `sqlite3` CLI, e.g.:

```sh
sqlite3 -readonly "$HOME/.local/share/opencode/opencode.db" "SELECT id, title, time_created FROM session ORDER BY time_created DESC LIMIT 10"
```
