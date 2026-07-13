export const projects = [
  { id: "oee", number: "01", tone: "dark", tag: "Power BI / KPI Monitoring", title: "OEE & Production Performance Dashboard", summary: "Interactive reporting for OEE, productivity, production output and operational KPIs.", details: ["OEE, productivity and output", "Power BI and data modeling", "Faster loss identification"] },
  { id: "energy", number: "02", tone: "lime", tag: "IoT / Sustainability", title: "Electricity Consumption & CO2 Dashboard", summary: "Energy monitoring for consumption, intensity, cost per piece and CO2 emissions.", details: ["IoT energy monitoring", "Monthly trends", "Power BI and Excel"] },
  { id: "tps", number: "03", tone: "pale", tag: "TPS / Kaizen / Jidoka", title: "Manufacturing Process Improvement", summary: "Continuous improvement work that reduces waste and strengthens standardized work.", details: ["Kaizen and Jidoka", "PCS and Yamazumi", "Productivity improvement"] }
];
const asset = (path) => `${import.meta.env.BASE_URL}assets/icons/${path}`;

export const tools = [[asset("power-bi.svg"), "Power BI", "KPI dashboards"], [asset("excel.svg"), "Excel + VBA", "Automation & reporting"], [asset("automation.svg"), "Power Automate", "Workflow automation"], [asset("power-apps.svg"), "Power Apps", "Low-code applications"], [null, "Power Query", "Data transformation"], [null, "Data Modeling", "Database concepts"]];
