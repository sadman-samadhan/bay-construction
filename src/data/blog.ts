export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  image: string;
  relatedService: string;
  body: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "pre-monsoon-checklist-dhaka-apartments",
    title: "The pre-monsoon checklist every Dhaka apartment needs",
    excerpt: "Ten things to check on your roof, walls, windows and drains before the first heavy rain arrives.",
    category: "Seasonal",
    date: "2026-04-18",
    readMinutes: 6,
    image: "/images/services/roofing.jpg",
    relatedService: "waterproofing-damp-repair",
    body: [
      { type: "p", text: "Every year the first heavy rains of June expose the same problems: ceiling stains, damp walls, flooded balconies and seepage into the flat below. Almost all of them can be prevented with a few checks in April or May." },
      { type: "h2", text: "On the roof and terrace" },
      { type: "list", items: ["Look for hairline cracks, especially near parapet walls and water tank bases", "Clear roof drains and outlets of leaves, plastic and plant pots", "Check that rooftop garden planters aren't blocking drainage", "Inspect expansion joints for missing or cracked sealant"] },
      { type: "h2", text: "Inside the flat" },
      { type: "list", items: ["Check the ceilings of top-floor flats for faint brown rings", "Re-seal gaps around Thai aluminium window frames", "Make sure balcony floor traps aren't clogged", "Look for bubbling paint on external-facing walls"] },
      { type: "tip", text: "Waterproofing needs dry surfaces to cure. Book roof work before mid-May, because slots fill up quickly once the first storms arrive." },
      { type: "h2", text: "When to call a professional" },
      { type: "p", text: "If you see active damp, cracks wider than a hair, or stains that grow after rain, it's time for a moisture inspection. Fixing the source now costs far less than repainting and repairing ceilings after the monsoon." },
    ],
  },
  {
    slug: "how-often-clean-water-tank",
    title: "How often should you clean your water tank? (and why it matters)",
    excerpt: "Sludge, iron and algae build up faster than you think. Here's a simple guide for families and building committees.",
    category: "Health & Hygiene",
    date: "2026-03-02",
    readMinutes: 4,
    image: "/images/services/plumbing.jpg",
    relatedService: "water-tank-cleaning",
    body: [
      { type: "p", text: "Most Dhaka buildings store water in an underground reservoir and pump it to overhead tanks. Both collect sediment, iron deposits and sometimes algae, and that water ends up in your kitchen and bathroom." },
      { type: "h2", text: "The short answer: every 6 months" },
      { type: "p", text: "For most residential buildings, cleaning both the reservoir and the overhead tanks every six months keeps water clear and safe for household use. Clean more often if you notice discolouration, smell or particles, or after nearby flooding." },
      { type: "h2", text: "Warning signs" },
      { type: "list", items: ["Yellow or brownish water, especially first thing in the morning", "A musty or metallic smell", "Sand-like particles at the bottom of buckets", "Clogged tap aerators and shower heads"] },
      { type: "tip", text: "Building committees: agree a fixed schedule (e.g. January and July) and announce it in the residents' group a week ahead, so families can store water." },
      { type: "h2", text: "What a proper cleaning includes" },
      { type: "list", items: ["Draining and sludge removal", "Scrubbing walls and floor", "High-pressure rinse", "Disinfection with food-grade chemicals", "Checking lids, ladders and float valves", "Before and after photos"] },
    ],
  },
  {
    slug: "ac-servicing-before-summer",
    title: "AC servicing before summer: what a proper service includes",
    excerpt: "A quick blow with a brush isn't a service. Here's what a full jet-wash should cover, and how it cuts your bill.",
    category: "Seasonal",
    date: "2026-02-20",
    readMinutes: 5,
    image: "/images/services/hvac.jpg",
    relatedService: "ac-servicing-repair",
    body: [
      { type: "p", text: "An AC that sat idle through winter collects dust in the coil and blower, and its drain line can be blocked. Turning it on in March without a service means weaker cooling, higher bills and sometimes water dripping down your wall." },
      { type: "h2", text: "A full jet-wash service should include" },
      { type: "list", items: ["Covering the wall and furniture before starting", "Jet-washing the indoor coil and blower wheel", "Cleaning filters and the drain tray, and flushing the drain pipe", "Cleaning the outdoor unit's condenser coil", "Checking gas pressure and amp draw against specifications", "A test run with temperature readings"] },
      { type: "tip", text: "Ask your technician to share before and after amp and gas readings. It's the easiest way to know the service was done properly." },
      { type: "h2", text: "How often?" },
      { type: "p", text: "Twice a year for homes: before summer and after the monsoon. Offices with all-day use should service every three months." },
    ],
  },
  {
    slug: "signs-of-concealed-pipe-leak",
    title: "7 signs you have a concealed pipe leak",
    excerpt: "Hidden leaks quietly damage walls, ceilings and your neighbour's flat. Catch them early with these signs.",
    category: "Plumbing",
    date: "2026-01-14",
    readMinutes: 4,
    image: "/images/services/plumbing.jpg",
    relatedService: "plumbing-sanitary",
    body: [
      { type: "p", text: "In most apartments the water lines run inside walls and floor slabs. When a joint fails, you often won't see water until real damage is done." },
      { type: "h2", text: "Watch for these signs" },
      { type: "list", items: ["Damp patches or bubbling paint near bathrooms and kitchens", "The water meter moving when all taps are closed", "The overhead tank emptying faster than usual", "A musty smell in one room", "Loose or hollow-sounding floor tiles", "Your downstairs neighbour reporting a ceiling stain", "Unexplained increases in your water or pump electricity bill"] },
      { type: "tip", text: "Quick test: close every tap and note the meter reading. Check again after 2 hours without using water. If it has moved, you have a leak." },
      { type: "h2", text: "Find before you break" },
      { type: "p", text: "A good plumber isolates each line with pressure testing and uses moisture readings to pinpoint the leak, so only a small section is opened instead of a whole bathroom floor." },
    ],
  },
  {
    slug: "ips-battery-care-load-shedding",
    title: "Load-shedding ready: IPS & battery care in 5 minutes a month",
    excerpt: "Simple habits that keep your backup power running when you need it most.",
    category: "Power",
    date: "2025-12-05",
    readMinutes: 3,
    image: "/images/services/electrical.jpg",
    relatedService: "ips-generator-maintenance",
    body: [
      { type: "p", text: "An IPS is only as good as its batteries, and batteries fail quietly. A few minutes a month can double their life." },
      { type: "h2", text: "Monthly habits" },
      { type: "list", items: ["Check distilled water levels in tubular batteries every 2–3 months", "Keep terminals clean, tight and lightly greased", "Make sure the battery area is ventilated", "Don't overload: unplug irons, geysers and ACs from the IPS line"] },
      { type: "tip", text: "If backup time has dropped by more than a third, ask for a load test. One weak battery can drag down the whole bank." },
    ],
  },
  {
    slug: "new-flat-handover-snag-checklist",
    title: "Taking handover of a new flat? Use this snag checklist",
    excerpt: "What to check before you sign the handover letter: plumbing, electrical, doors, tiles and finishes.",
    category: "Property Care",
    date: "2025-11-10",
    readMinutes: 7,
    image: "/images/services/cleaning.jpg",
    relatedService: "handover-snagging",
    body: [
      { type: "p", text: "Handover day is your best chance to have the developer fix issues at their cost. Once you move in, many items become your responsibility." },
      { type: "h2", text: "Plumbing" },
      { type: "list", items: ["Run every tap and shower for a few minutes, then check for leaks below", "Flush every commode and check the cistern refills and stops", "Pour water on bathroom floors and check that it drains towards the trap", "Check hot water lines if a geyser point is provided"] },
      { type: "h2", text: "Electrical" },
      { type: "list", items: ["Test every switch and socket with a small lamp or tester", "Check that the DB is labelled and has an RCCB", "Ask for the earthing test value", "Confirm dedicated AC points and their breaker ratings"] },
      { type: "h2", text: "Finishes" },
      { type: "list", items: ["Tap tiles to find hollow spots", "Check door alignment, locks and hinges", "Slide and lock every window, and check the rubber seals", "Look for paint drips, cracks and uneven surfaces"] },
      { type: "tip", text: "Photograph every issue with a visible label and share a single written list with your developer. It's much harder to dispute than a verbal complaint." },
    ],
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
