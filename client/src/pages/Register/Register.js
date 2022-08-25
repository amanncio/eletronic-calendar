import React, {useState} from 'react';
import "./Register.css"
import Button from "@mui/material/Button"

import Axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/user/cadastro", {
      username: username,
      password: password,
    }).then((response) => {
      alert(`Olá ${username} seu cadastro foi realizado com suceso!`);
    });
  };

  return (
    <div className='register'>
      <h1>Faça seu cadastro</h1>
      <div className='register-form'>
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
          <Button onClick={register} variant="contained" color="success">Cadastrar</Button>
      </div>
    </div>
  )
}

export default Register;