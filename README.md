# Apex Property Care — website

Showcase website for a Bangladesh-based property maintenance company: repairs, servicing, cleaning and property care after construction (not construction itself).

Primary reference: vertexproperties.us · secondary: fixithomesolutions.com, columbushome247.com.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · framer-motion · lucide-react · Sanity Studio at `/admin` (optional overrides).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where content lives

All copy is typed data, so it can be edited without touching components:

| File | What it controls |
| --- | --- |
| `src/data/company.ts` | Brand name, phones, WhatsApp, email, offices, hours, stats, service areas, brands serviced. **All placeholder. Replace before launch.** |
| `src/data/services.ts` | 24 services in 6 categories: descriptions, sub-services, BDT starting prices, FAQs, search keywords |
| `src/data/plans.ts` | Annual maintenance plans (AMC) and the plan-estimator pricing |
| `src/data/segments.ts` | "Who we serve" client types |
| `src/data/projects.ts` | Case studies |
| `src/data/testimonials.ts` | Reviews with 5 rating criteria (placeholder; use real, consented reviews) |
| `src/data/faqs.ts`, `blog.ts`, `careers.ts`, `seasons.ts` | FAQs, guides, job openings, seasonal maintenance calendar |

### Sanity (optional)

`getServices()` in `src/sanity/client.ts` uses the local catalogue and lets any service edited in Sanity (matched by slug) override its text and price. To push the local catalogue into Sanity:

```bash
node --experimental-strip-types scripts/generate-seed.ts   # regenerate seed-services.ndjson
npm run seed                                              # or: node seed-with-api.js (needs SANITY_API_WRITE_TOKEN)
```

## Forms

Booking wizard, contact, plan builder and job applications have no backend. They validate input and open WhatsApp (`wa.me`) or the visitor's email app with a pre-filled message. The number and addresses come from `company.ts`.

## Before launch

- Replace placeholder company details, stats, reviews, leadership names and legal text.
- Replace stock photos with the client's own job photos. `BeforeAfter` simulates the "before" side with a filter until a real `before` image is passed.
- Set `siteUrl` in `company.ts` (used for metadata, sitemap and robots).
