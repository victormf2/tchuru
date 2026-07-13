import { Connection, Database, type QueryResult } from "@ladybugdb/core"
import { BOOTSTRAP_QUERIES, SETUP_QUERIES } from "./schema.js"

export type Graph = {
  db: Database
  conn: Connection
  close: () => void
}

export function openGraph(dbPath: string): Graph {
  const db = new Database(dbPath, 256 * 1024 * 1024)
  db.initSync()
  const conn = new Connection(db)
  conn.initSync()
  return {
    db,
    conn,
    close: () => {
      conn.closeSync()
      db.closeSync()
    },
  }
}

function firstResult(r: QueryResult | QueryResult[]): QueryResult {
  return Array.isArray(r) ? (r[0] as QueryResult) : r
}

function resultNameSet(
  result: QueryResult | QueryResult[],
  key: string,
): Set<string> {
  const out = new Set<string>()
  const q = firstResult(result)
  for (const row of q.getAllSync()) {
    const v = row[key]
    if (typeof v === "string") {
      out.add(v)
    } else if (v != null) {
      out.add(String(v))
    }
  }
  return out
}

function getCreateName(q: string): string | null {
  const m = q.match(/TABLE (\w+)/)
  return m?.[1] ?? null
}

function getIndexName(q: string): string | null {
  const m = q.match(
    /'([A-Za-z_][A-Za-z0-9_]*)'\s*,\s*'([A-Za-z_][A-Za-z0-9_]*)'/,
  )
  return m?.[2] ?? null
}

export function bootstrapGraph(graph: Graph): void {
  for (const q of SETUP_QUERIES) {
    try {
      graph.conn.querySync(q)
    } catch (e) {
      const msg = (e as Error).message ?? String(e)
      process.stderr.write(`[bootstrap] setup query failed: ${q} — ${msg}\n`)
    }
  }

  const tables = resultNameSet(
    graph.conn.querySync("CALL SHOW_TABLES() RETURN name as name"),
    "name",
  )
  const indexes = resultNameSet(
    graph.conn.querySync("CALL SHOW_INDEXES() RETURN index_name as index_name"),
    "index_name",
  )

  for (const q of BOOTSTRAP_QUERIES) {
    if (
      q.startsWith("CALL CREATE_VECTOR_INDEX") ||
      q.startsWith("CALL CREATE_FTS_INDEX")
    ) {
      const name = getIndexName(q)
      if (name && indexes.has(name)) continue
    } else {
      const name = getCreateName(q)
      if (name && tables.has(name)) continue
    }
    graph.conn.querySync(q)
  }
}
