export const ENTITY_TYPES = [
  "REPO",
  "FILE",
  "URL",
  "TYPE",
  "FUNCTION",
  "MODULE",
] as const
export type EntityType = (typeof ENTITY_TYPES)[number]

export const RELATIONSHIP_KINDS = [
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
] as const
export type RelationshipKind = (typeof RELATIONSHIP_KINDS)[number]

export const ENTITY_TYPE_SET = new Set<string>(ENTITY_TYPES)
export const RELATIONSHIP_KIND_SET = new Set<string>(RELATIONSHIP_KINDS)

export function isEntityType(t: string): t is EntityType {
  return ENTITY_TYPE_SET.has(t)
}

export function isRelationshipKind(k: string): k is RelationshipKind {
  return RELATIONSHIP_KIND_SET.has(k)
}

export function normalizeEntityName(name: string): string {
  return name
    .trim()
    .replace(/^\.\//, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
}

export async function entityId(
  type: EntityType,
  name: string,
  repo: string | null | undefined,
): Promise<string> {
  const norm = normalizeEntityName(name)
  const r = (repo ?? "").trim().toLowerCase()
  const key = `${type}|${norm}|${r}`
  const bytes = new TextEncoder().encode(key)
  const hash = await crypto.subtle.digest("SHA-1", bytes)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export type EntityRef = {
  type: EntityType
  name: string
  repo: string | null
}

export function describeEntityRef(r: EntityRef): string {
  const parts = [r.type, r.name]
  if (r.repo) parts.push(`@${r.repo}`)
  return parts.join(" ")
}
