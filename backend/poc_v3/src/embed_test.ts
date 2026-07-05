import { matmul } from "@huggingface/transformers";
import {
  captionText,
  loadEmbedder,
  OPERATIONAL_SOURCES,
  type ItemInput,
} from "./embed.ts";

const MODEL_DIR = "./models/embeddinggemma-300m-onnx";
const e = await loadEmbedder(MODEL_DIR);

const items: ItemInput[] = [
  { text: "PaymentProcessor.charge() throws on null amount", source: "vscode" },
  { text: "fix the null-pointer in checkout", source: "user" },
  { text: "schedule lunch with Alex", source: "user" },
  { text: "Stripe 402 from billing endpoint", source: "terminal" },
  { text: "deploy the staging build to prod", source: "terminal" },
];

console.log("Captioning check:");
const captioned = items.map((it) => {
  const c = captionText(it);
  const isOp = it.source && OPERATIONAL_SOURCES.has(it.source);
  console.log(`  [${it.source ?? "-"}]${isOp ? " (op)" : ""}  ->  ${c}`);
  return c;
});

const emb = await e.encode(captioned);
console.log(`\nembed() returned tensor: dims=${emb.dims}, dtype=${emb.type}`);

// L2 normalization is baked into the community ONNX export, so for unit vectors
// dot product == cosine similarity, and matmul(emb, emb.T) gives the full
// similarity matrix in one call (mirrors the example in the model card).
const sims = (await matmul(emb, emb.transpose(1, 0))).tolist() as number[][];

const labels = items.map((_, i) => `q${i}`);
const short = (s: string) =>
  (s.length > 36 ? s.slice(0, 33) + "..." : s).padEnd(36);

console.log("\nCosine matrix (matmul, L2-normalized):");
process.stdout.write(" ".repeat(38));
for (const l of labels) process.stdout.write(l.padStart(8));
console.log();

items.forEach((item, i) => {
  process.stdout.write(short(`q${i}: ${item.text}`));
  for (let j = 0; j < items.length; j++) {
    process.stdout.write(sims[i]![j]!.toFixed(3).padStart(8));
  }
  console.log();
});

console.log("\nSpot checks (same as before):");
console.log("  q0 vs q1 (billing-related):  ", sims[0]![1]!.toFixed(3));
console.log("  q0 vs q2 (vs lunch):         ", sims[0]![2]!.toFixed(3));
console.log("  q0 vs q3 (vs Stripe 402):    ", sims[0]![3]!.toFixed(3));

console.log("\nRanking vs q0 (charge null):");
const ranked = sims[0]!
  .map((score, index) => ({ index, score }))
  .sort((a, b) => b.score - a.score);
for (const r of ranked) {
  console.log(`  q${r.index}: ${r.score.toFixed(3)}  ${items[r.index]!.text}`);
}
