import Link from "next/link";
import { nav, site } from "../content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 sm:px-14 sm:py-[22px]">
        <Link
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-[19px]"
        >
          {site.name}
        </Link>
        <nav className="hidden gap-9 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-body transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
