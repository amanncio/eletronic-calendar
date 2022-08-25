import React, {useState} from 'react';
import { Button } from '@mui/material';
import "./Longin.css"
import Axios from "axios"

import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("")
  // const [loggedIn, setLoggedIn] = useState(userLogged ?? false);


  let navigate = useNavigate();

  const login = () => {
    
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.loggedIn){
        console.log(props)
        // localStorage.setItem("loggedIn", true);
        // localStorage.setItem("username", response.data.username);
        props.setLoggedIn(true);
        navigate("/upload");
      } else{
        seterrorMessage(response.data.message);
      }
    });
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <div className='login-form'>
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={(event) => {
              setUsername(event.target.value);
            }}  
           />
          <input type="password"
            placeholder="Digite sua senha"
            onChange={(event) => {
              setPassword(event.target.value);
            }}  
          />
          <Button onClick={login} variant="contained" color="success">Entrar</Button>
          <span style={{color:"red"}}>{errorMessage}</span>
      </div>
    </div>
  )
}

export default Login;