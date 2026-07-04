export type Project = {
  name: string;
  description: string;
  repo: string;
  site?: string;
};

// The fleet — small, sharp tools, several refactored out of PowderMonkey.
export const projects: Project[] = [
  {
    name: "PowderMonkey",
    description: "An agent orchestration harness.",
    repo: "https://github.com/zmaril/powdermonkey",
    site: "https://firetheslopcannon.com",
  },
  {
    name: "Straitjacket",
    description: "A deterministic scanner for LLM slop.",
    repo: "https://github.com/zmaril/Straitjacket",
    site: "https://straitjacket.dev",
  },
  {
    name: "housekeeping",
    description: "Checks a GitHub repo is in good order.",
    repo: "https://github.com/zmaril/housekeeping",
  },
  {
    name: "entl",
    description: "A repo's git history as streaming data.",
    repo: "https://github.com/zmaril/entl",
    site: "https://entl.dev",
  },
  {
    name: "powderworks",
    description: "Housecaptain of the fleet, and the code for this website.",
    repo: "https://github.com/zmaril/powderworks",
  },
];
