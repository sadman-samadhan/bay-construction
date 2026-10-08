import Image from "next/image";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/data/services";

const gradients: Record<string, string> = {
  "core-trades": "from-brand-600 via-brand-700 to-ink-900",
  "repairs-finishes": "from-ink-600 via-ink-800 to-ink-950",
  "cleaning-hygiene": "from-brand-400 via-brand-600 to-ink-800",
  "property-care": "from-ink-500 via-brand-800 to-ink-950",
  "safety-smart": "from-ink-700 via-ink-900 to-ink-950",
  emergency: "from-accent-500 via-accent-700 to-ink-950",
};

/** Service photo, or an illustrated gradient panel when no photo exists yet. */
export function ServiceVisual({
  service,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority,
}: {
  service: Pick<ServiceItem, "image" | "title" | "iconName" | "category">;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (service.image) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image src={service.image} alt={service.title} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
    );
  }
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br", gradients[service.category] ?? gradients["core-trades"], className)}>
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border-[18px] border-white/5" />
      <div className="absolute -bottom-12 -left-6 h-48 w-48 rounded-full border-[24px] border-white/5" />
      <Icon
        name={service.iconName}
        aria-hidden
        className="absolute -bottom-6 -right-4 h-40 w-40 text-white/10 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110"
        strokeWidth={1.25}
      />
      <div className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
        <Icon name={service.iconName} className="h-7 w-7" />
      </div>
    </div>
  );
}
