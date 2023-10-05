import { useState } from 'react'
import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { DisplaySettings } from '@mui/icons-material';



const Login = () => {

  const [state, setState] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  
  const changeInputs = (e) => {
    setMessage(e.target.value);
  }
  
  const changeState = (e) => {

    e.preventDefault();

    if(message.trim().length < 3) {
      
      alert("please enter your information completely");
      
    }

    else {
      
      setState(true);
      navigate('/home');
    }    
  }

  
  return (
    <div>
      <div className="logindiv">
          <form className="form">
          <p className="welcome">Welcome back</p>
          <br></br>
          <h2 className="login">Login to your account</h2>
          
            <p className="email">E-mail</p>
            <br></br>
            <input className="input" onChange={changeInputs}></input>
            <br></br>
            <p className="password">Password</p>
            <br></br>
            <input className="input"onChange={changeInputs}></input>
            <br></br>
            <input className="radioinput" type="checkbox"></input>
            <p className="remember">Remember me</p>
            <a className="forgot" href="/"> Forgot password?</a>
            <br></br>
            <button className="button" onClick={changeState}>Login now</button>
            <br></br>
            <p className="dont">Don't have an account?</p>
            <a className="join" href="/">Join free today</a>
            
          </form>
  </div>
    </div>
  )
}

export default Login;
