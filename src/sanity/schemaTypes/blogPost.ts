export const blogPostSchema = {
  name: "blogPost",
  title: "Blog Posts & Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "excerpt",
      title: "Summary / Excerpt",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Article Content",
      type: "text",
      rows: 10,
    },
  ],
};
