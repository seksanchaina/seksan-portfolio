import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CaseStudy } from "@/components/CaseStudy";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { projects, sharedFoundation, skills, timeline } from "@/data/portfolio";
import Image from "next/image";

const section = "px-5 py-20 sm:py-24 lg:px-8";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className={`${section} border-t border-slate-200`}>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-brand text-xs font-extrabold tracking-[0.14em] uppercase">
                01 / About
              </p>
              <h2 className="text-ink mt-4 max-w-xl text-4xl font-black tracking-[-0.06em] sm:text-6xl">
                Good decisions start before the dashboard.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="max-w-xl text-xl leading-8 text-slate-700">
                I turn production and energy data into practical reporting systems that make
                reporting clearer, automation more reliable, and daily decisions faster.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Capture", "Make daily data entry structured and reliable."],
                  ["02", "Connect", "Link production, quality and energy information."],
                  ["03", "Act", "Turn trends into a clear follow-up routine."],
                ].map(([number, title, description]) => (
                  <article key={title} className="border-brand border-t-2 pt-3">
                    <p className="text-brand text-xs font-extrabold tracking-[0.1em]">{number}</p>
                    <h3 className="mt-2 font-black tracking-[-0.03em]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="solutions" className={`${section} bg-surface`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="02 / Solutions"
              title="Selected systems for daily manufacturing decisions."
            >
              A quick view of the problem each system improves and the outcome it delivers.
            </SectionHeading>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section id="case-studies" className={`${section} border-t border-slate-200`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="03 / Case studies"
              title="The work behind each reporting improvement."
            >
              Static portfolio previews are used here. They demonstrate dashboard design without a
              live connection to company reporting data.
            </SectionHeading>
            <Gallery />
            <div className="mt-14 grid gap-5">
              {projects.map((project) => (
                <CaseStudy key={project.id} project={project} />
              ))}
            </div>
            <aside className="mt-5 border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-xs font-extrabold tracking-[0.12em] text-amber-300 uppercase">
                Shared foundation
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.05em]">
                {sharedFoundation.title}
              </h3>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
                {sharedFoundation.description}
              </p>
              <p className="mt-4 text-xs font-bold tracking-[0.08em] text-slate-400 uppercase">
                {sharedFoundation.technology.join(" / ")}
              </p>
            </aside>
          </div>
        </section>
        <section id="skills" className={`${section} bg-surface`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="04 / Technology"
              title="Tools that support practical improvement."
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(([icon, name, description]) => (
                <article
                  key={name}
                  className="flex items-center gap-4 border border-slate-200 bg-white p-4"
                >
                  <Image
                    className="h-10 w-10 object-contain"
                    src={icon}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <h3 className="font-black tracking-[-0.03em]">{name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className={`${section} border-t border-slate-200`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="05 / Experience"
              title="6+ years in manufacturing, grounded in improvement work."
            />
            <Timeline items={timeline} />
          </div>
        </section>
        <section id="contact" className={`${section} bg-accent`}>
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-extrabold tracking-[0.14em] text-slate-700 uppercase">
              06 / Contact
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.06em] sm:text-6xl">
              Let&apos;s improve the next process together.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="bg-brand rounded-full px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#112766]"
                href="mailto:seksan.chaina@gmail.com"
              >
                Email Seksan ↗
              </a>
              <a
                className="border-brand text-brand rounded-full border px-5 py-3 text-sm font-extrabold transition hover:bg-amber-200"
                href="https://github.com/seksanchaina/seksan-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                View source on GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
