import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 border border-border bg-background/90 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
    >
      <span aria-hidden>↑</span> Top
    </button>
  );
}
