import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login/Login" 
import Register from "./pages/Register/Register" 
import Upload from './pages/Upload/Upload';
import React, { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function x(value){
    setLoggedIn(value);
  } 

  return(
    <>
      <Navbar loggedIn={loggedIn}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn}/>} /> 
          <Route path="/login" element={<Login setLoggedIn={x} />} /> 
          <Route path="/cadastro" element={<Register />} /> 
          <Route path="/upload" element={<Upload loggedIn={loggedIn} />} /> 
          <Route path="/sair" element ={<Home />} />
        </Routes>
      </BrowserRouter>
    </>   
  );
}

export default App;
