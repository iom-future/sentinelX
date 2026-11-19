import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function pwaStubPlugin() {
  return {
    name: 'pwa-stub-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.includes('pwa-entry-point-loaded')) {
          res.setHeader('Content-Type', 'application/javascript');
          res.end('// PWA probe satisfied\n');
          return;
        }
        next();
      });
    }
  };
}

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'sentinelx';

// Dynamic, environment-aware base path:
// - On GitHub Pages: /<repo-name>/ (or / if username.github.io)
// - On Vercel & Local dev: /
const base = isGitHubActions
  ? (repoName && !repoName.endsWith('.github.io') ? `/${repoName}/` : '/')
  : (process.env.VITE_BASE || '/');

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), pwaStubPlugin()],
});
