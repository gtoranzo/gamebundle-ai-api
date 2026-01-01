import { Groq } from "groq-sdk";

const groq = Groq();

const chatCompletation = await groq.chat.completions.create({
  messages: [
    {
      role: "user",
      content: "Hello. ¿Cómo Estás?",
    },
  ],

  model: "moonshotai/kimi-k2-instruct-0905",
  temperature: 0.6,
  max_completion_tokens: 4096,
  top_p: 1,
  stream: true,
  stop: null,
});

for await (const chunk of chatCompletation) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}
