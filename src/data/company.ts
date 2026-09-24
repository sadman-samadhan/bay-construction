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
    twitter?: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Apex Home & Construction Solutions",
  tagline: "Premier Construction, Remodeling & Property Maintenance",
  shortDescription:
    "Delivering elite craftsmanship across residential and commercial remodeling, specialized repairs, and full-spectrum property enhancements.",
  phone: "(555) 789-2470",
  phoneFormatted: "+15557892470",
  email: "info@apexconstructionpros.com",
  emergencyPhone: "(555) 911-2470",
  address: {
    street: "1420 Commercial Parkway, Suite 250",
    city: "Metro Valley",
    state: "OH",
    zip: "43215",
  },
  serviceAreas: [
    "Downtown & Metro Area",
    "North Suburbs",
    "East Valley",
    "Westside Estates",
    "Southern Counties",
  ],
  hours: {
    regular: "Monday - Saturday: 7:00 AM – 7:00 PM",
    emergency: "24/7 Emergency Dispatch Available",
  },
  stats: {
    projectsCompleted: 850,
    yearsExperience: 16,
    satisfactionRate: 99,
    expertTeamMembers: 35,
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};
