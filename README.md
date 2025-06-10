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

## About This Fork

This is a fork of [electron-trpc](https://github.com/jsonnull/electron-trpc) by [@jsonnull](https://github.com/jsonnull) with significant contributions from [@mat-sz](https://github.com/mat-sz). This version includes:

- **Component Separation**: Split into distinct `main`, `preload`, and `renderer` components for better organization
- **tRPC v11 Support**: Updated to support the latest tRPC v11 features and improvements  
- **Async Generators**: Full support for async generators enabling real-time streaming data
- **Modern Architecture**: Enhanced separation of concerns following Electron's security model

## Installation

```sh
npm install electron-trpc-experimental
```

## Quick Start

1. **Install the package** and follow our [Getting Started guide](https://makp0.github.io/electron-trpc-experimental/getting-started/)
2. **Explore the examples** in the [`examples/`](./examples/) directory:
   - [`basic-react`](./examples/basic-react/) - Basic React setup with TypeScript
   - [`basic-react-superjson`](./examples/basic-react-superjson/) - Using SuperJSON transformers
   - [`basic-vanilla-esm`](./examples/basic-vanilla-esm/) - Vanilla JavaScript with ESM

## Documentation

📖 **[Complete Documentation](https://makp0.github.io/electron-trpc-experimental/)**

- [Getting Started](https://makp0.github.io/electron-trpc-experimental/getting-started/) - Setup guide and basic usage
- [Examples](./examples/) - Working examples with different configurations
- [API Reference](https://makp0.github.io/electron-trpc-experimental/) - Complete API documentation

## Features

- **Type-safe IPC** - Full TypeScript support across main/preload/renderer processes
- **tRPC v11 Support** - Latest tRPC features and improvements
- **Async Generators** - Support for streaming data and real-time updates
- **Transformers** - Use SuperJSON and other transformers for complex data types
- **Security-first** - Built on Electron's context isolation for secure IPC


