import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdtempSync, readFileSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import ts from 'typescript';
import {chromium} from 'playwright';

const dir = mkdtempSync(join(tmpdir(), 'sd-gallery-'));
try {
  for (const name of ['gallery-media', 'gallery-rows']) {
    writeFileSync(join(dir, `${name}.js`), ts.transpileModule(readFileSync(`src/lib/${name}.ts`, 'utf8'), {
      compilerOptions: {target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS},
    }).outputText);
  }
  const require = createRequire(import.meta.url);
  const {videoEmbedUrl} = require(join(dir, 'gallery-media.js'));
  const {renderGalleryRows} = require(join(dir, 'gallery-rows.js'));
  assert.match(videoEmbedUrl('vimeo', 'https://vimeo.com/12345678/abcde12345'), /h=abcde12345/);
  assert.match(videoEmbedUrl('vimeo', 'https://player.vimeo.com/video/12345678?h=abcde12345'), /h=abcde12345/);
  assert.equal(videoEmbedUrl('vimeo', 'https://vimeo.com.evil.test/12345678'), null);
  assert.equal(videoEmbedUrl('vimeo', 'javascript:alert(1)'), null);
  assert.equal(videoEmbedUrl('skiv', 'https://skiv.com/embed/film-123')?.startsWith('https://skiv.com/embed/film-123?'), true);
  assert.equal(renderGalleryRows([], 'Project'), '');
  assert.equal(renderGalleryRows([{items: [{kind: 'vimeo', vimeoId: 'invalid'}]}], 'Project'), '');

  const image = {kind: 'image', imageUrl: 'https://cdn.sanity.io/image.jpg', internalName: 'EDITOR ONLY', altText: 'Real image', caption: '<script>caption</script>'};
  const html = renderGalleryRows([
    {layout: 'pair', items: [image, {...image, caption: null}], spaceAbove: 'large', spaceBelow: 'medium', sideMargins: 'wide'},
    {layout: 'single', items: [image], sideMargins: 'edge'},
    {layout: 'single', items: [{kind: 'vimeo', vimeoId: '12345678'}], sideMargins: 'standard'},
  ], 'Project');
  assert.ok(!html.includes('EDITOR ONLY'));
  assert.ok(html.includes('&lt;script&gt;caption&lt;/script&gt;'));
  assert.ok(!html.includes('<script>'));
  // Malformed draft layouts must not silently discard media.
  assert.equal((renderGalleryRows([{layout: 'single', items: [image, image]}], 'Project').match(/<figure/g) || []).length, 2);
  console.log('Gallery content checks passed: video links, privacy hashes, fallback, escaped captions and internal names.');
  if (process.env.GALLERY_CONTENT_ONLY !== '1') {
  const browser = await chromium.launch({headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE_PATH, args: ['--no-sandbox', '--disable-dev-shm-usage']});
  try {
    const page = await browser.newPage({viewport: {width: 1280, height: 1200}});
    await page.route('https://**', route => route.abort());
    await page.setContent(`<style>${readFileSync('src/app/globals.css', 'utf8')}</style><div style="max-width:900px;margin:auto"><div class="study-module__vTcG6G__gallery">${html}</div></div>`);
    const desktop = await page.locator('.sd-gallery-media').evaluateAll(items => items.slice(0, 2).map(item => {const r = item.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width};}));
    assert.equal(desktop[0].y, desktop[1].y, 'Desktop pair shares a row');
    assert.ok(desktop[1].x > desktop[0].x + desktop[0].width, 'Desktop pair has a gap');
    assert.equal(await page.locator('.sd-gallery-row').nth(1).evaluate(el => getComputedStyle(el).paddingLeft), '0px');
    const padding = await page.locator('.sd-gallery-row').first().evaluate(el => parseFloat(getComputedStyle(el).paddingTop));
    assert.ok(padding > 24, 'Large desktop space above is applied');
    await page.setViewportSize({width: 390, height: 1000});
    const mobile = await page.locator('.sd-gallery-media').evaluateAll(items => items.slice(0, 2).map(item => {const r = item.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width};}));
    assert.equal(mobile[0].x, mobile[1].x, 'Mobile pair uses one column');
    assert.ok(mobile[1].y > mobile[0].y, 'Mobile keeps item order');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'No mobile horizontal overflow');
    assert.ok(await page.locator('.sd-gallery-row').first().evaluate(el => parseFloat(getComputedStyle(el).paddingTop)) < padding, 'Spacing reduces on mobile');
  } finally { await browser.close(); }
  console.log('Gallery browser checks passed: desktop pairing, mobile stacking, spacing and margins.');
  }
} finally {rmSync(dir, {recursive:true, force:true});}
