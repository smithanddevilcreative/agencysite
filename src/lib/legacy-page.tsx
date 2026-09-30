import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

function readSnapshot(file: string) {
  return fs.readFileSync(path.join(process.cwd(), file), "utf8");
}

function decode(value?: string) {
  return value
    ?.replace(/&amp;/g, "&")
    ?.replace(/&#x27;/g, "'")
    ?.replace(/&quot;/g, '"');
}

export function getSnapshotMetadata(file: string): Metadata {
  const html = readSnapshot(file);
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/i)?.[1]);
  return { title, description };
}

export function LegacyPage({ file }: { file: string }) {
  const html = readSnapshot(file);
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const cleaned = body
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<div hidden="">[\s\S]*?<\/div>/i, "")
    .replace(/<header\b[^>]*>[\s\S]*?<\/header>/i, "")
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/i, "");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: cleaned }} />;
}
