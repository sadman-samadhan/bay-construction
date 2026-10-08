export interface MaintenancePlan {
  id: string;
  name: string;
  audience: string;
  monthly: number | null;
  yearly: number | null;
  highlight?: boolean;
  badge?: string;
  description: string;
  features: string[];
  notIncluded?: string[];
}

/** Annual Maintenance Contract (AMC) tiers. Yearly price reflects ~2 months free. */
export const maintenancePlans: MaintenancePlan[] = [
  {
    id: "essential",
    name: "Home Essential",
    audience: "Flats up to 1,400 sq ft",
    monthly: 1490,
    yearly: 14900,
    description: "The basics, done on schedule — so small problems never become big ones.",
    features: [
      "2× AC jet-wash service per year (up to 2 units)",
      "2× water tank cleaning per year",
      "Bi-annual plumbing & electrical check-up",
      "Free call-out on all repair visits",
      "10% off labour on extra jobs",
      "Priority booking (within 48 hrs)",
    ],
    notIncluded: ["24/7 emergency priority", "Pest control"],
  },
  {
    id: "plus",
    name: "Home Plus",
    audience: "Flats & duplexes up to 2,800 sq ft",
    monthly: 2990,
    yearly: 29900,
    highlight: true,
    badge: "Most Popular",
    description: "Complete peace of mind for busy families — we remember everything for you.",
    features: [
      "3× AC jet-wash service per year (up to 4 units)",
      "2× water tank cleaning per year",
      "Quarterly plumbing, electrical & IPS check-up",
      "Quarterly cockroach pest control",
      "Annual deep clean of kitchen & bathrooms",
      "24/7 emergency priority — no call-out charge",
      "15% off labour on extra jobs",
      "Dedicated account manager",
    ],
  },
  {
    id: "building",
    name: "Building Care",
    audience: "Apartment buildings & owners' associations",
    monthly: null,
    yearly: null,
    badge: "Custom",
    description: "One team for common areas, pump room, generator, lift lobby and every resident.",
    features: [
      "Pump room, generator & substation upkeep",
      "Common-area plumbing, electrical & lighting",
      "6-monthly reservoir & tank cleaning",
      "Fire safety & CCTV maintenance",
      "Discounted rates for every resident flat",
      "Monthly service report to the committee",
      "On-site caretaker training",
    ],
  },
  {
    id: "business",
    name: "Business Care",
    audience: "Offices, shops, restaurants & clinics",
    monthly: null,
    yearly: null,
    badge: "Custom",
    description: "Keep your workplace running. Planned maintenance, SLAs and after-hours work.",
    features: [
      "Planned preventive maintenance schedule",
      "Bulk AC servicing & filter changes",
      "DB, UPS & generator maintenance",
      "After-hours & weekend work windows",
      "Guaranteed response-time SLA",
      "Single monthly invoice with job log",
      "Multi-branch coverage",
    ],
  },
];

/** Inputs for the interactive plan estimator. */
export const estimatorConfig = {
  propertyTypes: [
    { id: "flat-s", label: "Flat · up to 1,000 sq ft", base: 1100 },
    { id: "flat-m", label: "Flat · 1,000–1,800 sq ft", base: 1500 },
    { id: "flat-l", label: "Flat · 1,800–2,800 sq ft", base: 2100 },
    { id: "duplex", label: "Duplex / Villa", base: 3200 },
    { id: "office", label: "Office (per 2,000 sq ft)", base: 3800 },
  ],
  perAc: 260,
  addOns: [
    { id: "tank", label: "Water tank cleaning (2× / year)", monthly: 420 },
    { id: "pest", label: "Quarterly pest control", monthly: 450 },
    { id: "ips", label: "IPS / battery care", monthly: 180 },
    { id: "deep", label: "Annual deep clean", monthly: 400 },
    { id: "emergency", label: "24/7 emergency priority", monthly: 350 },
    { id: "garden", label: "Monthly plant care", monthly: 600 },
  ],
};
