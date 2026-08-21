import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have An Idea? Let's Build It."
            subtitle="Whether you need a high-converting website, an AI-powered application, or an automated business system, let's turn the idea into something real."
          />
          <Reveal delay={100} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start A Project →
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-lg border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
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
    </section>
  );
}
