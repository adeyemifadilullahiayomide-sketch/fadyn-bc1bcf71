import { buildingWith } from "@/data/content";

import { Reveal } from "./Reveal";
import { SystemDiagram } from "./SystemDiagram";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="absolute inset-0 hairline-grid opacity-40" aria-hidden />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="eyebrow">AI • Web • Automation</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              I Build Digital Systems That Turn Clicks Into Clients.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I help B2B and local businesses build high-converting websites, AI-powered
              applications, and automated systems that make their business easier to grow.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
            >
              Start a Project →
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              View My Work
            </a>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Websites • AI Apps • Automation • Digital Products
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <SystemDiagram />
        </Reveal>
      </div>

      <div className="section-shell relative mt-16">
        <Reveal className="flex flex-col gap-4 rounded-xl border border-border bg-surface/50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Building with
            </span>
            <span className="text-sm text-foreground">
              {buildingWith.join(" • ")}
            </span>
          </div>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-mint" aria-hidden />
            Available for freelance projects, partnerships &amp; development opportunities.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
