import { projects } from "./projects.ts";

// Backgrounds live in public/bg/ as bg1.webp … bgN.webp. One is picked at
// random on each page load and fills the right-hand panel (a banner on mobile).
const BG_COUNT = 10;
const bg = `/bg/bg${Math.floor(Math.random() * BG_COUNT) + 1}.webp`;

export function App() {
  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      {/* Left third: the writing. Scrolls on its own if it runs long. */}
      <aside className="order-2 flex min-h-0 w-full flex-1 flex-col overflow-y-auto bg-paper text-neutral-900 md:order-1 md:w-1/3 md:min-w-[21rem] md:max-w-[32rem] md:flex-none md:shadow-[1px_0_0_rgba(0,0,0,0.1)]">
        <div className="flex min-h-full flex-col px-7 py-9 sm:px-9 sm:py-11">
          <header>
            <h1 className="text-2xl font-semibold leading-tight tracking-tight">
              The Powderworks Agentic Code Consortium
            </h1>
            <div className="mt-3 h-0.5 w-16 rounded bg-flame" />
          </header>

          <p className="mt-6 text-[0.95rem] leading-relaxed text-neutral-700">
            Powderworks is a burgeoning collection of software that came out of
            trying to build{" "}
            <a
              href="https://github.com/zmaril/powdermonkey"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-900 underline decoration-flame/60 underline-offset-4 hover:decoration-flame"
            >
              PowderMonkey
            </a>
            , an agent orchestration harness for solo operators. The pieces are
            purposefully built to work on their own, and to play nice together.
            As a whole, Powderworks is a software factory for building agentic
            applications.
          </p>

          <p className="mt-4 text-[0.95rem] leading-relaxed text-neutral-700">
            <a
              href="https://twitter.com/ZackMaril"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-900 underline decoration-flame/60 underline-offset-4 hover:decoration-flame"
            >
              Zack
            </a>{" "}
            hopes that you enjoy the software, and invites you to the{" "}
            <a
              href="https://discord.com/invite/5G6KvdJffj"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-900 underline decoration-flame/60 underline-offset-4 hover:decoration-flame"
            >
              Powderworks Discord
            </a>{" "}
            to discuss these tools.
          </p>

          <ul className="mt-8 space-y-5">
            {projects.map((project) => (
              <li key={project.name} className="flex gap-3">
                <img
                  src={project.logo}
                  alt=""
                  aria-hidden
                  className="mt-0.5 h-9 w-9 shrink-0 object-contain"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">
                      {project.name}
                    </span>
                    {project.parked && (
                      <span className="rounded-sm bg-neutral-200 px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-neutral-500">
                        parked
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-snug text-neutral-600">
                    {project.description}
                  </p>
                  <p className="mt-1 text-xs">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-500 underline underline-offset-4 hover:text-flame"
                    >
                      GitHub
                    </a>
                    {project.site && (
                      <>
                        <span className="text-neutral-300"> · </span>
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-500 underline underline-offset-4 hover:text-flame"
                        >
                          Site
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <footer className="mt-auto pt-9 text-xs text-neutral-400">
            powderworks.dev — MIT licensed
          </footer>
        </div>
      </aside>

      {/* Right two-thirds: the fleet's artwork, and nothing on top of it.
          On mobile it becomes a banner above the text. */}
      <div
        aria-hidden
        className="order-1 h-44 w-full shrink-0 bg-neutral-200 bg-cover bg-center sm:h-60 md:order-2 md:h-full md:flex-1"
        style={{ backgroundImage: `url("${bg}")` }}
      />
    </div>
  );
}
