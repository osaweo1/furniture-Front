import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const url=process.env.REACT_APP_URL
    const [values,setValue]=useState({
        
        email:'',
        password:'',
        
    })
    const [message,setMessage]=useState('')
    const [show,setShow]=useState(false)
    

  

    const handelChange=(e)=>{
        setValue({...values,[e.target.name]:e.target.value})
    }

    
    const handlesubmit=async(e)=>{
        e.preventDefault()
        axios.defaults.withCredentials=true
        const result=await axios.post(`${url}/login`,values)
        if(result.status===200){
            window.location.href='/'
        }
        else{
            console.log(result.code)
            setMessage(result.code)
        }
            
       
    }
const handleShow=()=>{
    setShow(true)
}
const handleShow1=()=>{
    setShow(false)
}


  return (
    <div className='register-container'>
    <div className='login-form'>
        <form className='login-form-form' onSubmit={handlesubmit}>
            {message && <p>{message}</p>}
            <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handelChange}
                    placeholder='Enter Email...'
                />
                
            <label htmlFor='password'>Password:</label>
                <div className='pass'>
                <input
                    type={show?'text':'password'}
                    name='password'
                    value={values.password}
                    onChange={handelChange}
                    placeholder='password'
                    
                />  
                { !show ?
                    <i onClick={handleShow} class="fa fa-eye showPassword" aria-hidden="true"></i>
                    :
                    <i onClick={handleShow1} class="fa fa-eye-slash showPassword" aria-hidden="true"></i>
                }
                </div>
            

            <button>Login</button>
            <p className='already'>Don't have an account <Link to={'/register'}>Register</Link></p>
        </form>

    </div>
    
        <div className='login-hero'>
            <img src='/image/show/show12.png' alt=''/>
            <div className='register-hero-desc'>
                <p>This is the first step to purchasing satisfaction!</p>
            </div>
        </div>
       
    
    </div>
  )
}

export default Login