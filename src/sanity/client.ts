import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { servicesData, ServiceItem } from "@/data/services";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: false, // Set to false so changes in /admin appear instantly without caching delay
});

const builder = imageUrlBuilder(client);

export const urlForImage = (source: any) => {
  if (!source) return null;
  return builder.image(source).auto("format").fit("max").url();
};

/**
 * Fetch all services from Sanity CMS.
 * Merges CMS services with local starter services:
 * - CMS services take priority (including newly created ones like "Test").
 * - If a CMS service matches a starter service slug, the CMS version overrides it.
 */
export async function getServices(): Promise<ServiceItem[]> {
  if (!projectId || projectId === "placeholder" || projectId === "demo_project_id") {
    return servicesData;
  }

  try {
    const query = `*[_type == "service"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      badge,
      popular,
      shortDescription,
      fullDescription,
      subServices,
      keyBenefits,
      "image": coalesce(image.asset->url, "/images/services/remodeling.jpg")
    }`;

    const cmsServices = await client.fetch(query);

    if (cmsServices && cmsServices.length > 0) {
      const formattedCmsServices: ServiceItem[] = cmsServices.map((item: any) => ({
        id: item._id,
        slug: item.slug || item.title.toLowerCase().replace(/\s+/g, "-"),
        title: item.title,
        category: item.category || "General Maintenance",
        shortDescription: item.shortDescription || "",
        fullDescription: item.fullDescription || item.shortDescription || "",
        image: item.image || "/images/services/remodeling.jpg",
        iconName: "Wrench",
        badge: item.badge,
        popular: item.popular ?? true,
        subServices: item.subServices || ["Professional Consultation", "Expert Execution", "Guaranteed Workmanship"],
        keyBenefits: item.keyBenefits || ["Licensed & Insured", "Transparent Pricing", "Workmanship Warranty"],
      }));

      // Combine CMS services with seed services that have not yet been customized in CMS
      const remainingSeedServices = servicesData.filter(
        (seed) => !formattedCmsServices.some((cms) => cms.slug === seed.slug || cms.title.toLowerCase() === seed.title.toLowerCase())
      );

      return [...formattedCmsServices, ...remainingSeedServices];
    }

    return servicesData;
  } catch (err) {
    console.warn("Could not fetch from Sanity CMS, using fallback seed services:", err);
    return servicesData;
  }
}
