import { dot } from "@huggingface/transformers"
import assert from "assert"
import {
  ALPHA_CEIL,
  ALPHA_FLOOR,
  TIME_BOOST_AMPLITUDE,
  TIME_BOOST_TAU_MIN,
  type AlphaFn,
  type Item,
} from "./types.ts"

function sigmoid(x: number): number {
  if (x >= 0) {
    const z = Math.exp(-x)
    return 1 / (1 + z)
  }
  const z = Math.exp(x)
  return z / (1 + z)
}

function alphaA(k: number, sim: number, n: number): number {
  const base = sigmoid(k * (sim - 0.5))
  const trust = 1 - 1 / (1 + k * Math.log1p(Math.max(0, n)))
  return base + (1 - base) * trust
}

function alphaB(k: number, sim: number, n: number): number {
  const base = Math.min(k * sim, 0.99)
  const w = 1 - 1 / (1 + k * Math.max(0, n))
  return base * (1 - w) + w
}

function alphaC(k: number, sim: number, n: number): number {
  const base = sigmoid(k * (sim - 0.5))
  const maturity = 1 - Math.exp(-k * Math.max(0, n))
  return base + (1 - base) * maturity
}

const ALPHA_FNS: Record<
  AlphaFn,
  (k: number, sim: number, n: number) => number
> = {
  A: alphaA,
  B: alphaB,
  C: alphaC,
}

export function computeAlpha(
  fnName: AlphaFn,
  k: number,
  sim: number,
  n: number,
): number {
  const a = ALPHA_FNS[fnName](k, sim, n)
  if (a > ALPHA_CEIL) {
    return ALPHA_CEIL
  }
  if (a < ALPHA_FLOOR) {
    return ALPHA_FLOOR
  }
  return a
}

export function l2Normalize(v: number[]): number[] {
  const n = norm(v)
  if (n === 0) {
    return v
  }
  const normalized = v.map((item) => {
    return item / n
  })
  return normalized
}

function norm(vector: number[]): number {
  const sqrSum = vector.reduce((sum, value) => {
    return sum + value * value
  }, 0)
  return Math.sqrt(sqrSum)
}

export function timeBoost(deltaMin: number): number {
  return 1 + TIME_BOOST_AMPLITUDE * Math.exp(-deltaMin / TIME_BOOST_TAU_MIN)
}

export function updateCentroid(
  centroid: number[],
  emb: number[],
  sim: number,
  nBefore: number,
  alphaFn: AlphaFn,
  alphaK: number,
): number[] {
  const alpha = computeAlpha(alphaFn, alphaK, sim, nBefore)
  const next = new Array<number>(centroid.length)
  for (let i = 0; i < centroid.length; i++) {
    next[i] = alpha * centroid[i]! + (1 - alpha) * emb[i]!
  }
  return l2Normalize(next)
}

export function recomputeCentroid(
  items: Item[],
  alphaFn: AlphaFn,
  alphaK: number,
): number[] {
  assert(items[0], "cannot recompute centroid over empty item list")

  let centroid = items[0].emb
  for (let n = 1; n < items.length; n++) {
    const it = items[n]!
    const sim = dot(it.emb, centroid)
    centroid = updateCentroid(centroid, it.emb, sim, n, alphaFn, alphaK)
  }
  return centroid
}
