import { useEffect, useState } from "react";

import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

const links = navLinks.filter((link) =>
  ["Work", "Services", "About", "Contact"].includes(link.label),
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/50 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "section-shell flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-24",
        )}
      >
        <a href="#home" className="group leading-none">
          <span className="font-display text-lg tracking-tight sm:text-xl">
            Fadilullahi Adeyemi
          </span>
          <span className="mt-1.5 block text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Digital Systems Builder
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[0.8rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 border-b border-foreground pb-1 text-[0.8rem] font-medium transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            Let's Talk <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="section-shell flex flex-col py-6">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 border-b border-foreground pb-1 text-sm font-medium"
              >
                Let's Talk <span aria-hidden>↗</span>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
