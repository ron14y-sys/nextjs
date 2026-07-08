import { site, socials } from "../content";
import { Section } from "./section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="max-w-xl text-base leading-7 text-muted">
        I&apos;m open to interesting projects and conversations. The fastest way
        to reach me is email — I usually reply within a day.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-flex items-center font-mono text-lg font-medium text-brand underline-offset-4 hover:underline"
      >
        {site.email}
      </a>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline-offset-4 hover:text-brand hover:underline"
          >
            {s.label} ↗
          </a>
        ))}
      </div>
    </Section>
  );
}
