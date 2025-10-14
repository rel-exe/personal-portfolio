import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p className="lead-paragraph">
          Have a project in mind? Drop a message and I’ll get back to you soon.
        </p>

        <div className="row mt-4">
          {/* Contact Form */}
          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  required
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                />
              </div>

              <button className="btn btn-primary btn-lg" type="submit">
                Send Message
              </button>
              {sent && (
                <span style={{ marginLeft: 12, color: "green" }}>
                  Message sent (simulated)
                </span>
              )}
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="col-md-5">
            <div className="contact-list mb-3">
              <p className="contact-paragraph">
                <strong>Email:</strong> you@example.com
              </p>
            </div>
            <div className="contact-list mb-3">
              <p className="contact-paragraph">
                <strong>Location:</strong> Bulacan, Philippines
              </p>
            </div>

            <div
              className="mt-4"
              style={{
                height: 300,
                borderRadius: 15,
                overflow: "hidden",
              }}
            >
              <iframe
                title="Google Map of Bulacan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493339.50987902895!2d120.68755150397796!3d14.980770101293402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970719dde84a6b%3A0xc3993fd7c3085f19!2sBulacan!5e0!3m2!1sen!2sph!4v1760427777205!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
