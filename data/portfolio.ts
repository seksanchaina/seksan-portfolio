export type Project = {
  id: string;
  category: "Dashboard" | "Automation";
  number: string;
  title: string;
  teaser: string;
  problem: string;
  solution: string;
  technology: string[];
  toolIcons: { src: string; label: string }[];
  measurement: string;
  users: string;
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

export const sharedFoundation = {
  title: "Manufacturing Reporting Automation Framework",
  description:
    "A shared Excel-based foundation used across the reporting solutions. VBA validates required, incomplete, and invalid entries before writing process-level records to central Data Tables. Power Query and the Data Model then prepare and connect data for Daily/Monthly Reports and Power BI dashboards.",
  technology: ["Excel", "VBA", "Power Query", "Data Model", "Power BI"],
};

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/${path}`;

export const navigation = [
  ["Solutions", "#solutions"],
  ["Case studies", "#case-studies"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export const kpis = [
  ["Asakai report preparation", "↓ 83%", "time saved", "clock"],
  ["Daily data entry", "↓ 80%", "time saved", "capture"],
  ["Monthly reporting", "Only 1 Click", "from 4–6 hr manual work", "refresh"],
  ["Electricity usage", "↓ 5%", "reduced through daily tracking", "energy"],
] as const;

export const projects: Project[] = [
  {
    id: "asakai",
    category: "Automation",
    number: "01",
    title: "Asakai Daily Report Automation",
    teaser: "Daily report preparation reduced from about 30 minutes to about 5 minutes.",
    problem:
      "Preparing the daily Asakai presentation required manual data collection and calculations for productivity, plan versus actual, achievement, and daily and accumulated NG.",
    solution:
      "Designed a monthly Excel Online template with automated calculations and linked it to a PowerPoint Online template on SharePoint, so report elements update on refresh.",
    technology: ["Excel Online", "Excel formulas", "SharePoint / OneDrive", "PowerPoint Online"],
    toolIcons: [
      { src: asset("icons/excel.png"), label: "Excel Online" },
      { src: asset("icons/powerpoint.png"), label: "PowerPoint Online" },
    ],
    measurement:
      "Preparation time reduced from about 30 minutes to about 5 minutes per day (about 83%), with a standardized Asakai reporting format.",
    users: "Members of the Asakai meeting",
  },
  {
    id: "oee",
    category: "Dashboard",
    number: "02",
    title: "Production Performance & OEE Reporting System",
    teaser: "Daily data entry reduced from about 2.5 hours to 30 minutes.",
    problem:
      "Production data was spread across about five files with 7-10 sheets each, requiring about 2 hours 30 minutes of manual entry per day. No daily report existed, and monthly summaries took 4-6 hours.",
    solution:
      "Standardized data entry in a five-sheet Excel workbook. VBA validates entries and writes process-level records to central Data Tables, with Power Query and a Data Model feeding a Power BI daily report.",
    technology: ["Excel", "VBA", "Power Query", "Data Model", "Power BI"],
    toolIcons: [
      { src: asset("icons/excel.png"), label: "Excel and VBA" },
      { src: asset("icons/power-query.svg"), label: "Power Query" },
      { src: asset("icons/power-bi.svg"), label: "Power BI" },
    ],
    measurement:
      "Daily data entry reduced from about 2.5 hours to 30 minutes; monthly reporting reduced from 4-6 hours to a refresh taking under 1 minute. Enabled daily visibility of OEE, output, productivity, defect rate, defect cost, and downtime.",
    users: "Managers and Supervisors",
  },
  {
    id: "electricity",
    category: "Dashboard",
    number: "03",
    title: "Electricity Consumption & CO2 Dashboard",
    teaser:
      "IoT data preparation reduced from about 2 hours to 1 minute; electricity usage reduced 5%.",
    problem:
      "Reporting relied on an Excel template summarized only at month-end. Existing IoT data exports and the production check sheet were disconnected, requiring about 2 hours of data preparation and 4 hours for the monthly summary.",
    solution:
      "Redesigned the production check sheet to connect with existing IoT data exports. Excel and VBA capture process data into central Data Tables; Power Query and a Data Model feed a daily Power BI energy dashboard.",
    technology: ["Excel", "VBA", "Power Query", "Data Model", "Power BI"],
    toolIcons: [
      { src: asset("icons/excel.png"), label: "Excel and VBA" },
      { src: asset("icons/power-query.svg"), label: "Power Query" },
      { src: asset("icons/power-bi.svg"), label: "Power BI" },
    ],
    measurement:
      "IoT data preparation reduced from about 2 hours to 1 minute; reporting reduced from about 4 hours to 1 minute. Daily tracking supported machine-selection decisions associated with a 5% reduction in electricity usage.",
    users: "Managers and Supervisors",
  },
  {
    id: "gas",
    category: "Dashboard",
    number: "04",
    title: "Gas Consumption Dashboard",
    teaser:
      "Reporting time reduced from about 2 hours to 1 minute with process-level target tracking.",
    problem:
      "Monthly Excel reporting took about 2 hours and provided no daily visibility. Two production processes shared one boiler, making it difficult to identify which process was driving gas usage; only an overall gas target existed.",
    solution:
      "Built a daily Excel and VBA data-capture system that connects gas consumption, output, and targets through Power Query and a Data Model. A Power BI report tracks actual versus target by process.",
    technology: ["Excel", "VBA", "Power Query", "Data Model", "Power BI"],
    toolIcons: [
      { src: asset("icons/excel.png"), label: "Excel and VBA" },
      { src: asset("icons/power-query.svg"), label: "Power Query" },
      { src: asset("icons/power-bi.svg"), label: "Power BI" },
    ],
    measurement:
      "Reporting time reduced from about 2 hours to 1 minute. Enabled gas-per-unit, gas-cost-per-unit, and actual-versus-target tracking by process for clearer issue identification.",
    users: "Managers and Supervisors",
  },
];

export const timeline = [
  ["Oct 2024 - present", "Production Officer", "AH BRAKE (Thailand) Co., Ltd. / Rayong"],
  ["Jun 2024 - Sep 2024", "TPS Officer", "Maruyasu Industries (Thailand) Co., Ltd. / Rayong"],
  ["Jun 2022 - Jun 2024", "Production Control Officer", "DENSO TEN (Thailand) Co., Ltd. / Rayong"],
  ["Oct 2021 - Mar 2022", "Production Supervisor", "Rainbow Printing Co., Ltd. / Bangkok"],
  ["Jun 2019 - Jul 2021", "Production Supervisor", "Vava Pack Co., Ltd. / Nakhon Ratchasima"],
] as const;

export const skills = [
  [asset("icons/power-bi.svg"), "Power BI", "Business dashboards"],
  [asset("icons/excel.png"), "Excel + VBA", "Report automation"],
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
      {
        id: "overview",
        label: "Overview",
        title: "Monthly performance overview",
        image: asset("dashboards/consumption-dashboard-01.png"),
        alt: "Electricity dashboard overview",
      },
      {
        id: "machine",
        label: "Machines",
        title: "Machine energy performance",
        image: asset("dashboards/consumption-dashboard-02.png"),
        alt: "Electricity dashboard machine performance",
      },
      {
        id: "preheat",
        label: "Preheat",
        title: "Preheat consumption monitoring",
        image: asset("dashboards/consumption-dashboard-04.png"),
        alt: "Electricity dashboard preheat monitoring",
      },
      {
        id: "daily",
        label: "Daily detail",
        title: "Daily consumption analysis",
        image: asset("dashboards/consumption-dashboard-05.png"),
        alt: "Electricity dashboard daily analysis",
      },
    ],
  },
  {
    id: "gas",
    label: "Gas",
    title: "Gas Consumption Dashboard",
    previews: [
      {
        id: "overview",
        label: "Overview",
        title: "Monthly gas performance",
        image: asset("dashboards/gas/gas-dashboard-01.png"),
        alt: "Gas dashboard overview",
      },
      {
        id: "daily",
        label: "Daily usage",
        title: "Consumption and preheat",
        image: asset("dashboards/gas/gas-dashboard-02.png"),
        alt: "Gas dashboard daily usage",
      },
      {
        id: "analysis",
        label: "Analysis",
        title: "Usage versus target",
        image: asset("dashboards/gas/gas-dashboard-03.png"),
        alt: "Gas dashboard analysis",
      },
      {
        id: "targets",
        label: "Targets",
        title: "Output and working hours",
        image: asset("dashboards/gas/gas-dashboard-04.png"),
        alt: "Gas dashboard targets",
      },
    ],
  },
];
