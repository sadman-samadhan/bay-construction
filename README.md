# Pi Property Solution — website

Static marketing site: Home, About, Services (+ one page per service) and Contact.
36 property maintenance services (content modelled on vertexproperties.us, reworded).

Built with Next.js (static export) + Tailwind CSS. No server, database or CMS — the build output is plain HTML/CSS/JS.

## Change address, phone, email, WhatsApp

All contact details live in **`.env`** (see `.env.example` for every option):

| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_SITE_NAME` | Company name in titles, footer, © line |
| `NEXT_PUBLIC_SITE_URL` | Live domain (sitemap, SEO) |
| `NEXT_PUBLIC_PHONE` | Phone shown everywhere + click-to-call |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number, digits with country code (empty = phone number) |
| `NEXT_PUBLIC_EMAIL` | Email shown everywhere + contact form "Send via email" |
| `NEXT_PUBLIC_ADDRESS` | Office address (top bar, footer, contact page) |
| `NEXT_PUBLIC_MAP_QUERY` | Google Maps search on the contact page (empty = address) |
| `NEXT_PUBLIC_HOURS` | Working hours |
| `NEXT_PUBLIC_FACEBOOK` / `_INSTAGRAM` / `_LINKEDIN` | Social links (empty = hidden) |

After editing `.env`:

```bash
npm install      # first time only
npm run build    # writes the finished site to ./out
```

Upload the **contents of `out/`** to any static host (cPanel public_html, Netlify, Vercel, GitHub Pages, S3…).

> Values are baked in at build time — editing `.env` on the server does nothing until you rebuild and re-upload.

## Other edits

- Services: `src/data/services.ts`
- Page copy (about, why choose us…): `src/data/content.ts`
- Brand colour: `--color-brand-*` in `src/app/globals.css`
- Logos: `public/brand/` (SVG + PNG); favicon: `src/app/icon.svg`

## Local preview

```bash
npm run dev      # http://localhost:3000
```

The contact form needs no backend: it opens WhatsApp or the visitor's email app with the message pre-filled.
