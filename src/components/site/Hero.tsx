import { buildingWith } from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 lg:pt-52">
      <div className="section-shell relative grid items-center gap-16 lg:grid-cols-[1fr_0.92fr] lg:gap-20">
        <div className="enter-up">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Digital Systems Builder
          </p>

          <h1 className="mt-8 text-[2.8rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            I Build Digital <span className="serif-italic text-primary">Systems</span> That
            Turn Clicks Into Clients.
          </h1>

          <p className="mt-8 max-w-lg text-base leading-[1.75] text-muted-foreground sm:text-[1.05rem]">
            I help B2B and local businesses build high-converting websites, AI-powered
            applications, and automated systems that make their business easier to grow.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground px-7 py-4 text-[0.82rem] font-medium tracking-wide text-background transition-colors hover:bg-primary"
            >
              Start a Project <span aria-hidden>↗</span>
            </a>
            <a
              href="#work"
              className="link-underline inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-wide"
            >
              View My Work <span aria-hidden>↓</span>
            </a>
          </div>

          <p className="mt-12 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Websites — AI Apps — Automation — Digital Products
          </p>
        </div>

        <HeroCollage />
      </div>

      <div className="section-shell relative mt-24">
        <div className="flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Building with
            </span>
            <span className="font-display text-lg">{buildingWith.join(" · ")}</span>
          </div>
          <p className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            Available for freelance projects, partnerships &amp; development opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({
  src,
  alt,
  label,
  className,
  eager,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden border border-border bg-card shadow-card">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="size-1.5 rounded-full bg-border-strong" />
        </div>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="w-full object-cover"
        />
      </div>
      <figcaption className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </figcaption>
    </figure>
  );
}

function HeroCollage() {
  return (
    <div className="enter-up relative mx-auto w-full max-w-[34rem] lg:max-w-none [animation-delay:220ms]">
      <div className="absolute -inset-8 hairline-grid opacity-70" aria-hidden />

      <div className="relative pb-16 pl-4 pr-6 sm:pb-20 sm:pr-12">
        <BrowserFrame
          eager
          src="/images/work/cre8hive.jpg"
          alt="Cre8hive — digital agency website built by Fadyn"
          label="01 — Cre8hive / Website"
          className="relative z-10 rotate-[-1.2deg]"
        />

        <BrowserFrame
          src="/images/work/gentle-path.jpg"
          alt="Gentle Path — AI wellness web application"
          label="02 — Gentle Path / AI App"
          className="absolute -bottom-2 left-0 z-20 w-[52%] rotate-[2.4deg] sm:-bottom-4"
        />

        <BrowserFrame
          src="/images/work/vibrant-ai-health.jpg"
          alt="Vibrant AI Health — AI healthcare platform"
          label="03 — Vibrant AI / Health"
          className="absolute -right-2 top-1/4 z-20 hidden w-[40%] rotate-[-3deg] sm:block"
        />

        <span
          className="absolute right-6 top-2 z-0 size-16 border-2 border-primary sm:size-20"
          aria-hidden
        />
        <span
          className="absolute bottom-8 right-2 z-30 size-3 rounded-full bg-primary"
          aria-hidden
        />
      </div>
    </div>
  );
}
