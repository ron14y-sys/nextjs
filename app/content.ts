// ---------------------------------------------------------------------------
// Portfolio content — edit everything in this one file to make the site yours.
// No component code needs to change; the pages read from these exports.
// ---------------------------------------------------------------------------

export const site = {
  name: "Ron Yegerman",
  role: "Software Engineer",
  // Shown in the hero. Keep it to a sentence or two.
  tagline:
    "B.Sc. Computer Science student (MAGNET Excellence Program, HIT) with hands-on industry experience in cybersecurity.",
  location: "Israel",
  email: "ron14.y@gmail.com",
  // Used for absolute URLs (OG tags, canonical). Set to your real domain after deploy.
  url: "https://nextjs-six-lilac-jggih94y1m.vercel.app",
} as const;

export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/ron14y-sys" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ron-yegerman-a35b7a248" },
];

// Anchor sections rendered in the nav, in order.
export const nav: { label: string; href: string }[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  // Optional links — omit either one to hide that button.
  live?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    title: "Ledger",
    description:
      "A double-entry accounting engine with an event-sourced core, exposed over a typed API. Handles thousands of transactions per second with strong consistency guarantees.",
    tags: ["TypeScript", "PostgreSQL", "Event Sourcing"],
    live: "https://example.com",
    source: "https://github.com/your-handle/ledger",
  },
  {
    title: "Atlas",
    description:
      "A real-time collaborative editor built on CRDTs. Offline-first, conflict-free sync, and a plugin system for custom block types.",
    tags: ["React", "WebSockets", "Rust"],
    live: "https://example.com",
    source: "https://github.com/your-handle/atlas",
  },
  {
    title: "Beacon",
    description:
      "Self-hosted uptime and latency monitoring with alerting. Deployed as a single binary; scrapes, stores, and visualizes without external dependencies.",
    tags: ["Go", "Prometheus", "Grafana"],
    source: "https://github.com/your-handle/beacon",
  },
  {
    title: "Prism",
    description:
      "A design-token pipeline that turns a single source of truth into platform-native themes for web, iOS, and Android.",
    tags: ["Node.js", "Design Systems", "CLI"],
    live: "https://example.com",
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Acme Corp",
    period: "2023 — Present",
    description:
      "Lead engineer on the platform team. Rebuilt the deployment pipeline, cutting release time by 70%, and mentor a team of four.",
  },
  {
    role: "Software Engineer",
    company: "Globex",
    period: "2020 — 2023",
    description:
      "Shipped core features across the product, from a rewritten billing system to a customer-facing analytics dashboard.",
  },
  {
    role: "Junior Developer",
    company: "Initech",
    period: "2018 — 2020",
    description:
      "Started on the frontend, grew into full-stack work, and owned the internal component library.",
  },
];

// Shown in the About section as a compact skills grid.
export const skills: string[] = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Go",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Docker",
  "CI/CD",
];

// A short paragraph or two for the About section.
export const about: string[] = [
  "I'm a software engineer with several years of experience building products end to end. I care about clear abstractions, fast feedback loops, and interfaces that feel obvious.",
  "Outside of work you'll find me contributing to open source, reading about distributed systems, and slowly restoring an old mechanical keyboard.",
];
