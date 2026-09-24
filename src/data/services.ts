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
    slug: "remodeling-renovation",
    title: "Remodeling & Renovation",
    category: "Major Renovations",
    shortDescription:
      "Transform your residential living spaces with high-end kitchen remodels, master bathroom renovations, and luxury basement conversions.",
    fullDescription:
      "Our remodeling specialists manage complete interior transformations from architectural planning to the final finishing touches. We provide luxury kitchen overhauls, spa-inspired bathrooms, open-concept conversions, and custom living space additions with uncompromising standards.",
    image: "/images/services/remodeling.jpg",
    iconName: "Home",
    badge: "Most Requested",
    popular: true,
    subServices: [
      "Gourmet Kitchen Remodeling",
      "Master Bathroom Renovations",
      "Full Basement Finishing & Suites",
      "Open Concept Wall Removal & Support",
      "Whole-Home Modernization",
    ],
    keyBenefits: [
      "Dedicated On-site Project Manager",
      "3D Architectural Previews & Selection Assistance",
      "Licensed, Insured & Permitted Construction",
      "Written 5-Year Workmanship Warranty",
    ],
  },
  {
    id: "home-repair",
    slug: "home-repair-services",
    title: "Home Repair Services",
    category: "General Maintenance",
    shortDescription:
      "Prompt, reliable repair solutions for structural drywall, interior trim, hardware fixtures, doors, and everyday property wear.",
    fullDescription:
      "Small issues can escalate into costly repairs if ignored. Our skilled residential repair technicians swiftly resolve water damage drywalls, door alignments, baseboard replacements, subfloor squeaks, and structural touch-ups.",
    image: "/images/services/home-repair.jpg",
    iconName: "Wrench",
    popular: true,
    subServices: [
      "Drywall Patching, Taping & Texturing",
      "Interior Door Realignment & Hardware",
      "Baseboard, Crown & Trim Restoration",
      "Subfloor Repair & Squeak Elimination",
      "General Handyman Service Bundles",
    ],
    keyBenefits: [
      "Fast Same-Week Scheduling",
      "Upfront Flat-Rate Estimates",
      "Clean Work Guarantee With Drop Cloths",
      "Multi-Task Single Visit Handyman Service",
    ],
  },
  {
    id: "painting",
    slug: "painting-finishes",
    title: "Painting & Surface Finishing",
    category: "Finishing & Coating",
    shortDescription:
      "Flawless interior and exterior painting, precision edge taping, surface priming, cabinet resurfacing, and decorative staining.",
    fullDescription:
      "A flawless paint job requires meticulous surface prep. We handle comprehensive plaster patching, sanding, pressure washing, priming, and multi-coat application using premium low-VOC paints from Sherwin-Williams and Benjamin Moore.",
    image: "/images/services/painting.jpg",
    iconName: "Paintbrush",
    subServices: [
      "Interior Wall & Ceiling Painting",
      "Exterior Siding & Stucco Coating",
      "Cabinet Spray Painting & Refinishing",
      "Deck & Fence Staining & Sealing",
      "Trim, Molding & Door Enamel Finishing",
    ],
    keyBenefits: [
      "Complete Furniture Protection & Masking",
      "Premium Zero-VOC Eco-Friendly Paints",
      "Sharp Laser-Straight Edge Lines",
      "Washable, Durable Scuff-Resistant Finishes",
    ],
  },
  {
    id: "plumbing",
    slug: "plumbing-services",
    title: "Plumbing Services",
    category: "Mechanical & Systems",
    shortDescription:
      "Complete residential plumbing from emergency leak repairs and drain clearing to modern designer fixture installations and water heaters.",
    fullDescription:
      "From dripping faucets and broken garbage disposals to whole-house repiping and tankless water heater upgrades, our licensed master plumbers ensure your water systems operate safely, cleanly, and efficiently.",
    image: "/images/services/plumbing.jpg",
    iconName: "Droplet",
    badge: "24/7 Response",
    popular: true,
    subServices: [
      "Emergency Leak Detection & Pipe Repair",
      "Modern Faucet, Sink & Vanity Installs",
      "Toilet Repair & High-Efficiency Replacements",
      "Water Heater Installation (Tank & Tankless)",
      "Main Drain Snaking & Hydro-Jetting",
    ],
    keyBenefits: [
      "Licensed Master Plumber Oversight",
      "Non-Invasive Electronic Leak Detection",
      "Emergency Same-Day Response",
      "All Code Compliant & Pressure Tested",
    ],
  },
  {
    id: "hvac",
    slug: "hvac-climate-control",
    title: "HVAC & Climate Control",
    category: "Mechanical & Systems",
    shortDescription:
      "Comprehensive heating, air conditioning, and ventilation services including diagnostic tune-ups, filter systems, and smart thermostats.",
    fullDescription:
      "Maintain ideal indoor climate and air quality through every season. We diagnose, repair, and install high-efficiency heat pumps, central AC units, furnaces, ductwork dampers, and smart thermostat integrations.",
    image: "/images/services/hvac.jpg",
    iconName: "Wind",
    badge: "Certified Pros",
    subServices: [
      "Central AC Diagnostics & Refrigerant Recharge",
      "Furnace & Heat Pump Maintenance",
      "Smart Thermostat Installation & Setup",
      "Ductwork Inspection & Airflow Balancing",
      "Seasonal 21-Point System Tune-Ups",
    ],
    keyBenefits: [
      "Energy Efficiency Optimization",
      "Certified EPA & NATE Technicians",
      "Extended System Lifespan",
      "Quiet & Balanced Indoor Air Comfort",
    ],
  },
  {
    id: "electrical",
    slug: "electrical-lighting",
    title: "Electrical & Lighting",
    category: "Mechanical & Systems",
    shortDescription:
      "Safe, licensed electrical solutions: modern panel upgrades, recessed LED lighting packages, EV charger circuits, and smart home switches.",
    fullDescription:
      "Electrical safety and code compliance are paramount. Our certified electricians handle service panel upgrades, breaker replacements, recessed pot-light retrofits, chandelier hanging, EV level-2 charger wiring, and whole-home surge protection.",
    image: "/images/services/electrical.jpg",
    iconName: "Zap",
    popular: true,
    subServices: [
      "Main Service Panel & Breaker Upgrades",
      "Modern Recessed LED Lighting Layouts",
      "Level 2 EV Charging Station Installation",
      "Smart Dimmer & Automation Switches",
      "GFCI/AFCI Outlets & Safety Code Audits",
    ],
    keyBenefits: [
      "Strict National Electrical Code (NEC) Compliance",
      "Clean Wire Routing Inside Walls",
      "Licensed & Bonded Journeyman Electricians",
      "Surge Protection for Sensitive Electronics",
    ],
  },
  {
    id: "flooring",
    slug: "flooring-installation",
    title: "Flooring Installation",
    category: "Interior Craftsmanship",
    shortDescription:
      "Expert installation and restoration of solid hardwood, engineered plank, luxury vinyl plank (LVP), and large format porcelain tile.",
    fullDescription:
      "Elevate the foundation of your home with premium flooring installations. Our master craftsmen ensure perfect subfloor leveling, moisture barriers, precision cuts, and transition trim integration for enduring beauty.",
    image: "/images/services/flooring.jpg",
    iconName: "Layers",
    subServices: [
      "Solid & Engineered Hardwood Flooring",
      "Waterproof Luxury Vinyl Plank (LVP)",
      "Porcelain, Ceramic & Marble Floor Tile",
      "Hardwood Sanding, Staining & Refinishing",
      "Subfloor Leveling & Acoustic Underlayment",
    ],
    keyBenefits: [
      "Laser-Leveled Subfloor Preparation",
      "Expansion Gap & Moisture Protection",
      "Custom Stair Treads & Threshold Transitions",
      "Durable Scratch & Stain Resistant Finishes",
    ],
  },
  {
    id: "carpentry",
    slug: "carpentry-woodwork",
    title: "Custom Carpentry & Handyman",
    category: "Interior Craftsmanship",
    shortDescription:
      "Bespoke woodwork, custom built-in entertainment units, mudroom cubbies, floating shelves, wainscoting, and architectural molding.",
    fullDescription:
      "Add character, storage, and enduring value to your home with handcrafted architectural woodwork. We design and build custom cabinetry, closet organizers, coffered ceilings, modern slatted feature walls, and custom wood details.",
    image: "/images/services/carpentry.jpg",
    iconName: "Hammer",
    badge: "Bespoke Quality",
    subServices: [
      "Custom Built-in Media Units & Bookshelves",
      "Mudroom Bench & Locker Storage",
      "Board & Batten, Wainscoting & Accent Walls",
      "Custom Floating Mantels & Shelving",
      "Deck Construction & Structural Framing",
    ],
    keyBenefits: [
      "Custom Measured to Exact Wall Dimensions",
      "Selected Furniture-Grade Hardwoods",
      "Concealed Fastening & Seamless Joints",
      "Integrated Wire Management Channels",
    ],
  },
  {
    id: "landscaping",
    slug: "landscaping-exterior",
    title: "Landscaping & Grounds Care",
    category: "Exterior & Grounds",
    shortDescription:
      "Full-service residential landscape design, manicured turf management, stone paver patios, retaining walls, and seasonal cleanups.",
    fullDescription:
      "Boost your home's curb appeal with professional exterior grounds maintenance. We provide stone walkways, retaining walls, sod installation, shrub sculpting, fresh mulch beds, and automated irrigation management.",
    image: "/images/services/landscaping.jpg",
    iconName: "Trees",
    subServices: [
      "Interlocking Stone Pavers & Walkways",
      "Lawn Turf Aeration, Seeding & Sodding",
      "Garden Bed Design, Mulching & Edging",
      "Shrub Pruning, Trimming & Shaping",
      "Retaining Walls & Drainage Swales",
    ],
    keyBenefits: [
      "Instant Curb Appeal Transformation",
      "Proper Drainage Slope Grading",
      "Low-Maintenance Plant Selection",
      "Scheduled Recurring Grounds Care",
    ],
  },
  {
    id: "roofing",
    slug: "roofing-gutters",
    title: "Roofing & Gutter Systems",
    category: "Exterior Protection",
    shortDescription:
      "Comprehensive roof inspections, asphalt shingle replacements, storm leak repair, seamless aluminum gutters, and leaf guards.",
    fullDescription:
      "Protect your property against weather extremes. We specialize in complete roof tear-offs and replacements, spot shingle repair, chimney flashing, seamless aluminum gutter fabrication, and preventative roof leak defense.",
    image: "/images/services/roofing.jpg",
    iconName: "ShieldCheck",
    badge: "50-Yr Shingles",
    popular: true,
    subServices: [
      "Architectural Asphalt Shingle Installation",
      "Storm & Hail Damage Emergency Tarping",
      "Seamless 5-Inch & 6-Inch Aluminum Gutters",
      "Leaf Screen & Micro-Mesh Gutter Guards",
      "Flashing, Ridge Vent & Soffit Repair",
    ],
    keyBenefits: [
      "Manufacturer Certified Master Installers",
      "High Wind Rating Shingles (Up to 130 mph)",
      "Thorough Magnetic Nail Sweep Cleanup",
      "Comprehensive Drone/Photo Roof Inspections",
    ],
  },
  {
    id: "appliance-repair",
    slug: "appliance-repair-installs",
    title: "Appliance Repair & Installation",
    category: "Specialized Services",
    shortDescription:
      "Diagnosis, repair, and hookup for premium residential appliances: refrigerators, dishwashers, ranges, washers, and dryers.",
    fullDescription:
      "Avoid replacing costly appliances when expert repair is available. Our technicians diagnose faulty sensors, compressor issues, belt wear, and electrical controls across Samsung, LG, Whirlpool, Bosch, Sub-Zero, and GE appliances.",
    image: "/images/services/appliance-repair.jpg",
    iconName: "Cpu",
    subServices: [
      "Refrigerator Cooling & Compressor Diagnostics",
      "Dishwasher Drainage & Pump Replacements",
      "Washing Machine Balancing & Motor Repair",
      "Dryer Heating Element & Vent Cleaning",
      "New Built-In Appliance Hookups & Lines",
    ],
    keyBenefits: [
      "OEM Factory Certified Replacement Parts",
      "Clear Diagnostics Before Repair Begins",
      "90-Day Parts & Labor Warranty",
      "Protect Surrounding Cabinets & Floors",
    ],
  },
  {
    id: "cleaning",
    slug: "cleaning-turnover-services",
    title: "Deep Cleaning & Turnover",
    category: "Specialized Services",
    shortDescription:
      "Post-construction site cleanup, real estate tenant move-in/move-out turnover, and heavy-duty property detailing.",
    fullDescription:
      "Construction and remodeling leave fine dust in every crevice. Our post-construction turnover specialists perform detailed multi-stage HEPA vacuuming, glass polishing, baseboard wiping, and sanitization for immaculate move-in readiness.",
    image: "/images/services/cleaning.jpg",
    iconName: "Sparkles",
    subServices: [
      "Post-Construction Drywall Dust Clean",
      "Real Estate Tenant Move-In / Move-Out",
      "Deep Interior Window & Track Cleaning",
      "Hard Surface Machine Scrubbing & Waxing",
      "Debris Removal & Clean Jobsite Prep",
    ],
    keyBenefits: [
      "Industrial HEPA Air & Surface Filtration",
      "Safe Eco-Friendly Non-Toxic Solutions",
      "Detailed 60-Point Move-In Checklist",
      "Insured & Thorough Cleaning Specialists",
    ],
  },
];
