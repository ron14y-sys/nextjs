import { about, skillGroups } from "../content";
import { Eyebrow } from "./section";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[900px] px-8 py-24">
      <Eyebrow>About</Eyebrow>
      <h2 className="mb-9 font-display text-[32px] font-extrabold text-ink">
        A bit about me
      </h2>

      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <div>
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 text-[16px] leading-[1.75] text-body-strong last:mb-7"
            >
              {paragraph}
            </p>
          ))}

          <div className="rounded-2xl border border-line bg-card px-[26px] py-[22px]">
            <div className="mb-1.5 font-display text-[15px] font-bold text-ink">
              {about.military.title}
            </div>
            <div className="mb-2 text-[14.5px] font-semibold text-brand">
              {about.military.role}
            </div>
            <p className="text-[14.5px] leading-[1.65] text-body">
              {about.military.description}
            </p>
          </div>
        </div>

        <div>
          <div className="mb-3.5 font-display text-[15px] font-bold text-ink">
            Skills
          </div>
          {skillGroups.map((group) => (
            <div key={group.label} className="mb-5">
              <div className="mb-2 text-[13px] font-semibold text-label">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-panel px-[13px] py-1.5 text-[13px] font-semibold text-brand-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
