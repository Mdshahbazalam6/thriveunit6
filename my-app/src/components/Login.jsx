import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import '../CSS/login.css'
import { login } from '../redux/action'

const Login = () => {
  const { token } = useSelector((store)=>store)
  console.log(token)
  const [email,setEmail]= useState()
  const[password,setPassword] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="loginMainConatiner">
      <div className="loginContainer">
      <h2 className='loginh2'>LOGIN</h2>
     <input  className='emailInput' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/><br/>
     <input className='passwordInput' type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/><br />

   {/* =================this function invoke the function login in action.js that will be authenticated reqres  ============================== */}
     
     <button className='Login' onClick={()=>login(dispatch,email,password,navigate)}>LOGIN</button>
    </div>
    </div>
  )
}

export default Login
