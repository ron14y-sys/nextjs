/** The small uppercase section label from the design (13px, tracked, muted). */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-label">
      {children}
    </p>
  );
}
