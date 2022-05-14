import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {BiUser} from 'react-icons/bi'
import {GiBlackBook} from 'react-icons/gi'
import {FaRegHandshake} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBlackBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaRegHandshake /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav