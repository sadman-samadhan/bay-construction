export const serviceSchema = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Major Renovations", value: "Major Renovations" },
          { title: "General Maintenance", value: "General Maintenance" },
          { title: "Finishing & Coating", value: "Finishing & Coating" },
          { title: "Mechanical & Systems", value: "Mechanical & Systems" },
          { title: "Interior Craftsmanship", value: "Interior Craftsmanship" },
          { title: "Exterior & Grounds", value: "Exterior & Grounds" },
          { title: "Exterior Protection", value: "Exterior Protection" },
          { title: "Specialized Services", value: "Specialized Services" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "fullDescription",
      title: "Full Detailed Description",
      type: "text",
      rows: 6,
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
