import React from 'react'

export default function Resume() {
  const testimonials = [
    { text: "Great execution on brand and web.", author: "L. Watson", role: "Founder" },
    { text: "Delivered past expectations. Great thinking.", author: "S. Kim", role: "Product Lead" },
    { text: "Reliable, fast, and thoughtful.", author: "T. Nguyen", role: "Marketing" }
  ]

  return (
    <section id="resume" className="section">
      <h2>Resume & Skills</h2>

      <hr className="mid-break" />

      <h3>Skills</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        <div><strong>Design</strong> — Visual systems, UI, prototyping</div>
        <div><strong>Frontend</strong> — HTML, CSS, React</div>
        <div><strong>Tools</strong> — Figma, Sketch, Photoshop</div>
      </div>

      <hr className="mid-break" />

      <h3>Experience</h3>
      <div>
        <div><strong>Lead Designer</strong> — Company A (2019–Present)</div>
        <p>Led product design initiatives and created component systems used across web and email.</p>

        <div><strong>Senior Designer</strong> — Company B (2017–2019)</div>
        <p>Worked with early-stage startups to define visual languages and prototypes.</p>
      </div>

      <hr className="mid-break" />

      <h3>Testimonials</h3>
      <div style={{ display: 'grid', gap: 20 }}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial" style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: 8 }}>
            <p>{t.text}</p>
            <p style={{ fontWeight: 700, marginTop: 8 }}>
              {t.author} — <span style={{ fontWeight: 400 }}>{t.role}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
