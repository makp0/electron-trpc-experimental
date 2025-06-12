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
const PAGES_PATH = `${SITE_BASE_URL}${BASE_PATH}`;

export const DOCS_CONFIG = {
  // Repository information
  repositoryUrl: REPO_BASE_URL,

  // Site information
  siteUrl: SITE_BASE_URL,
  basePath: BASE_PATH,
  pagesPath: PAGES_PATH,

  // Documentation information
  title: packageJson.name,

  // Version information
  currentVersion: packageJson.version,

  // External links
  externalLinks: {
    examplesUrl: `${REPO_BASE_URL}/tree/main/examples`,
  },
} as const;
