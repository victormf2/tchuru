import { mkdirSync, rmSync } from "node:fs"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { loadConfig, type Config } from "./config.js"
import { loadEmbedder, type Embedder } from "./embed.js"
import { createExtractor, type Extractor } from "./extract.js"
import { bootstrapGraph, openGraph, type Graph } from "./graph.js"
import {
  markSessionError,
  writeExtraction,
  type IngestResult,
} from "./ingest.js"
import {
  buildTaggedSession,
  openOpenCode,
  type OpenSource,
  type SessionRow,
  type TaggedSession,
} from "./sources.js"

export type RunSummary = {
  totalSeen: number
  processed: IngestResult[]
  skipped: { sessionId: string; reason: string }[]
  errors: { sessionId: string; message: string }[]
  totalElapsedMs: number
}

type TaggedInput = {
  session: SessionRow
  tagged: TaggedSession
}

function selectSessions(
  source: OpenSource,
  processedIds: Set<string>,
  config: Config,
): SessionRow[] {
  if (config.session) {
    const s = source.getSession(config.session)
    if (!s) {
      throw new Error(`session not found: ${config.session}`)
    }
    return [s]
  }
  return source.listPendingSessions(
    processedIds,
    config.memoryDir,
    config.limit,
  )
}

function loadProcessedIds(graph: Graph): Set<string> {
  const raw = graph.conn.querySync(
    "MATCH (p:ProcessedSession) RETURN p.id AS id",
  )
  const r = Array.isArray(raw) ? raw[0]! : raw
  const out = new Set<string>()
  for (const row of r.getAllSync()) {
    if (typeof row["id"] === "string") {
      out.add(row["id"])
    }
  }
  return out
}

function buildTagged(
  source: OpenSource,
  sessions: SessionRow[],
  config: Config,
): TaggedInput[] {
  const out: TaggedInput[] = []
  for (const s of sessions) {
    const tagged = buildTaggedSession(source, s, {
      includeReasoning: config.includeReasoning,
    })
    if (tagged.text.length === 0) {
      continue
    }
    if (tagged.text.length > config.maxCharsPerSession) {
      continue
    }
    out.push({ session: s, tagged })
  }
  return out
}

export type RunDeps = {
  graph: Graph
  source: OpenSource
  embedder: Embedder
  extractor: Extractor
  config: Config
}

export async function runOnce(deps: RunDeps): Promise<RunSummary> {
  const { graph, source, embedder, extractor, config } = deps
  const processedIds = config.session
    ? new Set<string>()
    : loadProcessedIds(graph)
  const sessions = selectSessions(source, processedIds, config)
  const taggedInputs = buildTagged(source, sessions, config)
  const processed: IngestResult[] = []
  const skipped: RunSummary["skipped"] = []
  const errors: RunSummary["errors"] = []
  const start = Date.now()

  for (const { session, tagged } of taggedInputs) {
    if (config.dryRun) {
      process.stdout.write(
        `[dry-run] ${session.id} — ${tagged.textPartCount} text parts, ${tagged.text.length} chars\n`,
      )
      continue
    }
    const ctrl = new AbortController()
    try {
      const extraction = await extractor.extract(tagged.text, ctrl.signal)
      const result = await writeExtraction(
        graph,
        embedder,
        session.id,
        extraction,
      )
      processed.push(result)
      process.stdout.write(
        `[ingest] ${session.id} — ${result.factCount} facts, ${result.entityCount} entities, ${result.relationshipCount} rels — ${result.elapsedMs}ms\n`,
      )
    } catch (e) {
      const msg = (e as Error).message ?? String(e)
      ctrl.abort()
      try {
        markSessionError(graph, session.id, msg.slice(0, 500))
      } catch {
        // best effort
      }
      errors.push({ sessionId: session.id, message: msg })
      process.stderr.write(`[error] ${session.id}: ${msg}\n`)
    }
  }

  for (const s of sessions) {
    if (taggedInputs.find((t) => t.session.id === s.id)) continue
    skipped.push({ sessionId: s.id, reason: "empty or too long" })
  }

  return {
    totalSeen: sessions.length,
    processed,
    skipped,
    errors,
    totalElapsedMs: Date.now() - start,
  }
}

export async function main(
  argv: string[] = process.argv.slice(2),
): Promise<number> {
  const config = loadConfig(argv)
  mkdirSync(dirname(config.ladybugDb), { recursive: true })

  if (config.teardownLadybug) {
    for (const suffix of ["", ".wal"]) {
      try {
        rmSync(config.ladybugDb + suffix, { force: true })
      } catch {
        // ignore
      }
    }
    process.stderr.write(`[memorydb] tore down ${config.ladybugDb}\n`)
  }

  process.stderr.write(
    `[memorydb] opencode_db=${config.opencodeDb}\n[memorydb] db=${config.ladybugDb}\n[memorydb] model_dir=${config.modelDir}\n[memorydb] memory_dir=${config.memoryDir}\n`,
  )

  const graph = openGraph(config.ladybugDb)
  bootstrapGraph(graph)
  const source = openOpenCode(config.opencodeDb)
  const embedder = await loadEmbedder(config.modelDir)
  const extractor = await createExtractor({
    port: config.opencodePort,
    timeoutMs: config.extractionTimeoutMs,
    mode: config.extractionMode,
    directory: config.memoryDir,
  })

  try {
    const summary = await runOnce({
      graph,
      source,
      embedder,
      extractor,
      config,
    })
    process.stdout.write(
      `\n[memorydb] done — seen=${summary.totalSeen} processed=${summary.processed.length} skipped=${summary.skipped.length} errors=${summary.errors.length} elapsed=${summary.totalElapsedMs}ms\n`,
    )
    return summary.errors.length === 0 ? 0 : 1
  } finally {
    try {
      source.close()
    } catch {
      // ignore
    }
    try {
      embedder.dispose()
    } catch {
      // ignore
    }
    try {
      await extractor.close()
    } catch {
      // ignore
    }
    try {
      graph.close()
    } catch {
      // ignore
    }
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().then(
    (code) => {
      process.exit(code)
    },
    (err) => {
      process.stderr.write(`[fatal] ${(err as Error).stack ?? String(err)}\n`)
      process.exit(2)
    },
  )
}
