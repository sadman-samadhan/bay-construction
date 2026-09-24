export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Global Settings",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company / Business Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline / Slogan",
      type: "string",
    },
    {
      name: "phone",
      title: "Main Phone Number",
      type: "string",
    },
    {
      name: "emergencyPhone",
      title: "24/7 Emergency Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Business Email",
      type: "string",
    },
    {
      name: "address",
      title: "Physical Address",
      type: "string",
    },
    {
      name: "licenseNumber",
      title: "General Contractor License #",
      type: "string",
    },
    {
      name: "hoursRegular",
      title: "Regular Business Hours",
      type: "string",
    },
    {
      name: "hoursEmergency",
      title: "Emergency Service Hours",
      type: "string",
    },
  ],
};
