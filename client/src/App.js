import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login/Login" 
import Register from "./pages/Register/Register" 

function App() {
  return(
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/cadastro" element={<Register />} /> 
        </Routes>
      </BrowserRouter>
    </>   
  );
}

export default App;
