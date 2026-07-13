import { AutoModel, AutoTokenizer } from "@huggingface/transformers"
import { EMBEDDING_DIM } from "./schema.js"

export type Embedder = {
  encode(texts: string[]): Promise<number[][]>
  dispose(): void
}

type Tensor = {
  data: Float32Array | BigInt64Array | BigUint64Array | number[]
  dims: number[]
}

function toFloat32(
  data: Float32Array | BigInt64Array | BigUint64Array | number[],
): Float32Array {
  if (data instanceof Float32Array) return data
  if (Array.isArray(data)) return Float32Array.from(data)
  const out = new Float32Array(data.length)
  for (let i = 0; i < data.length; i++) {
    out[i] = Number(data[i] ?? 0)
  }
  return out
}

function l2Normalize(vec: Float32Array): Float32Array {
  let sum = 0
  for (let i = 0; i < vec.length; i++) {
    sum += vec[i]! * vec[i]!
  }
  const norm = Math.sqrt(sum)
  if (norm === 0) return vec
  const out = new Float32Array(vec.length)
  for (let i = 0; i < vec.length; i++) {
    out[i] = vec[i]! / norm
  }
  return out
}

function meanPool(
  hidden: Float32Array,
  attentionMask: Float32Array,
  seqLen: number,
  hiddenSize: number,
): Float32Array {
  const out = new Float32Array(hiddenSize)
  for (let i = 0; i < seqLen; i++) {
    const m = attentionMask[i] ?? 0
    if (m === 0) continue
    for (let j = 0; j < hiddenSize; j++) {
      out[j]! += hidden[i * hiddenSize + j]! * m
    }
  }
  let maskSum = 0
  for (let i = 0; i < seqLen; i++) {
    maskSum += attentionMask[i] ?? 0
  }
  if (maskSum === 0) return out
  for (let j = 0; j < hiddenSize; j++) {
    out[j]! /= maskSum
  }
  return out
}

export async function loadEmbedder(modelDir: string): Promise<Embedder> {
  const tokenizer = await AutoTokenizer.from_pretrained(modelDir, {
    local_files_only: false,
  })
  const model = await AutoModel.from_pretrained(modelDir, {
    dtype: "fp32",
    local_files_only: false,
  })

  return {
    async encode(texts: string[]): Promise<number[][]> {
      if (texts.length === 0) return []
      const tokens = (await tokenizer(texts, {
        padding: true,
      })) as {
        input_ids: Tensor
        attention_mask: Tensor
      }
      const out = (await model(tokens)) as {
        sentence_embedding?: Tensor
        last_hidden_state?: Tensor
      }
      const sentence = out.sentence_embedding ?? out.last_hidden_state
      if (!sentence) {
        throw new Error(
          "model output missing both sentence_embedding and last_hidden_state",
        )
      }
      const data = toFloat32(sentence.data)
      const dims = sentence.dims
      if (dims.length === 3) {
        const batch = dims[0]!
        const seqLen = dims[1]!
        const hiddenSize = dims[2]!
        if (hiddenSize !== EMBEDDING_DIM) {
          throw new Error(
            `model hidden size ${hiddenSize} != schema dim ${EMBEDDING_DIM}`,
          )
        }
        const mask = toFloat32(tokens.attention_mask.data)
        const result: number[][] = []
        for (let b = 0; b < batch; b++) {
          const hiddenSlice = data.slice(
            b * seqLen * hiddenSize,
            (b + 1) * seqLen * hiddenSize,
          )
          const maskSlice = mask.slice(b * seqLen, (b + 1) * seqLen)
          const pooled = meanPool(hiddenSlice, maskSlice, seqLen, hiddenSize)
          const normed = l2Normalize(pooled)
          result.push(Array.from(normed))
        }
        return result
      }
      if (dims.length === 2) {
        const batch = dims[0]!
        const dim = dims[1]!
        if (dim !== EMBEDDING_DIM) {
          throw new Error(
            `model output dim ${dim} != schema dim ${EMBEDDING_DIM}`,
          )
        }
        const result: number[][] = []
        for (let b = 0; b < batch; b++) {
          const vec = data.slice(b * dim, (b + 1) * dim)
          const normed = l2Normalize(vec)
          result.push(Array.from(normed))
        }
        return result
      }
      throw new Error(
        `unexpected sentence_embedding dims: ${JSON.stringify(dims)}`,
      )
    },
    dispose() {
      void model.dispose()
    },
  }
}
