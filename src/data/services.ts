export type ServiceCategoryId =
  | "core-trades"
  | "repairs-finishes"
  | "cleaning-hygiene"
  | "property-care"
  | "safety-smart"
  | "emergency";

export interface ServiceCategory {
  id: ServiceCategoryId;
  title: string;
  blurb: string;
  iconName: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategoryId;
  iconName: string;
  /** Optional photo; services without one fall back to an illustrated panel. */
  image?: string;
  badge?: string;
  popular?: boolean;
  emergency?: boolean;
  shortDescription: string;
  fullDescription: string;
  subServices: string[];
  keyBenefits: string[];
  signs: string[];
  priceFrom: number;
  priceUnit: string;
  duration: string;
  warranty: string;
  faqs: ServiceFaq[];
  /** Free-text keywords used by the "What needs fixing?" finder. */
  keywords: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "core-trades",
    title: "Core Trades",
    blurb: "Plumbing, electrical, AC and the systems that keep a home running.",
    iconName: "Wrench",
  },
  {
    id: "repairs-finishes",
    title: "Repairs & Finishes",
    blurb: "Walls, floors, woodwork, doors and everyday fixes.",
    iconName: "Hammer",
  },
  {
    id: "cleaning-hygiene",
    title: "Cleaning & Hygiene",
    blurb: "Deep cleaning, water tanks and pest control.",
    iconName: "Sparkles",
  },
  {
    id: "property-care",
    title: "Property Care",
    blurb: "Handover, tenant change-over, inspections and owners abroad.",
    iconName: "Building2",
  },
  {
    id: "safety-smart",
    title: "Safety & Security",
    blurb: "CCTV, smart locks, intercom and fire safety.",
    iconName: "ShieldCheck",
  },
  {
    id: "emergency",
    title: "Emergency",
    blurb: "24/7 rapid response for leaks, short circuits and flooding.",
    iconName: "Siren",
  },
];

export const servicesData: ServiceItem[] = [
  // ───────────────────────── CORE TRADES ─────────────────────────
  {
    id: "plumbing",
    slug: "plumbing-sanitary",
    title: "Plumbing & Sanitary",
    category: "core-trades",
    iconName: "Droplets",
    image: "/images/services/plumbing.jpg",
    badge: "Most Booked",
    popular: true,
    emergency: true,
    shortDescription:
      "Leak detection, concealed pipe repair, commode & basin fitting, low water pressure and drain blockages.",
    fullDescription:
      "Dhaka apartments hide most of their plumbing inside walls and floor slabs, so a small drip can quietly become seepage, damp paint and a damaged ceiling below. Our plumbers trace leaks before they break anything, use moisture meters where needed, and repair with PPR/uPVC fittings that match what's already in your building.\n\nFrom a running commode to a full bathroom fixture swap, every job is quoted on the spot, done with drop sheets down, and photo-documented when finished.",
    subServices: [
      "Concealed & exposed pipe leak repair",
      "Moisture-meter leak tracing",
      "Commode, basin & cistern installation",
      "Hand shower, mixer & tap replacement",
      "Drain, floor-trap & sewer line unclogging",
      "Low water pressure diagnosis",
      "Geyser inlet / outlet connection",
      "Kitchen sink & waste pipe repair",
      "Overhead tank float valve & line repair",
      "Bathroom fixture upgrade (RAK, Grohe, Cotto & more)",
    ],
    keyBenefits: [
      "Leak traced before any tile is broken",
      "Original-brand fittings with receipts",
      "Clean-up and photo report after every job",
      "90-day workmanship warranty",
    ],
    signs: [
      "Damp patches or bubbling paint on walls",
      "Water meter running when taps are closed",
      "Slow drains or bad smell from floor traps",
      "Neighbour below reports a ceiling stain",
    ],
    priceFrom: 500,
    priceUnit: "visit & diagnosis",
    duration: "1–3 hours for most jobs",
    warranty: "90 days",
    faqs: [
      {
        q: "Will you have to break my bathroom tiles to fix a concealed leak?",
        a: "Only if it's unavoidable. We trace the leak first with pressure testing and moisture readings so we open the smallest possible area. If tiles must come off, we tell you before starting and can match and re-fix them.",
      },
      {
        q: "Do you bring the spare parts?",
        a: "Our vans carry common fittings. For branded fixtures we can supply them at market price with a receipt, or install ones you've already bought.",
      },
      {
        q: "Is the ৳500 visit charge adjusted against the bill?",
        a: "Yes. If you go ahead with the repair, the visit charge is deducted from the final invoice.",
      },
    ],
    keywords: ["leak", "pipe", "tap", "commode", "toilet", "basin", "drain", "clog", "water pressure", "sink", "bathroom", "seepage", "faucet"],
  },
  {
    id: "electrical",
    slug: "electrical-wiring",
    title: "Electrical & Wiring",
    category: "core-trades",
    iconName: "Zap",
    image: "/images/services/electrical.jpg",
    popular: true,
    emergency: true,
    shortDescription:
      "Short-circuit fixes, DB & breaker work, rewiring, lights, fans, sockets and earthing checks.",
    fullDescription:
      "Voltage fluctuation, overloaded circuits and ageing wiring are behind most electrical problems in Bangladeshi homes. Our electricians find the fault rather than just replacing the part that burned, then fix it to a safe standard with proper breaker sizing and earthing.\n\nWe also handle the everyday jobs: ceiling fans, chandeliers, LED upgrades, extra sockets for a new AC or oven, and changeover switches for your IPS or generator.",
    subServices: [
      "Short-circuit & tripping fault finding",
      "Distribution board (DB) & MCB/RCCB replacement",
      "Full or partial house rewiring",
      "Ceiling fan, light & chandelier installation",
      "Socket, switch & dedicated AC line installation",
      "Earthing test & improvement",
      "Changeover switch for IPS / generator",
      "LED & false-ceiling lighting upgrade",
      "Doorbell & exhaust fan installation",
      "Electrical safety audit with written report",
    ],
    keyBenefits: [
      "Trained, background-verified electricians",
      "Correctly rated cable and breakers — no shortcuts",
      "Power-safe testing before handover",
      "90-day workmanship warranty",
    ],
    signs: [
      "Breaker trips when the AC or iron is on",
      "Warm or blackened switches and sockets",
      "Flickering lights or buzzing sounds",
      "Mild shocks from appliances or taps",
    ],
    priceFrom: 500,
    priceUnit: "visit & diagnosis",
    duration: "1–4 hours for most jobs",
    warranty: "90 days",
    faqs: [
      {
        q: "My breaker keeps tripping. Is it dangerous?",
        a: "A tripping breaker is doing its job. It's warning you about an overload or a fault. Keep it off, unplug heavy appliances and book a visit. If you see smoke or smell burning, call our emergency line.",
      },
      {
        q: "Can you add a separate line for a new AC?",
        a: "Yes. We run a dedicated cable from the DB with a correctly sized breaker and an AC socket, which we recommend for every split AC.",
      },
      {
        q: "Do you do commercial and office electrical work?",
        a: "We do. We handle office fit-out wiring, DB maintenance and periodic safety audits for offices, shops and restaurants.",
      },
    ],
    keywords: ["electric", "wiring", "short circuit", "breaker", "trip", "switch", "socket", "light", "fan", "spark", "power", "db", "earthing"],
  },
  {
    id: "ac",
    slug: "ac-servicing-repair",
    title: "AC Servicing & Repair",
    category: "core-trades",
    iconName: "AirVent",
    image: "/images/services/hvac.jpg",
    badge: "Summer Favourite",
    popular: true,
    shortDescription:
      "Jet-wash servicing, gas top-up, PCB repair, water leakage fixes, installation and shifting for all brands.",
    fullDescription:
      "A split AC that hasn't been serviced in a Dhaka summer can use 20–30% more electricity and cool poorly. Our full jet-wash service cleans the indoor coil, blower and drain line, and checks the outdoor unit, gas pressure and amp draw, so you get proper cooling at a lower bill.\n\nWe repair and install every major brand, including inverter models, and offer discounted bulk servicing for offices and apartment buildings.",
    subServices: [
      "Master jet-wash servicing (indoor & outdoor)",
      "Gas (refrigerant) leak test & top-up",
      "Water leakage / drain line fix",
      "Inverter PCB & sensor repair",
      "Compressor & capacitor replacement",
      "New AC installation with copper piping",
      "AC uninstall & shifting",
      "Stabiliser selection & installation",
      "Bulk servicing for offices & buildings",
      "Cassette & ceiling AC maintenance",
    ],
    keyBenefits: [
      "Before / after amp & gas readings shared",
      "Covers & sheets used — no water on your walls",
      "Technicians trained on inverter models",
      "Repairs warranted for 90 days, gas leaks for 30",
    ],
    signs: [
      "Room takes long to cool or AC blows warm air",
      "Water dripping from the indoor unit",
      "Unusual noise or bad smell when running",
      "Electricity bill jumped this month",
    ],
    priceFrom: 1500,
    priceUnit: "per AC (jet-wash service)",
    duration: "45–90 minutes per unit",
    warranty: "90 days on repairs",
    faqs: [
      {
        q: "How often should I service my AC in Bangladesh?",
        a: "We recommend a full jet-wash service twice a year, once before summer (Feb–Mar) and once after monsoon (Sep–Oct). ACs that run all day in offices may need it every three months.",
      },
      {
        q: "Do I need gas every time I service?",
        a: "No. A healthy AC is a sealed system. If the pressure is low there is a leak, and we find and fix it before topping up, so you aren't paying for gas that will just leak out again.",
      },
      {
        q: "Which brands do you service?",
        a: "All major brands sold in Bangladesh, including Gree, General, Walton, Daikin, LG, Samsung, Midea, Hitachi, Sharp and Singer, inverter and non-inverter.",
      },
    ],
    keywords: ["ac", "air condition", "cooling", "gas", "split", "inverter", "aircon", "hot room", "water dripping"],
  },
  {
    id: "appliance",
    slug: "appliance-repair",
    title: "Appliance Repair",
    category: "core-trades",
    iconName: "Refrigerator",
    image: "/images/services/appliance-repair.jpg",
    shortDescription:
      "Fridge, washing machine, microwave, oven, geyser, water purifier, kitchen hood and gas stove repairs.",
    fullDescription:
      "When the fridge stops cooling or the washing machine won't drain, you need a technician who diagnoses properly rather than guessing. We repair on-site wherever possible, quote parts before replacing anything, and use genuine or high-grade compatible parts.\n\nWe also install new appliances such as kitchen hoods, built-in ovens, geysers and RO purifiers, and can safely disconnect and reconnect them when you move.",
    subServices: [
      "Refrigerator & deep freezer repair",
      "Washing machine (front & top load) repair",
      "Microwave & built-in oven repair",
      "Electric & gas geyser repair / installation",
      "Kitchen hood & chimney service",
      "Gas stove & burner repair",
      "Water purifier (RO) service & filter change",
      "Dishwasher repair & installation",
      "Appliance disconnect / reconnect for moving",
    ],
    keyBenefits: [
      "Parts quoted before replacement",
      "Genuine or high-grade compatible parts",
      "Most repairs done on the first visit",
      "60-day warranty on parts we fit",
    ],
    signs: [
      "Fridge not cooling or forming heavy ice",
      "Washer not spinning, draining or leaking",
      "Geyser trips the breaker or water is lukewarm",
      "Gas stove flame is yellow or uneven",
    ],
    priceFrom: 600,
    priceUnit: "visit & diagnosis",
    duration: "1–2 hours on-site",
    warranty: "60 days on parts",
    faqs: [
      {
        q: "Will you take my appliance to a workshop?",
        a: "Only if a repair needs bench equipment, such as compressor work or some PCB repairs. We tell you up front and arrange pickup and drop-off.",
      },
      {
        q: "Is it worth repairing an old fridge?",
        a: "Our technician will give you an honest repair-vs-replace view. If the repair costs more than about 50% of a new unit, we'll say so.",
      },
    ],
    keywords: ["fridge", "refrigerator", "washing machine", "microwave", "oven", "geyser", "water heater", "purifier", "stove", "burner", "hood", "chimney", "appliance"],
  },
  {
    id: "pump",
    slug: "water-pump-motor",
    title: "Water Pump & Motor",
    category: "core-trades",
    iconName: "Waves",
    emergency: true,
    shortDescription:
      "Pump & motor repair, auto-switch installation, pressure pumps and lifting line maintenance for buildings.",
    fullDescription:
      "No water upstairs usually means a pump, motor or float switch problem, and in an apartment building that affects every family. We repair and rewind motors, replace bearings and impellers, and install automatic level controllers so the pump never runs dry or overflows the tank.\n\nFor buildings we offer scheduled pump-room maintenance with a logbook, so the management committee can see exactly what was done and when.",
    subServices: [
      "Water pump & motor repair / rewinding",
      "Automatic water level controller installation",
      "Pressure (booster) pump installation",
      "Bearing, seal & impeller replacement",
      "Starter & control panel repair",
      "Submersible pump service",
      "Pump-room preventive maintenance contracts",
    ],
    keyBenefits: [
      "Standby pump on loan for long repairs (Dhaka)",
      "Auto-controllers that stop dry-running",
      "Logbook for building committees",
      "90-day workmanship warranty",
    ],
    signs: [
      "Pump runs but water doesn't reach the tank",
      "Humming motor that won't start",
      "Tank overflows or runs dry often",
      "Tripping starter or burning smell in pump room",
    ],
    priceFrom: 800,
    priceUnit: "visit & diagnosis",
    duration: "2–4 hours (rewinding 1–2 days)",
    warranty: "90 days",
    faqs: [
      {
        q: "Can you make the pump turn on and off by itself?",
        a: "Yes. An automatic water level controller with sensors in the underground reservoir and overhead tank switches the pump on and off for you and protects it from dry-running.",
      },
    ],
    keywords: ["pump", "motor", "no water", "tank overflow", "pressure pump", "lifting", "water supply"],
  },
  {
    id: "power",
    slug: "ips-generator-maintenance",
    title: "IPS, UPS & Generator",
    category: "core-trades",
    iconName: "BatteryCharging",
    shortDescription:
      "Load-shedding readiness: IPS & battery service, inverter repair, generator maintenance and changeover setup.",
    fullDescription:
      "Load-shedding is part of life, and backup power fails at the worst moment when it isn't maintained. We test battery health, top up and equalise tubular batteries, check inverter output, and size new systems to the load you actually need.\n\nFor buildings and offices we maintain diesel and gas generators on a schedule: oil, filters, coolant, battery and load test, all logged.",
    subServices: [
      "IPS / inverter repair & installation",
      "Battery health test, water top-up & replacement",
      "Load calculation & system sizing",
      "Online UPS service for offices",
      "Generator servicing (oil, filters, coolant)",
      "Generator load test & ATS/changeover check",
      "Solar-ready IPS upgrades",
    ],
    keyBenefits: [
      "Right-sized systems, so you don't overpay",
      "Battery health report with remaining life",
      "Scheduled reminders before summer",
      "Works with all major brands",
    ],
    signs: [
      "Backup time has dropped noticeably",
      "IPS beeps or switches off under load",
      "Batteries swelling or leaking",
      "Generator hard to start or smoking",
    ],
    priceFrom: 800,
    priceUnit: "service visit",
    duration: "1–3 hours",
    warranty: "60 days",
    faqs: [
      {
        q: "How often should IPS batteries be checked?",
        a: "Tubular batteries need distilled water topped up every 2–3 months and a health check every 6 months. Sealed batteries just need a periodic load test.",
      },
    ],
    keywords: ["ips", "ups", "generator", "battery", "load shedding", "backup", "inverter", "power cut"],
  },

  // ───────────────────────── REPAIRS & FINISHES ─────────────────────────
  {
    id: "handyman",
    slug: "home-repair-handyman",
    title: "Home Repair & Handyman",
    category: "repairs-finishes",
    iconName: "Hammer",
    image: "/images/services/home-repair.jpg",
    popular: true,
    shortDescription:
      "One visit for the to-do list: curtain rods, TV mounting, shelves, door locks, hinges, cracks and small fixes.",
    fullDescription:
      "Most homes have a list of small jobs that never get done because each one feels too small to call someone. Book a handyman by the hour and we'll work through the list: drill and mount, adjust and tighten, patch and seal.\n\nOur handymen arrive with a full kit, including a dust-extracting drill, and leave your space as they found it.",
    subServices: [
      "TV wall mounting & cable hiding",
      "Curtain rod, blind & shelf installation",
      "Wall crack & hole patching",
      "Door hinge, handle & lock repair",
      "Furniture assembly",
      "Mirror, frame & bathroom accessory fixing",
      "Silicone sealing for sinks & windows",
      "Make-ready punch lists for landlords",
    ],
    keyBenefits: [
      "Book by the hour — no minimum job size",
      "Dust-extracting tools for clean drilling",
      "One visit for the whole to-do list",
      "30-day workmanship warranty",
    ],
    signs: [
      "A list of small jobs that keeps growing",
      "New TV or furniture waiting to be mounted",
      "Doors that stick, squeak or won't lock",
      "Hairline cracks and holes in walls",
    ],
    priceFrom: 600,
    priceUnit: "first hour",
    duration: "Booked by the hour",
    warranty: "30 days",
    faqs: [
      {
        q: "What can I get done in one handyman visit?",
        a: "As much as fits in the time you book. Send us your list and photos on WhatsApp and we'll estimate the hours and bring the right materials.",
      },
    ],
    keywords: ["handyman", "tv mount", "curtain", "shelf", "drill", "hang", "fix", "small job", "assemble", "furniture assembly"],
  },
  {
    id: "painting",
    slug: "painting-wall-care",
    title: "Painting & Wall Care",
    category: "repairs-finishes",
    iconName: "PaintRoller",
    image: "/images/services/painting.jpg",
    shortDescription:
      "Interior & exterior repainting, putty & primer work, damp-wall treatment, texture and enamel for doors & grills.",
    fullDescription:
      "A fresh coat of paint is the fastest way to make a flat feel new, whether for Eid, a new tenant or a sale. We do the preparation properly: scraping, crack filling, putty, sanding and primer. That preparation is what makes paint last through Bangladesh's humidity.\n\nWe use Berger, Asian Paints, Nippon and other brands you choose, cover furniture and floors, and work room by room so you can keep living at home.",
    subServices: [
      "Interior repainting (plastic, distemper, luxury emulsion)",
      "Exterior weather-coat painting",
      "Putty, sanding & primer preparation",
      "Damp & fungus wall treatment",
      "Enamel for doors, windows & grills",
      "Texture & accent walls",
      "Wood polish & lacquer touch-ups",
      "Tenant change-over touch-up painting",
    ],
    keyBenefits: [
      "Free colour consultation & shade cards",
      "Furniture & floor fully covered",
      "Room-by-room scheduling",
      "1-year warranty against peeling (interior)",
    ],
    signs: [
      "Peeling, flaking or chalky walls",
      "Fungus spots after the monsoon",
      "Stains and marks that won't wipe off",
      "Preparing for a new tenant or a sale",
    ],
    priceFrom: 18,
    priceUnit: "per sq ft (labour + paint)",
    duration: "2–5 days for a typical flat",
    warranty: "1 year (interior)",
    faqs: [
      {
        q: "How do you price painting?",
        a: "We measure the paintable area during a free site visit and quote per square foot, including preparation, primer and two finish coats in your chosen brand and grade.",
      },
      {
        q: "Will damp come back after painting?",
        a: "Painting over damp just hides it. We find the source first, which is usually a leak or a failed roof or external wall, and recommend waterproofing where needed, so the new paint lasts.",
      },
    ],
    keywords: ["paint", "painting", "wall", "colour", "color", "putty", "fungus", "peeling", "damp wall", "enamel"],
  },
  {
    id: "waterproofing",
    slug: "waterproofing-damp-repair",
    title: "Waterproofing & Damp Repair",
    category: "repairs-finishes",
    iconName: "Umbrella",
    image: "/images/services/roofing.jpg",
    badge: "Pre-Monsoon",
    popular: true,
    shortDescription:
      "Roof & terrace waterproofing, bathroom leakage treatment, external wall seepage and crack injection.",
    fullDescription:
      "The monsoon finds every weak spot in a building: hairline roof cracks, failed bathroom floors and porous external walls. We start with an inspection to find where the water is coming in, then apply the right system for that surface, such as polymer-modified coatings, PU or acrylic membranes, or chemical injection.\n\nEvery waterproofing job comes with a written warranty, and we test roofs with ponding before we sign off.",
    subServices: [
      "Roof & terrace waterproofing membranes",
      "Bathroom & kitchen floor leakage treatment",
      "External wall seepage protection",
      "Crack filling & PU injection grouting",
      "Water tank & reservoir lining",
      "Expansion joint sealing",
      "Balcony & sunshade drainage correction",
      "Moisture mapping & leak investigation",
    ],
    keyBenefits: [
      "Leak source found before work starts",
      "Ponding test before sign-off",
      "Brand systems from Dr. Fixit, Sika & more",
      "Up to 5-year written warranty",
    ],
    signs: [
      "Ceiling stains or drips during rain",
      "Damp, salty patches on the lower walls",
      "Leakage into the flat below from a bathroom",
      "Cracks on the roof or parapet",
    ],
    priceFrom: 45,
    priceUnit: "per sq ft",
    duration: "2–6 days depending on area",
    warranty: "Up to 5 years",
    faqs: [
      {
        q: "When is the best time to waterproof?",
        a: "Ideally in the dry season, from November to April, so surfaces can dry and cure fully. Book early, because pre-monsoon slots fill up fast.",
      },
      {
        q: "Can you fix a bathroom leak without breaking tiles?",
        a: "Often, yes. For grout-line and joint leaks we use injection or penetrating sealers through the existing tiles. If the floor membrane has failed completely, re-tiling may be the only lasting fix, and we'll show you why.",
      },
    ],
    keywords: ["waterproof", "roof leak", "seepage", "damp", "leakage", "rain", "ceiling stain", "crack", "monsoon", "terrace"],
  },
  {
    id: "flooring",
    slug: "flooring-tile-repair",
    title: "Flooring & Tile Repair",
    category: "repairs-finishes",
    iconName: "Grid3x3",
    image: "/images/services/flooring.jpg",
    shortDescription:
      "Cracked tile replacement, re-grouting, hollow tile fixing, marble polishing and floor restoration.",
    fullDescription:
      "Hollow-sounding tiles, cracked pieces and blackened grout make a floor look old long before it is. We replace damaged tiles with matched pieces, re-grout with stain-resistant epoxy where it matters, and bring marble and mosaic floors back with machine polishing.",
    subServices: [
      "Cracked & hollow tile replacement",
      "Re-grouting (cement & epoxy)",
      "Marble & mosaic machine polishing",
      "Wall tile repair in bathrooms & kitchens",
      "Skirting replacement",
      "Anti-slip treatment for bathrooms",
      "Wooden & vinyl floor repair",
    ],
    keyBenefits: [
      "Best-effort tile matching from our stock",
      "Dust-controlled cutting",
      "Epoxy grout that resists stains",
      "90-day workmanship warranty",
    ],
    signs: [
      "Tiles sound hollow when tapped",
      "Cracked or lifting tiles",
      "Black, crumbling grout lines",
      "Dull, scratched marble floors",
    ],
    priceFrom: 1200,
    priceUnit: "visit (small repairs)",
    duration: "Half day to 3 days",
    warranty: "90 days",
    faqs: [
      {
        q: "What if I don't have spare tiles?",
        a: "Bring us a photo or a broken piece and we'll try to source a match from the market. If an exact match isn't possible, we can suggest a deliberate contrast border.",
      },
    ],
    keywords: ["tile", "floor", "grout", "marble", "polish", "cracked tile", "hollow"],
  },
  {
    id: "carpentry",
    slug: "carpentry-furniture-repair",
    title: "Carpentry & Furniture",
    category: "repairs-finishes",
    iconName: "Drill",
    image: "/images/services/carpentry.jpg",
    shortDescription:
      "Door & frame repair, kitchen cabinet fixes, wardrobe hinges, furniture repair, polish and custom shelving.",
    fullDescription:
      "Humidity makes wooden doors swell, hinges sag and cabinet drawers stick. Our carpenters plane, re-hang and re-align doors, replace soft-close hardware, repair broken furniture and polish it back to life.\n\nNeed something new? We build shelving, shoe racks and small storage units to measure.",
    subServices: [
      "Door planing, re-hanging & frame repair",
      "Kitchen cabinet hinge & channel replacement",
      "Wardrobe & drawer repair",
      "Furniture repair & re-polish",
      "Custom shelving & storage",
      "Termite-damaged wood replacement",
      "Lock & handle replacement",
    ],
    keyBenefits: [
      "Branded hardware (Hettich, Ebco & more)",
      "On-site workshop tools",
      "Colour-matched polish",
      "60-day workmanship warranty",
    ],
    signs: [
      "Doors that stick or won't close",
      "Sagging cabinet doors or broken channels",
      "Wobbly or broken furniture",
      "Termite dust or hollow wood",
    ],
    priceFrom: 600,
    priceUnit: "visit & first hour",
    duration: "1 hour to 2 days",
    warranty: "60 days",
    faqs: [
      {
        q: "Do you make new furniture?",
        a: "We focus on repair and small built-ins such as shelves, racks and cabinet modifications. For full new furniture we can refer you to trusted partners.",
      },
    ],
    keywords: ["door", "wood", "cabinet", "carpenter", "furniture", "drawer", "hinge", "wardrobe", "termite"],
  },
  {
    id: "doors",
    slug: "doors-windows-grills",
    title: "Doors, Windows & Grills",
    category: "repairs-finishes",
    iconName: "DoorOpen",
    shortDescription:
      "Thai aluminium & UPVC window repair, sliding track fixes, glass replacement, grill welding and gate repair.",
    fullDescription:
      "Sliding windows that jam, rubber seals that let rain in, cracked glass and rusted grills are common after a few monsoons. We repair Thai aluminium and UPVC frames, replace rollers, locks and gaskets, cut and fit glass, and weld or repaint grills and gates on site.",
    subServices: [
      "Thai aluminium sliding window repair",
      "UPVC window & door servicing",
      "Roller, lock & gasket replacement",
      "Glass cutting & replacement",
      "Mosquito net (window screen) installation",
      "Grill & gate welding repair",
      "Rust treatment & enamel painting",
      "Collapsible gate & shutter servicing",
    ],
    keyBenefits: [
      "Rain-tight resealing",
      "Glass cut to size on the same day",
      "On-site welding equipment",
      "60-day workmanship warranty",
    ],
    signs: [
      "Windows hard to slide or lock",
      "Rainwater coming in around frames",
      "Rusty or broken grills",
      "Gates that drag or won't latch",
    ],
    priceFrom: 700,
    priceUnit: "visit & diagnosis",
    duration: "1–4 hours",
    warranty: "60 days",
    faqs: [
      {
        q: "Can you install mosquito nets on sliding windows?",
        a: "Yes. We fit sliding or fixed fibreglass mesh screens to measure on Thai aluminium and UPVC windows.",
      },
    ],
    keywords: ["window", "sliding", "thai", "glass", "grill", "gate", "aluminium", "net", "mosquito net", "shutter"],
  },
  {
    id: "bath-kitchen",
    slug: "bathroom-kitchen-refresh",
    title: "Bathroom & Kitchen Refresh",
    category: "repairs-finishes",
    iconName: "Bath",
    image: "/images/services/remodeling.jpg",
    shortDescription:
      "Fixture upgrades, vanity & basin swaps, re-grouting, exhaust fans, kitchen sink and cabinet hardware refresh.",
    fullDescription:
      "You don't need a renovation to make a tired bathroom or kitchen feel new. Our refresh packages combine new fixtures, re-grouting, sealing, an exhaust fan and better lighting, done in one or two days without breaking walls.",
    subServices: [
      "Basin, vanity & mirror cabinet replacement",
      "Commode & concealed cistern upgrade",
      "Shower mixer & rain-shower installation",
      "Re-grouting & anti-fungal sealing",
      "Exhaust fan installation",
      "Kitchen sink, mixer & waste replacement",
      "Cabinet hinge, handle & channel refresh",
      "Under-cabinet LED lighting",
    ],
    keyBenefits: [
      "No breaking — refresh, not renovation",
      "Done in 1–2 days",
      "Fixture sourcing at market price",
      "90-day workmanship warranty",
    ],
    signs: [
      "Old, stained grout and silicone",
      "Leaky or outdated fixtures",
      "Poor ventilation and fungus",
      "Sticky cabinets and dim lighting",
    ],
    priceFrom: 4500,
    priceUnit: "per bathroom (labour)",
    duration: "1–2 days",
    warranty: "90 days",
    faqs: [
      {
        q: "Is this a full renovation?",
        a: "No. We don't do construction or structural renovation. A refresh replaces and restores fixtures and finishes within your existing layout, quickly and with minimal mess.",
      },
    ],
    keywords: ["bathroom", "kitchen", "shower", "basin", "vanity", "refresh", "upgrade", "exhaust"],
  },

  // ───────────────────────── CLEANING & HYGIENE ─────────────────────────
  {
    id: "cleaning",
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    category: "cleaning-hygiene",
    iconName: "Sparkles",
    image: "/images/services/cleaning.jpg",
    badge: "Eid Special",
    popular: true,
    shortDescription:
      "Full-home, kitchen and bathroom deep cleaning, sofa & carpet shampoo, move-in/move-out and office cleaning.",
    fullDescription:
      "Our trained cleaning crews use machine scrubbers, steam and safe chemicals to remove grease, limescale and grime that regular cleaning leaves behind. Choose a full-home deep clean, or target the kitchen, bathrooms, sofas or carpets.\n\nAll crews are supervised, background-verified and bring their own equipment and materials.",
    subServices: [
      "Full home deep cleaning",
      "Kitchen degreasing (hood, tiles, cabinets)",
      "Bathroom descaling & disinfection",
      "Sofa, mattress & carpet shampooing",
      "Move-in / move-out cleaning",
      "Window, grill & balcony cleaning",
      "Office & showroom cleaning",
      "Disinfection & sanitisation",
    ],
    keyBenefits: [
      "Supervised, background-verified crews",
      "Machines, steam & safe chemicals included",
      "Checklist sign-off with you",
      "Free re-clean if any area is missed",
    ],
    signs: [
      "Moving into or out of a flat",
      "Greasy kitchen tiles and hood",
      "Hard water stains in bathrooms",
      "Preparing for Eid, a wedding or guests",
    ],
    priceFrom: 4500,
    priceUnit: "per flat (up to 1,200 sq ft)",
    duration: "5–8 hours with a 3–5 person crew",
    warranty: "Free re-clean within 24 hrs",
    faqs: [
      {
        q: "Do I need to provide anything?",
        a: "Just water and electricity. Our crew brings all machines, chemicals and materials.",
      },
      {
        q: "Are your chemicals safe for children and pets?",
        a: "We use diluted, branded cleaning agents and ventilate as we work. Tell us about pets, infants or allergies and we'll switch to gentler products.",
      },
    ],
    keywords: ["clean", "cleaning", "deep clean", "sofa", "carpet", "shampoo", "move out", "dust", "kitchen grease", "sanitize"],
  },
  {
    id: "tank",
    slug: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    category: "cleaning-hygiene",
    iconName: "Droplet",
    badge: "Health Essential",
    popular: true,
    shortDescription:
      "Underground reservoir & overhead tank cleaning with sludge removal, scrubbing, disinfection and a photo report.",
    fullDescription:
      "Sediment, iron and algae build up in underground reservoirs and overhead tanks, and that's the water your family drinks and bathes in. Our 6-step process drains the tank, removes sludge, scrubs the walls, rinses, disinfects and refills it, with before and after photos for your records.\n\nApartment owners' associations can schedule cleaning every 6 months, and we remind every resident.",
    subServices: [
      "Underground reservoir cleaning",
      "Overhead tank cleaning",
      "Sludge pumping & removal",
      "Wall scrubbing & high-pressure rinse",
      "Disinfection (food-grade)",
      "Tank lid, ladder & float valve check",
      "Water quality basic test (optional)",
    ],
    keyBenefits: [
      "6-step, documented process",
      "Before & after photo report",
      "Safety gear & confined-space practice",
      "Reminder service every 6 months",
    ],
    signs: [
      "Yellowish or muddy water",
      "Bad smell from taps",
      "Sand or particles in buckets",
      "Last cleaning was over 6 months ago",
    ],
    priceFrom: 2500,
    priceUnit: "per tank (up to 2,000 gal)",
    duration: "2–4 hours per tank",
    warranty: "Photo-verified job",
    faqs: [
      {
        q: "How often should tanks be cleaned?",
        a: "Every 6 months is recommended for Dhaka, and more often if you notice discoloured water or after flooding near the reservoir.",
      },
      {
        q: "Will we be without water all day?",
        a: "Usually only 2–4 hours per tank. We coordinate with your building so residents can store water beforehand.",
      },
    ],
    keywords: ["tank", "reservoir", "water tank", "dirty water", "smell", "yellow water", "sludge"],
  },
  {
    id: "pest",
    slug: "pest-control",
    title: "Pest Control",
    category: "cleaning-hygiene",
    iconName: "Bug",
    shortDescription:
      "Cockroach, termite, bed bug, mosquito and rodent control with odourless gel and certified chemicals.",
    fullDescription:
      "Pests thrive in Bangladesh's warm, humid climate. We use targeted, low-odour treatments, such as gel baits for cockroaches, anti-termite injection, and heat and residual spray for bed bugs, so you rarely need to leave home.\n\nFor dengue season we offer larvicide and fogging for buildings, offices and gardens.",
    subServices: [
      "Cockroach gel treatment",
      "Termite (anti-termite) injection",
      "Bed bug treatment",
      "Mosquito control & fogging (dengue season)",
      "Rodent control & proofing",
      "Ant & lizard treatment",
      "Quarterly pest control contracts",
    ],
    keyBenefits: [
      "Low-odour, family-safe products",
      "Licensed chemical handlers",
      "Follow-up visit included",
      "Service warranty up to 3 months",
    ],
    signs: [
      "Cockroaches in kitchen and drains",
      "Mud tubes or hollow-sounding wood",
      "Itchy bites and spots on mattresses",
      "Mosquito breeding near the building",
    ],
    priceFrom: 2000,
    priceUnit: "per flat",
    duration: "1–3 hours",
    warranty: "Up to 3 months",
    faqs: [
      {
        q: "Do we need to leave the house?",
        a: "For gel baiting, no. For spray treatments we recommend stepping out for 2–3 hours. We'll tell you exactly what to expect when you book.",
      },
    ],
    keywords: ["pest", "cockroach", "termite", "bed bug", "mosquito", "rat", "mouse", "rodent", "dengue", "ant"],
  },

  // ───────────────────────── PROPERTY CARE ─────────────────────────
  {
    id: "handover",
    slug: "handover-snagging",
    title: "Handover Snagging & Make-Ready",
    category: "property-care",
    iconName: "ClipboardCheck",
    badge: "New Flat Owners",
    popular: true,
    shortDescription:
      "Just got the keys? We inspect, fix the snag list and deep-clean your new flat so it's truly move-in ready.",
    fullDescription:
      "When a developer hands over a flat, there's usually a list of finishing issues: loose fittings, uneven tiles, paint marks, leaking joints, missing sockets. We inspect against a 120-point checklist, give you a photo snag report you can share with your developer, and fix the items that fall outside their scope.\n\nThen our cleaning crew removes post-handover dust, paint and cement residue so you can move straight in.",
    subServices: [
      "120-point handover inspection",
      "Photo snag report to share with developer",
      "Plumbing & electrical fixture checks",
      "Snag fixing (fittings, sealing, touch-ups)",
      "Post-handover deep cleaning",
      "Curtain, light & accessory installation",
      "Move-in setup (AC, geyser, appliances)",
    ],
    keyBenefits: [
      "Independent, owner-side inspection",
      "Shareable digital report",
      "One team for fixing & cleaning",
      "Move-in ready in 2–4 days",
    ],
    signs: [
      "Taking handover from a developer",
      "Paint marks and cement residue everywhere",
      "Unsure if fittings & wiring are right",
      "Planning to move in within a few weeks",
    ],
    priceFrom: 6000,
    priceUnit: "inspection & report",
    duration: "Inspection 3–4 hrs; make-ready 2–4 days",
    warranty: "90 days on fixes",
    faqs: [
      {
        q: "Do you work with developers too?",
        a: "Yes. Several developers use us as their after-sales service team to handle handover snags and warranty-period repairs for their buyers.",
      },
    ],
    keywords: ["handover", "new flat", "snag", "move in", "developer", "keys", "make ready"],
  },
  {
    id: "turnover",
    slug: "tenant-turnover",
    title: "Tenant Turnover",
    category: "property-care",
    iconName: "KeyRound",
    shortDescription:
      "Between tenants: inspection, repairs, repaint, deep clean and lock change, so your flat is re-let fast.",
    fullDescription:
      "Every week a flat sits empty is lost rent. Our turnover package gets it ready in days, not weeks. We inspect on move-out with photos, carry out the agreed repairs, touch up or repaint, deep-clean, change locks and hand you back a ready-to-show property.\n\nLandlords managing several units get a single point of contact and a monthly summary.",
    subServices: [
      "Move-out inspection with photo report",
      "Damage list & deposit-deduction estimate",
      "Repairs (plumbing, electrical, fittings)",
      "Touch-up or full repaint",
      "Deep cleaning",
      "Lock cylinder change",
      "Ready-to-show photos for listing",
    ],
    keyBenefits: [
      "Turnaround in 3–7 days",
      "Fixed-price packages",
      "Photo evidence for deposits",
      "One contact for multiple units",
    ],
    signs: [
      "Tenant moving out this month",
      "Flat needs work before re-listing",
      "Disputes over deposit deductions",
      "You manage several rental units",
    ],
    priceFrom: 9500,
    priceUnit: "per flat (package)",
    duration: "3–7 days",
    warranty: "90 days on repairs",
    faqs: [
      {
        q: "Can you handle it if I live abroad?",
        a: "Yes. We coordinate key handover with your caretaker, share photos and videos at every step, and you can pay online.",
      },
    ],
    keywords: ["tenant", "landlord", "rent", "move out", "turnover", "vacant", "re-let"],
  },
  {
    id: "inspection",
    slug: "property-inspection",
    title: "Property Health Check",
    category: "property-care",
    iconName: "Search",
    shortDescription:
      "A full check-up of plumbing, electrical, damp, structure finishes and safety, with a prioritised repair report.",
    fullDescription:
      "Buying, renting out or simply wondering what's wrong? Our property health check covers electrical safety, plumbing and leaks, damp and seepage, doors and windows, fire safety and more. You get a clear, prioritised report: what's urgent, what can wait and what it will roughly cost.",
    subServices: [
      "Electrical safety & earthing check",
      "Plumbing pressure & leak check",
      "Damp & seepage moisture mapping",
      "Doors, windows & fittings condition",
      "Fire safety & gas line check",
      "Prioritised repair cost estimate",
      "Annual inspection for buildings",
    ],
    keyBenefits: [
      "Independent, unbiased report",
      "Urgent / soon / later prioritisation",
      "Cost estimate for every item",
      "Fee adjusted if you book repairs",
    ],
    signs: [
      "Buying or renting a resale flat",
      "Building is 10+ years old",
      "Multiple small issues appearing",
      "Annual check for a committee or office",
    ],
    priceFrom: 3500,
    priceUnit: "per flat",
    duration: "2–4 hours on site",
    warranty: "Report within 48 hrs",
    faqs: [
      {
        q: "Is this a structural engineering survey?",
        a: "No. This is a maintenance-focused check of services and finishes. If we see signs of structural concern, we'll recommend an independent structural engineer.",
      },
    ],
    keywords: ["inspection", "check", "survey", "buying", "report", "audit", "health check"],
  },
  {
    id: "nrb",
    slug: "nrb-property-care",
    title: "Care for Owners Abroad",
    category: "property-care",
    iconName: "Plane",
    badge: "For NRBs",
    shortDescription:
      "Living overseas? We look after your flat: monthly visits, bill checks, repairs and tenant issues, with video updates.",
    fullDescription:
      "Many Bangladeshis abroad own property at home with no one to look after it. Our NRB care plan makes us your local hands. We visit monthly, check for leaks, damp and pests, run taps and the AC, coordinate with the caretaker and handle repairs with your approval.\n\nYou get a photo and video report after every visit and can approve quotes and pay online from anywhere.",
    subServices: [
      "Monthly or quarterly inspection visits",
      "Photo & video reports",
      "Utility bill & meter checks",
      "Repair coordination with approval",
      "Tenant move-in / move-out handling",
      "Pre-arrival cleaning & setup",
      "Key holding (optional)",
    ],
    keyBenefits: [
      "WhatsApp updates in your time zone",
      "Nothing done without your approval",
      "Online payment from abroad",
      "Dedicated relationship manager",
    ],
    signs: [
      "Your flat is vacant most of the year",
      "No trusted person nearby to check it",
      "Tenant issues you can't handle remotely",
      "Visiting home and want it ready",
    ],
    priceFrom: 3500,
    priceUnit: "per month",
    duration: "Ongoing plan",
    warranty: "Cancel anytime",
    faqs: [
      {
        q: "How do I pay from abroad?",
        a: "By international card, bank transfer, or a family member paying locally through bKash or Nagad. Every payment gets a digital receipt.",
      },
    ],
    keywords: ["abroad", "nrb", "overseas", "vacant flat", "probashi", "remote", "foreign"],
  },
  {
    id: "landscaping",
    slug: "rooftop-garden-landscaping",
    title: "Rooftop Garden & Landscaping",
    category: "property-care",
    iconName: "Sprout",
    image: "/images/services/landscaping.jpg",
    shortDescription:
      "Rooftop and balcony gardens, plant care contracts, lawn upkeep, drainage and pot & planter setup.",
    fullDescription:
      "Rooftop gardens cool the building and give families green space in the city, but they need the right waterproofing, drainage and care. We design and set up rooftop and balcony gardens, and maintain them on weekly or monthly visits: pruning, fertilising, pest control and replanting.",
    subServices: [
      "Rooftop & balcony garden setup",
      "Planters, raised beds & drainage",
      "Weekly / monthly plant care",
      "Lawn mowing & hedge trimming",
      "Drip irrigation installation",
      "Seasonal replanting",
    ],
    keyBenefits: [
      "Waterproofing-aware design",
      "Trained gardeners",
      "Plant replacement guarantee (care plans)",
      "Flexible visit schedules",
    ],
    signs: [
      "Unused rooftop or balcony",
      "Plants dying in summer heat",
      "Waterlogging on the roof",
      "Building wants a shared green space",
    ],
    priceFrom: 2500,
    priceUnit: "per maintenance visit",
    duration: "Setup 1–3 days",
    warranty: "30-day plant guarantee",
    faqs: [
      {
        q: "Will a rooftop garden damage my roof?",
        a: "Not if it's planned properly. We check the existing waterproofing, use raised planters with drainage cells and keep loads within safe limits.",
      },
    ],
    keywords: ["garden", "plant", "rooftop", "balcony", "lawn", "landscape", "tree"],
  },

  // ───────────────────────── SAFETY & SECURITY ─────────────────────────
  {
    id: "cctv",
    slug: "cctv-security",
    title: "CCTV, Intercom & Smart Locks",
    category: "safety-smart",
    iconName: "Cctv",
    shortDescription:
      "IP & analog CCTV, mobile viewing, video intercom, smart door locks and access control for homes & buildings.",
    fullDescription:
      "Know who's at the gate and what's happening at home from your phone. We design, install and maintain CCTV for flats, buildings and offices, set up mobile viewing, and fit video intercoms and digital door locks that work with your family's routine.",
    subServices: [
      "CCTV design & installation (IP / analog)",
      "Mobile app remote viewing setup",
      "DVR / NVR repair & storage upgrade",
      "Video intercom for buildings",
      "Smart / digital door lock installation",
      "Access control & attendance devices",
      "Annual CCTV maintenance",
    ],
    keyBenefits: [
      "Coverage plan before installation",
      "Neat cable routing",
      "Phone setup for the whole family",
      "1-year installation warranty",
    ],
    signs: [
      "Building has no gate camera",
      "Old cameras with blurry footage",
      "Want to check on family remotely",
      "Losing keys or managing helpers' access",
    ],
    priceFrom: 3500,
    priceUnit: "per camera (installed)",
    duration: "Half day to 2 days",
    warranty: "1 year (installation)",
    faqs: [
      {
        q: "Can I watch the cameras on my phone abroad?",
        a: "Yes. We set up secure mobile viewing on your phone, and on family members' phones if you like, wherever you are.",
      },
    ],
    keywords: ["cctv", "camera", "security", "intercom", "lock", "smart lock", "door lock", "access"],
  },
  {
    id: "fire",
    slug: "fire-safety",
    title: "Fire & Gas Safety",
    category: "safety-smart",
    iconName: "Flame",
    shortDescription:
      "Fire extinguisher supply & refill, smoke and gas detectors, gas line leak checks and building safety audits.",
    fullDescription:
      "Gas line leaks and electrical faults are the leading causes of home fires in Bangladesh. We check gas lines and stove connections, install smoke and gas leak detectors, supply and refill extinguishers, and run fire safety audits for apartment buildings and offices.",
    subServices: [
      "Gas line & stove connection leak check",
      "Smoke & gas leak detector installation",
      "Fire extinguisher supply & refill",
      "Fire safety audit for buildings",
      "Emergency exit & signage check",
      "Fire drill & resident awareness session",
    ],
    keyBenefits: [
      "Soap & detector gas leak testing",
      "Branded extinguishers with refill tags",
      "Audit report for building committees",
      "Refill reminders",
    ],
    signs: [
      "Gas smell near the stove or riser",
      "No extinguisher in kitchen or stairwell",
      "Building never had a safety audit",
      "Extinguishers past their refill date",
    ],
    priceFrom: 1000,
    priceUnit: "gas safety check",
    duration: "1–3 hours",
    warranty: "Report on the day",
    faqs: [
      {
        q: "I smell gas. What should I do?",
        a: "Don't switch any electrics on or off, and don't light a flame. Close the gas valve, open the windows, leave the flat and call our emergency line or the Titas or Karnaphuli gas emergency number.",
      },
    ],
    keywords: ["fire", "gas", "gas leak", "smell gas", "extinguisher", "smoke detector", "safety"],
  },

  // ───────────────────────── EMERGENCY ─────────────────────────
  {
    id: "emergency",
    slug: "emergency-repairs",
    title: "24/7 Emergency Repairs",
    category: "emergency",
    iconName: "Siren",
    badge: "24/7",
    emergency: true,
    shortDescription:
      "Burst pipes, short circuits, flooding, no water, lockouts and storm damage, with a team on the way in about 60 minutes.",
    fullDescription:
      "Some problems can't wait until morning. Our emergency line is answered 24/7 by a coordinator who talks you through making things safe, then dispatches the nearest on-call technician. In core Dhaka areas we aim to be at your door within 60 minutes.",
    subServices: [
      "Burst pipe & major leak control",
      "Short circuit & power failure",
      "Flooding & waterlogging water removal",
      "No-water pump emergencies",
      "Lockouts & broken locks",
      "Storm damage make-safe",
      "Gas leak make-safe (with utility)",
    ],
    keyBenefits: [
      "Answered by a person, 24/7",
      "~60-minute arrival in core Dhaka",
      "Make-safe first, repair next",
      "Clear emergency rates, no surprises",
    ],
    signs: [
      "Water pouring from a pipe or ceiling",
      "Sparks, smoke or burning smell",
      "Water entering the flat during a storm",
      "Locked out or a broken main door lock",
    ],
    priceFrom: 1500,
    priceUnit: "emergency call-out",
    duration: "Arrival ~60 min (core areas)",
    warranty: "90 days on repairs",
    faqs: [
      {
        q: "Is the emergency rate higher?",
        a: "Between 10 PM and 7 AM, and on public holidays, a call-out charge of ৳1,500 applies. Repairs are charged at normal rates once we're on site. AMC members don't pay the call-out.",
      },
    ],
    keywords: ["emergency", "urgent", "burst", "flood", "spark", "smoke", "locked out", "now", "night"],
  },
];

export const getServiceBySlug = (slug: string) => servicesData.find((s) => s.slug === slug);

export const getCategory = (id: ServiceCategoryId) => serviceCategories.find((c) => c.id === id)!;

export const getRelatedServices = (service: ServiceItem, count = 3) => {
  const sameCategory = servicesData.filter((s) => s.category === service.category && s.slug !== service.slug);
  const others = servicesData.filter((s) => s.category !== service.category && s.popular && s.slug !== service.slug);
  return [...sameCategory, ...others].slice(0, count);
};
