import React from "react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Development",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Python", level: 75 },
        { name: "React", level: 70 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Responsive Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Wireframing", level: 75 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git/Github", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Vite", level: 70 },
        { name: "MS Tools", level: 70 },
        { name: "Canva", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
          }}
        >
          Skills
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
          A concise overview of the technologies and tools I use to design and build efficient, thoughtful systems.
        </p>
      </div>

      <hr className="mid-break" style={{ marginBottom: "60px", width: "50%", margin: "0 auto" }} />

      {skillGroups.map((group, index) => (
        <div
          key={index}
          style={{
            marginBottom: "50px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "30px",
            borderRadius: "var(--border-radius)",
            backgroundColor: "#fff",
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px) scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
        >
          <h3
            className="h3"
            style={{
              color: "var(--accent-color)",
              marginBottom: "30px",
              textAlign: "center",
              fontSize: "2rem",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            {group.title}
          </h3>
          {group.skills.map((skill, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "150px",
                  textAlign: "right",
                  paddingRight: "10px",
                  fontWeight: 600,
                  color: "#333",
                }}
              >
                {skill.name}
              </div>
              <div
                style={{
                  flex: 1,
                  maxWidth: "600px",
                  height: "14px",
                  background: "#E5E5E5",
                  borderRadius: "7px",
                  overflow: "hidden",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, var(--accent-color), #ff9f43)`,
                    borderRadius: "7px",
                    transition: "width 0.5s ease-in-out",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      <hr className="mid-break" style={{ margin: "60px 0", width: "50%", marginLeft: "auto", marginRight: "auto" }} />

      <h3 className="h3" style={{ marginBottom: "16px", textAlign: "center", fontSize: "2rem", color: "var(--accent-color)" }}>
        Summary
      </h3>
      <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem", color: "#444" }}>
        My focus is on creating systems that make a meaningful change but also align with my interests and passions — creating something new and learning from each iteration.
      </p>
    </section>
  );
}
