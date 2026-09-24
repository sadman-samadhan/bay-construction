export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Robert & Meredith Sterling",
    location: "Oakwood Estates",
    service: "Remodeling & Renovation",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "They completely renovated our 1990s kitchen into a modern open-concept space. The project manager kept us updated every morning, finished on schedule, and the craftsmanship on the marble island and custom navy cabinetry is breathtaking!",
    verified: true,
  },
  {
    id: "2",
    name: "Marcus Vance",
    location: "Highland Heights",
    service: "Roofing & Gutters",
    rating: 5,
    date: "1 month ago",
    comment:
      "After a major windstorm tore shingles off our roof, they were at our house within two hours to tarp the damage, followed by a seamless full roof replacement that our insurance approved without friction. Outstanding service!",
    verified: true,
  },
  {
    id: "3",
    name: "Elena Rostova",
    location: "Downtown Condos",
    service: "Electrical & Lighting",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Installed recessed smart lighting throughout our living room and an EV Level 2 charger in our garage. Extremely clean work, zero drywall damage, and everything was tested thoroughly before they left.",
    verified: true,
  },
  {
    id: "4",
    name: "David Chen",
    location: "Riverfront Park",
    service: "Plumbing Services",
    rating: 5,
    date: "Recent",
    comment:
      "We had a sudden mainline leak on a Saturday evening. Their emergency plumber arrived promptly with all the right gear and replaced the ruptured section without tearing up our bathroom tile. Life savers!",
    verified: true,
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Are your technicians licensed, bonded, and insured?",
    answer:
      "Yes, 100%. All of our tradesmen, electricians, plumbers, and contractors carry full general liability insurance, workers' compensation, and relevant state trade licensing. You are completely protected when we work on your property.",
  },
  {
    id: "faq-2",
    category: "Pricing & Estimates",
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide complimentary, no-obligation estimates for remodeling, repairs, and installations. You can submit our online quote form or call our team to schedule an on-site or digital walkthrough.",
  },
  {
    id: "faq-3",
    category: "Emergency",
    question: "How quickly can you respond to plumbing or roofing emergencies?",
    answer:
      "We offer 24/7 emergency dispatch. For burst pipes, sudden roof leaks, power outages, and critical HVAC shutdowns, our team typically arrives on-site within 60 to 90 minutes across our metro service area.",
  },
  {
    id: "faq-4",
    category: "Quality",
    question: "Do you offer a warranty on your workmanship?",
    answer:
      "Every project is backed by our written Workmanship Satisfaction Guarantee. Depending on the service type, warranties range from 1 year for general repairs up to 5 years on major renovation and roofing installations.",
  },
  {
    id: "faq-5",
    category: "Process",
    question: "Can I manage multiple different home projects in one visit?",
    answer:
      "Absolutely. Our multi-trade team can handle painting, drywall patching, electrical fixture hanging, and plumbing updates in coordinated appointments so you don't have to hire 5 separate contractors.",
  },
];
