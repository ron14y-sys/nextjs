import { contact, site, socials } from "../content";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#dcf0fc] to-[#eaf5fd] px-8 py-24"
    >
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
        <h2 className="font-display text-[34px] font-extrabold text-ink">
          {contact.heading}
        </h2>
        <p className="text-[16.5px] leading-[1.7] text-body">{contact.blurb}</p>

        <div className="mt-2.5 flex flex-wrap justify-center gap-3.5">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-brand px-7 py-[13px] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(63,142,224,0.3)] transition-transform hover:-translate-y-0.5"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="rounded-full border border-line-btn bg-card px-7 py-[13px] text-[15px] font-semibold text-brand-ink transition-colors hover:border-brand"
          >
            {site.phone}
          </a>
        </div>

        <div className="mt-4 flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.5px] font-semibold text-brand-ink transition-colors hover:text-brand-deep"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
