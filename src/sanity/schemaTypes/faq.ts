export const faqSchema = {
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["General", "Pricing & Estimates", "Emergency", "Quality", "Process"],
      },
      initialValue: "General",
    },
  ],
};
