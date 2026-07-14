import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="mb-10 grid gap-5 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-5xl">{title}</h2></div>{children && <div className="max-w-md text-base leading-7 text-slate-600">{children}</div>}</div>;
}
