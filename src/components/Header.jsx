import React from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header
      className="position-fixed w-100"
      style={{
        backgroundColor: "var(--dark-color)",
        zIndex: 1000,
        top: 0,
        left: 0,
      }}
    >
      <div
        className="container hero-container text-center py-5"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="hero-img rounded-circle mb-3"
          width="160"
          height="160"
          style={{ border: "10px solid rgba(242, 102, 73, 0.2)" }}
        />

        <h2 className="text-white fw-bold mb-1">John Russel Regalado</h2>
        <p className="text-secondary mb-4" style={{ color: "var(--grey-color)" }}>
          Designer • Developer • Human
        </p>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link fs-4"
            style={{ color: "var(--grey-color)", transition: "color 0.3s" }}
          >
            <Icon icon="mdi:github" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link fs-4"
            style={{ color: "var(--grey-color)", transition: "color 0.3s" }}
          >
            <Icon icon="mdi:linkedin" />
          </a>
          <a
            href="mailto:you@example.com"
            className="social-link fs-4"
            style={{ color: "var(--grey-color)", transition: "color 0.3s" }}
          >
            <Icon icon="mdi:email" />
          </a>
        </div>

        <p
          className="copyright small"
          style={{ color: "var(--grey-color)", marginTop: "auto" }}
        >
          © {new Date().getFullYear()} John Russel Regalado
        </p>
      </div>
    </header>
  );
}
