import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilterValue,
} from "@/data/projects";
import { cn } from "@/lib/utils";

import { CaseStudyDialog } from "./CaseStudyDialog";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({
  project,
  onOpenCaseStudy,
}: {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} — ${project.categoryLabel}`}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        <span className="absolute left-3 top-3 rounded-md border border-border bg-background/85 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">
            {project.name}
            {project.secondaryName ? (
              <span className="ml-2 align-middle font-sans text-xs font-normal text-muted-foreground">
                / {project.secondaryName}
              </span>
            ) : null}
          </h3>
          {project.accent ? (
            <span
              className="mt-2 size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: project.accent }}
              aria-hidden
            />
          ) : null}
        </div>
        <p className="mt-1 text-xs text-mint">{project.categoryLabel}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background/70 px-2 py-1 text-[0.7rem] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Project <ExternalLink className="size-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-lg border border-border px-3.5 py-2 text-xs text-muted-foreground">
              Coming Soon
            </span>
          )}
          {project.caseStudy ? (
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center rounded-lg border border-border-strong px-3.5 py-2 text-xs font-medium transition-colors hover:bg-surface-raised"
            >
              Case Study
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [filter, setFilter] = useState<ProjectFilterValue>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="border-t border-border py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Selected Work"
          subtitle="A growing collection of websites, AI applications, digital products, and business systems I've built."
        />

        <Reveal className="mt-8 flex flex-wrap gap-2" delay={80}>
          {projectFilters.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
              className={cn(
                "rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors",
                filter === option
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
              )}
            >
              {option}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} as="div" delay={i * 60} className="h-full">
              <ProjectCard project={project} onOpenCaseStudy={setActive} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}

        <Reveal className="mt-16 rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
          <h3 className="text-xl font-semibold">Islamic Technology Projects</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Exploring how modern AI and digital products can create meaningful experiences
            around Islamic learning, reflection, productivity, and community.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.category === "Islamic Tech")
              .map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 px-4 py-3"
                >
                  <span>
                    <span className="block text-sm font-medium">{p.name}</span>
                    <span className="block text-xs text-muted-foreground">{p.status}</span>
                  </span>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Live <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground">Coming Soon</span>
                  )}
                </li>
              ))}
          </ul>
        </Reveal>
      </div>

      <CaseStudyDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
}
