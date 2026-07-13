import { useEffect } from "react";
import "./project-modal.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-summary"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          &times;
        </button>
        <div className="case-study-meta">
          <p className="eyebrow">{project.tag}</p>
          <span>Case {project.number}</span>
        </div>
        <h2 id="modal-title">{project.title}</h2>
        <p className="case-study-summary" id="modal-summary">{project.summary}</p>
        <div className="case-study-grid">
          <div>
            <p className="case-study-label">Focus</p>
            <p>{project.challenge}</p>
          </div>
          <div>
            <p className="case-study-label">What I delivered</p>
            <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </div>
        </div>
        <div className="case-study-impact">
          <p>Intended outcome</p>
          <strong>{project.impact}</strong>
        </div>
      </section>
    </div>
  );
}
