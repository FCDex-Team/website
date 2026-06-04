# FCDex Website

React SPA built with [Vite](https://vite.dev), [React Router](https://reactrouter.com), and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Start the Vite dev server |
| `bun run build` | Type-check and build for production |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run Biome checks |
| `bun run check` | Auto-fix with Biome |

## Deploy

Build static assets with `bun run build` and serve the `dist/` folder from any static host (Netlify, Cloudflare Pages, nginx, etc.). Configure the host for SPA fallback to `index.html` so client-side routes work.
