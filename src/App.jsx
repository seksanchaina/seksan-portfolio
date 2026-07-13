import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { projects, tools } from "./data/projects";
import "./contact.css";
import "./dashboard.css";
import "./project-filters.css";

const dashboardProjects = [
  {
    id: "electricity",
    label: "Electricity",
    title: "Electricity Consumption Dashboard",
    previews: [
      { id: "overview", number: "01", label: "Overview", title: "Monthly performance overview", image: `${import.meta.env.BASE_URL}assets/dashboards/consumption-dashboard-01.png`, alt: "Electricity Consumption Dashboard overview with consumption, cost, and CO2 metrics" },
      { id: "machine", number: "02", label: "Machines", title: "Machine energy performance", image: `${import.meta.env.BASE_URL}assets/dashboards/consumption-dashboard-02.png`, alt: "Electricity Consumption Dashboard with machine performance charts" },
      { id: "preheat", number: "04", label: "Preheat", title: "Preheat consumption monitoring", image: `${import.meta.env.BASE_URL}assets/dashboards/consumption-dashboard-04.png`, alt: "Electricity Consumption Dashboard with preheat comparison and monitoring charts" },
      { id: "daily", number: "05", label: "Daily detail", title: "Daily consumption analysis", image: `${import.meta.env.BASE_URL}assets/dashboards/consumption-dashboard-05.png`, alt: "Electricity Consumption Dashboard with daily consumption and shift analysis" },
    ],
  },
  {
    id: "gas",
    label: "Gas",
    title: "Gas Consumption Dashboard",
    previews: [
      { id: "overview", number: "01", label: "Overview", title: "Monthly gas performance overview", image: `${import.meta.env.BASE_URL}assets/dashboards/gas/gas-dashboard-01.png`, alt: "Gas Consumption Dashboard overview with consumption, cost, and productivity metrics" },
      { id: "daily", number: "02", label: "Daily usage", title: "Daily consumption and preheat monitoring", image: `${import.meta.env.BASE_URL}assets/dashboards/gas/gas-dashboard-02.png`, alt: "Gas Consumption Dashboard with daily gas usage and preheat monitoring" },
      { id: "analysis", number: "03", label: "Analysis", title: "Usage versus target analysis", image: `${import.meta.env.BASE_URL}assets/dashboards/gas/gas-dashboard-03.png`, alt: "Gas Consumption Dashboard with estimate, actual, and target analysis" },
      { id: "target", number: "04", label: "Targets", title: "Output and working-hour targets", image: `${import.meta.env.BASE_URL}assets/dashboards/gas/gas-dashboard-04.png`, alt: "Gas Consumption Dashboard with output and working-hour targets" },
    ],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeDashboardProject, setActiveDashboardProject] = useState(dashboardProjects[0]);
  const [activeDashboard, setActiveDashboard] = useState(dashboardProjects[0].previews[0]);
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

        <section className="dashboard section" id="dashboard">
          <div className="dashboard-heading">
            <div>
              <p className="eyebrow">03 / Dashboard gallery</p>
              <h2>Utilities data, made actionable.</h2>
            </div>
            <p>Static case-study previews of Electricity and Gas Consumption Dashboards, designed to make energy use, targets, and production performance easier to understand.</p>
          </div>
          <div className="dashboard-projects" aria-label="Select dashboard project">
            {dashboardProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={activeDashboardProject.id === project.id ? "active" : ""}
                onClick={() => { setActiveDashboardProject(project); setActiveDashboard(project.previews[0]); }}
                aria-pressed={activeDashboardProject.id === project.id}
              >
                {project.label} <span>Dashboard</span>
              </button>
            ))}
          </div>
          <div className="dashboard-gallery">
            <figure className="dashboard-stage">
              <img src={activeDashboard.image} alt={activeDashboard.alt} />
              <figcaption>{activeDashboardProject.title} / {activeDashboard.title}</figcaption>
            </figure>
            <div className="dashboard-controls" aria-label="Select dashboard preview">
              {activeDashboardProject.previews.map((preview) => (
                <button
                  key={preview.id}
                  type="button"
                  className={activeDashboard.id === preview.id ? "active" : ""}
                  onClick={() => setActiveDashboard(preview)}
                  aria-pressed={activeDashboard.id === preview.id}
                >
                  <span>{preview.number}</span>
                  <strong>{preview.label}</strong>
                </button>
              ))}
            </div>
          </div>
          <p className="dashboard-note">Static portfolio preview - no live company data connection.</p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">04 / Capabilities</p>
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
          <p className="eyebrow">05 / Experience</p>
          <div className="experience-list">
            <article><p>Oct 2024 - Present</p><h3>Production Officer</h3><span>AH BRAKE (Thailand) Co., Ltd. | Rayong</span></article>
            <article><p>Jun 2024 - Sep 2024</p><h3>TPS Officer</h3><span>Maruyasu Industries (Thailand) Co., Ltd. | Rayong</span></article>
            <article><p>2022 - 2024</p><h3>Production Control Officer</h3><span>DENSO TEN (Thailand) Co., Ltd. | Rayong</span></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">06 / Contact</p>
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
