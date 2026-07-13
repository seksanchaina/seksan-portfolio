const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close" : "Menu";
});
document.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menu";
}));
document.querySelector("#year").textContent = new Date().getFullYear();

const projectData = {
  oee: { tag: "Power BI / KPI monitoring", title: "OEE & Production Performance Dashboard", description: "A single view of operational performance that helps teams monitor OEE, productivity, output and KPI trends without consolidating reports manually.", details: [["Focus", "OEE, productivity and output"], ["Outcome", "Faster trend and loss identification"], ["Tools", "Power BI, data modeling"], ["Users", "Production management"]] },
  energy: { tag: "IoT / Sustainability", title: "Electricity Consumption & CO2 Dashboard", description: "A monitoring dashboard that transforms IoT energy readings into a clear monthly view of consumption, intensity, cost per piece and emissions.", details: [["Focus", "Energy cost and CO2"], ["Data", "IoT monitoring data"], ["Outcome", "Greater energy visibility"], ["Tools", "Power BI, Excel"]] },
  tps: { tag: "TPS / Kaizen / Jidoka", title: "Manufacturing Process Improvement", description: "A continuous-improvement approach that applies TPS methods to reduce waste, increase productivity and build more reliable standardized work.", details: [["Focus", "Waste and productivity"], ["Methods", "Kaizen, Jidoka, Yamazumi"], ["Outcome", "Stronger process standards"], ["Tools", "PCS, KPI reporting"]] },
};
const modal = document.querySelector("#project-modal");
document.querySelectorAll(".project-button").forEach((button) => button.addEventListener("click", () => {
  const project = projectData[button.dataset.project];
  document.querySelector("#modal-tag").textContent = project.tag;
  document.querySelector("#modal-title").textContent = project.title;
  document.querySelector("#modal-description").textContent = project.description;
  document.querySelector("#modal-details").innerHTML = project.details.map(([label, value]) => `<div><strong>${label}</strong>${value}</div>`).join("");
  modal.showModal();
}));
document.querySelector("#modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => { if (event.target === modal) modal.close(); });
const toast = document.querySelector("#toast");
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => link.addEventListener("click", () => { toast.classList.add("show"); window.setTimeout(() => toast.classList.remove("show"), 3000); }));
