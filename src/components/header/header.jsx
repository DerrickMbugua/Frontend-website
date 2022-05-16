import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Derrick Mwema</h1>
        <h5>Full-stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="me"/>

        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header