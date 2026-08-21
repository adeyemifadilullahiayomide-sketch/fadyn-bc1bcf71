import { ExternalLink } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mint">
        {title}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function CaseStudyDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const cs = project?.caseStudy;

  return (
    <Dialog open={Boolean(project && cs)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-border bg-popover">
        {project && cs ? (
          <>
            <DialogHeader>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                {project.status} • {project.categoryLabel}
              </p>
              <DialogTitle className="text-2xl">{project.name}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-2 space-y-6">
              <Block title="The Challenge">{cs.challenge}</Block>
              <Block title="The Goal">{cs.goal}</Block>
              <Block title="The Solution">{cs.solution}</Block>
              <Block title="What I Built">
                <ul className="list-disc space-y-1 pl-5">
                  {cs.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
              <Block title="Built With">
                <ul className="flex flex-wrap gap-2">
                  {cs.builtWith.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-background/70 px-2 py-1 text-[0.7rem]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Development Process">
                <ol className="list-decimal space-y-1 pl-5">
                  {cs.process.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </Block>
              <Block title="Outcome">{cs.outcome}</Block>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Live Project <ExternalLink className="size-4" />
                </a>
              ) : null}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
