import { TchuruAgent } from "../src/agent.ts"
import { loadEmbedder } from "../src/embed.ts"
import { ContextMachine } from "../src/segmenter.ts"
import type { Item } from "../src/types.ts"

const MODEL_DIR = `${process.cwd()}/backend/poc_v3/models/embeddinggemma-300m-onnx`

const records = [
  {
    source: "vscode",
    role: "user" as const,
    text: "PaymentProcessor.charge() throws on null amount",
    centroid: true,
  },
  {
    source: "user",
    role: "user" as const,
    text: "fix the null-pointer in checkout",
    centroid: true,
  },
  {
    source: "user",
    role: "user" as const,
    text: "schedule lunch with Alex",
    centroid: true,
  },
  {
    source: "terminal",
    role: "agent" as const,
    text: "npm test",
    centroid: false,
  },
  {
    source: "terminal",
    role: "agent" as const,
    text: "git status",
    centroid: false,
  },
  {
    source: "user",
    role: "user" as const,
    text: "the build is broken, can you look?",
    centroid: true,
  },
  {
    source: "user",
    role: "user" as const,
    text: "PaymentProcessor.charge() — same null amount bug, any progress?",
    centroid: true,
  },
  {
    source: "slack",
    role: "agent" as const,
    text: "Stripe 402 from billing endpoint, customer X",
    centroid: false,
  },
]

const embedder = await loadEmbedder(MODEL_DIR)
const captioned = records.map((r) => {
  const tag =
    { db: "SQL", vscode: "Code", terminal: "Command", build: "Build" }[
      r.source
    ] ?? null
  return `${tag ? tag + ": " : ""}${r.text}`
})
const tensor = await embedder.encode(captioned)
const data = Array.from(tensor.data)
const dim = tensor.dims.at(-1)!
const items: Item[] = records.map((r, i) => ({
  id: i,
  ts: new Date(Date.now() + i * 60_000),
  source: r.source,
  role: r.role,
  text: r.text,
  emb: data.slice(i * dim, (i + 1) * dim),
  centroidContributor: r.centroid,
  requestId: null,
  opencodeMessageId: null,
}))

const m = new ContextMachine()
for (const it of items) m.push(it)
m.cleanupPass()

console.log(`${m.segments.length} segment(s):`)
for (const s of m.segments) {
  const open = s.endedAt === null
  console.log(
    `\n=== #${s.id} ${s.startedAt.toISOString().slice(11, 19)} → ${open ? "open" : s.endedAt!.toISOString().slice(11, 19)} (${s.items.length}) ===`,
  )
  for (const it of s.items) {
    const t = it.text.slice(0, 60)
    const tag = it.centroidContributor ? "" : " [no-centroid]"
    console.log(`  [${it.role}]${tag} (${it.source}) "${t}"`)
  }
}

void TchuruAgent
