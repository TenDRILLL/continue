import { EmbedOptions, FetchFunction } from "../..";
import { withExponentialBackoff } from "../../util/withExponentialBackoff";
import BaseEmbeddingsProvider from "./BaseEmbeddingsProvider";

async function embedOne(
  chunk: string,
  options: EmbedOptions,
  customFetch: FetchFunction,
) {
  const fetchWithBackoff = () =>
    withExponentialBackoff<Response>(() =>
      customFetch(new URL("api/embeddings", options.apiBase), {
        method: "POST",
        body: JSON.stringify({
          model: options.model,
          prompt: chunk,
        }),
      }),
    );
  const resp = await fetchWithBackoff();

  if (!resp.ok) {
    throw new Error(`Failed to embed chunk: ${await resp.text()}`);
  }

  return (await resp.json()).embedding;
}

class OllamaEmbeddingsProvider extends BaseEmbeddingsProvider {
  static defaultOptions: IBaseEmbeddingsProvider["defaultOptions"] = {
    apiBase: "http://localhost:11434/",
    model: "nomic-embed-text",
  };

  async embed(chunks: string[]) {
    const results: any = [];
    for (const chunk of chunks) {
      results.push(await embedOne(chunk, this.options, this.fetch));
    }
    return results;
  }
}

export default OllamaEmbeddingsProvider;
