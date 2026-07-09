import { projects } from "../content";
import { Eyebrow } from "./section";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[900px] px-8 pb-24 pt-10">
      <Eyebrow>Projects</Eyebrow>
      <h2 className="mb-9 font-display text-[32px] font-extrabold text-ink">
        Selected work
      </h2>

      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-3.5 rounded-[20px] border border-line bg-card p-9 shadow-[0_4px_20px_rgba(31,90,140,0.05)] sm:px-10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-[21px] font-bold text-ink">
                {project.title}
              </h3>
              <span className="text-[13px] font-semibold text-label">
                {project.meta}
              </span>
            </div>

            <p className="text-[15.5px] leading-[1.7] text-body">
              {project.description}
            </p>

            <ul className="mt-1 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-panel px-3.5 py-1.5 text-[13px] font-semibold text-brand-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 text-[14.5px] font-semibold text-brand-ink transition-colors hover:text-brand-deep"
              >
                View on GitHub →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
