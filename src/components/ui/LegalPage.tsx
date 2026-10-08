import { PageHero } from "./PageHero";

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero crumbs={[{ label: title }]} title={title} description={`Last updated ${updated}`} />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          <p className="rounded-2xl bg-accent-50 p-4 text-sm text-accent-700">
            Template text for review. Please have this page checked by a legal adviser before launch.
          </p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-extrabold text-ink-950">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-ink-600">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
