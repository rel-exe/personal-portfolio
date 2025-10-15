import React from "react";

export default function Resume() {
  return (
    <section
      id="resume"
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
          Resume
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
          A brief overview of my experience, education, and certifications — reflecting my continuous pursuit of growth in software and web development.
        </p>
      </div>

      <hr className="mid-break" style={{ marginBottom: "60px", width: "50%", marginLeft: "auto", marginRight: "auto" }} />

      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          textAlign: "left",
          padding: "40px",
          borderRadius: "var(--border-radius)",
          backgroundColor: "#fff",
          boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px) scale(1.02)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
      >
        <h3 className="h3" style={{ color: "var(--accent-color)", marginBottom: "16px", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>Professional Summary</h3>
        <p style={{ color: "var(--body-text-color)", marginBottom: "40px" }}>
          I’m an aspiring software and web developer currently pursuing a Bachelor of Science in Information Systems at <strong>La Verdad Christian College</strong>. I have a working background in programming with <strong>Python</strong> and <strong>C#</strong>, and practical experience in web development using <strong>PHP</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Laravel</strong>. My focus is on writing efficient code and developing clean, responsive applications.
        </p>

        <h3 className="h3" style={{ color: "var(--accent-color)", marginBottom: "16px", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>Education</h3>
        <ul style={{ marginBottom: "40px", paddingLeft: "20px", color: "var(--light-text-color)" }}>
          <li><strong>La Verdad Christian College</strong> — BS in Information Systems (2017–Present)</li>
          <li>Expected Graduation: 2027</li>
        </ul>

        <h3 className="h3" style={{ color: "var(--accent-color)", marginBottom: "16px", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>Experience</h3>
        <ul style={{ marginBottom: "40px", paddingLeft: "20px", color: "var(--light-text-color)" }}>
          <li style={{ marginBottom: "16px" }}>
            <strong>Freelance Programmer & Web Designer (2023–2024)</strong>
            <p style={{ margin: "4px 0 0 0" }}>
              Designed and developed websites for clients using HTML, CSS, and JavaScript. Integrated backend functionality using PHP and Laravel.
            </p>
          </li>
          <li>
            <strong>Programming Challenges (2023–2024)</strong>
            <p style={{ margin: "4px 0 0 0" }}>
              Actively participated in algorithmic challenges in Python and C# to improve problem-solving efficiency and logic design.
            </p>
          </li>
        </ul>

        <h3 className="h3" style={{ color: "var(--accent-color)", marginBottom: "16px", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>Certifications</h3>
        <ul style={{ marginBottom: "40px", paddingLeft: "20px", color: "var(--light-text-color)" }}>
          <li>Python Programming – DICT</li>
          <li>HTML and CSS Design – DICT</li>
          <li>Marketing Fundamentals – DICT</li>
          <li>Principles of Web Development – DICT</li>
        </ul>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="/files/resyumey.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
