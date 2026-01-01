# gamebundle-ai-api [gamebundle-ai-api](https://github.com/gtoranzo/gamebundle-ai-api)

Api de Paquetes de Juegos con iA incuida.

### Primer paso Instalar Bun

- Para más información entra en [Bun](https://bun.sh/).

#### Instalalo en consola powershell o cmd para Win.

```shell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Usando [profreehost](https://profreehost.com/) creamos el Hosting

- Una vez activado tenemos: [gamebundle.unaux.com](https://gamebundle.unaux.com/?i=1)

#### Codigo del "index.ts"

```shell
const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("API Paquete de Juegos corre Exitosamente!!!");
  },
});

console.log(`Server corre en ${server.url}`);

```

#### Agrega a "package.json":

```json
  "scripts": {
    "start": "bun run index.ts",
    "dev": "bun --watch run index.ts"
  },
```

#### Crea "nixpacks.toml" y agrega:

```toml
[phases.setup]
nixPkgs = ["bun"]

[phases.install]
cmds = ["bun install"]

[phases.build]
cmds = []

[start]
cmd = "bun run start"
```

### install

```shell
bun add @cerebras/cerebras_cloud_sdk groq-sdk
```

<!--
Respuesta:
bun add v1.3.5 (1e86cebd)

installed @cerebras/cerebras_cloud_sdk@1.64.1
installed groq-sdk@0.37.0

40 packages installed [15.96s]
 -->

### Accede a [groq](https://groq.com/)

- Start Building
