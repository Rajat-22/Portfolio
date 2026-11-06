<div align="center">

# Rajat Sharma — Portfolio

**A premium, editorial portfolio for a Senior Software Engineer.**

[Live site](https://rajatsharma-portfolio.vercel.app/) · Next.js 15 · React 19 · Tailwind CSS

</div>

---

## What this is

A single-page portfolio covering professional background, selected work, technical
skill areas, education and contact — designed to be read quickly by recruiters and
engineers, and to hold up technically on close inspection.

## Design direction

Charcoal and graphite surfaces, one restrained accent (`#c9f24b`), a strong
typographic hierarchy and generous whitespace. Motion is limited to a subtle
scroll-reveal and quiet hover states, and all of it is disabled automatically
under `prefers-reduced-motion`. No gradient text, no glassmorphism, no blobs.

## Stack

- **Framework** — Next.js 15 (App Router), React 19
- **Styling** — Tailwind CSS with CSS custom-property design tokens, SCSS entry point
- **Content** — plain JS data modules under `utils/data/`
- **Contact** — EmailJS (browser-side, with validation and inline errors)
- **Icons** — inline SVG, no icon library dependency

## Content model

Everything editable lives in `utils/data/`. No component hardcodes personal copy.

| File               | Controls                                                                       |
| ------------------ | ------------------------------------------------------------------------------ |
| `personal-data.js` | Name, role, links, resume URL, nav items, site metadata, **chatbot URL**       |
| `projects-data.js` | Selected work — description, approach, highlights, stack, screenshot, demo URL |
| `experience.js`    | Roles, dates, summary and tech stack                                           |
| `skills.js`        | Skill areas and the technologies in each                                       |
| `educations.js`    | Qualifications                                                                 |

### Enabling the AI assistant

The assistant section ships with a placeholder link. To activate it, set:

```bash
NEXT_PUBLIC_CHATBOT_URL=https://your-deployed-assistant.example.com
```

…or edit `chatbotConfig.url` in `utils/data/personal-data.js`. While the URL is still
the placeholder, the UI shows a "launches soon" badge; point it at the real
deployment and the badge disappears on its own.

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Structure

```
app/
├── components/
│   ├── homepage/       # One folder per section
│   │   ├── hero-section/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── ai-assistant/
│   │   ├── education/
│   │   └── contact/
│   ├── helper/         # Reveal observer, scroll-to-top
│   ├── ui/             # Button, section heading primitives
│   ├── navbar.jsx
│   └── footer.jsx
├── css/globals.scss    # Design tokens and base styles
├── layout.js           # Fonts, metadata, Person schema
└── page.js             # Section composition
utils/data/             # All editable content
scripts/generate-og.js  # Regenerates public/og-image.png
```

## Notes

- Metadata includes Open Graph, Twitter cards, a generated 1200×630 social image and
  JSON-LD `Person` schema.
- Images are served through `next/image` with explicit breakpoints; the OG image can
  be regenerated with `node scripts/generate-og.js`.
- The contact form posts directly to EmailJS with client-side validation, accessible
  labels and `aria-live` feedback.
