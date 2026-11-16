import {
  AirVent, Armchair, Axe, BadgeCheck, Bath, Bug, Building2, CalendarCheck, ClipboardCheck, Clock, CloudRain,
  CookingPot, DoorOpen, Droplets, Fence, Flame, Grid3x3, Hammer, HardHat, House, Layers, LayoutGrid, Leaf, Lock,
  MapPin, PaintRoller, PanelsTopLeft, Receipt, Refrigerator, Ruler, ShieldCheck, ShowerHead, Siren, Snowflake,
  Sparkles, Thermometer, Trash2, Trees, Tv, Warehouse, Wrench, Zap,
  type LucideIcon, type LucideProps,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  AirVent, Armchair, Axe, BadgeCheck, Bath, Bug, Building2, CalendarCheck, ClipboardCheck, Clock, CloudRain,
  CookingPot, DoorOpen, Droplets, Fence, Flame, Grid3x3, Hammer, HardHat, House, Layers, LayoutGrid, Leaf, Lock,
  MapPin, PaintRoller, PanelsTopLeft, Receipt, Refrigerator, Ruler, ShieldCheck, ShowerHead, Siren, Snowflake,
  Sparkles, Thermometer, Trash2, Trees, Tv, Warehouse, Wrench, Zap,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? Wrench;
  return <Cmp strokeWidth={1.75} {...props} />;
}
