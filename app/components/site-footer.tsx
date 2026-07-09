import { site } from "../content";

export function SiteFooter() {
  return (
    <footer className="px-8 py-7 text-center text-[13px] text-[#7f9fb5]">
      © 2026 {site.name}
    </footer>
  );
}
