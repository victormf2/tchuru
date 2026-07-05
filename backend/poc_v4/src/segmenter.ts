import assert from "node:assert"
import { dot } from "@huggingface/transformers"
import {
  recomputeCentroid,
  timeBoost,
  updateCentroid,
} from "./centroid.ts"
import { OPERATIONAL_SOURCES } from "./embed.ts"
import {
  HIGH,
  LOW,
  OPERATIONAL_PROXIMITY_MS,
  REOPEN_AGE_MS,
  REOPEN_LOOKBACK,
  TINY_ABSORB_SIM,
  TINY_SEGMENT_SIZE,
  type AlphaFn,
  type Item,
  type RouteAction,
  type Segment,
} from "./types.ts"

export { OPERATIONAL_SOURCES }

function lastTs(seg: Segment): Date | null {
  if (seg.items.length === 0) {
    return null
  }
  return seg.items[seg.items.length - 1]!.ts
}

function isOperational(source: string): boolean {
  return OPERATIONAL_SOURCES.has(source)
}

export class ContextMachine {
  segments: Segment[] = []
  active: Segment | null = null

  constructor(
    public alphaFn: AlphaFn = "A",
    public alphaK: number = 1.0,
  ) {}

  push(item: Item): RouteAction {
    if (this.segments.length === 0) {
      this._openSegment(item)
      return "new"
    }

    if (
      isOperational(item.source) &&
      this.active != null &&
      this.active.items.length > 0
    ) {
      const last = lastTs(this.active)
      if (last) {
        const deltaMs = Math.abs(item.ts.getTime() - last.getTime())
        if (deltaMs <= OPERATIONAL_PROXIMITY_MS) {
          this.attach(this.active, item, { sim: 1.0 })
          return "op"
        }
      }
    }

    assert(this.active != null, "invariant: active segment is non-null after the empty check")
    const current = this.active
    const sim = dot(item.emb, current.centroid!)

    const last = lastTs(current)
    let boost = 1
    if (last != null) {
      const dtMin = Math.abs((item.ts.getTime() - last.getTime()) / 60_000)
      boost = timeBoost(dtMin)
    }
    const effectiveSim = sim * boost

    if (effectiveSim >= HIGH) {
      this.attach(current, item, { sim })
      return "append"
    }

    if (effectiveSim >= LOW) {
      this.attach(current, item, { soft: true, sim })
      return "soft"
    }

    const cutoffMs = item.ts.getTime() - REOPEN_AGE_MS
    const candidates = this.segments
      .filter(
        (s) => s !== current && s.endedAt && s.endedAt.getTime() >= cutoffMs,
      )
      .slice(-REOPEN_LOOKBACK)
      .reverse()

    let bestOld: Segment | null = null
    let bestOldSim = -1
    for (const old of candidates) {
      if (!old.centroid) {
        continue
      }
      const oldSim = dot(item.emb, old.centroid)
      if (oldSim >= HIGH && oldSim > bestOldSim) {
        bestOld = old
        bestOldSim = oldSim
      }
    }

    if (bestOld) {
      this._close(current, lastTs(current))
      bestOld.endedAt = null
      if (bestOld.reopenedFrom == null) {
        bestOld.reopenedFrom = bestOld.id
      }
      this.attach(bestOld, item, { sim })
      this.active = bestOld
      return "reopen"
    }

    this._close(current, lastTs(current))
    this._openSegment(item)
    return "new"
  }

  attach(
    seg: Segment,
    item: Item,
    opts: { soft?: boolean; sim: number } = { sim: 1.0 },
  ): void {
    seg.items.push(item)
    const nBefore = seg.items.length - 1
    if (item.centroidContributor && seg.centroid) {
      seg.centroid = updateCentroid(
        seg.centroid,
        item.emb,
        opts.sim,
        nBefore,
        this.alphaFn,
        this.alphaK,
      )
    }
    if (opts.soft) {
      seg.softBoundaries.push({ itemId: item.id, sim: opts.sim })
    }
    if (seg.endedAt != null) {
      seg.endedAt = null
    }
  }

  private _openSegment(item: Item): Segment {
    const seg: Segment = {
      id: this.segments.length + 1,
      startedAt: item.ts,
      endedAt: null,
      items: [item],
      centroid: item.emb,
      softBoundaries: [],
      reopenedFrom: null,
      opencodeSessionId: null,
    }
    this.segments.push(seg)
    this.active = seg
    return seg
  }

  private _close(seg: Segment, ts: Date | null): void {
    if (seg.endedAt === null && ts) seg.endedAt = ts
  }

  cleanupPass(): void {
    let i = 1
    while (i < this.segments.length) {
      const seg = this.segments[i]!
      if (seg.items.length > TINY_SEGMENT_SIZE) {
        i++
        continue
      }
      const prev = this.segments[i - 1]!
      if (!prev.centroid || !seg.centroid) {
        i++
        continue
      }
      const sim = dot(prev.centroid, seg.centroid)
      if (sim >= TINY_ABSORB_SIM) {
        prev.items.push(...seg.items)
        prev.centroid = recomputeCentroid(prev.items, this.alphaFn, this.alphaK)
        const segEnd = seg.endedAt
        if (prev.endedAt === null || (segEnd && segEnd > prev.endedAt)) {
          prev.endedAt = segEnd
        }
        prev.softBoundaries.push(...seg.softBoundaries)
        this.segments.splice(i, 1)
      } else {
        i++
      }
    }
  }
}
