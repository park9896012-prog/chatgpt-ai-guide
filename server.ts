import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', app: 'ChatGPT 활용 Educational Guide', email: 'ju9896012@gmail.com' });
  });

  // Explicit SEO routes
  app.get('/robots.txt', (_req, res) => {
    const robotsTxt = `User-agent: *\nAllow: /\nSitemap: https://chatgpt-guide.app/sitemap.xml`;
    res.type('text/plain').send(robotsTxt);
  });

  app.get('/sitemap.xml', (_req, res) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://chatgpt-guide.app/</loc><lastmod>2026-08-12</lastmod><priority>1.0</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=1.1</loc><lastmod>2026-08-12</lastmod><priority>0.8</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=1.2</loc><lastmod>2026-08-12</lastmod><priority>0.8</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=1.3</loc><lastmod>2026-08-12</lastmod><priority>0.8</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=1.4</loc><lastmod>2026-08-12</lastmod><priority>0.8</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=1.5</loc><lastmod>2026-08-12</lastmod><priority>0.8</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=2.1</loc><lastmod>2026-08-12</lastmod><priority>0.9</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=2.2</loc><lastmod>2026-08-12</lastmod><priority>0.9</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=2.3</loc><lastmod>2026-08-12</lastmod><priority>0.9</priority></url>
  <url><loc>https://chatgpt-guide.app/?module=2.4</loc><lastmod>2026-08-12</lastmod><priority>0.9</priority></url>
</urlset>`;
    res.type('application/xml').send(sitemap);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
