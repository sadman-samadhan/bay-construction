import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a number as Bangladeshi Taka using the South-Asian digit grouping (e.g. ৳1,49,900). */
export function formatBDT(value: number) {
  return `৳${new Intl.NumberFormat("en-IN").format(Math.round(value))}`;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
