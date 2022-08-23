import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div className='register'>
      <h1>Faça seu <span>cadastro</span></h1>
      <div className='register-form'>
          <input type="text" placeholder="Nome de usuário" />
          <input type="password" placeholder="Digite sua senha" />
          <button>Cadastrar</button>
      </div>
    </div>
  )
}

export default Register;