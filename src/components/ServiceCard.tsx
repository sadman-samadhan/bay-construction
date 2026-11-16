import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { Icon } from "@/components/Icon";

export function ServiceCard({ service, showImage = false }: { service: Service; showImage?: boolean }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:border-gray-400"
    >
      {showImage && service.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={`/images/services/${service.image}.jpg`}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale-[30%] transition duration-300 group-hover:grayscale-0"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {!(showImage && service.image) && (
          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-700">
            <Icon name={service.icon} className="h-5 w-5" />
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
