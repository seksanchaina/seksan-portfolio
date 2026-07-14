import type { Project } from "@/data/portfolio";

const labels = [
  ["Problem", "problem"],
  ["Solution", "solution"],
  ["Result", "measurement"],
  ["Tools", "technology"],
  ["Users", "users"],
] as const;

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article
      id={`case-study-${project.id}`}
      className="scroll-mt-28 border border-slate-200 bg-white p-6"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-extrabold tracking-[0.12em] text-slate-500 uppercase">
            Case study {project.number}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.05em]">{project.title}</h3>
        </div>
        <span className="text-brand rounded-full bg-blue-50 px-3 py-1 text-xs font-bold">
          {project.category}
        </span>
      </div>
      <dl className="mt-7 grid gap-x-8 gap-y-5 md:grid-cols-2">
        {labels.map(([label, key]) => (
          <div key={key}>
            <dt className="text-xs font-extrabold tracking-[0.1em] text-slate-500 uppercase">
              {label}
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              {key === "technology" ? project.technology.join(" / ") : project[key]}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
