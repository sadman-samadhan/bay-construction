export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  badge?: string;
  subServices: string[];
  keyBenefits: string[];
  popular?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "remodeling",
    slug: "luxury-interior-renovation",
    title: "Luxury Interior Design & Renovation",
    category: "Major Renovations",
    shortDescription:
      "Full-spectrum architectural interior design, 3D modeling, and renovation for luxury apartments, duplexes, and corporate offices in Dhaka.",
    fullDescription:
      "Transform your apartment or duplex into a modern masterpiece. We specialize in contemporary space planning, open-concept kitchen transformations, luxury master bedrooms, ambient false lighting, and custom Chittagong Segun teak woodwork tailored for modern urban living in Bangladesh.",
    image: "/images/services/remodeling.jpg",
    iconName: "Home",
    badge: "Most Requested",
    popular: true,
    subServices: [
      "Complete Apartment & Duplex Remodeling",
      "Modern Open-Concept Modular Kitchens",
      "Luxury Master Bathroom Overhauls",
      "3D Architectural Visualization & Design",
      "Office & Commercial Space Fit-Outs",
    ],
    keyBenefits: [
      "Experienced BUET/AUST Certified Architects & Engineers",
      "3D Architectural Previews Before Work Starts",
      "Strict Milestone-Based Project Timelines",
      "Written 5-Year Workmanship Warranty",
    ],
  },
  {
    id: "plumbing",
    slug: "sanitary-plumbing-solutions",
    title: "Sanitary & Plumbing Solutions",
    category: "Mechanical & Systems",
    shortDescription:
      "Reliable plumbing, concealed pipe leak detection, modern sanitary fittings, and water pump & underground reservoir maintenance.",
    fullDescription:
      "Plumbing issues in Dhaka apartments require experienced diagnosis. From concealed PPR/CPVC pipe leakage and low water pressure to luxury sanitary ware installation (Grohe, Kohler, Cotto, RAK) and automated pressure pump systems, our master plumbers deliver prompt, clean service.",
    image: "/images/services/plumbing.jpg",
    iconName: "Droplet",
    badge: "24/7 Response",
    popular: true,
    subServices: [
      "Concealed Pipe Leak Detection & Repair",
      "Modern Sanitary Ware & Commode Installation",
      "Overhead & Underground Water Tank Cleaning",
      "Water Pump, Submersible & Pressure Booster Setup",
      "Gas Geyser & Central Water Heater Repair",
    ],
    keyBenefits: [
      "Certified Master Plumbers & Mechanics",
      "Non-Destructive Electronic Leak Detection",
      "Same-Day Emergency Dispatch Across Dhaka",
      "Guaranteed High-Pressure Leak-Free Testing",
    ],
  },
  {
    id: "electrical",
    slug: "electrical-wiring-ips",
    title: "Electrical Wiring, DB Board & IPS/Generator",
    category: "Mechanical & Systems",
    shortDescription:
      "Certified electrical solutions: concealed wiring, main distribution board (DB) upgrades, smart lighting, and IPS/Generator integration.",
    fullDescription:
      "Ensure electrical safety and eliminate short-circuit fire risks. We handle whole-apartment concealed wiring using BRB/BBS copper cables, circuit breaker upgrades, LED profile lighting, IPS/Inverter wiring, and backup diesel generator maintenance.",
    image: "/images/services/electrical.jpg",
    iconName: "Zap",
    popular: true,
    subServices: [
      "Concealed Wiring & Circuit Breaker / DB Upgrades",
      "Modern Architectural LED Profile & Cove Lighting",
      "IPS & Solar Inverter Wiring & Battery Maintenance",
      "Electric Vehicle (EV) Home Charger Installation",
      "Short Circuit Diagnostics & Earth-Testing Audits",
    ],
    keyBenefits: [
      "Strict Fire Safety & Electrical Code Compliance",
      "100% Pure Electrolytic Copper Cables Used",
      "Overload & Surge Protection for Appliances",
      "24/7 Rapid Emergency Response Team",
    ],
  },
  {
    id: "hvac",
    slug: "ac-installation-servicing",
    title: "Inverter AC Installation & Jet Servicing",
    category: "Mechanical & Systems",
    shortDescription:
      "Fast, professional split & VRF AC servicing, deep jet-wash cleaning, gas refilling, and leak troubleshooting across all major brands.",
    fullDescription:
      "Beat the Dhaka summer heat with peak cooling efficiency. Our certified HVAC mechanics provide chemical pressure jet-washing, genuine R410A/R32 refrigerant recharge, inverter PCB diagnostics, and multi-zone VRF system installations across General, Gree, Daikin, and Panasonic AC units.",
    image: "/images/services/hvac.jpg",
    iconName: "Wind",
    badge: "Jet Wash Pro",
    popular: true,
    subServices: [
      "Master Chemical Pressure Jet-Wash Cleaning",
      "Refrigerant Leak Detection & Gas Recharge",
      "Inverter Circuit Board (PCB) Repair",
      "Split, Cassette & Ductable AC Installation",
      "Seasonal Multi-Point AC Performance Audit",
    ],
    keyBenefits: [
      "Up to 30% Lower Monthly Electricity Bills",
      "Clean Wall Protection & Water-Catch Bag System",
      "Genuine Factory-Grade Spare Parts",
      "30-Day Cooling Performance Guarantee",
    ],
  },
  {
    id: "carpentry",
    slug: "teak-woodwork-false-ceiling",
    title: "Chittagong Teak Woodwork & False Ceiling",
    category: "Interior Craftsmanship",
    shortDescription:
      "Bespoke solid Segun teak woodwork, custom kitchen cabinets, CNC cut wooden screens, and modern gypsum false ceilings.",
    fullDescription:
      "Enhance your interior with authentic Bangladeshi woodwork craftsmanship. We craft seasoned Chittagong Teak (Segun), Gamari, and Gorjon veneer cabinetry, walk-in closets, decorative CNC wooden jali partitions, modern gypsum false ceilings, and wooden wall paneling.",
    image: "/images/services/carpentry.jpg",
    iconName: "Hammer",
    badge: "Segun Wood",
    popular: true,
    subServices: [
      "Chittagong Teak (Segun) Custom Furniture & Doors",
      "Modular Kitchen Cabinetry with Soft-Close Hardware",
      "Gypsum & Wooden Slatted False Ceiling Designs",
      "Decorative Wooden Wall Paneling & Jali Screens",
      "Custom Walk-In Closets & Vanity Units",
    ],
    keyBenefits: [
      "100% Seasoned & Chemical-Treated Solid Hardwood",
      "Anti-Termite (Ghoon) Treatment Guarantee",
      "Premium Hardware from Hafele, Blum & Hettich",
      "Precision Laser-Level Ceiling Framing",
    ],
  },
  {
    id: "painting",
    slug: "painting-weathercoat-finishes",
    title: "Interior Painting & Weather-Coat Exterior",
    category: "Finishing & Coating",
    shortDescription:
      "Premium interior putty finishing, damp-resistant primers, luxury velvet paints, and heavy-duty exterior weather-coat defense.",
    fullDescription:
      "Monsoon rains and humidity require specialized paint coatings. We handle comprehensive plaster leveling, damp seal priming, and multi-coat application using luxury paints from Berger (Breathe Easy, Luxury Silk), Asian Paints (Royale), and Nippon.",
    image: "/images/services/painting.jpg",
    iconName: "Paintbrush",
    subServices: [
      "Luxury Interior Velvet & Silk Paint Finishes",
      "Exterior Weather-Coat & Anti-Fungal Coating",
      "Chittagong Teak Wood Polish (Lacquer & PU Finish)",
      "Kitchen Cabinet Spray Painting & Refinishing",
      "Wall Crack Repair & Acrylic Putty Leveling",
    ],
    keyBenefits: [
      "Complete Furniture & Marble Floor Protection",
      "Low-Odor, Anti-Bacterial & Eco-Friendly Paints",
      "Washable Scuff-Resistant Finishes",
      "Damp & Fungal Resistance Warranty",
    ],
  },
  {
    id: "flooring",
    slug: "tiles-marble-flooring",
    title: "Tiles, Imported Marble & Granite Fitting",
    category: "Interior Craftsmanship",
    shortDescription:
      "Precision laying and mirror-polishing of large format porcelain tiles, imported Italian marble, and kitchen granite countertops.",
    fullDescription:
      "Transform your floor with flawless masonry craftsmanship. Our tiling experts ensure laser-leveled screeds, epoxy grout lines, and zero hollow spots across premium tiles (RAK, DBL, Mir) and imported Italian / Indian marble with diamond buffing.",
    image: "/images/services/flooring.jpg",
    iconName: "Layers",
    subServices: [
      "Large-Format Porcelain & Ceramic Floor Tiles",
      "Imported Italian / Spanish Marble Laying & Polishing",
      "Granite Kitchen Countertops & Window Sills",
      "Bathroom Anti-Skid Tiles & Shower Niches",
      "Marble Diamond Grinding & Mirror Buffing",
    ],
    keyBenefits: [
      "Laser-Guided Leveling for Zero Tile Lip Page",
      "Waterproof Epoxy Grout Against Stains",
      "Zero Hollow Sound Guarantee",
      "High-Gloss Diamond Crystal Polishing",
    ],
  },
  {
    id: "roofing",
    slug: "waterproofing-roof-damp-treatment",
    title: "Waterproofing & Roof Damp Treatment",
    category: "Exterior Protection",
    shortDescription:
      "Permanent solutions for roof leakage, balcony seepage, basement moisture barriers, and reflective rooftop heat-proofing.",
    fullDescription:
      "Dhaka’s intense monsoon requires heavy-duty waterproofing. We apply high-grade polyurethane membrane coatings, crystalline chemical damp treatments, and reflective heat-proof rooftop coatings to eliminate seepage and reduce indoor temperature.",
    image: "/images/services/roofing.jpg",
    iconName: "ShieldCheck",
    badge: "Monsoon Defense",
    popular: true,
    subServices: [
      "Multi-Layer Rooftop Waterproofing Membrane",
      "Basement & Subterranean Water Barrier Coating",
      "Wall Damp Treatment & Salt (Nona) Neutralization",
      "Solar-Reflective Rooftop Heat Insulation Paint",
      "Parapet Wall & Expansion Joint Chemical Sealing",
    ],
    keyBenefits: [
      "Resistant to Dhaka's Heavy Monsoon Rainfalls",
      "Lowers Top Floor Rooftop Temperature by 4–6°C",
      "Written 5-Year Leak-Free Guarantee",
      "Non-Toxic Chemical Formulations",
    ],
  },
  {
    id: "landscaping",
    slug: "rooftop-garden-exterior",
    title: "Rooftop Garden & Terrace Beautification",
    category: "Exterior & Grounds",
    shortDescription:
      "Transform your rooftop into an urban oasis with lightweight planter beds, automated drip irrigation, pergolas, and outdoor lighting.",
    fullDescription:
      "Maximize outdoor living in Dhaka with custom rooftop landscape architecture. We construct root-barrier protected planters, wooden pergolas, artificial turf zones, low-maintenance decorative flora, and ambient solar outdoor lighting.",
    image: "/images/services/landscaping.jpg",
    iconName: "Trees",
    subServices: [
      "Rooftop Garden Planning with Root Barriers",
      "Wooden Pergolas, Gazebos & Outdoor Seating",
      "High-Density UV-Resistant Artificial Grass Turf",
      "Automated Drip Irrigation & Drainage Swales",
      "Exterior Architectural Uplighting & Accent Sconces",
    ],
    keyBenefits: [
      "Lightweight Soil Mixtures Safe for Building Load",
      "Zero Water Stagnation or Leakage Risk",
      "Year-Round Lush Greenery in Dense Urban Dhaka",
      "Custom Tailored to Building Structural Permits",
    ],
  },
  {
    id: "home-repair",
    slug: "home-repair-handyman-services",
    title: "General Home Repair & Handyman",
    category: "General Maintenance",
    shortDescription:
      "Fast, dependable handyman services: door lock repairs, hardware replacements, curtain rods, TV mounting, and furniture assembly.",
    fullDescription:
      "No task is too small for our professional technicians. We provide prompt repair visits across Dhaka for door latch alignments, smart lock setups, drill & hang fixtures, electrical switches, and routine property maintenance.",
    image: "/images/services/home-repair.jpg",
    iconName: "Wrench",
    subServices: [
      "Door Lock, Latch & Hydraulic Closer Repair",
      "Wall Drilling, TV Mounting & Chandelier Hanging",
      "Curtain Rods, Blinds & Mirror Mounting",
      "Furniture Repair & Hardware Tightening",
      "Multi-Task Single Visit Handyman Bundles",
    ],
    keyBenefits: [
      "Fast Same-Day Scheduling in Gulshan/Banani/Uttara",
      "Fixed Clear Pricing — No Hidden Demands",
      "Background-Checked Trustworthy Tradesmen",
      "Clean Drop Cloths & Dust Collection",
    ],
  },
  {
    id: "cleaning",
    slug: "deep-cleaning-tank-wash",
    title: "Deep Cleaning & Water Tank Washing",
    category: "Specialized Services",
    shortDescription:
      "Specialized post-construction dust cleanup, overhead and underground water reservoir washing, and professional sanitization.",
    fullDescription:
      "Construction and remodeling leave harmful cement and drywall dust. Our team uses industrial HEPA wet/dry vacuums, high-pressure washers, eco-friendly detergents, and chlorinated sterilization for safe, move-in ready properties.",
    image: "/images/services/cleaning.jpg",
    iconName: "Sparkles",
    subServices: [
      "Post-Renovation Cement & Plaster Dust Detailing",
      "Overhead & Underground Water Tank Sterilization",
      "Floor Machine Scrubbing & Marble Stain Removal",
      "Exterior Thai Glass & Window Track Pressure Clean",
      "Tenant Move-In / Move-Out Deep Sanitization",
    ],
    keyBenefits: [
      "High-Pressure Chemical-Free Water Jet Scrubbing",
      "Safe Clean Drinking Water Tank Disinfection",
      "Industrial Heavy-Duty Cleaning Equipment",
      "Insured & Uniformed Professional Crew",
    ],
  },
  {
    id: "appliance-repair",
    slug: "home-appliance-repair",
    title: "Home Appliance Repair & Maintenance",
    category: "Specialized Services",
    shortDescription:
      "Certified repairs for luxury home appliances: front-load washing machines, side-by-side refrigerators, microwaves, and dishwashers.",
    fullDescription:
      "Avoid discarding expensive imported appliances. Our electronic technicians diagnose compressor failures, inverter boards, water inlet valves, and heating elements across Samsung, LG, Whirlpool, Haier, and Siemens appliances.",
    image: "/images/services/appliance-repair.jpg",
    iconName: "Cpu",
    subServices: [
      "Inverter Refrigerator & Deep Freezer Repair",
      "Front-Load & Top-Load Washing Machine Fixing",
      "Microwave Oven & Built-In Kitchen Hob Repairs",
      "Dishwasher Diagnostics & Drainage Troubleshooting",
      "Genuine Replacement Parts & Circuit Board Service",
    ],
    keyBenefits: [
      "Doorstep Diagnostics Across Greater Dhaka",
      "Clear Upfront Cost Breakdown Before Work Begins",
      "90-Day Parts & Service Guarantee",
      "Experienced Electronic Technicians",
    ],
  },
];
