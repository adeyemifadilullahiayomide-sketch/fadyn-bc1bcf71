import { digitalSystem, traditionalWebsite } from "@/data/content";

import { Reveal } from "./Reveal";

export function ValueProposition() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="rule-label mb-8">Positioning</p>
          <h2 className="max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl">
            Not Just A Website. <span className="serif-italic">A System.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Your website shouldn't just exist. It should work.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Traditional Website
            </p>
            <ul className="mt-6">
              {traditionalWebsite.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-3 font-display text-xl text-muted-foreground sm:text-2xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-primary">
              Digital System
            </p>
            <ul className="mt-6">
              {digitalSystem.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-3 font-display text-xl sm:text-2xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-12 max-w-2xl text-base leading-[1.8] text-muted-foreground">
            I combine web development, AI, automation, and conversion-focused thinking to
            create digital experiences that actively support your business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
