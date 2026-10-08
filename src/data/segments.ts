export interface ClientSegment {
  id: string;
  title: string;
  iconName: string;
  headline: string;
  description: string;
  needs: string[];
  services: string[]; // service slugs
  plan?: string;
}

export const clientSegments: ClientSegment[] = [
  {
    id: "homeowners",
    title: "Homeowners & Families",
    iconName: "House",
    headline: "Your home, looked after — without chasing five different mistris.",
    description:
      "From a dripping tap to pre-monsoon waterproofing, one trusted team handles everything. Book online, get an upfront price and know exactly who's coming to your door.",
    needs: ["Verified, uniformed technicians", "Upfront pricing", "Clean, respectful work", "One number for everything"],
    services: ["plumbing-sanitary", "ac-servicing-repair", "deep-cleaning", "electrical-wiring"],
    plan: "plus",
  },
  {
    id: "associations",
    title: "Owners' Associations & Buildings",
    iconName: "Building2",
    headline: "Common areas, pump rooms and every flat — under one contract.",
    description:
      "Flat owners' associations and building committees use our Building Care plan to keep shared services running, with a monthly report the whole committee can see and discounted rates for residents.",
    needs: ["Pump, generator & lift lobby upkeep", "Tank cleaning on schedule", "Transparent monthly reports", "Fire safety & CCTV"],
    services: ["water-pump-motor", "water-tank-cleaning", "ips-generator-maintenance", "fire-safety"],
    plan: "building",
  },
  {
    id: "landlords",
    title: "Landlords & Property Managers",
    iconName: "KeyRound",
    headline: "Faster turnovers, fewer tenant complaints, one invoice.",
    description:
      "Whether you rent out one flat or forty, we handle tenant repair requests, move-out inspections and make-ready work, with photo evidence for every job.",
    needs: ["Fast tenant turnover", "Photo-documented work", "Multi-unit coordination", "Monthly consolidated billing"],
    services: ["tenant-turnover", "home-repair-handyman", "painting-wall-care", "property-inspection"],
  },
  {
    id: "nrb",
    title: "Owners Living Abroad",
    iconName: "Plane",
    headline: "Your local hands in Bangladesh, wherever you live.",
    description:
      "Monthly visits, video reports, repair coordination and tenant handling, approved by you over WhatsApp and paid online. Your property stays safe and ready for when you come home.",
    needs: ["Regular check-up visits", "Photo & video updates", "Approval before any spend", "Online payment"],
    services: ["nrb-property-care", "tenant-turnover", "cctv-security", "deep-cleaning"],
  },
  {
    id: "developers",
    title: "Real Estate Developers",
    iconName: "ClipboardCheck",
    headline: "Your after-sales service team — from handover to warranty end.",
    description:
      "Developers partner with us to manage buyer handover snags and warranty-period repairs under their brand. Your buyers get fast fixes, and your site team stays focused on the next project.",
    needs: ["Handover snag resolution", "Warranty-period repair desk", "Ticket tracking per project", "White-label service option"],
    services: ["handover-snagging", "plumbing-sanitary", "electrical-wiring", "waterproofing-damp-repair"],
  },
  {
    id: "business",
    title: "Offices, Retail & Restaurants",
    iconName: "Store",
    headline: "Keep the doors open. We'll keep everything working.",
    description:
      "Planned maintenance for offices, showrooms, restaurants and clinics, with response-time SLAs, after-hours work windows and a single monthly invoice across branches.",
    needs: ["Planned preventive maintenance", "After-hours work", "Guaranteed SLAs", "Multi-branch coverage"],
    services: ["ac-servicing-repair", "electrical-wiring", "pest-control", "deep-cleaning"],
    plan: "business",
  },
];
