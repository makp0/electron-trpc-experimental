# electron-trpc

<p>
  <a href="https://www.npmjs.com/package/electron-trpc-experimental">
    <img alt="NPM" src="https://img.shields.io/npm/v/electron-trpc-experimental"/>
  </a>
  <a href="https://codecov.io/gh/jsonnull/electron-trpc"> 
  <img src="https://codecov.io/gh/jsonnull/electron-trpc/branch/main/graph/badge.svg?token=DU33O0D9LZ"/> 
  </a>
  <span>
    <img alt="MIT" src="https://img.shields.io/npm/l/electron-trpc-experimental"/>
  </span>
</p>

<p></p>

**Build IPC for Electron with tRPC**

- Expose APIs from Electron's main process to one or more render processes.
- Build fully type-safe IPC.
- Secure alternative to opening servers on localhost.
- Full support for queries, mutations, and subscriptions.
- **NEW**: Support for async generators and streaming data.

## What's New in v1.0.0-alpha

🚀 **Major Updates:**
- **tRPC v11 Support**: Upgraded to support the latest tRPC v11 features and improvements
- **Async Generators**: Full support for async generators enabling real-time streaming data
- **Breaking Change**: `exposeElectronTRPC` is now imported from `'electron-trpc/preload'` (previously from `'electron-trpc/main'`)

## Installation

```sh
# Using pnpm
pnpm add electron-trpc-experimental

# Using yarn
yarn add electron-trpc-experimental

# Using npm
npm install --save electron-trpc-experimental
```

## Basic Setup

1. Add your tRPC router to the Electron main process using `createIPCHandler`:

   ```ts
   import { app } from 'electron';
   import { createIPCHandler } from 'electron-trpc-experimental/main';
   import { router } from './api';

   app.on('ready', () => {
     const win = new BrowserWindow({
       webPreferences: {
         // Replace this path with the path to your preload file (see next step)
         preload: 'path/to/preload.js',
       },
     });

     createIPCHandler({ router, windows: [win] });
   });
   ```

2. Expose the IPC to the render process from the [preload file](https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts):

   ```ts
   // ⚠️ BREAKING CHANGE: Import path updated in v1.0.0-alpha
   import { exposeElectronTRPC } from 'electron-trpc-experimental/preload';

   process.once('loaded', async () => {
     exposeElectronTRPC();
   });
   ```

   > Note: `electron-trpc` depends on `contextIsolation` being enabled, which is the default.

3. When creating the client in the render process, use the `ipcLink` (instead of the HTTP or batch HTTP links):

   ```ts
   import { createTRPCProxyClient } from '@trpc/client';
   import { ipcLink } from 'electron-trpc-experimental/renderer';

   export const client = createTRPCProxyClient({
     links: [ipcLink()],
   });
   ```

4. Now you can use the client in your render process as you normally would (e.g. using `@trpc/react`).

## Using with Transformers (SuperJSON Example)

`electron-trpc` supports tRPC transformers like SuperJSON for serializing complex data types. Here's how to set it up:

**Router with SuperJSON (main process):**
```ts
// electron/api.ts
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

const t = initTRPC.create({ 
  isServer: true, 
  transformer: superjson 
});

export const router = t.router({
  greeting: t.procedure
    .input(z.object({ name: z.string() }))
    .query((req) => {
      return {
        text: `Hello ${req.input.name}`,
        timestamp: new Date(), // Date object will be properly serialized
      };
    }),
});
```

**Client with SuperJSON (renderer process):**
```ts
// src/index.tsx
import { createTRPCReact } from '@trpc/react-query';
import { ipcLink } from 'electron-trpc-experimental/renderer';
import superjson from 'superjson';

const trpc = createTRPCReact<AppRouter>();

const trpcClient = trpc.createClient({
  links: [
    ipcLink({ 
      transformer: superjson // Must match the server transformer
    })
  ],
});
```

See the [`basic-react-superjson` example](./examples/basic-react-superjson) for a complete implementation with React and SuperJSON.

## Async Generators & Streaming

With tRPC v11 support, you can now use async generators for real-time data streaming:

```ts
// In your tRPC router
const router = t.router({
  streamData: t.procedure
    .query(async function* () {
      for (let i = 0; i < 10; i++) {
        yield { count: i };
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }),
});

// In your renderer
for await (const data of client.streamData.query()) {
  console.log(data); // { count: 0 }, { count: 1 }, etc.
}
```

## Migration Guide

### From v0.x to v1.0.0-alpha

**Breaking Changes:**
1. **Package Name**: Update your package.json:
   ```json
   {
     "dependencies": {
       "electron-trpc-experimental": "^1.0.0-alpha.0"
     }
   }
   ```

2. **Import Path Change**: Update your preload script:
   ```ts
   // Before
   import { exposeElectronTRPC } from 'electron-trpc-experimental/main';
   
   // After
   import { exposeElectronTRPC } from 'electron-trpc-experimental/preload';
   ```

3. **tRPC Version**: Ensure you're using tRPC v11:
   ```json
   {
     "dependencies": {
       "@trpc/client": "^11.0.0",
       "@trpc/server": "^11.0.0"
     }
   }
   ```

**New Features:**
- Async generators work out of the box
- Enhanced subscription handling and cleanup
