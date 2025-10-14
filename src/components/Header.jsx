import React from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="position-fixed w-100" style={{ backgroundColor: "var(--dark-color)" }}>
      <div className="container hero-container text-center py-5">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="hero-img mb-4 rounded-circle"
          width="160"
          height="160"
        />

        <h2 className="text-white fw-bold mb-1">Your Name</h2>
        <p className="text-secondary mb-4">Designer • Developer • Human</p>

        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link fs-4"
          >
            <Icon icon="mdi:github" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link fs-4"
          >
            <Icon icon="mdi:linkedin" />
          </a>
          <a
            href="mailto:you@example.com"
            className="social-link fs-4"
          >
            <Icon icon="mdi:email" />
          </a>
        </div>

        <p className="copyright mt-5 small">
          © {new Date().getFullYear()} Your Name
        </p>
      </div>
    </header>
  );
}
