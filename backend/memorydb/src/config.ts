import { homedir } from "node:os"
import { join } from "node:path"
import type { ExtractionMode } from "./extract.ts"

export type Config = {
  opencodeDb: string
  ladybugDb: string
  modelDir: string
  modelId: string
  limit: number
  session: string | null
  dryRun: boolean
  opencodePort: number
  includeReasoning: boolean
  maxCharsPerSession: number
  extractionTimeoutMs: number
  extractionMode: ExtractionMode
}

const DEFAULT_OPENCODE_DB = join(
  homedir(),
  ".local",
  "share",
  "opencode",
  "opencode.db",
)

export const DEFAULT_MODEL_ID = "onnx-community/embeddinggemma-300m-ONNX"

function parseInt10(s: string): number {
  const n = Number.parseInt(s, 10)
  if (!Number.isFinite(n)) {
    throw new Error(`expected integer, got: ${s}`)
  }
  return n
}

function parseArgs(argv: string[]): Partial<Config> {
  const out: Partial<Config> = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]!
    const next = argv[i + 1]
    const take = (): string => {
      if (next === undefined) {
        throw new Error(`flag ${a} needs a value`)
      }
      i++
      return next
    }
    switch (a) {
      case "--opencode-db":
        out.opencodeDb = take()
        break
      case "--db":
        out.ladybugDb = take()
        break
      case "--model-dir":
        out.modelDir = take()
        break
      case "--model-id":
        out.modelId = take()
        break
      case "--limit":
        out.limit = parseInt10(take())
        break
      case "--session":
        out.session = take()
        break
      case "--dry-run":
        out.dryRun = true
        break
      case "--opencode-port":
        out.opencodePort = parseInt10(take())
        break
      case "--include-reasoning":
        out.includeReasoning = true
        break
      case "--max-chars":
        out.maxCharsPerSession = parseInt10(take())
        break
      case "--extraction-timeout-ms":
        out.extractionTimeoutMs = parseInt10(take())
        break
      case "--extraction-mode": {
        const m = take()
        if (m !== "mcp" && m !== "json") {
          throw new Error(`--extraction-mode must be 'mcp' or 'json', got: ${m}`)
        }
        out.extractionMode = m
        break
      }
      case "-h":
      case "--help":
        printHelp()
        process.exit(0)
      default:
        throw new Error(`unknown flag: ${a}`)
    }
  }
  return out
}

export function printHelp(): void {
  process.stdout.write(`memorydb — daily OpenCode session ingest

usage:
  bun run backend/memorydb/src/cli.ts [flags]

flags:
  --opencode-db <path>           path to opencode.db (default: ~/.local/share/opencode/opencode.db)
  --db <path>                    path to ladybug db file (default: ./data/memorydb.lbug)
  --model-dir <path>             local ONNX model directory (default: ./models/embeddinggemma-300m-onnx)
  --model-id <id>                model id (default: onnx-community/embeddinggemma-300m-ONNX)
  --limit <n>                    max sessions per run (default: 100)
  --session <id>                 process a single session by id, ignore ProcessedSession table
  --opencode-port <n>            port of the opencode server (default: 9876)
  --include-reasoning            include agent reasoning parts in the tagged session text
  --max-chars <n>                drop sessions whose tagged text exceeds this many chars (default: 600000)
  --extraction-timeout-ms <n>    per-session extraction timeout (default: 180000)
  --extraction-mode <m>          'mcp' (default) uses the extraction_result tool; 'json' asks for raw JSON
  --dry-run                      skip LLM + writes, print counts only
  -h, --help                     show this help
`)
}

export function loadConfig(argv: string[] = process.argv.slice(2)): Config {
  const scriptDir = import.meta.dir
  const dataDir = join(scriptDir, "..", "data")
  const defaults: Config = {
    opencodeDb: DEFAULT_OPENCODE_DB,
    ladybugDb: join(dataDir, "memorydb.lbug"),
    modelDir: join(
      scriptDir,
      "..",
      "models",
      "embeddinggemma-300m-onnx",
    ),
    modelId: DEFAULT_MODEL_ID,
    limit: 100,
    session: null,
    dryRun: false,
    opencodePort: 9876,
    includeReasoning: false,
    maxCharsPerSession: 600_000,
    extractionTimeoutMs: 180_000,
    extractionMode: "mcp",
  }
  const overrides = parseArgs(argv)
  return { ...defaults, ...overrides }
}
