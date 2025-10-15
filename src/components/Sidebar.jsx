import React from "react";
import { Icon } from "@iconify/react";

export default function Sidebar() {
  const links = [
    { id: "home", icon: "ic:round-home", title: "Home" },
    { id: "biography", icon: "ic:round-person", title: "About" },
    { id: "resume", icon: "ic:round-school", title: "Resume" },
    { id: "projects", icon: "ic:round-business-center", title: "Portfolio" },
    { id: "skills", icon: "ic:round-menu-book", title: "Blog" },
    { id: "contact", icon: "ic:round-phone", title: "Contact" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-top text-center">
        <img
          className="profile"
          src="/images/profile.jfif"
          alt="John Russel Regalado"
        />
        <h2>John Russel Regalado</h2>
        <p>i like technology, poetry, cats and mushrooms</p>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav flex-column text-center">
          {links.map((link) => (
            <li key={link.id} className="nav-item my-2">
              <a href={`#${link.id}`} className="nav-link" title={link.title}>
                <Icon icon={link.icon} width="30" height="30" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
