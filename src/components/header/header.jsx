import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/portfolio1.jpg'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Derrick Mwema</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        <div className="me">
          <img src={Me} alt="me"/>

        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
        </div>
    </header>
  )
}

export default header