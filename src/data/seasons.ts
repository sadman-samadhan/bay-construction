/** Bangladesh seasonal maintenance calendar used by the interactive planner. */
export interface Season {
  id: string;
  name: string;
  bangla: string;
  months: number[]; // 0 = January
  monthLabel: string;
  iconName: string;
  focus: string;
  tasks: { title: string; service: string }[];
}

export const seasons: Season[] = [
  {
    id: "spring",
    name: "Pre-Summer",
    bangla: "Boshonto",
    months: [1, 2],
    monthLabel: "Feb – Mar",
    iconName: "Sun",
    focus: "Get cooling and backup power ready before the heat arrives.",
    tasks: [
      { title: "Full AC jet-wash service", service: "ac-servicing-repair" },
      { title: "IPS battery health test", service: "ips-generator-maintenance" },
      { title: "Overhead & underground tank cleaning", service: "water-tank-cleaning" },
      { title: "Dedicated AC line & breaker check", service: "electrical-wiring" },
    ],
  },
  {
    id: "summer",
    name: "Summer",
    bangla: "Grishmo",
    months: [3, 4],
    monthLabel: "Apr – May",
    iconName: "Thermometer",
    focus: "Waterproof before the monsoon and keep pumps running in peak demand.",
    tasks: [
      { title: "Roof & terrace waterproofing", service: "waterproofing-damp-repair" },
      { title: "Window frame re-sealing", service: "doors-windows-grills" },
      { title: "Pump & auto-switch service", service: "water-pump-motor" },
      { title: "Roof drain & balcony trap cleaning", service: "home-repair-handyman" },
    ],
  },
  {
    id: "monsoon",
    name: "Monsoon",
    bangla: "Borsha",
    months: [5, 6, 7, 8],
    monthLabel: "Jun – Sep",
    iconName: "CloudRain",
    focus: "Respond fast to leaks and protect your family during dengue season.",
    tasks: [
      { title: "Emergency leak & seepage response", service: "emergency-repairs" },
      { title: "Mosquito control & larvicide", service: "pest-control" },
      { title: "Earthing & short-circuit safety check", service: "electrical-wiring" },
      { title: "Tank cleaning after waterlogging", service: "water-tank-cleaning" },
    ],
  },
  {
    id: "autumn",
    name: "Post-Monsoon",
    bangla: "Shorot – Hemonto",
    months: [9, 10],
    monthLabel: "Oct – Nov",
    iconName: "CloudSun",
    focus: "Repair monsoon damage and refresh your home before winter and the wedding season.",
    tasks: [
      { title: "Damp wall treatment & repainting", service: "painting-wall-care" },
      { title: "Post-monsoon AC service", service: "ac-servicing-repair" },
      { title: "Termite & cockroach treatment", service: "pest-control" },
      { title: "Full home deep cleaning", service: "deep-cleaning" },
    ],
  },
  {
    id: "winter",
    name: "Winter",
    bangla: "Sheet",
    months: [11, 0],
    monthLabel: "Dec – Jan",
    iconName: "Snowflake",
    focus: "The dry season is ideal for bigger jobs and getting the geyser running.",
    tasks: [
      { title: "Geyser service & safety check", service: "appliance-repair" },
      { title: "Exterior painting (dry weather)", service: "painting-wall-care" },
      { title: "Gas line & stove leak check", service: "fire-safety" },
      { title: "Property health check-up", service: "property-inspection" },
    ],
  },
];

export const getCurrentSeasonId = (date = new Date()) =>
  seasons.find((s) => s.months.includes(date.getMonth()))?.id ?? seasons[0].id;
