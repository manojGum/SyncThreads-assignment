import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
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
    const navigate=useNavigate();

    const register=()=>{
      const {name,email,password,reEnterPassword}=user
      if(name && email && password && reEnterPassword &&(password===reEnterPassword))
      {
        // alert("posted")
        axios.post("http://localhost:8080/register",user)
        .then(res=>{
          // console.log(res)
          alert(res.data.message)
          setUser({
            name:"",
            email:"",
            password:"",
            reEnterPassword:""
          })
          navigate("/login")
        })
        
      }
      else{
        alert("inviled input")
      }
    
    }


  return (
    <div className='register'>
      <h1>Register</h1>
      <input type="text"  name='name' value={user.name}  placeholder='Your Name'  onChange={handelChange}/>
      <input type="email" name='email' value={user.email}  placeholder='Your Email' onChange={handelChange} />
      <input type="password" name='password' value={user.password}  placeholder='Your password'  onChange={handelChange}/>
      <input type="password"  name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter Your password' onChange={handelChange} />
      <div className='button' onClick={register}>Register</div>
      <div>or</div>
      <div className='button'><Link to="/login" className='link'>Login</Link></div>

    </div>
  )
}

export default Register;