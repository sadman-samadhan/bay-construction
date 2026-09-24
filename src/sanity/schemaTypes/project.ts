export const projectSchema = {
  name: "project",
  title: "Projects & Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Renovations", value: "Renovations" },
          { title: "Interior", value: "Interior" },
          { title: "Exterior", value: "Exterior" },
          { title: "Mechanical", value: "Mechanical" },
        ],
      },
    },
    {
      name: "location",
      title: "Location / Suburb",
      type: "string",
    },
    {
      name: "duration",
      title: "Timeline / Duration",
      type: "string",
    },
    {
      name: "tag",
      title: "Badge Tag (e.g. Full Remodel, Roofing)",
      type: "string",
    },
    {
      name: "image",
      title: "Main Project Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Project Scope & Description",
      type: "text",
      rows: 4,
    },
  ],
};
