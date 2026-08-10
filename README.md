# FRC Team 2186 — Dogs of Steel Website

Official website for **FRC Team 2186 Dogs of Steel** (Westfield High School, Chantilly, VA).

## Stack

- **Next.js** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** + shadcn-style UI primitives
- **Framer Motion** animations
- **Lucide** icons
- Content driven by `src/data/teamData.json`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content (no React edits needed)

Edit **`src/data/teamData.json`** to update:

| Section | Keys |
|--------|------|
| Team info & mission | `team` |
| Hero stats | `stats` |
| FRC countdown | `countdown` |
| Subteams / leadership | `subteams`, `leadership` |
| Robot gallery | `robots` |
| Sponsor tiers & logos | `sponsorTiers`, `sponsors` |
| Media gallery | `gallery` |

Replace placeholder images under `public/images/` and the sponsor PDF at `public/docs/sponsor-packet.pdf`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Pages

- `/` — Hero, stats, countdown, quick links, sponsor wall
- `/about` — Mission, history, subteams, leadership
- `/robots` — Interactive robot gallery + TBA links
- `/sponsors` — Tiers, logo wall, packet download
- `/media` — Filterable photo gallery
- `/contact` — Contact form + socials
