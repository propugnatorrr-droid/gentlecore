// One-off generator for placeholder catalogue plates (swap real photos later).
// Aims for a styled "studio shot" feel: soft spotlight, floor shadow, grain.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/products");
mkdirSync(out, { recursive: true });

// key -> [brand, model, category, angles, objectTint]
const items = [
  ["mini-kelly", "Hermès", "Mini Kelly II", "bag", 3, "#8fb3c9"],
  ["birkin-touch", "Hermès", "Birkin Touch 25", "bag", 3, "#2b2724"],
  ["constance", "Hermès", "Constance 24", "bag", 2, "#5a2230"],
  ["daydate", "Rolex", "Day-Date 40", "watch", 2, "#caa46a"],
  ["nautilus", "Patek Philippe", "Nautilus 5980R", "watch", 2, "#b98f63"],
  ["birkin-ostrich", "Hermès", "Birkin 30 Ostrich", "bag", 2, "#b9b0a2"],
  ["panthere", "Cartier", "Panthère", "watch", 2, "#cdb06a"],
  ["love-bracelet", "Cartier", "Love Bracelet", "jewel", 2, "#cdb06a"],
  ["alhambra", "Van Cleef & Arpels", "Vintage Alhambra", "jewel", 2, "#cdb06a"],
  ["chanel-flap", "Chanel", "Classic Flap", "bag", 2, "#1c1a18"],
  ["kelly-pochette", "Hermès", "Kelly Pochette", "bag", 2, "#e7c3cb"],
  ["royal-oak", "Audemars Piguet", "Royal Oak 41", "watch", 2, "#3a4a63"],
];

const grounds = [
  ["#f6efe3", "#e7dac6"],
  ["#f3ebdd", "#e3d4be"],
  ["#f7f1e8", "#ead9c2"],
  ["#f1e8da", "#dfceb4"],
];

const gold = "#b89b5e";

// ── object renderers, centred near (300, 350) ──────────────────
function bag(tint) {
  return `
  <g>
    <ellipse cx="300" cy="510" rx="150" ry="20" fill="rgba(20,16,10,0.18)" filter="url(#soft)"/>
    <path d="M196 360 q104 -96 208 0 v118 a14 14 0 0 1 -14 14 H210 a14 14 0 0 1 -14 -14 Z" fill="${tint}" opacity="0.92"/>
    <path d="M196 360 q104 -96 208 0" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
    <path d="M218 360 v-8 q82 -74 164 0 v8" fill="none" stroke="${tint}" stroke-width="10" stroke-linecap="round" opacity="0.92"/>
    <path d="M222 360 q78 -68 156 0" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1"/>
    <rect x="276" y="350" width="48" height="40" rx="6" fill="none" stroke="${gold}" stroke-width="2.5"/>
    <circle cx="300" cy="370" r="7" fill="none" stroke="${gold}" stroke-width="2.5"/>
    <line x1="210" y1="392" x2="390" y2="392" stroke="rgba(0,0,0,0.10)" stroke-width="1"/>
    <line x1="210" y1="470" x2="390" y2="470" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
  </g>`;
}

function watch(tint) {
  const cx = 300, cy = 360;
  let ticks = "";
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const x1 = cx + Math.sin(a) * 96, y1 = cy - Math.cos(a) * 96;
    const x2 = cx + Math.sin(a) * 106, y2 = cy - Math.cos(a) * 106;
    ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(20,16,10,0.5)" stroke-width="2"/>`;
  }
  return `
  <g>
    <ellipse cx="${cx}" cy="${cy + 150}" rx="120" ry="16" fill="rgba(20,16,10,0.16)" filter="url(#soft)"/>
    <rect x="${cx - 26}" y="${cy - 168}" width="52" height="60" rx="10" fill="${tint}" opacity="0.55"/>
    <rect x="${cx - 26}" y="${cy + 108}" width="52" height="60" rx="10" fill="${tint}" opacity="0.55"/>
    <circle cx="${cx}" cy="${cy}" r="120" fill="${tint}" opacity="0.16"/>
    <circle cx="${cx}" cy="${cy}" r="118" fill="none" stroke="${gold}" stroke-width="6"/>
    <circle cx="${cx}" cy="${cy}" r="100" fill="#f7f1e8"/>
    ${ticks}
    <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - 64}" stroke="#141008" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="${cx}" y1="${cy}" x2="${cx + 44}" y2="${cy + 22}" stroke="#141008" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="5" fill="#141008"/>
    <rect x="${cx + 60}" y="${cy - 8}" width="26" height="16" rx="2" fill="none" stroke="rgba(20,16,10,0.45)"/>
    <circle cx="${cx + 122}" cy="${cy}" r="8" fill="${gold}"/>
  </g>`;
}

function jewel(tint) {
  const cx = 300, cy = 350;
  return `
  <g>
    <ellipse cx="${cx}" cy="${cy + 150}" rx="150" ry="16" fill="rgba(20,16,10,0.12)" filter="url(#soft)"/>
    <path d="M150 ${cy - 40} Q300 ${cy + 170} 450 ${cy - 40}" fill="none" stroke="${gold}" stroke-width="4"/>
    <path d="M150 ${cy - 40} Q300 ${cy + 160} 450 ${cy - 40}" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    ${[170, 230, 300, 370, 430].map((x, i) => {
      const y = cy - 40 + [70, 118, 138, 118, 70][i];
      return `<g transform="translate(${x} ${y})">
        <path d="M0 -16 L16 0 L0 16 L-16 0 Z" fill="${tint}" stroke="${gold}" stroke-width="2"/>
        <circle r="4" fill="rgba(255,255,255,0.4)"/>
      </g>`;
    }).join("")}
  </g>`;
}

function object(cat, tint) {
  if (cat === "watch") return watch(tint);
  if (cat === "jewel") return jewel(tint);
  return bag(tint);
}

function plate(brand, model, cat, idx, seed, tint) {
  const [g0, g1] = grounds[seed % grounds.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${g0}"/>
      <stop offset="1" stop-color="${g1}"/>
    </linearGradient>
    <radialGradient id="spot" cx="50%" cy="40%" r="55%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="0.6" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.10"/>
    </radialGradient>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="600" height="750" fill="url(#bg)"/>
  <rect width="600" height="750" fill="url(#spot)"/>
  ${object(cat, tint)}
  <rect width="600" height="750" filter="url(#grain)" opacity="0.05"/>
  <rect x="22" y="22" width="556" height="706" fill="none" stroke="rgba(20,16,10,0.10)"/>
  <text x="300" y="92" text-anchor="middle" font-family="Inter, Helvetica, sans-serif" font-size="12" letter-spacing="6" fill="rgba(20,16,10,0.45)">${brand.toUpperCase()}</text>
  <text x="300" y="650" text-anchor="middle" font-family="Georgia, 'Cormorant Garamond', serif" font-size="31" fill="#1a1816">${model}</text>
  <text x="300" y="684" text-anchor="middle" font-family="Inter, Helvetica, sans-serif" font-size="9.5" letter-spacing="5" fill="${gold}">N° ${String(idx).padStart(2, "0")} · GENTLE OUTLET</text>
</svg>`;
}

let count = 0;
items.forEach(([key, brand, model, cat, n, tint], s) => {
  for (let i = 1; i <= n; i++) {
    writeFileSync(resolve(out, `${key}-${i}.svg`), plate(brand, model, cat, i, s, tint));
    count++;
  }
});

// Hero plate (portrait, editorial) — centred composition.
writeFileSync(
  resolve(out, "hero.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1130" viewBox="0 0 900 1130">
  <defs>
    <linearGradient id="hb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4ecdf"/><stop offset="1" stop-color="#e1d0b8"/></linearGradient>
    <radialGradient id="hs" cx="50%" cy="40%" r="56%"><stop offset="0" stop-color="#fff" stop-opacity="0.62"/><stop offset="0.58" stop-color="#fff" stop-opacity="0.05"/><stop offset="1" stop-color="#000" stop-opacity="0.13"/></radialGradient>
    <filter id="hsoft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>
    <filter id="hgrain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>
  <rect width="900" height="1130" fill="url(#hb)"/>
  <rect width="900" height="1130" fill="url(#hs)"/>
  <text x="450" y="150" text-anchor="middle" font-family="Inter, sans-serif" font-size="15" letter-spacing="9" fill="rgba(20,16,10,0.42)">HERMÈS · PRIVATE PREVIEW</text>
  <!-- centred handbag, gently scaled -->
  <g transform="translate(450 560) scale(1.9)">
    <ellipse cx="0" cy="118" rx="168" ry="22" fill="rgba(20,16,10,0.16)" filter="url(#hsoft)"/>
    <path d="M-108 -36 q108 -100 216 0 v118 a16 16 0 0 1 -16 16 H-92 a16 16 0 0 1 -16 -16 Z" fill="#ccb89b"/>
    <path d="M-108 -36 q108 -100 216 0" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
    <path d="M-86 -36 v-8 q86 -78 172 0 v8" fill="none" stroke="#ccb89b" stroke-width="11" stroke-linecap="round"/>
    <path d="M-82 -36 q82 -72 164 0" fill="none" stroke="rgba(0,0,0,0.16)" stroke-width="1"/>
    <rect x="-26" y="-46" width="52" height="44" rx="7" fill="none" stroke="#b89b5e" stroke-width="3"/>
    <circle cx="0" cy="-24" r="8" fill="none" stroke="#b89b5e" stroke-width="3"/>
    <line x1="-92" y1="-2" x2="92" y2="-2" stroke="rgba(0,0,0,0.10)" stroke-width="1"/>
    <line x1="-92" y1="84" x2="92" y2="84" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  </g>
  <rect width="900" height="1130" filter="url(#hgrain)" opacity="0.05"/>
  <rect x="40" y="40" width="820" height="1050" fill="none" stroke="rgba(20,16,10,0.12)"/>
  <text x="450" y="1006" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" letter-spacing="6" fill="#9a7f47">N° 01 · GENTLE OUTLET</text>
</svg>`
);
count++;

// Open Graph cover
const ogDir = resolve(__dirname, "../public/og");
mkdirSync(ogDir, { recursive: true });
writeFileSync(
  resolve(ogDir, "cover.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="o" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f1e8"/><stop offset="1" stop-color="#ece0cd"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#o)"/>
  <rect x="44" y="44" width="1112" height="542" fill="none" stroke="rgba(20,16,10,0.16)"/>
  <text x="600" y="288" text-anchor="middle" font-family="Georgia, serif" font-size="80" letter-spacing="10" fill="#1a1816">GENTLE OUTLET</text>
  <text x="600" y="340" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" letter-spacing="6" fill="#9a7f47">PRIVATE LUXURY RESALE HOUSE — DUBAI</text>
</svg>`
);

console.log(`Generated ${count} plates + OG cover.`);
