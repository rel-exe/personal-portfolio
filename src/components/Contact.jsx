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
    <section
      id="contact"
      className="section"
      style={{
        padding: "120px 0",
        backgroundColor: "var(--secondary-color)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 className="h2" style={{ color: "var(--dark-color)", fontSize: "3rem" }}>
          Contact
        </h2>
        <p
          className="lead-paragraph"
          style={{ maxWidth: "700px", margin: "0 auto", color: "var(--light-text-color)" }}
        >
          Have a project in mind? Drop a message and I’ll get back to you soon.
        </p>
      </div>

      <div
        className="row mt-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Contact Form */}
        <div className="col-md-7" style={{ minWidth: "300px", maxWidth: "600px" }}>
          <div
            className="reviews-components"
            style={{
              padding: "30px",
              borderRadius: "var(--border-radius)",
              background: "linear-gradient(135deg, #ffffff, #f0f4ff)",
              boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.1)";
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row mb-3" style={{ gap: "16px" }}>
                {["name", "email"].map((field) => (
                  <div className="col" key={field}>
                    <input
                      required
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={field === "name" ? "Your Name" : "Your Email"}
                      value={form[field]}
                      onChange={handleChange}
                      className="form-control"
                      style={{
                        borderRadius: "var(--border-radius)",
                        padding: "10px 14px",
                        border: "1px solid #ccc",
                        transition: "border-color 0.3s, box-shadow 0.3s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-color)";
                        e.target.style.boxShadow = "0 0 5px rgba(50, 100, 255, 0.3)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#ccc";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}
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
                  style={{
                    borderRadius: "var(--border-radius)",
                    padding: "10px 14px",
                    border: "1px solid #ccc",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent-color)";
                    e.target.style.boxShadow = "0 0 5px rgba(50, 100, 255, 0.3)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#ccc";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                className="btn btn-primary btn-lg"
                type="submit"
                style={{
                  background: "linear-gradient(90deg, #4f46e5, #6366f1)",
                  border: "none",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Send Message
              </button>

              {sent && (
                <span style={{ marginLeft: 12, color: "green", fontWeight: 600 }}>
                  Message sent (simulated)
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info + Map */}
        <div className="col-md-5" style={{ minWidth: "250px", maxWidth: "400px" }}>
          <div
            style={{
              padding: "20px",
              borderRadius: "var(--border-radius)",
              backgroundColor: "#fff",
              boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "var(--light-text-color)", marginBottom: "10px" }}>
              <strong>Email:</strong> you@example.com
            </p>
            <p style={{ color: "var(--light-text-color)" }}>
              <strong>Location:</strong> Bulacan, Philippines
            </p>
          </div>

          <div
            style={{
              height: 300,
              borderRadius: "var(--border-radius)",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
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
    </section>
  );
}
