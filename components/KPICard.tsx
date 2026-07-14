type KPICardProps = { value: string; label: string };

export function KPICard({ value, label }: KPICardProps) {
  return <article className="border-t-2 border-brand pt-3"><strong className="block text-xl tracking-tight text-ink">{value}</strong><span className="mt-1 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{label}</span></article>;
}
