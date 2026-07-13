export const EMBEDDING_DIM = 768

export const NODE_DDL = [
  `CREATE NODE TABLE Entity(
    id STRING PRIMARY KEY,
    name STRING,
    type STRING,
    repo STRING,
    metadata JSON,
    created_at TIMESTAMP
  )`,
  `CREATE NODE TABLE Fact(
    id STRING PRIMARY KEY,
    text STRING,
    embedding FLOAT[${EMBEDDING_DIM}],
    session_id STRING,
    source_msg STRING,
    created_at TIMESTAMP
  )`,
  `CREATE NODE TABLE ProcessedSession(
    id STRING PRIMARY KEY,
    processed_at TIMESTAMP,
    fact_count INT64,
    error STRING
  )`,
] as const

export const REL_DDL = [
  `CREATE REL TABLE MENTIONS(FROM Fact TO Entity)`,
  `CREATE REL TABLE CO_OCCURS(FROM Fact TO Fact)`,
  `CREATE REL TABLE RELATES(FROM Entity TO Entity, kind STRING, weight DOUBLE)`,
] as const

export const INDEX_DDL = [
  `CALL CREATE_VECTOR_INDEX('Fact', 'fact_vec', 'embedding', metric := 'cosine')`,
  `CALL CREATE_FTS_INDEX('Entity', 'entity_name', ['name'], stemmer := 'porter')`,
] as const

export const SETUP_QUERIES = [
  `INSTALL VECTOR`,
  `LOAD EXTENSION VECTOR`,
  `INSTALL FTS`,
  `LOAD EXTENSION FTS`,
] as const

export const BOOTSTRAP_QUERIES = [
  ...NODE_DDL,
  ...REL_DDL,
  ...INDEX_DDL,
] as const

export function listTablesQuery(): string {
  return `CALL SHOW_TABLES() RETURN name`
}

export function listIndexesQuery(): string {
  return `CALL SHOW_INDEXES() RETURN name, index_type`
}
