const url = "https://api.deepseek.com/v1/models";

const headers = {
  Authorization: `Bearer ${Bun.env.DEEPSEEK_API_KEY}`,
  Accept: "application/json",
};

try {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);

  const response = await fetch(url, {
    headers,
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  if (response.ok) {
    const data = await response.json();
    const models = data.data?.map((m) => m.id) ?? [];
    console.log("✅ Conexión exitosa. Modelos disponibles:", models);
  } else {
    const errorText = await response.text();
    console.error(
      `❌ Error HTTP ${response.status}`,
      response.statusText || "(sin statusText)",
      errorText ? `→ ${errorText.slice(0, 200)}` : ""
    );
  }
} catch (err) {
  if (err.name === "AbortError") {
    console.error("⏱️ Timeout: la solicitud tardó más de 10 segundos");
  } else if (err.cause?.code === "ENOTFOUND") {
    console.error("🌐 Error de red: dominio no encontrado (¿sin internet?)");
  } else if (err.cause?.code === "ECONNREFUSED") {
    console.error("🔌 Error de red: conexión rechazada");
  } else {
    console.error("💥 Error inesperado:", err.message);
  }
}
// Conexión exitosa. Modelos disponibles: [ "deepseek-chat", "deepseek-reasoner" ]
