import React from 'react'
import { logo } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className=''>
      <img src={logo} alt="logo"/>
    </nav>
  )
}

export default Navbar
