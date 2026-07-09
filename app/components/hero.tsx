import Link from "next/link";
import { site, socials } from "../content";
import { Avatar } from "./avatar";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[900px] flex-col items-start gap-7 px-8 pb-[88px] pt-20 sm:pt-24"
    >
      <Avatar />

      <div>
        <h1 className="font-display text-[clamp(2.5rem,8vw,56px)] font-extrabold leading-[1.05] tracking-[-0.01em] text-ink">
          {site.name}
        </h1>
        <p className="mt-3.5 text-xl font-semibold text-brand">
          {site.role} · {site.location}
        </p>
      </div>

      <p className="max-w-[640px] text-[17px] leading-[1.7] text-body">
        {site.tagline}
      </p>

      <div className="flex flex-wrap gap-3.5">
        <Link
          href="#contact"
          className="rounded-full bg-brand px-[26px] py-[13px] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(63,142,224,0.3)] transition-transform hover:-translate-y-0.5"
        >
          Get in touch
        </Link>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line-btn bg-card px-[26px] py-[13px] text-[15px] font-semibold text-brand-ink transition-colors hover:border-brand"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
