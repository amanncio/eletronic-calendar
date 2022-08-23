import React, { useEffect, useState } from 'react'
import "./Navbar.css"




const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"))
  }, [localStorage.getItem("loggedIn")])

  return (
    <div className="navbar">
        <a href='/'>Home</a>
        <a href='/cadastro'>Register</a>
        <a href='/login'>Login</a>
    </div>
  )
}

export default Navbar;