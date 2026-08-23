import { useState } from "react";

import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

import { CaseStudyDialog } from "./CaseStudyDialog";
import { Reveal } from "./Reveal";

function ProjectEntry({
  project,
  index,
  size,
  onOpenCaseStudy,
}: {
  project: Project;
  index: number;
  size: "feature" | "wide" | "half";
  onOpenCaseStudy: (project: Project) => void;
}) {
  const number = String(index + 1).padStart(2, "0");
  const Media = (
    <div className="group/media relative overflow-hidden border border-border bg-surface">
      <div
        className={cn(
          "overflow-hidden",
          size === "feature"
            ? "aspect-[16/9]"
            : size === "wide"
              ? "aspect-[21/9]"
              : "aspect-[4/3]",
        )}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} — ${project.categoryLabel}`}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/entry:scale-[1.045]"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-display text-3xl text-muted-foreground">
              {project.name}
            </span>
          </div>
        )}
      </div>
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-500 group-hover/entry:w-full"
        aria-hidden
      />
    </div>
  );

  return (
    <article className="group/entry">
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
          {Media}
        </a>
      ) : (
        Media
      )}

      <div
        className={cn(
          "mt-6 flex flex-col gap-4",
          size !== "half" && "sm:flex-row sm:items-start sm:justify-between sm:gap-12",
        )}
      >
        <div className={cn(size !== "half" && "sm:max-w-md")}>
          <div className="flex items-baseline gap-4">
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover/entry:text-primary">
              {number}
            </span>
            <h3
              className={cn(
                "transition-transform duration-500 group-hover/entry:translate-x-1",
                size === "half" ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl",
              )}
            >
              {project.name}
              {project.secondaryName ? (
                <span className="serif-italic text-muted-foreground">
                  {" "}
                  / {project.secondaryName}
                </span>
              ) : null}
            </h3>
          </div>
          <p className="mt-2 pl-8 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {project.categoryLabel} — {project.status}
          </p>
        </div>

        <div className={cn(size !== "half" ? "sm:max-w-sm" : "")}>
          <p className={cn("text-sm leading-[1.75] text-muted-foreground", size !== "half" && "sm:text-[0.95rem]")}>
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {project.technologies.map((tech, ti) => (
              <li key={`${tech}-${ti}`} className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-[0.78rem] font-medium transition-colors hover:border-primary hover:text-primary"
              >
                View Project
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover/entry:translate-x-1 group-hover/entry:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            ) : (
              <span className="text-[0.78rem] text-muted-foreground">Coming Soon</span>
            )}
            {project.caseStudy ? (
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="link-underline text-[0.78rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Case Study
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  const featured = projects[0];
  const pairOne = projects.slice(1, 3);
  const wide = projects[3];
  const rest = projects.slice(4);
  const islamic = projects.filter((p) => p.category === "Islamic Tech");

  return (
    <section id="work" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="rule-label mb-8">01 / Selected Work</p>
          <h2 className="max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl">
            Things I've <span className="serif-italic">Built.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            A growing collection of websites, AI applications, digital products, and
            business systems I've built.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-32">
          {featured ? (
            <Reveal>
              <ProjectEntry
                project={featured}
                index={0}
                size="feature"
                onOpenCaseStudy={setActive}
              />
            </Reveal>
          ) : null}

          <div className="grid gap-24 md:grid-cols-2 md:gap-12">
            {pairOne.map((project, i) => (
              <Reveal key={project.id} delay={i * 90} className={i === 1 ? "md:mt-24" : ""}>
                <ProjectEntry
                  project={project}
                  index={i + 1}
                  size="half"
                  onOpenCaseStudy={setActive}
                />
              </Reveal>
            ))}
          </div>

          {wide ? (
            <Reveal>
              <ProjectEntry
                project={wide}
                index={3}
                size="wide"
                onOpenCaseStudy={setActive}
              />
            </Reveal>
          ) : null}

          <div className="grid gap-24 md:grid-cols-2 md:gap-12">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={i * 80} className={i % 2 === 1 ? "md:mt-24" : ""}>
                <ProjectEntry
                  project={project}
                  index={i + 4}
                  size="half"
                  onOpenCaseStudy={setActive}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-28 border-t border-border pt-12">
          <h3 className="text-2xl sm:text-3xl">Islamic Technology Projects</h3>
          <p className="mt-4 max-w-xl text-sm leading-[1.75] text-muted-foreground">
            Exploring how modern AI and digital products can create meaningful experiences
            around Islamic learning, reflection, productivity, and community.
          </p>
          <ul className="mt-10">
            {islamic.map((p) => (
              <li
                key={p.id}
                className="flex items-baseline justify-between gap-6 border-t border-border py-5 last:border-b"
              >
                <span className="font-display text-xl sm:text-2xl">{p.name}</span>
                <span className="flex items-baseline gap-6">
                  <span className="hidden text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
                    {p.status}
                  </span>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[0.78rem] font-medium"
                    >
                      Live ↗
                    </a>
                  ) : (
                    <span className="text-[0.78rem] text-muted-foreground">Coming Soon</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <CaseStudyDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
}
