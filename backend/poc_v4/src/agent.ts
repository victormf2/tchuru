import { dot } from "@huggingface/transformers"
import type { Event } from "@opencode-ai/sdk/v2"
import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { captionText, loadEmbedder, type Embedder } from "./embed.ts"
import {
  createSession,
  runTurn,
  startOpencode,
  type FilePartInput,
  type OpencodeHandle,
  type PromptPart,
} from "./opencode.ts"
import { ContextMachine } from "./segmenter.ts"
import type { Item, Segment } from "./types.ts"

export type AgentOptions = {
  modelDir: string
  cwd: string
  agent?: string
  onSegmentChange?: (s: SegmentsSnapshot) => void
}

export type SegmentsSnapshot = {
  segments: Segment[]
  activeId: number | null
}

export class TchuruAgent {
  embedder!: Embedder
  machine = new ContextMachine()
  oc!: OpencodeHandle
  private modelDir: string
  private cwd: string
  private agentName: string
  private onSegmentChange?: (s: SegmentsSnapshot) => void
  private nextItemId = 0
  private pendingOperational: Item[] = []
  private runId = ""
  private _itemsThisTurn = 0
  private _centroidContributorsThisTurn = 0
  private _ingestedToolPartIds = new Set<string>()

  constructor(opts: AgentOptions) {
    this.modelDir = opts.modelDir
    this.cwd = opts.cwd
    this.agentName = opts.agent ?? "build"
    this.onSegmentChange = opts.onSegmentChange
  }

  async start(): Promise<void> {
    this.runId = formatRunId(new Date())
    mkdirSync(this.contextRoot(), { recursive: true })
    this.embedder = await loadEmbedder(this.modelDir)
    this.oc = await startOpencode()
    console.error(`[tchuru] run id: ${this.runId}`)
    console.error(`[tchuru] context dir: ${this.contextRoot()}`)
    console.error(`[tchuru] opencode server: ${this.oc.server.url}`)
    console.error(`[tchuru] cwd: ${this.cwd}`)
  }

  async stop(): Promise<void> {
    this.oc?.server.close()
  }

  contextRoot(): string {
    return join(this.cwd, ".tchuru", "context", this.runId)
  }

  async ingestUserText(text: string): Promise<Segment> {
    return this._pushItem(
      await this._embed({
        text,
        source: "user",
        role: "user",
        centroidContributor: true,
      }),
    )
  }

  async ingestOperational(source: string, text: string): Promise<Segment> {
    const item = await this._embed({
      text,
      source,
      role: "agent",
      centroidContributor: false,
    })
    this.pendingOperational.push(item)
    return this._pushItem(item)
  }

  async ingestAgentIntermediate(
    source: string,
    text: string,
    segment: Segment,
  ): Promise<void> {
    const item = await this._embed({
      text,
      source,
      role: "agent",
      centroidContributor: false,
    })
    this.machine.attach(segment, item)
    this._itemsThisTurn += 1
    this._emit()
  }

  async ingestAgentFinal(text: string, segment: Segment): Promise<void> {
    const item = await this._embed({
      text,
      source: "opencode",
      role: "agent_final",
      centroidContributor: true,
    })
    this.machine.attach(segment, item)
    this.machine.active = segment
    this._itemsThisTurn += 1
    this._centroidContributorsThisTurn += 1
    this._emit()
  }

  async sendUserTurn(
    userText: string,
  ): Promise<{ segment: Segment; finalText: string }> {
    this._itemsThisTurn = 0
    this._centroidContributorsThisTurn = 0
    this._ingestedToolPartIds.clear()

    const segment = await this.ingestUserText(userText)

    if (!segment.opencodeSessionId) {
      const session = await createSession(this.oc.client, {
        agent: this.agentName,
        directory: this.cwd,
      })
      segment.opencodeSessionId = session.id
      console.error(
        `[tchuru] created OC session ${session.id} for segment #${segment.id}`,
      )
    } else {
      console.error(
        `[tchuru] reusing OC session ${segment.opencodeSessionId} for segment #${segment.id}`,
      )
    }

    const operational = this.pendingOperational.splice(0)
    const fileParts: FilePartInput[] = operational.map((it) => {
      return this._materializeFile(segment.id, it)
    })
    const parts: PromptPart[] = [{ type: "text", text: userText }, ...fileParts]
    if (operational.length > 0) {
      console.error(
        `[tchuru] bundling ${operational.length} operational item(s) as file parts for seg=#${segment.id}`,
      )
    }

    const { finalText } = await runTurn(
      this.oc.client,
      segment.opencodeSessionId,
      parts,
      undefined,
      (evt) => {
        this._onOcEvent(evt, segment)
      },
    )

    if (finalText) {
      console.error(
        `[tchuru] <- agent final: ${finalText.length} chars -> ingesting as agent_final`,
      )
      await this.ingestAgentFinal(finalText, segment)
    }
    this.machine.cleanupPass()
    this._emit()
    const ocShort = segment.opencodeSessionId
      ? segment.opencodeSessionId.slice(0, 12) + "…"
      : "—"
    console.error(
      `[tchuru] turn done: seg=#${segment.id} items_added=${this._itemsThisTurn} (centroid: ${this._centroidContributorsThisTurn}) final_text=${finalText.length} chars oc=${ocShort}`,
    )
    return { segment, finalText }
  }

  private _onOcEvent(evt: Event, segment: Segment): void {
    if (evt.type !== "message.part.updated") {
      return
    }
    const part = evt.properties.part
    if (part.type !== "tool") {
      return
    }
    const partId = part.id
    if (this._ingestedToolPartIds.has(partId)) {
      return
    }
    this._ingestedToolPartIds.add(partId)
    const inputStr = part.state.input
      ? JSON.stringify(part.state.input).slice(0, 200)
      : ""
    void this.ingestAgentIntermediate(
      `opencode:tool:${part.tool}`,
      `${part.tool}${inputStr ? " " + inputStr : ""}`,
      segment,
    )
  }

  private _materializeFile(segmentId: number, item: Item): FilePartInput {
    const filename = `seg-${segmentId}-tchuru-${shortSource(item.source)}-${item.id}.txt`
    const absPath = join(this.contextRoot(), filename)
    writeFileSync(absPath, item.text)
    return {
      type: "file",
      mime: "text/plain",
      url: `file://${absPath}`,
      filename,
    }
  }

  private async _embed(input: {
    text: string
    source: string
    role: Item["role"]
    centroidContributor: boolean
    opencodeMessageId?: string | null
  }): Promise<Item> {
    const captioned = captionText({ text: input.text, source: input.source })
    const tensor = await this.embedder.encode([captioned])
    return {
      id: this.nextItemId++,
      ts: new Date(),
      source: input.source,
      role: input.role,
      text: input.text,
      emb: Array.from(tensor.data),
      centroidContributor: input.centroidContributor,
      opencodeMessageId: input.opencodeMessageId ?? null,
    }
  }

  private _pushItem(item: Item): Segment {
    const action = this.machine.push(item)
    const segment = this.machine.segments.find((s) => {
      return s.items.some((i) => {
        return i.id === item.id
      })
    })!
    const hasCentroid = segment.centroid && segment.items.length > 1
    const isActive = this.machine.active === segment
    const hasSim = hasCentroid && isActive
    const simStr = hasSim
      ? ` sim=${dot(item.emb, segment.centroid!).toFixed(3)}`
      : ""
    const ocStr = segment.opencodeSessionId
      ? ` (oc=${segment.opencodeSessionId.slice(0, 12)}…)`
      : ""
    console.error(
      `[tchuru] item ${item.id} [${item.role}/${item.source}]${simStr} -> ${action} seg #${segment.id}${ocStr}`,
    )
    this._itemsThisTurn += 1
    if (item.centroidContributor) {
      this._centroidContributorsThisTurn += 1
    }
    this._emit()
    return segment
  }

  private _emit(): void {
    this.onSegmentChange?.({
      segments: this.machine.segments,
      activeId: this.machine.active?.id ?? null,
    })
  }
}

function formatRunId(d: Date): string {
  const pad = (n: number) => {
    return n.toString().padStart(2, "0")
  }
  const y = d.getFullYear()
  const mo = pad(d.getMonth() + 1)
  const da = pad(d.getDate())
  const h = pad(d.getHours())
  const mi = pad(d.getMinutes())
  const s = pad(d.getSeconds())
  return `${y}${mo}${da}${h}${mi}${s}`
}

function shortSource(source: string): string {
  const tag = captionText({ text: "", source }).split(":")[0]?.trim()
  if (tag && tag.length > 0 && tag !== "user" && tag !== "opencode") {
    return tag.toLowerCase()
  }
  return source.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()
}
