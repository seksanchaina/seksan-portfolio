export type Project = {
  id: string;
  category: "Dashboard" | "Automation" | "Workflow";
  number: string;
  title: string;
  problem: string;
  analysis: string;
  rootCause: string;
  solution: string;
  architecture: string;
  technology: string[];
  measurement: string;
  lessons: string;
};

export type DashboardPreview = {
  id: string;
  label: string;
  title: string;
  image: string;
  alt: string;
};

export type DashboardProject = {
  id: string;
  label: string;
  title: string;
  previews: DashboardPreview[];
};

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/${path}`;

export const navigation = [
  ["Solutions", "#solutions"],
  ["Case studies", "#case-studies"],
  ["Blog", "#blog"],
  ["About", "#about"],
  ["Resume", "#resume"],
  ["Contact", "#contact"],
] as const;

export const kpis = [
  ["10+", "Solutions"],
  ["5 years", "Manufacturing"],
  ["4 hr → 10 min", "Report-time target"],
  ["3%", "Energy-saving focus"],
] as const;

export const projects: Project[] = [
  {
    id: "oee",
    category: "Dashboard",
    number: "01",
    title: "OEE & Production Performance",
    problem: "Production signals were distributed across manual reports and daily follow-up took too long.",
    analysis: "Mapped OEE, output, productivity, and loss signals into a consistent review rhythm.",
    rootCause: "Operational data was fragmented and not structured for fast line-level follow-up.",
    solution: "A KPI view for OEE, productivity, output and loss trends that supports daily decisions.",
    architecture: "Production data → transformation → KPI model → Power BI decision view.",
    technology: ["Power BI", "Data modeling", "Excel"],
    measurement: "Measured through daily OEE, output and productivity visibility.",
    lessons: "A useful dashboard starts with agreed definitions and a clear daily decision routine.",
  },
  {
    id: "electricity",
    category: "Dashboard",
    number: "02",
    title: "Electricity Consumption & CO2",
    problem: "Energy consumption, cost per piece and emissions needed production context.",
    analysis: "Connected energy intensity and cost trends with output and monthly targets.",
    rootCause: "Energy information was reviewed separately from production drivers.",
    solution: "A dashboard that connects consumption, intensity, cost and CO2 with operational trends.",
    architecture: "Energy readings + production output → Power Query → model → Power BI dashboard.",
    technology: ["Power BI", "Power Query", "Excel"],
    measurement: "Measured through kWh per 1K pcs, cost per piece and CO2 indicators.",
    lessons: "Energy improvement discussions become clearer when intensity is reviewed alongside output.",
  },
  {
    id: "gas",
    category: "Dashboard",
    number: "03",
    title: "Gas Consumption Dashboard",
    problem: "Gas usage needed to be reviewed against output, preheat time and targets.",
    analysis: "Organized daily consumption, preheat, cost, and output into one operational view.",
    rootCause: "Gas metrics did not have a shared view for comparing actual usage with targets.",
    solution: "A practical view of consumption, gas cost, production output and target performance.",
    architecture: "Gas usage + production records → data model → target comparison dashboard.",
    technology: ["Power BI", "Data modeling", "Excel"],
    measurement: "Measured through gas per 10K pcs, usage, cost and output performance.",
    lessons: "Target comparisons are most actionable when usage and working conditions are visible together.",
  },
  {
    id: "etl",
    category: "Workflow",
    number: "04",
    title: "Power Query Reporting Workflow",
    problem: "Multi-file production reporting relied on repetitive copy-and-paste preparation.",
    analysis: "Reviewed source-file differences and standardized the common transformation steps.",
    rootCause: "The reporting flow had no reusable preparation layer between raw files and reports.",
    solution: "A reusable refresh workflow for cleaning, combining and preparing reporting data.",
    architecture: "Source files → Power Query transformations → controlled reporting dataset.",
    technology: ["Power Query", "Excel", "SharePoint"],
    measurement: "Supports the 4 hr to 10 min report-time target.",
    lessons: "Reliable automation comes from designing repeatable data rules before building visuals.",
  },
  {
    id: "vba",
    category: "Automation",
    number: "05",
    title: "Excel VBA Report Automation",
    problem: "Recurring spreadsheet calculations and report outputs created avoidable manual work.",
    analysis: "Identified repeated calculations, output formats, and review steps suitable for automation.",
    rootCause: "The routine depended on manual execution of the same spreadsheet sequence.",
    solution: "Standardized, repeatable automation for calculations and report-ready outputs.",
    architecture: "Structured workbook → VBA routine → controlled calculation and output steps.",
    technology: ["Excel VBA", "Power Query", "Git"],
    measurement: "Measured through fewer manual reporting steps and controlled output formats.",
    lessons: "Small, well-defined automation can improve reliability before a larger system is needed.",
  },
];

export const timeline = [
  ["2024 – present", "Production Officer", "AH BRAKE (Thailand) Co., Ltd. · Rayong"],
  ["2024", "TPS Officer", "Maruyasu Industries (Thailand) Co., Ltd. · Rayong"],
  ["2022 – 2024", "Production Control Officer", "DENSO TEN (Thailand) Co., Ltd. · Rayong"],
] as const;

export const skills = [
  [asset("icons/power-bi.svg"), "Power BI", "Business dashboards"],
  [asset("icons/excel.svg"), "Excel + VBA", "Report automation"],
  [asset("icons/power-automate.png"), "Power Automate", "Workflow design"],
  [asset("icons/power-apps.png"), "Power Apps", "Low-code applications"],
  [asset("icons/power-query.svg"), "Power Query", "Data transformation"],
  [asset("icons/data-modeling.svg"), "Data Modeling", "Reliable relationships"],
] as const;

export const dashboardProjects: DashboardProject[] = [
  {
    id: "electricity",
    label: "Electricity",
    title: "Electricity Consumption Dashboard",
    previews: [
      { id: "overview", label: "Overview", title: "Monthly performance overview", image: asset("dashboards/consumption-dashboard-01.png"), alt: "Electricity dashboard overview" },
      { id: "machine", label: "Machines", title: "Machine energy performance", image: asset("dashboards/consumption-dashboard-02.png"), alt: "Electricity dashboard machine performance" },
      { id: "preheat", label: "Preheat", title: "Preheat consumption monitoring", image: asset("dashboards/consumption-dashboard-04.png"), alt: "Electricity dashboard preheat monitoring" },
      { id: "daily", label: "Daily detail", title: "Daily consumption analysis", image: asset("dashboards/consumption-dashboard-05.png"), alt: "Electricity dashboard daily analysis" },
    ],
  },
  {
    id: "gas",
    label: "Gas",
    title: "Gas Consumption Dashboard",
    previews: [
      { id: "overview", label: "Overview", title: "Monthly gas performance", image: asset("dashboards/gas/gas-dashboard-01.png"), alt: "Gas dashboard overview" },
      { id: "daily", label: "Daily usage", title: "Consumption and preheat", image: asset("dashboards/gas/gas-dashboard-02.png"), alt: "Gas dashboard daily usage" },
      { id: "analysis", label: "Analysis", title: "Usage versus target", image: asset("dashboards/gas/gas-dashboard-03.png"), alt: "Gas dashboard analysis" },
      { id: "targets", label: "Targets", title: "Output and working hours", image: asset("dashboards/gas/gas-dashboard-04.png"), alt: "Gas dashboard targets" },
    ],
  },
];
