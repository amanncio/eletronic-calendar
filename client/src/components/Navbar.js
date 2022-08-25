import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar(props) {
  const [loggedIn, setLoggedIn] = useState(props.loggedIn ?? false);

  useEffect(() => {
    // console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    // console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);

  return (
    <div className="navbar">
      <a href="/">Home</a>
      {props.loggedIn ? (
        <>
          {/* <a href="/upload">Agendar Atividade</a>
          <a href="/profile">Profile</a> */}
          <a href="/sair">Sair</a>
        </>
      ) : (
        <>
          <a href="/cadastro">Cadastro</a>
          <a href="/login">Login</a>
        </>
      )}
    </div>
  );
}

export default Navbar;
