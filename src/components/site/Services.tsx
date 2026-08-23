import { services } from "@/data/content";

import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="rule-label mb-8">02 / What I Do</p>
          <h2 className="max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl">
            I Build For <span className="serif-italic">The Web.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            From high-converting websites to AI-powered business systems.
          </p>
        </Reveal>

        <ul className="mt-16 border-t border-border">
          {services.map((service, i) => (
            <Reveal as="li" key={service.number} delay={i * 50}>
              <a
                href="#contact"
                className="group grid gap-4 border-b border-border px-2 py-8 transition-all duration-500 hover:bg-surface hover:px-5 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8 sm:py-10"
              >
                <span className="text-[0.72rem] font-semibold tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  {service.number}
                </span>

                <div>
                  <h3 className="text-2xl transition-transform duration-500 group-hover:translate-x-1 sm:text-[2rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-[1.75] text-muted-foreground">
                    {service.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {service.items.map((item, ii) => (
                      <li
                        key={`${item}-${ii}`}
                        className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="flex items-center gap-2 text-[0.75rem] font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {service.cta}
                  <span
                    aria-hidden
                    className="opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
