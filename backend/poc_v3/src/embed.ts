import {
  AutoModel,
  AutoTokenizer,
  type PreTrainedModel,
  type PreTrainedTokenizer,
  type Tensor,
} from "@huggingface/transformers";

export const QUERY_PREFIX = "task: search result | query: ";
export const DOCUMENT_PREFIX = "title: none | text: ";

const OPERATIONAL_CAPTIONS: Record<string, string> = {
  db: "SQL",
  vscode: "Code",
  terminal: "Command",
  build: "Build",
};
const OPERATIONAL_SOURCES = new Set(Object.keys(OPERATIONAL_CAPTIONS));

export type ItemInput = {
  text: string;
  source?: string;
};

export async function loadEmbedder(modelDir: string): Promise<Embedder> {
  const tokenizer = await AutoTokenizer.from_pretrained(modelDir);
  const model = await AutoModel.from_pretrained(modelDir, {
    dtype: "fp32",
  });

  return new Embedder(tokenizer, model);
}

export class Embedder {
  constructor(
    readonly tokenizer: PreTrainedTokenizer,
    readonly model: PreTrainedModel,
  ) {}

  async encode(inputs: string | string[]): Promise<Tensor> {
    if (typeof inputs === "string") {
      return this.encode([inputs]);
    }
    const tokens = this.tokenizer(inputs, { padding: true });
    const { sentence_embedding } = await this.model(tokens);
    return sentence_embedding;
  }
}

function captionText({ text, source }: ItemInput): string {
  if (!source) return text;
  const tag = OPERATIONAL_CAPTIONS[source];
  return tag ? `${tag}: ${text}` : text;
}

export { captionText, OPERATIONAL_SOURCES };
