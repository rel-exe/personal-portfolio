import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Xriber",
      description:
        "Xriber is a simple Laravel-based web app designed for creating, managing, and organizing notes. It includes features such as CRUD operations, user authentication, and a clean, responsive frontend.",
      tech: ["Laravel", "PHP", "Javascript", "CSS"],
      github: "https://github.com/rel-exe/xriber",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="lead-paragraph">
        A collection of work that reflects how I think, build, and refine
        digital systems.
      </p>

      <hr className="mid-break" />

      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-item" style={{ marginBottom: "32px" }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>
              <strong>Technologies:</strong> {p.tech.join(", ")}
            </p>
            <div style={{ marginTop: "8px" }}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                View on GitHub
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                  style={{ marginLeft: "8px" }}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
