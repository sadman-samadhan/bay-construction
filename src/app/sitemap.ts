import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["/", "/about/", "/services/", "/contact/"].map((p) => ({ url: `${site.url}${p}`, priority: p === "/" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}/`, priority: 0.7 })),
  ];
}
