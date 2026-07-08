import Image from "next/image";
import { site } from "../content";

// To use a real photo: drop a square image at `public/avatar.jpg` and flip
// this to `true`. Until then, a clean monogram placeholder is shown.
const HAS_PHOTO = false;

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar() {
  if (HAS_PHOTO) {
    return (
      <Image
        src="/avatar.jpg"
        alt={site.name}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border border-border object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="flex h-28 w-28 select-none items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-strong font-mono text-3xl font-semibold tracking-tight text-white shadow-lg shadow-brand/30 ring-4 ring-brand/15"
    >
      {initials(site.name)}
    </div>
  );
}
