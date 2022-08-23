import React, {useState} from 'react';
import "./Register.css"


import Axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/user/cadastro", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='register'>
      <h1>Faça seu <span>cadastro</span></h1>
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
          <button onClick={register}>Cadastrar</button>
      </div>
    </div>
  )
}

export default Register;