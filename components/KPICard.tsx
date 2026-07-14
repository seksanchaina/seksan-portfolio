type KPIIconName = "clock" | "capture" | "refresh" | "energy";

type KPICardProps = {
  title: string;
  value: string;
  description: string;
  icon: KPIIconName;
};

function KPIIcon({ name }: { name: KPIIconName }) {
  const paths = {
    clock: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 8v4l2.75 1.75" />
      </>
    ),
    capture: (
      <>
        <rect x="6" y="5" width="12" height="14" rx="1.5" />
        <path d="M9 9h6M9 12h6M9 15h3" />
      </>
    ),
    refresh: (
      <>
        <path d="M18 9a6.5 6.5 0 1 0 .2 5.6" />
        <path d="M18 5v4h-4" />
      </>
    ),
    energy: <path d="M13.5 3 6.5 13h4l-1 8 7-10h-4z" />,
  };

  return (
    <span className="bg-accent/70 text-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="stroke-linecap-round stroke-linejoin-round h-5 w-5 fill-none stroke-current stroke-[1.8]"
      >
        {paths[name]}
      </svg>
    </span>
  );
}

export function KPICard({ title, value, description, icon }: KPICardProps) {
  return (
    <article className="border-brand/80 border-t-2 bg-white/70 px-4 pt-3 pb-4 shadow-[0_10px_24px_-22px_rgba(15,25,48,0.65)]">
      <p className="text-brand text-[10px] leading-4 font-extrabold tracking-[0.08em] uppercase">
        {title}
      </p>
      <div className="flex items-center justify-between gap-3">
        <strong className="text-ink mt-2 text-xl tracking-tight">{value}</strong>
        <KPIIcon name={icon} />
      </div>
      <span className="mt-2 block text-xs font-semibold text-slate-500">{description}</span>
    </article>
  );
}
