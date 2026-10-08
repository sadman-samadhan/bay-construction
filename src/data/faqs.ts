export interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export const faqCategories = [
  "Booking",
  "Pricing & Payment",
  "Technicians & Safety",
  "Warranty",
  "Plans & Contracts",
  "Coverage",
] as const;

export const faqsData: FaqItem[] = [
  {
    category: "Booking",
    q: "How do I book a service?",
    a: "Book online in under a minute, message us on WhatsApp or call our hotline. You choose a date and a 2-hour arrival window, and we confirm by SMS or WhatsApp with your technician's name and photo.",
  },
  {
    category: "Booking",
    q: "How quickly can you come?",
    a: "Most bookings in Dhaka and Chattogram are served the same or next day. Emergencies in core Dhaka areas get a technician at your door in about 60 minutes, 24/7.",
  },
  {
    category: "Booking",
    q: "Can I reschedule or cancel?",
    a: "Yes. Reschedule or cancel free of charge up to 2 hours before your slot by replying to your confirmation message or calling us.",
  },
  {
    category: "Booking",
    q: "Do you get an 'on my way' alert?",
    a: "Yes. When your technician sets out, you receive an SMS or WhatsApp with their name, photo and estimated arrival time.",
  },
  {
    category: "Pricing & Payment",
    q: "How does your pricing work?",
    a: "Each service has a published starting price. For most repairs, the technician inspects and confirms the final price before any work begins. Nothing is done without your approval, and there are no hidden charges.",
  },
  {
    category: "Pricing & Payment",
    q: "Is there a visit or inspection charge?",
    a: "A small visit and diagnosis charge (usually ৳500–800) applies. It is adjusted against the bill if you go ahead with the repair. AMC members pay no call-out.",
  },
  {
    category: "Pricing & Payment",
    q: "Which payment methods do you accept?",
    a: "bKash, Nagad, Rocket, Visa and Mastercard, bank transfer, and cash after service. Businesses can pay monthly by invoice.",
  },
  {
    category: "Pricing & Payment",
    q: "Who supplies the parts and materials?",
    a: "We can supply parts and materials at market price with receipts, or use ones you already have. Material costs are always shown separately from labour.",
  },
  {
    category: "Technicians & Safety",
    q: "Are your technicians verified?",
    a: "Every technician is an employee or long-term partner who has passed NID and police verification, a trade skills test and our conduct training. They wear a uniform and carry an ID card.",
  },
  {
    category: "Technicians & Safety",
    q: "Will the technicians keep my home clean?",
    a: "Yes. Our field standards require shoe covers, drop sheets and dust control, and a full clean-up before we leave. We photograph the finished work for your records.",
  },
  {
    category: "Technicians & Safety",
    q: "Can I request a female cleaning crew?",
    a: "Yes. Female-led cleaning crews are available for deep cleaning in most areas. Just mention it when you book.",
  },
  {
    category: "Warranty",
    q: "Do you guarantee your work?",
    a: "Yes. Every job carries a written workmanship warranty, from 30 days for handyman work up to 5 years for waterproofing. If something we fixed fails within the warranty, we return and fix it free.",
  },
  {
    category: "Warranty",
    q: "What isn't covered by the warranty?",
    a: "Damage from misuse, power surges, third-party work after ours, or parts supplied by you. Manufacturer warranties on new products are handled through the brand.",
  },
  {
    category: "Plans & Contracts",
    q: "What is an Annual Maintenance Contract (AMC)?",
    a: "An AMC is a yearly plan where we carry out scheduled maintenance, such as AC servicing, tank cleaning and check-ups, and give you priority repairs and discounts. It costs less than booking each visit separately and you never have to remember dates.",
  },
  {
    category: "Plans & Contracts",
    q: "Do you work with apartment owners' associations and property managers?",
    a: "Yes. Our Building Care and Business Care plans cover common areas, pump rooms and generators, with monthly reports and discounted rates for individual residents.",
  },
  {
    category: "Plans & Contracts",
    q: "Can you handle make-ready work between tenants?",
    a: "Yes. Our tenant turnover package covers move-out inspection, repairs, repainting, deep cleaning and lock change, usually completed in 3–7 days.",
  },
  {
    category: "Coverage",
    q: "Which areas do you serve?",
    a: "All of Dhaka North and South, greater Dhaka (Savar, Gazipur, Narayanganj, Purbachal) and Chattogram metro. Use the area checker on our contact page to confirm your location.",
  },
  {
    category: "Coverage",
    q: "Do you do construction or renovation?",
    a: "No. We focus on what comes after construction: repairs, maintenance, servicing, cleaning and property care. For refresh work we replace fixtures and finishes within your existing layout, without structural work.",
  },
];
