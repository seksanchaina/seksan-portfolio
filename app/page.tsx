import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CaseStudy } from "@/components/CaseStudy";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { projects, skills, timeline } from "@/data/portfolio";

const section = "px-5 py-20 sm:py-24 lg:px-8";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className={`${section} border-t border-slate-200`}><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-20"><SectionHeading eyebrow="01 / About" title="From the shop floor to the dashboard." /><div className="space-y-5 text-lg leading-8 text-slate-600"><p>I work at the intersection of production control, continuous improvement and digital tools.</p><p>My focus is to make operational information clearer, turn recurring work into reliable workflows, and help teams act on what the data shows.</p></div></div></section>
        <section id="solutions" className={`${section} bg-surface`}><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="02 / Solutions" title="Digital solutions connected to daily manufacturing decisions.">Each solution is structured around the business problem, the working solution, the technology used, and the measurement that matters.</SectionHeading><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></div></section>
        <section id="case-studies" className={`${section} border-t border-slate-200`}><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="03 / Case studies" title="Energy data made visible for action.">Static portfolio previews are used here. They demonstrate dashboard design without a live connection to company reporting data.</SectionHeading><Gallery /><div className="mt-14 grid gap-5">{projects.map((project) => <CaseStudy key={project.id} project={project} />)}</div></div></section>
        <section id="skills" className={`${section} bg-surface`}><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="04 / Technology" title="Tools that support practical improvement." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{skills.map(([icon, name, description]) => <article key={name} className="flex items-center gap-4 border border-slate-200 bg-white p-4"><img className="h-10 w-10 object-contain" src={icon} alt="" /><div><h3 className="font-black tracking-[-0.03em]">{name}</h3><p className="mt-1 text-sm text-slate-500">{description}</p></div></article>)}</div></div></section>
        <section id="experience" className={`${section} border-t border-slate-200`}><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="05 / Experience" title="Manufacturing experience grounded in improvement work." /><Timeline items={timeline} /></div></section>
        <section id="blog" className={`${section} bg-surface`}><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="06 / Blog" title="Notes from practical digital improvement.">Short field notes on making reporting clearer, automation reliable, and data useful for daily production decisions.</SectionHeading><article className="max-w-2xl border border-slate-200 bg-white p-6"><p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand">Coming next</p><h3 className="mt-3 text-2xl font-black tracking-[-0.05em]">What makes a production dashboard useful on the shop floor?</h3><p className="mt-4 leading-7 text-slate-600">A practical note on agreed KPI definitions, visible targets, and follow-up routines.</p></article></div></section>
        <section id="resume" className={`${section} border-t border-slate-200`}><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="07 / Resume" title="A production-improvement profile, available on request.">The public portfolio stays focused on verified project work. Contact me for a current resume and a fuller employment history.</SectionHeading><a className="inline-flex rounded-full border border-brand px-5 py-3 text-sm font-extrabold text-brand transition hover:bg-blue-50" href="mailto:seksan.chaina@gmail.com?subject=Resume%20request">Request resume by email ↗</a></div></section>
        <section id="contact" className={`${section} bg-accent`}><div className="mx-auto max-w-7xl"><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-700">08 / Contact</p><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.06em] sm:text-6xl">Let&apos;s improve the next process together.</h2><div className="mt-8 flex flex-wrap gap-3"><a className="rounded-full bg-brand px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#112766]" href="mailto:seksan.chaina@gmail.com">Email Seksan ↗</a><a className="rounded-full border border-brand px-5 py-3 text-sm font-extrabold text-brand transition hover:bg-amber-200" href="https://github.com/seksanchaina/seksan-portfolio" target="_blank" rel="noreferrer">View source on GitHub ↗</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
