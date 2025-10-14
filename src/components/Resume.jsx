import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p className="lead-paragraph">
        A brief overview of my experience, education, and certifications —
        reflecting my continuous pursuit of growth in software and web
        development.
      </p>

      <hr className="mid-break" />

      <h3>Professional Summary</h3>
      <p>
        I’m an aspiring software and web developer currently pursuing a Bachelor
        of Science in Information Systems at{" "}
        <strong>La Verdad Christian College</strong>. I have a working
        background in programming with <strong>Python</strong> and{" "}
        <strong>C#</strong>, and practical experience in web development using{" "}
        <strong>PHP</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>Laravel</strong>. My focus is on writing efficient code and
        developing clean, responsive applications.
      </p>

      <hr className="mid-break" />

      <h3>Education</h3>
      <ul>
        <li>
          <strong>La Verdad Christian College</strong> — BS in Information
          Systems (2017–Present)
        </li>
        <li>Expected Graduation: 2027</li>
      </ul>

      <hr className="mid-break" />

      <h3>Experience</h3>
      <ul>
        <li>
          <strong>Freelance Programmer & Web Designer (2023–2024)</strong>
          <p>
            Designed and developed websites for clients using HTML, CSS, and
            JavaScript. Integrated backend functionality using PHP and Laravel.
          </p>
        </li>
        <li>
          <strong>Programming Challenges (2023–2024)</strong>
          <p>
            Actively participated in algorithmic challenges in Python and C# to
            improve problem-solving efficiency and logic design.
          </p>
        </li>
      </ul>

      <hr className="mid-break" />

      <h3>Certifications</h3>
      <ul>
        <li>Python Programming – DICT</li>
        <li>HTML and CSS Design – DICT</li>
        <li>Marketing Fundamentals – DICT</li>
        <li>Principles of Web Development – DICT</li>
      </ul>

      <hr className="mid-break" />

      <div style={{ marginTop: "20px" }}>
        <a
          href="/files/resyumey.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
