import { cp, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";

await mkdir("public", { recursive: true });

for (const dir of ["brand", "images"]) {
  if (existsSync(dir)) await cp(dir, `public/${dir}`, { recursive: true, force: true });
}

if (existsSync("_next/static/media")) await cp("_next/static/media", "public/fonts", { recursive: true, force: true });

for (const file of ["favicon.ico", "favicon.svg", "robots.txt", "sitemap.xml"]) {
  if (existsSync(file)) await copyFile(file, `public/${file}`);
}
