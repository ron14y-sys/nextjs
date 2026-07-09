import { experience } from "../content";
import { Eyebrow } from "./section";

export function Experience() {
  return (
    <section id="experience" className="bg-panel px-8 pb-24 pt-10">
      <div className="mx-auto max-w-[900px]">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="mb-9 font-display text-[32px] font-extrabold text-ink">
          Where I&apos;ve worked
        </h2>

        <div className="flex flex-col">
          {experience.map((job) => (
            <div
              key={`${job.org}-${job.period}`}
              className="grid gap-2 border-b border-line-soft py-7 sm:grid-cols-[170px_1fr] sm:gap-6"
            >
              <div className="text-[14px] font-semibold text-label">
                {job.period}
              </div>
              <div>
                <div className="mb-2 flex flex-wrap items-baseline gap-2.5">
                  <h3 className="font-display text-[18px] font-bold text-ink">
                    {job.role}
                  </h3>
                  <span className="text-[14.5px] font-semibold text-brand">
                    {job.org}
                  </span>
                </div>
                <ul className="flex list-disc flex-col gap-1.5 pl-[18px]">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-[15px] leading-[1.65] text-body">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
