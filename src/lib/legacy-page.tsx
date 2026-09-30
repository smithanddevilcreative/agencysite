import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

function readSnapshot(file: string) {
  return fs.readFileSync(path.join(process.cwd(), file), "utf8");
}

export function getSnapshotMetadata(file: string): Metadata {
  const html = readSnapshot(file);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]
    ?.replace(/&amp;/g, "&")
    ?.replace(/&#x27;/g, "'");
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]
    ?.replace(/&amp;/g, "&")
    ?.replace(/&#x27;/g, "'");
  return { title, description };
}

export function LegacyPage({ file }: { file: string }) {
  const html = readSnapshot(file);
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const cleaned = body
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<div hidden="">[\s\S]*?<\/div>/i, "");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: cleaned }} />;
}
