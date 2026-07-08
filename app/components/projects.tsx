import { projects } from "../content";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm shadow-brand/5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/15"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 font-mono text-xs text-brand"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {(project.live || project.source) && (
              <div className="mt-5 flex gap-4 text-sm font-medium">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    Live ↗
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Source ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
