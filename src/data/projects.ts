export interface ProjectCase {
  slug: string;
  title: string;
  location: string;
  segment: string;
  serviceSlugs: string[];
  image: string;
  duration: string;
  year: number;
  summary: string;
  challenge: string;
  approach: string[];
  result: string;
  metrics: { label: string; value: string }[];
  quote?: { text: string; author: string; role: string };
}

/**
 * Showcase jobs. Images are placeholders — replace with the client's own before/after photos.
 */
export const projectsData: ProjectCase[] = [
  {
    slug: "concealed-leak-gulshan",
    title: "Concealed leak traced without breaking a single wall",
    location: "Gulshan 2, Dhaka",
    segment: "Homeowners",
    serviceSlugs: ["plumbing-sanitary", "painting-wall-care"],
    image: "/images/services/plumbing.jpg",
    duration: "1 day",
    year: 2026,
    summary: "A ceiling stain in the flat below kept returning. Two previous plumbers had broken tiles and still missed it.",
    challenge:
      "The owners of a 7th-floor flat faced repeated complaints from the neighbour below. Two contractors had already broken bathroom tiles without finding the source, and the stain kept spreading.",
    approach: [
      "Isolated each line with pressure testing to narrow the leak to one hot-water branch",
      "Mapped moisture readings across the floor to pinpoint a cracked PPR elbow",
      "Opened a single 30 × 30 cm section, replaced the joint and re-tested at 10 bar",
      "Re-fixed matched tiles and repainted the neighbour's ceiling after drying",
    ],
    result: "The leak was fixed in a day, with one tile opened instead of a whole bathroom floor. There has been no recurrence over two monsoons.",
    metrics: [
      { label: "Tiles opened", value: "1" },
      { label: "Time on site", value: "6 hrs" },
      { label: "Recurrence", value: "0" },
    ],
    quote: {
      text: "They found in two hours what others couldn't in two weeks — and left the bathroom spotless.",
      author: "Farhana R.",
      role: "Flat owner, Gulshan 2",
    },
  },
  {
    slug: "pre-monsoon-roof-mirpur-dohs",
    title: "Pre-monsoon roof waterproofing for a 6-storey building",
    location: "Mirpur DOHS, Dhaka",
    segment: "Owners' Associations",
    serviceSlugs: ["waterproofing-damp-repair", "property-inspection"],
    image: "/images/services/roofing.jpg",
    duration: "6 days",
    year: 2026,
    summary: "Top-floor flats had leaked every monsoon for three years. The committee wanted one lasting fix.",
    challenge:
      "Hairline cracks across a 4,200 sq ft roof and failed parapet joints were letting water into two top-floor flats and the stairwell every rainy season.",
    approach: [
      "Moisture mapping and core inspection to identify the failed zones",
      "Crack routing and PU injection, plus re-sealing of all expansion joints",
      "Two-coat polymer-modified membrane with fibre mesh at corners and drains",
      "48-hour ponding test witnessed by the committee before sign-off",
    ],
    result: "The building came through the 2026 monsoon with zero leaks, and the committee holds a 5-year written warranty.",
    metrics: [
      { label: "Roof area", value: "4,200 sq ft" },
      { label: "Leaks after monsoon", value: "0" },
      { label: "Warranty", value: "5 yrs" },
    ],
  },
  {
    slug: "corporate-ac-banani",
    title: "Overnight servicing of 64 ACs for a corporate office",
    location: "Banani, Dhaka",
    segment: "Offices",
    serviceSlugs: ["ac-servicing-repair", "electrical-wiring"],
    image: "/images/services/hvac.jpg",
    duration: "2 nights",
    year: 2025,
    summary: "A busy office couldn't afford downtime, so we serviced every unit after hours.",
    challenge:
      "A 4-floor corporate office with 64 split and cassette units had rising power bills and constant complaints of poor cooling, but work could only happen outside office hours.",
    approach: [
      "Surveyed all units and logged model, amp draw and gas pressure",
      "Two 8-person crews jet-washed every unit across two nights",
      "Fixed 7 gas leaks and replaced 5 failing capacitors",
      "Shared a unit-by-unit report and set up a quarterly AMC",
    ],
    result: "The office's next electricity bill was 18% lower, and comfort complaints stopped.",
    metrics: [
      { label: "Units serviced", value: "64" },
      { label: "Power bill", value: "−18%" },
      { label: "Office downtime", value: "0 hrs" },
    ],
    quote: {
      text: "Professional crew, zero disruption, and the report made our facilities review easy.",
      author: "Admin Manager",
      role: "Corporate office, Banani",
    },
  },
  {
    slug: "handover-bashundhara",
    title: "Handover snagging & make-ready for 38 flats",
    location: "Bashundhara R/A, Dhaka",
    segment: "Developers",
    serviceSlugs: ["handover-snagging", "deep-cleaning"],
    image: "/images/services/cleaning.jpg",
    duration: "3 weeks",
    year: 2025,
    summary: "A developer asked us to make every flat move-in ready before buyer handover.",
    challenge:
      "With 38 flats handing over within one month, the developer's site team was overloaded with snag items and post-work cleaning.",
    approach: [
      "120-point inspection of every flat with a digital snag report",
      "A dedicated fix team for fittings, sealing, electrical and touch-ups",
      "Deep cleaning to remove paint, cement and dust residue",
      "Buyer walk-through support on handover day",
    ],
    result: "All 38 flats were handed over on schedule, and buyer snag complaints were 70% lower than on the developer's previous project.",
    metrics: [
      { label: "Flats", value: "38" },
      { label: "Snags resolved", value: "1,140" },
      { label: "Buyer complaints", value: "−70%" },
    ],
  },
  {
    slug: "reservoir-uttara",
    title: "Reservoir & tank cleaning for an 80-family society",
    location: "Uttara Sector 7, Dhaka",
    segment: "Owners' Associations",
    serviceSlugs: ["water-tank-cleaning", "water-pump-motor"],
    image: "/images/services/plumbing.jpg",
    duration: "1 day",
    year: 2026,
    summary: "Residents reported yellow water, and the tanks hadn't been cleaned in over a year.",
    challenge:
      "A 20,000-gallon underground reservoir and four overhead tanks had heavy iron sludge, and the pump's float switch had failed, causing frequent overflow.",
    approach: [
      "Scheduled the work with residents to store water beforehand",
      "Pumped out sludge, then scrubbed, rinsed and disinfected all five tanks",
      "Installed an automatic water level controller on the main pump",
      "Shared photo reports in the residents' WhatsApp group",
    ],
    result: "Clear water was restored the same evening, overflow stopped, and the society now books cleaning every six months.",
    metrics: [
      { label: "Families served", value: "80" },
      { label: "Water outage", value: "5 hrs" },
      { label: "Overflow events", value: "0" },
    ],
  },
  {
    slug: "tenant-turnover-dhanmondi",
    title: "4-day tenant turnover for a landlord abroad",
    location: "Dhanmondi, Dhaka",
    segment: "Owners Abroad",
    serviceSlugs: ["tenant-turnover", "painting-wall-care", "deep-cleaning"],
    image: "/images/services/painting.jpg",
    duration: "4 days",
    year: 2026,
    summary: "The owner lives in Toronto. The tenant moved out on Thursday and the flat was re-let 10 days later.",
    challenge:
      "The owner needed the flat inspected, repaired, repainted and cleaned quickly, with full visibility from overseas.",
    approach: [
      "Video walk-through on move-out day with a damage list for the deposit",
      "Repairs approved over WhatsApp, with fixed prices before work",
      "Full repaint, deep clean and lock cylinder change",
      "Ready-to-list photos sent to the owner's rental agent",
    ],
    result: "The flat was ready in 4 days and re-let within 10, with every step documented.",
    metrics: [
      { label: "Turnaround", value: "4 days" },
      { label: "Re-let in", value: "10 days" },
      { label: "Site visits by owner", value: "0" },
    ],
    quote: {
      text: "I approved everything from my phone in Toronto. It felt like having family on the ground.",
      author: "Imran H.",
      role: "Landlord living in Canada",
    },
  },
  {
    slug: "restaurant-electrical-agrabad",
    title: "Electrical safety audit & DB upgrade for a restaurant",
    location: "Agrabad, Chattogram",
    segment: "Restaurants",
    serviceSlugs: ["electrical-wiring", "fire-safety"],
    image: "/images/services/electrical.jpg",
    duration: "2 nights",
    year: 2025,
    summary: "Frequent tripping during dinner service was a sign of a deeper problem.",
    challenge:
      "A 120-seat restaurant had overheating cables at the main DB and kitchen breakers that tripped during peak hours.",
    approach: [
      "Thermal check and load study across all circuits",
      "Replaced the main DB with correctly rated MCBs and an RCCB",
      "Balanced load across phases and added a dedicated kitchen circuit",
      "Installed gas leak detectors and refilled extinguishers",
    ],
    result: "There has been no tripping since the upgrade, and the restaurant passed its insurer's safety inspection first time.",
    metrics: [
      { label: "Circuits rebalanced", value: "22" },
      { label: "Trips since", value: "0" },
      { label: "Work done", value: "After hours" },
    ],
  },
  {
    slug: "kitchen-bath-refresh-lalmatia",
    title: "Kitchen & two-bathroom refresh in a weekend",
    location: "Lalmatia, Dhaka",
    segment: "Homeowners",
    serviceSlugs: ["bathroom-kitchen-refresh", "flooring-tile-repair"],
    image: "/images/services/remodeling.jpg",
    duration: "2 days",
    year: 2026,
    summary: "A tired 15-year-old flat got a fresh look before Eid, without breaking walls.",
    challenge:
      "The family wanted modern fixtures, clean grout and better ventilation, but had no time for a renovation.",
    approach: [
      "New basins, mixers, rain showers and concealed cisterns",
      "Epoxy re-grouting and anti-fungal silicone throughout",
      "Exhaust fans and under-cabinet LED lighting",
      "Cabinet hinges and channels replaced with soft-close hardware",
    ],
    result: "The kitchen and bathrooms felt brand new in 48 hours, at a fraction of the cost of renovating.",
    metrics: [
      { label: "Rooms refreshed", value: "3" },
      { label: "Time", value: "48 hrs" },
      { label: "Walls broken", value: "0" },
    ],
  },
  {
    slug: "garden-rooftop-baridhara",
    title: "Rooftop garden on an existing waterproofed roof",
    location: "Baridhara, Dhaka",
    segment: "Owners' Associations",
    serviceSlugs: ["rooftop-garden-landscaping", "waterproofing-damp-repair"],
    image: "/images/services/landscaping.jpg",
    duration: "5 days",
    year: 2025,
    summary: "An unused roof became the building's favourite shared space.",
    challenge: "The committee wanted a garden without risking the roof's waterproofing.",
    approach: [
      "Checked and patched the existing membrane",
      "Raised planters with drainage cells and root barriers",
      "Drip irrigation on a timer",
      "Monthly plant care contract",
    ],
    result: "The roof now has 60+ planters and a seating area, the top floor runs measurably cooler, and the roof has had no leaks.",
    metrics: [
      { label: "Planters", value: "60+" },
      { label: "Top-floor temp", value: "−2°C" },
      { label: "Leaks", value: "0" },
    ],
  },
];

export const projectSegments = ["All", ...Array.from(new Set(projectsData.map((p) => p.segment)))];
