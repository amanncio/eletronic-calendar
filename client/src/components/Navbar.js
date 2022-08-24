import React, { useEffect, useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    // setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')));
    console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);
  

  return (
    <div className="navbar">
      <a href='/'>Home</a>
      {!loggedIn ? (
        <>
          <a href='/profile'>Profile</a>
        </>
      ) : (
        <>
          <a href='/login'>Login</a>
          <a href='/cadastro'>Register</a>
        </>
      )}
    </div>
  )
}

export default Navbar;