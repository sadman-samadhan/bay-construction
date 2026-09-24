export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  emergencyPhone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  serviceAreas: string[];
  hours: {
    regular: string;
    emergency: string;
  };
  stats: {
    projectsCompleted: number;
    yearsExperience: number;
    satisfactionRate: number;
    expertTeamMembers: number;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Apex Construction & Interior Solutions",
  tagline: "Premier Construction, Modern Interior Design & Property Maintenance in Bangladesh",
  shortDescription:
    "Delivering elite craftsmanship across residential duplexes, luxury apartment interiors, plumbing, electrical, and full-spectrum property maintenance across Dhaka and beyond.",
  phone: "+880 1711-234567",
  phoneFormatted: "+8801711234567",
  email: "info@apexconstructionbd.com",
  emergencyPhone: "+880 1811-234567",
  address: {
    street: "House 42, Road 11, Block D, Banani",
    city: "Dhaka",
    state: "Dhaka Division",
    zip: "1213",
  },
  serviceAreas: [
    "Gulshan 1 & 2",
    "Banani & Baridhara",
    "Dhanmondi & Lalmatia",
    "Uttara (Sectors 1-14)",
    "Bashundhara R/A",
    "Mirpur & DOHS Areas",
    "Chattogram Metro",
  ],
  hours: {
    regular: "Saturday - Thursday: 8:00 AM – 8:00 PM (Friday On-Call)",
    emergency: "24/7 Rapid Emergency Dispatch Available",
  },
  stats: {
    projectsCompleted: 620,
    yearsExperience: 14,
    satisfactionRate: 99,
    expertTeamMembers: 45,
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/8801711234567",
  },
};
