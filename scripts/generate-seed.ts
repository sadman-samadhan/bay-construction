/**
 * Regenerates seed-services.ndjson from the typed catalogue in src/data/services.ts.
 * Run: npx tsx scripts/generate-seed.ts   (or: node --experimental-strip-types scripts/generate-seed.ts)
 */
import { writeFileSync } from "node:fs";
import { servicesData } from "../src/data/services.ts";

const lines = servicesData.map((s) =>
  JSON.stringify({
    _id: `service-${s.id}`,
    _type: "service",
    title: s.title,
    slug: { _type: "slug", current: s.slug },
    category: s.category,
    badge: s.badge,
    popular: !!s.popular,
    shortDescription: s.shortDescription,
    fullDescription: s.fullDescription,
    priceFrom: s.priceFrom,
    priceUnit: s.priceUnit,
    subServices: s.subServices,
    keyBenefits: s.keyBenefits,
  })
);
writeFileSync(new URL("../seed-services.ndjson", import.meta.url), lines.join("\n") + "\n");
console.log(`Wrote ${lines.length} services to seed-services.ndjson`);
