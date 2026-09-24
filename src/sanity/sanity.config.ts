import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export const sanityConfig = defineConfig({
  name: "default",
  title: "Apex Home Services Admin Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

export default sanityConfig;
