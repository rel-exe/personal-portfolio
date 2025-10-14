import React from 'react'
import { Icon } from '@iconify/react'

export default function Navigation() {
  const links = [
    { id: 'home', icon: 'ic:round-home', title: 'Home' },
    { id: 'biography', icon: 'ic:round-person', title: 'About' },
    { id: 'resume', icon: 'ic:round-school', title: 'Resume' },
    { id: 'projects', icon: 'ic:round-business-center', title: 'Portfolio' },
    { id: 'skills', icon: 'ic:round-menu-book', title: 'Blog' },
    { id: 'contact', icon: 'ic:round-phone', title: 'Contact' },
  ]

  return (
    <section className="navigation">
      <ul className="nav nav-pills flex-column text-center">
        {links.map(l => (
          <li key={l.id} className="nav-item">
            <a
              href={`#${l.id}`}
              className="nav-link"
              title={l.title}
            >
              <Icon icon={l.icon} width="30" height="30" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
