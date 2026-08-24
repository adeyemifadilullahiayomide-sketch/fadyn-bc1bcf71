import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="max-w-5xl text-[2.1rem] leading-[1.14] sm:text-[3.4rem] lg:text-[4rem]">
            I like building things that are{" "}
            <span className="serif-italic text-primary">useful, beautiful,</span> and
            actually work.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-10 flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-16 bg-border-strong" aria-hidden />
            Fadilullahi Adeyemi — Digital Systems Builder
          </p>
        </Reveal>
      </div>
    </section>
  );
}
