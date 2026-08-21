import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="border-t border-border py-24">
      <div className="section-shell">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 px-6 py-16 text-center shadow-card sm:px-12">
          <div className="absolute inset-0 hairline-grid opacity-50" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">
              Ready To Build Something Better?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Let's create a digital system that actually works for your business.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Let's Talk →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
