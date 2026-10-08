import type { MetadataRoute } from "next";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = companyData.siteUrl;
  const pages = ["", "/services", "/maintenance-plans", "/who-we-serve", "/projects", "/about", "/blog", "/faq", "/contact", "/book", "/emergency", "/careers", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...servicesData.map((s) => ({ url: `${base}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...projectsData.map((p) => ({ url: `${base}/projects/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
    ...blogPosts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
