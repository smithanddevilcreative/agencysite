import fs from "node:fs";
import path from "node:path";

const routes = [
  ["index.html", "/"],
  ["work.html", "/work"],
  ["studio.html", "/studio"],
  ["services.html", "/services"],
  ["contact.html", "/contact"],
  ["thank-you.html", "/thank-you"],
  ...[
    "allstars-sports-bars","allstars-sports-bowl","draughts","fortune-favours","humbug",
    "levels","mama-bamboo","mighty-adventures","more-concierge","pop-playrooms",
    "precision-microdrives","strike","t2-design-solutions"
  ].map((slug)=>[`work/${slug}.html`, `/work/${slug}`]),
  ...[
    "brand-strategy-design","campaigns-content","digital-web","interiors-environments","themed-experiences"
  ].map((slug)=>[`services/${slug}.html`, `/services/${slug}`]),
];

function outFile(route) {
  if (route === "/") return "out/index.html";
  const clean = route.replace(/^\//, "");
  const candidates = [
    `out/${clean}.html`,
    `out/${clean}/index.html`,
  ];
  const hit = candidates.find(fs.existsSync);
  if (!hit) throw new Error(`No built HTML found for ${route}`);
  return hit;
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
}

function main(html) {
  const start = html.indexOf("<main");
  const end = html.indexOf("</main>");
  if (start < 0 || end < 0) throw new Error("Missing <main>");
  return html.slice(start, end + 7);
}

function textContent(html) {
  return decodeEntities(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<!--([\s\S]*?)-->/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function mediaRefs(html) {
  const refs = [];
  for (const match of html.matchAll(/\b(?:src|poster)="([^"]+)"/g)) {
    const value = decodeEntities(match[1]);
    if (
      value.startsWith("/images/") ||
      value.startsWith("/brand/") ||
      value.startsWith("https://player.vimeo.com/") ||
      value.startsWith("https://skiv.com/")
    ) refs.push(value);
  }
  return refs.sort();
}

const failures = [];

for (const [snapshot, route] of routes) {
  const oldHtml = fs.readFileSync(snapshot, "utf8");
  const newHtml = fs.readFileSync(outFile(route), "utf8");
  const oldMain = main(oldHtml);
  const newMain = main(newHtml);

  const oldText = textContent(oldMain);
  const newText = textContent(newMain);

  if (oldText !== newText) {
    failures.push(`${route}: visible text differs`);
  }

  const oldMedia = JSON.stringify(mediaRefs(oldMain));
  const newMedia = JSON.stringify(mediaRefs(newMain));
  if (oldMedia !== newMedia) {
    failures.push(`${route}: image/video references differ`);
  }
}

if (failures.length) {
  console.error("Recovery parity check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Recovery parity check passed for ${routes.length} routes.`);
