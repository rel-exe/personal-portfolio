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
    <section
      id="projects"
      className="section"
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg, #f9f9fb 0%, #e0e7ff 100%)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          className="h2"
          style={{
            color: "var(--dark-color)",
            fontSize: "3rem",
            textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          Projects
        </h2>
        <p
          className="lead-paragraph"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "var(--dark-grey-color)",
            fontSize: "1.1rem",
          }}
        >
          A collection of work that reflects how I think, build, and refine digital systems.
        </p>
      </div>

      <hr className="mid-break" style={{ marginBottom: "60px", width: "50%", marginLeft: "auto", marginRight: "auto" }} />

      <div
        className="project-list"
        style={{
          display: "grid",
          gap: "40px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="reviews-components"
            style={{
              padding: "40px",
              borderRadius: "var(--border-radius)",
              backgroundColor: "#fff",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)";
            }}
          >
            <h3
              className="h3"
              style={{
                color: "var(--accent-color)",
                marginBottom: "16px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              {p.title}
            </h3>
            <p style={{ marginBottom: "16px", color: "var(--light-text-color)" }}>{p.description}</p>
            <p style={{ marginBottom: "16px" }}>
              <strong style={{ color: "var(--accent-color)" }}>Technologies:</strong> {p.tech.join(", ")}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
                style={{ transition: "all 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                View on GitHub
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                  style={{ transition: "all 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
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
