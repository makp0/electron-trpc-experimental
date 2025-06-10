import packageJson from '../../packages/electron-trpc/package.json';

// Extract repository information from package.json
const repoUrl = packageJson.repository.url.replace('.git', '').replace('git+', '');
const repoUrlParts = repoUrl.replace('https://github.com/', '').split('/');
const REPO_OWNER = repoUrlParts[0];
const REPO_NAME = repoUrlParts[1];

// Computed values from package.json
const REPO_BASE_URL = repoUrl;
const SITE_BASE_URL = `https://${REPO_OWNER}.github.io`;
const BASE_PATH = `/${REPO_NAME}`;

export const DOCS_CONFIG = {
  // Package information
  packageName: packageJson.name,
  homepage: packageJson.homepage,

  // Repository information
  repositoryUrl: REPO_BASE_URL,

  // Site information
  siteUrl: SITE_BASE_URL,
  basePath: BASE_PATH,

  // Documentation information
  title: packageJson.name,

  // Version information
  currentVersion: packageJson.version,

  // Import paths
  importPaths: {
    main: `${packageJson.name}/main`,
    preload: `${packageJson.name}/preload`,
    renderer: `${packageJson.name}/renderer`,
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
