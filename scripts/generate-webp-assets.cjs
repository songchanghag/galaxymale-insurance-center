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

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(dataPath, "utf8"), ctx);

const scenes = {
  "chatgpt-beginners-guide": { bg: ["#061b33", "#246bfe", "#38bdf8"], icon: "meeting", accent: "#90e7ff" },
  "chatgpt-prompt-writing": { bg: ["#160f2e", "#6d28d9", "#f472b6"], icon: "flow", accent: "#f9a8d4" },
  "ai-image-tools-comparison": { bg: ["#122018", "#16a34a", "#facc15"], icon: "canvas", accent: "#bbf7d0" },
  "ai-daily-use-tips": { bg: ["#111827", "#0f766e", "#67e8f9"], icon: "summary", accent: "#99f6e4" },
  "galaxy-vs-iphone-comparison": { bg: ["#0f172a", "#2563eb", "#a855f7"], icon: "phones", accent: "#bfdbfe" },
  "smartphone-battery-tips": { bg: ["#052e16", "#22c55e", "#f97316"], icon: "battery", accent: "#dcfce7" },
  "android-beginner-settings": { bg: ["#111827", "#0891b2", "#22c55e"], icon: "privacy", accent: "#cffafe" },
  "mobile-app-management": { bg: ["#312e81", "#4f46e5", "#fb7185"], icon: "apps", accent: "#ddd6fe" },
  "pc-assembly-beginners": { bg: ["#0f172a", "#334155", "#60a5fa"], icon: "desktop", accent: "#dbeafe" },
  "pc-windows11-setup": { bg: ["#082f49", "#0284c7", "#7dd3fc"], icon: "windows", accent: "#e0f2fe" },
  "pc-storage-guide": { bg: ["#1e1b4b", "#7c3aed", "#f59e0b"], icon: "storage", accent: "#ede9fe" },
  "phishing-prevention-guide": { bg: ["#450a0a", "#dc2626", "#f97316"], icon: "warning", accent: "#fee2e2" },
  "vpn-beginners-guide": { bg: ["#0c1426", "#0f766e", "#38bdf8"], icon: "tunnel", accent: "#ccfbf1" },
  "public-wifi-safety": { bg: ["#172554", "#2563eb", "#22d3ee"], icon: "wifi", accent: "#dbeafe" },
  "internet-security-basics": { bg: ["#020617", "#1d4ed8", "#14b8a6"], icon: "key", accent: "#e0f2fe" },
  "wireless-earbuds-buying-guide": { bg: ["#2e1065", "#8b5cf6", "#f0abfc"], icon: "earbuds", accent: "#fae8ff" },
  "gadget-smartwatch-guide": { bg: ["#431407", "#f97316", "#facc15"], icon: "watch", accent: "#ffedd5" },
  "gadget-tablet-guide": { bg: ["#111827", "#475569", "#c084fc"], icon: "tablet", accent: "#f3e8ff" },
  "ai-digital-literacy": { bg: ["#0f172a", "#0f62fe", "#38bdf8"], icon: "book", accent: "#dff7ff" },
  "smartphone-decade-reflection": { bg: ["#172554", "#2563eb", "#22c55e"], icon: "timeline", accent: "#dcfce7" },
  "tech-purchase-beyond-specs": { bg: ["#1c1917", "#ea580c", "#facc15"], icon: "checklist", accent: "#ffedd5" }
};

function esc(value) {
  return String(value || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function titleLines(text) {
  const words = String(text).split(" ");
  const lines = ["", ""];
  for (const word of words) {
    const target = lines[0].length < 22 ? 0 : 1;
    if ((lines[target] + " " + word).trim().length <= 30) lines[target] = (lines[target] + " " + word).trim();
  }
  return lines.filter(Boolean).map(esc);
}

function iconSvg(kind, accent) {
  const a = accent;
  const white = "rgba(255,255,255,.88)";
  const soft = "rgba(255,255,255,.20)";
  const line = "rgba(255,255,255,.48)";
  const commonNodes = Array.from({ length: 16 }).map((_, i) => `<circle cx="${150 + (i * 67) % 820}" cy="${95 + (i * 89) % 330}" r="${2 + i % 4}" fill="rgba(255,255,255,.42)"/>`).join("");
  const map = {
    meeting: `<rect x="250" y="150" width="320" height="210" rx="22" fill="${soft}" stroke="${line}"/><rect x="285" y="190" width="160" height="18" rx="9" fill="${white}"/><rect x="285" y="232" width="220" height="14" rx="7" fill="${a}"/><circle cx="690" cy="250" r="88" fill="${soft}" stroke="${line}"/><path d="M650 250h80M690 210v80" stroke="${white}" stroke-width="12" stroke-linecap="round"/>`,
    flow: `<path d="M260 170h190v86H260zM520 145h210v110H520zM360 340h260v94H360z" fill="${soft}" stroke="${line}" stroke-width="4"/><path d="M450 210h70M625 255v85M470 340l-55-84" stroke="${a}" stroke-width="12" fill="none" stroke-linecap="round"/><circle cx="450" cy="210" r="12" fill="${white}"/><circle cx="625" cy="255" r="12" fill="${white}"/><circle cx="470" cy="340" r="12" fill="${white}"/>`,
    canvas: `<rect x="250" y="125" width="430" height="280" rx="24" fill="${soft}" stroke="${line}" stroke-width="4"/><circle cx="345" cy="215" r="48" fill="${a}"/><path d="M282 365c70-92 122-110 190-28 34-46 74-58 148 28" fill="none" stroke="${white}" stroke-width="18" stroke-linecap="round"/><rect x="720" y="175" width="70" height="210" rx="35" fill="${white}" opacity=".75"/>`,
    summary: `<rect x="245" y="140" width="360" height="300" rx="22" fill="${soft}" stroke="${line}" stroke-width="4"/><rect x="292" y="190" width="230" height="20" rx="10" fill="${white}"/><rect x="292" y="245" width="270" height="16" rx="8" fill="${a}"/><rect x="292" y="292" width="190" height="16" rx="8" fill="${white}" opacity=".66"/><circle cx="760" cy="265" r="88" fill="${soft}" stroke="${line}"/><path d="M720 265l32 32 70-78" fill="none" stroke="${a}" stroke-width="18" stroke-linecap="round"/>`,
    phones: `<rect x="300" y="120" width="150" height="330" rx="32" fill="${soft}" stroke="${line}" stroke-width="5"/><rect x="570" y="120" width="150" height="330" rx="32" fill="${soft}" stroke="${line}" stroke-width="5"/><circle cx="375" cy="408" r="14" fill="${white}"/><circle cx="645" cy="408" r="14" fill="${white}"/><path d="M490 250h38M490 292h38" stroke="${a}" stroke-width="12" stroke-linecap="round"/>`,
    battery: `<rect x="290" y="205" width="430" height="160" rx="28" fill="${soft}" stroke="${line}" stroke-width="5"/><rect x="720" y="250" width="42" height="70" rx="12" fill="${line}"/><rect x="320" y="235" width="250" height="100" rx="18" fill="${a}"/><path d="M610 238l-50 70h64l-42 82" stroke="${white}" stroke-width="12" fill="none" stroke-linecap="round"/>`,
    privacy: `<path d="M510 120l220 78v126c0 110-83 170-220 218-137-48-220-108-220-218V198z" fill="${soft}" stroke="${line}" stroke-width="5"/><rect x="452" y="292" width="116" height="92" rx="16" fill="${white}" opacity=".75"/><path d="M475 292v-40c0-46 70-46 70 0v40" stroke="${a}" stroke-width="16" fill="none" stroke-linecap="round"/>`,
    apps: `<g fill="${soft}" stroke="${line}" stroke-width="4">${[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${310+c*120}" y="${145+r*105}" width="78" height="78" rx="20"/>`).join("")).join("")}</g><circle cx="690" cy="255" r="84" fill="${a}" opacity=".85"/><path d="M650 255h80M690 215v80" stroke="${white}" stroke-width="14" stroke-linecap="round"/>`,
    desktop: `<rect x="250" y="135" width="440" height="270" rx="20" fill="${soft}" stroke="${line}" stroke-width="5"/><rect x="306" y="190" width="330" height="155" rx="12" fill="rgba(15,23,42,.35)"/><path d="M430 405h80l22 70H408z" fill="${soft}"/><rect x="360" y="470" width="220" height="24" rx="12" fill="${line}"/>`,
    windows: `<path d="M300 150l185-28v170H300zM505 119l215-32v205H505zM300 315h185v170l-185-28zM505 315h215v205l-215-32z" fill="${soft}" stroke="${line}" stroke-width="4"/>`,
    storage: `<rect x="300" y="150" width="420" height="290" rx="36" fill="${soft}" stroke="${line}" stroke-width="5"/><circle cx="372" cy="222" r="30" fill="${a}"/><rect x="430" y="204" width="210" height="16" rx="8" fill="${white}"/><rect x="350" y="300" width="320" height="18" rx="9" fill="${white}" opacity=".55"/><rect x="350" y="350" width="250" height="18" rx="9" fill="${a}"/>`,
    warning: `<path d="M510 120l260 420H250z" fill="${soft}" stroke="${line}" stroke-width="6"/><path d="M510 245v135" stroke="${a}" stroke-width="22" stroke-linecap="round"/><circle cx="510" cy="430" r="16" fill="${white}"/>`,
    tunnel: `<ellipse cx="520" cy="280" rx="230" ry="155" fill="${soft}" stroke="${line}" stroke-width="5"/><ellipse cx="520" cy="280" rx="122" ry="78" fill="rgba(15,23,42,.32)" stroke="${a}" stroke-width="10"/><path d="M275 280H150M890 280H765" stroke="${white}" stroke-width="18" stroke-linecap="round"/>`,
    wifi: `<path d="M300 260c130-110 310-110 440 0M370 330c88-72 212-72 300 0M450 400c42-32 98-32 140 0" fill="none" stroke="${white}" stroke-width="20" stroke-linecap="round"/><circle cx="520" cy="462" r="22" fill="${a}"/>`,
    key: `<circle cx="395" cy="285" r="92" fill="${soft}" stroke="${line}" stroke-width="5"/><circle cx="395" cy="285" r="34" fill="rgba(15,23,42,.32)"/><path d="M487 285h260M650 285v55M720 285v75" stroke="${a}" stroke-width="22" stroke-linecap="round"/>`,
    earbuds: `<path d="M345 190c-62 0-100 50-100 114 0 54 34 90 78 90 32 0 52-22 52-54v-88c0-36-8-62-30-62zM690 190c62 0 100 50 100 114 0 54-34 90-78 90-32 0-52-22-52-54v-88c0-36 8-62 30-62z" fill="${soft}" stroke="${line}" stroke-width="5"/><path d="M375 410v74M660 410v74" stroke="${a}" stroke-width="18" stroke-linecap="round"/>`,
    watch: `<rect x="418" y="170" width="210" height="250" rx="54" fill="${soft}" stroke="${line}" stroke-width="6"/><path d="M464 170v-72h118v72M464 420v72h118v-72" fill="${soft}" stroke="${line}" stroke-width="5"/><circle cx="523" cy="295" r="58" fill="rgba(15,23,42,.32)"/><path d="M523 255v45l38 28" stroke="${a}" stroke-width="12" stroke-linecap="round"/>`,
    tablet: `<rect x="275" y="125" width="510" height="330" rx="34" fill="${soft}" stroke="${line}" stroke-width="6"/><rect x="325" y="178" width="380" height="220" rx="18" fill="rgba(15,23,42,.28)"/><path d="M745 155l70-70M785 195l70-70" stroke="${a}" stroke-width="14" stroke-linecap="round"/>`,
    book: `<path d="M275 160h230c56 0 86 30 86 86v245c0-44-30-70-86-70H275zM591 246c0-56 30-86 86-86h230v261H677c-56 0-86 26-86 70z" fill="${soft}" stroke="${line}" stroke-width="5"/><path d="M330 220h130M330 270h110M680 220h130M680 270h150" stroke="${a}" stroke-width="14" stroke-linecap="round"/>`,
    timeline: `<path d="M230 330h620" stroke="${white}" stroke-width="12" stroke-linecap="round"/><circle cx="310" cy="330" r="42" fill="${a}"/><circle cx="520" cy="330" r="42" fill="${soft}" stroke="${line}" stroke-width="5"/><circle cx="730" cy="330" r="42" fill="${soft}" stroke="${line}" stroke-width="5"/><path d="M310 250v-70M520 410v70M730 250v-70" stroke="${line}" stroke-width="10"/>`,
    checklist: `<rect x="285" y="135" width="470" height="330" rx="28" fill="${soft}" stroke="${line}" stroke-width="5"/><path d="M350 220l28 28 56-68M350 315l28 28 56-68" stroke="${a}" stroke-width="15" fill="none" stroke-linecap="round"/><path d="M480 215h190M480 310h160" stroke="${white}" stroke-width="16" stroke-linecap="round"/>`
  };
  return commonNodes + (map[kind] || map.summary);
}

function svgFor(item, type) {
  const scene = scenes[item.slug] || scenes["chatgpt-beginners-guide"];
  const [bg1, bg2, bg3] = scene.bg;
  const lines = titleLines(item.title);
  const label = type === "column" ? "COLUMN" : item.categoryName;
  const subtitle = esc(item.subtitle || item.excerpt || "GalaxyMale");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${bg1}"/><stop offset=".55" stop-color="${bg2}"/><stop offset="1" stop-color="${bg3}"/></linearGradient><radialGradient id="glow" cx=".72" cy=".18" r=".7"><stop stop-color="rgba(255,255,255,.42)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/></radialGradient><filter id="shadow"><feDropShadow dx="0" dy="22" stdDeviation="26" flood-color="#020617" flood-opacity=".35"/></filter></defs>
    <rect width="1200" height="675" fill="url(#bg)"/><rect width="1200" height="675" fill="url(#glow)"/>
    <g opacity=".22">${Array.from({ length: 10 }).map((_, i) => `<path d="M${-200 + i * 160} 700L${220 + i * 170} -40" stroke="rgba(255,255,255,.55)" stroke-width="${1 + i % 3}"/>`).join("")}</g>
    <g filter="url(#shadow)">${iconSvg(scene.icon, scene.accent)}</g>
    <rect x="72" y="470" width="800" height="128" rx="26" fill="rgba(2,6,23,.52)" stroke="rgba(255,255,255,.16)"/>
    <text x="104" y="510" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="${scene.accent}">${esc(label)}</text>
    ${lines.map((line, i) => `<text x="104" y="${552 + i * 35}" font-family="Arial, sans-serif" font-size="31" font-weight="900" fill="#ffffff">${line}</text>`).join("")}
    <text x="104" y="623" font-family="Arial, sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,.72)">${subtitle.slice(0, 50)}</text>
    <image href="/favicon.svg?v=gm-icon-v2" x="1032" y="72" width="92" height="92"/>
  </svg>`;
}

async function writeWebp(item, type) {
  const file = path.join(type === "column" ? outColumns : outArticles, `${item.slug}.webp`);
  await sharp(Buffer.from(svgFor(item, type))).webp({ quality: 92, effort: 6 }).toFile(file);
}

(async () => {
  for (const item of ctx.window.POSTS) await writeWebp(item, "article");
  for (const item of ctx.window.COLUMNS) await writeWebp(item, "column");
  console.log(`Generated ${ctx.window.POSTS.length + ctx.window.COLUMNS.length} high-quality WebP assets.`);
})();
