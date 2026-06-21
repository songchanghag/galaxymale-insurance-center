const fs = require("fs");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const site = {
  name: "GalaxyMale",
  url: "https://galaxymale.com",
  description: "AI, 모바일, 컴퓨터, 인터넷 보안, IT기기 정보를 생활 기준으로 정리하는 테크 뉴스 매체",
  email: "info@galaxymale.com",
};

function escapeXml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function stripHtml(value) {
  return String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function rfc822(date) {
  return new Date(`${date}T09:00:00+09:00`).toUTCString();
}

const posts = (ctx.window.POSTS || []).map((post) => ({
  type: "기사",
  title: post.title,
  slug: `/posts/${post.slug}/`,
  date: post.updated || post.date,
  author: post.author,
  category: post.categoryName,
  description: post.subtitle || post.excerpt || stripHtml(post.content).slice(0, 160),
}));

const columns = (ctx.window.COLUMNS || []).map((column) => ({
  type: "칼럼",
  title: column.title,
  slug: `/columns/${column.slug}/`,
  date: column.updated || column.date,
  author: column.author,
  category: "칼럼",
  description: column.subtitle || column.excerpt || stripHtml(column.content).slice(0, 160),
}));

const items = [...posts, ...columns]
  .sort((a, b) => String(b.date).localeCompare(String(a.date)))
  .slice(0, 30);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${site.url}/</link>
    <description>${escapeXml(site.description)}</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${escapeXml(site.email)} (${escapeXml(site.name)})</managingEditor>
    <webMaster>${escapeXml(site.email)} (${escapeXml(site.name)})</webMaster>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${site.url}${item.slug}</link>
      <guid isPermaLink="true">${site.url}${item.slug}</guid>
      <description>${escapeXml(`[${item.type}] ${item.description}`)}</description>
      <category>${escapeXml(item.category)}</category>
      <author>${escapeXml(site.email)} (${escapeXml(item.author)})</author>
      <pubDate>${rfc822(item.date)}</pubDate>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

fs.writeFileSync("public/rss.xml", xml, "utf8");
fs.writeFileSync("public/rss", xml, "utf8");
console.log(`generated rss with ${items.length} items`);
