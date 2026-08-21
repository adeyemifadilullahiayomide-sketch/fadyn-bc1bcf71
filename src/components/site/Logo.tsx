import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8", className)}
      role="img"
      aria-label="Fadyn"
    >
      <path d="M9 7h7v34h-7z" fill="currentColor" opacity="0.9" />
      <path d="M9 7h19v7H9z" fill="currentColor" />
      <path d="M28 7l8 3.5L28 14z" fill="var(--color-mint)" />
      <path d="M9 20h15v7H9z" fill="currentColor" />
    </svg>
  );
}
