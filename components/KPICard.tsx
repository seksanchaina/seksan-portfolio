type KPICardProps = { value: string; label: string };

export function KPICard({ value, label }: KPICardProps) {
  return (
    <article className="border-brand border-t-2 pt-3">
      <strong className="text-ink block text-xl tracking-tight">{value}</strong>
      <span className="mt-1 block text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">
        {label}
      </span>
    </article>
  );
}
