export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  service: string;
  text: string;
  ratings: {
    quality: number;
    punctuality: number;
    professionalism: number;
    communication: number;
    value: number;
  };
}

/** Placeholder reviews for layout — replace with genuine, consented client reviews. */
export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Farhana Rahman",
    role: "Homeowner",
    location: "Gulshan 2",
    service: "Plumbing",
    text: "Two other plumbers broke our bathroom tiles and still couldn't find the leak. Apex found it in two hours, opened one tile and fixed it. They cleaned up better than when they arrived.",
    ratings: { quality: 5, punctuality: 5, professionalism: 5, communication: 5, value: 5 },
  },
  {
    id: "t2",
    name: "Lt Col (Retd) Mahbub Alam",
    role: "Secretary, Owners' Association",
    location: "Mirpur DOHS",
    service: "Waterproofing",
    text: "Our top-floor leaks are finally gone. The team did a ponding test in front of the committee, gave us a written warranty and kept every resident informed. Highly professional.",
    ratings: { quality: 5, punctuality: 5, professionalism: 5, communication: 5, value: 4 },
  },
  {
    id: "t3",
    name: "Nusrat Jahan",
    role: "Working mother",
    location: "Bashundhara R/A",
    service: "Home Plus plan",
    text: "The Home Plus plan means I never have to remember AC servicing or tank cleaning again. They call me, they come on time and the technicians are always polite and in uniform.",
    ratings: { quality: 5, punctuality: 5, professionalism: 5, communication: 5, value: 5 },
  },
  {
    id: "t4",
    name: "Imran Hossain",
    role: "Landlord (lives in Toronto)",
    location: "Dhanmondi",
    service: "Tenant turnover",
    text: "I approved everything over WhatsApp from Canada. Video walk-through, fixed prices and photos at every step. My flat was re-let in ten days.",
    ratings: { quality: 5, punctuality: 5, professionalism: 5, communication: 5, value: 5 },
  },
  {
    id: "t5",
    name: "Tanvir Ahmed",
    role: "Admin Manager",
    location: "Banani",
    service: "Office AC AMC",
    text: "They serviced 64 ACs over two nights with zero disruption, and the detailed report made our facilities review easy. Our power bill dropped noticeably.",
    ratings: { quality: 5, punctuality: 5, professionalism: 5, communication: 4, value: 5 },
  },
  {
    id: "t6",
    name: "Sadia Islam",
    role: "New flat owner",
    location: "Uttara",
    service: "Handover snagging",
    text: "Their inspection report found 40+ issues we would never have noticed. We shared it with our developer, and Apex fixed the rest and deep-cleaned before we moved in.",
    ratings: { quality: 5, punctuality: 4, professionalism: 5, communication: 5, value: 5 },
  },
  {
    id: "t7",
    name: "Rashed Chowdhury",
    role: "Restaurant owner",
    location: "Agrabad, Chattogram",
    service: "Electrical",
    text: "Tripping during dinner service was killing us. They worked overnight, rebuilt the DB and we haven't had a single trip since.",
    ratings: { quality: 5, punctuality: 5, professionalism: 5, communication: 5, value: 4 },
  },
  {
    id: "t8",
    name: "Mehreen Kabir",
    role: "Homeowner",
    location: "Lalmatia",
    service: "Deep cleaning",
    text: "The kitchen hood and tiles look new. The crew was supervised, careful with our furniture and finished exactly when they said they would.",
    ratings: { quality: 5, punctuality: 5, professionalism: 5, communication: 5, value: 5 },
  },
];

export const ratingLabels: Record<keyof Testimonial["ratings"], string> = {
  quality: "Quality",
  punctuality: "Punctuality",
  professionalism: "Professionalism",
  communication: "Communication",
  value: "Value",
};
