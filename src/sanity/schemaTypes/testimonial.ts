import type { Rule } from "sanity";

export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonials & Reviews",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "location",
      title: "Neighborhood / City",
      type: "string",
    },
    {
      name: "service",
      title: "Service Provided",
      type: "string",
    },
    {
      name: "rating",
      title: "Star Rating (1 to 5)",
      type: "number",
      initialValue: 5,
    },
    {
      name: "comment",
      title: "Review Comment",
      type: "text",
      rows: 4,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "verified",
      title: "Verified Customer",
      type: "boolean",
      initialValue: true,
    },
  ],
};
