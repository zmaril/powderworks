import { useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { projects } from "./projects.ts";

// Backgrounds live in public/bg/ as bg1.webp … bgN.webp. One is picked at
// random on each page load.
const BG_COUNT = 9;
const bg = `/bg/bg${Math.floor(Math.random() * BG_COUNT) + 1}.webp`;

type Pos = { x: number; y: number };

export function App() {
  const cardRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef<Pos | null>(null);
  const [pos, setPos] = useState<Pos | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  const clamp = (x: number, y: number): Pos => {
    const el = cardRef.current;
    if (!el) return { x, y };
    const { width, height } = el.getBoundingClientRect();
    const maxX = Math.max(0, window.innerWidth - width);
    const maxY = Math.max(0, window.innerHeight - height);
    return {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };
  };

  // Initial placement: random x (to show off different parts of the
  // background), vertically centered — clamped so nothing clips off-page.
  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    const maxX = Math.max(0, window.innerWidth - width);
    const maxY = Math.max(0, window.innerHeight - height);
    setPos({ x: Math.random() * maxX, y: maxY / 2 });
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    // Let links and the caret button keep working.
    if ((e.target as HTMLElement).closest("a, button")) return;
    if (!pos) return;
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };

    const move = (ev: globalThis.PointerEvent) => {
      const off = dragOffset.current;
      if (!off) return;
      setPos(clamp(ev.clientX - off.x, ev.clientY - off.y));
    };
    const up = () => {
      dragOffset.current = null;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${bg}")` }}
      />

      <div
        ref={cardRef}
        onPointerDown={onPointerDown}
        style={{
          left: pos?.x ?? 0,
          top: pos?.y ?? 0,
          visibility: pos ? "visible" : "hidden",
        }}
        className={`absolute cursor-move touch-none select-none rounded-lg bg-white/85 text-black shadow-sm ring-1 ring-black/10 backdrop-blur-sm ${
          collapsed ? "w-auto p-3" : "w-[min(36rem,calc(100vw-2rem))] p-6"
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? "Expand" : "Collapse"}
            aria-expanded={!collapsed}
            className="cursor-pointer text-black/60 transition-colors hover:text-black"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 transition-transform"
              style={{ transform: collapsed ? "rotate(-90deg)" : "none" }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {!collapsed && (
            <h1 className="text-xl font-semibold tracking-tight">
              The Powderworks Agentic Code Consortium
            </h1>
          )}
        </div>

        {!collapsed && (
          <div className="mt-4">
            <p className="text-sm leading-relaxed">
              Powderworks is a burgeoning collection of software that came out
              of trying to build{" "}
              <a
                href="https://github.com/zmaril/powdermonkey"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                PowderMonkey
              </a>
              , an agent orchestration harness. The pieces are purposefully
              built to work independently, as well as play nice together. As a
              whole, Powderworks is a software factory for building agentic
              applications.{" "}
              <a
                href="https://twitter.com/ZackMaril"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Zack
              </a>{" "}
              hopes that you enjoy the software, and invites you to the{" "}
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

            <ul className="mt-6 space-y-3">
              {projects.map((project) => (
                <li key={project.name} className="flex gap-3">
                  <img
                    src={project.logo}
                    alt=""
                    aria-hidden
                    className="mt-0.5 h-10 w-10 shrink-0 rounded-md bg-white object-contain ring-1 ring-black/10"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">{project.name}</div>
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
