export const projects = [
  {
    id: "oee",
    number: "01",
    tone: "dark",
    category: "Dashboards",
    tag: "Power BI / KPI Monitoring",
    title: "OEE & Production Performance Dashboard",
    summary: "One reporting view for OEE, productivity, output and operational KPIs.",
    challenge: "Give production teams a clear daily view of performance, losses and priorities.",
    details: ["Defined KPI structure for OEE, output and productivity", "Designed drill-down views for faster loss identification", "Built a Power BI reporting flow for daily decisions"],
    impact: "Faster visibility of production losses and performance trends."
  },
  {
    id: "energy",
    number: "02",
    tone: "lime",
    category: "Dashboards",
    tag: "IoT / Sustainability",
    title: "Electricity Consumption & CO2 Dashboard",
    summary: "Energy monitoring for consumption, intensity, cost per piece and CO2 emissions.",
    challenge: "Connect energy data with production context so improvement opportunities are easier to find.",
    details: ["Organized consumption, intensity and cost-per-piece metrics", "Created monthly trend and comparison views", "Prepared data for Power BI and Excel analysis"],
    impact: "Clearer energy-use conversations across production and sustainability teams."
  },
  {
    id: "gas",
    number: "03",
    tone: "dark",
    category: "Dashboards",
    tag: "Energy / Production Monitoring",
    title: "Gas Consumption Dashboard",
    summary: "A clear view of gas usage, cost, targets, preheat time, and production output.",
    challenge: "Connect gas consumption with production context so teams can respond to gaps faster.",
    details: ["Mapped consumption, cost, and output measures into one dashboard", "Created daily monitoring views for usage and preheat time", "Designed target-versus-actual views for operational follow-up"],
    impact: "Faster visibility of gas-use performance and improvement opportunities."
  },
  {
    id: "monitoring",
    number: "04",
    tone: "pale",
    category: "Dashboards",
    tag: "Production Monitoring",
    title: "Daily Production Monitoring Dashboard",
    summary: "A practical dashboard for output, plan-versus-actual and line performance.",
    challenge: "Reduce the effort needed to turn shop-floor updates into a consistent daily report.",
    details: ["Mapped plan-versus-actual reporting needs", "Standardized daily performance indicators", "Designed a readable dashboard layout for production teams"],
    impact: "A more consistent view of daily production status."
  },
  {
    id: "etl",
    number: "05",
    tone: "pale",
    category: "Data workflow",
    tag: "Power Query / Data Pipeline",
    title: "Power Query ETL Workflow",
    summary: "Repeatable data preparation for multi-file production reporting.",
    challenge: "Replace manual copy-and-paste work with a refreshable preparation process.",
    details: ["Combined source files into a consistent structure", "Applied reusable cleaning and transformation steps", "Prepared reliable datasets for dashboard reporting"],
    impact: "Less manual preparation before analysis and reporting."
  },
  {
    id: "asakai",
    number: "06",
    tone: "dark",
    category: "Automation",
    tag: "Presentation Automation",
    title: "Asakai Report Automation",
    summary: "A streamlined approach to recurring operational presentation updates.",
    challenge: "Make routine presentation preparation faster while keeping the message consistent.",
    details: ["Structured recurring report inputs", "Automated repeatable content preparation", "Focused slides on key actions and progress"],
    impact: "More time for discussion and less time preparing routine updates."
  },
  {
    id: "vba",
    number: "07",
    tone: "lime",
    category: "Automation",
    tag: "Excel VBA / Reporting",
    title: "Excel VBA Reporting Automation",
    summary: "Automation for recurring spreadsheets, calculations and report-ready outputs.",
    challenge: "Reduce repetitive spreadsheet work while preserving clear, controlled reporting.",
    details: ["Automated repetitive reporting steps", "Standardized calculation and output formats", "Created easier-to-use workflows for report users"],
    impact: "A more reliable and efficient recurring reporting process."
  }
];

const asset = (path) => `${import.meta.env.BASE_URL}assets/icons/${path}`;

export const tools = [
  [asset("power-bi.svg"), "Power BI", "KPI dashboards"],
  [asset("excel.svg"), "Excel + VBA", "Automation & reporting"],
  [asset("automation.svg"), "Power Automate", "Workflow automation"],
  [asset("power-apps.svg"), "Power Apps", "Low-code applications"],
  [asset("power-query.svg"), "Power Query", "Data transformation"],
  [asset("data-modeling.svg"), "Data Modeling", "Database concepts"]
];
