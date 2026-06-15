// One-off generator for placeholder catalogue plates (swap real photos later).
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/products");
mkdirSync(out, { recursive: true });

// key -> [brand, model, category, angles]
const items = [
  ["mini-kelly", "Hermès", "Mini Kelly II", "bag", 3],
  ["birkin-touch", "Hermès", "Birkin Touch 25", "bag", 3],
  ["constance", "Hermès", "Constance 24", "bag", 2],
  ["daydate", "Rolex", "Day-Date 40", "watch", 2],
  ["nautilus", "Patek Philippe", "Nautilus 5980R", "watch", 2],
  ["birkin-ostrich", "Hermès", "Birkin 30 Ostrich", "bag", 2],
  ["panthere", "Cartier", "Panthère", "watch", 2],
  ["love-bracelet", "Cartier", "Love Bracelet", "jewel", 2],
  ["alhambra", "Van Cleef & Arpels", "Vintage Alhambra", "jewel", 2],
  ["chanel-flap", "Chanel", "Classic Flap", "bag", 2],
  ["kelly-pochette", "Hermès", "Kelly Pochette", "bag", 2],
  ["royal-oak", "Audemars Piguet", "Royal Oak 41", "watch", 2],
];

const grounds = ["#f4ece0", "#efe4d4", "#f7f1e8", "#eee2d0"];

// Minimal line motif per category, centred around (300,360).
function motif(cat, i) {
  const cx = 300, cy = 360;
  if (cat === "watch") {
    const r = 132 + i * 4;
    return `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(17,17,17,0.5)" stroke-width="1.2"/>
      <circle cx="${cx}" cy="${cy}" r="${r - 16}" fill="none" stroke="rgba(184,155,94,0.7)" stroke-width="1"/>
      <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - 70}" stroke="rgba(17,17,17,0.7)" stroke-width="2"/>
      <line x1="${cx}" y1="${cy}" x2="${cx + 48}" y2="${cy + 24}" stroke="rgba(17,17,17,0.7)" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="#111"/>
      <rect x="${cx - 14}" y="${cy - r - 26}" width="28" height="22" rx="4" fill="none" stroke="rgba(17,17,17,0.5)"/>`;
  }
  if (cat === "jewel") {
    return `
      <ellipse cx="${cx}" cy="${cy}" rx="${150 + i * 4}" ry="${96 + i * 3}" fill="none" stroke="rgba(17,17,17,0.45)" stroke-width="1.2"/>
      <path d="M${cx - 26} ${cy} l26 -30 l26 30 l-26 30 z" fill="none" stroke="rgba(184,155,94,0.85)" stroke-width="1.4"/>
      <circle cx="${cx}" cy="${cy}" r="6" fill="none" stroke="rgba(17,17,17,0.6)"/>`;
  }
  // bag — abstract Kelly/Birkin silhouette
  return `
    <rect x="${cx - 110}" y="${cy - 60}" width="220" height="150" rx="6" fill="none" stroke="rgba(17,17,17,0.5)" stroke-width="1.2"/>
    <path d="M${cx - 60} ${cy - 60} q60 -70 120 0" fill="none" stroke="rgba(17,17,17,0.45)" stroke-width="1.2"/>
    <rect x="${cx - 18}" y="${cy - 78}" width="36" height="34" rx="4" fill="none" stroke="rgba(184,155,94,0.85)" stroke-width="1.3"/>
    <line x1="${cx - 110}" y1="${cy + 14}" x2="${cx + 110}" y2="${cy + 14}" stroke="rgba(17,17,17,0.2)"/>`;
}

function plate(brand, model, cat, idx, seed) {
  const bg = grounds[seed % grounds.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
  <defs>
    <radialGradient id="v" cx="50%" cy="42%" r="70%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <rect width="600" height="750" fill="${bg}"/>
  <rect width="600" height="750" fill="url(#v)"/>
  <rect x="26" y="26" width="548" height="698" fill="none" stroke="rgba(17,17,17,0.12)"/>
  ${motif(cat, idx)}
  <text x="300" y="120" text-anchor="middle" font-family="Inter, Helvetica, sans-serif" font-size="12" fill="#857c6e" letter-spacing="6">${brand.toUpperCase()}</text>
  <text x="300" y="636" text-anchor="middle" font-family="Georgia, 'Cormorant Garamond', serif" font-size="30" fill="#111111">${model}</text>
  <text x="300" y="670" text-anchor="middle" font-family="Inter, Helvetica, sans-serif" font-size="10" fill="#9a7f47" letter-spacing="5">PLATE ${idx} · GENTLE OUTLET</text>
</svg>`;
}

let count = 0;
items.forEach(([key, brand, model, cat, n], s) => {
  for (let i = 1; i <= n; i++) {
    writeFileSync(resolve(out, `${key}-${i}.svg`), plate(brand, model, cat, i, s));
    count++;
  }
});

// Hero plate (editorial, portrait-ish)
writeFileSync(
  resolve(out, "hero.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100">
  <rect width="900" height="1100" fill="#efe4d4"/>
  <rect width="900" height="1100" fill="url(#hv)"/>
  <defs><radialGradient id="hv" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#fff" stop-opacity="0.4"/><stop offset="1" stop-color="#000" stop-opacity="0.06"/></radialGradient></defs>
  <rect x="40" y="40" width="820" height="1020" fill="none" stroke="rgba(17,17,17,0.14)"/>
  <rect x="300" y="420" width="300" height="210" rx="8" fill="none" stroke="rgba(17,17,17,0.5)" stroke-width="1.4"/>
  <path d="M380 420 q70 -86 140 0" fill="none" stroke="rgba(17,17,17,0.45)" stroke-width="1.4"/>
  <rect x="426" y="398" width="48" height="44" rx="5" fill="none" stroke="rgba(184,155,94,0.9)" stroke-width="1.6"/>
  <text x="450" y="150" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" fill="#857c6e" letter-spacing="8">PRIVATE PREVIEW</text>
  <text x="450" y="790" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#111" letter-spacing="2">GENTLE OUTLET</text>
</svg>`
);
count++;

// Open Graph cover
const ogDir = resolve(__dirname, "../public/og");
mkdirSync(ogDir, { recursive: true });
writeFileSync(
  resolve(ogDir, "cover.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f7f1e8"/>
  <rect x="44" y="44" width="1112" height="542" fill="none" stroke="rgba(17,17,17,0.16)"/>
  <text x="600" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="78" fill="#111" letter-spacing="10">GENTLE OUTLET</text>
  <text x="600" y="340" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" fill="#9a7f47" letter-spacing="6">PRIVATE LUXURY RESALE HOUSE — DUBAI</text>
</svg>`
);

console.log(`Generated ${count} plates + OG cover.`);
