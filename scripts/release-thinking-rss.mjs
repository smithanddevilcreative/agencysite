#!/usr/bin/env node
/**
 * Admit scheduled Thinking articles to the public RSS feed.
 *
 * All articles remain on the website. The RSS route only includes articles
 * with publishedAt, so we add that field on the scheduled release day.
 * This keeps LinkedIn's manual-sharing queue from receiving the archive at once.
 *
 * Safe to run more than once: already released articles are never re-dated.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const schedulePath = resolve("scripts/thinking-rss-schedule.json");
const articlesPath = resolve("src/lib/thinking.ts");
const schedule = JSON.parse(readFileSync(schedulePath, "utf8"));
let source = readFileSync(articlesPath, "utf8");

const startMarker = "export const thinkingArticles: ThinkingArticle[] = [";
const start = source.indexOf(startMarker);
const end = source.indexOf("\n];", start);
if (start < 0 || end < 0) {
  throw new Error("Could not find the Thinking article data array");
}

const existing = JSON.parse(
  "[" + source.slice(start + startMarker.length, end) + "]"
);
const bySlug = new Map(existing.map((article) => [article.slug, article]));
const now = Date.now();
const seen = new Set();
let released = 0;

for (const { slug, releaseAt } of schedule.releases) {
  if (!/^[a-z0-9-]+$/.test(slug) || seen.has(slug)) {
    throw new Error("Invalid or duplicate scheduled article: " + slug);
  }
  seen.add(slug);

  const due = Date.parse(releaseAt);
  if (!Number.isFinite(due) || !/^20\d\d-\d\d-\d\dT\d\d:\d\d:\d\dZ$/.test(releaseAt)) {
    throw new Error("Invalid UTC release date for " + slug);
  }

  const article = bySlug.get(slug);
  if (!article) {
    throw new Error("Scheduled article does not exist: " + slug);
  }

  if (due > now || article.publishedAt) {
    continue;
  }

  const line = new RegExp('(^[ \\t]*"slug":[ \\t]*"' + slug + '",[ \\t]*$)', "m");
  const match = source.match(line);
  if (!match) {
    throw new Error("Could not find article slug field for " + slug);
  }

  const indent = match[1].match(/^[ \\t]*/)[0];
  source = source.replace(line, '$1\\n' + indent + '"publishedAt": "' + releaseAt + '",');
  released++;
  console.log("RSS release: " + slug + " (" + releaseAt + ")");
}

if (released > 0) {
  writeFileSync(articlesPath, source, "utf8");
}
console.log(released ? "Released " + released + " article(s)." : "No Thinking articles due for RSS release.");
