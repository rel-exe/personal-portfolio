import React from "react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Development",
      skills: ["Laravel", "PHP", "MySQL", "Python", "React", "HTML", "CSS"],
    },
    {
      title: "Design",
      skills: ["Responsive Design", "Figma", "Wireframing"],
    },
    {
      title: "Tools",
      skills: ["Git/Github", "VS Code", "Vite", "NPM", "Canva"],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <p className="lead-paragraph">
        A concise overview of the technologies and tools I use to design and
        build efficient, thoughtful systems.
      </p>

      <hr className="mid-break" />

      {skillGroups.map((group, index) => (
        <div key={index} style={{ marginBottom: "24px" }}>
          <h3>{group.title}</h3>
          <ul>
            {group.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}

      <hr className="mid-break" />

      <h3>Summary</h3>
      <p>
        My focus is on creating systems that are simple, intuitive, and
        maintainable. I enjoy bridging logic and aesthetics — writing clean
        code, designing accessible interfaces, and learning from each iteration.
      </p>
    </section>
  );
}
