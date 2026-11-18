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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pwaStubPlugin()],
});
