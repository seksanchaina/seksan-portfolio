import { Button } from "@/components/Button";
import { KPICard } from "@/components/KPICard";
import { kpis } from "@/data/portfolio";

export function Hero() {
  const profilePhoto = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/seksan-profile.jpg`;

  return (
    <section id="home" className="overflow-hidden bg-[radial-gradient(circle_at_86%_10%,#fff4ac,transparent_25%)] px-5 pb-16 pt-16 sm:pt-24 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-600">Production Improvement &amp; Digitalization Professional</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.075em] text-ink sm:text-7xl lg:text-8xl"><span className="block">Turning data into</span><em className="block not-italic text-brand">operational impact.</em></h1>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-[minmax(220px,0.72fr)_1fr] lg:max-w-5xl">
          <figure className="relative m-0 max-w-[300px]"><img className="relative z-10 block w-full border-8 border-white object-cover shadow-[14px_14px_0_#f2c811]" src={profilePhoto} alt="Portrait of Seksan Chaina" /></figure>
          <div className="border-l-4 border-accent pl-5"><p className="text-3xl font-black tracking-[-0.06em] text-brand">Seksan Chaina</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Rayong, Thailand</p><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">I improve production processes by turning operational data into clearer, faster daily decisions.</p></div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3"><Button href="#solutions">View solutions <span aria-hidden="true">↓</span></Button><Button href="#contact" variant="secondary">Request resume <span aria-hidden="true">↗</span></Button></div>
        <div className="mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">{kpis.map(([value, label]) => <KPICard key={label} value={value} label={label} />)}</div>
      </div>
    </section>
  );
}
