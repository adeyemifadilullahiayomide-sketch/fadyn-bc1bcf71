import portrait from "@/assets/fadilullahi-portrait.jpg.asset.json";
import { currentFocus, toolkit } from "@/data/content";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const interests = [
  "Healthcare",
  "Real estate",
  "B2B",
  "Local businesses",
  "Islamic technology",
  "AI products",
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/60">
              <img
                src={portrait.url}
                alt="Portrait of Fadilullahi Adeyemi, Digital Systems Builder"
                width={1131}
                height={1414}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
              <div className="border-t border-border p-5">
                <p className="text-sm font-semibold">Fadilullahi Adeyemi</p>
                <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Digital Systems Builder
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About"
              title="I'm Building More Than Websites. I'm Building My Future With Technology."
            />

            <Reveal delay={80} className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                I am a Biochemistry student at Lagos State University who developed a strong
                interest in technology, digital products, AI, and entrepreneurship.
              </p>
              <p>
                I began learning how to build websites, applications, automations, and
                AI-powered systems — and kept building until the work became real products
                with real users in mind.
              </p>
              <p>
                Today, I combine AI-assisted development with business thinking to help
                businesses turn ideas and problems into useful digital products.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-mint">
                AI × Web Development × Automation × Entrepreneurship
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-8">
              <p className="text-sm font-medium">Especially interested in</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Toolkit" title="My Toolkit" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((group, i) => (
              <Reveal key={group.group} delay={i * 50} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
                  <h3 className="text-sm font-semibold">{group.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-md border border-border bg-background/70 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Right now" title="Current Focus" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {currentFocus.map((card, i) => (
              <Reveal key={card.label} delay={i * 60} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mint">
                    {card.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 rounded-2xl border border-border bg-surface/40 p-6 text-center">
          <p className="text-sm text-muted-foreground">Client feedback coming soon.</p>
        </Reveal>
      </div>
    </section>
  );
}
