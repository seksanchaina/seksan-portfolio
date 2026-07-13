import "./project-modal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project details">×</button>
        <div className="case-study-meta"><p className="eyebrow">{project.tag}</p><span>Case {project.number}</span></div>
        <h2 id="modal-title">{project.title}</h2>
        <p className="case-study-summary">{project.summary}</p>
        <div className="case-study-grid">
          <div><p className="case-study-label">Focus</p><p>{project.challenge}</p></div>
          <div><p className="case-study-label">What I delivered</p><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
        </div>
        <div className="case-study-impact"><p>Intended outcome</p><strong>{project.impact}</strong></div>
      </section>
    </div>
  );
}
