import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <p className="lead-paragraph open-description">
          I’m a product-minded designer who builds useful, accessible interfaces.
          I work across branding, web, and UI systems.
        </p>

        <hr className="mid-break" />

        <h3>Personal Info</h3>
        <ul className="open-description">
          <li><strong>Location:</strong> Your city, Country</li>
          <li><strong>Email:</strong> you@example.com</li>
          <li><strong>Phone:</strong> +00 000 000 000</li>
        </ul>

        <hr className="mid-break" />

        <h3>Services</h3>
        <div className="client-content">
          <div>
            <h4>Web Design</h4>
            <p>Design systems, responsive websites, landing pages.</p>
          </div>
          <div>
            <h4>Branding</h4>
            <p>Identity, logos, and visual guidelines to keep things consistent.</p>
          </div>
          <div>
            <h4>Illustration</h4>
            <p>Simple, usable illustrative systems for interfaces and content.</p>
          </div>
        </div>

        <hr className="mid-break" />

        <h3>Clients</h3>
        <div className="client-content">
          <img src="/images/client-1.png" alt="Client 1" width="80" />
          <img src="/images/client-2.png" alt="Client 2" width="80" />
          <img src="/images/client-3.png" alt="Client 3" width="80" />
        </div>

        <hr className="mid-break" />

        <h3>Testimonials</h3>
        <div className="card-body">
          <p className="card-text">
            “Reliable, thoughtful, and an outstanding collaborator.”
          </p>
          <p className="testimonial-location">— A satisfied client</p>
        </div>
      </div>
    </section>
  );
}
