import { Bot, Globe, UserRound, Workflow } from "lucide-react";

const nodes = [
  { icon: Globe, label: "Website", detail: "Attract & convert" },
  { icon: Bot, label: "AI", detail: "Qualify & assist" },
  { icon: Workflow, label: "Automation", detail: "Follow up & route" },
  { icon: UserRound, label: "Customer", detail: "Serve & retain" },
];

export function SystemDiagram() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface/60 p-5 shadow-card sm:p-7">
      <div className="absolute inset-0 hairline-grid rounded-2xl opacity-60" aria-hidden />
      <div className="relative">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
          System map
        </p>

        <ul className="mt-5 space-y-3">
          {nodes.map((node, i) => (
            <li key={node.label}>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background/70 px-4 py-3 transition-colors hover:border-border-strong">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised text-primary">
                  <node.icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{node.label}</span>
                  <span className="block text-xs text-muted-foreground">{node.detail}</span>
                </span>
                <span className="ml-auto font-mono text-[0.62rem] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              {i < nodes.length - 1 ? (
                <svg
                  aria-hidden
                  viewBox="0 0 4 24"
                  className="ml-8 h-6 w-1 overflow-visible"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="24"
                    className="flow-line stroke-mint"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background/70 p-4">
            <p className="text-xs text-muted-foreground">Lead captured</p>
            <p className="mt-1 text-sm font-medium">Routed to CRM automatically</p>
          </div>
          <div className="rounded-xl border border-border bg-background/70 p-4">
            <p className="text-xs text-muted-foreground">AI assistant</p>
            <p className="mt-1 text-sm font-medium">Answers &amp; qualifies 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
