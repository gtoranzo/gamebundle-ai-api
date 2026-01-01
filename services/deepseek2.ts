const res = await fetch("https://api.deepseek.com/v1/models", {
  headers: { Authorization: `Bearer ${Bun.env.DEEPSEEK_API_KEY}` },
  signal: AbortSignal.timeout(8000),
});

console.log(res.ok ? "✅ OK" : `❌ ${res.status} ${await res.text()}`);
