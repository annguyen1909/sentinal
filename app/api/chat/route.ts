import { ChatBody } from "@/types/types";
import { Client } from "@gradio/client";

const hfToken: string | undefined = process.env.HUGGINGFACE_API_KEY;

if (!hfToken || !hfToken.startsWith("hf_")) {
  throw new Error(
    "HUGGINGFACE_API_KEY is either not defined or not in the correct format (must start with 'hf_')."
  );
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { inputMessage, prompType, length } = (await req.json()) as ChatBody;

    const client = await Client.connect("dad1909/cyberapi", {
      hf_token: hfToken as `hf_${string}`,
    });

    const result = await client.predict("/predict", {
      selected_model: "CyberSentinel",
      prompt: inputMessage,
      prompt_type: prompType,
      max_length: length,
    });

    return new Response(JSON.stringify(result.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error connecting to the API:", error);
    return new Response("Error", { status: 500 });
  }
}
