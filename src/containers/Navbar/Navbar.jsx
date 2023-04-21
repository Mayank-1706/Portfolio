import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='topbar_back'></div>
      <div className='topbar'>
          <h1>Mayank Bhatnagar</h1> 
          <div>
            <a href='#' className='link'><span>Home</span></a>
            <a href='#education' className='link'><span>Education Background</span></a>
            <a href='#skills' className='link'><span>Skills</span></a>
            <a href='#projects' className='link'><span>Projects</span></a>
            <a href='#contact' className='link'><span>Contact</span></a>  
          </div>
        </div>
    </div>
  )
}

export default Navbar
