import React from 'react'
import CarIMG from "../assets/nissan.jpg";
import LoginForm from '../components/LoginForm';
import "./Login.css";

function Login() {
  return (
    <div className="main">
      <img src={CarIMG} alt="car" className='image'/>
      <div className="content" >
        <LoginForm />
      </div>
    </div>
  )
}

export default Login