// Base configuration values
const PACKAGE_NAME = 'electron-trpc-experimental';
const REPO_OWNER = 'makp0';
const REPO_NAME = 'electron-trpc-experimental';
const CURRENT_VERSION = '1.0.0-alpha.0';

// Computed values
const REPO_BASE_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
const SITE_BASE_URL = `https://${REPO_OWNER}.github.io`;
const BASE_PATH = `/${REPO_NAME}`;

export const DOCS_CONFIG = {
  // Package information
  packageName: PACKAGE_NAME,
  originalPackageName: 'electron-trpc',

  // Repository information
  repositoryUrl: REPO_BASE_URL,
  repositoryOwner: REPO_OWNER,
  repositoryName: REPO_NAME,

  // Site information
  siteUrl: SITE_BASE_URL,
  basePath: BASE_PATH,

  // Documentation information
  title: PACKAGE_NAME,

  // Version information
  currentVersion: CURRENT_VERSION,

  // Import paths
  importPaths: {
    main: `${PACKAGE_NAME}/main`,
    preload: `${PACKAGE_NAME}/preload`,
    renderer: `${PACKAGE_NAME}/renderer`,
  },

  // External links
  externalLinks: {
    trpcDocs: 'https://trpc.io/docs/quickstart#installation',
    electronContextIsolation: 'https://www.electronjs.org/docs/latest/tutorial/context-isolation',
    electronPreloadScripts: 'https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts',
    examplesUrl: `${REPO_BASE_URL}/tree/main/examples/`,
    basicExampleUrl: `${REPO_BASE_URL}/tree/main/examples/basic`,
  },
} as const;
