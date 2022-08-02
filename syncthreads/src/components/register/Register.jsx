import React from 'react'
import { useState } from 'react'
import "./Register.css"

 const Register = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
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
    <div className='register'>
      <h1>Login</h1>
      <input type="text"  name='name' value={user.name}  placeholder='Your Name'  onChange={handelChange}/>
      <input type="email" name='email' value={user.email}  placeholder='Your Email' onChange={handelChange} />
      <input type="password" name='password' value={user.password}  placeholder='Your password'  onChange={handelChange}/>
      <input type="password"  name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter Your password' onChange={handelChange} />
      <div className='button'>Register</div>
      <div>or</div>
      <div className='button'>Login</div>

    </div>
  )
}

export default Register;