import { chromium } from "playwright";
import fs from "node:fs";

const base = "http://127.0.0.1:4173";
const routes = ["/", "/work", "/studio", "/services", "/contact", "/services/themed-experiences", "/work/humbug"];
const viewports = [
  { name: "desktop", width: 1440, height: 1200 },
  { name: "mobile", width: 390, height: 844 },
];

fs.mkdirSync("qa-screenshots", { recursive: true });

const browser = await chromium.launch();
const failures = [];

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();

  page.on("pageerror", (error) => failures.push(`${viewport.name}: pageerror: ${error.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") failures.push(`${viewport.name}: console error: ${msg.text()}`);
  });

  for (const route of routes) {
    const response = await page.goto(base + route, { waitUntil: "networkidle" });
    if (!response || !response.ok()) {
      failures.push(`${viewport.name} ${route}: HTTP ${response?.status() ?? "no response"}`);
      continue;
    }

    const main = await page.locator("main").count();
    if (!main) failures.push(`${viewport.name} ${route}: missing main`);

    const safe = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
    await page.screenshot({
      path: `qa-screenshots/${viewport.name}-${safe}.png`,
      fullPage: true,
    });
  }

  await page.goto(base + "/", { waitUntil: "networkidle" });

  const menuButton = page.getByRole("button", { name: /menu|close/i });
  await menuButton.click();
  if (!(await page.getByRole("navigation", { name: "Primary" }).isVisible())) {
    failures.push(`${viewport.name}: primary menu did not open`);
  }
  await menuButton.click();

  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.8));
  await page.waitForTimeout(700);
  const orbitCards = page.locator('a[aria-label="Humbug"], a[aria-label="Pop Playrooms"], a[aria-label="Mighty Adventures"]');
  if ((await orbitCards.count()) < 3) failures.push(`${viewport.name}: homepage orbit cards missing`);

  await context.close();
}

await browser.close();

if (failures.length) {
  console.error("Browser QA failed:");
  for (const failure of failures) console.error("- " + failure);
  process.exit(1);
}

console.log("Browser QA passed at desktop and mobile breakpoints.");
