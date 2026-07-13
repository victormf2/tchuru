import { Connection, Database } from "@ladybugdb/core"

const dbPath = process.argv[2] ?? "./backend/memorydb/data/memorydb.lbug"
const db = new Database(dbPath, 256 * 1024 * 1024)
db.initSync()
const conn = new Connection(db)
conn.initSync()

function run(label: string, q: string): void {
  const raw = conn.querySync(q)
  const r = Array.isArray(raw) ? raw[0]! : raw
  console.log(`\n=== ${label} ===`)
  console.log(JSON.stringify(r.getAllSync(), null, 2))
}

run("tables", "CALL SHOW_TABLES() RETURN name as name")
run("indexes", "CALL SHOW_INDEXES() RETURN *")
run(
  "ProcessedSession",
  "MATCH (p:ProcessedSession) RETURN p.id, p.fact_count, p.error",
)
run("entity count", "MATCH (e:Entity) RETURN count(e) AS n")
run("fact count", "MATCH (f:Fact) RETURN count(f) AS n")
run("relationship count", "MATCH ()-[r:RELATES]->() RETURN count(r) AS n")
run(
  "entities (sample)",
  "MATCH (e:Entity) RETURN e.id, e.name, e.type LIMIT 10",
)
run(
  "facts (sample)",
  "MATCH (f:Fact) RETURN f.id, f.text, f.session_id LIMIT 5",
)
run(
  "relationships (sample)",
  "MATCH (a:Entity)-[r:RELATES]->(b:Entity) RETURN a.name AS from, b.name AS to, r.kind, r.weight LIMIT 10",
)
run(
  "mentions (sample)",
  "MATCH (f:Fact)-[m:MENTIONS]->(e:Entity) RETURN f.text AS fact, e.name AS entity LIMIT 10",
)

conn.closeSync()
db.closeSync()
