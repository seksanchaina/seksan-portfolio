import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { projects, tools } from "./data/projects";
import "./contact.css";
import "./project-filters.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const projectFilters = ["All", "Dashboards", "Data workflow", "Automation"];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      <main>
        <Hero />

        <section className="section" id="about">
          <p className="eyebrow">01 / About</p>
          <div className="two-column">
            <h2>From the shop floor to the dashboard.</h2>
            <div>
              <p>I work at the intersection of production control, continuous improvement and data visualization.</p>
              <p>Currently, I support production operations at AH BRAKE (Thailand), developing dashboards for OEE, productivity and energy consumption.</p>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <p className="eyebrow">02 / Solutions</p>
          <h2>Projects that connect data with daily decisions.</h2>
          <div className="project-filters" aria-label="Filter solutions by type">
            {projectFilters.map((filter) => (
              <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />)}
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">03 / Capabilities</p>
          <div className="skills-layout">
            <h2>Tools and methods I use to improve performance.</h2>
            <div className="tool-grid">
              {tools.map(([icon, name, description]) => (
                <article className="tool-card" key={name}>
                  {icon ? <img src={icon} alt="" /> : <span className="tool-mark">{name === "Power Query" ? "PQ" : "DB"}</span>}
                  <div><strong>{name}</strong><span>{description}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section">
          <p className="eyebrow">04 / Experience</p>
          <div className="experience-list">
            <article><p>Oct 2024 - Present</p><h3>Production Officer</h3><span>AH BRAKE (Thailand) Co., Ltd. | Rayong</span></article>
            <article><p>Jun 2024 - Sep 2024</p><h3>TPS Officer</h3><span>Maruyasu Industries (Thailand) Co., Ltd. | Rayong</span></article>
            <article><p>2022 - 2024</p><h3>Production Control Officer</h3><span>DENSO TEN (Thailand) Co., Ltd. | Rayong</span></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">05 / Contact</p>
          <h2>Let's improve the next process together.</h2>
          <div className="contact-links">
            <a className="contact-email" href="mailto:seksan.chaina@gmail.com">Email me <span aria-hidden="true">↗</span></a>
            <a className="contact-github" href="https://github.com/seksanchaina/seksan-portfolio" target="_blank" rel="noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <p className="contact-note">Based in Rayong, Thailand</p>
        </section>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Footer />
    </>
  );
}
