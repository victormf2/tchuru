import {
  createOpencode,
  type Event,
  type EventPermissionAsked,
  type EventQuestionAsked,
  type FilePartInput,
  type OpencodeClient,
  type Session,
  type TextPartInput,
} from "@opencode-ai/sdk/v2"

export type OpencodeHandle = {
  client: OpencodeClient
  server: { url: string; close: () => void }
}

export async function startOpencode(opts?: {
  hostname?: string
  port?: number
}): Promise<OpencodeHandle> {
  const { client, server } = await createOpencode({
    hostname: opts?.hostname ?? "127.0.0.1",
    port: opts?.port ?? 9876,
  })
  return { client, server }
}

export async function createSession(
  client: OpencodeClient,
  opts?: { agent?: string; directory?: string },
): Promise<Session> {
  const res = await client.session.create({
    agent: opts?.agent ?? "build",
    directory: opts?.directory,
  })
  if (res.error) {
    throw new Error(`createSession: ${JSON.stringify(res.error)}`)
  }
  return res.data
}

export type PromptPart = TextPartInput | FilePartInput

export async function sendPrompt(
  client: OpencodeClient,
  sessionID: string,
  parts: PromptPart[],
): Promise<void> {
  const textParts = parts.filter((p) => {
    return p.type === "text"
  }) as TextPartInput[]
  const fileParts = parts.filter((p) => {
    return p.type === "file"
  }) as FilePartInput[]
  console.error(`[oc] -> session=${sessionID} prompt parts (${parts.length}):`)
  for (const t of textParts) {
    const oneLine = t.text.replace(/\n/g, " ")
    console.error(`  [text] "${preview(oneLine, 200)}"`)
  }
  for (const f of fileParts) {
    console.error(
      `  [file] name=${f.filename ?? "?"}  uri=${f.url}  mime=${f.mime}`,
    )
  }
  const res = await client.session.promptAsync({
    sessionID,
    parts,
  })
  if (res.error) {
    throw new Error(`sendPrompt: ${JSON.stringify(res.error)}`)
  }
  console.error(`[oc] <- session=${sessionID} prompt accepted (204)`)
}

export type AgentTurn = {
  finalText: string
  events: Event[]
  lastAssistantInfo: unknown
}

export type TurnHandlers = {
  onPermissionAsked?: (req: {
    requestID: string
    permission: string
    patterns: string[]
  }) => Promise<"once" | "always" | "reject">
  onQuestionAsked?: (req: {
    requestID: string
    questions: Array<{
      question: string
      header: string
      options: Array<{ label: string; description: string }>
      multiple?: boolean
    }>
  }) => Promise<string[][]>
}

const defaultHandlers: TurnHandlers = {
  onPermissionAsked: async () => {
    return "once"
  },
  onQuestionAsked: async (req) => {
    return req.questions.map((q) => {
      return [q.options[0]?.label ?? ""]
    })
  },
}

export async function runTurn(
  client: OpencodeClient,
  sessionID: string,
  parts: PromptPart[],
  handlers: TurnHandlers = defaultHandlers,
  onEvent?: (evt: Event) => void,
): Promise<AgentTurn> {
  const collected: Event[] = []
  const eventsRes = await client.event.subscribe()
  const consumer = (async () => {
    try {
      for await (const event of eventsRes.stream) {
        const isForTarget = eventBelongsToSession(event, sessionID)
        switch (event.type) {
          case "permission.asked":
          case "question.asked":
            await handleAutoReply(client, event, handlers)
            break
        }
        logEvent(event, isForTarget)
        if (isForTarget) {
          collected.push(event)
          onEvent?.(event)
        }
        const isTargetIdle =
          event.type === "session.idle" && isForTarget
        if (isTargetIdle) {
          break
        }
      }
    } catch {
      // stream ended
    }
  })()

  await sendPrompt(client, sessionID, parts)
  await consumer

  console.error(
    `[oc] <- session=${sessionID} idle (events: ${collected.length})`,
  )

  const { finalText, lastAssistantInfo } = await fetchLastAssistantMessage(
    client,
    sessionID,
  )

  return { finalText, events: collected, lastAssistantInfo }
}

async function handleAutoReply(
  client: OpencodeClient,
  event: Event,
  handlers: TurnHandlers,
): Promise<void> {
  if (event.type === "permission.asked") {
    await handlePermission(client, event, handlers)
    return
  }
  if (event.type === "question.asked") {
    await handleQuestion(client, event, handlers)
    return
  }
}

async function handlePermission(
  client: OpencodeClient,
  event: EventPermissionAsked,
  handlers: TurnHandlers,
): Promise<void> {
  const reqID = event.properties.id
  const reply = await handlers.onPermissionAsked?.({
    requestID: reqID,
    permission: event.properties.permission,
    patterns: event.properties.patterns,
  })
  const safeReply = reply ?? "once"
  const sid = event.properties.sessionID
  const tag = sid === "" ? "" : ` (subagent=${sid.slice(0, 12)}…)`
  console.error(
    `[oc] auto-reply permission id=${reqID} tool=${event.properties.permission} -> ${safeReply}${tag}`,
  )
  const res = await client.permission.reply({
    requestID: reqID,
    reply: safeReply,
  })
  if (res.error) {
    console.error(`[oc] permission.reply error: ${JSON.stringify(res.error)}`)
  }
}

async function handleQuestion(
  client: OpencodeClient,
  event: EventQuestionAsked,
  handlers: TurnHandlers,
): Promise<void> {
  const reqID = event.properties.id
  const answers = await handlers.onQuestionAsked?.({
    requestID: reqID,
    questions: event.properties.questions,
  })
  const safeAnswers =
    answers ??
    event.properties.questions.map(() => {
      return [""]
    })
  const sid = event.properties.sessionID
  const tag = sid === "" ? "" : ` (subagent=${sid.slice(0, 12)}…)`
  console.error(
    `[oc] auto-reply question id=${reqID} (${event.properties.questions.length} q) -> ${JSON.stringify(safeAnswers)}${tag}`,
  )
  const res = await client.question.reply({
    requestID: reqID,
    answers: safeAnswers,
  })
  if (res.error) {
    console.error(`[oc] question.reply error: ${JSON.stringify(res.error)}`)
  }
}

async function fetchLastAssistantMessage(
  client: OpencodeClient,
  sessionID: string,
): Promise<{ finalText: string; lastAssistantInfo: unknown }> {
  const res = await client.session.messages({ sessionID })
  if (res.error) {
    return { finalText: "", lastAssistantInfo: null }
  }
  const msgs = res.data
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i]
    if (m && m.info.role === "assistant") {
      const texts: string[] = []
      for (const p of m.parts) {
        if (p.type === "text") {
          texts.push(p.text)
        }
      }
      return { finalText: texts.join(""), lastAssistantInfo: m.info }
    }
  }
  return { finalText: "", lastAssistantInfo: null }
}

function logEvent(event: Event, isForTarget: boolean): void {
  const tag = isForTarget ? "" : " [subagent]"
  switch (event.type) {
    case "message.updated":
      console.error(
        `[oc] event: message.updated${tag} role=${event.properties.info.role} id=${event.properties.info.id}`,
      )
      break
    case "message.part.updated": {
      const part = event.properties.part
      const pid = part.id
      if (part.type === "text") {
        console.error(
          `[oc] event: message.part.updated${tag} part=text id=${pid} (${part.text.length} chars)`,
        )
      } else if (part.type === "tool") {
        const state = part.state
        const inputStr = JSON.stringify(state.input).slice(0, 120)
        console.error(
          `[oc] event: message.part.updated${tag} part=tool id=${pid} tool=${part.tool} state=${state.status} input=${inputStr}`,
        )
      } else {
        console.error(
          `[oc] event: message.part.updated${tag} part=${part.type} id=${pid}`,
        )
      }
      break
    }
    case "message.part.delta":
      console.error(
        `[oc] event: message.part.delta${tag} +${event.properties.delta.length} chars`,
      )
      break
    case "session.next.text.ended":
      console.error(
        `[oc] event: text.ended${tag} (${event.properties.text.length} chars)`,
      )
      break
    case "session.next.tool.called":
      console.error(
        `[oc] event: tool.called${tag} tool=${event.properties.tool} callID=${event.properties.callID} input=${JSON.stringify(event.properties.input).slice(0, 160)}`,
      )
      break
    case "session.next.tool.success":
      console.error(
        `[oc] event: tool.success${tag} callID=${event.properties.callID}`,
      )
      break
    case "session.next.tool.failed":
      console.error(
        `[oc] event: tool.failed${tag} callID=${event.properties.callID}`,
      )
      break
    case "session.idle":
      console.error(`[oc] event: session.idle${tag}`)
      break
    case "session.error":
      console.error(
        `[oc] event: session.error${tag} ${JSON.stringify(event.properties.error).slice(0, 200)}`,
      )
      break
    case "permission.asked":
    case "question.asked":
      break
    default:
      console.error(
        `[oc] unhandled event: ${event.type}${tag} ${JSON.stringify(event.properties).slice(0, 200)}`,
      )
      break
  }
}

function eventBelongsToSession(event: Event, sessionID: string): boolean {
  return (
    "sessionID" in event.properties && sessionID === event.properties.sessionID
  )
}

function preview(s: string, n: number): string {
  const isShortEnough = s.length <= n
  if (isShortEnough) {
    return s
  }
  return s.slice(0, n) + "..."
}

export type { Event, FilePartInput, TextPartInput }
