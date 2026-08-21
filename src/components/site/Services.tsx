import { Check } from "lucide-react";

import { services } from "@/data/content";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="What I Build"
          subtitle="From high-converting websites to AI-powered business systems."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 60} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card">
                <span className="font-mono text-xs text-muted-foreground">
                  {service.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  {service.cta} →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
