const portrait = { url: "/images/fadilullahi-portrait.jpg" };
import { currentFocus, toolkit } from "@/data/content";

import { Reveal } from "./Reveal";

const interests = [
  "Healthcare",
  "Real estate",
  "B2B",
  "Local businesses",
  "Islamic technology",
  "AI products",
];

const toolWords = toolkit.flatMap((group) => group.tools);

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="rule-label mb-8">03 / About</p>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <h2 className="text-[2.5rem] leading-[1.02] sm:text-6xl">
              A Little <span className="serif-italic">About</span> Me.
            </h2>

            <div className="mt-12 max-w-xs">
              <div className="relative">
                <span
                  className="absolute -left-3 -top-3 size-full border border-primary"
                  aria-hidden
                />
                <img
                  src={portrait.url}
                  alt="Portrait of Fadilullahi Adeyemi, Digital Systems Builder"
                  width={1131}
                  height={1414}
                  loading="lazy"
                  decoding="async"
                  className="relative w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <p className="mt-5 font-display text-xl">Fadilullahi Adeyemi</p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Digital Systems Builder
              </p>
            </div>
          </Reveal>

          <div className="lg:pt-4">
            <Reveal delay={80}>
              <h3 className="max-w-xl text-2xl leading-[1.25] sm:text-[2rem]">
                I'm Building More Than Websites. I'm Building My Future With Technology.
              </h3>
            </Reveal>

            <Reveal delay={120} className="mt-8 max-w-xl space-y-5 text-base leading-[1.8] text-muted-foreground">
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
              <p className="serif-italic text-xl text-foreground">
                AI × Web Development × Automation × Entrepreneurship
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-12">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Especially interested in
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {interests.map((item, i) => (
                  <li key={item} className="font-display text-lg">
                    {item}
                    {i < interests.length - 1 ? (
                      <span className="ml-3 text-border-strong" aria-hidden>
                        /
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180} className="mt-14">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Right now
              </p>
              <dl className="mt-6">
                {currentFocus.map((card) => (
                  <div
                    key={card.label}
                    className="grid gap-1 border-t border-border py-5 last:border-b sm:grid-cols-[7rem_1fr] sm:gap-6"
                  >
                    <dt className="font-display text-lg">{card.label}</dt>
                    <dd className="text-sm leading-[1.75] text-muted-foreground">
                      {card.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="mt-28">
          <Reveal>
            <p className="rule-label mb-8">My Toolkit</p>
          </Reveal>
          <Reveal delay={60}>
            <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-3 border-t border-border pt-8">
              {toolWords.map((tool) => (
                <li
                  key={tool}
                  className="cursor-default font-display text-2xl leading-tight text-foreground transition-colors duration-300 hover:text-primary sm:text-[2.1rem]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
