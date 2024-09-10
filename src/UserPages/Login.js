import React, { useState } from 'react'
import Header from '../UserComponents/Header'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[Obj,SetObj]=useState({})
 var navigate= useNavigate()
  function set(event)
  {
    SetObj({...Obj,[event.target.name]:event.target.value})
  }
  function Login()
  {
    if(Obj.Username=="Admin" && Obj.Password=="Admin123")
    {
      alert("Login")
      navigate("/UploadNews")
    }
    else
    {
      alert("Wrong Username and Password")
    }
  }
  return (
    <div>
        <Header/>
        <div className='box'>
          <label>Username:</label><br />
          <input type="text" name='Username' onChange={set} placeholder='Enter your Username'/><br /><br />
          <label>Password:</label><br />
          <input type="password" name='Password' onChange={set} placeholder='Enter your Password'/><br /><br />
          <button onClick={Login}>Login</button>
        </div>
    </div>
  )
}

export default Login
