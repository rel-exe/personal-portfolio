import React from "react";
import { Icon } from "@iconify/react";

export default function Biography() {
  return (
    <section
      id="biography"
      className="section"
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg, #f5f7fa 0%, #e0e7ff 100%)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          className="h2"
          style={{
            color: "var(--dark-color)",
            fontSize: "3rem",
            letterSpacing: "1px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
          }}
        >
          Biography
        </h2>
        <p
          className="lead-paragraph"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "var(--dark-grey-color)",
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          A glimpse into my journey, passions, and the ideas that drive me forward.
        </p>
      </div>

      <div
        className="reviews-components"
        style={{
          padding: "40px",
          borderRadius: "var(--border-radius)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
          margin: "0 auto 60px auto",
          maxWidth: "700px",
          backgroundColor: "#fff",
          transition: "all 0.3s ease",
          borderLeft: "5px solid var(--accent-color)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px) scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
      >
        <h3
          className="h3"
          style={{
            color: "var(--accent-color)",
            marginBottom: "20px",
            fontSize: "2rem",
          }}
        >
          About Me
        </h3>
        <p className="lead-paragraph" style={{ fontSize: "1.1rem", color: "#333" }}>
          I’m <strong>John Russel Regalado</strong>, a Bachelor of Science in Information Systems student currently in my third year at{" "}
          <strong>La Verdad Christian College</strong>. My focus is on creating systems that make meaningful change while aligning with my passions — creating something new and learning from each iteration. I’m driven by the desire to create, discover, and leave a quiet mark on the world.
        </p>
      </div>

      <hr className="mid-break" style={{ marginBottom: "60px", width: "50%", marginLeft: "auto", marginRight: "auto" }} />

      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h3 className="h3" style={{ color: "var(--accent-color)", marginBottom: "20px", fontSize: "2rem" }}>
          Education
        </h3>
        <ul style={{ paddingLeft: "0", listStyle: "none", lineHeight: "1.8", color: "#555", fontSize: "1.05rem" }}>
          <li><strong>La Verdad Christian College</strong> — BS in Information Systems (2023–Present)</li>
          <li>Completed Junior High and Senior High at the same institution (2017 - 2022)</li>
        </ul>
      </div>

      <hr className="mid-break" style={{ marginBottom: "60px", width: "50%", marginLeft: "auto", marginRight: "auto" }} />

      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h3 className="h3" style={{ color: "var(--accent-color)", marginBottom: "20px", fontSize: "2rem" }}>
          Personal Interests
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#444", maxWidth: "700px", margin: "0 auto" }}>
          Beyond academics, I’m drawn to quiet and reflective pursuits — <em style={{ color: "var(--accent-color)" }}>reading</em>,{" "}
          <em style={{ color: "var(--accent-color)" }}>writing</em>, <em style={{ color: "var(--accent-color)" }}>poetry</em>, and observing{" "}
          <em style={{ color: "var(--accent-color)" }}>nature</em> (especially mushrooms and cats). I value solitude as a place for thinking — where ideas, imagination, and philosophy flourish.
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "25px", marginTop: "25px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 500 }}>
            <Icon icon="mdi:book-open-page-variant" style={{ color: "var(--accent-color)", fontSize: "26px" }} />
            <span>Reading</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 500 }}>
            <Icon icon="mdi:pencil" style={{ color: "var(--accent-color)", fontSize: "26px" }} />
            <span>Writing</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 500 }}>
            <Icon icon="mdi:feather" style={{ color: "var(--accent-color)", fontSize: "26px" }} />
            <span>Poetry</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 500 }}>
            <Icon icon="mdi:pine-tree" style={{ color: "var(--accent-color)", fontSize: "26px" }} />
            <span>Nature</span>
          </div>
        </div>
      </div>

      <hr className="mid-break" style={{ marginBottom: "60px", width: "50%", marginLeft: "auto", marginRight: "auto" }} />

      <div style={{ textAlign: "center" }}>
        <h3 className="h3" style={{ color: "var(--accent-color)", marginBottom: "20px", fontSize: "2rem" }}>Background</h3>
        <p style={{ fontSize: "1.1rem", color: "#333", maxWidth: "700px", margin: "0 auto" }}>
          I grew up in <strong>Hagonoy, Bulacan</strong> and now live in <strong>Calumpit</strong>. My journey has been guided by quiet curiosity and an inner drive — a fascination with how things work and why people create. I satisfy my curiosity and follow my passions, even when exhaustion sets in. Every now and then I feel burnt out, but I rise again. Until they stop me, I will keep going.
        </p>
      </div>
    </section>
  );
}
