import { Check, Minus } from "lucide-react";

import { digitalSystem, traditionalWebsite } from "@/data/content";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ValueProposition() {
  return (
    <section className="border-t border-border py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Positioning"
          title="Not Just A Website. A System."
          subtitle="Your website shouldn't just exist. It should work."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-background/60 p-6">
              <h3 className="text-base font-semibold text-muted-foreground">
                Traditional Website
              </h3>
              <ul className="mt-5 space-y-3">
                {traditionalWebsite.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Minus className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-mint/30 bg-surface/70 p-6 shadow-card">
              <h3 className="text-base font-semibold">Digital System</h3>
              <ul className="mt-5 space-y-3">
                {digitalSystem.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="size-4 shrink-0 text-mint" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            I combine web development, AI, automation, and conversion-focused thinking to
            create digital experiences that actively support your business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
