import { LINKEDIN_URL, navLinks } from "@/data/content";

const footerLinks = navLinks.filter((link) =>
  ["Work", "Services", "About", "Contact"].includes(link.label),
);

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="section-shell">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl leading-none sm:text-4xl">
              Fadyn
            </p>
            <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Digital Systems Builder
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[0.78rem] font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[0.78rem] font-medium"
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            © 2026 Fadyn
          </p>
          <p className="flex items-center gap-2.5 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            Available for projects &amp; collaborations
          </p>
        </div>
      </div>
    </footer>
  );
}
