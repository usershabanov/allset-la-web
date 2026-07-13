import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import { normalizeBookingPayload, sendBookingToTelegram } from './server/telegram.js';

function bookingApiPlugin() {
  return {
    name: 'booking-api-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/booking', (req: any, res: any, next: any) => {
        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const payload = normalizeBookingPayload(body ? JSON.parse(body) : {});

            if (payload.honeypot) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
              return;
            }

            if (!payload.name || !payload.phone || !payload.problem) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Missing required fields' }));
              return;
            }

            await sendBookingToTelegram(payload);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true }));
          } catch (error) {
            console.error('Vite booking API failed:', error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Failed to send request' }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [react(), bookingApiPlugin(), mode === 'development' && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
