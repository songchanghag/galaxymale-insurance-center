const fs = require("fs");
const path = require("path");
const vm = require("vm");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "public", "assets", "js", "data.js");
const outArticles = path.join(root, "public", "assets", "images", "articles");
const outColumns = path.join(root, "public", "assets", "images", "columns");

fs.mkdirSync(outArticles, { recursive: true });
fs.mkdirSync(outColumns, { recursive: true });

const code = fs.readFileSync(dataPath, "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(code, ctx);

const palettes = {
  ai: ["#071526", "#0f62fe", "#38bdf8", "#dff7ff"],
  smartphone: ["#111827", "#2563eb", "#22c55e", "#e0f2fe"],
  pc: ["#101828", "#7c3aed", "#f472b6", "#eef2ff"],
  internet: ["#06111f", "#0ea5e9", "#14b8a6", "#ecfeff"],
  gadget: ["#1f1b2e", "#8b5cf6", "#f59e0b", "#fff7ed"],
  column: ["#0f172a", "#0f62fe", "#f97316", "#f8fafc"]
};

function esc(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function hash(value) {
  return Array.from(value).reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
}

function icon(category, seed) {
  const n = hash(seed) % 5;
  if (category === "ai") {
    return `
      <circle cx="650" cy="315" r="128" fill="none" stroke="rgba(255,255,255,.32)" stroke-width="3"/>
      ${Array.from({ length: 16 }).map((_, i) => {
        const a = (Math.PI * 2 * i) / 16;
        const x = 650 + Math.cos(a) * (94 + (i % 3) * 18);
        const y = 315 + Math.sin(a) * (76 + (i % 4) * 12);
        return `<line x1="650" y1="315" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,.22)" stroke-width="2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${5 + (i % 3)}" fill="rgba(255,255,255,.82)"/>`;
      }).join("")}
      <path d="M596 302c0-42 34-76 76-76 36 0 66 25 74 58 29 6 50 31 50 62 0 35-29 64-64 64H608c-33 0-60-27-60-60 0-24 14-45 34-55 5-2 9-4 14-5z" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.48)" stroke-width="3"/>
      <rect x="245" y="350" width="220" height="132" rx="18" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.34)"/>
      <rect x="270" y="376" width="170" height="18" rx="9" fill="rgba(255,255,255,.55)"/>
      <rect x="270" y="410" width="${120 + n * 10}" height="14" rx="7" fill="rgba(56,189,248,.72)"/>`;
  }
  if (category === "smartphone") {
    return `
      <rect x="520" y="120" width="178" height="360" rx="38" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.42)" stroke-width="4"/>
      <rect x="545" y="166" width="128" height="250" rx="22" fill="rgba(255,255,255,.08)"/>
      <circle cx="610" cy="440" r="14" fill="rgba(255,255,255,.62)"/>
      <path d="M760 250c52 40 52 104 0 144M800 220c84 64 84 158 0 222" fill="none" stroke="rgba(34,197,94,.7)" stroke-width="16" stroke-linecap="round"/>
      <rect x="250" y="325" width="130" height="90" rx="18" fill="rgba(255,255,255,.18)"/>
      <circle cx="280" cy="354" r="13" fill="rgba(255,255,255,.72)"/>
      <circle cx="322" cy="354" r="13" fill="rgba(255,255,255,.44)"/>
      <circle cx="340" cy="390" r="14" fill="rgba(255,255,255,.34)"/>`;
  }
  if (category === "pc") {
    return `
      <rect x="245" y="180" width="340" height="215" rx="18" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.38)" stroke-width="4"/>
      <rect x="282" y="220" width="266" height="136" rx="8" fill="rgba(15,23,42,.42)"/>
      <path d="M380 410h70l18 52H362z" fill="rgba(255,255,255,.22)"/>
      <rect x="330" y="462" width="190" height="22" rx="11" fill="rgba(255,255,255,.22)"/>
      <rect x="690" y="190" width="185" height="276" rx="24" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.34)" stroke-width="3"/>
      ${Array.from({ length: 5 }).map((_, i) => `<rect x="720" y="${225 + i * 42}" width="${96 + (i % 3) * 18}" height="13" rx="6" fill="rgba(255,255,255,${.72 - i * .08})"/>`).join("")}
      <circle cx="790" cy="420" r="18" fill="rgba(244,114,182,.75)"/>`;
  }
  if (category === "internet") {
    return `
      <path d="M600 160l205 76v112c0 112-78 172-205 220-127-48-205-108-205-220V236z" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.4)" stroke-width="4"/>
      <rect x="540" y="306" width="122" height="96" rx="16" fill="rgba(255,255,255,.22)"/>
      <path d="M565 306v-35c0-43 70-43 70 0v35" fill="none" stroke="rgba(255,255,255,.72)" stroke-width="14" stroke-linecap="round"/>
      <circle cx="601" cy="350" r="12" fill="#0f172a"/>
      ${Array.from({ length: 18 }).map((_, i) => {
        const x = 190 + ((i * 67) % 820);
        const y = 145 + ((i * 91) % 370);
        return `<circle cx="${x}" cy="${y}" r="${4 + (i % 4)}" fill="rgba(236,254,255,.7)"/>`;
      }).join("")}`;
  }
  return `
    <rect x="238" y="270" width="182" height="124" rx="42" fill="rgba(255,255,255,.17)" stroke="rgba(255,255,255,.36)" stroke-width="4"/>
    <circle cx="292" cy="332" r="34" fill="rgba(255,255,255,.28)"/>
    <circle cx="365" cy="332" r="34" fill="rgba(255,255,255,.42)"/>
    <rect x="535" y="170" width="170" height="300" rx="34" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.36)" stroke-width="4"/>
    <circle cx="620" cy="430" r="12" fill="rgba(255,255,255,.62)"/>
    <rect x="790" y="220" width="150" height="220" rx="28" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.32)" stroke-width="3"/>
    <path d="M260 492c180-120 370-120 680-20" fill="none" stroke="rgba(255,255,255,.34)" stroke-width="4"/>`;
}

function svgFor(item, type, index) {
  const category = type === "column" ? "column" : item.category;
  const [bg, c1, c2, paper] = palettes[category] || palettes.column;
  const seed = `${item.slug}-${index}`;
  const h = hash(seed);
  const title = esc(item.title);
  const label = esc(type === "column" ? "COLUMN" : item.categoryName || category);
  const subtitle = esc(item.subtitle || item.excerpt || "GalaxyMale");
  const shortTitle = title.length > 31 ? `${title.slice(0, 31)}...` : title;
  const shortSub = subtitle.length > 46 ? `${subtitle.slice(0, 46)}...` : subtitle;
  const angle = 20 + (h % 35);
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${bg}"/>
        <stop offset=".56" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <radialGradient id="glow" cx=".72" cy=".28" r=".62">
        <stop offset="0" stop-color="rgba(255,255,255,.42)"/>
        <stop offset="1" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
      <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#020617" flood-opacity=".28"/></filter>
    </defs>
    <rect width="1200" height="675" fill="url(#bg)"/>
    <rect width="1200" height="675" fill="url(#glow)"/>
    <g opacity=".24">
      ${Array.from({ length: 9 }).map((_, i) => `<path d="M${-120 + i * 170} 690L${220 + i * 170} -20" stroke="rgba(255,255,255,.55)" stroke-width="${1 + (i % 3)}"/>`).join("")}
      ${Array.from({ length: 42 }).map((_, i) => {
        const x = (h + i * 83) % 1200;
        const y = (h * 3 + i * 47) % 675;
        return `<circle cx="${x}" cy="${y}" r="${2 + (i % 5)}" fill="rgba(255,255,255,.45)"/>`;
      }).join("")}
    </g>
    <g filter="url(#shadow)" transform="rotate(${(h % 2 ? 1 : -1) * angle / 18} 600 330)">
      ${icon(category, seed)}
    </g>
    <rect x="74" y="470" width="790" height="128" rx="26" fill="rgba(15,23,42,.48)" stroke="rgba(255,255,255,.16)"/>
    <text x="104" y="512" font-family="Arial, sans-serif" font-size="26" font-weight="800" fill="${paper}">${label}</text>
    <text x="104" y="555" font-family="Arial, sans-serif" font-size="34" font-weight="900" fill="#ffffff">${shortTitle}</text>
    <text x="104" y="585" font-family="Arial, sans-serif" font-size="19" font-weight="500" fill="rgba(255,255,255,.76)">${shortSub}</text>
    <circle cx="1060" cy="112" r="54" fill="rgba(255,255,255,.92)"/>
    <text x="1060" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="58" font-weight="900" fill="${c1}">G</text>
  </svg>`;
}

async function writeWebp(item, type, index) {
  const dir = type === "column" ? outColumns : outArticles;
  const svg = Buffer.from(svgFor(item, type, index));
  const file = path.join(dir, `${item.slug}.webp`);
  await sharp(svg).webp({ quality: 84 }).toFile(file);
  return file;
}

(async () => {
  for (let i = 0; i < ctx.window.POSTS.length; i += 1) {
    await writeWebp(ctx.window.POSTS[i], "article", i);
  }
  for (let i = 0; i < ctx.window.COLUMNS.length; i += 1) {
    await writeWebp(ctx.window.COLUMNS[i], "column", i);
  }
  console.log(`Generated ${ctx.window.POSTS.length + ctx.window.COLUMNS.length} WebP assets.`);
})();
