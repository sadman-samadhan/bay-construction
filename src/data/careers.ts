export interface JobOpening {
  id: string;
  title: string;
  department: "Field Technicians" | "Cleaning & Hygiene" | "Operations" | "Customer Care";
  location: "Dhaka" | "Chattogram";
  type: "Full-time" | "Part-time" | "Contract";
  experience: string;
  summary: string;
  requirements: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "plumber-dhaka",
    title: "Senior Plumbing Technician",
    department: "Field Technicians",
    location: "Dhaka",
    type: "Full-time",
    experience: "4+ years",
    summary: "Diagnose and repair concealed and exposed plumbing in apartments, offices and buildings.",
    requirements: ["PPR / uPVC jointing", "Leak tracing & pressure testing", "Own smartphone for job app", "Polite, customer-facing conduct"],
  },
  {
    id: "electrician-dhaka",
    title: "Residential Electrician",
    department: "Field Technicians",
    location: "Dhaka",
    type: "Full-time",
    experience: "3+ years",
    summary: "Fault finding, DB work, wiring and fixture installation for homes and small businesses.",
    requirements: ["Vocational / diploma in electrical preferred", "DB, MCB & RCCB experience", "Safety-first approach", "Valid NID"],
  },
  {
    id: "ac-tech-ctg",
    title: "AC Technician (Inverter Trained)",
    department: "Field Technicians",
    location: "Chattogram",
    type: "Full-time",
    experience: "2+ years",
    summary: "Servicing, gas charging, PCB diagnosis and installation of split and cassette ACs.",
    requirements: ["Inverter AC experience", "Brazing & vacuuming", "Basic PCB troubleshooting", "Comfortable working at height"],
  },
  {
    id: "cleaning-supervisor",
    title: "Cleaning Crew Supervisor",
    department: "Cleaning & Hygiene",
    location: "Dhaka",
    type: "Full-time",
    experience: "2+ years",
    summary: "Lead a 4–6 person deep cleaning crew, run quality checklists and manage customer sign-off.",
    requirements: ["Team leadership", "Machine & chemical handling", "Quality-checklist discipline", "Female candidates encouraged"],
  },
  {
    id: "dispatcher",
    title: "Service Dispatcher (Night Shift)",
    department: "Operations",
    location: "Dhaka",
    type: "Full-time",
    experience: "1+ year",
    summary: "Coordinate emergency calls and dispatch on-call technicians overnight.",
    requirements: ["Calm under pressure", "Bangla & basic English", "Comfortable with dispatch software", "Dhaka geography knowledge"],
  },
  {
    id: "cs-executive",
    title: "Customer Care Executive",
    department: "Customer Care",
    location: "Dhaka",
    type: "Full-time",
    experience: "Fresh graduates welcome",
    summary: "Handle bookings and follow-ups over phone, WhatsApp and Facebook.",
    requirements: ["Excellent Bangla, good English", "Fast typing", "Empathy & patience", "Bachelor's degree or final-year student"],
  },
  {
    id: "painter-contract",
    title: "Painter (Project Basis)",
    department: "Field Technicians",
    location: "Dhaka",
    type: "Contract",
    experience: "3+ years",
    summary: "Interior and exterior painting with proper surface preparation.",
    requirements: ["Putty & primer prep", "Clean, tidy work habits", "Enamel & texture skills a plus", "Own basic tools"],
  },
];

export const careerPerks = [
  { iconName: "Wallet", title: "Fair, on-time pay", text: "Monthly salary plus performance bonus. Paid on time, every time." },
  { iconName: "GraduationCap", title: "Training & certification", text: "Regular skill workshops, brand trainings and safety certification." },
  { iconName: "ShieldCheck", title: "Safety gear & insurance", text: "Full PPE kit, accident insurance and medical support." },
  { iconName: "Award", title: "Two festival bonuses", text: "Eid bonuses, an annual increment and recognition awards." },
];
