# gamebundle-ai-api

Api de Paquetes de Juegos con iA incuida.

### Primer paso Instalar Bun

- Para más información entra en [Bun](https://bun.sh/).

#### Instalalo en consola powershell o cmd para Win.

```shell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Usando [profreehost](https://profreehost.com/) creamos el Hosting

- Una vez activado tenemos: [gamebundle.unaux.com](https://gamebundle.unaux.com/?i=1)

```shell
const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("API Paquete de Juegos corre Exitosamente!!!");
  },
});

console.log(`Server corre en ${server.url}`);

```

JSON

```json
  "scripts": {
    "start": "bun run index.ts",
    "dev": "bun --watch run index.ts"
  },
```
