import { processSteps } from "@/data/content";

import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="rule-label mb-8">04 / How I Work</p>
          <h2 className="max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl">
            From Idea To <span className="serif-italic">Something Real.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            A clear path from idea to a working system you can rely on.
          </p>
        </Reveal>

        <ol className="relative mt-16 border-l border-border pl-8 sm:pl-16">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 50} className="group relative pb-14 last:pb-0">
              <span
                className="absolute -left-[calc(2rem+3.5px)] top-3 size-1.5 rounded-full bg-border-strong transition-colors duration-300 group-hover:bg-primary sm:-left-[calc(4rem+3.5px)]"
                aria-hidden
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-10">
                <span className="font-display text-3xl text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:text-4xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-[1.75] text-muted-foreground">
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
