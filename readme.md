# Summergill Design System

**Summergill** — "Websites for local businesses. Done properly." A two-person UK web studio (Summers & Gill, trading under **Rippers Golf Ltd**) that hand-builds pay-monthly websites for local businesses (trades, salons, food & drink, sports coaching). One product surface: the marketing one-pager at **summergill.co.uk**, plus an internal SOP slide deck.

The brand is a **Swiss / engineered** system: white paper, near-black ink, **one cobalt accent**, square corners, hairline rules, mono-uppercase labels and blunt, honest copy.

## Sources
- GitHub: **https://github.com/sumdog97-lgtm/summergill** (branch `main`) — Astro 5 + Tailwind v4 site. Key files: `src/styles/global.css` (tokens), `src/data/site.ts` (all copy/pricing), `src/components/*.astro` (Header, Hero, Switchboard, Problem, Proof, Pricing, Guarantee, Process, Faq, About, Enquire, Footer, Icon), `docs/sop-deck.html` (internal deck).
- Explore the repo further for anything not captured here — it is the source of truth.
- A copy of the SOP deck lives at `reference/sop-deck.html`.

## Index
- `styles.css` — entry point; `@import`s only.
- `tokens/` — `fonts.css` (Google Fonts import), `colors.css`, `typography.css`, `spacing.css` (spacing, layout, radii, shadows, motion), `base.css` (body defaults + `.reveal` animation).
- `components/` — React primitives (see below), each with `.d.ts` + `.prompt.md` and one card per folder.
- `ui_kits/website/` — interactive recreation of summergill.co.uk (`index.html`, `Header.jsx`, `Hero.jsx` incl. Switchboard, `Sections.jsx`, `Closing.jsx`, `data.js`).
- `slides/` — SOP-deck slide types (cover, pipeline, two-column, table, closer) at 1280×720.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/` — `favicon.svg/png`, `apple-touch-icon.png`, `og.jpg`, `proof/` (client screenshots at desktop/tablet/mobile).
- `SKILL.md` — Agent Skill entry.

## Components
- **core/** — `Button`, `Icon` (+ `iconNames`), `Wordmark`, `Eyebrow`, `Tag`
- **forms/** — `ChoiceChip`, `ChoiceGroup`, `TextField`
- **content/** — `SectionHeader`, `GridPanel`, `GridCell`, `Stat`, `StatRow`, `FaqItem`, `FaqList`, `CheckList`
- **marketing/** — `PromoBanner` (+ `Hi`), `PriceCard`, `DeviceShowcase`, `LaptopFrame`, `PhoneFrame`, `TabletFrame`

The source has no component library — it's 12 Astro section components. These primitives are the repeated patterns extracted from them; full sections live in the UI kit. **Intentional additions:** none beyond extraction (`ChoiceGroup`, `StatRow`, `FaqList` are thin list wrappers for convenience).

---

## CONTENT FUNDAMENTALS

**Voice:** a straight-talking tradesperson who happens to build websites. Plain English, zero jargon, slightly combative toward "agencies". Honesty is the selling point — the copy openly admits limits ("If a website genuinely won't help your business, we'll say so and save you the money").

- **Person:** "we" (Summergill) speaking to "you" (the business owner). FAQ questions are in the customer's voice: "Do I actually own my domain?"
- **Headlines:** short declarative sentences, ending in a full stop. Often fragments in threes: "Three steps. Two weeks. Zero jargon." / "One clear price. Everything included." / "Built by hand. Sharp on every screen."
- **Casing:** sentence case for headings and buttons. UPPERCASE only in mono labels (eyebrows, tags, fine print, promo banner).
- **Numbers are concrete:** "£495", "two weeks", "2 wks", "0 surprise invoices, ever", "30 days' notice". Prices always shown with the standard price struck out during the promo.
- **British English & typography:** curly quotes/apostrophes (’ “ ”), em dashes with spaces ( — ), middot separators ( · ), £, "organise".
- **Contrast framing:** "Everything the web industry gets wrong, in reverse." Agencies "register your domain to themselves, bill by the surprise hour".
- **CTAs:** verb-first and channel-specific — "WhatsApp us about yours", "Claim a build slot", "Send it over WhatsApp", "See our work". Never "Learn more" / "Get in touch".
- **Reassurance microcopy** in mono: "OPENS WHATSAPP WITH THE MESSAGE FILLED IN — NOTHING SENDS UNTIL YOU PRESS SEND."
- **Section eyebrows** numbered: "01 / The problem" … "08 / Start the conversation".
- **No emoji.** No exclamation marks. No hype words ("revolutionary", "cutting-edge").
- **Facts not claims:** "No invented claims — every fact traceable" is a build rule; stats are cited (Stanford web credibility research).

## VISUAL FOUNDATIONS

- **Colour:** paper `#fff`, surface `#f5f5f3`, ink `#0a0a0a`, line `#e5e5e2`, and one accent: cobalt `#1d4ed8` (hover `#16389f`; `#9db4ff` for accent text on ink because cobalt fails contrast there). Greys are never separate hexes — always ink or white at a fixed alpha (70 body, 55 muted, 45 faint, 20 input border, 15 hairline).
- **Section rhythm:** paper → surface → paper → **ink** (pricing) → paper → surface → paper → surface → **cobalt** (final enquiry) → ink footer. Full-bleed colour bands, no gradients, no images as backgrounds.
- **Type:** Space Grotesk 700 for all headings, prices and big numbers (tight −0.025em tracking; hero 72px / 0.98 leading). Inter 400/500/600 for body (18px leads, 16px body, 1.625 leading). IBM Plex Mono for every label, tag and caption — uppercase, 11–12px, 0.025–0.1em tracking.
- **Corners:** square. 0 radius on buttons, inputs, cards, chips, icon tiles. The only rounded shapes are CSS device mockups (laptop 12px, phone 27px, tablet 18px).
- **Cards:** not floating boxes. Cards are cells in a **hairline grid** — a 1px ink/15 border with `gap:1px` over an ink/15 background, cells on paper. On ink, cards are 1px white/15 outlines (price card: 1px cobalt + white/4 fill).
- **Borders:** 1px everywhere. Ink for the outline button and table header rule; ink/15 for hairlines; cobalt for emphasis.
- **Shadows:** essentially none. The fixed header gains `shadow-sm` after 24px scroll; device mockups get soft drop shadows. Nothing else.
- **Transparency & blur:** header is `paper/95` + `backdrop-blur`. That's the only blur in UI (plus a blurred floor shadow under the laptop).
- **Motion:** `.reveal` fade-up — opacity 0→1, translateY 22px→0, 700ms `ease`, triggered once at 15% visibility. Colour transitions ~150ms. Header padding shrinks 16→10px over 300ms on scroll. Hero Switchboard SVG animates a cobalt pulse along circuit traces. Everything disabled under `prefers-reduced-motion`. No bounces, no springs.
- **Hover:** colour shift only — primary bg → brand-deep; outline border+text → cobalt; nav links ink/70 → cobalt; chips border+text → cobalt. No lift, no scale.
- **Press/selected:** chips flip to solid ink with white text (`aria-pressed`). Burger button `active:bg-surface`. Focus: cobalt border + 2px cobalt/30 ring.
- **Layout:** 1152px container (`max-w-6xl`), 16/24px gutters, sections 80px (mobile) / 112px (≥640) vertical padding. Copy blocks capped at 672px. Fixed header + promo strip; `scroll-padding-top: 6rem`.
- **Motifs:** the cobalt **square** (wordmark full-stop, deck bullets, Switchboard hub); `[ bracketed ]` mono eyebrows; dot-grid schematics ("FIG. 01 —"); engineering-drawing feel.
- **Imagery:** only real client-site screenshots inside CSS device frames, at desktop/tablet/mobile. No stock photos, no illustrations, no people.

## ICONOGRAPHY

- A **custom 9-glyph line set** defined inline in `src/components/Icon.astro`: whatsapp, check, arrow, spark, shield, pencil, rocket, bolt, phone. 24px viewBox, `stroke-width 1.8`, round caps/joins, `currentColor`. Plus burger/close (stroke 2) from the header. All reproduced in `components/core/Icon.jsx` — use `<Icon name="…" />`.
- Sizes: 16px (inline/check lists), 20px (buttons), 24px (menu). Guarantee items put a 20px white icon in a **44×44 solid cobalt square**.
- WhatsApp icon leads nearly every primary CTA.
- No icon font, no PNG icons, no CDN library. **No emoji.** Unicode used typographically: `→` (deck titles), `·` separators, `×` (6× winner), `+` as the FAQ toggle (mono, rotates 45°).
- Logo: there is no drawn logo — the brand mark is the typeset wordmark **SUMMERGILL** + cobalt square (see `Wordmark`). The app icon is a blocky "S" (`assets/favicon.svg`).

## Fonts
All three families are Google Fonts, loaded exactly as production does via `tokens/fonts.css` (`@import` from fonts.googleapis.com). No local binaries were in the repo, so no `@font-face` files are shipped — consumers need network access to Google Fonts.
