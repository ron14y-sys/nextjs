type SectionProps = {
  id: string;
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
};

/** A titled section with a small mono "eyebrow" label above the heading. */
export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-border py-16 first:border-t-0 sm:py-20"
    >
      <p className="eyebrow">{eyebrow}</p>
      {title ? (
        <h2 className="text-gradient mt-3 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
