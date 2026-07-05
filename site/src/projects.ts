export type Project = {
  name: string;
  description: string;
  repo: string;
  site?: string;
  logo: string;
};

// The fleet — small, sharp tools, several refactored out of PowderMonkey.
// Logos are gathered from each repo's `.housekeeping.toml` `logo` field.
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
    description: "A deterministic scanner for LLM slop.",
    repo: "https://github.com/zmaril/Straitjacket",
    site: "https://straitjacket.dev",
    logo: "/logos/straitjacket.png",
  },
  {
    name: "housekeeping",
    description: "Checks a GitHub repo is in good order.",
    repo: "https://github.com/zmaril/housekeeping",
    logo: "/logos/housekeeping.svg",
  },
  {
    name: "entl",
    description: "A repo's git history as streaming data.",
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
