import {
  AirVent, Award, Bath, BatteryCharging, Bug, Building2, Cctv, ClipboardCheck, CloudRain, CloudSun,
  DoorOpen, Drill, Droplet, Droplets, Flame, GraduationCap, Grid3x3, Hammer, House, KeyRound,
  PaintRoller, Plane, Refrigerator, Search, ShieldCheck, Siren, Snowflake, Sparkles, Sprout, Store,
  Sun, Thermometer, Umbrella, Wallet, Waves, Wrench, Zap,
  type LucideIcon, type LucideProps,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  AirVent, Award, Bath, BatteryCharging, Bug, Building2, Cctv, ClipboardCheck, CloudRain, CloudSun,
  DoorOpen, Drill, Droplet, Droplets, Flame, GraduationCap, Grid3x3, Hammer, House, KeyRound,
  PaintRoller, Plane, Refrigerator, Search, ShieldCheck, Siren, Snowflake, Sparkles, Sprout, Store,
  Sun, Thermometer, Umbrella, Wallet, Waves, Wrench, Zap,
};

/** Renders a lucide icon from a string name stored in data files. Falls back to a wrench. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? Wrench;
  return <Cmp {...props} />;
}
