import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <a href='/'>Home</a>
        <a href='/cadastro'>Register</a>
        <a href='/login'>Login</a>
    </div>
  )
}

export default Navbar