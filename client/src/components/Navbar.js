import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar(props) {
  const [loggedIn, setLoggedIn] = useState(props.loggedIn ?? false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [localStorage.getItem("loggedIn")]);

  return (
    <div className="navbar">
      {props.loggedIn ? (
        <>
          <a href="/sair">Sair</a>
        </>
      ) : (
        <>
          <a href="/">Home</a>
          <a href="/cadastro">Cadastro</a>
          <a href="/login">Login</a>
        </>
      )}
    </div>
  );
}

export default Navbar;
