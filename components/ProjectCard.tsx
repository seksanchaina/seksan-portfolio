import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const tones = { Dashboard: "bg-brand text-white", Automation: "bg-accent text-ink", Workflow: "bg-white text-ink" } as const;

  return (
    <article className={`flex min-h-[390px] flex-col border border-slate-200 p-6 ${tones[project.category]}`}>
      <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-[0.1em]"><span>{project.number}</span><span>{project.category}</span></div>
      <h3 className="mt-12 text-2xl font-black tracking-[-0.05em]">{project.title}</h3>
      <p className="mt-4 text-sm leading-6 opacity-80">{project.solution}</p>
      <div className="mt-auto border-t border-current/30 pt-4"><p className="text-xs font-bold uppercase tracking-[0.08em] opacity-70">Measured through</p><p className="mt-2 text-sm font-semibold leading-6">{project.measurement}</p></div>
    </article>
  );
}
