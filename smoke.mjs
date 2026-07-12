import { openGraph, bootstrapGraph } from "./backend/memorydb/src/graph.ts"
import { mkdirSync } from "node:fs"
import { dirname } from "node:path"

const dbPath = "/tmp/smoke.lbug"
mkdirSync(dirname(dbPath), { recursive: true })
try {
  const g = openGraph(dbPath)
  bootstrapGraph(g)
  const tables = g.conn.querySync("CALL SHOW_TABLES() RETURN name as name")
  const arr = Array.isArray(tables) ? tables : [tables]
  const rows = arr[0]?.getAllSync() ?? []
  process.stdout.write(`[smoke] tables: ${rows.map((r) => r["name"]).join(", ")}\n`)
  const idx = g.conn.querySync("CALL SHOW_INDEXES() RETURN name as name, index_type as t")
  const arr2 = Array.isArray(idx) ? idx : [idx]
  const irows = arr2[0]?.getAllSync() ?? []
  process.stdout.write(`[smoke] indexes: ${irows.map((r) => `${r["name"]}(${r["t"]})`).join(", ")}\n`)
  g.close()
  process.stdout.write(`[smoke] ok\n`)
} catch (e) {
  process.stderr.write(`[smoke] error: ${(e).stack ?? String(e)}\n`)
  process.exit(1)
}
