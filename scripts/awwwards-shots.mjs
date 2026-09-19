import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const BASE = 'http://127.0.0.1:45985/vanrobi';
const OUT = '/workspace/vanrobi-site/preview/awwwards-cold';
fs.mkdirSync(OUT, { recursive: true });

const shots = [
  { name: 'home-desktop', url: `${BASE}/`, width: 1440, height: 900, full: false },
  { name: 'home-desktop-fold', url: `${BASE}/`, width: 1440, height: 900, full: true, maxHeight: 3200 },
  { name: 'home-mobile', url: `${BASE}/`, width: 390, height: 844, full: false },
  { name: 'diensten-desktop', url: `${BASE}/diensten/`, width: 1440, height: 900, full: false },
  { name: 'diensten-scroll', url: `${BASE}/diensten/`, width: 1440, height: 900, scrollY: 900, full: false },
  { name: 'producten-desktop', url: `${BASE}/producten/`, width: 1440, height: 900, full: false },
  { name: 'home-cta', url: `${BASE}/`, width: 1440, height: 900, selector: '#offerte', full: false },
  { name: 'contact-desktop', url: `${BASE}/contact/`, width: 1440, height: 900, full: false },
];

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

for (const s of shots) {
  const page = await browser.newPage({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: 1,
  });
  await page.goto(s.url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(800);
  if (s.scrollY) {
    await page.evaluate((y) => window.scrollTo(0, y), s.scrollY);
    await page.waitForTimeout(500);
  }
  if (s.selector) {
    const el = await page.$(s.selector);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await el.screenshot({ path: path.join(OUT, `${s.name}.png`) });
      console.log('ok', s.name);
      await page.close();
      continue;
    }
  }
  if (s.full) {
    // clip tall full page
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    const clipH = Math.min(h, s.maxHeight || 2400);
    await page.screenshot({
      path: path.join(OUT, `${s.name}.png`),
      fullPage: false,
      clip: { x: 0, y: 0, width: s.width, height: clipH },
    });
  } else {
    await page.screenshot({ path: path.join(OUT, `${s.name}.png`) });
  }
  console.log('ok', s.name);
  await page.close();
}

await browser.close();
console.log('done');
