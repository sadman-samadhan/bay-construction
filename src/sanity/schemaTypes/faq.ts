import type { Rule } from "sanity";

export const faqSchema = {
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (rule: Rule) => rule.required(),
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
