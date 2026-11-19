import { thinkingArticles } from "@/lib/thinking";

/**
 * The site uses a static Next.js export, so this endpoint is built as
 * /rss.xml during deployment and needs no server or extra service.
 *
 * Only articles with a publishedAt date are syndicated. This prevents
 * older, previously undated pieces being treated as newly published
 * when the feed is first connected to LinkedIn.
 */
export const dynamic = "force-static";

const siteUrl = "https://smithanddevil.com";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = thinkingArticles
    .filter((article) => article.publishedAt && !Number.isNaN(Date.parse(article.publishedAt)))
    .sort((a, b) => Date.parse(b.publishedAt!) - Date.parse(a.publishedAt!));

  const items = entries.map((article) => {
    const url = `${siteUrl}/thinking/${article.slug}/`;
    const imageUrl = new URL(article.heroImage.src, siteUrl).toString();
    const imageMime = /\.webp(?:$|\?)/i.test(imageUrl) ? "image/webp"
      : /\.png(?:$|\?)/i.test(imageUrl) ? "image/png" : "image/jpeg";

    return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(article.publishedAt!).toUTCString()}</pubDate>
      <description>${escapeXml(article.standfirst)}</description>
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="${imageMime}" />
    </item>`;
  }).join("\n");

  const lastBuildDate = entries[0]?.publishedAt
    ? `    <lastBuildDate>${new Date(entries[0].publishedAt).toUTCString()}</lastBuildDate>\n`
    : "";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Smith &amp; Devil — Thinking</title>
    <link>${siteUrl}/thinking/</link>
    <description>Creative strategy, brand and experience design thinking from Smith &amp; Devil.</description>
    <language>en-gb</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${lastBuildDate}${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
