import { randomUUID } from "node:crypto"
import { entityId } from "./ontology.ts"
import type {
  ExtractedEntity,
  ExtractedFact,
  ExtractedRelationship,
  Extraction,
} from "./extract.ts"
import type { Graph } from "./graph.ts"
import type { Embedder } from "./embed.ts"

export type IngestResult = {
  sessionId: string
  entityCount: number
  factCount: number
  relationshipCount: number
  elapsedMs: number
}

type EntityRow = {
  id: string
  name: string
  type: string
  repo: string | null
  metadata: string | null
}

type FactRow = {
  id: string
  text: string
  embedding: number[]
  session_id: string
  source_msg: string | null
  created_at: number
}

type MentionRow = { fact_id: string; entity_id: string }
type RelatesRow = {
  from_id: string
  to_id: string
  kind: string
  weight: number
}

function nowMicros(): number {
  return Date.now() * 1000
}

function firstResult(
  r: ReturnType<Graph["conn"]["querySync"]>,
): import("@ladybugdb/core").QueryResult {
  if (Array.isArray(r)) return r[0] as import("@ladybugdb/core").QueryResult
  return r
}

type LbugParam = string | number | bigint | boolean | Date | null | object
function exec(
  conn: Graph["conn"],
  stmt: string,
  params: Record<string, LbugParam> = {},
): void {
  if (Object.keys(params).length === 0) {
    firstResult(conn.querySync(stmt))
    return
  }
  const ps = conn.prepareSync(stmt)
  conn.executeSync(ps, params as unknown as Record<string, never>)
}

export async function writeExtraction(
  graph: Graph,
  embedder: Embedder,
  sessionId: string,
  extraction: Extraction,
): Promise<IngestResult> {
  const start = Date.now()
  const ts = nowMicros()

  const seen = new Map<string, EntityRow>()
  function addEntity(type: string, name: string, repo: string | null, metadata: Record<string, unknown> | null): Promise<string> {
    const norm = `${type}|${name.trim()}|${(repo ?? "").toLowerCase()}`
    if (seen.has(norm)) return Promise.resolve(seen.get(norm)!.id)
    return entityId(type as ExtractedEntity["type"], name, repo).then((id) => {
      seen.set(norm, {
        id,
        name,
        type,
        repo,
        metadata: metadata ? JSON.stringify(metadata) : null,
      })
      return id
    })
  }

  for (const e of extraction.entities) {
    await addEntity(e.type, e.name, e.repo, e.metadata)
  }
  for (const f of extraction.facts) {
    for (const ref of f.entity_refs) {
      await addEntity(ref.type, ref.name, ref.repo, null)
    }
  }
  for (const r of extraction.relationships) {
    await addEntity(r.from.type, r.from.name, r.from.repo, null)
    await addEntity(r.to.type, r.to.name, r.to.repo, null)
  }

  const entityRows = [...seen.values()]

  const factRows: FactRow[] = []
  if (extraction.facts.length > 0) {
    const texts = extraction.facts.map((f) => f.text)
    const embs = await embedder.encode(texts)
    extraction.facts.forEach((f, i) => {
      const factId = randomUUID()
      factRows.push({
        id: factId,
        text: f.text,
        embedding: embs[i]!,
        session_id: sessionId,
        source_msg: f.source_msg ?? null,
        created_at: ts,
      })
    })
  }

  const mentionRows: MentionRow[] = []
  for (let i = 0; i < extraction.facts.length; i++) {
    const fid = factRows[i]?.id
    if (!fid) continue
    for (const ref of extraction.facts[i]!.entity_refs) {
      const eid = await entityId(ref.type, ref.name, ref.repo)
      mentionRows.push({ fact_id: fid, entity_id: eid })
    }
  }

  const relatesRows: RelatesRow[] = []
  for (const r of extraction.relationships) {
    const a = await entityId(r.from.type, r.from.name, r.from.repo)
    const b = await entityId(r.to.type, r.to.name, r.to.repo)
    relatesRows.push({ from_id: a, to_id: b, kind: r.kind, weight: r.weight })
  }

  const conn = graph.conn
  exec(conn, "BEGIN")
  try {
    for (const e of entityRows) {
      exec(
        conn,
        `MERGE (n:Entity {id: $id})
         ON CREATE SET n.name = $name, n.type = $type, n.repo = $repo,
                       n.metadata = $metadata, n.created_at = $ts
         ON MATCH  SET n.metadata = coalesce(n.metadata, $metadata)`,
        {
          id: e.id,
          name: e.name,
          type: e.type,
          repo: e.repo,
          metadata: e.metadata,
          ts,
        },
      )
    }
    for (const f of factRows) {
      exec(
        conn,
        `CREATE (n:Fact {
          id: $id, text: $text, embedding: $embedding,
          session_id: $session_id, source_msg: $source_msg,
          created_at: $created_at
        })`,
        {
          id: f.id,
          text: f.text,
          embedding: f.embedding,
          session_id: f.session_id,
          source_msg: f.source_msg,
          created_at: f.created_at,
        },
      )
    }
    for (const m of mentionRows) {
      exec(
        conn,
        `MATCH (f:Fact {id: $fact_id}), (e:Entity {id: $entity_id})
         MERGE (f)-[:MENTIONS]->(e)`,
        m,
      )
    }
    for (const r of relatesRows) {
      exec(
        conn,
        `MATCH (a:Entity {id: $from_id}), (b:Entity {id: $to_id})
         MERGE (a)-[rel:RELATES {kind: $kind}]->(b)
         ON CREATE SET rel.weight = $weight
         ON MATCH  SET rel.weight = (rel.weight + $weight) / 2.0`,
        r,
      )
    }
    if (factRows.length > 1) {
      const ids = factRows.map((f) => f.id)
      exec(
        conn,
        `MATCH (a:Fact {session_id: $sid}), (b:Fact {session_id: $sid})
         WHERE a.id < b.id AND a.id IN $ids AND b.id IN $ids
         MERGE (a)-[:CO_OCCURS]->(b)`,
        { sid: sessionId, ids },
      )
    }
    exec(
      conn,
      `MERGE (p:ProcessedSession {id: $id})
       ON CREATE SET p.processed_at = $ts, p.fact_count = $n, p.error = NULL
       ON MATCH  SET p.processed_at = $ts, p.fact_count = $n, p.error = NULL`,
      { id: sessionId, ts, n: factRows.length },
    )
    exec(conn, "COMMIT")
  } catch (err) {
    try {
      exec(conn, "ROLLBACK")
    } catch {
      // ignore
    }
    throw err
  }

  return {
    sessionId,
    entityCount: entityRows.length,
    factCount: factRows.length,
    relationshipCount: relatesRows.length,
    elapsedMs: Date.now() - start,
  }
}

export function markSessionError(
  graph: Graph,
  sessionId: string,
  error: string,
): void {
  const ts = nowMicros()
  exec(
    graph.conn,
    `MERGE (p:ProcessedSession {id: $id})
     ON CREATE SET p.processed_at = $ts, p.fact_count = 0, p.error = $error
     ON MATCH  SET p.processed_at = $ts, p.fact_count = 0, p.error = $error`,
    { id: sessionId, ts, error },
  )
}

export type { Extraction, ExtractedEntity, ExtractedFact, ExtractedRelationship }
