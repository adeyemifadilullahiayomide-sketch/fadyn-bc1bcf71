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
    <div className="border-t border-border pt-5">
      <h4 className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        {title}
      </h4>
      <div className="mt-3 text-sm leading-[1.8] text-muted-foreground">{children}</div>
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
      <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto rounded-none border-border bg-background p-8">
        {project && cs ? (
          <>
            <DialogHeader className="text-left">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {project.status} — {project.categoryLabel}
              </p>
              <DialogTitle className="mt-3 text-4xl leading-none">{project.name}</DialogTitle>
              <DialogDescription className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              <Block title="The Challenge">{cs.challenge}</Block>
              <Block title="The Goal">{cs.goal}</Block>
              <Block title="The Solution">{cs.solution}</Block>
              <Block title="What I Built">
                <ul className="space-y-1.5">
                  {cs.built.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary" aria-hidden>
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Built With">
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {cs.builtWith.map((tech) => (
                    <li
                      key={tech}
                      className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Development Process">
                <ol className="space-y-1.5">
                  {cs.process.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="text-[0.7rem] tracking-[0.2em] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Block>
              <Block title="Outcome">{cs.outcome}</Block>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-6 py-3.5 text-[0.78rem] font-medium text-background transition-colors hover:bg-primary"
                >
                  Live Project <span aria-hidden>↗</span>
                </a>
              ) : null}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
