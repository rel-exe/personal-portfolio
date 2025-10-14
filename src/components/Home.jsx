import React from 'react'

export default function Home() {
  return (
    <section id="home" className="text-center">
      <div className="container">
        <h1 className="h1 mb-3">Hi — I'm John Russel Regalado</h1>
        <p className="lead-paragraph mx-auto" style={{ maxWidth: 720 }}>
          I design interfaces, visual identities, and experiences for web and product.
          I focus on clarity, accessibility, and delightful details.
        </p>
        <div className="mt-4">
          <a className="btn btn-outline-primary btn-lg" href="#portfolio">
            See Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
