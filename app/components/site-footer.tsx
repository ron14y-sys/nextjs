import { site } from "../content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {site.name}. Built with Next.js.
        </p>
        <p className="font-mono text-xs">{site.location}</p>
      </div>
    </footer>
  );
}
