# memorydb — reference plan

> This file describes the full design. The current implementation in `src/`
> covers only **ingestion** (pull sessions → extract → write). The retrieval
> layer is described here as a contract for the next iteration; it is **not**
> implemented yet.

## Goals

Build a local-first long-term memory of OpenCode sessions:

- A daily job reads the most recent N OpenCode sessions from its own SQLite
  store, extracts a small structured summary per session (entities, facts,
  relationships) using an LLM driven through the OpenCode SDK, and writes the
  result into a single embedded graph database.
- Retrieval later exposes that graph to an LLM via four tool calls
  (`search_facts`, `expand_subgraph`, `facts_about_entity`, `session_facts`).

## Storage choice — LadybugDB

Single embedded engine (in-process, no server) for both the property graph and
the vector index. Successor to Kuzu, MIT, v0.18 (`@ladybugdb/core@next`).
Apache-Cypher query language. Native HNSW vector index (`vector` extension)
and BM25 full-text search (`fts` extension) both ship with `@next`.

Alternatives considered and rejected:
- **Kuzu** — archived Oct 2025 (Apple acquisition); use Ladybug instead.
- **SurrealDB / FalkorDB** — need a server process, eats RAM we don't have.
- **Neo4j / Memgraph** — JVM/JIT, doesn't fit 2 GB.
- **DuckDB + DuckPGQ + VSS** — workable, but more glue.
- **Kuzu + LanceDB / Chroma** — was the right call pre-Oct-2025; now redundant.

## Embedding model

`onnx-community/embeddinggemma-300m-ONNX` (768d, MTEB-en ~68, Matryoshka).
Loaded via `@huggingface/transformers`. Mean-pool + L2 norm, same pattern as
`backend/poc_v3/src/embed.ts`. The exact same model is already exported and
verified against Python `sentence-transformers` in
`backend/poc_v3/EMBED_COMPARISON.md`.

If we ever swap models, only `src/embed.ts` + the `FLOAT[<DIM>]` column dim in
`src/schema.ts` change. Nothing else.

## Graph schema

```cypher
CREATE NODE TABLE Entity(
  id         STRING PRIMARY KEY,   -- sha1(type|normalizedName|repo)
  name       STRING,
  type       STRING,               -- REPO | FILE | URL | TYPE | FUNCTION | MODULE
  repo       STRING,
  metadata   JSON,
  created_at TIMESTAMP
);

CREATE NODE TABLE Fact(
  id          STRING PRIMARY KEY,  -- uuid v4
  text        STRING,              -- one short sentence, <= ~25 words
  embedding   FLOAT[768],          -- matches embeddinggemma-300m
  session_id  STRING,
  source_msg  STRING,              -- optional, message id this fact came from
  created_at  TIMESTAMP
);

CREATE REL TABLE MENTIONS(FROM Fact TO Entity);
CREATE REL TABLE CO_OCCURS(FROM Fact TO Fact);  -- clique within session
CREATE REL TABLE RELATES(FROM Entity TO Entity, kind STRING, weight DOUBLE);

CREATE NODE TABLE ProcessedSession(
  id           STRING PRIMARY KEY,
  processed_at TIMESTAMP,
  fact_count   INT64,
  error        STRING              -- null on success, message on failure
);

CALL CREATE_VECTOR_INDEX('Fact', 'fact_vec', 'embedding', metric := 'cosine');
CALL CREATE_FTS_INDEX('Entity', 'entity_name', ['name'], stemmer := 'porter');
```

No FTS on `Fact.text` — facts are retrieved via vector search; raw-text search
on them was not in the tool surface and adds maintenance cost.

### Entity id

```
id = sha1(type | "|" | normalized(name) | "|" | (repo ?? ""))
```

`normalized(name)` is the entity's name lowercased and stripped of leading
`./`, internal whitespace collapsed. Two references to the same file
(`auth.py`, `src/auth.py`, `Auth.py`) in the same repo collapse to one entity.

### Relationship vocabulary (closed enum)

```
CONTAINS      repo -> file, file -> type, file -> function, type -> function
DEFINES       file -> function/type, repo -> file
IMPORTS       file -> file
CALLS         function -> function
EXTENDS       type -> type
IMPLEMENTS    type -> type
MEMBER_OF     function -> type
USES_TYPE     function -> type
REFERENCED_IN entity -> file
DOCUMENTED_AT entity -> url
```

`weight` is the LLM's confidence in [0.0, 1.0]. Processed once per session, so
no aggregation across sessions is needed yet (RELATES is `MERGE`d on first
observation; re-processing the same session would `ON MATCH SET` it but we
mark sessions processed on success and skip them on subsequent runs).

## Pipeline (the part that's implemented)

```
for each session in (latest N, not in ProcessedSession):
  text = tagged_join(messages, parts=[text,reasoning?])
  if text is empty: skip
  json = opencode_sdk.create_session(agent=build) -> prompt(system, text) -> idle -> last_assistant_text -> json
  validate json
  embs = embedder.encodeBatch(json.facts[*].text)       # 768d, L2-norm
  begin tx in ladybug:
    UNWIND $entities MERGE (e:Entity {id}) ON CREATE SET ...
    UNWIND $facts   CREATE (f:Fact {..., embedding: $embs[i]})
    UNWIND $mentions MATCH ... MERGE (f)-[:MENTIONS]->(e)
    MATCH (a:Fact {session_id}) MATCH (b:Fact {session_id})
      WHERE a.id < b.id MERGE (a)-[:CO_OCCURS]->(b)
    UNWIND $relates MATCH ... MERGE (a)-[r:RELATES {kind}]->(b)
      ON CREATE SET r.weight=...
  commit
  MERGE (ProcessedSession {id: sid}) ON CREATE SET fact_count, processed_at
on error: log, mark ProcessedSession with error text, continue
```

### Source-of-truth: OpenCode SQLite

Read with `bun:sqlite` from `~/.local/share/opencode/opencode.db` (path is
overridable via `--opencode-db`). Schemas are stable, JSON columns:

- `session(id, directory, title, time_created, time_updated, ...)`
- `message(id, session_id, time_created, data)` — `data` JSON has `.role`
- `part(id, message_id, session_id, time_created, data)` — `data` JSON has
  `.type` (`text|reasoning|tool|file|step-start|step-finish|...`) and `.text`
  for text parts.

We only read text-bearing parts (`text`, optionally `reasoning`); tool, file,
step-start, step-finish are dropped. The session text becomes:

```
[USER] hello
[AGENT] Hello! How can I help you today?
[USER] fix the null pointer in checkout
[AGENT] ...
```

### LLM call shape

Single prompt to the `build` agent (the same OpenCode you use day-to-day):

- system: ontology + JSON schema + hard rules (one atomic claim per fact, no
  speculation, prefer late-session state for facts about code, drop user
  pleasantries and corrections that were immediately superseded)
- user: the tagged session text + the JSON schema reminder

OpenCode SDK's `tools` field is a `{name: enabled}` map for built-ins, not a
way to register custom tool definitions. Custom tool registration goes through
MCP (`client.mcp.add(...)`). For a one-shot extraction this is overkill — we
ask for a single JSON response and parse.

We do not auto-approve tool/permission prompts during the extraction call;
the agent should not need to run tools. If it does (e.g. reads a file to
ground a fact), it'll be blocked and the session times out — surface that as
an error in `ProcessedSession.error` and skip.

### Why we feed the whole session

You want the LLM to see the full conversation so it can:

- resolve mid-session corrections (don't store the wrong first version)
- prefer the final state of any code/file mentioned
- drop pleasantries and dead ends

Cost / context risks: real. We accept them for v1 and revisit only if a
session blows past the model's context window. If that happens: chunk by
user-turn (each `[USER]` block + the agent's response + tool results that
follow), aggregate facts across chunks in TS before embedding and writing.

## Retrieval — DESIGNED, NOT IMPLEMENTED

When we come back to this, the four tools are:

| Tool | Input | Backing |
|------|-------|---------|
| `search_facts` | `query: str, k: int=10` | vector index on `Fact.embedding` |
| `expand_subgraph` | `fact_ids: [str], depth: int=1` | walk `:MENTIONS` + `:RELATES*depth` from given facts |
| `facts_about_entity` | `entity_name: str, limit: int=20` | FTS on `Entity.name` (BM25), then `(:Fact)-[:MENTIONS]->(:Entity)` |
| `session_facts` | `fact_id: str` | `MATCH (f)-[:CO_OCCURS]-(g) WHERE g.id = $id` |

The MCP server wrapping these lives in `backend/memorydb/mcp/` (future). For
now, no MCP server, no retrieval — the graph is built but no one queries it.

### Future retrieval work items (not this PR)

1. Add `backend/memorydb/src/retrieval.ts` with the four functions.
2. Add an MCP server (`backend/memorydb/src/mcp-server.ts`) exposing them.
3. Wire the MCP server into OpenCode's config.
4. Optionally derive an embedding per entity (concatenate facts that mention
   it, embed the joined text) for semantic entity lookup.
5. Re-embedding strategy if the model changes (drop + reindex).
6. Backfill: process the full session history on first run (currently capped
   to last 100 by `LIMIT`).
7. Read multiple OpenCode DBs (`opencode.db`, `opencode-stable.db`,
   `opencode-dev.db`).

## Out of scope

- Re-embedding when sessions are updated (sessions are immutable after
  processing; we never overwrite)
- Concurrent runs / file locks (single-runner assumption, per your call)
- Any UI

## Open tradeoffs we're accepting

- **Whole-session prompt**: high token cost on long sessions, slightly worse
  extraction quality at the top/bottom of long contexts. Revisit if you see
  it bite.
- **No chunking → no temporal fact graph**: facts are unordered within a
  session, and the only "graph time" is the session boundary. If you later
  want "what was true at time T", we'd need to re-introduce chunking.
- **No tool use during extraction**: the LLM cannot ground facts by reading
  the file. It only knows what was in the conversation. This is fine because
  the conversation usually contains the relevant snippets; if it doesn't, the
  fact is best-effort.
- **Single OpenCode DB**: `opencode.db` only. The other two files are read-
  only mirrors and ignored for now.
