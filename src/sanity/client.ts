import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { servicesData, type ServiceItem } from "@/data/services";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

const hasProject = !!projectId && projectId !== "placeholder" && projectId !== "demo_project_id";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForImage = (source: any) => (source ? builder.image(source).auto("format").fit("max").url() : null);

interface CmsService {
  _id: string;
  title: string;
  slug?: string;
  category?: string;
  badge?: string;
  popular?: boolean;
  shortDescription?: string;
  fullDescription?: string;
  subServices?: string[];
  keyBenefits?: string[];
  priceFrom?: number;
  priceUnit?: string;
  image?: string;
}

/**
 * Services shown on the site. The typed catalogue in `src/data/services.ts` is the base;
 * any service edited in Sanity (matched by slug) overrides those fields, and CMS-only services are appended.
 */
export async function getServices(): Promise<ServiceItem[]> {
  if (!hasProject) return servicesData;

  try {
    const cms: CmsService[] = await client.fetch(
      `*[_type == "service"]{ _id, title, "slug": slug.current, category, badge, popular, shortDescription,
        fullDescription, subServices, keyBenefits, priceFrom, priceUnit, "image": image.asset->url }`,
      {},
      { next: { revalidate: 300 } }
    );
    if (!cms?.length) return servicesData;

    const clean = <T extends object>(o: T) =>
      Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && v !== null && v !== "")) as Partial<T>;

    const merged = servicesData.map((base) => {
      const hit = cms.find((c) => c.slug === base.slug);
      if (!hit) return base;
      const { _id, category, ...rest } = hit;
      void _id;
      void category;
      return { ...base, ...clean(rest) } as ServiceItem;
    });

    const extras: ServiceItem[] = cms
      .filter((c) => c.slug && !servicesData.some((s) => s.slug === c.slug))
      .map((c) => ({
        id: c._id,
        slug: c.slug!,
        title: c.title,
        category: "repairs-finishes",
        iconName: "Wrench",
        image: c.image,
        badge: c.badge,
        popular: c.popular,
        shortDescription: c.shortDescription ?? "",
        fullDescription: c.fullDescription ?? c.shortDescription ?? "",
        subServices: c.subServices ?? [],
        keyBenefits: c.keyBenefits ?? ["Verified technicians", "Upfront pricing", "Workmanship warranty"],
        signs: [],
        priceFrom: c.priceFrom ?? 500,
        priceUnit: c.priceUnit ?? "visit",
        duration: "Varies",
        warranty: "90 days",
        faqs: [],
        keywords: [c.title.toLowerCase()],
      }));

    return [...merged, ...extras];
  } catch (err) {
    console.warn("Sanity fetch failed — using local service catalogue.", err);
    return servicesData;
  }
}
