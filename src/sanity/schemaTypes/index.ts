import { serviceSchema } from "./service";
import { projectSchema } from "./project";
import { testimonialSchema } from "./testimonial";
import { faqSchema } from "./faq";
import { blogPostSchema } from "./blogPost";
import { siteSettingsSchema } from "./siteSettings";

export const schemaTypes = [
  serviceSchema,
  projectSchema,
  testimonialSchema,
  faqSchema,
  blogPostSchema,
  siteSettingsSchema,
];
