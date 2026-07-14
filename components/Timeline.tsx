type TimelineItem = readonly [string, string, string];

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map(([period, title, company]) => (
        <article key={title} className="grid gap-2 py-5 md:grid-cols-[180px_1fr_1.2fr]">
          <p className="text-sm font-semibold text-slate-500">{period}</p>
          <h3 className="text-lg font-black tracking-[-0.035em]">{title}</h3>
          <p className="text-sm leading-6 text-slate-600">{company}</p>
        </article>
      ))}
    </div>
  );
}
