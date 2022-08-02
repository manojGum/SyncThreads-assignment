import React, { useState } from 'react'
import "./Login.css"

 const Login = () => {

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

  return (
    <div className='login'>
      {
        console.log(user)
      }
      <h1>Login</h1>
      <input type="email" name='email' value={user.email}  onChange={handelChange} placeholder='Enter your Email' />
      <input  type="password" name='password'  value={user.password}  onChange={handelChange} placeholder='Enter your password' />
      <div className='button'>Login</div>
      <div>or</div>
      <div className='button'>Register</div>

    </div>
  )
}

export default Login;