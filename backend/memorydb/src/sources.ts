import { Database } from "bun:sqlite"

export type SessionRow = {
  id: string
  directory: string | null
  title: string | null
  time_created: number
  time_updated: number
}

export type PartRow = {
  id: string
  type: string
  text: string | null
}

export type MessageRow = {
  id: string
  role: string
  time_created: number
  parts: PartRow[]
}

export type TaggedSession = {
  session: SessionRow
  text: string
  messageCount: number
  textPartCount: number
}

const SESSION_FIELDS = `id, directory, title, time_created, time_updated`

const MESSAGE_AND_PARTS_SQL = `
  SELECT
    m.id          AS m_id,
    m.time_created AS m_time,
    json_extract(m.data, '$.role') AS m_role,
    p.id          AS p_id,
    json_extract(p.data, '$.type') AS p_type,
    json_extract(p.data, '$.text') AS p_text
  FROM message m
  LEFT JOIN part p ON p.message_id = m.id
  WHERE m.session_id = ?
  ORDER BY m.time_created ASC, p.time_created ASC
`

const PROCESSED_QUERY = `SELECT id FROM ProcessedSession`

export type OpenSource = {
  listPendingSessions(limit: number): SessionRow[]
  listRecentSessions(limit: number): SessionRow[]
  getSession(id: string): SessionRow | null
  loadSessionMessages(sessionId: string): MessageRow[]
  listProcessedIds(): Set<string>
  close(): void
}

type JoinedRow = {
  m_id: string
  m_time: number
  m_role: string
  p_id: string | null
  p_type: string | null
  p_text: string | null
}

export function openOpenCode(dbPath: string): OpenSource {
  const db = new Database(dbPath, { readonly: true })

  const pendingStmt = db.query<SessionRow, [number]>(
    `SELECT ${SESSION_FIELDS} FROM session
     WHERE id NOT IN (${PROCESSED_QUERY})
     ORDER BY time_created DESC
     LIMIT ?`,
  )
  const recentStmt = db.query<SessionRow, [number]>(
    `SELECT ${SESSION_FIELDS} FROM session
     ORDER BY time_created DESC
     LIMIT ?`,
  )
  const oneStmt = db.query<SessionRow, [string]>(
    `SELECT ${SESSION_FIELDS} FROM session WHERE id = ?`,
  )
  const msgStmt = db.query<JoinedRow, [string]>(MESSAGE_AND_PARTS_SQL)
  const processedStmt = db.query<{ id: string }, []>(PROCESSED_QUERY)

  return {
    listPendingSessions(limit) {
      return pendingStmt.all(limit)
    },
    listRecentSessions(limit) {
      return recentStmt.all(limit)
    },
    getSession(id) {
      return oneStmt.get(id) ?? null
    },
    loadSessionMessages(sessionId) {
      const rows = msgStmt.all(sessionId)
      const byMsg = new Map<string, MessageRow>()
      for (const r of rows) {
        let msg = byMsg.get(r.m_id)
        if (!msg) {
          msg = {
            id: r.m_id,
            role: r.m_role ?? "user",
            time_created: r.m_time,
            parts: [],
          }
          byMsg.set(r.m_id, msg)
        }
        if (r.p_id) {
          msg.parts.push({
            id: r.p_id,
            type: r.p_type ?? "unknown",
            text: r.p_text,
          })
        }
      }
      return [...byMsg.values()].sort(
        (a, b) => a.time_created - b.time_created,
      )
    },
    listProcessedIds() {
      return new Set(processedStmt.all().map((r) => r.id))
    },
    close() {
      db.close()
    },
  }
}

type PartFilter = {
  includeReasoning: boolean
}

function isTextPart(p: PartRow, opts: PartFilter): boolean {
  if (p.type === "text") {
    return typeof p.text === "string" && p.text.trim().length > 0
  }
  if (opts.includeReasoning && p.type === "reasoning") {
    return typeof p.text === "string" && p.text.trim().length > 0
  }
  return false
}

function tagForRole(role: string): string {
  if (role === "assistant" || role === "agent") return "AGENT"
  return "USER"
}

export function tagSession(
  messages: MessageRow[],
  opts: PartFilter,
): { text: string; textPartCount: number } {
  const out: string[] = []
  let count = 0
  for (const m of messages) {
    const roleTag = tagForRole(m.role)
    for (const p of m.parts) {
      if (!isTextPart(p, opts)) continue
      const trimmed = p.text!.trim()
      out.push(`[${roleTag}] ${trimmed}`)
      count++
    }
  }
  return { text: out.join("\n\n"), textPartCount: count }
}

export function buildTaggedSession(
  source: OpenSource,
  session: SessionRow,
  opts: PartFilter,
): TaggedSession {
  const messages = source.loadSessionMessages(session.id)
  const { text, textPartCount } = tagSession(messages, opts)
  return {
    session,
    text,
    messageCount: messages.length,
    textPartCount,
  }
}
