import { dot } from "@huggingface/transformers"
import { stdin, stdout } from "node:process"
import * as readline from "node:readline/promises"
import { TchuruAgent } from "./agent.ts"
import type { Segment } from "./types.ts"

const MODEL_DIR = `${process.cwd()}/backend/poc_v3/models/embeddinggemma-300m-onnx`

const agent = new TchuruAgent({
  modelDir: MODEL_DIR,
  cwd: process.cwd(),
})

await agent.start()
console.log("tchuru ready. type a message and press enter (Ctrl-D to quit).")

const rl = readline.createInterface({ input: stdin, output: stdout })
try {
  while (true) {
    const line = await rl.question("> ")
    const text = line.trim()
    if (!text) {
      continue
    }
    if (text === "/segment" || text.startsWith("/segment ")) {
      handleSegmentCommand(text)
      continue
    }
    process.stdout.write("…thinking\n")
    const { finalText } = await agent.sendUserTurn(text)
    process.stdout.write(`\n<<<\n${finalText}\n<<<\n\n`)
  }
} catch (e: any) {
  const isAbort = e?.code === "ABORT_ERR"
  const isEof = String(e).includes("EOF")
  if (!isAbort && !isEof) {
    console.error("error:", e)
  }
} finally {
  rl.close()
  await agent.stop()
}

function handleSegmentCommand(line: string): void {
  const rest = line.slice("/segment".length).trim()
  if (rest === "list" || rest === "") {
      if (rest === "list") {
      printSegmentList(agent)
    } else {
      printSegmentDetail(agent.machine.active)
    }
    return
  }
  const id = Number.parseInt(rest, 10)
  const isInt = Number.isInteger(id)
  if (!isInt) {
    console.error(`usage: /segment [list | <id>]`)
    return
  }
  const seg = agent.machine.segments.find((s) => {
    return s.id === id
  })
  if (!seg) {
    console.error(`segment #${id} not found`)
    return
  }
  printSegmentDetail(seg)
}

function printSegmentList(a: TchuruAgent): void {
  const segs = a.machine.segments
  const totalItems = segs.reduce((n, s) => {
    return n + s.items.length
  }, 0)
  const openCount = segs.filter((s) => {
    return s.endedAt === null
  }).length
  const closedCount = segs.length - openCount
  console.log(
    `\n${segs.length} segment(s), ${totalItems} items total, ${openCount} open, ${closedCount} closed`,
  )
  for (const s of segs) {
    const isActive = a.machine.active?.id === s.id
    const marker = isActive ? "*" : " "
    const open = s.endedAt === null
    const endStr = open ? "open     " : s.endedAt!.toISOString().slice(11, 19)
    const startStr = s.startedAt.toISOString().slice(11, 19)
    const ocStr = s.opencodeSessionId
      ? `  [oc=${s.opencodeSessionId.slice(0, 8)}…]`
      : ""
    const title = segmentTitle(s)
    const lineOne = title.replace(/\n/g, " ")
    const linePreview = lineOne.length > 60 ? lineOne.slice(0, 60) + "…" : lineOne
    console.log(
      `${marker} #${s.id}  ${startStr}→${endStr}  (${s.items.length} items)${ocStr}  "${linePreview}"`,
    )
  }
  console.log()
}

function printSegmentDetail(seg: Segment | null): void {
  if (!seg) {
    console.log("no active segment")
    return
  }
  const centroidCount = seg.items.filter((it) => {
    return it.centroidContributor
  }).length
  const noCentroidCount = seg.items.length - centroidCount
  const endStr =
    seg.endedAt === null ? "open" : seg.endedAt.toISOString()
  const ocStr = seg.opencodeSessionId
    ? `${seg.opencodeSessionId.slice(0, 16)}…`
    : "—"
  const reopenedStr =
    seg.reopenedFrom != null ? `from #${seg.reopenedFrom}` : "—"
  const sbStr =
    seg.softBoundaries.length === 0
      ? "0"
      : `${seg.softBoundaries.length} ${JSON.stringify(seg.softBoundaries)}`

  console.log(`\nSegment #${seg.id}`)
  console.log(`  started:    ${seg.startedAt.toISOString()}`)
  console.log(`  ended:      ${endStr}`)
  console.log(
    `  items:      ${seg.items.length} (${centroidCount} centroid contributors, ${noCentroidCount} no-centroid)`,
  )
  console.log(`  oc session: ${ocStr}`)
  console.log(`  reopened:   ${reopenedStr}`)
  console.log(`  soft boundaries: ${sbStr}`)

  if (seg.items.length === 0) {
    console.log("\n  (no items)")
    return
  }
  console.log("")
  for (const it of seg.items) {
    const tsStr = it.ts.toISOString().slice(11, 19)
    const hasCentroid = seg.centroid != null
    const simStr = hasCentroid
      ? `  sim=${dot(it.emb, seg.centroid!).toFixed(3)}`
      : "  sim=—"
    const tagStr = it.centroidContributor ? "(centroid)    " : "(no-centroid)  "
    const text = it.text.length > 400 ? it.text.slice(0, 400) + "…" : it.text
    const textOneLine = text.replace(/\n/g, " ")
    console.log(
      `  [#${it.id}]  ${it.role}/${it.source}  ts=${tsStr}${simStr}  ${tagStr}"${textOneLine}"`,
    )
  }
  console.log()
}

function segmentTitle(s: Segment): string {
  const firstUser = s.items.find((it) => {
    return it.role === "user"
  })
  if (firstUser) {
    return firstUser.text
  }
  if (s.items.length > 0) {
    return s.items[0]!.text
  }
  return "—"
}
