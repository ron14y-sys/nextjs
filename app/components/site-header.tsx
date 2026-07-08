import Link from "next/link";
import { nav, site } from "../content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-brand"
        >
          {site.name}
        </Link>
        <nav className="hidden gap-7 text-sm text-muted sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
