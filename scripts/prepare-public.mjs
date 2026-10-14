import { cp, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";

await mkdir("public", { recursive: true });

for (const dir of ["brand", "images"]) {
  if (existsSync(dir)) await cp(dir, `public/${dir}`, { recursive: true, force: true });
}

if (existsSync("fonts")) await cp("fonts", "public/fonts", { recursive: true, force: true });

for (const file of ["favicon.ico", "favicon.svg", "robots.txt", "sitemap.xml"]) {
  if (existsSync(file)) await copyFile(file, `public/${file}`);
}


const compatibilityCopies = [
  ["images/work/draughts/cards/_dsc8972.jpg", "public/images/work/draughts/cards/_DSC8972.jpg"],
  ["images/work/draughts/cards/_dsc9226.jpg", "public/images/work/draughts/cards/_DSC9226.jpg"],
  ["images/work/allstars-sports-bars/cards/allstars_sports_bar_weston_english-pool-7403993.jpg", "public/images/work/allstars-sports-bars/cards/Allstars_Sports_Bar_Weston_English-Pool-7403993.jpg"],
  ["images/work/allstars-sports-bars/cards/allstars_sports_bar_weston_darts-7403516.jpg", "public/images/work/allstars-sports-bars/cards/Allstars_Sports_Bar_Weston_Darts-7403516.jpg"],
  ["images/work/allstars-sports-bowl/cards/allstars_sports_bowl_weston_families_select-7405901.jpg", "public/images/work/allstars-sports-bowl/cards/Allstars_Sports_Bowl_Weston_Families_Select-7405901.jpg"],
  ["images/work/allstars-sports-bowl/cards/allstars_sports_bowl_weston_families_select-7405751.jpg", "public/images/work/allstars-sports-bowl/cards/Allstars_Sports_Bowl_Weston_Families_Select-7405751.jpg"],
];

for (const [source, target] of compatibilityCopies) {
  if (!existsSync(source)) continue;
  await mkdir(target.slice(0, target.lastIndexOf("/")), { recursive: true });
  await copyFile(source, target);
}


const pixel404Parts = [
  "scripts/assets/404-art-00.txt",
  "scripts/assets/404-art-01.txt",
  "scripts/assets/404-art-02.txt",
  "scripts/assets/404-art-03.txt",
  "scripts/assets/404-art-04.txt",
];

if (pixel404Parts.every((part) => existsSync(part))) {
  const { readFile, writeFile } = await import("node:fs/promises");
  const encoded = (await Promise.all(pixel404Parts.map((part) => readFile(part, "utf8")))).join("");
  await mkdir("public/brand", { recursive: true });
  await writeFile("public/brand/404-approved-art.webp", Buffer.from(encoded, "base64"));
}
