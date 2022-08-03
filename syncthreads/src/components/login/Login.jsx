import React, { useState } from 'react'
import axios from "axios"
import "./Login.css"
import { Link,useNavigate } from 'react-router-dom'
 const Login = ({setLoginUser}) => {

  const [user,setUser]=useState({
    email:"",
    password:"",
  
})
const handelChange=(event)=>{
    const {name,value}=event.target;
    // console.log(name,value)
    setUser({
        ...user,
        [name]:value
    })

}
const navigate=useNavigate();
const login=()=>{
  axios.post("http://localhost:8080/login",user)
  .then(res=>
    {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    
    })
  // .then(res=>console.log(res))
}

  return (
    <div className='login'>
      {
        console.log(user)
      }
      <h1>Login</h1>
      <input type="email" name='email' value={user.email}  onChange={handelChange} placeholder='Enter your Email' />
      <input  type="password" name='password'  value={user.password}  onChange={handelChange} placeholder='Enter your password' />
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      <div className='button'> <Link to="/register" className='link'>Register</Link></div>
     

    </div>
  )
}

export default Login;