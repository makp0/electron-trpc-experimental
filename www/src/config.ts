export const DOCS_CONFIG = {
  // Package information
  packageName: 'electron-trpc-experimental',
  originalPackageName: 'electron-trpc',

  // Repository information
  repositoryUrl: 'https://github.com/makp0/electron-trpc-experimental',
  repositoryOwner: 'makp0',
  repositoryName: 'electron-trpc-experimental',

  // Site information
  siteUrl: 'https://makp0.github.io',
  basePath: '/electron-trpc-experimental',

  // Documentation information
  title: 'electron-trpc-experimental',
  description: 'Ergonomic and type-safe solution for building IPC in Electron',
  tagline: 'Ergonomic and type-safe solution for building IPC in Electron',

  // Version information
  currentVersion: '1.0.0-alpha.0',
  breakingChangeVersion: 'v1.0.0-alpha',

  // Import paths
  importPaths: {
    main: 'electron-trpc-experimental/main',
    preload: 'electron-trpc-experimental/preload',
    renderer: 'electron-trpc-experimental/renderer',
  },

  // Legacy import paths (for migration guide)
  legacyImportPaths: {
    main: 'electron-trpc-experimental/main',
    preload: 'electron-trpc-experimental/main', // This was the old incorrect path
    renderer: 'electron-trpc-experimental/renderer',
  },

  // External links
  externalLinks: {
    trpcDocs: 'https://trpc.io/docs/quickstart#installation',
    electronContextIsolation: 'https://www.electronjs.org/docs/latest/tutorial/context-isolation',
    electronPreloadScripts:
      'https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts',
    examplesUrl: 'https://github.com/makp0/electron-trpc-experimental/tree/main/examples/',
    basicExampleUrl: 'https://github.com/makp0/electron-trpc-experimental/tree/main/examples/basic',
  },
} as const;
