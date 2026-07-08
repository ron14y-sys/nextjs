import Link from "next/link";
import { site, socials } from "../content";
import { Avatar } from "./avatar";

export function Hero() {
  return (
    <section id="top" className="pt-16 sm:pt-24">
      <Avatar />
      <h1 className="text-gradient mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-brand">
        {site.role} · {site.location}
      </p>
      <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/90">
        {site.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="#contact"
          className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-brand to-brand-strong px-5 text-sm font-medium text-white shadow-lg shadow-brand/30 transition-all hover:shadow-xl hover:shadow-brand/40 hover:brightness-110"
        >
          Get in touch
        </Link>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full border border-brand/25 bg-card/60 px-5 text-sm font-medium text-brand backdrop-blur transition-colors hover:border-brand/50 hover:bg-brand/5"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
