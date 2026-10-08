/**
 * Single source of truth for brand + contact details.
 * Everything here is PLACEHOLDER content — replace with the client's real details before launch.
 */

export interface Office {
  label: string;
  address: string;
  mapQuery: string;
}

export const companyData = {
  name: "Apex Property Care",
  shortName: "Apex",
  logoWord: ["APEX", "CARE"] as const,
  tagline: "Repairs, maintenance & home services — handled by one trusted team",
  shortDescription:
    "Plumbing, electrical, AC servicing, waterproofing, cleaning, pest control and full property care for homes, apartment buildings and offices across Dhaka and Chattogram. Verified technicians, upfront pricing and a written workmanship warranty.",
  siteUrl: "https://www.apexpropertycare.com.bd",
  foundedYear: 2013,

  phone: "+880 1711-234567",
  phoneHref: "tel:+8801711234567",
  emergencyPhone: "+880 1811-234567",
  emergencyPhoneHref: "tel:+8801811234567",
  hotline: "16XXX",
  whatsappNumber: "8801711234567",
  email: "hello@apexpropertycare.com.bd",
  careersEmail: "careers@apexpropertycare.com.bd",

  offices: [
    {
      label: "Head Office — Dhaka",
      address: "House 42, Road 11, Block D, Banani, Dhaka 1213",
      mapQuery: "Banani Road 11, Dhaka 1213",
    },
    {
      label: "Chattogram Branch",
      address: "Level 4, 18 CDA Avenue, GEC Circle, Chattogram 4000",
      mapQuery: "GEC Circle, Chattogram",
    },
  ] satisfies Office[],

  hours: {
    regular: "Saturday – Thursday, 8:00 AM – 9:00 PM",
    friday: "Friday, 2:00 PM – 9:00 PM",
    emergency: "Emergency line open 24/7, 365 days",
  },

  stats: {
    yearsExperience: 12,
    jobsCompleted: 18500,
    amcClients: 420,
    technicians: 140,
    rating: 4.9,
    reviews: 2600,
    emergencyMinutes: 60,
  },

  payments: ["bKash", "Nagad", "Rocket", "Visa / Mastercard", "Bank transfer", "Cash after service"],

  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
};

export type CompanyInfo = typeof companyData;

/** Areas grouped by city — powers the coverage checker and footer. */
export const serviceAreas: { city: string; note: string; areas: string[] }[] = [
  {
    city: "Dhaka North",
    note: "Same-day & 60-minute emergency coverage",
    areas: [
      "Gulshan 1", "Gulshan 2", "Banani", "Baridhara", "Baridhara DOHS", "Niketan", "Mohakhali",
      "Mohakhali DOHS", "Bashundhara R/A", "Uttara", "Uttara Sector 1–18", "Airport", "Khilkhet",
      "Nikunja", "Badda", "Aftabnagar", "Rampura", "Banasree", "Tejgaon", "Mirpur", "Mirpur DOHS",
      "Pallabi", "Kafrul", "Cantonment",
    ],
  },
  {
    city: "Dhaka South",
    note: "Same-day coverage",
    areas: [
      "Dhanmondi", "Lalmatia", "Mohammadpur", "Shyamoli", "Kalabagan", "Panthapath", "Farmgate",
      "Kawran Bazar", "Malibagh", "Moghbazar", "Shantinagar", "Motijheel", "Paltan", "Wari",
      "Old Dhaka", "Jatrabari", "Azimpur", "Elephant Road",
    ],
  },
  {
    city: "Greater Dhaka",
    note: "Next-day coverage (emergencies on request)",
    areas: ["Savar", "Ashulia", "Tongi", "Gazipur", "Narayanganj", "Keraniganj", "Purbachal"],
  },
  {
    city: "Chattogram",
    note: "Same-day coverage from our GEC branch",
    areas: [
      "GEC Circle", "Nasirabad", "Khulshi", "Panchlaish", "Agrabad", "Halishahar", "Chawkbazar",
      "Patenga", "Bayazid",
    ],
  },
];

export const brandsWeService = [
  "Daikin", "Gree", "General", "Walton", "LG", "Samsung", "Midea", "Hitachi", "Panasonic",
  "Sharp", "Singer", "Whirlpool", "RAK Ceramics", "Grohe", "Kohler", "Berger", "Asian Paints",
  "Nippon Paint", "Hikvision", "Dahua", "Rahimafrooz", "Luminous",
];
