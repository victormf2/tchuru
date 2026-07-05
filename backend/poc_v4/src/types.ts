export type Role = "user" | "agent" | "agent_final"

export type Item = {
  id: number
  ts: Date
  source: string
  role: Role
  text: string
  emb: number[]
  centroidContributor: boolean
  opencodeMessageId: string | null
}

export type Segment = {
  id: number
  startedAt: Date
  endedAt: Date | null
  items: Item[]
  centroid: number[]
  softBoundaries: Array<{ itemId: number; sim: number }>
  reopenedFrom: number | null
  opencodeSessionId: string | null
}

export type RouteAction = "new" | "append" | "soft" | "reopen" | "op"

export type AlphaFn = "A" | "B" | "C"

export const HIGH = 0.78
export const LOW = 0.55
export const REOPEN_AGE_MS = 8 * 3_600_000 // 8 hours
export const REOPEN_LOOKBACK = 20
export const TINY_SEGMENT_SIZE = 2
export const TINY_ABSORB_SIM = LOW
export const OPERATIONAL_PROXIMITY_MS = 15 * 60_000 // 15 min

export const TIME_BOOST_AMPLITUDE = 0.2
export const TIME_BOOST_TAU_MIN = 10.0

export const ALPHA_FLOOR = 0.05
export const ALPHA_CEIL = 0.99

export const DEFAULT_K_PER_FN: Record<AlphaFn, number[]> = {
  A: [0.5, 1.0, 2.0],
  B: [0.5, 1.0, 1.5],
  C: [0.1, 0.3, 0.6],
}
