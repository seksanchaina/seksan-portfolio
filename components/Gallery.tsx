"use client";

import { useState } from "react";
import { dashboardProjects } from "@/data/portfolio";

export function Gallery() {
  const [activeProject, setActiveProject] = useState(dashboardProjects[0]);
  const [activePreview, setActivePreview] = useState(dashboardProjects[0].previews[0]);

  const selectProject = (projectId: string) => {
    const project = dashboardProjects.find((item) => item.id === projectId) ?? dashboardProjects[0];
    setActiveProject(project);
    setActivePreview(project.previews[0]);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-3" aria-label="Select dashboard project">{dashboardProjects.map((project) => <button key={project.id} type="button" onClick={() => selectProject(project.id)} aria-pressed={activeProject.id === project.id} className={`rounded-full border px-4 py-2 text-sm font-extrabold transition ${activeProject.id === project.id ? "border-brand bg-brand text-white" : "border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"}`}>{project.label} <span className="ml-1 text-xs opacity-70">Dashboard</span></button>)}</div>
      <figure className="m-0 overflow-hidden border border-slate-200 bg-surface shadow-[10px_10px_0_#f2c811]"><img className="block w-full" src={activePreview.image} alt={activePreview.alt} /><figcaption className="bg-white px-4 py-3 text-sm font-bold text-slate-600">{activeProject.title} / {activePreview.title}</figcaption></figure>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Select dashboard page">{activeProject.previews.map((preview, index) => <button key={preview.id} type="button" onClick={() => setActivePreview(preview)} aria-pressed={activePreview.id === preview.id} className={`flex min-h-16 items-center gap-3 rounded-2xl border px-3 text-left text-sm font-extrabold transition ${activePreview.id === preview.id ? "border-brand bg-brand text-white shadow-[0_6px_0_#112766]" : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-brand hover:text-brand"}`}><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs ${activePreview.id === preview.id ? "bg-accent text-brand" : "bg-slate-100 text-brand"}`}>0{index + 1}</span>{preview.label}</button>)}</div>
    </div>
  );
}
