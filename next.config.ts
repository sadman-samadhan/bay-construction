import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to ./out
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
