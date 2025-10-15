import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '0 20px',
        backgroundColor: 'var(--dark-color)',
        color: 'var(--secondary-color)',
        textAlign: 'center',
      }}
    >
      <h1 className="h1 mb-3" style={{ fontWeight: 700 }}>
        Hello, World!
      </h1>
      <h1>
        I'm John Russel Regalado
      </h1>
      <p
        className="lead-paragraph"
        style={{ maxWidth: 720, color: 'var(--grey-color)', margin: '20px auto 40px auto' }}
      >
        I’m passionate about exploring many areas of technology because I want to create a lot of meaningful things and leave my mark on the world.
      </p>

      <a
        className="btn btn-outline-primary btn-lg"
        href="#projects"
        style={{ fontWeight: 700 }}
      >
        See Portfolio
      </a>
    </section>
  );
}
