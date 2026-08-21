import { processSteps } from "@/data/content";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="border-t border-border py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="My Process"
          subtitle="A clear path from idea to a working system you can rely on."
        />

        <ol className="relative mt-12 border-l border-border pl-6 sm:pl-10">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 50} className="relative pb-9 last:pb-0">
              <span
                className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[2.9rem]"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
