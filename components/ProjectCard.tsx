import type { Project } from "@/data/portfolio";
import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  const tones = {
    Dashboard: "bg-brand text-white",
    Automation: "bg-accent text-ink",
  } as const;

  return (
    <article
      className={`flex min-h-[320px] flex-col border border-slate-200 p-6 ${tones[project.category]}`}
    >
      <div className="flex items-center justify-between text-xs font-extrabold tracking-[0.1em] uppercase">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>
      <h3 className="mt-10 text-2xl font-black tracking-[-0.05em]">{project.title}</h3>
      <p className="mt-4 text-sm leading-6 font-semibold opacity-90">{project.teaser}</p>
      <div className="mt-auto border-t border-current/30 pt-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.toolIcons.map((tool) => (
              <span
                key={tool.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 p-1.5"
                title={tool.label}
              >
                <Image
                  src={tool.src}
                  alt={tool.label}
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </span>
            ))}
          </div>
          <a
            href={`#case-study-${project.id}`}
            className="text-sm font-extrabold underline decoration-current/40 underline-offset-4 transition hover:decoration-current"
          >
            Read case study <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </article>
  );
}
