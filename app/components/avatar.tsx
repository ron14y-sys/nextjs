import Image from "next/image";
import { site } from "../content";

// To use a real photo: drop a square image at `public/avatar.jpg` and set this
// to `true`. Until then, the design's gradient monogram is shown.
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
        width={92}
        height={92}
        priority
        className="h-[92px] w-[92px] rounded-full object-cover shadow-[0_12px_32px_rgba(63,142,224,0.28)]"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="flex h-[92px] w-[92px] select-none items-center justify-center rounded-full bg-gradient-to-br from-[#6fb6ee] to-[#3f8ee0] shadow-[0_12px_32px_rgba(63,142,224,0.28)]"
    >
      <span className="font-display text-3xl font-extrabold text-white">
        {initials(site.name)}
      </span>
    </div>
  );
}
