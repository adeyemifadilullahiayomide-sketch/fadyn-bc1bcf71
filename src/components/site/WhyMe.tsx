import { whyBuildWithMe } from "@/data/content";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyMe() {
  return (
    <section className="border-t border-border py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Approach" title="Why Build With Me?" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyBuildWithMe.map((card, i) => (
            <Reveal key={card.title} delay={i * 60} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong">
                <h3 className="text-base font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
