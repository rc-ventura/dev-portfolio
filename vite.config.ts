import { defineConfig, loadEnv } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const geminiHandlerUrl = new URL('./api/gemini.js', import.meta.url);

function localGeminiApi(): Plugin {
  return {
    name: 'local-gemini-api',
    configureServer(server) {
      server.middlewares.use('/api/gemini', async (req, res) => {
        const { default: handler } = await import(geminiHandlerUrl.href);
        await handler(req, res);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/gemini', async (req, res) => {
        const { default: handler } = await import(geminiHandlerUrl.href);
        await handler(req, res);
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) process.env[key] = value;
  }

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), localGeminiApi()],
    resolve: {
      alias: {
        '@': resolve(rootDir, '.'),
      },
    },
  };
});
