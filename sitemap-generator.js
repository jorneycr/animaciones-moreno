const fs = require('fs');
const puppeteer = require('puppeteer');

async function generateSitemap() {
  const baseUrl = 'https://animaciones-moreno-topaz.vercel.app';
  const visitedUrls = new Set();
  const sitemapEntries = [];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  async function crawl(url) {
    if (visitedUrls.has(url) || !url.startsWith(baseUrl)) {
      return;
    }
    visitedUrls.add(url);

    await page.goto(url, { waitUntil: 'networkidle2' });

    // Agregar URL al sitemap
    sitemapEntries.push(`<url><loc>${url}</loc></url>`);

    // Obtener todos los enlaces de la página
    const links = await page.$$eval('a', (anchors) =>
      anchors.map((a) => a.href).filter((href) => href)
    );

    // Recursivamente rastrear los enlaces
    for (const link of links) {
      await crawl(link);
    }
  }
  // Comenzar a rastrear desde la página de inicio
  await crawl(baseUrl);

  await browser.close();

  // Generar y escribir el sitemap.xml
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries.join('\n')}
    </urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generado exitosamente en public/sitemap.xml');
}

generateSitemap().catch(console.error);
