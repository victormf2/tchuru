import { z } from "zod"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js"

const EntityRefSchema = z.object({
  type: z.enum(["REPO", "FILE", "URL", "TYPE", "FUNCTION", "MODULE"]),
  name: z.string().min(1),
  repo: z.string().nullable(),
})

const EntitySchema = EntityRefSchema.extend({
  metadata: z.record(z.string(), z.unknown()).nullable(),
})

const FactSchema = z.object({
  text: z.string().min(1).max(500),
  entity_refs: z.array(EntityRefSchema).min(1),
  source_msg: z.string().nullable(),
})

const RelationshipSchema = z.object({
  from: EntityRefSchema,
  to: EntityRefSchema,
  kind: z.enum([
    "CONTAINS",
    "DEFINES",
    "IMPORTS",
    "CALLS",
    "EXTENDS",
    "IMPLEMENTS",
    "MEMBER_OF",
    "USES_TYPE",
    "REFERENCED_IN",
    "DOCUMENTED_AT",
  ]),
  weight: z.number().min(0).max(1),
})

export const ExtractionInputSchema = z.object({
  entities: z.array(EntitySchema),
  facts: z.array(FactSchema),
  relationships: z.array(RelationshipSchema),
})

export type ExtractionInput = z.infer<typeof ExtractionInputSchema>

export type ExtractionMcpServer = {
  url: string
  waitForInput(timeoutMs: number): Promise<unknown>
  close(): Promise<void>
}

const TOOL_NAME = "extraction_result"

const TOOL_DESCRIPTION = `Submit the structured knowledge extraction for a coding session transcript.

The input MUST be a JSON object with three keys:
  - entities: array of {type, name, repo?, metadata?}
  - facts: array of {text, entity_refs: [...], source_msg?}
  - relationships: array of {from, to, kind, weight}

Each fact is one atomic claim, <= ~25 words, referencing at least one entity.
Prefer the FINAL state of any code/file/function/type mentioned.
Skip pleasantries and explicitly-reverted changes.
Entity 'kind' for relationships must be one of the closed enum above.
This is the ONLY thing you should do — no text reply, no preamble.`

export async function startExtractionMcpServer(): Promise<ExtractionMcpServer> {
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: () => crypto.randomUUID(),
  })

  const mcp = new McpServer(
    { name: "memorydb-extractor", version: "0.0.0" },
    { capabilities: { tools: {} } },
  )

  let resolveInput: ((input: unknown) => void) | null = null
  let rejectInput: ((err: Error) => void) | null = null
  let timer: ReturnType<typeof setTimeout> | null = null

  function settleResolve(input: unknown): void {
    const r = resolveInput
    resolveInput = null
    rejectInput = null
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    if (r) r(input)
  }

  mcp.registerTool(
    TOOL_NAME,
    {
      description: TOOL_DESCRIPTION,
      inputSchema: ExtractionInputSchema.shape,
    },
    async (input) => {
      settleResolve(input)
      return {
        content: [{ type: "text" as const, text: "ok" }],
      }
    },
  )

  await mcp.connect(transport)

  const httpServer = Bun.serve({
    port: 0,
    hostname: "127.0.0.1",
    fetch: async (req) => transport.handleRequest(req),
  })

  const url = `http://127.0.0.1:${httpServer.port}/mcp`

  return {
    url,
    waitForInput(timeoutMs: number): Promise<unknown> {
      return new Promise((resolve, reject) => {
        resolveInput = resolve
        rejectInput = reject
        timer = setTimeout(() => {
          resolveInput = null
          rejectInput = null
          timer = null
          reject(new Error(`MCP input timeout ${timeoutMs}ms`))
        }, timeoutMs)
        timer.unref()
      })
    },
    async close() {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (resolveInput) {
        const r = rejectInput
        resolveInput = null
        rejectInput = null
        if (r) r(new Error("MCP server closed"))
      }
      try {
        await mcp.close()
      } catch {
        // ignore
      }
      try {
        await transport.close()
      } catch {
        // ignore
      }
      try {
        httpServer.stop()
      } catch {
        // ignore
      }
    },
  }
}
