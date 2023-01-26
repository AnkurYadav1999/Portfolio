import React from 'react'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <div className='header-container'>
    <div className='logo'>
      <h3>Portfolio</h3>
    </div>

    <div className='nav-links'>
        <ul className='nav-ul'>
        <AnchorLink href='#home'><li className='nav-li'>Home</li></AnchorLink>
        <AnchorLink href='#about'><li className='nav-li'>About</li></AnchorLink>
        <AnchorLink href='#skills'><li className='nav-li'>Skills</li></AnchorLink>
        <AnchorLink href='#projects'><li className='nav-li'>Projects</li></AnchorLink>
        </ul>
    </div>
    </div>
  )
}

export default Header