import { loadEmbedder, similarityMatrix } from "./embed.ts";

const MODEL_DIR = "./models/embeddinggemma-300m-onnx";
const e = await loadEmbedder(MODEL_DIR);

const queries = [
  "PaymentProcessor.charge() throws on null amount",
  "fix the null-pointer in checkout",
  "schedule lunch with Alex",
  "Stripe 402 from billing endpoint",
  "deploy the staging build to prod",
];

const withPrefix = queries.map((q) => "task: search result | query: " + q);
const withoutPrefix = queries;

const withMatrix = await similarityMatrix(e, withPrefix);
const withoutMatrix = await similarityMatrix(e, withoutPrefix);

const printMatrix = (label: string, matrix: number[][]) => {
  console.log(`\n=== ${label} ===`);
  process.stdout.write(" ".repeat(42));
  for (let i = 0; i < queries.length; i++) {
    process.stdout.write(`q${i}    `.padStart(7));
  }
  console.log();
  for (let i = 0; i < queries.length; i++) {
    process.stdout.write(`q${i}: ${queries[i].slice(0, 36)}`.padEnd(42));
    for (let j = 0; j < queries.length; j++) {
      process.stdout.write(matrix[i][j].toFixed(3).padStart(7));
    }
    console.log();
  }
};

printMatrix("WITH prefix  (task: search result | query: ...)", withMatrix);
printMatrix("WITHOUT prefix", withoutMatrix);

console.log("\n=== Pairwise delta (with - without) ===");
for (let i = 0; i < queries.length; i++) {
  for (let j = i + 1; j < queries.length; j++) {
    const d = withMatrix[i][j] - withoutMatrix[i][j];
    console.log(
      `  q${i} vs q${j}:  with=${withMatrix[i][j].toFixed(3)}  ` +
        `without=${withoutMatrix[i][j].toFixed(3)}  ` +
        `delta=${d >= 0 ? "+" : ""}${d.toFixed(3)}`
    );
  }
}
