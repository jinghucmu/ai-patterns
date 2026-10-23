// Builds the site from content/ into docs/ (served by GitHub Pages).
// Usage: node src/build.mjs            -> published content only
//        node src/build.mjs --drafts   -> also includes content/_drafts (local preview in preview/; never commit that output)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import * as yaml from "js-yaml";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content");
const DRAFTS = process.argv.includes("--drafts");
const OUT = path.join(ROOT, DRAFTS ? "preview" : "docs");

const site = JSON.parse(fs.readFileSync(path.join(CONTENT, "site.json"), "utf8"));
const themeBySlug = Object.fromEntries(site.themes.map((t) => [t.slug, t]));
const stageIds = site.stages.map((s) => s.id);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const problems = [];
const warn = (m) => problems.push(m);

// ---------- helpers ----------

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const md = (s) => marked.parse(String(s ?? ""));
const isoDate = (d) => (!d ? "" : d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
function fmtDate(d) {
  if (!d) return "";
  const [y, m, day] = isoDate(d).split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[m - 1]} ${day}, ${y}`;
}
const list = (items) => (items.length <= 1 ? items.join("") : items.slice(0, -1).join(", ") + " and " + items[items.length - 1]);

function readEntries(dir) {
  const dirs = [path.join(CONTENT, dir)];
  if (DRAFTS) dirs.push(path.join(CONTENT, "_drafts", dir));
  const out = [];
  for (const d of dirs) {
    if (!fs.existsSync(d)) continue;
    for (const file of fs.readdirSync(d).filter((f) => f.endsWith(".md")).sort()) {
      const raw = fs.readFileSync(path.join(d, file), "utf8");
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      if (!m) {
        warn(`${dir}/${file}: missing front matter`);
        continue;
      }
      out.push({ file, slug: file.replace(/\.md$/, ""), data: yaml.load(m[1]) || {}, body: m[2] });
    }
  }
  return out;
}

// ---------- images ----------

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  warn("sharp is not installed: screenshots are copied without resizing");
}

async function processShot(slug, file) {
  const candidates = [path.join(CONTENT, "shots", slug, file)];
  if (DRAFTS) candidates.push(path.join(CONTENT, "_drafts", "shots", slug, file));
  const src = candidates.find((c) => fs.existsSync(c));
  if (!src) {
    warn(`screenshot not found: shots/${slug}/${file}`);
    return null;
  }
  const outDir = path.join(OUT, "shots", slug);
  fs.mkdirSync(outDir, { recursive: true });
  const base = file.replace(/\.[^.]+$/, "");
  if (sharp && !/\.(gif|svg)$/i.test(file)) {
    const img = sharp(src).rotate();
    const meta = await img.metadata();
    const info = await img.resize({ width: Math.min(meta.width || 1600, 1600), withoutEnlargement: true }).webp({ quality: 84, alphaQuality: 90 }).toFile(path.join(outDir, `${base}.webp`));
    return { path: `shots/${slug}/${base}.webp`, width: info.width, height: info.height };
  }
  fs.copyFileSync(src, path.join(outDir, file));
  return { path: `shots/${slug}/${file}`, width: null, height: null };
}

// ---------- load patterns ----------

const patterns = [];
for (const e of readEntries("patterns")) {
  const d = e.data;
  if (!d.title) warn(`patterns/${e.file}: no title`);
  if (!d.summary) warn(`patterns/${e.file}: no summary`);
  const themes = (d.themes || []).filter((t) => {
    if (!themeBySlug[t]) warn(`patterns/${e.file}: unknown theme "${t}"`);
    return themeBySlug[t];
  });
  if (!themes.length) warn(`patterns/${e.file}: no theme`);
  const stages = (d.stages || []).filter((s) => {
    if (!stageIds.includes(s)) warn(`patterns/${e.file}: unknown stage "${s}"`);
    return stageIds.includes(s);
  });
  for (const s of d.sources || []) if (!site.sources[s]) warn(`patterns/${e.file}: unknown source "${s}"`);
  const shots = [];
  for (const s of d.shots || []) {
    if (!s.alt || !String(s.alt).trim()) warn(`patterns/${e.file}: screenshot ${s.file} has no alt text`);
    const img = await processShot(e.slug, s.file);
    if (img) shots.push({ ...s, img });
  }
  patterns.push({ ...d, slug: e.slug, themes, stages, shots, body: e.body });
}
const bySlug = Object.fromEntries(patterns.map((p) => [p.slug, p]));
for (const p of patterns) {
  p.related = (p.related || []).filter((r) => {
    if (!bySlug[r]) warn(`patterns/${p.slug}.md: related pattern "${r}" does not exist`);
    return bySlug[r];
  });
}
// Reading order: `order` in the front matter (lower first), then newest, then title.
patterns.sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || isoDate(b.added).localeCompare(isoDate(a.added)) || a.title.localeCompare(b.title));

// ---------- fragments ----------

function flowStrip(stages, r, { compact = false } = {}) {
  // The four stages of the flow; the ones this pattern serves are marked. Order is a real sequence, so it is shown as one.
  const items = site.stages
    .map((s) => {
      const on = stages.includes(s.id);
      return `<li${on ? ' class="on"' : ""}><span class="flow-name">${esc(s.name)}</span>${compact ? "" : `<span class="flow-text">${esc(s.text)}</span>`}</li>`;
    })
    .join("");
  const served = site.stages.filter((s) => stages.includes(s.id)).map((s) => s.name);
  const label = served.length ? `Serves ${list(served)} in the flow ask, answer, check, decide` : "Flow: ask, answer, check, decide";
  return `<ol class="flow${compact ? " flow-compact" : ""}" aria-label="${esc(label)}">${items}</ol>`;
}

function themeTags(themes, r) {
  return `<ul class="tags" aria-label="Themes">${themes.map((t) => `<li><a href="${r}themes/${t}/">${esc(themeBySlug[t].name)}</a></li>`).join("")}</ul>`;
}

function patternRow(p, r) {
  return `<li class="pattern-row" data-themes="${esc(p.themes.join(" "))}">
  <div class="pattern-row-main">
    <h3><a href="${r}patterns/${p.slug}/">${esc(p.title)}</a></h3>
    <p>${esc(p.summary)}</p>
    <p class="pattern-from">From ${esc(p.example)}</p>
  </div>
  <div class="pattern-row-side">${flowStrip(p.stages, r, { compact: true })}${themeTags(p.themes, r)}</div>
</li>`;
}

function patternList(items, r, { filter = false } = {}) {
  const bar = filter
    ? `<div class="filter" data-filter="themes" role="group" aria-label="Filter by theme">
  <button type="button" data-value="" aria-pressed="true">All themes</button>
  ${site.themes.map((t) => `<button type="button" data-value="${t.slug}" aria-pressed="false">${esc(t.name)}</button>`).join("\n  ")}
</div>`
    : "";
  return `${bar}<ol class="pattern-list" data-filter-target>${items.map((p) => patternRow(p, r)).join("\n")}</ol><p class="filter-empty" hidden>No patterns in this theme yet.</p>`;
}

// ---------- layout ----------

function page({ depth, title, description, current, body, pathFromRoot }) {
  const r = depth === 0 ? "" : "../".repeat(depth);
  const full = title ? `${title} | ${site.title}` : site.title;
  const canonical = site.url + (pathFromRoot || "");
  const nav = [
    ["patterns/", "Patterns", "patterns"],
    ["method/", "Method", "method"],
    ["about/", "About", "about"],
  ]
    .map(([href, label, id]) => `<a href="${r}${href}"${current === id ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(description || site.description)}">
<meta name="author" content="${esc(site.author)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:title" content="${esc(full)}">
<meta property="og:description" content="${esc(description || site.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(canonical)}">
<link rel="icon" href="${r}assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="${r}assets/fonts/bricolage-grotesque-latin-standard-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${r}assets/styles.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-row">
    <a class="brand" href="${r || "./"}"><span class="brand-title">${esc(site.title)}</span></a>
    <nav aria-label="Main">${nav}</nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap footer-row">
    <p>© ${new Date().getFullYear()} ${esc(site.author)}</p>
    <p>You are free to apply any pattern here in your own product.</p>
  </div>
</footer>
<script src="${r}assets/site.js" defer></script>
</body>
</html>
`;
}

function write(rel, html) {
  const file = path.join(OUT, rel, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

// ---------- pages ----------

// Home
{
  const r = "";
  const themes = site.themes
    .map((t) => {
      const n = patterns.filter((p) => p.themes.includes(t.slug)).length;
      return `<li>
  <h3><a href="themes/${t.slug}/">${esc(t.name)}</a></h3>
  <p>${esc(t.lede)}</p>
  <p class="count">${n === 0 ? "No patterns yet" : n === 1 ? "1 pattern" : `${n} patterns`}</p>
</li>`;
    })
    .join("\n");
  const updates = site.updates.map((u) => `<li><time datetime="${esc(u.date)}">${fmtDate(u.date)}</time><p>${esc(u.text)}</p></li>`).join("");
  const body = `
<section class="hero wrap">
  <h1>The model sets what AI can do. Design decides what people get from it.</h1>
</section>
<section class="wrap wrap-wide">
  <h2 class="flow-heading">The flow every pattern serves</h2>
  ${flowStrip([], r)}
</section>
<section class="wrap section">
  <h2>Patterns</h2>
  ${patternList(patterns, r)}
</section>
<section class="wrap section">
  <h2>Themes</h2>
  <p class="section-lede">Most patterns sit in more than one.</p>
  <ul class="themes">
${themes}
  </ul>
</section>
<section class="wrap section">
  <h2>Updates</h2>
  <ul class="updates">${updates}</ul>
</section>`;
  write("", page({ depth: 0, body, pathFromRoot: "" }));
}

// Patterns index
{
  const body = `
<section class="wrap page-head">
  <h1>Patterns</h1>
  <p class="lede">${patterns.length} patterns, each from a product I designed. Filter by theme, or read them in order.</p>
</section>
<section class="wrap section">
  ${patternList(patterns, "../", { filter: true })}
</section>`;
  write("patterns", page({ depth: 1, title: "Patterns", description: "All design patterns on the site, by theme.", current: "patterns", body, pathFromRoot: "patterns/" }));
}

// One page per pattern
for (const p of patterns) {
  const r = "../../";
  const shots = p.shots.length
    ? `<div class="shots">${p.shots
        .map((s) => {
          const dims = s.img.width ? ` width="${s.img.width}" height="${s.img.height}"` : "";
          const wide = s.img.width && s.img.width > s.img.height;
          return `<figure${wide ? ' class="wide"' : ""}><img src="${r}${s.img.path}" alt="${esc(s.alt)}"${dims} loading="lazy">${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ""}</figure>`;
        })
        .join("")}</div>`
    : "";
  const related = p.related.length
    ? `<section class="related">
  <h2>Related patterns</h2>
  <ul>${p.related.map((s) => `<li><a href="../${s}/">${esc(bySlug[s].title)}</a><span>${esc(bySlug[s].summary)}</span></li>`).join("")}</ul>
</section>`
    : "";
  const sources = (p.sources || [])
    .filter((s) => site.sources[s])
    .map((s) => {
      const src = site.sources[s];
      return `<li>${esc(src.title)}. ${esc(src.publisher)}, ${fmtDate(src.date)}, in ${esc(src.language)}: ${src.links.map((l) => `<a href="${esc(l.url)}" rel="noopener">${esc(l.label)}</a>`).join(", ")}.</li>`;
    })
    .join("");
  const body = `
<article class="pattern">
  <header class="wrap page-head">
    <p class="crumb"><a href="${r}patterns/">Patterns</a></p>
    <h1>${esc(p.title)}</h1>
    <p class="lede">${esc(p.summary)}</p>
    <dl class="meta">
      <div><dt>From</dt><dd>${esc(p.example)}${p.where ? `, ${esc(p.where)}` : ""}</dd></div>
      <div><dt>Themes</dt><dd>${themeTags(p.themes, r)}</dd></div>
      <div><dt>Added</dt><dd><time datetime="${esc(isoDate(p.added))}">${fmtDate(p.added)}</time></dd></div>
    </dl>
  </header>
  <div class="wrap wrap-wide">
    <h2 class="flow-heading">Where it sits in the flow</h2>
    ${flowStrip(p.stages, r)}
  </div>
  <div class="wrap prose">
    ${md(p.body)}
    ${shots ? `<h2 class="shots-heading">In pictures</h2>${shots}` : ""}
  </div>
  <div class="wrap">
    ${related}
    ${sources ? `<section class="sources"><h2>Also written about in</h2><ul>${sources}</ul></section>` : ""}
  </div>
</article>`;
  write(`patterns/${p.slug}`, page({ depth: 2, title: p.title, description: p.summary, current: "patterns", body, pathFromRoot: `patterns/${p.slug}/` }));
}

// Theme pages
for (const t of site.themes) {
  const items = patterns.filter((p) => p.themes.includes(t.slug));
  const body = `
<section class="wrap page-head">
  <p class="crumb"><a href="../../">Themes</a></p>
  <h1>${esc(t.name)}</h1>
  <p class="lede">${esc(t.lede)}</p>
</section>
<div class="wrap prose"><p>${esc(t.intro)}</p></div>
<section class="wrap section">
  <h2>${items.length === 0 ? "No patterns in this theme yet" : items.length === 1 ? "1 pattern" : `${items.length} patterns`}</h2>
  ${items.length ? patternList(items, "../../") : `<p>This theme fills in as I write up more of my work. The other themes are ${list(site.themes.filter((x) => x !== t).map((x) => `<a href="../${x.slug}/">${esc(x.name)}</a>`))}.</p>`}
</section>`;
  write(`themes/${t.slug}`, page({ depth: 2, title: t.name, description: t.lede, body, pathFromRoot: `themes/${t.slug}/` }));
}

// Method and About
for (const e of readEntries("pages")) {
  const body = `
<article>
  <header class="wrap page-head">
    <h1>${esc(e.data.title)}</h1>
    ${e.data.lede ? `<p class="lede">${esc(e.data.lede)}</p>` : ""}
  </header>
  <div class="wrap prose">${md(e.body)}</div>
</article>`;
  write(e.slug, page({ depth: 1, title: e.data.title, description: e.data.lede, current: e.slug, body, pathFromRoot: `${e.slug}/` }));
}

// 404
write("404", page({ depth: 1, title: "Page not found", body: `<section class="wrap page-head"><h1>Page not found</h1><p class="lede">That address does not exist on this site. Try the <a href="../">home page</a> or the <a href="../patterns/">list of patterns</a>.</p></section>` }));
fs.renameSync(path.join(OUT, "404", "index.html"), path.join(OUT, "404.html"));
fs.rmSync(path.join(OUT, "404"), { recursive: true });

// Sitemap and assets
{
  const urls = ["", "patterns/", "method/", "about/", ...patterns.map((p) => `patterns/${p.slug}/`), ...site.themes.map((t) => `themes/${t.slug}/`)];
  fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${esc(site.url + u)}</loc></url>`).join("\n")}\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
  const assets = path.join(OUT, "assets");
  fs.mkdirSync(path.join(assets, "fonts"), { recursive: true });
  for (const f of ["styles.css", "site.js", "favicon.svg"]) fs.copyFileSync(path.join(ROOT, "src", f), path.join(assets, f));
  const fontDir = path.join(ROOT, "node_modules", "@fontsource-variable", "bricolage-grotesque", "files");
  const font = "bricolage-grotesque-latin-standard-normal.woff2";
  if (fs.existsSync(path.join(fontDir, font))) fs.copyFileSync(path.join(fontDir, font), path.join(assets, "fonts", font));
  else warn("font file not found; run npm install");
}

// ---------- report ----------

if (problems.length) {
  console.error("Build problems:\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log(`Built ${patterns.length} patterns, ${site.themes.length} themes into ${path.relative(ROOT, OUT)}/`);
