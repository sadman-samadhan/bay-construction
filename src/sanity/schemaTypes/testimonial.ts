export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonials & Reviews",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "verified",
      title: "Verified Customer",
      type: "boolean",
      initialValue: true,
    },
  ],
};
