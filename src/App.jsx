import React from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Sidebar />
      <main className="content">
        <Home />
        <Biography />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
