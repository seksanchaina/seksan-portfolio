import "./project-card.css";

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className={`project-card ${project.tone}`}>
      <div className="project-number">{project.number}</div>
      <p className="project-tag">{project.tag}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p className="project-impact">{project.impact}</p>
      <button className="project-button" onClick={() => onSelect(project)} aria-haspopup="dialog">
        View case study <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
