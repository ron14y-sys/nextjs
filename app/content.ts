// ---------------------------------------------------------------------------
// Portfolio content — edit everything in this one file to make the site yours.
// Structure mirrors the "Ron Yegerman Portfolio" design.
// ---------------------------------------------------------------------------

export const site = {
  name: "Ron Yegerman",
  role: "Software Developer Student",
  location: "Tel Aviv, Israel",
  tagline:
    "B.Sc. Computer Science student (MAGNET Excellence Program, HIT) with hands-on industry experience building production-grade automation systems and AI-powered pipelines.",
  email: "ron14.y@gmail.com",
  phone: "+972-50-3550500",
  // Used for absolute URLs (OG tags, canonical).
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
  meta: string;
  description: string;
  tags: string[];
  source?: string;
};

export const projects: Project[] = [
  {
    title: "Image Classification — FashionMNIST",
    meta: "HIT Academic Project · 2024",
    description:
      "Engineered a multi-label image classifier in Python using NumPy, Pandas, and Scikit-learn on the FashionMNIST dataset; applied feature engineering, model tuning, and performance evaluation.",
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    source: "https://github.com/ron14y-sys/project-FashionMNIST",
  },
];

export type Job = {
  period: string;
  role: string;
  org: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    period: "2025 — Present",
    role: "Software Automation Engineer",
    org: "Ifor.AI",
    bullets: [
      "Built and maintained business automation workflows using JavaScript, n8n, APIs, OCR services, and LLM technologies.",
      "Integrated Monday.com and third-party APIs into end-to-end procurement and onboarding processes.",
      "Automated the full procurement lifecycle, from supplier-document intake and quote generation to order tracking and system updates.",
    ],
  },
  {
    period: "2024 — Present",
    role: "Cyber Security Analyst",
    org: "ClearSky Cyber Security",
    bullets: [
      "Investigated malicious network activity and produced structured technical intelligence reports for enterprise clients.",
      "Applied systematic debugging, log analysis, and data-driven reasoning skills.",
    ],
  },
  {
    period: "2022",
    role: "QA Tester",
    org: "Goodie",
    bullets: [
      "Authored structured test cases covering functional, regression, and edge-case scenarios.",
      "Tracked and documented software defects in JIRA, accelerating the debugging pipeline and improving release stability.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Network Technician",
    org: "IDF ICT Unit",
    bullets: [
      "Hands-on training in network infrastructure, routing protocols, and system configuration.",
    ],
  },
];

export const about = {
  paragraphs: [
    "B.Sc. Computer Science student in the MAGNET Excellence Program at Holon Institute of Technology, expected to graduate February 2028. I bring hands-on industry experience in automation engineering and cyber security alongside my studies.",
    "Relevant coursework: Data Structures & Algorithms, OOP, Operating Systems, Computer Networks, Databases — 87 GPA.",
  ],
  military: {
    title: "Military Service",
    role: "ICT Instructor & Training Development NCO · IDF · 2020–2022",
    description:
      "Led technical training on network and ICT systems for 20+ soldiers; designed structured onboarding programs that cut time-to-competency.",
  },
};

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["C", "C++", "Python", "Java", "JavaScript", "SQL"] },
  {
    label: "CS Fundamentals",
    items: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "Networks"],
  },
  { label: "Automation & Integrations", items: ["n8n", "OCR", "LLM pipelines"] },
  { label: "Data & ML", items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"] },
  { label: "Tools", items: ["Git", "GitHub", "Linux", "JIRA"] },
];

export const contact = {
  heading: "Let's work together",
  blurb: "Open to Software Developer Student opportunities. Reach out any time.",
};
