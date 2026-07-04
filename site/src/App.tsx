import { projects } from "./projects.ts";

export function App() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16 text-black">
      <h1 className="text-2xl font-semibold tracking-tight">
        The Powderworks Agentic Code Consortium
      </h1>

      <p className="mt-6 leading-relaxed">
        Powderworks is a burgeoning collection of software that came out of
        trying to build{" "}
        <a
          href="https://github.com/zmaril/powdermonkey"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          PowderMonkey
        </a>
        , an agent orchestration harness. The pieces are purposefully built to
        work independently, as well as play nice together. As a whole,
        Powderworks is a software factory for building agentic applications.
      </p>

      <p className="mt-4 leading-relaxed">
        <a
          href="https://twitter.com/ZackMaril"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Zack
        </a>{" "}
        hopes that you enjoy the software, and you are invited to the{" "}
        <a
          href="https://discord.com/invite/5G6KvdJffj"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Powderworks discord
        </a>{" "}
        to discuss these tools.
      </p>

      <ul className="mt-10 space-y-4">
        {projects.map((project) => (
          <li key={project.name}>
            <div className="font-semibold">{project.name}</div>
            <p className="text-sm">{project.description}</p>
            <p className="text-sm">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </a>
              {project.site && (
                <>
                  {" · "}
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    Site
                  </a>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
