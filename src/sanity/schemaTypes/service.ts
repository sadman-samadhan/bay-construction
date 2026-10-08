import type { Rule } from "sanity";

export const serviceSchema = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Core Trades", value: "core-trades" },
          { title: "Repairs & Finishes", value: "repairs-finishes" },
          { title: "Cleaning & Hygiene", value: "cleaning-hygiene" },
          { title: "Property Care", value: "property-care" },
          { title: "Safety & Security", value: "safety-smart" },
          { title: "Emergency", value: "emergency" },
        ],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "image",
      title: "Service Image (AI Placeholder or Real Photo)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "badge",
      title: "Highlight Badge (e.g. Most Requested, 24/7 Response)",
      type: "string",
    },
    {
      name: "popular",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "shortDescription",
      title: "Short Description (Card view)",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "fullDescription",
      title: "Full Detailed Description",
      type: "text",
      rows: 6,
    },
    {
      name: "priceFrom",
      title: "Starting Price (BDT)",
      type: "number",
    },
    {
      name: "priceUnit",
      title: "Price Unit (e.g. per visit, per sq ft)",
      type: "string",
    },
    {
      name: "subServices",
      title: "Sub-Services Included",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "keyBenefits",
      title: "Key Benefits / Why Choose Us",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
