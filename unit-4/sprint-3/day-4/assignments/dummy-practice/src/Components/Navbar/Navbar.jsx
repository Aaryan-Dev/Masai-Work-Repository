import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      {/* add your links */}
      <Link to="/" >Home</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/about-us" >About</Link>
      <Link to="/services" >Services</Link>
      <Link to="/login" >Login</Link>

    </>
  )
}

export default Navbar
