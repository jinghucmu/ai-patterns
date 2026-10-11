# AI design patterns, by Jing Hu

Design patterns for AI products, written down from products I have designed. Live at the address in `content/site.json`.

## Editing

Everything you edit is under `content/`. Running `npm run build` writes the site into `docs/`, which GitHub Pages serves from the `main` branch. Commit `content/` and `docs/` together.

- `content/site.json`: title, address, the three themes (slug, name, lede, intro), the four stages of the flow, sources that patterns can cite, and the update log on the home page.
- `content/patterns/<slug>.md`: one pattern per file. The file name is the address of the page.
- `content/shots/<slug>/`: screenshots for that pattern. Any size; the build resizes them to 1600px WebP.
- `content/pages/method.md` and `about.md`: the Method and About pages.
- `content/_drafts/patterns/` and `content/_drafts/shots/`: drafts. `npm run preview` builds them into `preview/` for a local look; `npm run build` ignores them. Never commit `preview/`.

### A pattern file

```markdown
---
title: Tap what you see
summary: One sentence, shown in lists and under the title.
themes: [multimodal, shopping]        # slugs from site.json
stages: [answer, decide]              # ask | answer | check | decide, whichever the pattern serves
example: Video Hotspots               # the product it came from
where: Amazon video shopping          # optional
added: 2026-10-10
order: 2                              # reading order in lists; lower first
sources: [article-d]                  # keys from site.json sources; optional
related: [index-by-product]           # other pattern slugs; optional
shots:                                # optional
  - file: hotspot.png
    alt: Required. What the picture shows, for people who cannot see it.
    caption: Optional.
---

## The problem
## The pattern
## What makes it hard
## When it fails
## The accessibility dividend
## In my work
```

The headings are a convention, not a requirement; the Method page describes them. The build fails if a pattern has no title, summary or theme, names an unknown theme, stage, source or related pattern, or has a screenshot without alt text.

## Building

```
npm install
npm run build
```

`src/build.mjs` is the whole generator. `src/styles.css` and `src/site.js` are copied into `docs/assets/`. The typeface is Bricolage Grotesque, installed by npm and copied into `docs/assets/fonts/`.
