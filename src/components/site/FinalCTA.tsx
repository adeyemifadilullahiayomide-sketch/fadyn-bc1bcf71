import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <h2 className="max-w-4xl text-[2.4rem] leading-[1.05] sm:text-6xl">
            Ready to build something{" "}
            <span className="serif-italic text-primary">better?</span>
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-8 max-w-lg text-base leading-[1.8] text-muted-foreground">
            Let's create a digital system that actually works for your business.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground px-7 py-4 text-[0.82rem] font-medium tracking-wide text-background transition-colors hover:bg-primary"
            >
              Let's Talk <span aria-hidden>↗</span>
            </a>
            <a
              href="#work"
              className="link-underline text-[0.82rem] font-medium tracking-wide"
            >
              View My Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
