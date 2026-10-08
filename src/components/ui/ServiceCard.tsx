import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import { formatBDT } from "@/lib/utils";
import { Icon } from "./Icon";
import { ServiceVisual } from "./ServiceVisual";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl hover:shadow-ink-900/10"
    >
      <div className="relative">
        <ServiceVisual service={service} className="aspect-[16/10]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        {service.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink-900 shadow">
            {service.badge}
          </span>
        )}
        <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-accent-500 text-white shadow-lg">
          <Icon name={service.iconName} className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-950 group-hover:text-brand-700">{service.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-500">{service.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">From</div>
            <div className="font-extrabold text-ink-950">
              {formatBDT(service.priceFrom)}
              <span className="ml-1 text-xs font-medium text-ink-400">/ {service.priceUnit}</span>
            </div>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-50 text-ink-900 transition-all group-hover:bg-brand-500 group-hover:text-white">
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </span>
        </div>
      </div>
    </Link>
  );
}
