# Danish Imam — Portfolio

A light-theme, single-page portfolio built with React, Vite, Tailwind CSS v4 and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # serve the production build locally
```

Deploy the `dist` folder to Netlify, Vercel or GitHub Pages. No environment variables, no backend.

## Editing content

All copy, jobs, projects, skills, education and certifications live in **`src/data/content.js`**. Nothing else needs to be touched to update the site.

Two things worth filling in there:

- `socials` — the LinkedIn URL is empty. Add it and the link appears automatically in the hero and footer; leave it blank and it stays hidden rather than rendering a dead link. The GitHub URL was inferred from your project URLs (`danishimam.github.io`) — change it if that's not your account.
- `profile.whatsapp` — country code plus number, digits only. This drives the `wa.me` link in the contact section.

## Design system

Tokens are defined once in `src/index.css` under `@theme`, and every colour, font and shadow in the app derives from them.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#eef2f7` | page background |
| `surface` | `#ffffff` | cards and panels |
| `ink` | `#0e1c2b` | primary text, buttons |
| `graphite` | `#2b3f54` | secondary text |
| `muted` | `#5c7085` | body copy |
| `faint` | `#8ba1b6` | mono labels |
| `line` / `line-soft` | `#d5dfea` / `#e6ecf4` | hairline borders |
| `signal` | `#2f80d9` | the "currently working" dot only |

Type is three faces with three jobs: **Inter Tight** for everything structural, **Instrument Serif italic** as an accent on a handful of words, **JetBrains Mono** for labels, dates and URLs.

To change the palette, edit the `@theme` block — you do not need to touch any component.

## Live project previews

Each project card renders the actual site inside a browser frame (`src/components/ui/BrowserPreview.jsx`), rather than a screenshot. The iframe:

- only mounts when the card is within 300px of the viewport,
- is scaled from a 1440px desktop viewport via `ResizeObserver`, so it looks right at every breakpoint,
- is non-interactive — clicks go to the card link, which opens the real site,
- is hidden from screen readers and the tab order.

If a site ever sends `X-Frame-Options: DENY`, the placeholder underneath stays visible and the card still looks intentional. If you'd rather not depend on that, swap `BrowserPreview` for static images in `public/` — the component boundary is there for exactly that reason.

## Accessibility and motion

- Every animation is skipped when the visitor has "reduce motion" enabled, via `useReducedMotion` and a CSS media query.
- Visible focus rings on all interactive elements, plus a skip link.
- Semantic landmarks and a single `h1`.

## Structure

```
src/
├── App.jsx                    section order
├── index.css                  design tokens + primitives
├── data/content.js            ← all content
├── lib/utils.js               cn() class merger
├── hooks/
│   ├── useActiveSection.js    nav highlighting
│   └── useElementWidth.js     preview scaling
└── components/
    ├── Nav.jsx  Hero.jsx  About.jsx  Work.jsx
    ├── Experience.jsx  Skills.jsx  Education.jsx
    ├── Contact.jsx  Footer.jsx
    └── ui/
        ├── Section.jsx        shared label + content grid
        ├── Reveal.jsx         scroll entrance
        └── BrowserPreview.jsx live site frame
```
