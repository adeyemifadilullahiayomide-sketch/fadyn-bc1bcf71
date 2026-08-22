import { whyBuildWithMe } from "@/data/content";

import { Reveal } from "./Reveal";

export function WhyMe() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="rule-label mb-8">Approach</p>
          <h2 className="max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl">
            Why Build <span className="serif-italic">With Me?</span>
          </h2>
        </Reveal>

        <dl className="mt-16 border-t border-border">
          {whyBuildWithMe.map((card, i) => (
            <Reveal key={card.title} delay={i * 60}>
              <div className="grid gap-2 border-b border-border py-8 sm:grid-cols-[1fr_1.2fr] sm:gap-12">
                <dt className="text-2xl sm:text-[1.75rem]">{card.title}</dt>
                <dd className="max-w-lg text-sm leading-[1.8] text-muted-foreground sm:text-base">
                  {card.description}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
