import React from 'react'
import { Icon } from '@iconify/react'

export default function Sidebar(){
  return (
    <>
      <img className="profile" src="/images/profile-placeholder.jpg" alt="Your profile" />
      <h2>Your Name</h2>
      <p>Designer & Frontend Developer. I craft interfaces and identities that tell a story and work reliably.</p>

      <div style={{textAlign:'center', margin:'12px 0'}}>
        <a className="btn btn-sm btn-light me-2" href="#">Resume</a>
        <a className="btn btn-sm btn-primary" href="#">Contact</a>
      </div>

      <h4 style={{marginTop:18}}>Pro Pages</h4>
      <ul style={{listStyle:'none', padding:0}}>
        <li><a href="#" className="text-decoration-none">Blog single <span className="badge-pro ms-2">Pro</span></a></li>
        <li><a href="#" className="text-decoration-none">Service single <span className="badge-pro ms-2">Pro</span></a></li>
        <li><a href="#" className="text-decoration-none">Portfolio single <span className="badge-pro ms-2">Pro</span></a></li>
      </ul>

      <div style={{marginTop:20, textAlign:'center'}}>
        <a className="btn btn-outline-light btn-sm" href="https://templatesjungle.gumroad.com/l/carl-free-bootstrap-5-html-website-template-for-portfolio" target="_blank" rel="noreferrer">Get Pro <Icon icon="mdi:cart" style={{marginLeft:6}}/></a>
      </div>

      <footer style={{marginTop:40, fontSize:12, textAlign:'center', color:'#98a0b0'}}>
        © Template converted. Put your copyright here.
      </footer>
    </>
  )
}