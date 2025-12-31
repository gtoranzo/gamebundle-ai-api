const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("API Paquete de Juegos corre Exitosamente!!!");
  },
});

console.log(`Server corre en ${server.url}`);
