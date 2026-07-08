export type Project = {
  name: string;
  description: string;
  repo: string;
  site?: string;
  logo: string;
};

// The fleet — small, sharp tools, several refactored out of PowderMonkey.
// The roster is kept in step with housecaptain.toml at the repo root; logos
// live in public/logos/.
export const projects: Project[] = [
  {
    name: "PowderMonkey",
    description: "An agent orchestration harness for solo operators.",
    repo: "https://github.com/zmaril/powdermonkey",
    site: "https://firetheslopcannon.com",
    logo: "/logos/powdermonkey.png",
  },
  {
    name: "Straitjacket",
    description: "A fast, deterministic scanner for the slop LLMs produce.",
    repo: "https://github.com/zmaril/Straitjacket",
    site: "https://straitjacket.dev",
    logo: "/logos/straitjacket.png",
  },
  {
    name: "housekeeping",
    description: "Checks a GitHub repo is in good order, and helps fix it.",
    repo: "https://github.com/zmaril/housekeeping",
    logo: "/logos/housekeeping.svg",
  },
  {
    name: "fluessig",
    description:
      "entl's schema tool: describe a typed entity graph once, project it everywhere.",
    repo: "https://github.com/zmaril/fluessig",
    logo: "/logos/fluessig.svg",
  },
  {
    name: "disponent",
    description:
      "Dispatches work to coding agents — local tmux or remote (exe.dev) — and watches it run.",
    repo: "https://github.com/zmaril/disponent",
    logo: "/logos/disponent.png",
  },
  {
    name: "entl",
    description:
      "A repo's git history and forge activity as streaming data. Under active development.",
    repo: "https://github.com/zmaril/entl",
    site: "https://entl.dev",
    logo: "/logos/entl.png",
  },
  {
    name: "powderworks",
    description: "Housecaptain of the fleet, and the code for this website.",
    repo: "https://github.com/zmaril/powderworks",
    logo: "/logos/powderworks.png",
  },
];
