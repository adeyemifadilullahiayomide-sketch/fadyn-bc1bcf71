import { LINKEDIN_URL, navLinks } from "@/data/content";

const footerLinks = navLinks.filter((link) =>
  ["Home", "Work", "Services", "About", "Contact"].includes(link.label),
);

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-base font-semibold">Fadilullahi Adeyemi</p>
          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            Digital Systems Builder
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Building websites, AI applications, and digital systems for ambitious businesses.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-medium">Navigation</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-medium">Connect</p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn →
          </a>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-mint" aria-hidden />
            Available for projects &amp; collaborations.
          </p>
        </div>
      </div>

      <div className="section-shell mt-12 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © 2026 Fadilullahi Adeyemi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
