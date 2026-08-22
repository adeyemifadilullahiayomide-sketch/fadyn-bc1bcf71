import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="rule-label mb-8">05 / Contact</p>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <Reveal>
              <h2 className="text-[2.5rem] leading-[1.02] sm:text-6xl">
                Let's Build <span className="serif-italic">Something.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-[1.8] text-muted-foreground">
                Whether you need a high-converting website, an AI-powered application, or an
                automated business system, let's turn the idea into something real.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-foreground px-7 py-4 text-[0.82rem] font-medium tracking-wide text-background transition-colors hover:bg-primary"
              >
                Start a Project <span aria-hidden>↗</span>
              </a>
              <a
                href="#work"
                className="link-underline text-[0.82rem] font-medium tracking-wide"
              >
                View My Work
              </a>
            </Reveal>
          </div>

          <Reveal delay={80} className="scroll-mt-28">
            <div id="contact-form">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
