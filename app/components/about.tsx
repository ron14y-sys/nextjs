import { about, skills } from "../content";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="space-y-4 text-base leading-7 text-foreground/90">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 font-mono text-xs font-medium text-brand"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
