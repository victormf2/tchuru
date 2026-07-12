import { createOpencode } from "@opencode-ai/sdk/v2"
import type { OpencodeClient } from "@opencode-ai/sdk/v2/client"
import {
  ExtractionInputSchema,
  startExtractionMcpServer,
  type ExtractionInput,
  type ExtractionMcpServer,
} from "./extraction-mcp.js"
import {
  isEntityType,
  isRelationshipKind,
  type EntityRef,
  type EntityType,
  type RelationshipKind,
} from "./ontology.js"

export type ExtractedEntity = {
  type: EntityType
  name: string
  repo: string | null
  metadata: Record<string, unknown> | null
}

export type ExtractedFact = {
  text: string
  entity_refs: EntityRef[]
  source_msg: string | null
}

export type ExtractedRelationship = {
  from: EntityRef
  to: EntityRef
  kind: RelationshipKind
  weight: number
}

export type Extraction = {
  entities: ExtractedEntity[]
  facts: ExtractedFact[]
  relationships: ExtractedRelationship[]
}

export type ExtractionMode = "mcp" | "json"

export type Extractor = {
  extract(taggedText: string, signal: AbortSignal): Promise<Extraction>
  close(): Promise<void>
}

const SYSTEM_PROMPT_MCP = `You are a knowledge-extraction engine. Given a transcript of a coding session, call the \`extraction_result\` MCP tool exactly once with the structured result.

The tool's inputSchema defines the exact shape. Three keys:
- entities:        array of {type, name, repo?, metadata?}
- facts:           array of {text, entity_refs:[...], source_msg?}
- relationships:   array of {from, to, kind, weight}

Hard rules:
- One atomic claim per fact. <= ~25 words. Each fact must reference at least one entity.
- Prefer the FINAL state of any file/function/type mentioned (the transcript may contain earlier wrong versions or mid-session corrections).
- Skip pleasantries, half-finished thoughts, and explicitly-reverted changes.
- Do not invent. If you can't ground a claim in the transcript, omit it.
- Entity names must match exactly what was discussed (case-sensitive). Files use the path as written. Functions/types use the bare identifier.
- 'repo' for FILE/TYPE/FUNCTION/MODULE should be the github-style "owner/repo" string if inferable from context, otherwise null.
- 'kind' for relationships must be one of: CONTAINS, DEFINES, IMPORTS, CALLS, EXTENDS, IMPLEMENTS, MEMBER_OF, USES_TYPE, REFERENCED_IN, DOCUMENTED_AT.
- 'weight' is your confidence in [0.0, 1.0].
- After calling the tool, do NOT output any text. The tool call is your entire response.
- If the transcript is empty, contains only pleasantries, or is unextractable, call the tool with: {"entities":[], "facts":[], "relationships":[]}.`

const EXTRACTION_SYSTEM_PROMPT_JSON = `You are a knowledge-extraction engine. Given a transcript of a coding session, you produce a structured summary.

Output a single JSON object with this exact shape (no extra keys, no comments, no markdown fences):

{
  "entities": [
    {
      "type": "REPO | FILE | URL | TYPE | FUNCTION | MODULE",
      "name": "<string>",
      "repo": "<owner/repo string, or null for URL>",
      "metadata": { /* optional, free-form object */ }
    }
  ],
  "facts": [
    {
      "text": "<one short factual sentence, max ~25 words>",
      "entity_refs": [
        { "type": "<entity type>", "name": "<name>", "repo": "<owner/repo or null>" }
      ],
      "source_msg": "<message id from the transcript, or null>"
    }
  ],
  "relationships": [
    {
      "from":     { "type": "<entity type>", "name": "<name>", "repo": "<owner/repo or null>" },
      "to":       { "type": "<entity type>", "name": "<name>", "repo": "<owner/repo or null>" },
      "kind":     "<one of CONTAINS, DEFINES, IMPORTS, CALLS, EXTENDS, IMPLEMENTS, MEMBER_OF, USES_TYPE, REFERENCED_IN, DOCUMENTED_AT>",
      "weight":   <number 0.0..1.0>
    }
  ]
}

Hard rules:
- Each fact is ONE atomic claim. Do not bundle two claims into one fact.
- Prefer the FINAL state of any file/function/type mentioned (the session may have included earlier wrong versions or mid-session corrections).
- Skip pleasantries, half-finished thoughts, and explicitly-reverted changes.
- Do not invent. If you can't ground a claim in the transcript, omit it.
- Every fact must reference at least one entity. Standalone facts with no entity are noise.
- Entity names must match exactly what was discussed (case-sensitive). For files, use the path as written (e.g. "src/auth.py" or "backend/poc_v4/src/agent.ts"). For functions/types, use the bare identifier.
- 'repo' for FILE/TYPE/FUNCTION/MODULE should be the github-style "owner/repo" string if you can infer it from context (e.g. the working directory mentioned); otherwise null.
- 'metadata' is optional. Use it for things like line ranges, signatures, or short descriptions that don't fit elsewhere.
- If the transcript is empty, contains only pleasantries, or is otherwise unextractable, return: {"entities": [], "facts": [], "relationships": []}
- Do not include any text before or after the JSON. The response must be parseable JSON and nothing else.`

type AnyObj = Record<string, unknown>

function isObj(v: unknown): v is AnyObj {
  return typeof v === "object" && v !== null && !Array.isArray(v)
}

function str(v: unknown): string {
  return typeof v === "string" ? v : ""
}

function num(v: unknown, fallback: number): number {
  if (typeof v === "number" && Number.isFinite(v)) return v
  if (typeof v === "string") {
    const n = Number.parseFloat(v)
    if (Number.isFinite(n)) return n
  }
  return fallback
}

function parseEntityRef(v: unknown): EntityRef | null {
  if (!isObj(v)) return null
  const t = str(v["type"])
  const n = str(v["name"]).trim()
  if (!isEntityType(t) || !n) return null
  const r = v["repo"]
  return {
    type: t,
    name: n,
    repo: typeof r === "string" && r.length > 0 ? r : null,
  }
}

function parseEntity(v: unknown): ExtractedEntity | null {
  if (!isObj(v)) return null
  const t = str(v["type"])
  const n = str(v["name"]).trim()
  if (!isEntityType(t) || !n) return null
  const r = v["repo"]
  const metaRaw = v["metadata"]
  const meta: Record<string, unknown> | null = isObj(metaRaw) ? metaRaw : null
  return {
    type: t,
    name: n,
    repo: typeof r === "string" && r.length > 0 ? r : null,
    metadata: meta,
  }
}

function clampWeight(n: number): number {
  if (!Number.isFinite(n)) return 0.5
  if (n < 0) return 0
  if (n > 1) return 1
  return n
}

function parseFact(v: unknown): ExtractedFact | null {
  if (!isObj(v)) return null
  const text = str(v["text"]).trim()
  if (!text) return null
  const refsRaw = v["entity_refs"]
  const refs = Array.isArray(refsRaw)
    ? refsRaw.map(parseEntityRef).filter((r): r is EntityRef => r !== null)
    : []
  const sm = v["source_msg"]
  return {
    text,
    entity_refs: refs,
    source_msg: typeof sm === "string" && sm.length > 0 ? sm : null,
  }
}

function parseRelationship(v: unknown): ExtractedRelationship | null {
  if (!isObj(v)) return null
  const from = parseEntityRef(v["from"])
  const to = parseEntityRef(v["to"])
  const k = str(v["kind"])
  if (!from || !to || !isRelationshipKind(k)) return null
  return {
    from,
    to,
    kind: k,
    weight: clampWeight(num(v["weight"], 0.5)),
  }
}

function parseExtractionJson(raw: string): Extraction {
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim()
  let parsed: unknown
  try {
    parsed = JSON.parse(cleaned)
  } catch (e) {
    throw new Error(
      `extraction JSON parse failed: ${(e as Error).message}; first 200 chars: ${cleaned.slice(0, 200)}`,
    )
  }
  if (!isObj(parsed)) {
    throw new Error("extraction result is not a JSON object")
  }
  const entities = Array.isArray(parsed["entities"])
    ? (parsed["entities"] as unknown[])
        .map(parseEntity)
        .filter((e): e is ExtractedEntity => e !== null)
    : []
  const facts = Array.isArray(parsed["facts"])
    ? (parsed["facts"] as unknown[])
        .map(parseFact)
        .filter((f): f is ExtractedFact => f !== null)
    : []
  const relationships = Array.isArray(parsed["relationships"])
    ? (parsed["relationships"] as unknown[])
        .map(parseRelationship)
        .filter((r): r is ExtractedRelationship => r !== null)
    : []
  return { entities, facts, relationships }
}

function extractionFromMcpInput(input: ExtractionInput): Extraction {
  return {
    entities: input.entities.map((e) => ({
      type: e.type,
      name: e.name,
      repo: e.repo,
      metadata: e.metadata,
    })),
    facts: input.facts.map((f) => ({
      text: f.text,
      entity_refs: f.entity_refs,
      source_msg: f.source_msg,
    })),
    relationships: input.relationships.map((r) => ({
      from: r.from,
      to: r.to,
      kind: r.kind,
      weight: r.weight,
    })),
  }
}

type SessionEvent = {
  type: string
  properties?: { sessionID?: string; error?: unknown }
}

type PartLike = { type: string; text?: unknown }
type MessageLike = {
  info: { role: string }
  parts: PartLike[]
}

async function lastAssistantText(
  client: OpencodeClient,
  sessionID: string,
): Promise<string> {
  const res = await client.session.messages({ sessionID })
  if (res.error || !res.data) return ""
  const data = res.data as unknown as MessageLike[]
  for (let i = data.length - 1; i >= 0; i--) {
    const m = data[i]
    if (!m) continue
    if (m.info.role !== "assistant") continue
    const text = m.parts
      .filter((p) => p.type === "text" && typeof p.text === "string")
      .map((p) => p.text as string)
      .join("")
    if (text) return text
  }
  return ""
}

async function watchSessionEvents(
  client: OpencodeClient,
  sessionID: string,
  signal: AbortSignal,
): Promise<never> {
  const eventStream = await client.event.subscribe()
  return new Promise<never>((_resolve, reject) => {
    const cleanup = (): void => {
      signal.removeEventListener("abort", onAbort)
    }
    const onAbort = (): void => {
      cleanup()
      reject(new Error("extraction aborted"))
    }
    if (signal.aborted) {
      onAbort()
      return
    }
    signal.addEventListener("abort", onAbort, { once: true })
    ;(async () => {
      try {
        for await (const evt of eventStream.stream) {
          const e = evt as SessionEvent
          if (e.type === "session.error") {
            cleanup()
            reject(new Error(`session.error: ${JSON.stringify(e.properties)}`))
            return
          }
          if (
            e.type === "session.idle" &&
            e.properties?.sessionID === sessionID
          ) {
            cleanup()
            reject(
              new Error("model ended without calling extraction_result tool"),
            )
            return
          }
        }
      } catch (err) {
        cleanup()
        reject(err as Error)
      }
    })()
  })
}

export type ExtractorOptions = {
  port: number
  timeoutMs: number
  mode: ExtractionMode
  agent?: string
  directory?: string
}

export async function createExtractor(
  opts: ExtractorOptions,
): Promise<Extractor> {
  const { client, server } = await createOpencode({
    hostname: "127.0.0.1",
    port: opts.port,
  })

  let mcpServer: ExtractionMcpServer | null = null
  if (opts.mode === "mcp") {
    mcpServer = await startExtractionMcpServer()
    const addRes = await client.mcp.add({
      name: "memorydb",
      config: { type: "remote", url: mcpServer.url, enabled: true },
    })
    if (addRes.error) {
      await mcpServer.close()
      server.close()
      throw new Error(
        `failed to register MCP server: ${JSON.stringify(addRes.error)}`,
      )
    }
  }

  async function extractMcp(
    taggedText: string,
    signal: AbortSignal,
  ): Promise<Extraction> {
    if (!mcpServer) throw new Error("MCP server not started")
    const session = await client.session.create({
      agent: opts.agent ?? "build",
      directory: opts.directory,
    })
    if (session.error || !session.data) {
      throw new Error(
        `createSession: ${session.error ? JSON.stringify(session.error) : "no data"}`,
      )
    }
    const sessionID = (session.data as { id: string }).id

    const userText = `${SYSTEM_PROMPT_MCP}\n\nTranscript:\n\n${taggedText}`

    try {
      const sendRes = await client.session.promptAsync({
        sessionID,
        parts: [{ type: "text", text: userText }],
      })
      if (sendRes.error) {
        throw new Error(`promptAsync: ${JSON.stringify(sendRes.error)}`)
      }

      const input = await Promise.race([
        mcpServer.waitForInput(opts.timeoutMs),
        watchSessionEvents(client, sessionID, signal),
      ])

      const parsed = ExtractionInputSchema.safeParse(input)
      if (!parsed.success) {
        throw new Error(
          `extraction tool input invalid: ${parsed.error.message}`,
        )
      }
      return extractionFromMcpInput(parsed.data)
    } finally {
      try {
        await client.session.delete({ sessionID })
      } catch {
        // best effort
      }
    }
  }

  async function extractJson(
    taggedText: string,
    signal: AbortSignal,
  ): Promise<Extraction> {
    const session = await client.session.create({
      agent: opts.agent ?? "build",
      directory: opts.directory,
    })
    if (session.error || !session.data) {
      throw new Error(
        `createSession: ${session.error ? JSON.stringify(session.error) : "no data"}`,
      )
    }
    const sessionID = (session.data as { id: string }).id

    const idle = new Promise<void>((resolve, reject) => {
      const onAbort = (): void => {
        reject(new Error("extraction aborted"))
      }
      if (signal.aborted) {
        onAbort()
        return
      }
      signal.addEventListener("abort", onAbort, { once: true })
      ;(async () => {
        try {
          const eventStream = await client.event.subscribe()
          for await (const evt of eventStream.stream) {
            const e = evt as SessionEvent
            if (e.type === "session.error") {
              signal.removeEventListener("abort", onAbort)
              reject(
                new Error(`session.error: ${JSON.stringify(e.properties)}`),
              )
              return
            }
            if (
              e.type === "session.idle" &&
              e.properties?.sessionID === sessionID
            ) {
              signal.removeEventListener("abort", onAbort)
              resolve()
              return
            }
          }
        } catch (err) {
          signal.removeEventListener("abort", onAbort)
          reject(err as Error)
        }
      })()
    })

    const timer = new Promise<never>((_, reject) => {
      setTimeout(
        () => reject(new Error(`extraction timeout ${opts.timeoutMs}ms`)),
        opts.timeoutMs,
      ).unref()
    })

    const userText = `${EXTRACTION_SYSTEM_PROMPT_JSON}\n\nTranscript:\n\n${taggedText}`

    try {
      const sendRes = await client.session.promptAsync({
        sessionID,
        parts: [{ type: "text", text: userText }],
      })
      if (sendRes.error) {
        throw new Error(`promptAsync: ${JSON.stringify(sendRes.error)}`)
      }
      await Promise.race([idle, timer])
      const text = await lastAssistantText(client, sessionID)
      if (!text) {
        throw new Error("assistant produced no text")
      }
      return parseExtractionJson(text)
    } finally {
      try {
        await client.session.delete({ sessionID })
      } catch {
        // best effort
      }
    }
  }

  return {
    extract: opts.mode === "mcp" ? extractMcp : extractJson,
    async close() {
      if (mcpServer) {
        try {
          await client.mcp.disconnect({ name: "memorydb" })
        } catch {
          // ignore
        }
        try {
          await mcpServer.close()
        } catch {
          // ignore
        }
      }
      server.close()
    },
  }
}
