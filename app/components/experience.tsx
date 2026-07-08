import { experience } from "../content";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <ol className="space-y-8">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-sm text-muted sm:pt-0.5">
              {job.period}
            </p>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {job.role}{" "}
                <span className="font-normal text-muted">· {job.company}</span>
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">
                {job.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
