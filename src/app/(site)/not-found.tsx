import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { ServiceFinder } from "@/components/interactive/ServiceFinder";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 text-white">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent-500"><Wrench className="h-8 w-8" /></span>
        <h1 className="mt-8 text-5xl font-extrabold">404 — this page needs a repair</h1>
        <p className="mt-4 text-lg text-ink-200">We couldn&apos;t find what you were looking for. Try searching for a service instead.</p>
        <div className="mt-10 w-full"><ServiceFinder dark /></div>
        <Link href="/" className="mt-10 inline-flex items-center gap-2 font-semibold text-brand-300 hover:text-brand-200"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
      </div>
    </section>
  );
}
