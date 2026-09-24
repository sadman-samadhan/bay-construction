/**
 * 🇧🇩 Bangladesh Construction Portfolio — Sanity Auto-Seed Script
 *
 * This script uploads all 12 localized services (with image assets)
 * directly into your live Sanity dataset (mrh9thvt).
 *
 * Usage:
 * 1. Create a Write Token at: https://www.sanity.io/manage/project/mrh9thvt/api#tokens
 *    (Click "Add API token" -> Name: "Seed" -> Permission: "Editor")
 * 2. Add it to .env.local:
 *    SANITY_API_WRITE_TOKEN="sk..."
 * 3. Run:
 *    node seed-with-api.js
 */

const fs = require("fs");
const path = require("path");
const { createClient } = require("next-sanity");

// Manually parse .env.local without external dependencies
const envPath = path.join(__dirname, ".env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [key, ...rest] = trimmed.split("=");
      const val = rest.join("=").replace(/^["']|["']$/g, "").trim();
      if (!process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mrh9thvt";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.log("\n⚠️ SANITY_API_WRITE_TOKEN not found in .env.local.");
  console.log("To import all 12 services automatically with images:");
  console.log("1. Go to: https://www.sanity.io/manage/project/" + projectId + "/api#tokens");
  console.log("2. Click '+ Add API token', give it 'Editor' permission, and copy the token.");
  console.log('3. Add to .env.local:\n   SANITY_API_WRITE_TOKEN="sk..."');
  console.log("4. Run: node seed-with-api.js\n");
  console.log("--- OR ---");
  console.log("Run this command in terminal if logged into Sanity CLI:");
  console.log("npx sanity datasets import seed-services.ndjson " + dataset + " --replace\n");
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Image mapping
const imageFiles = {
  "service-remodeling": "remodeling.jpg",
  "service-plumbing": "plumbing.jpg",
  "service-electrical": "electrical.jpg",
  "service-hvac": "hvac.jpg",
  "service-carpentry": "carpentry.jpg",
  "service-painting": "painting.jpg",
  "service-flooring": "flooring.jpg",
  "service-roofing": "roofing.jpg",
  "service-landscaping": "landscaping.jpg",
  "service-home-repair": "home-repair.jpg",
  "service-cleaning": "cleaning.jpg",
  "service-appliance-repair": "appliance-repair.jpg",
};

async function uploadImage(filename) {
  const filePath = path.join(__dirname, "public", "images", "services", filename);
  if (!fs.existsSync(filePath)) return null;
  console.log(`  Uploading asset: ${filename}...`);
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload("image", stream, { filename });
  return asset._id;
}

async function seed() {
  console.log(`\n🚀 Seeding 12 Bangladesh Services into Sanity (Project: ${projectId}, Dataset: ${dataset})...\n`);

  const ndjsonPath = path.join(__dirname, "seed-services.ndjson");
  const rawLines = fs.readFileSync(ndjsonPath, "utf-8").trim().split("\n");

  for (const line of rawLines) {
    if (!line.trim()) continue;
    const doc = JSON.parse(line);
    const imageName = imageFiles[doc._id];

    console.log(`Processing [${doc.title}]...`);

    let assetId = null;
    if (imageName) {
      try {
        assetId = await uploadImage(imageName);
      } catch (e) {
        console.warn(`  ⚠️ Could not upload image for ${doc._id}: ${e.message}`);
      }
    }

    if (assetId) {
      doc.image = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: assetId,
        },
      };
    }

    try {
      await client.createOrReplace(doc);
      console.log(`  ✅ Published in Sanity: ${doc.title}`);
    } catch (e) {
      console.error(`  ❌ Error creating ${doc.title}: ${e.message}`);
    }
  }

  console.log("\n🎉 Seeding complete! Check your Sanity Studio at /admin.\n");
}

seed().catch(console.error);
